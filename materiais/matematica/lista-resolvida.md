# MATEMÁTICA — LISTA RESOLVIDA PASSO A PASSO

> 40 questões no estilo UNICAP (contextualizadas), resolvidas com o raciocínio completo.
> Cubra a resolução, tente sozinho, depois confira. Foco nos tópicos de maior retorno.
> Tópicos: %, regra de 3, funções (1°/2° grau), PA/PG, geometria plana e espacial, probabilidade, combinatória, estatística, trigonometria, logaritmos, juros, inequações.

---

## Q1 — Porcentagem (descontos sucessivos)
**Uma campanha reduziu o uso de copos descartáveis em 25% no 1º mês e mais 20% no 2º mês. Qual a redução total?**

Resolução:
- Restam após o 1º mês: 100% − 25% = 75% → fator 0,75
- Restam após o 2º mês: −20% sobre o que sobrou → fator 0,80
- Fator total: 0,75 × 0,80 = 0,60 → restam 60%
- Redução total: 100% − 60% = **40%**

> Erro comum: somar 25% + 20% = 45%. Percentuais sucessivos se MULTIPLICAM, não se somam.

---

## Q2 — Regra de 3 inversa
**6 torneiras enchem um tanque em 8 horas. Em quanto tempo 4 torneiras encheriam o mesmo tanque?**

Resolução:
- Menos torneiras → mais tempo = grandezas **inversamente** proporcionais.
- Inversa: multiplica "na linha". 6 × 8 = 4 × x
- 48 = 4x → **x = 12 horas**

---

## Q3 — Média aritmética
**As três notas de um aluno, em ordem crescente, satisfazem: média das duas menores = 7,0; média das duas maiores = 9,0; a nota do meio é a média das três. Qual a soma das três notas?**

Resolução:
- Notas a ≤ b ≤ c.
- (a+b)/2 = 7 → a+b = 14
- (b+c)/2 = 9 → b+c = 18
- b = (a+b+c)/3 → 3b = a+b+c → 2b = a+c
- De a+b=14: a = 14−b. De b+c=18: c = 18−b. Então a+c = 32−2b.
- Como 2b = a+c → 2b = 32−2b → 4b = 32 → b = 8
- a = 6, c = 10. Soma = 6+8+10 = **24**

---

## Q4 — Função do 1º grau (modelagem)
**Um táxi cobra R$ 5,00 fixos + R$ 1,50 por km. Para cada km pedalado de bike antes, o passageiro ganha R$ 0,50 de desconto. Se pedalou x km e o trajeto de táxi é (10 − x) km, qual a função do valor pago?**

Resolução:
- Custo do táxi: 5 + 1,50·(10 − x) = 5 + 15 − 1,5x = 20 − 1,5x
- Desconto pelo pedal: 0,50·x
- Valor pago: f(x) = (20 − 1,5x) − 0,5x = **20 − 2x**

---

## Q5 — Juros simples
**Um capital de R$ 2.000 é aplicado a juros simples de 2% ao mês durante 6 meses. Qual o montante?**

Resolução:
- J = C·i·t = 2000 × 0,02 × 6 = R$ 240
- Montante M = C + J = 2000 + 240 = **R$ 2.240**

---

## Q6 — Probabilidade
**Numa caixa há 7 bolas numeradas de 1 a 7. Sete jogadores tiram uma bola cada, sem reposição. Qual a probabilidade de o 1º jogador tirar a bola nº 1?**

Resolução:
- O 1º jogador tem 7 bolas possíveis, 1 favorável.
- P = 1/7.
- (Curiosidade: por simetria, TODOS os 7 jogadores têm a mesma probabilidade 1/7 — o sorteio é justo.)
- Resposta: **1/7**

---

## Q7 — Geometria: círculo inscrito
**Um triângulo retângulo tem lados 6, 8 e 10. O raio da circunferência inscrita = área ÷ semiperímetro. Qual o raio?**

Resolução:
- Área do triângulo retângulo = (6 × 8)/2 = 24
- Semiperímetro = (6 + 8 + 10)/2 = 12
- Raio = área ÷ semiperímetro = 24 ÷ 12 = **2,0**

---

## Q8 — Progressão Aritmética
**Pontos de hidratação estão a 7, 23, 39, 55... hm da largada (PA de razão 16). Que distância um atleta percorre ao passar pelo 10º ponto e ainda andar 900 m até a chegada? (1 hm = 100 m)**

