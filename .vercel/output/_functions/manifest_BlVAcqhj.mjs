import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_ZpfE3u4Z.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_H1MVR52n.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sween/Desktop/INTREQD/site/","cacheDir":"file:///home/sween/Desktop/INTREQD/site/node_modules/.astro/","outDir":"file:///home/sween/Desktop/INTREQD/site/docs/","srcDir":"file:///home/sween/Desktop/INTREQD/site/src/","publicDir":"file:///home/sween/Desktop/INTREQD/site/public/","buildClientDir":"file:///home/sween/Desktop/INTREQD/site/docs/client/","buildServerDir":"file:///home/sween/Desktop/INTREQD/site/docs/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ChdPOQzn.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/sween/Desktop/INTREQD/site/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/sween/Desktop/INTREQD/site/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DEglvyGI.mjs","\u0000@astrojs-manifest":"manifest_BlVAcqhj.mjs","/home/sween/Desktop/INTREQD/site/src/React/SkillsList.tsx":"_astro/SkillsList.CX-feQDh.js","/home/sween/Desktop/INTREQD/site/src/React/LetterGlitch.tsx":"_astro/LetterGlitch.DZ3ecbG4.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","/home/sween/Desktop/INTREQD/site/src/components/nav.astro?astro&type=script&index=0&lang.ts":"_astro/nav.astro_astro_type_script_index_0_lang.BYJ67qGU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/sween/Desktop/INTREQD/site/src/components/nav.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"main-nav\"),v=1e3;let i=null;function h(){if(window.scrollY>0){s?.classList.add(\"scrolling\");const o=Math.min(window.scrollY/v,1),e=1-Math.pow(1-o,4),r=528,t=window.innerWidth*.8,n=t-(t-r)*e;window.innerWidth>=768&&s?.style.setProperty(\"width\",`${n}px`)}else s?.classList.remove(\"scrolling\"),s?.style.setProperty(\"width\",\"80%\");i=null}window.addEventListener(\"scroll\",()=>{i||(i=requestAnimationFrame(h))},{passive:!0});document.querySelectorAll('a[href^=\"#\"]').forEach(o=>{o.addEventListener(\"click\",function(e){e.preventDefault();const t=e.currentTarget.getAttribute(\"href\")?.substring(1)||\"\",n=document.getElementById(t);n&&n.scrollIntoView({behavior:\"smooth\"})})});document.addEventListener(\"DOMContentLoaded\",()=>{const o=document.querySelectorAll(\"section[id]\"),e=document.querySelectorAll(\"nav a[href^='#']\"),r={threshold:.6},t=c=>{c.forEach(a=>{if(a.isIntersecting){e.forEach(u=>u.classList.remove(\"active\"));const d=a.target.getAttribute(\"id\"),l=document.querySelector(`nav a[href=\"#${d}\"]`);l&&l.classList.add(\"active\")}})},n=new IntersectionObserver(t,r);o.forEach(c=>n.observe(c))});"]],"assets":["/_astro/svgl.CqpiwMYd.png","/_astro/tron.CbPu4ZKD.png","/_astro/moviesfordevs.Dh4tVCOr.png","/_astro/stockin.BweemQKs.png","/_astro/index.ChdPOQzn.css","/favicon.png","/moviesfordevs.png","/og.image.png","/stockin.png","/svgl.png","/template.png","/tron.png","/_astro/LetterGlitch.DZ3ecbG4.js","/_astro/SkillsList.CX-feQDh.js","/_astro/client.BPIbHqJh.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/png/BSG-logo-reverse.png","/png/cncf-ambassador-icon-color.png","/png/devcomm.png","/png/favicon-32x32.png","/png/fhir.png","/png/fhir.pnm","/png/fhir_small.png","/png/healthcareapi.png","/png/hs.png","/png/isc.png","/png/ohdsi.png","/png/ohdsi.pnm","/png/ohdsi.svg","/png/ohdsi2.png","/png/transforms.png","/png/whiteyboy_blue.png","/svg/CSS3.svg","/svg/HTML5.svg","/svg/astro.svg","/svg/bash.svg","/svg/databricks.svg","/svg/fHIR.svg","/svg/git.svg","/svg/googleCloud.svg","/svg/healthCareApi.svg","/svg/healthShare.svg","/svg/helm.svg","/svg/iris.svg","/svg/javaScript.svg","/svg/kubernetes.svg","/svg/mysql.svg","/svg/next.svg","/svg/nodejs.svg","/svg/oHDSI.svg","/svg/react.svg","/svg/supabase.svg","/svg/tailwindcss.svg","/svg/typeScript.svg","/svg/vercel.svg","/svg/vue.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"gz9RMUq+L/gi8KqkH4cFuB6WggwN6i8ZdJTHoZWawq0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
