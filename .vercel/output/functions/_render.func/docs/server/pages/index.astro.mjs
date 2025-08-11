/* empty css                                 */
import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderHead, e as renderSlot, f as renderTemplate, g as renderScript, h as addAttribute, u as unescapeHTML, i as renderComponent } from '../chunks/astro/server_ZpfE3u4Z.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import '../chunks/index_BRwviSIQ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DVvS-BgT.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Integration Required"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/png/favicon-32x32.png"><meta property="og:description" content="Integration Required"><meta property="og:image" content="https://oscarhernandez.vercel.app/og.image.png"><meta property="og:url" content="https://oscarhernandez.vercel.app"><meta property="og:type" content="website"><meta property="og:site_name" content="Integration Required"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" media="print" onload="this.media='all'">${maybeRenderHead()}<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"></noscript><title>${title}</title>${renderHead()}</head> <body class="bg-[--background] md:px-48 lg:px-20 px-9"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/sween/Desktop/INTREQD/site/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      label: "Home",
      href: "#home",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>`
    },
    {
      label: "Workloads",
      href: "#projects",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z"></path></svg>`
    },
    {
      label: "Communities",
      href: "#contact",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center w-full" data-astro-cid-d6vcou2g> <nav id="main-nav" class="fixed left-1/2 -translate-x-1/2 z-[100] bg-[var(--background)] border border-1 border-transparent backdrop-blur-xl transition-all duration-500 ease-in-out md:top-6 md:bottom-auto bottom-0 w-[80%]" data-astro-cid-d6vcou2g> <div class="container mx-auto flex justify-center items-center p-3" data-astro-cid-d6vcou2g> <ul class="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6" data-astro-cid-d6vcou2g> ${navItems.map((item) => renderTemplate`<li class="flex-1 md:flex-none" data-astro-cid-d6vcou2g> <a${addAttribute(item.href, "href")} class="flex flex-col items-center gap-1 text-[var(--white-icon)] transition-colors text-xs md:text-base relative group" data-astro-cid-d6vcou2g> <div class="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 scale-0 opacity-0 bg-[#556a9b] nav-indicator hidden md:block" data-astro-cid-d6vcou2g></div> <span class="md:hidden flex items-center justify-center w-6 h-6" data-astro-cid-d6vcou2g> <fragment data-astro-cid-d6vcou2g>${unescapeHTML(item.icon)}</fragment> </span> <span class="hidden md:inline-block" data-astro-cid-d6vcou2g>${item.label}</span> <span class="md:hidden" data-astro-cid-d6vcou2g>${item.label}</span> </a> </li>`)} </ul> </div> </nav> </div>  ${renderScript($$result, "/home/sween/Desktop/INTREQD/site/src/components/nav.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/sween/Desktop/INTREQD/site/src/components/nav.astro", void 0);

const LetterGlitch = ({
  glitchColors = ["#5e4491", "#556a9b", "#241a38"],
  glitchSpeed = 33,
  centerVignette = false,
  outerVignette = false,
  smooth = true
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const letters = useRef([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef(null);
  const lastGlitchTime = useRef(Date.now());
  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;
  const lettersAndSymbols = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "!",
    "@",
    "#",
    "$",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "/",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "<",
    ">",
    ",",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  const getRandomChar = () => {
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
  };
  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (r, g, b) => {
      return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };
  const interpolateColor = (start, end, factor) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor)
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };
  const calculateGrid = (width, height) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };
  const initializeLetters = (columns, rows) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1
    }));
  };
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };
  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const { width, height } = canvasRef.current.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";
    letters.current.forEach((letter, index) => {
      const x = index % grid.current.columns * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };
  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) return;
    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) continue;
      letters.current[index].char = getRandomChar();
      letters.current[index].targetColor = getRandomColor();
      if (!smooth) {
        letters.current[index].color = letters.current[index].targetColor;
        letters.current[index].colorProgress = 1;
      } else {
        letters.current[index].colorProgress = 0;
      }
    }
  };
  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    letters.current.forEach((letter) => {
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;
        const startRgb = hexToRgb(letter.color);
        const endRgb = hexToRgb(letter.targetColor);
        if (startRgb && endRgb) {
          letter.color = interpolateColor(
            startRgb,
            endRgb,
            letter.colorProgress
          );
          needsRedraw = true;
        }
      }
    });
    if (needsRedraw) {
      drawLetters();
    }
  };
  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = now;
    }
    if (smooth) {
      handleSmoothTransitions();
    }
    animationRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current);
        resizeCanvas();
        animate();
      }, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [glitchSpeed, smooth]);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full bg-[#101010] overflow-hidden", children: [
    /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "block w-full h-full" }),
    outerVignette && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(16,16,16,0)_60%,_rgba(16,16,16,1)_100%)]" }),
    centerVignette && /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]" })
  ] });
};

