import{j as e}from"./jsx-runtime.6940b965.js";import{r as n}from"./index.070054a4.js";import{C as A}from"./CheckIcon.1124cdab.js";import{B as z}from"./building.4e9dc788.js";import{d as _,h as L,a as $}from"./http.408ee04f.js";import{S as B}from"./Spinner.799b0955.js";import{p as I}from"./page.2efb91d4.js";import{U as H,S as q}from"./UpdateTeamResourceModal.58273202.js";import{C as D}from"./CreateRoadmapModal.4e3f89d3.js";import{u as M}from"./use-toast.dbd347db.js";import{M as E}from"./map.07b8754f.js";import{S as G}from"./shapes.18fdadc5.js";import{g as Y,s as U}from"./browser.6245b9a5.js";import{T as W}from"./TrashIcon.d3634734.js";import{R as O}from"./RoleDropdown.26529d12.js";import"./jwt.ab9b7b25.js";import"./index.4b590221.js";import"./use-keydown.bb1f91bb.js";import"./use-outside-click.d7ce4a3d.js";import"./close.bb7a0ac2.js";import"./index.es.ebad3893.js";import"./resource-progress.8f66df23.js";/* empty css                       */import"./Modal.a090ae26.js";import"./createLucideIcon.3c9fdece.js";import"./classname.fdb4949b.js";import"./tw-merge.ecc400cc.js";import"./toast.5b8c89b6.js";function V(b){const{steps:t,activeIndex:a=0,completeSteps:s=[]}=b;return e.jsx("ol",{className:"flex w-full items-center text-gray-500",children:t.map((u,c)=>{const f=s.includes(c),x=a===c,l=c===t.length-1;return e.jsxs(n.Fragment,{children:[e.jsxs("li",{className:`flex items-center ${f||x?"text-black":"text-gray-400"}`,children:[f&&e.jsx(A,{additionalClasses:"mr-2 top-[0.5px] w-[18px] h-[18px]"}),!f&&e.jsx("span",{className:"mr-2 font-semibold",children:c+1}),e.jsx("span",{className:"flex flex-grow",children:u.label})]}),!l&&e.jsx("li",{className:"mx-5 flex flex-grow rounded-md bg-gray-200",children:e.jsx("span",{className:"h-1 w-full"})})]},c)})},"stepper")}const J={src:"/_astro/users.867d7978.svg",width:24,height:24,format:"svg"};function P(b){const{isLoading:t=!1,text:a="Next Step",type:s="button",loadingMessage:u="Please wait ..",onClick:c=()=>null,hasNextArrow:f=!0}=b;return e.jsx("button",{type:s,onClick:c,disabled:t,className:"rounded-md border border-black bg-black px-4 py-2 text-white disabled:opacity-50",children:t?e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsx(B,{}),e.jsx("span",{className:"ml-2",children:u})]}):e.jsxs(e.Fragment,{children:[a,f&&e.jsx("span",{className:"ml-1",children:"→"})]})})}const K=[{value:"company",label:"Company",icon:z.src,description:"Track the skills and learning progress of the tech team at your company"},{value:"study_group",label:"Study Group",icon:J.src,description:"Invite your friends or course-mates and track your learning progress together"}];function Q(b){const{team:t,selectedTeamType:a,onStepComplete:s,setSelectedTeamType:u}=b,[c,f]=n.useState(!1),[x,l]=n.useState();async function m(){if(!t){s();return}f(!0),l("");const{response:o,error:w}=await _(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:t.name,website:t?.links?.website||void 0,type:a,gitHubUrl:t?.links?.github||void 0,...a==="company"&&{teamSize:t.teamSize,linkedInUrl:t?.links?.linkedIn||void 0}});if(w||!o){f(!1),l(w?.message||"Something went wrong");return}f(!1),l(""),s()}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col gap-3 sm:flex-row",children:K.map(o=>e.jsxs("button",{className:`flex flex-grow flex-col items-center rounded-lg border px-5 pt-12 pb-10 ${o.value==a?"border-gray-400 bg-gray-100":"border-gray-300 hover:border-gray-400 hover:bg-gray-50"}`,onClick:()=>u(o.value),children:[e.jsx("img",{alt:o.label,src:o.icon,className:`mb-3 h-12 w-12 opacity-10 ${o.value===a?"opacity-100":""}`},o.value),e.jsx("span",{className:"mb-2 block text-2xl font-bold",children:o.label}),e.jsx("span",{className:"text-sm leading-[21px] text-gray-500",children:o.description})]},o.value))}),x&&e.jsx("div",{className:"mt-4 text-sm text-red-500",children:x}),e.jsxs("div",{className:"mt-4 flex flex-col items-stretch justify-between gap-2 md:flex-row md:items-center",children:[e.jsx("a",{href:"/account",className:"rounded-md border border-red-400 bg-white px-8 py-2 text-center text-red-500",children:"Cancel"}),e.jsx(P,{type:"button",onClick:m,isLoading:c,text:"Next Step",loadingMessage:"Updating team .."})]})]})}const X=["1-5","6-10","11-25","26-50","51-100","101-200","201-500","501-1000","1000+"];function Z(b){const{team:t,selectedTeamType:a,onBack:s,onStepComplete:u}=b,[c,f]=n.useState(""),x=n.useRef(null);n.useEffect(()=>{x.current&&x.current.focus()},[x]);const[l,m]=n.useState(!1),[o,w]=n.useState(t?.name||""),[N,C]=n.useState(t?.links?.website||""),[i,R]=n.useState(t?.links?.linkedIn||""),[g,j]=n.useState(t?.links?.github||""),[p,v]=n.useState(t?.teamSize||""),k=async h=>{if(h.preventDefault(),m(!0),!o||!a){m(!1);return}let r,d;if(t?._id){if({response:r,error:d}=await _(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:o,website:N||void 0,type:a,gitHubUrl:g||void 0,...a==="company"&&{teamSize:p,linkedInUrl:i||void 0}}),d||r?.status!=="ok"){f(d?.message||"Something went wrong. Please try again."),m(!1);return}u({...t,name:o,_id:t._id,links:{website:N||t?.links?.website,linkedIn:i||t?.links?.linkedIn,github:g||t?.links?.github},type:a,teamSize:p})}else{if({response:r,error:d}=await L("https://api.roadmap.sh/v1-create-team",{name:o,website:N||void 0,type:a,gitHubUrl:g||void 0,...a==="company"&&{teamSize:p,linkedInUrl:i||void 0},roadmapIds:[],bestPracticeIds:[]}),d||!r?._id){f(d?.message||"Something went wrong. Please try again."),m(!1);return}u(r)}};return e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("label",{htmlFor:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:a==="company"?"Company Name":"Group Name"}),e.jsx("input",{type:"text",name:"name",ref:x,autoFocus:!0,id:"name",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"Roadmap Inc.",disabled:l,required:!0,value:o,onInput:h=>w(h.target.value)})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Website"}),e.jsx("input",{type:"url",name:"website",required:!0,id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://roadmap.sh",disabled:l,value:N,onInput:h=>C(h.target.value)})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:"text-sm leading-none text-slate-500",children:"Company LinkedIn URL"}),e.jsx("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/company/roadmapsh",disabled:l,value:i,onInput:h=>R(h.target.value)})]}),e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"website",className:"text-sm leading-none text-slate-500",children:"GitHub Organization URL"}),e.jsx("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/roadmapsh",disabled:l,value:g,onInput:h=>j(h.target.value)})]}),a==="company"&&e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsx("label",{htmlFor:"team-size",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Tech Team Size"}),e.jsxs("select",{name:"team-size",id:"team-size",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:a==="company",disabled:l,value:p,onChange:h=>v(h.target.value),children:[e.jsx("option",{value:"",children:"Select team size"}),X.map(h=>e.jsxs("option",{value:h,children:[h," people"]},h))]})]}),c&&e.jsx("div",{className:"mt-4 flex w-full flex-col",children:e.jsx("span",{className:"text-sm text-red-500",children:c})}),e.jsxs("div",{className:"mt-4 flex flex-col items-center justify-between gap-2 md:flex-row",children:[e.jsxs("button",{type:"button",onClick:s,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e.jsx("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e.jsx(P,{isLoading:l,text:"Next Step",type:"submit",loadingMessage:"Creating team .."})]})]})}function ee(b){const{teamId:t,teamResources:a=[],setTeamResources:s}=b,u=M(),[c,f]=n.useState(""),[x,l]=n.useState(!1),[m,o]=n.useState([]),[w,N]=n.useState(""),[C,i]=n.useState(!1),[R,g]=n.useState("");async function j(){const{error:r,response:d}=await $("/pages.json");if(r){u.error(r.message||"Something went wrong. Please try again!"),g(r.message||"Something went wrong. Please try again!");return}if(!d)return[];const y=d.filter(S=>S.group==="Roadmaps").sort((S,T)=>S.title==="Android"?1:S.title.localeCompare(T.title));return o(y),d}async function p(r){if(!t)return;I.set("Deleting resource");const{error:d,response:y}=await _(`https://api.roadmap.sh/v1-delete-team-resource-config/${t}`,{resourceId:r,resourceType:"roadmap"});if(d||!y){g(d?.message||"Error deleting roadmap");return}s(y)}async function v(r){I.set("Removing roadmap"),p(r).finally(()=>{I.set("")})}async function k(r){if(!t)return;I.set("Adding roadmap to team");const{error:d,response:y}=await _(`https://api.roadmap.sh/v1-update-team-resource-config/${t}`,{teamId:t,resourceId:r,resourceType:"roadmap",removed:[]});if(d||!y){g(d?.message||"Error adding roadmap");return}s(y)}n.useEffect(()=>{j().finally(()=>{})},[]);function h(r){const{_id:d}=r;d&&(j().finally(()=>{}),k(d).finally(()=>{I.set("")}))}return e.jsxs("div",{children:[w&&e.jsx(H,{onClose:()=>N(""),resourceId:w,resourceType:"roadmap",teamId:t,setTeamResourceConfig:s,defaultRemovedItems:a.find(r=>r.resourceId===w)?.removed||[]}),x&&e.jsx(q,{onClose:()=>l(!1),teamResourceConfig:a,allRoadmaps:m,teamId:t,onRoadmapAdd:r=>{k(r).finally(()=>{I.set("")})},onRoadmapRemove:r=>{v(r).finally(()=>{})}}),e.jsxs("div",{className:"my-3 flex items-center gap-4",children:[C&&e.jsx(D,{teamId:t,onClose:()=>i(!1),onCreated:r=>{h(r),i(!1)}}),e.jsxs("button",{className:"flex h-10 grow items-center justify-center gap-2 rounded-md border border-black bg-white text-black transition-colors hover:bg-black hover:text-white",onClick:()=>{l(!0)},children:[e.jsx(E,{className:"h-4 w-4 stroke-[2.5]"}),"Pick from our roadmaps"]}),e.jsx("span",{className:"text-base text-gray-400",children:"or"}),e.jsxs("button",{className:"flex h-10 grow items-center justify-center gap-2 rounded-md border border-black bg-white text-black transition-colors hover:bg-black hover:text-white",onClick:()=>{i(!0)},children:[e.jsx(G,{className:"h-4 w-4 stroke-[2.5]"}),"Create Custom Roadmap"]})]}),!a.length&&e.jsxs("div",{className:"flex min-h-[240px] flex-col items-center justify-center rounded-lg border",children:[e.jsx(E,{className:"mb-2 h-12 w-12 text-gray-300"}),e.jsx("p",{className:"text-lg font-semibold",children:"No roadmaps selected."}),e.jsxs("p",{className:"text-base text-gray-400",children:["Pick from"," ",e.jsx("span",{onClick:()=>l(!0),className:"cursor-pointer underline",children:"our roadmaps"})," ","or"," ",e.jsx("span",{onClick:()=>{i(!0)},className:"cursor-pointer underline",children:"create a new one"}),"."]})]}),a.length>0&&e.jsx("div",{className:"mb-3 grid grid-cols-1 flex-wrap gap-2.5 sm:grid-cols-3",children:a.map(({isCustomResource:r,title:d,resourceId:y,removed:S,topics:T})=>e.jsxs("div",{className:"relative flex flex-col items-start overflow-hidden rounded-md border border-gray-300",children:[e.jsxs("div",{className:"w-full flex-grow px-3 pb-2 pt-4",children:[e.jsx("span",{className:"mb-0.5 block text-base font-medium leading-snug text-black",children:d}),S.length>0||T&&T>0?e.jsx("span",{className:"text-xs leading-none text-gray-400",children:r?e.jsxs(e.Fragment,{children:["Custom · ",T," topic",T&&T>1?"s":""]}):e.jsxs(e.Fragment,{children:[S.length," topic",S.length>1?"s":""," removed"]})}):e.jsx("span",{className:"text-xs italic leading-none text-gray-400/60",children:r?"Placeholder roadmap.":"No changes made .."})]}),c===y&&e.jsx("div",{className:"flex w-full items-center justify-end p-3 text-sm",children:e.jsxs("span",{className:"text-xs text-gray-500",children:["Are you sure?"," ",e.jsx("button",{onClick:()=>v(y),className:"mx-0.5 text-red-500 underline underline-offset-1",children:"Yes"})," ",e.jsx("button",{onClick:()=>f(""),className:"text-red-500 underline underline-offset-1",children:"No"})]})}),(!c||c!==y)&&e.jsxs("div",{className:"flex w-full justify-between p-3",children:[e.jsx("button",{type:"button",className:"text-xs text-gray-500 underline hover:text-black focus:outline-none",onClick:()=>{if(r){window.open(`https://draw.roadmap.sh/${y}`,"_blank");return}N(y)},children:"Customize"}),e.jsx("button",{type:"button",className:"text-xs text-red-500 underline hover:text-black",onClick:()=>f(y),children:"Remove"})]})]},y))})]})}function te(b){const{team:t,onBack:a,onNext:s,teamResourceConfig:u,setTeamResourceConfig:c}=b;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4 flex w-full flex-col",children:[e.jsxs("div",{className:"mb-1 mt-2",children:[e.jsx("h2",{className:"mb-1 text-lg font-bold md:mb-1.5 md:text-2xl",children:"Select Roadmaps"}),e.jsx("p",{className:"text-sm text-gray-700",children:"You can always add and customize your roadmaps later."})]}),e.jsx(ee,{teamId:t._id,teamResources:u,setTeamResources:c})]}),e.jsxs("div",{className:"mt-4 flex flex-col items-stretch justify-between gap-2 md:flex-row md:items-center",children:[e.jsxs("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e.jsx("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:s,disabled:u.length!==0,className:"flex-grow rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black md:flex-auto disabled:opacity-50 disabled:pointer-events-none",children:"Skip for Now"}),e.jsxs("button",{type:"submit",disabled:u.length===0,onClick:s,className:"rounded-md border bg-black px-4 py-2 text-white disabled:opacity-50",children:["Next Step",e.jsx("span",{className:"ml-1",children:"→"})]})]})]})]})}function F(){return`${new Date().getTime()}`}function se(b){const{onNext:t,onBack:a,team:s}=b,[u,c]=n.useState(""),[f,x]=n.useState(!1),l=n.useRef(null),[m,o]=n.useState([{id:F(),email:"",role:"member"}]);async function w(){x(!0);const{error:i,response:R}=await L(`https://api.roadmap.sh/v1-invite-team/${s?._id}`,{members:m});if(i||!R){c(i?.message||"Something went wrong"),x(!1);return}t()}function N(){l.current&&l.current.focus()}function C(i){i.preventDefault(),w().finally(()=>null)}return n.useEffect(()=>{N()},[m.length]),e.jsxs("form",{className:"mt-4 flex w-full flex-col",onSubmit:C,children:[e.jsxs("div",{className:"mb-1 mt-2",children:[e.jsx("h2",{className:"mb-1 md:mb-2 text-lg md:text-2xl font-bold",children:"Invite your Team"}),e.jsx("p",{className:"text-sm text-gray-700",children:"Use the form below to invite your team members to your team. You can also invite them later."})]}),e.jsx("div",{className:"mt-4 flex flex-col gap-1",children:m.map((i,R)=>e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[e.jsx("input",{ref:R===m.length-1?l:null,autoFocus:!0,type:"email",name:"email",required:!0,id:"email",placeholder:"Email",value:i.email,onChange:g=>{const j=m.map(p=>p.id===i.id?{...p,email:g.target?.value}:p);o(j)},className:"flex-grow rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900"}),e.jsx(O,{selectedRole:i.role,setSelectedRole:g=>{const j=m.map(p=>p.id===i.id?{...p,role:g}:p);o(j)}}),e.jsx("button",{disabled:m.length<=1,type:"button",className:"rounded-md border border-red-200 bg-white px-4 py-2 text-red-500 hover:bg-red-100 disabled:opacity-30",onClick:()=>{o(m.filter(g=>g.id!==i.id))},children:e.jsx(W,{className:"h-5 w-5"})})]},i.id))}),m.length<=30&&e.jsx("button",{onClick:()=>{o([...m,{id:F(),email:"",role:"member"}])},type:"button",className:"mt-2 rounded-md border border-dashed border-gray-400 py-2 text-sm text-gray-500 hover:border-gray-500 hover:text-gray-800",children:"+ Add another"}),u&&e.jsx("div",{className:"mt-2 text-sm font-medium text-red-500",role:"alert",children:u}),e.jsxs("div",{className:"mt-4 flex flex-col sm:flex-row items-stretch md:items-center justify-between gap-2",children:[e.jsxs("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e.jsx("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:t,disabled:m.filter(i=>i.email).length!==0,className:"rounded-md flex-grow md:flex-auto border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black disabled:opacity-50 disabled:pointer-events-none",children:"Skip for Now"}),e.jsx(P,{type:"submit",isLoading:f,text:"Send Invites",loadingMessage:"Updating team ..",hasNextArrow:!1})]})]})]})}function ae({team:b}){return e.jsx("div",{className:"mt-4 flex flex-col rounded-xl border py-12 text-center",children:e.jsxs("div",{className:"mb-1 flex flex-col items-center",children:[e.jsx(A,{additionalClasses:"h-14 w-14 mb-4 opacity-100"}),e.jsx("h2",{className:"mb-2 text-2xl font-bold",children:"Team Created"}),e.jsx("p",{className:"text-sm text-gray-700",children:"Your team has been created. Happy learning!"}),e.jsx("a",{href:`/team/progress?t=${b._id}`,className:"mt-4 rounded-md bg-black px-5 py-1.5 text-sm text-white",children:"View Team"})]})})}function $e(){const{s:b,t}=Y(),a=M(),[s,u]=n.useState(),[c,f]=n.useState(!!t&&!s?._id),[x,l]=n.useState(0);async function m(p,v){const{response:k,error:h}=await $(`https://api.roadmap.sh/v1-get-team/${p}`);if(h||!k){a.error(h?.message||"Error loading team"),window.location.href="/account";return}const r=parseInt(v,10),d=Array(r).fill(1).map((y,S)=>S);u(k),i(k.type),g(d),l(r),await N(p)}const[o,w]=n.useState([]);async function N(p){const{error:v,response:k}=await $(`https://api.roadmap.sh/v1-get-team-resource-config/${p}`);if(v||!Array.isArray(k)){console.error(v);return}w(k)}n.useEffect(()=>{!t||!b||s||(I.set("Fetching team"),f(!0),m(t,b).finally(()=>{f(!1),I.set("")}))},[t,b]);const[C,i]=n.useState(s?.type||"company"),[R,g]=n.useState([0]);if(c)return null;let j=null;return x===0?j=e.jsx(Q,{team:s,selectedTeamType:C,setSelectedTeamType:i,onStepComplete:()=>{s?._id&&U({t:s._id,s:"1"}),g([0]),l(1)}}):x===1?j=e.jsx(Z,{team:s,onBack:()=>{s?._id&&U({t:s._id,s:"0"}),l(0)},onStepComplete:p=>{const v=p._id;U({t:v,s:"2"}),g([0,1]),l(2),u(p)},selectedTeamType:C}):x===2?j=e.jsx(te,{team:s,teamResourceConfig:o,setTeamResourceConfig:w,onBack:()=>{s&&U({t:s._id,s:"1"}),l(1)},onNext:()=>{U({t,s:"3"}),g([0,1,2]),l(3)}}):x===3?j=e.jsx(se,{team:s,onBack:()=>{s&&U({t:s._id,s:"2"}),l(2)},onNext:()=>{s&&U({t:s._id,s:"4"}),g([0,1,2,3]),l(4)}}):x===4&&(j=e.jsx(ae,{team:s})),e.jsxs("div",{className:"mx-auto max-w-[700px] py-1 md:py-6",children:[e.jsxs("div",{className:"mb-3 md:mb-8 pb-3 md:pb-0 border-b md:border-b-0 flex flex-col items-start md:items-center",children:[e.jsx("h1",{className:"text-xl md:text-4xl font-bold",children:"Create Team"}),e.jsx("p",{className:"mt-1 md:mt-2 text-sm md:text-base text-gray-500",children:"Complete the steps below to create your team"})]}),e.jsx("div",{className:"mb-8 mt-8 hidden sm:flex w-full",children:e.jsx(V,{activeIndex:x,completeSteps:R,steps:[{label:"Type"},{label:"Details"},{label:"Skills"},{label:"Members"}]})}),j]})}export{$e as CreateTeamForm};
