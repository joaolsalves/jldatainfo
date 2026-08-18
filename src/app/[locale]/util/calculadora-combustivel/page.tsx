"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { type Locale, getDictionary } from "@/lib/i18n";
import Link from "next/link";

export default function FuelCalculatorPage() {
  const params = useParams();
  const locale = ((params?.locale as string) || "pt-br") as Locale;
  const dict = getDictionary(locale);
  const isPtBr = locale === "pt-br";

  const [distancia, setDistancia] = useState("300");
  const [consumo, setConsumo] = useState("12");
  const [preco, setPreco] = useState("6");
  const [tipoViagem, setTipoViagem] = useState<"ida" | "idavolta">("ida");
  const [pedagio, setPedagio] = useState("0");
  const [passageiros, setPassageiros] = useState("1");
  const [result, setResult] = useState<{
    custoTotal: number; distanciaTotal: number; litros: number; custoCombustivel: number;
    pedagioTotal: number; porPessoa: number; custoPorKm: number; etanolLimite: number;
    isIdaVolta: boolean; passageirosNum: number;
  } | null>(null);

  function fmt(v: number) {
    return isPtBr
      ? v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
      : v.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }

  function fmtNum(v: number, d = 2) {
    return isPtBr
      ? v.toLocaleString("pt-BR", { minimumFractionDigits: d, maximumFractionDigits: d })
      : v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  }

  function calcular() {
    const dist = parseFloat(distancia) || 0;
    const cons = parseFloat(consumo) || 0;
    const pr = parseFloat(preco) || 0;
    const ped = parseFloat(pedagio) || 0;
    const pass = parseInt(passageiros) || 1;

    if (!dist || !cons || !pr) {
      alert(isPtBr ? "Preencha distância, consumo e preço." : "Please fill in distance, consumption and price.");
      return;
    }

    const mult = tipoViagem === "idavolta" ? 2 : 1;
    const distanciaTotal = dist * mult;
    const pedagioTotal = ped * mult;
    const litros = distanciaTotal / cons;
    const custoCombustivel = litros * pr;
    const custoTotal = custoCombustivel + pedagioTotal;
    const custoPorKm = custoCombustivel / distanciaTotal;
    const etanolLimite = pr * 0.7;

    setResult({
      custoTotal, distanciaTotal, litros, custoCombustivel, pedagioTotal,
      porPessoa: custoTotal / pass, custoPorKm, etanolLimite,
      isIdaVolta: tipoViagem === "idavolta", passageirosNum: pass,
    });
  }

  const labels = isPtBr ? {
    back: "← Voltar para Utilitários",
    eyebrow: "Utilitários",
    title: "⛽ Custo de Combustível por Viagem",
    subtitle: "Calcule quanto vai gastar com combustível com base na distância, consumo do veículo e preço do litro.",
    dadosViagem: "Dados da viagem",
    distanciaLabel: "Distância da viagem",
    consumoLabel: "Consumo médio do veículo",
    consumoHint: "Média entre cidade e estrada do seu veículo.",
    precoLabel: "Preço do combustível",
    precoHint: "Preço por litro.",
    tipoLabel: "Tipo de viagem",
    ida: "Somente ida",
    idaVolta: "Ida e volta",
    extrasLabel: "Opções extras (pedágio, passageiros)",
    pedagioLabel: "Pedágio total",
    pedagioHint: "Total de pedágios na rota (ida). Para ida e volta será dobrado automaticamente.",
    passageirosLabel: "Dividir entre passageiros",
    passageirosHint: "Número de pessoas dividindo o custo total.",
    calcBtn: "Calcular",
    resultado: "Resultado",
    emptyIcon: "🗺️",
    emptyText: "Preencha os dados da viagem e clique em Calcular.",
    custoTotalIda: "Custo total (somente ida)",
    custoTotalIdaVolta: "Custo total (ida e volta)",
    distanciaTotal: "Distância total",
    litrosNecessarios: "Litros necessários",
    custoCombustivel: "Custo combustível",
    pedagios: "Pedágio(s)",
    porPessoa: "Por pessoa",
    comparativo: "Comparativo de combustíveis",
    etanolTitle: "⚖️ Vantagem do etanol",
    etanolDesc: "Preço do etanol que compensa",
    etanolHint: "Use etanol se o litro custar menos que 70% do valor da gasolina",
    custoPorKmTitle: "📊 Custo por km rodado",
    custoPorKm: "Custo por km",
    custoPor100km: "Custo por 100 km",
    prefix: "R$",
  } : {
    back: "← Back to Utilities",
    eyebrow: "Utilities",
    title: "⛽ Fuel Cost per Trip",
    subtitle: "Calculate how much you'll spend on fuel based on distance, vehicle consumption and price per liter.",
    dadosViagem: "Trip data",
    distanciaLabel: "Trip distance",
    consumoLabel: "Average consumption",
    consumoHint: "Average between city and highway for your vehicle.",
    precoLabel: "Fuel price",
    precoHint: "Price per liter.",
    tipoLabel: "Trip type",
    ida: "One way",
    idaVolta: "Round trip",
    extrasLabel: "Extra options (tolls, passengers)",
    pedagioLabel: "Total tolls",
    pedagioHint: "Total tolls on route (one way). Will be doubled automatically for round trips.",
    passageirosLabel: "Split between passengers",
    passageirosHint: "Number of people splitting the total cost.",
    calcBtn: "Calculate",
    resultado: "Result",
    emptyIcon: "🗺️",
    emptyText: "Fill in trip data and click Calculate.",
    custoTotalIda: "Total cost (one way)",
    custoTotalIdaVolta: "Total cost (round trip)",
    distanciaTotal: "Total distance",
    litrosNecessarios: "Liters needed",
    custoCombustivel: "Fuel cost",
    pedagios: "Toll(s)",
    porPessoa: "Per person",
    comparativo: "Fuel comparison",
    etanolTitle: "⚖️ Ethanol advantage",
    etanolDesc: "Ethanol price that pays off",
    etanolHint: "Use ethanol if the liter costs less than 70% of gasoline price",
    custoPorKmTitle: "📊 Cost per km driven",
    custoPorKm: "Cost per km",
    custoPor100km: "Cost per 100 km",
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
              <h2>{labels.dadosViagem}</h2>

              <div className="form-group">
                <label htmlFor="distancia">{labels.distanciaLabel}</label>
                <div className="input-suffix">
                  <span>km</span>
                  <input type="number" id="distancia" min="1" step="1" value={distancia} onChange={(e) => setDistancia(e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="consumo">{labels.consumoLabel}</label>
                <div className="input-suffix">
                  <span>km/L</span>
                  <input type="number" id="consumo" min="0.1" step="0.1" value={consumo} onChange={(e) => setConsumo(e.target.value)} />
                </div>
                <span className="hint">{labels.consumoHint}</span>
              </div>

              <div className="form-group">
                <label htmlFor="precoCombustivel">{labels.precoLabel}</label>
                <div className="input-prefix">
                  <span>{labels.prefix}</span>
                  <input type="number" id="precoCombustivel" min="0.01" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </div>
                <span className="hint">{labels.precoHint}</span>
              </div>

              <div className="form-group">
                <label>{labels.tipoLabel}</label>
                <div className="radio-group" role="radiogroup" aria-label={labels.tipoLabel}>
                  <div className="radio-option">
                    <input type="radio" id="idaOnly" name="tipoViagem" value="ida" checked={tipoViagem === "ida"} onChange={() => setTipoViagem("ida")} />
                    <label htmlFor="idaOnly">{labels.ida}</label>
                  </div>
                  <div className="radio-option">
                    <input type="radio" id="idaVolta" name="tipoViagem" value="idavolta" checked={tipoViagem === "idavolta"} onChange={() => setTipoViagem("idavolta")} />
                    <label htmlFor="idaVolta">{labels.idaVolta}</label>
                  </div>
                </div>
              </div>

              <hr className="divider" />

              <details className="optional-section">
                <summary>{labels.extrasLabel}</summary>
                <div className="inner">
                  <div className="form-group">
                    <label htmlFor="pedagio">{labels.pedagioLabel}</label>
                    <div className="input-prefix">
                      <span>{labels.prefix}</span>
                      <input type="number" id="pedagio" min="0" step="0.01" value={pedagio} onChange={(e) => setPedagio(e.target.value)} />
                    </div>
                    <span className="hint">{labels.pedagioHint}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="passageiros">{labels.passageirosLabel}</label>
                    <div className="input-suffix">
                      <span>{isPtBr ? "pessoas" : "people"}</span>
                      <input type="number" id="passageiros" min="1" step="1" value={passageiros} onChange={(e) => setPassageiros(e.target.value)} />
                    </div>
                    <span className="hint">{labels.passageirosHint}</span>
                  </div>
                </div>
              </details>

              <button className="btn btn-primary" onClick={calcular} style={{ width: "100%", marginTop: "20px" }}>
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
                    <div className="result-main">{fmt(result.custoTotal)}</div>
                    <div className="result-label">{result.isIdaVolta ? labels.custoTotalIdaVolta : labels.custoTotalIda}</div>
                    <div className="result-breakdown">
                      <div className="result-row"><span className="r-label">{labels.distanciaTotal}</span><span className="r-value">{fmtNum(result.distanciaTotal, 0)} km</span></div>
                      <div className="result-row"><span className="r-label">{labels.litrosNecessarios}</span><span className="r-value">{fmtNum(result.litros)} L</span></div>
                      <div className="result-row"><span className="r-label">{labels.custoCombustivel}</span><span className="r-value">{fmt(result.custoCombustivel)}</span></div>
                      {result.pedagioTotal > 0 && (
                        <div className="result-row"><span className="r-label">{labels.pedagios}</span><span className="r-value">{fmt(result.pedagioTotal)}</span></div>
                      )}
                      {result.passageirosNum > 1 && (
                        <div className="result-row"><span className="r-label">{labels.porPessoa}</span><span className="r-value highlight">{fmt(result.porPessoa)}</span></div>
                      )}
                    </div>
                  </div>

                  <div className="comparison-area">
                    <h3>{labels.comparativo}</h3>
                    <div className="compare-card">
                      <h4>{labels.etanolTitle}</h4>
                      <div className="compare-row"><span>{labels.etanolDesc}</span><span>{fmt(result.etanolLimite)}/L</span></div>
                      <div className="compare-row" style={{ marginTop: "6px", fontSize: "0.82rem", color: "var(--muted)" }}><span>{labels.etanolHint}</span></div>
                    </div>
                    <div className="compare-card">
                      <h4>{labels.custoPorKmTitle}</h4>
                      <div className="compare-row"><span>{labels.custoPorKm}</span><span>{fmt(result.custoPorKm)}</span></div>
                      <div className="compare-row" style={{ marginTop: "8px" }}><span>{labels.custoPor100km}</span><span>{fmt(result.custoPorKm * 100)}</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