const $$LogoWall = createComponent(($$result, $$props, $$slots) => {
  const technologies = [
    "kubernetes",
    "databricks",
    "helm",
    "iris",
    "healthShare",
    "healthCareApi",
    "googleCloud"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-x-hidden py-8"> <div class="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div> <div class="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max"> ${[...technologies, ...technologies, ...technologies].map((tech) => renderTemplate`<div class="flex items-center gap-2 group transition-all duration-300"> <img${addAttribute(`/svg/${tech}.svg`, "src")}${addAttribute(tech, "alt")} class="h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-60" width="30" height="30" loading="lazy"> <span class="text-lg font-medium text-[var(--white-icon)]"> ${tech.charAt(0).toUpperCase() + tech.slice(1)} </span> </div>`)} </div> </div> `;
}, "/home/sween/Desktop/INTREQD/site/src/components/logoWall.astro", void 0);

const CategoryIcons = {
  "InterSystems": /* @__PURE__ */ jsxs("svg", { width: "29px", height: "29px", viewBox: "0 0 29 29", version: "1.1", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("title", { children: "Product icon" }),
    /* @__PURE__ */ jsx("desc", { children: "Created with Sketch." }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("polygon", { id: "path-1", points: "0 0.90625 7.25 0.90625 7.25 27.1875 0 27.1875" }) }),
    /* @__PURE__ */ jsx("g", { id: "Symbols", stroke: "none", "stroke-width": "1", fill: "currentColor", "fill-rule": "evenodd", children: /* @__PURE__ */ jsx("g", { id: "components/header-no-burger", transform: "translate(-7.000000, -10.000000)", children: /* @__PURE__ */ jsx("g", { id: "left", transform: "translate(-1.000000, 4.000000)", children: /* @__PURE__ */ jsxs("g", { id: "logos/icon-HS", transform: "translate(8.000000, 6.000000)", children: [
      /* @__PURE__ */ jsx("g", { id: "Icon", "stroke-width": "1", fill: "#000", children: /* @__PURE__ */ jsx("polygon", { id: "Fill-1", points: "0 29 29 29 29 0 0 0" }) }),
      /* @__PURE__ */ jsxs("g", { id: "Group-26", "stroke-width": "1", transform: "translate(8.156250, 1.812500)", children: [
        /* @__PURE__ */ jsx("g", { id: "Clip-25" }),
        /* @__PURE__ */ jsx("polygon", { id: "Fill-24", fill: "currentColor", points: "3.625 2.6957654 0 0.90625 0 23.6084692 7.25 27.1875 7.25 23.1881793 3.625 21.3994848" })
      ] }),
      /* @__PURE__ */ jsx("polygon", { id: "Fill-27", fill: "currentColor", points: "15.40625 25.335428 19.03125 27.1875 19.03125 3.70074728 11.78125 0 11.78125 4.13637908 15.40625 5.98675272" })
    ] }) }) }) })
  ] }),
  "OHDSI": /* @__PURE__ */ jsx("img", { src: "svg/oHDSI.svg", height: "28px", width: "28px" }),
  "FHIR®": /* @__PURE__ */ jsx("img", { src: "png/fhir_small.png", height: "29px", width: "29px" })
};
const SkillsList = () => {
  const [openItem, setOpenItem] = useState(null);
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
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };
  return /* @__PURE__ */ jsxs("div", { className: "text-left pt-3 md:pt-9", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-lg text-[var(--sec)] mb-2 shiny-sec", children: "Subject Matter Experts" }),
    /* @__PURE__ */ jsx("h3", { className: "text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6", children: "Workloads" }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-4 mt-4 text-lg", children: Object.entries(skills).map(([category, items]) => /* @__PURE__ */ jsx("li", { className: "w-full", children: /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => toggleItem(category),
        className: "md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4", children: [
            CategoryIcons[category],
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 flex-grow justify-between", children: [
              /* @__PURE__ */ jsx("div", { className: "min-w-0 max-w-[200px] md:max-w-none overflow-hidden", children: /* @__PURE__ */ jsx("span", { className: "block truncate text-[var(--white)] text-lg", children: category }) }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: `w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${openItem === category ? "rotate-180" : ""}`,
                  children: /* @__PURE__ */ jsx("path", { d: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `transition-all duration-300 px-4 ${openItem === category ? "max-h-[500px] pb-4 opacity-100" : "max-h-0 opacity-0"}`,
              children: /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-[var(--white-icon)] text-sm", children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "pl-1", children: "•" }),
                /* @__PURE__ */ jsx("li", { className: "pl-3", children: item })
              ] }, index)) })
            }
          )
        ]
      }
    ) }, category)) })
  ] });
};

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-[var(--white)] mt-12 md:mt-0" id="home"> <div class="max-w-5xl mx-auto space-y-8 md:py-36 pb-14"> <div class="text-left space-y-4"> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">
Trusted Partner
</h2> <div class="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4"> <img${addAttribute(`/png/whiteyboy_blue.png`, "src")} alt="Integration Required" class="w-auto object-contain transition-transform group-hover:scale-110 opacity-60" loading="lazy"> <p class="text-md md:text-2xl text-[var(--white-icon)]"> <b>Named Technical Interoperablity Engineers</b> Secure, Reliable, and Performant InterSystems Workloads, Healthcare Interoperability, and Advanced Analytics at <span class="text-[var(--sec)] shiny-sec">impossible</span> deployment speeds.
</p> </div> <div class="flex justify-start gap-2 pt-3 md:pt-6"> <a target="_blank" href="https://github.com/sween" aria-label="GitHub" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"> <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path> </svg> </a> <a target="_blank" href="https://linkedin.com/in/ronsweeney" aria-label="LinkedIn" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"> <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path> </svg> </a> <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=ron.sweeney@integrationrequired.com&su=Hello%20IntegrationRequired!" aria-label="Email" class="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg"> <title>Product icon</title> <desc>Created with Sketch.</desc> <defs> <polygon id="path-1" points="0 0.90625 7.25 0.90625 7.25 27.1875 0 27.1875"></polygon> </defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="components/header-no-burger" transform="translate(-7.000000, -10.000000)"> <g id="left" transform="translate(-1.000000, 4.000000)"> <g id="logos/icon-HS" transform="translate(8.000000, 6.000000)"> <g id="Icon" stroke-width="1"> <polygon id="Fill-1" points="0 29 29 29 29 0 0 0"></polygon> </g> <g id="Group-26" stroke-width="1" transform="translate(8.156250, 1.812500)"> <g id="Clip-25"></g> <polygon id="Fill-24" fill="currentColor" points="3.625 2.6957654 0 0.90625 0 23.6084692 7.25 27.1875 7.25 23.1881793 3.625 21.3994848"></polygon> </g> <polygon id="Fill-27" fill="currentColor" points="15.40625 25.335428 19.03125 27.1875 19.03125 3.70074728 11.78125 0 11.78125 4.13637908 15.40625 5.98675272"></polygon> </g> </g> </g> </g> </svg> </a> </div> </div> ${renderComponent($$result, "LogoWall", $$LogoWall, {})} <div class="flex flex-col lg:flex-row items-center gap-8"> ${renderComponent($$result, "SkillsList", SkillsList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/sween/Desktop/INTREQD/site/src/React/SkillsList.tsx", "client:component-export": "default" })} <div class="flex justify-center md:w-full md:h-[350px] size-[290px] pt-3 md:pt-9 md:ml-16"> <div${addAttribute({ position: "relative" }, "style")}> ${renderComponent($$result, "LetterGlitch", LetterGlitch, { "client:load": true, "glitchColors": ["#3a3838ff", "#556a9b", "#000000"], "glitchSpeed": 98, "centerVignette": true, "outerVignette": true, "smooth": true, "client:component-hydration": "load", "client:component-path": "/home/sween/Desktop/INTREQD/site/src/React/LetterGlitch.tsx", "client:component-export": "default" })} <div${addAttribute({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff"
  }, "style")}> <img${addAttribute(`/png/isc.png`, "src")}> </div> </div> </div> </div> </div></section> `;
}, "/home/sween/Desktop/INTREQD/site/src/components/home.astro", void 0);

const svgl = new Proxy({"src":"/_astro/svgl.CqpiwMYd.png","width":1280,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sween/Desktop/INTREQD/site/public/svgl.png";
							}
							
							return target[name];
						}
					});

