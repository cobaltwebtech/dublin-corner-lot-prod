import ogImageSrc from "@img/ogimage.png";

export const SITE = {
  title: "Dublin Corner Lot",
  description:
    "Dublin Corner Lot is a non-profit organization whose mission is to beautify and provide a free and open public space for all to use.",
  url: "https://dublincornerlot.org/",
  author: "Cobalt Web Technologies",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} - Non-Profit Park in Dublin, Texas`,
  description:
    "Dublin Corner Lot is a non-profit organization whose mission is to beautify and provide a free and open public space for all to use.",
  image: ogImageSrc,
};
