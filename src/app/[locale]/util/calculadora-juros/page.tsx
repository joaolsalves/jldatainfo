"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { type Locale, getDictionary } from "@/lib/i18n";
import Link from "next/link";

export default function InterestCalculatorPage() {
  const params = useParams();
  const locale = ((params?.locale as string) || "pt-br") as Locale;
  const dict = getDictionary(locale);
  const isPtBr = locale === "pt-br";

  const [capital, setCapital] = useState("1000");
  const [aporte, setAporte] = useState("500");
  const [taxa, setTaxa] = useState("1");
  const [periodo, setPeriodo] = useState<"mensal" | "anual">("mensal");
  const [prazoAnos, setPrazoAnos] = useState("2");
  const [prazoMeses, setPrazoMeses] = useState("0");
  const [result, setResult] = useState<{
    total: number; capitalIni: number; totalInvestido: number; totalJuros: number; rendimento: number;
    chart: { label: string; total: number; invested: number }[];
  } | null>(null);

  function fmt(v: number) {
    return isPtBr
      ? v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      : v.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function calcular() {
    const cap = parseFloat(capital) || 0;
    const ap = parseFloat(aporte) || 0;
    let tx = parseFloat(taxa) || 0;
    const anos = parseInt(prazoAnos) || 0;
    const mesesExtra = parseInt(prazoMeses) || 0;
    const meses = anos * 12 + mesesExtra;

    if (meses <= 0 || tx <= 0) {
      alert(isPtBr ? "Informe valores válidos para taxa e prazo." : "Please enter valid rate and period values.");
      return;
    }

    tx = periodo === "anual" ? Math.pow(1 + tx / 100, 1 / 12) - 1 : tx / 100;

    const fator = Math.pow(1 + tx, meses);
    const total = cap * fator + (tx > 0 ? ap * ((fator - 1) / tx) : ap * meses);
    const totalInvestido = cap + ap * meses;
    const totalJuros = total - totalInvestido;
    const rendimento = totalInvestido > 0 ? (totalJuros / totalInvestido) * 100 : 0;

    // Build chart
    const steps = Math.min(12, meses);
    const step = Math.ceil(meses / steps);
    const milestones: number[] = [];
    for (let m = step; m <= meses; m += step) milestones.push(m);
    if (milestones[milestones.length - 1] !== meses) milestones.push(meses);

    const chart = milestones.map((m) => {
      const f = Math.pow(1 + tx, m);
      const t = cap * f + (tx > 0 ? ap * ((f - 1) / tx) : ap * m);
      const inv = cap + ap * m;
      let label: string;
      if (meses > 24) {
        label = m % 12 === 0 ? (isPtBr ? `Ano ${m / 12}` : `Year ${m / 12}`) : `${m}m`;
      } else {
        label = isPtBr ? `${m} ${m === 1 ? "mês" : "meses"}` : `${m} ${m === 1 ? "month" : "months"}`;
      }
      return { label, total: t, invested: inv };
    });

    setResult({ total, capitalIni: cap, totalInvestido, totalJuros, rendimento, chart });
  }

  // Labels
  const labels = isPtBr ? {
    back: "← Voltar para Utilitários",
    eyebrow: "Utilitários",
    title: "💰 Calculadora de Juros Compostos",
    subtitle: "Simule o crescimento do seu investimento com capital inicial, aportes mensais e juros compostos.",
    params: "Parâmetros",
    capitalLabel: "Capital inicial",
    aporteLabel: "Aporte mensal",
    aporteHint: "Deixe 0 para nenhum aporte adicional.",
    taxaLabel: "Taxa de juros",
    periodoLabel: "Período da taxa",
    mensal: "Mensal",
    anual: "Anual",
    prazoLabel: "Prazo",
    anos: "anos",
    meses: "meses",
    prazoHint: "Preencha anos, meses ou ambos. Ex: 1 ano + 6 meses = 18 meses.",
    calcBtn: "Calcular",
    resultado: "Resultado",
    emptyIcon: "📈",
    emptyText: "Preencha os parâmetros e clique em Calcular para ver a projeção.",
    montanteFinal: "Montante final",
    capitalIni: "Capital inicial",
    totalInvestido: "Total investido",
    totalJuros: "Total em juros",
    rendimento: "Rendimento",
    evolucao: "Evolução por período",
    prefix: "R$",
  } : {
    back: "← Back to Utilities",
    eyebrow: "Utilities",
    title: "💰 Compound Interest Calculator",
    subtitle: "Simulate investment growth with initial capital, monthly contributions and compound interest.",
    params: "Parameters",
    capitalLabel: "Initial capital",
    aporteLabel: "Monthly contribution",
    aporteHint: "Leave 0 for no additional contributions.",
    taxaLabel: "Interest rate",
    periodoLabel: "Rate period",
    mensal: "Monthly",
    anual: "Annual",
    prazoLabel: "Period",
    anos: "years",
    meses: "months",
    prazoHint: "Fill years, months or both. E.g.: 1 year + 6 months = 18 months.",
    calcBtn: "Calculate",
    resultado: "Result",
    emptyIcon: "📈",
    emptyText: "Fill in the parameters and click Calculate to see the projection.",
    montanteFinal: "Final amount",
    capitalIni: "Initial capital",
    totalInvestido: "Total invested",
    totalJuros: "Total interest",
    rendimento: "Return",
    evolucao: "Growth over time",
    prefix: "$",
  };

  return (
    <main>
      <div className="calc-page">
        <div className="container">
          <Link href={`/${locale}/util`} className="back-link">{labels.back}</Link>

          <div className="section-heading" style={{ textAlign: "left", marginBottom: "32px", maxWidth: "100%" }}>
            <div className="eyebrow">{labels.eyebrow}</div>
            <h1 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: "10px" }}>{labels.title}</h1>
            <p style={{ maxWidth: "60ch" }}>{labels.subtitle}</p>
          </div>

          <div className="calc-wrap">
            {/* Input Panel */}
            <div className="calc-panel">
              <h2>{labels.params}</h2>

              <div className="form-group">
                <label htmlFor="capital">{labels.capitalLabel}</label>
                <div className="input-prefix">
                  <span>{labels.prefix}</span>
                  <input type="number" id="capital" min="0" step="0.01" value={capital} onChange={(e) => setCapital(e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="aporte">{labels.aporteLabel}</label>
                <div className="input-prefix">
                  <span>{labels.prefix}</span>
                  <input type="number" id="aporte" min="0" step="0.01" value={aporte} onChange={(e) => setAporte(e.target.value)} />
                </div>
                <span className="hint">{labels.aporteHint}</span>
              </div>

              <div className="form-group">
                <label htmlFor="taxa">{labels.taxaLabel}</label>
                <div className="input-suffix">
                  <span>%</span>
                  <input type="number" id="taxa" min="0.01" step="0.01" value={taxa} onChange={(e) => setTaxa(e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label>{labels.periodoLabel}</label>
                <div className="radio-group" role="radiogroup" aria-label={labels.periodoLabel}>
                  <div className="radio-option">
                    <input type="radio" id="periodoMensal" name="periodo" value="mensal" checked={periodo === "mensal"} onChange={() => setPeriodo("mensal")} />
                    <label htmlFor="periodoMensal">{labels.mensal}</label>
                  </div>
                  <div className="radio-option">
                    <input type="radio" id="periodoAnual" name="periodo" value="anual" checked={periodo === "anual"} onChange={() => setPeriodo("anual")} />
                    <label htmlFor="periodoAnual">{labels.anual}</label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>{labels.prazoLabel}</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div className="input-with-unit">
                    <input type="number" id="prazoAnos" min="0" step="1" value={prazoAnos} onChange={(e) => setPrazoAnos(e.target.value)} />
                    <span>{labels.anos}</span>
                  </div>
                  <div className="input-with-unit">
                    <input type="number" id="prazoMeses" min="0" step="1" value={prazoMeses} onChange={(e) => setPrazoMeses(e.target.value)} />
                    <span>{labels.meses}</span>
                  </div>
                </div>
                <span className="hint">{labels.prazoHint}</span>
              </div>

              <button className="btn btn-primary" onClick={calcular} style={{ width: "100%", marginTop: "8px" }}>
                {labels.calcBtn}
              </button>
            </div>

            {/* Result Panel */}
            <div className="calc-panel">
              <h2>{labels.resultado}</h2>
              {!result ? (
                <div className="empty-state">
                  <div className="empty-icon">{labels.emptyIcon}</div>
                  <p>{labels.emptyText}</p>
                </div>
              ) : (
                <div>
                  <div className="result-card">
                    <div className="result-main">{fmt(result.total)}</div>
                    <div className="result-label">{labels.montanteFinal}</div>
                    <div className="result-breakdown">
                      <div className="result-row"><span className="r-label">{labels.capitalIni}</span><span className="r-value">{fmt(result.capitalIni)}</span></div>
                      <div className="result-row"><span className="r-label">{labels.totalInvestido}</span><span className="r-value">{fmt(result.totalInvestido)}</span></div>
                      <div className="result-row"><span className="r-label">{labels.totalJuros}</span><span className="r-value highlight">{fmt(result.totalJuros)}</span></div>
                      <div className="result-row"><span className="r-label">{labels.rendimento}</span><span className="r-value highlight">{result.rendimento.toFixed(2)}%</span></div>
                    </div>
                  </div>
                  <div className="chart-area">
                    <h3>{labels.evolucao}</h3>
                    <div className="bar-chart">
                      {result.chart.map((item, i) => {
                        const widthTotal = (item.total / result.total) * 100;
                        const widthInvested = (item.invested / result.total) * 100;
                        return (
                          <div className="bar-item" key={i}>
                            <span className="bar-year">{item.label}</span>
                            <div className="bar-track">
                              <div className="bar-fill-total" style={{ width: `${widthTotal}%` }}>
                                <div className="bar-fill-invested" style={{ width: `${(widthInvested / widthTotal) * 100}%` }}></div>
                              </div>
                            </div>
                            <span className="bar-value">{fmt(item.total)}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Banners */}
          <div className="banners-row">
            <div className="banner-slot banner-adsense">
              <span className="banner-label">{isPtBr ? "Publicidade" : "Advertisement"}</span>
              <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            </div>
            <div className="banner-slot banner-sponsor">
              <span className="banner-label">{isPtBr ? "Patrocinador" : "Sponsor"}</span>
              <div className="sponsor-placeholder">
                <div className="sponsor-icon">🤝</div>
                <p className="sponsor-text">{isPtBr ? "Seu anúncio aqui" : "Your ad here"}</p>
                <p className="sponsor-sub">{isPtBr ? "Entre em contato para patrocinar esta ferramenta" : "Get in touch to sponsor this tool"}</p>
                <Link href={isPtBr ? "/pt-br#contato" : "/en#contact"} className="btn btn-outline" style={{ fontSize: "0.85rem", minHeight: "40px", padding: "0 16px" }}>
                  {isPtBr ? "Falar conosco" : "Contact us"}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
