import{j as e}from"./jsx-runtime.6940b965.js";import{u as d}from"./use-auth.86ed5fb5.js";import{u}from"./use-copy-text.77785bb1.js";import{C as x}from"./CheckIcon.1124cdab.js";import{c as f}from"./classname.fdb4949b.js";import"./index.070054a4.js";import"./jwt.ab9b7b25.js";import"./tw-merge.ecc400cc.js";function g(t){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...t,children:[e.jsx("path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}),e.jsx("polyline",{points:"16 6 12 2 8 6"}),e.jsx("line",{x1:"12",x2:"12",y1:"2",y2:"15"})]})}function L(t){const{resourceId:r,resourceType:o,className:c,shareIconClassName:m,checkIconClassName:p,isCustomResource:n}=t,a=d(),{copyText:l,isCopied:i}=u();function h(){const s=new URL("https://roadmap.sh");o==="roadmap"&&!n?s.pathname=`/${r}`:o==="best-practice"&&!n?s.pathname=`/best-practices/${r}`:(s.pathname="/r",s.searchParams.set("id",r||"")),s.searchParams.set("s",a?.id||""),l(s.toString())}return a?e.jsx("button",{className:f("flex items-center gap-1 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-70",i?"text-green-500":"text-gray-500 hover:text-black",c),onClick:h,children:i?e.jsxs(e.Fragment,{children:[e.jsx(x,{additionalClasses:`h-3.5 w-3.5 ${p}`})," ","Link Copied"]}):e.jsxs(e.Fragment,{children:[e.jsx(g,{className:`h-3.5 w-3.5 stroke-[2.5px] ${m}`})," ","Share Progress"]})}):null}export{L as ProgressShareButton};
