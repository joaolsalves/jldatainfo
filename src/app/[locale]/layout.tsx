import { locales, type Locale, getDictionary } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} nav={dict.nav} homeAnchors={dict.homeAnchors} isSubPage={false} />
      {children}
      <Footer copyright={dict.footer.copyright} privacy={dict.footer.privacy} privacyLink={dict.footer.privacyLink} />
      <WhatsAppButton />
    </>
  );
}
