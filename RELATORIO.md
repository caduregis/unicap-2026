# RELATÓRIO DE EXECUÇÃO — KIT COMPLETO

> **Projeto:** Preparação UNICAP 2026.2 — Direito
> **Candidato:** Carlos Régis
> **Data:** 15/05/2026
> **Skill:** estudos-max
> **Escopo:** kit de estudos completo (originalmente previsto em 4 execuções, produzido de uma vez a pedido do usuário)

---

## 1. STATUS: CONCLUÍDO

Todo o material de preparação foi criado. A prova é em **14/06/2026 (domingo)** — um único dia.

---

## 2. ARQUIVOS ENTREGUES (29 arquivos)

### Núcleo do projeto
| Arquivo | Conteúdo |
|---|---|
| `PLANO.md` | Diagnóstico, estratégia, cronograma diário (30 dias + prova), metas, checklist de eliminação |
| `edital-resumido.md` | Estrutura da prova, eliminação, desempate, conteúdo programático das 9 disciplinas |
| `cronograma.html` | Cronograma visual interativo com contador regressivo da prova |
| `progresso.json` | Estrutura de tracking (redações, simulados, tópicos, revisão espaçada, log) |
| `RELATORIO.md` | Este arquivo |

### Redação (`materiais/redacao/`)
| Arquivo | Conteúdo |
|---|---|
| `guia-redacao-unicap.md` | Critérios oficiais, estrutura parágrafo a parágrafo, 20 repertórios, checklist de norma |
| `temas-treinados/` | 5 temas (meio ambiente, desigualdade, tecnologia, saúde mental, educação) com redação modelo nota 1000 comentada |

### Linguagens (`materiais/linguagens/`)
- `portugues-resumo.md` — tipologia, interpretação, funções da linguagem, gramática aplicada
- `literatura-resumo.md` — escolas literárias, autores-chave, macetes de identificação
- `ingles-resumo.md` — estratégias de leitura, referência, gramática essencial
- `mapa-mental-literatura.svg` — linha do tempo das escolas literárias

### Ciências Humanas (`materiais/humanas/`)
- `historia-resumo.md` — História Geral e do Brasil
- `geografia-resumo.md` — os principais tópicos do edital
- `filosofia-resumo.md` — os filósofos cobrados (Sócrates a Foucault)
- `sociologia-resumo.md` — Marx, Durkheim, Weber, Escola de Frankfurt
- `atualidades.md` — caderno de atualidades (COP30, BRICS, conflitos, tecnologia)
- `mapa-mental-filosofia.svg` — mapa dos 4 períodos da filosofia

### Matemática (`materiais/matematica/`)
- `matematica-resumo.md` — prioridade de estudo + fórmulas essenciais
- `lista-resolvida.md` — 12 questões no estilo UNICAP resolvidas passo a passo

### Ciências da Natureza (`materiais/natureza/`)
- `biologia-resumo.md`, `quimica-resumo.md`, `fisica-resumo.md`
- `modelo-3d-celula.html` — célula animal 3D interativa (Three.js, organelas clicáveis)

### Materiais interativos e simulados
- `materiais/flashcards.html` — 31 flashcards de todas as áreas, com repetição espaçada e progresso salvo
- `materiais/quiz.html` — 20 questões diagnósticas com correção comentada
- `simulados/simulado-cronometrado.html` — motor de simulado de 5h, cartão-resposta de 64 questões, correção automática por área; **gabarito oficial 2026.1 já carregado**
- `simulados/COMO-USAR.md` — instruções para rodar os 4 simulados com as provas reais

---

## 3. DECISÕES IMPORTANTES

1. **Simulados usam provas reais.** Em vez de inventar 256 questões (risco de erro e baixa fidelidade), foi criado um **motor de simulado** que funciona com as provas reais da UNICAP em PDF (2026.1, 2025.2, 2024.2, 2025.1) que já estão na pasta Downloads. O gabarito oficial 2026.1 foi lido e embutido; os demais o candidato insere (estão nos PDFs de gabarito). Isso reproduz a banca com fidelidade total.
2. **Prioridade estratégica:** Redação > Linguagens > Matemática > Humanas > Natureza — segue a ordem de desempate da UNICAP para Direito.
3. **Conteúdo baseado nos PDFs oficiais.** Os resumos cobrem o conteúdo programático do edital; os exemplos e "como a banca cobra" vêm da prova 2026.1 lida integralmente. Nada foi inventado fora do edital.
4. **Materiais enxutos.** Resumos diretos, focados no que rende — não enciclopédias. O candidato tem 30 dias.

---

## 3.5 AJUSTES SESSÃO 15/05 (continuação)

| Arquivo | Alteração |
|---|---|
| `PLANO.md` seção 2.1, 2.2 e 3 | Priorização corrigida para: Redação > Humanas+Linguagens (gabaritar, mesmo nível) > Matemática+Natureza (não zerar, mesmo nível) |
| `galeria-mapas.html` | Adicionados links para: cronograma.html, simulado-cronometrado.html, flashcards.html, quiz.html, edital-resumido.md |
| `materiais/matematica/lista-resolvida.md` | Expandida de 12 para **40 questões** resolvidas (equações 2° grau, PG, estatística, combinatória, trigonometria, logaritmos, inequações, geometria espacial) |

---

## 4. OBSERVAÇÕES

- A pasta `estudos-unicap-direito-2026-2/` já continha arquivos de uma sessão anterior (`materiais/semana-1/`, `recursos/`, `redacao/trainer.html`, `simulado-diagnostico.html`, mapas HTML, dashboard). Esses arquivos **não foram apagados** — apenas o `PLANO.md` e o `progresso.json` foram sobrescritos com a versão deste escopo. Se quiser, dá para limpar os arquivos antigos depois para evitar duplicidade.
- O `PLANO.md` chegou a travar a gravação por estar aberto no Microsoft Word — evite manter os arquivos abertos em editores enquanto trabalha neles.
- "Dia 1 de 4" no prompt original referia-se a 4 execuções de montagem do material — não a dias de prova. Tudo foi unificado nesta entrega.

---

## 5. COMO COMEÇAR (para o candidato)

1. Abra o `cronograma.html` no navegador — veja o contador e o plano dos 30 dias.
2. Leia o `PLANO.md` e o `materiais/redacao/guia-redacao-unicap.md` por completo.
3. **Hoje (Dia 1):** estude `portugues-resumo.md` (tipologia textual) + `geografia-resumo.md` (cartografia).
4. Use os `flashcards.html` todo dia (15 min) e o `quiz.html` 1x por semana.
5. Nos dias 8, 16, 24 e 30: rode o `simulado-cronometrado.html` seguindo o `simulados/COMO-USAR.md`.
6. Atualize o `progresso.json` após cada sessão — é o que mostra sua evolução real.

---

## 6. RESUMO

Kit de preparação **completo e pronto para uso**: plano, edital resumido, materiais das 5 áreas (Redação, Linguagens, Humanas, Matemática, Natureza), modelo 3D, mapas mentais, flashcards, quiz, motor de simulado cronometrado e cronograma visual. Tudo baseado nos PDFs oficiais da UNICAP. O candidato tem 30 dias de estudo estruturado até a prova de 14/06/2026.
