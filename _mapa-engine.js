// ═══════════════════════════════════════════════════════════════════════
// MAPA ENGINE · UNICAP 2026.2 · Three.js 0.140.2 UMD
// Compartilhado entre todos os mapas. Cada mapa-X.html define MARCOS e TEMA
// e chama: window.MapaUnicap.start();
// ═══════════════════════════════════════════════════════════════════════

(function() {
  'use strict';

  window.addEventListener('error', function(e) {
    const d = document.createElement('div');
    d.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.97);color:#ff6666;padding:40px;font-family:Consolas,Monaco,monospace;font-size:13px;overflow:auto;white-space:pre-wrap;line-height:1.5';
    d.innerHTML = '<h1 style="color:#ff3333;font-family:Arial;font-size:22px;margin-bottom:18px">⚠️ ERRO</h1>' + (e.message || '') + '\n\nArquivo: ' + (e.filename || 'inline') + '\nLinha: ' + e.lineno;
    document.body.appendChild(d);
  });

  function start() {
    if (typeof THREE === 'undefined') { throw new Error('THREE não carregou. Verifique conexão com unpkg.com'); }
    if (!window.MARCOS || !window.TEMA) { throw new Error('MARCOS e TEMA devem ser definidos antes de chamar start()'); }

    const MARCOS = window.MARCOS;
    const TEMA = window.TEMA;
    const corHex = TEMA.corHex || '#00d4ff';
    const corHex2 = TEMA.corHex2 || '#0099cc';
    const cor = parseInt(corHex.replace('#',''), 16);
    const cor2 = parseInt(corHex2.replace('#',''), 16);
    const bgHex = TEMA.bg || '#04050a';
    const bg = parseInt(bgHex.replace('#',''), 16);
    const fogColor = bg;

    // Aplicar tema
    document.documentElement.style.setProperty('--tema', corHex);
    document.documentElement.style.setProperty('--tema-2', corHex2);
    document.documentElement.style.setProperty('--bg', bgHex);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(fogColor, 25, 110);

    const camera = new THREE.PerspectiveCamera(56, innerWidth/innerHeight, 0.1, 300);
    const CF = new THREE.Vector3(0, 8, 28);
    const CI = new THREE.Vector3(0, 30, 80);
    camera.position.copy(CI);

    const renderer = new THREE.WebGLRenderer({ antialias:true });
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(bg);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    document.getElementById('three-canvas').appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.minDistance = 12;
    controls.maxDistance = 80;
    controls.minPolarAngle = Math.PI*0.12;
    controls.maxPolarAngle = Math.PI*0.85;
    controls.target.set(0,0,0);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.22;
    controls.enablePan = false;
    controls.enabled = false;

    renderer.domElement.addEventListener('mousedown', () => document.body.classList.add('dragging'));
    renderer.domElement.addEventListener('mouseup', () => document.body.classList.remove('dragging'));

    // Estrelas
    const starGeo = new THREE.BufferGeometry();
    const NS = 1200;
    const sp = new Float32Array(NS*3);
    for (let i = 0; i < NS; i++) {
      const t = Math.random()*Math.PI*2;
      const ph = Math.acos(2*Math.random()-1);
      const r = 60 + Math.random()*80;
      sp[i*3] = r*Math.sin(ph)*Math.cos(t);
      sp[i*3+1] = r*Math.sin(ph)*Math.sin(t);
      sp[i*3+2] = r*Math.cos(ph);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0xffffff, size: 0.18, transparent: true, opacity: 0.8
    })));

    scene.add(new THREE.AmbientLight(0x303040, 0.55));
    scene.add(new THREE.PointLight(cor, 2.5, 50));
    const fl = new THREE.DirectionalLight(0xffffff, 0.4);
    fl.position.set(10, 20, 10);
    scene.add(fl);

    // Hub central
    const hubGroup = new THREE.Group();
    const hubShape = TEMA.hubForma || 'sphere';
    let hubGeo;
    if (hubShape === 'icosa') hubGeo = new THREE.IcosahedronGeometry(1.5, 0);
    else if (hubShape === 'octa') hubGeo = new THREE.OctahedronGeometry(1.5, 0);
    else if (hubShape === 'torus') hubGeo = new THREE.TorusKnotGeometry(1.3, 0.4, 128, 16);
    else hubGeo = new THREE.SphereGeometry(1.5, 48, 48);
    const hubCore = new THREE.Mesh(hubGeo, new THREE.MeshStandardMaterial({
      color: cor, emissive: cor, emissiveIntensity: 0.4, roughness: 0.2, metalness: 0.85
    }));
    hubGroup.add(hubCore);
    const hubW1 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.6, 1),
      new THREE.MeshBasicMaterial({ color: cor, wireframe: true, transparent: true, opacity: 0.4 })
    );
    hubGroup.add(hubW1);
    const hubW2 = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.8, 0),
      new THREE.MeshBasicMaterial({ color: cor2, wireframe: true, transparent: true, opacity: 0.18 })
    );
    hubGroup.add(hubW2);
    scene.add(hubGroup);

    // Planetas
    const R = 13;
    const planetas = [];
    const inter = [];
    const N = MARCOS.length;

    MARCOS.forEach(function(m, i) {
      const ang = m.ang !== undefined ? m.ang : (i / N) * Math.PI * 2;
      const x = Math.cos(ang) * R;
      const z = Math.sin(ang) * R;
      const y = (i % 2 === 0) ? 0.7 : -0.7;

      const g = new THREE.Group();
      g.position.set(x, y, z);
      scene.add(g);

      let geo;
      if (m.forma === 'icosa') geo = new THREE.IcosahedronGeometry(1.1, 0);
      else if (m.forma === 'dodeca') geo = new THREE.DodecahedronGeometry(1.1, 0);
      else if (m.forma === 'octa') geo = new THREE.OctahedronGeometry(1.2, 0);
      else if (m.forma === 'torus') geo = new THREE.TorusKnotGeometry(0.7, 0.22, 64, 8);
      else if (m.forma === 'tetra') geo = new THREE.TetrahedronGeometry(1.3, 0);
      else geo = new THREE.IcosahedronGeometry(1.1, 0);

      const corM = m.cor || cor;
      const pl = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        color: corM, emissive: corM, emissiveIntensity: 0.35, roughness: 0.3, metalness: 0.7
      }));
      pl.userData = { marco: m };
      g.add(pl);
      inter.push(pl);

      const anel = new THREE.Mesh(
        new THREE.RingGeometry(1.6, 1.95, 48),
        new THREE.MeshBasicMaterial({ color: corM, transparent: true, opacity: 0.35, side: THREE.DoubleSide })
      );
      anel.rotation.x = Math.PI/2.2 + i*0.12;
      anel.rotation.y = i*0.15;
      g.add(anel);

      g.add(new THREE.PointLight(corM, 0.7, 5));

      // Label
      const cv = document.createElement('canvas');
      cv.width = 384;
      cv.height = 92;
      const cx = cv.getContext('2d');
      const bgRgb = bg.toString(16).padStart(6, '0');
      cx.fillStyle = 'rgba(' + parseInt(bgRgb.slice(0,2), 16) + ',' + parseInt(bgRgb.slice(2,4), 16) + ',' + parseInt(bgRgb.slice(4,6), 16) + ',0.92)';
      cx.fillRect(0, 0, 384, 92);
      const hex = '#' + corM.toString(16).padStart(6, '0');
      cx.fillStyle = hex;
      cx.fillRect(0, 0, 384, 2);
      cx.fillRect(0, 90, 384, 2);
      cx.fillStyle = hex;
      cx.font = 'bold 16px JetBrains Mono';
      cx.textAlign = 'center';
      cx.fillText(m.cod, 192, 30);
      cx.fillStyle = '#fff';
      cx.font = 'bold 18px Inter, sans-serif';
      cx.fillText(m.nome.length > 28 ? m.nome.slice(0,26) + '…' : m.nome, 192, 64);
      const tex = new THREE.CanvasTexture(cv);
      tex.minFilter = THREE.LinearFilter;
      const lbl = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
      lbl.scale.set(4.6, 1.1, 1);
      lbl.position.set(0, 2.3, 0);
      g.add(lbl);

      // Linha
      const lp = [new THREE.Vector3(0,0,0), new THREE.Vector3(x, y, z)];
      scene.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(lp),
        new THREE.LineBasicMaterial({ color: corM, transparent: true, opacity: 0.18 })
      ));

      g.userData = {
        ang0: ang,
        y0: y,
        vO: 0.05 + Math.random()*0.03,
        vR: 0.4 + Math.random()*0.4,
        planeta: pl
      };
      planetas.push(g);
    });

    // Órbita visível
    scene.add(new THREE.Mesh(
      new THREE.RingGeometry(R - 0.04, R + 0.04, 128),
      new THREE.MeshBasicMaterial({ color: cor, transparent: true, opacity: 0.12, side: THREE.DoubleSide })
    ));

    // Raycaster
    const ray = new THREE.Raycaster();
    const mou = new THREE.Vector2();
    let hov = null;
    const tg = document.getElementById('tag');

    window.addEventListener('mousemove', function(e) {
      mou.x = (e.clientX / innerWidth) * 2 - 1;
      mou.y = -(e.clientY / innerHeight) * 2 + 1;
      if (tg) {
        tg.style.left = e.clientX + 'px';
        tg.style.top = e.clientY + 'px';
      }
    });

    window.addEventListener('click', function(e) {
      if (e.target.closest('.hud, .painel')) return;
      ray.setFromCamera(mou, camera);
      const h = ray.intersectObjects(inter);
      if (h.length > 0) abrirPainel(h[0].object.userData.marco, h[0].object.parent);
    });

    function abrirPainel(m, g) {
      document.getElementById('pc').textContent = m.cod;
      document.getElementById('pn').textContent = m.nome;
      document.getElementById('psb').textContent = m.sub || '';
      document.getElementById('pt').innerHTML = m.topicos.map(function(t) { return '<li>' + t + '</li>'; }).join('');
      document.getElementById('pr').textContent = m.resumo;
      document.getElementById('pd').textContent = m.dica;
      document.getElementById('painel').classList.add('open');
      const a = g.position.clone();
      tweenCam(camera.position.clone(), new THREE.Vector3(a.x*0.5+4, a.y+3, a.z*0.5+8), a, 1200);
    }

    window.fc = function() {
      document.getElementById('painel').classList.remove('open');
      tweenCam(camera.position.clone(), CF, new THREE.Vector3(0,0,0), 1200);
    };

    let tween = null;
    function tweenCam(f, t, l, d) {
      tween = {
        f: f.clone(),
        t: t.clone(),
        l: l.clone(),
        fT: controls.target.clone(),
        s: performance.now(),
        d: d
      };
      controls.enabled = false;
    }

    const resetBtn = document.getElementById('reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        tweenCam(camera.position.clone(), CF, new THREE.Vector3(0,0,0), 1400);
        document.getElementById('painel').classList.remove('open');
      });
    }

    const clock = new THREE.Clock();
    let entr = 0;
    const eIni = performance.now();

    function loop() {
      requestAnimationFrame(loop);
      const el = clock.getElapsedTime();
      const dt = clock.getDelta();
      const tN = performance.now();

      if (entr < 1) {
        entr = Math.min((tN - eIni) / 2800, 1);
        const e = 1 - Math.pow(1 - entr, 4);
        camera.position.lerpVectors(CI, CF, e);
        camera.lookAt(0, 0, 0);
        if (entr >= 1) {
          controls.enabled = true;
          controls.target.set(0, 0, 0);
        }
      }

      if (tween) {
        const t = Math.min((tN - tween.s) / tween.d, 1);
        const e = 1 - Math.pow(1 - t, 4);
        camera.position.lerpVectors(tween.f, tween.t, e);
        controls.target.lerpVectors(tween.fT, tween.l, e);
        if (t >= 1) {
          tween = null;
          controls.enabled = true;
        }
      }

      controls.update();

      hubGroup.rotation.y += dt * 0.15;
      hubW1.rotation.x += dt * 0.1;
      hubW2.rotation.x -= dt * 0.07;
      hubCore.material.emissiveIntensity = 0.4 + Math.sin(el * 1.4) * 0.15;

      planetas.forEach(function(p) {
        const u = p.userData;
        const a = u.ang0 + el * u.vO * 0.25;
        p.position.x = Math.cos(a) * R;
        p.position.z = Math.sin(a) * R;
        p.position.y = u.y0 + Math.sin(el * 0.5 + u.ang0 * 2) * 0.3;
        u.planeta.rotation.y += dt * u.vR;
        u.planeta.rotation.x += dt * u.vR * 0.4;
      });

      ray.setFromCamera(mou, camera);
      const h = ray.intersectObjects(inter);
      if (h.length > 0) {
        const obj = h[0].object;
        if (hov !== obj) {
          if (hov) hov.scale.set(1, 1, 1);
          hov = obj;
          hov.scale.set(1.3, 1.3, 1.3);
          if (tg) {
            document.getElementById('tc').textContent = obj.userData.marco.cod;
            document.getElementById('tn').textContent = obj.userData.marco.nome;
            tg.classList.add('show');
          }
          document.body.style.cursor = 'pointer';
        }
      } else {
        if (hov) {
          hov.scale.set(1, 1, 1);
          hov = null;
          if (tg) tg.classList.remove('show');
          document.body.style.cursor = '';
        }
      }

      renderer.render(scene, camera);
    }

    addEventListener('resize', function() {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    });

    loop();
    setTimeout(function() {
      const ld = document.getElementById('loader');
      if (ld) ld.classList.add('fade');
    }, 1400);
  }

  window.MapaUnicap = { start: start };
})();