Resolução:
- a₁ = 7, razão r = 16. Termo 10: a₁₀ = 7 + (10−1)·16 = 7 + 144 = 151 hm
- 151 hm = 15.100 m
- Total = 15.100 + 900 = 16.000 m = **16 km**

---

## Q9 — Sistema linear
**Maria tem 3 lâmpadas + 1 ar-condicionado e paga R$ 190. João tem 5 lâmpadas + 1 ar-condicionado e paga R$ 250. Qual o custo de uma lâmpada?**

Resolução:
- Seja L = lâmpada, A = ar-condicionado.
- 3L + A = 190
- 5L + A = 250
- Subtraindo a 1ª da 2ª: 2L = 60 → **L = R$ 30**

---

## Q10 — Geometria espacial (volume da esfera)
**O volume de uma esfera é 36π m³. Qual a distância entre dois pontos antípodas (= o diâmetro)?**

Resolução:
- V = (4/3)·π·r³ = 36π → (4/3)·r³ = 36 → r³ = 27 → r = 3
- Diâmetro = 2·r = **6 m**

---

## Q11 — Porcentagem com imposto
**Um prêmio de US$ 100.000 tem 30% retido nos EUA. No Brasil a alíquota é 27,5%, compensável com o que já foi pago. Cotação US$ 1 = R$ 5,50. Qual o valor líquido em reais?**

Resolução:
- Imposto pago nos EUA: 30% > 27,5% brasileiro → como já pagou mais que o devido no Brasil, NÃO paga nada a mais aqui.
- Valor líquido = 100.000 − 30% = 70.000 dólares
- Em reais: 70.000 × 5,50 = **R$ 385.000**

---

## Q12 — Pitágoras aplicado
**Um cachorro está no ponto (6, 4) e o coelho está a 12 unidades da origem, sobre o eixo y. Qual a distância entre eles?**

Resolução:
- Coelho no eixo y a 12 da origem → ponto (0, 12).
- Distância entre (6,4) e (0,12): d = √[(6−0)² + (4−12)²] = √[36 + 64] = √100 = **10**

---

---

## Q13 — Equação do 2º grau (raízes)
**A área de um terreno retangular é 60 m². O comprimento é 7 m maior que a largura. Quais as dimensões?**

Resolução:
- Largura = x, comprimento = x + 7.
- x·(x + 7) = 60 → x² + 7x − 60 = 0
- Δ = 49 + 240 = 289 → √289 = 17
- x = (−7 + 17)/2 = 5. (descarta negativo)
- Largura = **5 m**, comprimento = **12 m**.

> Verificação: 5 × 12 = 60 ✓ e 12 − 5 = 7 ✓

---

## Q14 — Função do 2º grau (vértice e raízes)
**Um projétil sobe h(t) = −5t² + 20t metros em t segundos. Qual a altura máxima e quando é atingida?**

Resolução:
- Coeficientes: a = −5, b = 20, c = 0.
- Tempo do vértice: t_v = −b/(2a) = −20/(2·(−5)) = **2 s**
- Altura máxima: h(2) = −5·4 + 20·2 = −20 + 40 = **20 m**

> Dica: parabola com a < 0 abre para baixo → vértice é o MÁXIMO.

---

## Q15 — Progressão Geométrica
**Uma bactéria se divide a cada hora, dobrando o número. Se às 8h havia 100 bactérias, quantas há às 11h?**

Resolução:
- PG com a₁ = 100, razão q = 2, 3 períodos de 1h.
- a₄ = a₁·q³ = 100·2³ = 100·8 = **800 bactérias**

> Fórmula geral da PG: aₙ = a₁·qⁿ⁻¹

---

## Q16 — Juros compostos
**R$ 1.000 são aplicados a 10% ao mês de juros compostos. Qual o montante após 3 meses?**

Resolução:
- M = C·(1 + i)ⁿ = 1000·(1,10)³
- (1,10)² = 1,21; (1,10)³ = 1,10·1,21 = 1,331
- M = 1000 × 1,331 = **R$ 1.331**

> Diferença: juros simples dariam 1000 + 300 = R$ 1.300. Compostos: R$ 1.331 (juros sobre juros).

---

## Q17 — Estatística: média, mediana, moda
**Notas de 7 alunos: 4, 7, 6, 8, 7, 9, 5. Calcule média, mediana e moda.**

Resolução:
- Ordenadas: 4, 5, 6, **7**, 7, 8, 9
- Média: (4+5+6+7+7+8+9)/7 = 46/7 ≈ **6,57**
- Mediana (elemento central, n=7 → posição 4): **7**
- Moda (mais frequente): **7** (aparece 2 vezes)

