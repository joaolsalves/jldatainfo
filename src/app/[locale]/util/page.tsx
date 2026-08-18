import { type Locale, getDictionary } from "@/lib/i18n";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";

export default function UtilPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <main>
      <section className="util-hero">
        <div className="container">
          <RevealSection>
            <div className="badge">{dict.utilities.badge}</div>
          </RevealSection>
          <RevealSection delay={0.08}>
            <h1>{dict.utilities.title} <span>{dict.utilities.titleHighlight}</span></h1>
          </RevealSection>
          <RevealSection delay={0.16}>
            <p>{dict.utilities.description}</p>
          </RevealSection>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="util-grid">
            <RevealSection>
              <article className="util-card">
                <div className="icon">💰</div>
                <h3>{dict.utilities.interestCalc.title}</h3>
                <p>{dict.utilities.interestCalc.text}</p>
                <Link href={dict.utilities.interestCalc.link} className="btn btn-primary">
                  {dict.utilities.interestCalc.cta}
                </Link>
              </article>
            </RevealSection>

            <RevealSection delay={0.08}>
              <article className="util-card">
                <div className="icon">⛽</div>
                <h3>{dict.utilities.fuelCalc.title}</h3>
                <p>{dict.utilities.fuelCalc.text}</p>
                <Link href={dict.utilities.fuelCalc.link} className="btn btn-primary">
                  {dict.utilities.fuelCalc.cta}
                </Link>
              </article>
            </RevealSection>

            <RevealSection delay={0.16}>
              <article className="util-card coming-soon">
                <div className="icon">📊</div>
                <h3>{dict.utilities.comingSoon}</h3>
                <p>{dict.utilities.comingSoonText}</p>
                <span className="tag-soon">{dict.utilities.comingSoon}</span>
              </article>
            </RevealSection>
          </div>
        </div>
      </section>
    </main>
  );
}