const stockin = new Proxy({"src":"/_astro/stockin.BweemQKs.png","width":1280,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sween/Desktop/INTREQD/site/public/stockin.png";
							}
							
							return target[name];
						}
					});

const moviesfordevs = new Proxy({"src":"/_astro/moviesfordevs.Dh4tVCOr.png","width":1280,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sween/Desktop/INTREQD/site/public/moviesfordevs.png";
							}
							
							return target[name];
						}
					});

const tron = new Proxy({"src":"/_astro/tron.CbPu4ZKD.png","width":1920,"height":1081,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/sween/Desktop/INTREQD/site/public/tron.png";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "eBPF",
      image: moviesfordevs,
      link: "https://github.com/gothsec/MoviesForDevs",
      preview: "https://movies-for-devs.vercel.app",
      status: "eBPF Applied to IRIS Workloads"
    },
    {
      title: "OMOP Odyssey",
      image: stockin,
      link: "https://www.pidtoo.com",
      preview: "https://www.pidtoo.com",
      status: "Adventures with InterSystems OMOP"
    },
    {
      title: "IKO Plus +",
      image: svgl,
      link: "https://github.com/pheralb/svgl",
      preview: "https://svgl.app",
      status: "Charts for the InterSystmes Kubernetes Operator"
    },
    {
      title: "PID^TOO||",
      image: tron,
      link: "https://github.com/Gothsec/Tron-Legacy-web",
      preview: "https://tron-legacy-web.vercel.app/",
      status: "Identity Resolution on FHIR"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-12 border-t border-[#ffffff10] text-[var(--white)]"> <div class="max-w-5xl mx-auto"> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">Rabbit Holes</h2> <h3 class="text-3xl md:text-4xl font-semibold md:mb-6">Contributions</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${projects.map((project) => renderTemplate`<div class="group"> <a${addAttribute(project.preview, "href")} target="_blank" rel="noopener noreferrer" class="block"> <div class="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": project.image, "alt": project.title, "class": "w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300" })} </div> <div class="flex items-center px-3"> <div class="flex-grow"> <h4 class="text-2xl font-semibold">${project.title}</h4> <span class="py-1 text-sm text-[var(--white-icon)]"> ${project.status} </span> </div> <div class="flex gap-2 ml-auto"> <a target="_blank"${addAttribute(project.link, "href")} aria-label="GitHub" class="size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7"> <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path> </svg> </a> <a target="_blank"${addAttribute(project.preview, "href")} aria-label="Preview" class="size-14 flex justify-center items-center text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-1 border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)]"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7"> <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path> </svg> </a> </div> </div> </a> </div>`)} </div> <a target="_blank" href="https://github.com/Gothsec?tab=repositories" aria-label="GitHub" class="w-full flex items-center justify-center gap-2 mt-9 text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-full bg-[#1414149c] hover:bg-[var(--white-icon-tr)] hover:scale-105"> <span class="md:text-lg text-md">More projects on</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"> <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path> </svg> </a> </div> </section>`;
}, "/home/sween/Desktop/INTREQD/site/src/components/projects.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="w-full py-12 border-t border-[#ffffff10]"> <div class="max-w-5xl mx-auto"> <h2 class="text-lg text-[var(--sec)] mb-2 shiny-sec">Dial Tones of Interest</h2> <h3 class="text-3xl md:text-4xl font-semibold md:mb-6 text-white">
Communities
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> <!-- Left: text --> <div class="text-[var(--white-icon)]"> <p class="mb-4">
Have a question or a project in mind? Feel free to reach out.
</p> <div class="flex items-center gap-2"> <span>Location:</span> <span class="text-[var(--white)]">Colombia, Valle del cauca</span> </div> </div> <!-- Right: three logos inline equally --> <div> <ul class="grid grid-cols-3 gap-6 place-items-center"> <li class="w-full flex items-center justify-center"> <img src="/png/transforms.png" alt="InterSystems" class="min-w-[100px] min-h-[100px] h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy"> </li> <li class="w-full flex items-center justify-center"> <img src="/png/devcomm.png" alt="HL7" class="min-w-[100px] min-h-[100px] h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy"> </li> <li class="w-full flex items-center justify-center"> <img src="/png/cncf-ambassador-icon-color.png" alt="FHIR" class="min-w-[100px] min-h-[100px] h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" loading="lazy"> </li> </ul> </div> </div> </div> </section>`;
}, "/home/sween/Desktop/INTREQD/site/src/components/contact.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full py-12 border-t border-[#ffffff10]"> <div class="max-w-5xl mx-auto"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10"> <div class="flex flex-col lg:items-start items-center space-y-2 gap-9"> <span class="text-white sm-inline">here</span> <div class="flex space-x-6 sm:space-x-8"> ${[
    {
      href: "https://github.com/gothsec",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>',
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/hernandezoscar-dev",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>',
      label: "LinkedIn"
    },
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=oscarandreshernandezpineda@gmail.com&su=Hey%20Oscar!",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24"><path fill="currentColor" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64"/></svg>',
      label: "Email"
    }
  ].map((link) => renderTemplate`<a${addAttribute(link.href, "href")} target="_blank" class="flex flex-col items-center group"${addAttribute(link.label, "aria-label")}> <div class="text-[var(--white-icon)] hover:text-[var(--white)] transition duration-300 ease-in-out"> <div>${unescapeHTML(link.icon)}</div> </div> </a>`)} </div> </div> <div class="flex flex-col items-center space-y-2"> <img width="50%" height="50%"${addAttribute(`./png/transforms.png`, "src")}> </div> <div class="flex flex-col items-center lg:items-start space-y-6"> <div class="w-full max-w-xs"> <p class="text-center"><img class="text-center" width="50%" height="50%"${addAttribute(`./png/BSG-logo-reverse.png`, "src")}></p> </div> </div> </div> <div class="mt-12 pt-8 border-t border-[#ffffff10]"> <p class="text-center text-sm text-[var(--white-icon)] space-y-4"> <!-- If you are using this template, by MIT License you can't remove the copyright notice --> <span class="block sm:inline">
Copyright © 2025 Integration Required, LLC Built with
<span class="inline align-middle"> <img class="h-5 w-5 object-contain inline-block filter brightness-0 invert opacity-50" src="/svg/astro.svg" alt="Astro logo"> <img class="h-5 w-5 object-contain inline-block filter brightness-0 invert opacity-50" src="/svg/tailwindcss.svg" alt="Astro logo"> </span>
by <a href="https://github.com/Gothsec">Oscar Hernandez</a>.
</span> </p> </div> </div> </footer>`;
}, "/home/sween/Desktop/INTREQD/site/src/components/footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Oscar Hernandez" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Home", $$Home, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/sween/Desktop/INTREQD/site/src/pages/index.astro", void 0);

const $$file = "/home/sween/Desktop/INTREQD/site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