---

## Q18 — Geometria: trapézio
**Um trapézio tem bases 10 cm e 6 cm, e altura 4 cm. Qual a área?**

Resolução:
- A = (B + b)/2 · h = (10 + 6)/2 · 4 = 8 · 4 = **32 cm²**

---

## Q19 — Geometria: losango
**Um losango tem diagonais de 12 cm e 8 cm. Qual a área? E o lado?**

Resolução:
- Área: A = (D·d)/2 = (12·8)/2 = **48 cm²**
- Cada triângulo formado pela metade das diagonais: catetos 6 e 4.
- Lado = √(6² + 4²) = √(36+16) = √52 = 2√13 ≈ **7,2 cm**

---

## Q20 — Probabilidade: dados
**Dois dados são lançados. Qual a probabilidade de a soma ser 7?**

Resolução:
- Total de resultados: 6 × 6 = 36
- Pares que somam 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 pares
- P(soma = 7) = 6/36 = **1/6 ≈ 16,7%**

> Soma 7 é a mais provável em 2 dados!

---

## Q21 — Combinatória: combinação
**Uma comissão de 3 membros será formada de um grupo de 7 pessoas. Quantas comissões diferentes existem?**

Resolução:
- C(7,3) = 7!/(3!·4!) = (7·6·5)/(3·2·1) = 210/6 = **35 comissões**

---

## Q22 — Trigonometria (ângulos notáveis)
**Uma rampa de acessibilidade faz 30° com o solo. Para subir 1,5 m de altura, qual o comprimento da rampa? (sen 30° = 0,5)**

Resolução:
- sen(30°) = altura/rampa → 0,5 = 1,5/r → r = 1,5/0,5 = **3 m**

> Ângulos notáveis para decorar: sen 30°=0,5; sen 45°=√2/2≈0,71; sen 60°=√3/2≈0,87

---

## Q23 — Regra de 3 composta
**4 máquinas fabricam 200 peças em 5 horas. Quantas peças 6 máquinas fabricam em 3 horas?**

Resolução:
- Máquinas: 4 → 200 / 6 → x (direto: mais máquinas, mais peças)
- Horas: 5 → x / 3 → x (direto: mais horas, mais peças)
- x = 200 · (6/4) · (3/5) = 200 · 1,5 · 0,6 = **180 peças**

---

## Q24 — MMC e MDC
**Dois sinais de trânsito piscam a cada 12 s e 18 s respectivamente. Começaram juntos. Após quantos segundos voltarão a piscar juntos?**

Resolução:
- MMC(12, 18): 12 = 2²·3; 18 = 2·3²
- MMC = 2²·3² = 36 → piscam juntos a cada **36 s**

---

## Q25 — Domínio de função
**f(x) = √(x − 3). Qual o domínio (conjunto dos x onde f é definida)?**

Resolução:
- Raiz quadrada exige argumento ≥ 0: x − 3 ≥ 0 → x ≥ 3
- Domínio: **[3, +∞)** ou {x ∈ ℝ | x ≥ 3}

---

## Q26 — Geometria: setor circular
**Uma pizza tem diâmetro 30 cm e é cortada em 8 fatias iguais. Qual a área de cada fatia? (π ≈ 3,14)**

Resolução:
- Área total: A = π·r² = 3,14·15² = 3,14·225 = 706,5 cm²
- Cada fatia: 706,5/8 = **88,3 cm²**

---

## Q27 — Potenciação e radiciação
**Simplifique: (√5 + √3)·(√5 − √3)**

Resolução:
- Produto da soma pela diferença: (a+b)(a−b) = a² − b²
- (√5)² − (√3)² = 5 − 3 = **2**

---

## Q28 — Matrizes e determinante
**Calcule o determinante: |3  1|**
**                          |5  2|**

Resolução:
- Det = (3·2) − (1·5) = 6 − 5 = **1**

> Regra: det de matriz 2×2 = ad − bc. Para 3×3, use Sarrus.

---

## Q29 — Logaritmos
**Resolva: log₂(x) = 5**

Resolução:
- log₂(x) = 5 ↔ x = 2⁵ = **32**

> Propriedade: log_b(x) = y ↔ bʸ = x

---

## Q30 — Probabilidade condicional
**Numa turma: 60% praticam esporte; dos que praticam, 70% tiram nota ≥ 7. Qual a probabilidade de um aluno praticar esporte E tirar ≥ 7?**

Resolução:
- P(esporte) = 0,60; P(≥7 | esporte) = 0,70
- P(esporte E ≥7) = 0,60 × 0,70 = **0,42 = 42%**

