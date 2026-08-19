export const locales = ["pt-br", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt-br";

const ptBR = {
  nav: {
    home: "Início",
    services: "Serviços",
    portfolio: "Portfólio",
    contact: "Contato",
    utilities: "Utilitários",
  },
  homeAnchors: {
    home: "#inicio",
    services: "#servicos",
    portfolio: "#portfolio",
    contact: "#contato",
  },
  hero: {
    badge: "Sites profissionais • Landing pages • Hospedagem • Domínio",
    title: "Sua marca",
    titleHighlight: "forte na internet",
    description:
      "A jldatainfo cria sites e landing pages modernas para apresentar negócios com clareza, velocidade e visual profissional. Nós também cuidamos da hospedagem e do registro do domínio para você.",
    cta: "Solicitar orçamento",
    ctaSecondary: "Ver projetos",
    cardTitle: "O que você ganha",
    benefits: [
      {
        title: "Presença digital profissional",
        text: "Seu negócio apresentado com autoridade e confiança.",
      },
      {
        title: "Mais praticidade",
        text: "Cuidamos do site, da hospedagem e do domínio em um só lugar.",
      },
      {
        title: "Estrutura pronta para vender",
        text: "Páginas pensadas para atrair contatos, pedidos e oportunidades.",
      },
    ],
  },
  services: {
    eyebrow: "Serviços",
    title: "Soluções digitais para colocar o seu negócio em destaque",
    description:
      "Criamos páginas com visual moderno, experiência fluida e estrutura preparada para mostrar sua empresa, divulgar serviços e gerar contatos com mais eficiência.",
    items: [
      {
        icon: "🌐",
        title: "Criação de sites",
        text: "Sites institucionais modernos, responsivos e pensados para transmitir credibilidade em qualquer dispositivo.",
      },
      {
        icon: "🚀",
        title: "Landing pages",
        text: "Páginas focadas em conversão para campanhas, lançamentos, captação de leads e divulgação de serviços.",
      },
      {
        icon: "🖥️",
        title: "Hospedagem e domínio",
        text: "Registro de domínio e gerenciamento de hospedagem para você ter presença online sem complicação técnica.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portfólio",
    title: "Exemplos de presença digital bem apresentada",
    description:
      "Estruturas visuais que se adaptam a empresas, profissionais liberais, lojas, serviços locais e campanhas específicas.",
    items: [
      {
        title: "Site empresarial",
        text: "Apresentação institucional com foco em confiança, autoridade e geração de contatos comerciais.",
        tag: "Institucional",
      },
      {
        title: "Landing page de campanha",
        text: "Página objetiva, com chamada forte, benefícios claros e formulário para captar oportunidades.",
        tag: "Conversão",
      },
      {
        title: "Site para negócio local",
        text: "Layout limpo e direto para valorizar serviços, localização, WhatsApp e presença na internet.",
        tag: "Negócio local",
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos colocar sua empresa online com mais força",
    description:
      "Envie sua ideia, diga o tipo de negócio e o objetivo do site. A jldatainfo retorna com uma proposta sob medida.",
    infoTitle: "Fale com a jldatainfo",
    infoText:
      "Desenvolvemos páginas para diferentes nichos, com foco em apresentação profissional, velocidade e facilidade de manutenção.",
    infoItems: [
      { title: "Atendimento", text: "Segunda a sexta, horário comercial." },
      {
        title: "Serviços incluídos",
        text: "Desenvolvimento, publicação, hospedagem e apoio com domínio.",
      },
      {
        title: "Projetos sob medida",
        text: "Sites institucionais, páginas de vendas e páginas de captação.",
      },
    ],
    whatsapp: {
      label: "Falar pelo WhatsApp",
      sub: "Resposta rápida • Atendimento direto",
    },
    formTitle: "Solicite um orçamento",
    formName: "Nome",
    formEmail: "E-mail",
    formPhone: "Telefone",
    formMessage: "Mensagem",
    formPlaceholderName: "Seu nome",
    formPlaceholderEmail: "voce@email.com",
    formPlaceholderPhone: "(00) 00000-0000",
    formPlaceholderMessage:
      "Descreva o que você precisa para o seu site ou landing page",
    formSubmit: "Enviar contato",
  },
  footer: {
    copyright: "© 2026 jldatainfo. Todos os direitos reservados.",
    privacy: "Política de Privacidade",
    privacyLink: "/pt-br/privacidade",
  },
  utilities: {
    badge: "Ferramentas gratuitas",
    title: "Utilitários",
    titleHighlight: "online",
    description:
      "Calculadoras e ferramentas práticas para o dia a dia. Rápidas, sem cadastro e direto ao ponto.",
    interestCalc: {
      title: "Calculadora de Juros Compostos",
      text: "Simule o crescimento de um investimento com aportes mensais, taxa de juros e período personalizado.",
      cta: "Abrir calculadora",
      link: "/pt-br/util/calculadora-juros",
    },
    fuelCalc: {
      title: "Custo de Combustível por Viagem",
      text: "Calcule quanto vai gastar em combustível com base na distância, consumo do veículo e preço do litro.",
      cta: "Abrir calculadora",
      link: "/pt-br/util/calculadora-combustivel",
    },
    comingSoon: "Em breve",
    comingSoonText: "Mais ferramentas úteis chegando em breve.",
  },
};

const en = {
  nav: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    utilities: "Utilities",
  },
  homeAnchors: {
    home: "#home",
    services: "#services",
    portfolio: "#portfolio",
    contact: "#contact",
  },
  hero: {
    badge: "Custom websites • High-converting landing pages • Hosting • Domain setup",
    title: "Turn clicks into",
    titleHighlight: "real customers",
    description:
      "jldatainfo builds modern websites and high-converting landing pages that help businesses stand out, earn trust and generate more leads online. We also handle hosting and domain registration, so you get everything you need in one place.",
    cta: "Get a free quote",
    ctaSecondary: "See our work",
    cardTitle: "Why businesses choose us",
    benefits: [
      {
        title: "A polished online presence",
        text: "A website that makes your business look credible, established and ready to win new clients.",
      },
      {
        title: "Everything handled for you",
        text: "From design to launch, including hosting and domain setup, we take care of the technical side for you.",
      },
      {
        title: "Pages designed to convert",
        text: "Every section is built to guide visitors toward action, whether that means contacting you, requesting a quote, or making a purchase.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Digital solutions that help your business get noticed",
    description:
      "We create websites with modern design, fast loading and clear messaging so your business can present its services professionally and turn visitors into opportunities.",
    items: [
      {
        icon: "🌐",
        title: "Corporate websites",
        text: "Professional, responsive websites built to showcase your business, strengthen your brand and work perfectly on desktop and mobile.",
      },
      {
        icon: "🚀",
        title: "Landing pages that convert",
        text: "Strategic landing pages created for ads, promotions, launches and lead generation with a strong focus on conversion.",
      },
      {
        icon: "🖥️",
        title: "Hosting and domain management",
        text: "We set up and manage your hosting and domain so your website stays online, secure and easy to maintain.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Projects designed to impress and perform",
    description:
      "Layouts tailored for companies, professionals, local businesses, online campaigns and brands that need a stronger digital presence.",
    items: [
      {
        title: "Business website",
        text: "A professional company website designed to build credibility and attract qualified inquiries.",
        tag: "Corporate",
      },
      {
        title: "Lead generation landing page",
        text: "A focused landing page with strong headlines, clear value proposition and a structure designed to capture leads.",
        tag: "Conversion",
      },
      {
        title: "Local service website",
        text: "A clean, trust-focused design that highlights services, contact options and local visibility.",
        tag: "Local business",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to give your business a stronger online presence?",
    description:
      "Tell us about your business, what you want to promote and the kind of website you need. We will get back to you with a tailored solution that fits your goals.",
    infoTitle: "Let's talk about your project",
    infoText:
      "We create websites for different industries with a focus on performance, modern design, credibility and easy maintenance.",
    infoItems: [
      { title: "Response time", text: "Fast responses for new projects and quote requests." },
      {
        title: "What we take care of",
        text: "Design, development, publishing, hosting and domain support.",
      },
      {
        title: "Built around your business",
        text: "Business websites, landing pages and custom digital presentations designed around your offer.",
      },
    ],
    whatsapp: {
      label: "Chat on WhatsApp",
      sub: "Quick reply • Direct support",
    },
    formTitle: "Get a free quote",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone",
    formMessage: "Message",
    formPlaceholderName: "Your name",
    formPlaceholderEmail: "you@email.com",
    formPlaceholderPhone: "(00) 00000-0000",
    formPlaceholderMessage:
      "Describe what you need for your website or landing page",
    formSubmit: "Send your request",
  },
  footer: {
    copyright: "© 2026 jldatainfo. All rights reserved.",
    privacy: "Privacy Policy",
    privacyLink: "/en/privacy",
  },
  utilities: {
    badge: "Free tools",
    title: "Online",
    titleHighlight: "utilities",
    description:
      "Practical calculators for everyday use. Fast, no sign-up required, and straight to the point.",
    interestCalc: {
      title: "Compound Interest Calculator",
      text: "Simulate investment growth with monthly contributions, custom interest rate and time period.",
      cta: "Open calculator",
      link: "/en/util/calculadora-juros",
    },
    fuelCalc: {
      title: "Fuel Cost per Trip",
      text: "Calculate how much you will spend on fuel based on distance, vehicle consumption and price per liter.",
      cta: "Open calculator",
      link: "/en/util/calculadora-combustivel",
    },
    comingSoon: "Coming soon",
    comingSoonText: "More useful tools on the way.",
  },
};

export const dictionaries: Record<Locale, typeof ptBR> = {
  "pt-br": ptBR,
  en: en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
