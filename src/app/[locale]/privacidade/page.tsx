import { type Locale, getDictionary } from "@/lib/i18n";
import Link from "next/link";

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const isPtBr = locale === "pt-br";

  const content = isPtBr ? {
    eyebrow: "Legal",
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: agosto de 2026",
    intro: (
      <p>A <strong>jldatainfo</strong> (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo;) opera o site jldatainfo.com.br. Esta página descreve como coletamos, usamos e protegemos as informações fornecidas por você ao utilizar nosso site e ferramentas.</p>
    ),
    sections: [
      {
        title: "1. Informações que coletamos",
        body: (
          <>
            <p>Coletamos informações de forma limitada e apenas quando necessário:</p>
            <ul>
              <li><strong>Dados do formulário de contato:</strong> nome, e-mail, telefone e mensagem, fornecidos voluntariamente por você ao solicitar um orçamento.</li>
              <li><strong>Dados de navegação:</strong> informações técnicas como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência, coletadas automaticamente por meio de cookies e ferramentas de análise.</li>
            </ul>
          </>
        ),
      },
      {
        title: "2. Uso das informações",
        body: (
          <>
            <p>As informações coletadas são utilizadas para:</p>
            <ul>
              <li>Responder às suas solicitações de contato e orçamento.</li>
              <li>Melhorar a experiência de navegação no site.</li>
              <li>Analisar o tráfego e comportamento de uso das ferramentas.</li>
              <li>Exibir publicidade personalizada por meio de parceiros como o Google AdSense.</li>
            </ul>
          </>
        ),
      },
      {
        title: "3. Google AdSense e cookies de terceiros",
        body: (
          <>
            <p>Utilizamos o Google AdSense para exibir anúncios em nosso site. O Google pode usar cookies para exibir anúncios com base nas visitas anteriores do usuário a este e outros sites. Você pode optar por desativar a publicidade personalizada acessando as <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configurações de anúncios do Google</a>.</p>
            <p>Parceiros de publicidade de terceiros também podem usar cookies, scripts e web beacons para rastreamento e medição. Consulte as políticas de privacidade de cada parceiro para mais detalhes.</p>
          </>
        ),
      },
      {
        title: "4. Cookies",
        body: (
          <>
            <p>Cookies são pequenos arquivos armazenados no seu dispositivo. Utilizamos cookies para:</p>
            <ul>
              <li>Lembrar preferências de navegação.</li>
              <li>Coletar dados analíticos (Google Analytics).</li>
              <li>Exibir anúncios relevantes (Google AdSense).</li>
            </ul>
            <p>Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades do site.</p>
          </>
        ),
      },
      {
        title: "5. Ferramentas e utilitários",
        body: (
          <p>As calculadoras e ferramentas disponíveis em nosso site funcionam inteiramente no seu navegador. Nenhum dado inserido nessas ferramentas é enviado para nossos servidores ou armazenado de qualquer forma.</p>
        ),
      },
      {
        title: "6. Compartilhamento de dados",
        body: (
          <>
            <p>Não vendemos, trocamos ou transferimos suas informações pessoais a terceiros, exceto quando necessário para:</p>
            <ul>
              <li>Cumprir obrigações legais.</li>
              <li>Proteger nossos direitos ou segurança.</li>
              <li>Prestadores de serviço que nos auxiliam na operação do site (ex: serviço de e-mail), sob acordo de confidencialidade.</li>
            </ul>
          </>
        ),
      },
      {
        title: "7. Segurança",
        body: (
          <p>Adotamos medidas razoáveis para proteger suas informações, incluindo o uso de HTTPS em todas as páginas. No entanto, nenhum método de transmissão pela internet é 100% seguro.</p>
        ),
      },
      {
        title: "8. Seus direitos (LGPD)",
        body: (
          <>
            <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul>
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Solicitar a correção de dados incompletos ou desatualizados.</li>
              <li>Solicitar a eliminação de dados desnecessários.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p>Para exercer qualquer direito, entre em contato pelo <Link href={`/${locale}/#contato`}>formulário de contato</Link> ou pelo <a href="https://wa.me/5521980772874" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
          </>
        ),
      },
      {
        title: "9. Alterações nesta política",
        body: (
          <p>Podemos atualizar esta política periodicamente. Alterações significativas serão comunicadas nesta página com a data de atualização revisada.</p>
        ),
      },
      {
        title: "10. Contato",
        body: (
          <>
            <p>Se tiver dúvidas sobre esta Política de Privacidade, entre em contato:</p>
            <ul>
              <li><strong>Site:</strong> <Link href={`/${locale}/#contato`}>jldatainfo.com.br</Link></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/5521980772874" target="_blank" rel="noopener noreferrer">(21) 98077-2874</a></li>
            </ul>
          </>
        ),
      },
    ],
  } : {
    eyebrow: "Legal",
    title: "Privacy Policy",
    lastUpdated: "Last updated: August 2026",
    intro: (
      <p><strong>jldatainfo</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;) operates the website jldatainfo.com.br. This page describes how we collect, use and protect the information you provide when using our website and tools.</p>
    ),
    sections: [
      {
        title: "1. Information we collect",
        body: (
          <>
            <p>We collect information in a limited manner and only when necessary:</p>
            <ul>
              <li><strong>Contact form data:</strong> name, email, phone number and message, voluntarily provided by you when requesting a quote.</li>
              <li><strong>Browsing data:</strong> technical information such as IP address, browser type, pages visited and time spent, automatically collected through cookies and analytics tools.</li>
            </ul>
          </>
        ),
      },
      {
        title: "2. How we use your information",
        body: (
          <>
            <p>The information collected is used to:</p>
            <ul>
              <li>Respond to your contact and quote requests.</li>
              <li>Improve the browsing experience on our site.</li>
              <li>Analyze traffic and usage behavior of our tools.</li>
              <li>Display personalized advertising through partners such as Google AdSense.</li>
            </ul>
          </>
        ),
      },
      {
        title: "3. Google AdSense and third-party cookies",
        body: (
          <>
            <p>We use Google AdSense to display ads on our site. Google may use cookies to serve ads based on your prior visits to this and other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
            <p>Third-party advertising partners may also use cookies, scripts and web beacons for tracking and measurement. Please refer to each partner&apos;s privacy policy for details.</p>
          </>
        ),
      },
      {
        title: "4. Cookies",
        body: (
          <>
            <p>Cookies are small files stored on your device. We use cookies to:</p>
            <ul>
              <li>Remember browsing preferences.</li>
              <li>Collect analytics data (Google Analytics).</li>
              <li>Display relevant ads (Google AdSense).</li>
            </ul>
            <p>You can disable cookies in your browser settings, but this may affect some site functionality.</p>
          </>
        ),
      },
      {
        title: "5. Tools and utilities",
        body: (
          <p>The calculators and tools available on our site run entirely in your browser. No data entered in these tools is sent to our servers or stored in any way.</p>
        ),
      },
      {
        title: "6. Data sharing",
        body: (
          <>
            <p>We do not sell, trade or transfer your personal information to third parties, except when necessary to:</p>
            <ul>
              <li>Comply with legal obligations.</li>
              <li>Protect our rights or safety.</li>
              <li>Service providers who assist us in operating the site (e.g., email services), under confidentiality agreements.</li>
            </ul>
          </>
        ),
      },
      {
        title: "7. Security",
        body: (
          <p>We take reasonable measures to protect your information, including the use of HTTPS across all pages. However, no method of internet transmission is 100% secure.</p>
        ),
      },
      {
        title: "8. Your rights",
        body: (
          <>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul>
              <li>Confirm whether your data is being processed.</li>
              <li>Access your personal data.</li>
              <li>Request correction of incomplete or outdated data.</li>
              <li>Request deletion of unnecessary data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p>To exercise any right, please contact us through our <Link href={`/${locale}/#contact`}>contact form</Link> or via <a href="https://wa.me/5521980772874" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
          </>
        ),
      },
      {
        title: "9. Changes to this policy",
        body: (
          <p>We may update this policy periodically. Significant changes will be communicated on this page with a revised update date.</p>
        ),
      },
      {
        title: "10. Contact",
        body: (
          <>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Website:</strong> <Link href={`/${locale}/#contact`}>jldatainfo.com.br</Link></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/5521980772874" target="_blank" rel="noopener noreferrer">+55 21 98077-2874</a></li>
            </ul>
          </>
        ),
      },
    ],
  };

  return (
    <main>
      <div className="policy-page">
        <div className="container">
          <div className="policy-content">
            <div className="eyebrow">{content.eyebrow}</div>
            <h1>{content.title}</h1>
            <p className="policy-meta">{content.lastUpdated}</p>
            {content.intro}
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2>{section.title}</h2>
                {section.body}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
