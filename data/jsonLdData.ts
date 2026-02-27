// GEO Data
const ORG_ID = "https://www.genesisnavarra.com/#organization";
const HOME_PAGE = "https://www.genesisnavarra.com/";

export const ORG_GENESIS = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "GÉNESIS Innovación Digital",
  alternateName: "Génesis Navarra",
  url: HOME_PAGE,
  logo: "https://www.genesisnavarra.com/og-image.jpg",
  description:
    "Agencia digital especializada en inteligencia artificial, automatización de procesos y desarrollo web premium.",
  // Útil para desambiguar “Génesis” + IA + Navarra
  knowsAbout: [
    "Artificial Intelligence",
    "AI Agents",
    "Process Automation",
    "LLM Deployment",
    "Chatbots",
    "Workflow Automation",
    "Web Development",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle los Arcos 4 Izquierda",
    addressLocality: "Noáin",
    postalCode: "31470",
    addressRegion: "Navarra",
    addressCountry: "ES",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "genesisnavarra.ai@gmail.com",
      availableLanguage: ["es"],
      areaServed: "ES",
    },
  ],
};

const provider = { "@id": ORG_ID };
const mainEntityOfPage = { "@type": "WebPage", "@id": HOME_PAGE };

export const SERVICE_AGENTES_IA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agentes de atención con IA",
  provider,
  areaServed: { "@type": "Country", name: "España" },
  description:
    "Agentes de atención con IA que atienden, cualifican y ayudan a convertir leads 24/7.",
  mainEntityOfPage,
};

export const SERVICE_AUTOMATIZACION = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Automatización de procesos",
  provider,
  areaServed: { "@type": "Country", name: "España" },
  description:
    "Conectamos tus herramientas y automatizamos flujos de trabajo para reducir tareas manuales y errores.",
  mainEntityOfPage,
};

export const SERVICE_DESARROLLO_WEB = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Desarrollo web premium",
  provider,
  areaServed: { "@type": "Country", name: "España" },
  description:
    "Diseño y desarrollo web de alto impacto orientado a autoridad, conversión y rendimiento.",
  mainEntityOfPage,
};