export const ui = {
  es: {
    "header.title": "Idaisel Guevara",
    "hero.bar": "Adquisiciones estratégicas · Dossier Corporativo",
    "hero.bar.aside": "Ref. B2B / Suministros",
    "hero.name": "IGA Importaciones LLC",
    "hero.info":
      "Compro productos a proveedores. Si buscas un socio de confianza, hablemos",
    "hero.contact-button": "Contactar",
    "hero.services-button": "Ver Servicios",
    "hero.card.span": "Liquidez directa",
    "hero.card.info":
      "Transacciones comerciales transparentes, cumplimiento estricto de cronogramas y volumen continuo sin intermediación.",
    "footer.rights": "Idaisel Guevara. Todos los derechos reservados.",
  },
  en: {
    "header.title": "Idaisel Guevara",
    "hero.bar": "STRATEGIC SOURCING · Corporative DOSSIER",
    "hero.bar.aside": "Ref. B2B / Suppliers",
    "hero.name": "IGA Importaciones LLC",
    "hero.info":
      "I purchase products from suppliers. If you are looking for a trusted partner, let’s talk.",
    "hero.contact-button": "Get In Touch",
    "hero.services-button": "Show Services",
    "hero.card.span": "Direct Liquidity",
    "hero.card.info":
      "Transparent commercial transactions, strict adherence to schedules, and consistent volume without intermediaries.",

    "footer.rights": "Idaisel Guevara. All Rights Reserved.",
  },
} as const;

export const defaultLang = "es";

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