---

## Q31 — Geometria espacial: cilindro
**Um tanque cilíndrico tem raio 3 m e altura 4 m. Qual seu volume em m³? (π ≈ 3,14)**

Resolução:
- V = π·r²·h = 3,14·9·4 = **113,04 m³**

---

## Q32 — Geometria espacial: cone
**Um cone tem raio da base 6 cm e altura 8 cm. Qual o volume? (π ≈ 3,14)**

Resolução:
- V = (1/3)·π·r²·h = (1/3)·3,14·36·8 = (1/3)·904,32 = **301,44 cm³**

> Lembre: cone = 1/3 do cilindro de mesma base e altura.

---

## Q33 — Porcentagem: lucro e prejuízo
**Um produto comprado por R$ 400 foi vendido por R$ 460. Qual o percentual de lucro?**

Resolução:
- Lucro = 460 − 400 = R$ 60
- % lucro = (60/400) × 100 = **15%**

---

## Q34 — Função composta
**f(x) = 2x + 1 e g(x) = x². Calcule g(f(3)).**

Resolução:
- Passo 1: f(3) = 2·3 + 1 = 7
- Passo 2: g(7) = 7² = **49**

> g(f(x)) lê-se "g de f de x" — aplique de dentro para fora.

---

## Q35 — Inequação do 1º grau
**Um estudante precisa de média ≥ 7,0 em 3 provas. Tirou 6,0 e 8,0 nas primeiras. Qual nota mínima na terceira?**

Resolução:
- (6 + 8 + x)/3 ≥ 7 → 14 + x ≥ 21 → x ≥ 7
- Nota mínima: **7,0**

---

## Q36 — Sistema 2×2 (substituição)
**2x + y = 11 e x − y = 1. Encontre x e y.**

Resolução:
- Da 2ª equação: x = y + 1
- Substitui na 1ª: 2(y+1) + y = 11 → 2y + 2 + y = 11 → 3y = 9 → y = 3
- x = 3 + 1 = 4
- Solução: **(x=4, y=3)**. Verificação: 2·4+3=11 ✓; 4−3=1 ✓

---

## Q37 — Geometria analítica
**Dois pontos: A(−2, 1) e B(4, 5). Calcule: (a) distância AB; (b) ponto médio.**

Resolução:
- (a) d = √[(4−(−2))² + (5−1)²] = √[36 + 16] = √52 = 2√13 ≈ **7,2**
- (b) M = ((−2+4)/2, (1+5)/2) = **(1, 3)**

---

## Q38 — Estatística: desvio
**Dados: 2, 4, 4, 4, 5, 5, 7, 9. Média = 5. Calcule a variância.**

Resolução:
- Desvios ao quadrado: (2−5)²=9, (4−5)²=1 (×3=3), (5−5)²=0 (×2=0), (7−5)²=4, (9−5)²=16
- Soma: 9 + 3 + 0 + 0 + 4 + 16 = 32
- Variância = 32/8 = **4**. Desvio padrão = √4 = **2**

---

## Q39 — PG: soma dos termos
**Uma PG tem a₁ = 3, razão q = 2 e 5 termos. Qual a soma?**

Resolução:
- Sₙ = a₁·(qⁿ − 1)/(q − 1) = 3·(2⁵ − 1)/(2 − 1) = 3·31/1 = **93**
- Verificação: 3 + 6 + 12 + 24 + 48 = 93 ✓

---

## Q40 — Questão integrada (% + função + proporção)
**Um candidato precisa de 60% dos votos válidos. Há 12.000 votos válidos e 800 votos brancos/nulos (inválidos). Ele recebeu 6.500 votos. Foi eleito? Por quantos votos passou (ou faltou)?**

Resolução:
- Total de votos = 12.000 + 800 = 12.800; válidos = 12.000.
- Meta: 60% de 12.000 = 7.200 votos.
- Recebeu 6.500 votos.
- 6.500 < 7.200 → **Não foi eleito**. Faltaram 700 votos.

---

## COMO USAR ESTA LISTA
1. Tente cada questão sozinho, cronometrando ~4 min cada.
2. Confira a resolução. Errou? Volte ao tópico no `matematica-resumo.md`.
3. Registre no `progresso.json` quais tópicos erraram mais.
4. Refaça as erradas após 3 dias (revisão espaçada).
5. **Prioridade UNICAP:** Q1–Q6 (%, proporção, média, função, juros, prob.) caem praticamente sempre.
