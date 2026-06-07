# Relatório de Auditoria — UNICAP 2026.2

**Data da auditoria:** 19/05/2026 (D-26 da prova 14/06/2026)
**Candidato:** Carlos Régis · Direito Manhã UNICAP
**Arquivos auditados:** todos os HTML exceto `dashboard.html` e `cronograma.html`

---

## Bugs críticos corrigidos

### 1. `materiais/semana-1/redacao-estrutura/quiz.html` — CRÍTICO
**Problema:** Questão 12 tinha `a:'[...string JSON...].split('|')` — string sem nenhum caractere `|`, resultando em array de 1 elemento (a string inteira como texto). A questão mostrava apenas uma alternativa ilegível e nunca podia ser acertada.
**Correção:** Substituído por array JavaScript literal com as 5 alternativas corretas.

### 2. `redacao/trainer.html` — CRÍTICO
**Problema:** Model da API Anthropic configurado como `claude-sonnet-4-5` (inexistente/obsoleto).
**Correção:** Atualizado para `claude-sonnet-4-6`.

---

## Dados dinâmicos — datas hardcoded corrigidas

### 3. `plano.html`
**Problemas:**
- Subtitle "Direito · 32 dias" hardcoded (já tinha `id="subtituloDias"` da sessão anterior)
- Candidato: `D-32` hardcoded em `.mono`
- CTA final: "32 dias dá" hardcoded
- Footer: "Sprint 32 dias · gerado em 13/05/2026" estático

**Correções:** Todos os 4 pontos agora usam a variável `diasRestantes` já computada pelo JS existente (`new Date('2026-06-14T08:00:00')`) e são injetados dinamicamente via `getElementById`.

### 4. `galeria-mapas.html`
**Problemas:**
- Stats: `<div class="v gold">32</div>` hardcoded
- Footer: "29 mapas 3D" (incorreto — são 25 mapas)

**Correções:** Contador de dias agora dinâmico via IIFE JS; footer corrigido para "25 mapas 3D".

### 5. `mapa-unicap-mestre.html`
**Problema:** `<span class="badge">D-32 · Prova 14 jun 2026</span>` hardcoded.
**Correção:** Badge recebeu `id="badgeDias"` e um IIFE JS o atualiza dinamicamente ao carregar.

### 6. `materiais/semana-1/index.html`
**Problema:** Footer com `D-32 da UNICAP 2026.2` hardcoded.
**Correção:** Span com `id="footerDiasSem1"` preenchido por script inline.

---

## Visual upgrades — identidade visual do projeto

Arquivos que usavam `font-family:'Segoe UI'`, `background:#0f1428` sem glassmorphism foram atualizados para Inter/JetBrains Mono, fundo `#04050a`/`#0a0e1a`, glassmorphism (`backdrop-filter:blur`, `rgba` backgrounds, `border:1px solid rgba(0,212,255,...)`), paleta cyan `#00d4ff` e amber `#ffb800`.

### 7. `simulados/simulado-cronometrado.html`
CSS completamente reconstruído preservando 100% da lógica JS (gabarito 2026.1, cronômetro, cartão-resposta, correção). Fontes Google (Inter + JetBrains Mono) adicionadas via `<link>`.

### 8. `materiais/flashcards.html`
CSS completamente reconstruído. Link "← Dashboard" adicionado ao topo. Botões SM-2 agora com cores semi-transparentes no tema do projeto. Toda lógica JS preservada.

### 9. `materiais/quiz.html`
CSS completamente reconstruído. Link "← Dashboard" adicionado. Barra de progresso agora usa gradiente cyan. Toda lógica JS preservada.

### 10. `materiais/natureza/modelo-3d-celula.html`
CSS alinhado ao projeto: border do painel agora `rgba(0,212,255,0.20)` em vez de azul `#2d6cdf`; botões glassmorphism; fontes Inter/JetBrains Mono. Link "← Dashboard" adicionado ao `#topo`. Funcionalidade Three.js v0.160.0 ES module preservada integralmente.

---

## Arquivos sem problemas (auditados, nenhuma modificação necessária)

| Arquivo | Status |
|---|---|
| `_mapa-engine.css` | OK — CSS base correto |
| `_mapa-engine.js` | OK — engine Three.js funcional |
| `simulados/simulado-diagnostico.html` | OK — visual e lógica corretos |
| `materiais/semana-1/filosofia-politica/flashcards.html` | OK |
| `materiais/semana-1/filosofia-politica/quiz.html` | OK |
| `materiais/semana-1/portugues/flashcards.html` | OK |
| `materiais/semana-1/portugues/quiz.html` | OK |
| `materiais/semana-1/ingles/flashcards.html` | OK |
| `materiais/semana-1/ingles/quiz.html` | OK |
| `materiais/semana-1/literatura-classica/flashcards.html` | OK |
| `materiais/semana-1/literatura-classica/quiz.html` | OK |
| `materiais/semana-1/redacao-estrutura/flashcards.html` | OK |
| Todos os 25 `mapa-*.html` | OK — seguem padrão do engine corretamente |

---

## Inconsistências notadas (não corrigidas — nenhuma ação necessária)

- **`materiais/natureza/modelo-3d-celula.html`** usa Three.js v0.160.0 (ES modules) enquanto os demais usam v0.140.2 (UMD). Isso é válido — ES modules são mais modernos e a funcionalidade está correta. Não é bug.
- **`materiais/semana-1/index.html`** cabeçalho `h1` ainda menciona "13-19 de maio" (semana já concluída). Deixado como está — é um documento histórico da semana 1 que já passou; alterar causaria perda de contexto.
- **`plano.html` seção MICRO** — datas da semana 1 (13-19 mai) já passaram. O cronograma macro de 5 semanas segue válido. Não alterado pois é dado histórico do planejamento.

---

## Arquivos possivelmente redundantes

Nenhum arquivo identificado como redundante. Todos têm função distinta:
- `materiais/flashcards.html` e `materiais/quiz.html` são os exercícios gerais (multi-área), distintos dos específicos por semana/tópico.
- `simulados/simulado-cronometrado.html` e `simulados/simulado-diagnostico.html` servem propósitos diferentes (simulado completo 5h vs diagnóstico 20q).

---

## Resumo de modificações por arquivo

| Arquivo | Modificações |
|---|---|
| `plano.html` | 4 pontos dinâmicos (subtitle, candidato D-xx, CTA, footer) |
| `galeria-mapas.html` | Dias dinâmico + footer "25 mapas" |
| `mapa-unicap-mestre.html` | Badge D-xx dinâmico |
| `materiais/semana-1/index.html` | Footer D-xx dinâmico |
| `materiais/semana-1/redacao-estrutura/quiz.html` | CRITICAL: Q12 array corrigido |
| `redacao/trainer.html` | Model API: 4-5 → 4-6 |
| `simulados/simulado-cronometrado.html` | Visual rebuild completo |
| `materiais/flashcards.html` | Visual rebuild + link dashboard |
| `materiais/quiz.html` | Visual rebuild + link dashboard |
| `materiais/natureza/modelo-3d-celula.html` | Visual alinhamento + link dashboard |
