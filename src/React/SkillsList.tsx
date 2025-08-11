import React, { useState } from "react";

const CategoryIcons = {
    "InterSystems": (
<svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <title>Product icon</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <polygon id="path-1" points="0 0.90625 7.25 0.90625 7.25 27.1875 0 27.1875"></polygon>
    </defs>
    <g id="Symbols" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
        <g id="components/header-no-burger" transform="translate(-7.000000, -10.000000)">
            <g id="left" transform="translate(-1.000000, 4.000000)">
                <g id="logos/icon-HS" transform="translate(8.000000, 6.000000)">
                    <g id="Icon" stroke-width="1" fill="#000">
                        <polygon id="Fill-1" points="0 29 29 29 29 0 0 0"></polygon>
                    </g>
                    <g id="Group-26" stroke-width="1" transform="translate(8.156250, 1.812500)">
                        <g id="Clip-25"></g>
                        <polygon id="Fill-24" fill="currentColor" points="3.625 2.6957654 0 0.90625 0 23.6084692 7.25 27.1875 7.25 23.1881793 3.625 21.3994848"></polygon>
                    </g>
                    <polygon id="Fill-27" fill="currentColor" points="15.40625 25.335428 19.03125 27.1875 19.03125 3.70074728 11.78125 0 11.78125 4.13637908 15.40625 5.98675272"></polygon>
                </g>
            </g>
        </g>
    </g>
</svg>
  ),
  "OHDSI": (

    <img src="svg/oHDSI.svg" height="28px" width="28px"></img>

  ),

  "FHIR®": (
    <img src="png/fhir_small.png" height="29px" width="29px"></img>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "InterSystems": [
      "IRIS Kubernetes Operator (IKO)",
      "HealthShare",
      "Health Connect Cloud",
      "InterSystems OMOP"
    ],
"OHDSI": [
  "High-availability OMOP CDM database cluster with automated backups",
  "Secure ETL pipelines for loading and transforming clinical data",
  "Authentication and role-based access control for Atlas/WebAPI",
  "Monitoring and alerting for query performance and system health"
],
"FHIR®": [
  "Highly available FHIR server with database replication and automated backups",
  "Secure API gateway with authentication, authorization, and audit logging",
  "ETL and data validation pipelines for ingesting clinical data into FHIR resources",
  "Monitoring, alerting, and compliance checks for API performance and security",
  "FHIR-based analytics platform for population health, quality measures, and reporting"
]

  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">Subject Matter Experts</h2>
            <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Workloads
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
