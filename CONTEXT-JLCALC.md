# Contexto para o Projeto jlcalc

Este documento serve de briefing para iniciar o projeto **jlcalc** — um portal de calculadoras online separado do site institucional jldatainfo.com.

---

## Decisão Arquitetural

O portal de calculadoras **não** será implementado dentro do site jldatainfo.com.
Será um projeto independente, hospedado em subdomínio (ex: `calc.jldatainfo.com` ou domínio próprio).

**Motivos:**
- jldatainfo.com é um site institucional de web dev/hospedagem
- O portal de calculadoras é um produto diferente com público diferente
- Separar permite autoridade temática focada no Google
- URLs limpas sem prefixo de idioma desnecessário (`/financas/juros-compostos`)
- Deploy, monetização e analytics independentes

---

## Stack Definida

| Item | Tecnologia |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript (strict) |
| React | 18 |
| Estilos | CSS vanilla com custom properties (mesma abordagem do jldatainfo) |
| Hosting | Hostinger (mesmo servidor, subdomínio) |
| Email | Nodemailer + SMTP Hostinger |
| Testes | A definir (Vitest recomendado) |
| Lint | ESLint + eslint-config-next |

**NÃO usar:** Tailwind (o requirements menciona, mas o projeto usa CSS vanilla com design tokens — manter consistência visual com jldatainfo).

---

## Design System (Reutilizar do jldatainfo)

Cores e tokens CSS:
```css
:root {
  --bg: #05070d;
  --bg-soft: #0a1020;
  --card: rgba(13, 20, 37, 0.88);
  --primary: #0d47ff;
  --primary-2: #1f6bff;
  --text: #f5f7ff;
  --muted: #b9c2dd;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  --radius: 18px;
  --radius-lg: 24px;
  --max-width: 1180px;
}
```

Padrões visuais a manter:
- Dark theme (navy/black)
- Cards com glassmorphism sutil
- Gradientes azuis nos CTAs
- Border radius 14-18px
- Font: Arial/Helvetica (sem webfont — performance)
- Animação reveal com IntersectionObserver
- Botões com hover translateY(-3px) + box-shadow
- Mobile-first, breakpoints: 560px, 820px, 860px, 980px

---

## Padrões de Código Aprendidos

### Componentes de calculadora (lições do jldatainfo)

**Problema identificado:** Cada calculadora no jldatainfo é monolítica (250+ linhas com labels, lógica, UI tudo junto).

**Solução para o jlcalc:**
- Criar motor reutilizável com componentes genéricos
- Separar: campos (config), fórmula (lógica pura), resultado (apresentação), conteúdo (SEO/FAQ)
- Uma nova calculadora deve ser principalmente configuração, não código novo

### Padrão de input com unidade

```tsx
// Funciona bem — usar "input-with-unit" (flex container)
<div className="input-with-unit">
  <input type="number" ... />
  <span>meses</span>
</div>

// Para prefixo (R$)
<div className="input-prefix">
  <span>R$</span>
  <input ... />
</div>
```

### Radio groups estilizados

```tsx
<div className="radio-group">
  <div className="radio-option">
    <input type="radio" id="x" ... />
    <label htmlFor="x">Label</label>
  </div>
</div>
```

### Resultado

```tsx
<div className="result-card">
  <div className="result-main">{valor}</div>
  <div className="result-label">MONTANTE FINAL</div>
  <div className="result-breakdown">
    <div className="result-row">
      <span className="r-label">Label</span>
      <span className="r-value">Valor</span>
    </div>
  </div>
</div>
```

---

## Diferenças em Relação ao jldatainfo

| Aspecto | jldatainfo | jlcalc |
|---------|-----------|--------|
| Idioma | Bilíngue (pt-br, en) | Apenas pt-BR no MVP |
| Homepage | Landing page institucional | Diretório de calculadoras |
| Roteamento | `[locale]/util/calculadora-x` | `/financas/juros-compostos` |
| i18n | Sistema completo com dicionários | Desnecessário no MVP |
| Conteúdo | Mínimo nas calculadoras | Editorial completo (FAQ, fórmulas, exemplos) |
| Testes | Nenhum | Obrigatório por calculadora |
| Analytics | Não implementado | GA4 com eventos por calculadora |
| SEO | Metadata global genérica | Metadata individual por página |

---

## Estrutura de URLs (Final)

```
/                           ← diretório de calculadoras
/financas/                  ← categoria
/financas/juros-compostos   ← calculadora
/financas/financiamento-imobiliario
/trabalho/
/trabalho/salario-liquido
/automoveis/consumo-combustivel
/matematica/porcentagem
/negocios/margem-lucro
/sobre
/contato
/politica-de-privacidade
/termos-de-uso
```

**Sem trailing slash.** Sem prefixo de idioma.

---

## Componentes Reutilizáveis a Criar (Fase 1)

Obrigatórios antes da primeira calculadora:
- `CalculatorLayout` — wrapper com breadcrumb, H1, intro, formulário, resultado, FAQ, relacionadas, banners
- `CalculatorInput` / `CurrencyInput` / `PercentageInput` — inputs tipados com validação
- `ResultCard` / `ResultGrid` — apresentação de resultados
- `Breadcrumb`
- `FAQ` — schema.org automático
- `AdSlot` — posicionável e configurável
- `Disclaimer` — aviso legal reutilizável
- `RelatedCalculators` — links contextuais
- `ShareButtons` — WhatsApp, copiar link

---

## Arquivo de Referência

O `requirements.md` que está neste mesmo repositório (`c:\Projetos\jldatainfo\requirements.md`) contém todas as especificações completas. Copiar para o novo projeto.

---

## Checklist para Iniciar o jlcalc

1. [ ] Criar repositório `jlcalc` no GitHub
2. [ ] `npx create-next-app@14 jlcalc --typescript --app --src-dir --no-tailwind`
3. [ ] Copiar `requirements.md` para o projeto
4. [ ] Copiar este `CONTEXT-JLCALC.md` como referência
5. [ ] Copiar design tokens CSS (`:root` variables + componentes base)
6. [ ] Configurar SMTP no `.env.local` (mesmas credenciais Hostinger)
7. [ ] Criar o motor reutilizável de calculadoras (Fase 1)
8. [ ] Primeira calculadora: Juros Compostos
9. [ ] Configurar subdomínio na Hostinger (`calc.jldatainfo.com`)
10. [ ] Instalar Vitest para testes

---

## O Que NÃO Copiar do jldatainfo

- Sistema de i18n (desnecessário)
- Homepage institucional (hero, portfólio, serviços)
- Componentes bilíngues com `isPtBr ? ... : ...`
- Labels hardcoded dentro dos componentes de calculadora
- Arquivos `pages-old/` (HTML estático legado)

---

## Monetização — Configurar Desde o Início

- Slots de AdSense em posições estratégicas (entre resultado e FAQ, lateral em desktop, entre seções)
- Preparar componente de afiliados (financiamento → bancos, energia solar → instaladores)
- Preparar captura de leads para categorias de alto valor (financiamento, consórcio, energia solar)
- Não colocar anúncio sobre inputs ou próximo de botões

---

## Prioridade de Implementação

**Fase 1:** Fundação + Motor + Juros Compostos + Financiamento Imobiliário + Salário Líquido + Porcentagem + Financiamento de Veículos

**Fase 2:** Empréstimo, Investimentos, Consórcio, Juros Simples, CDI, IR, Correção Monetária

**Fase 3:** Rescisão, FGTS, Férias, 13º, CLT x PJ

**Fase 4:** Energia Solar, Combustível, Margem de Lucro
