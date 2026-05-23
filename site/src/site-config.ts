export const siteConfig = {
  title: "Integration Required | Healthcare Interoperability Engineer",
  description: "Ron Sweeney — Named Technical Interoperability Engineer specializing in FHIR, DICOM, OHDSI/OMOP, and cloud-native healthcare data platforms on InterSystems IRIS and Google Cloud.",
  githubRepo: "sween/iris-certified-agents",
  // Astro validates these public env vars in astro.config.mjs.
  site: import.meta.env.PUBLIC_SITE_URL,
  footerText: "Integration Required, LLC",

  // Used in SEOmeta for Twitter card and Open Graph
  seo: {
    twitterHandle: import.meta.env.PUBLIC_TWITTER_HANDLE,
    twitterSite: import.meta.env.PUBLIC_SITE_URL,
  },
};

// Feature flags examples
export const featureFlags = {
  enableImprint: true,
  enableDataprotection: false,
  showAttribution: false, // Show starter attribution in the footer if you want it
};

// Navigation menu items
export const nav = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
];
