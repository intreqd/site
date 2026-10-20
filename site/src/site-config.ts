export const siteConfig = {
  title: "Integration Required | Named Technical Interoperability Engineer & InterSystems IRIS Specialist",
  description: "Ron Sweeney — Named Technical Interoperability Engineer & InterSystems Implementation Partner. Providing contract engineering, InterSystems Kubernetes Operator (IKO), HA mirroring, performance tuning, and cloud-native healthcare data platforms (FHIR, DICOM, OHDSI/OMOP, BigQuery).",
  author: "Ron Sweeney",
  keywords: "InterSystems IRIS, Healthcare Interoperability, InterSystems Kubernetes Operator, IKO, FHIR, HL7 FHIR, DICOM, DIMSE Cloud, OHDSI, OMOP, BigQuery, iris2bq, git2iris, iris-sscp, HealthShare, Caché migration, High Availability Mirroring, System Performance, pButtons, contract interoperability engineer, Ron Sweeney",
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
  enableTrustCenter: true,
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
