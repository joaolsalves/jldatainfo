import { type Locale, getDictionary } from "@/lib/i18n";
import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  const whatsappMsg = locale === "pt-br"
    ? "Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
    : "Hello!%20I'd%20like%20to%20request%20a%20quote.";

  return (
    <main>
      {/* Hero */}
      <section className="hero" id={dict.homeAnchors.home.replace("#", "")}>
        <video autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80">
          <source src="https://cdn.coverr.co/videos/coverr-programming-in-the-dark-1563741767717?download=1080p" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="container hero-grid">
          <RevealSection>
            <div className="badge">{dict.hero.badge}</div>
            <h1>{dict.hero.title} <span>{dict.hero.titleHighlight}</span>.</h1>
            <p>{dict.hero.description}</p>
            <div className="hero-actions">
              <a href={dict.homeAnchors.contact} className="btn btn-primary">{dict.hero.cta}</a>
              <a href={dict.homeAnchors.portfolio} className="btn btn-outline">{dict.hero.ctaSecondary}</a>
            </div>
          </RevealSection>

          <aside className="hero-card">
            <RevealSection>
              <h3>{dict.hero.cardTitle}</h3>
              <ul className="hero-list">
                {dict.hero.benefits.map((b, i) => (
                  <li key={i}>
                    <span className="dot"></span>
                    <div>
                      <strong>{b.title}</strong>
                      {b.text}
                    </div>
                  </li>
                ))}
              </ul>
            </RevealSection>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section id={dict.homeAnchors.services.replace("#", "")}>
        <div className="container">
          <RevealSection className="section-heading">
            <div className="eyebrow">{dict.services.eyebrow}</div>
            <h2>{dict.services.title}</h2>
            <p>{dict.services.description}</p>
          </RevealSection>

          <div className="grid-3">
            {dict.services.items.map((item, i) => (
              <RevealSection key={i} delay={i * 0.08}>
                <article className="card">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id={dict.homeAnchors.portfolio.replace("#", "")}>
        <div className="container">
          <RevealSection className="section-heading">
            <div className="eyebrow">{dict.portfolio.eyebrow}</div>
            <h2>{dict.portfolio.title}</h2>
            <p>{dict.portfolio.description}</p>
          </RevealSection>

          <div className="portfolio-grid">
            {dict.portfolio.items.map((item, i) => {
              const imgs = [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
              ];
              return (
                <RevealSection key={i} delay={i * 0.08}>
                  <article className="portfolio-card">
                    <div className="portfolio-media">
                      <Image src={imgs[i]} alt={item.title} width={1200} height={800} style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className="portfolio-content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <span className="tag">{item.tag}</span>
                    </div>
                  </article>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id={dict.homeAnchors.contact.replace("#", "")}>
        <div className="container">
          <RevealSection className="section-heading">
            <div className="eyebrow">{dict.contact.eyebrow}</div>
            <h2>{dict.contact.title}</h2>
            <p>{dict.contact.description}</p>
          </RevealSection>

          <div className="contact-wrap">
            <RevealSection className="contact-info">
              <h3>{dict.contact.infoTitle}</h3>
              <p>{dict.contact.infoText}</p>

              <ul className="contact-list">
                {dict.contact.infoItems.map((item, i) => (
                  <li key={i}>
                    <strong>{item.title}</strong>
                    {item.text}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5521980772874?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-cta"
              >
                <span className="btn-whatsapp-cta__icon">
                  <Image src="/assets/img/logo-whatsapp.png" alt="WhatsApp" width={32} height={32} />
                </span>
                <span className="btn-whatsapp-cta__text">
                  <strong>{dict.contact.whatsapp.label}</strong>
                  <span>{dict.contact.whatsapp.sub}</span>
                </span>
                <span className="btn-whatsapp-cta__arrow">→</span>
              </a>
            </RevealSection>

            <ContactForm
              formTitle={dict.contact.formTitle}
              formName={dict.contact.formName}
              formEmail={dict.contact.formEmail}
              formPhone={dict.contact.formPhone}
              formMessage={dict.contact.formMessage}
              formPlaceholderName={dict.contact.formPlaceholderName}
              formPlaceholderEmail={dict.contact.formPlaceholderEmail}
              formPlaceholderPhone={dict.contact.formPlaceholderPhone}
              formPlaceholderMessage={dict.contact.formPlaceholderMessage}
              formSubmit={dict.contact.formSubmit}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
