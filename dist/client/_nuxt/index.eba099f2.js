import{z as ie,A as h,B as V,C as ee,D as bt,e as te,E as _t,F as Ee,q as i,G as Ne,H as pe,c as v,I as Y,J as O,K as _,L as M,M as ne,r as ce,N as ae,O as pt,P as Re,Q as Ct,T as St,R as Ae,S as ze,U as de,V as D,W as Q,X as kt,Y as wt,Z as le,$ as Oe,a0 as je,a1 as xt,a2 as Ce,a3 as Vt,b as It,a4 as ve,a5 as Lt,a6 as Pt,a7 as Se,a8 as $t,a9 as ke,aa as se,j as Tt,ab as Bt,s as c,k as Et,v as g}from"./entry.b69e976f.js";const Nt=["top","bottom"],Rt=["start","end","left","right"];function At(e,n){let[t,a]=e.split(" ");return a||(a=ie(Nt,t)?"start":ie(Rt,t)?"top":"center"),{side:we(t,n),align:we(a,n)}}function we(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}const L=h({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function fe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return V()({name:t??ee(bt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...L()},setup(a,l){let{slots:s}=l;return()=>{var r;return te(a.tag,{class:[e,a.class],style:a.style},(r=s.default)==null?void 0:r.call(s))}}})}function T(e){const n=_t("useRender");n.render=e}const zt=V()({name:"VCardActions",props:L(),setup(e,n){let{slots:t}=n;return Ee({VBtn:{variant:"text"}}),T(()=>{var a;return i("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ot=fe("v-card-subtitle"),S=fe("v-card-title");function me(e){return Ne(()=>{const n=[],t={};return e.value.background&&(pe(e.value.background)?t.backgroundColor=e.value.background:n.push(`bg-${e.value.background}`)),e.value.text&&(pe(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function He(e,n){const t=v(()=>({text:Y(e)?e.value:n?e[n]:null})),{colorClasses:a,colorStyles:l}=me(t);return{textColorClasses:a,textColorStyles:l}}function xe(e,n){const t=v(()=>({background:Y(e)?e.value:n?e[n]:null})),{colorClasses:a,colorStyles:l}=me(t);return{backgroundColorClasses:a,backgroundColorStyles:l}}const jt=["x-small","small","default","large","x-large"],Fe=h({size:{type:[String,Number],default:"default"}},"size");function De(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return Ne(()=>{let t,a;return ie(jt,e.size)?t=`${n}--size-${e.size}`:e.size&&(a={width:_(e.size),height:_(e.size)}),{sizeClasses:t,sizeStyles:a}})}const j=h({tag:{type:String,default:"div"}},"tag"),Ht=h({color:String,start:Boolean,end:Boolean,icon:M,...L(),...Fe(),...j({tag:"i"}),...ne()},"VIcon"),Ft=V()({name:"VIcon",props:Ht(),setup(e,n){let{attrs:t,slots:a}=n;const l=ce(),{themeClasses:s}=ae(e),{iconData:r}=pt(v(()=>l.value||e.icon)),{sizeClasses:o}=De(e),{textColorClasses:u,textColorStyles:d}=He(Re(e,"color"));return T(()=>{var b,p;const m=(b=a.default)==null?void 0:b.call(a);return m&&(l.value=(p=Ct(m).filter(C=>C.type===St&&C.children&&typeof C.children=="string")[0])==null?void 0:p.children),i(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,o.value,u.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:_(e.size),height:_(e.size),width:_(e.size)},d.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[m]})}),{}}});const Me=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function We(e){return{dimensionStyles:v(()=>({height:_(e.height),maxHeight:_(e.maxHeight),maxWidth:_(e.maxWidth),minHeight:_(e.minHeight),minWidth:_(e.minWidth),width:_(e.width)}))}}function Dt(e){return{aspectStyles:v(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Ue=h({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...L(),...Me()},"VResponsive"),Ve=V()({name:"VResponsive",props:Ue(),setup(e,n){let{slots:t}=n;const{aspectStyles:a}=Dt(e),{dimensionStyles:l}=We(e);return T(()=>{var s;return i("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[l.value,e.style]},[i("div",{class:"v-responsive__sizer",style:a.value},null),(s=t.additional)==null?void 0:s.call(t),t.default&&i("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),Mt=h({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),G=(e,n)=>{let{slots:t}=n;const{transition:a,disabled:l,...s}=e,{component:r=ze,...o}=typeof a=="object"?a:{};return te(r,Ae(typeof a=="string"?{name:l?"":a}:o,s,{disabled:l}),t)};function Wt(e,n){if(!de)return;const t=n.modifiers||{},a=n.value,{handler:l,options:s}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var b;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const d=(b=e._observe)==null?void 0:b[n.instance.$.uid];if(!d)return;const m=o.some(p=>p.isIntersecting);l&&(!t.quiet||d.init)&&(!t.once||m||d.init)&&l(m,o,u),m&&t.once?Xe(e,n):d.init=!0},s);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Xe(e,n){var a;const t=(a=e._observe)==null?void 0:a[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Ut={mounted:Wt,unmounted:Xe},Xt=Ut,Yt=h({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Ue(),...L(),...Mt()},"VImg"),Ye=V()({name:"VImg",directives:{intersect:Xt},props:Yt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:a}=n;const l=D(""),s=ce(),r=D(e.eager?"loading":"idle"),o=D(),u=D(),d=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=v(()=>d.value.aspect||o.value/u.value||0);Q(()=>e.src,()=>{b(r.value!=="idle")}),Q(m,(f,y)=>{!f&&y&&s.value&&P(s.value)}),kt(()=>b());function b(f){if(!(e.eager&&f)&&!(de&&!f&&!e.eager)){if(r.value="loading",d.value.lazySrc){const y=new Image;y.src=d.value.lazySrc,P(y,null)}d.value.src&&wt(()=>{var y,I;if(t("loadstart",((y=s.value)==null?void 0:y.currentSrc)||d.value.src),(I=s.value)!=null&&I.complete){if(s.value.naturalWidth||C(),r.value==="error")return;m.value||P(s.value,null),p()}else m.value||P(s.value),H()})}}function p(){var f;H(),r.value="loaded",t("load",((f=s.value)==null?void 0:f.currentSrc)||d.value.src)}function C(){var f;r.value="error",t("error",((f=s.value)==null?void 0:f.currentSrc)||d.value.src)}function H(){const f=s.value;f&&(l.value=f.currentSrc||f.src)}let B=-1;function P(f){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{clearTimeout(B);const{naturalHeight:F,naturalWidth:$}=f;F||$?(o.value=$,u.value=F):!f.complete&&r.value==="loading"&&y!=null?B=window.setTimeout(I,y):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,u.value=1)};I()}const E=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),k=()=>{var I;if(!d.value.src||r.value==="idle")return null;const f=i("img",{class:["v-img__img",E.value],src:d.value.src,srcset:d.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:p,onError:C},null),y=(I=a.sources)==null?void 0:I.call(a);return i(G,{transition:e.transition,appear:!0},{default:()=>[le(y?i("picture",{class:"v-img__picture"},[y,f]):f,[[xt,r.value==="loaded"]])]})},R=()=>i(G,{transition:e.transition},{default:()=>[d.value.lazySrc&&r.value!=="loaded"&&i("img",{class:["v-img__img","v-img__img--preload",E.value],src:d.value.lazySrc,alt:e.alt},null)]}),A=()=>a.placeholder?i(G,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!a.error)&&i("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,N=()=>a.error?i(G,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&i("div",{class:"v-img__error"},[a.error()])]}):null,W=()=>e.gradient?i("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,z=D(!1);{const f=Q(m,y=>{y&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{z.value=!0})}),f())})}return T(()=>{const[f]=Ve.filterProps(e);return le(i(Ve,Ae({class:["v-img",{"v-img--booting":!z.value},e.class],style:[{width:_(e.width==="auto"?o.value:e.width)},e.style]},f,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>i(je,null,[i(k,null,null),i(R,null,null),i(W,null,null),i(A,null,null),i(N,null,null)]),default:a.default}),[[Oe("intersect"),{handler:b,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:s,state:r,naturalWidth:o,naturalHeight:u}}}),qt=[null,"default","comfortable","compact"],ge=h({density:{type:String,default:"default",validator:e=>qt.includes(e)}},"density");function qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{densityClasses:v(()=>`${n}--density-${e.density}`)}}const he=h({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ye(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{roundedClasses:v(()=>{const a=Y(e)?e.value:e.rounded,l=[];if(a===!0||a==="")l.push(`${n}--rounded`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))l.push(`rounded-${s}`);return l})}}const Gt=["elevated","flat","tonal","outlined","text","plain"];function Ge(e,n){return i(je,null,[e&&i("span",{key:"overlay",class:`${n}__overlay`},null),i("span",{key:"underlay",class:`${n}__underlay`},null)])}const Je=h({color:String,variant:{type:String,default:"elevated",validator:e=>Gt.includes(e)}},"variant");function Ke(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();const t=v(()=>{const{variant:s}=Ce(e);return`${n}--variant-${s}`}),{colorClasses:a,colorStyles:l}=me(v(()=>{const{variant:s,color:r}=Ce(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:a,colorStyles:l,variantClasses:t}}const Jt=h({start:Boolean,end:Boolean,icon:M,image:String,...L(),...ge(),...he(),...Fe(),...j(),...ne(),...Je({variant:"flat"})},"VAvatar"),Ie=V()({name:"VAvatar",props:Jt(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=ae(e),{colorClasses:l,colorStyles:s,variantClasses:r}=Ke(e),{densityClasses:o}=qe(e),{roundedClasses:u}=ye(e),{sizeClasses:d,sizeStyles:m}=De(e);return T(()=>i(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,l.value,o.value,u.value,d.value,r.value,e.class],style:[s.value,m.value,e.style]},{default:()=>{var b;return[e.image?i(Ye,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?i(Ft,{key:"icon",icon:e.icon},null):(b=t.default)==null?void 0:b.call(t),Ge(!1,"v-avatar")]}})),{}}}),Kt=h({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),re=V(!1)({name:"VDefaultsProvider",props:Kt(),setup(e,n){let{slots:t}=n;const{defaults:a,disabled:l,reset:s,root:r,scoped:o}=Vt(e);return Ee(a,{reset:s,root:r,scoped:o,disabled:l}),()=>{var u;return(u=t.default)==null?void 0:u.call(t)}}}),Qt=h({appendAvatar:String,appendIcon:M,prependAvatar:String,prependIcon:M,subtitle:String,title:String,...L(),...ge()},"VCardItem"),Zt=V()({name:"VCardItem",props:Qt(),setup(e,n){let{slots:t}=n;return T(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),l=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),r=!!(s||t.append),o=!!(e.title||t.title),u=!!(e.subtitle||t.subtitle);return i("div",{class:["v-card-item",e.class],style:e.style},[l&&i("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?i(re,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&i(Ie,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),i("div",{class:"v-card-item__content"},[o&&i(S,{key:"title"},{default:()=>{var m;return[((m=t.title)==null?void 0:m.call(t))??e.title]}}),u&&i(Ot,{key:"subtitle"},{default:()=>{var m;return[((m=t.subtitle)==null?void 0:m.call(t))??e.subtitle]}}),(d=t.default)==null?void 0:d.call(t)]),r&&i("div",{key:"append",class:"v-card-item__append"},[t.append?i(re,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&i(Ie,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),w=fe("v-card-text"),en=h({border:[Boolean,Number,String]},"border");function tn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{borderClasses:v(()=>{const a=Y(e)?e.value:e.border,l=[];if(a===!0||a==="")l.push(`${n}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))l.push(`border-${s}`);return l})}}const nn=h({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function an(e){return{elevationClasses:v(()=>{const t=Y(e)?e.value:e.elevation,a=[];return t==null||a.push(`elevation-${t}`),a})}}function sn(e,n){const t=ce(),a=D(!1);if(de){const l=new IntersectionObserver(s=>{e==null||e(s,l),a.value=!!s.find(r=>r.isIntersecting)},n);It(()=>{l.disconnect()}),Q(t,(s,r)=>{r&&(l.unobserve(r),a.value=!1),s&&l.observe(s)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const Le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Qe=h({location:String},"location");function Ze(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=ve();return{locationStyles:v(()=>{if(!e.location)return{};const{side:s,align:r}=At(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(d){return t?t(d):0}const u={};return s!=="center"&&(n?u[Le[s]]=`calc(100% - ${o(s)}px)`:u[s]=0),r!=="center"?n?u[Le[r]]=`calc(100% - ${o(r)}px)`:u[r]=0:(s==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),u})}}const ln=h({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...L(),...Qe({location:"top"}),...he(),...j(),...ne()},"VProgressLinear"),rn=V()({name:"VProgressLinear",props:ln(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const a=Lt(e,"modelValue"),{isRtl:l,rtlClasses:s}=ve(),{themeClasses:r}=ae(e),{locationStyles:o}=Ze(e),{textColorClasses:u,textColorStyles:d}=He(e,"color"),{backgroundColorClasses:m,backgroundColorStyles:b}=xe(v(()=>e.bgColor||e.color)),{backgroundColorClasses:p,backgroundColorStyles:C}=xe(e,"color"),{roundedClasses:H}=ye(e),{intersectionRef:B,isIntersecting:P}=sn(),E=v(()=>parseInt(e.max,10)),k=v(()=>parseInt(e.height,10)),R=v(()=>parseFloat(e.bufferValue)/E.value*100),A=v(()=>parseFloat(a.value)/E.value*100),N=v(()=>l.value!==e.reverse),W=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),z=v(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function f(y){if(!B.value)return;const{left:I,right:F,width:$}=B.value.getBoundingClientRect(),q=N.value?$-y.clientX+(F-$):y.clientX-I;a.value=Math.round(q/$*E.value)}return T(()=>i(e.tag,{ref:B,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&P.value,"v-progress-linear--reverse":N.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},H.value,r.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?_(k.value):0,"--v-progress-linear-height":_(k.value),...o.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:A.value,onClick:e.clickable&&f},{default:()=>[e.stream&&i("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...d.value,[N.value?"left":"right"]:_(-k.value),borderTop:`${_(k.value/2)} dotted`,opacity:z.value,top:`calc(50% - ${_(k.value/4)})`,width:_(100-R.value,"%"),"--v-progress-linear-stream-to":_(k.value*(N.value?1:-1))}},null),i("div",{class:["v-progress-linear__background",m.value],style:[b.value,{opacity:z.value,width:_(e.stream?R.value:100,"%")}]},null),i(ze,{name:W.value},{default:()=>[e.indeterminate?i("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(y=>i("div",{key:y,class:["v-progress-linear__indeterminate",y,p.value],style:C.value},null))]):i("div",{class:["v-progress-linear__determinate",p.value],style:[C.value,{width:_(A.value,"%")}]},null)]}),t.default&&i("div",{class:"v-progress-linear__content"},[t.default({value:A.value,buffer:R.value})])]})),{}}}),on=h({loading:[Boolean,String]},"loader");function un(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{loaderClasses:v(()=>({[`${n}--loading`]:e.loading}))}}function cn(e,n){var a;let{slots:t}=n;return i("div",{class:`${e.name}__loader`},[((a=t.default)==null?void 0:a.call(t,{color:e.color,isActive:e.active}))||i(rn,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const dn=["static","relative","fixed","absolute","sticky"],vn=h({position:{type:String,validator:e=>dn.includes(e)}},"position");function fn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{positionClasses:v(()=>e.position?`${n}--${e.position}`:void 0)}}function mn(e,n){const t=Pt("RouterLink"),a=v(()=>!!(e.href||e.to)),l=v(()=>(a==null?void 0:a.value)||Se(n,"click")||Se(e,"click"));if(typeof t=="string")return{isLink:a,isClickable:l,href:Re(e,"href")};const s=e.to?t.useLink(e):void 0;return{isLink:a,isClickable:l,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&v(()=>{var r,o;return e.exact?(r=s.isExactActive)==null?void 0:r.value:(o=s.isActive)==null?void 0:o.value}),href:v(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const gn=h({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");const oe=Symbol("rippleStop"),hn=80;function Pe(e,n){e.style.transform=n,e.style.webkitTransform=n}function ue(e){return e.constructor.name==="TouchEvent"}function et(e){return e.constructor.name==="KeyboardEvent"}const yn=function(e,n){var b;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,l=0;if(!et(e)){const p=n.getBoundingClientRect(),C=ue(e)?e.touches[e.touches.length-1]:e;a=C.clientX-p.left,l=C.clientY-p.top}let s=0,r=.3;(b=n._ripple)!=null&&b.circle?(r=.15,s=n.clientWidth/2,s=t.center?s:s+Math.sqrt((a-s)**2+(l-s)**2)/4):s=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-s*2)/2}px`,u=`${(n.clientHeight-s*2)/2}px`,d=t.center?o:`${a-s}px`,m=t.center?u:`${l-s}px`;return{radius:s,scale:r,x:d,y:m,centerX:o,centerY:u}},Z={show(e,n){var C;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((C=n==null?void 0:n._ripple)!=null&&C.enabled))return;const a=document.createElement("span"),l=document.createElement("span");a.appendChild(l),a.className="v-ripple__container",t.class&&(a.className+=` ${t.class}`);const{radius:s,scale:r,x:o,y:u,centerX:d,centerY:m}=yn(e,n,t),b=`${s*2}px`;l.className="v-ripple__animation",l.style.width=b,l.style.height=b,n.appendChild(a);const p=window.getComputedStyle(n);p&&p.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),l.classList.add("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--visible"),Pe(l,`translate(${o}, ${u}) scale3d(${r},${r},${r})`),l.dataset.activated=String(performance.now()),setTimeout(()=>{l.classList.remove("v-ripple__animation--enter"),l.classList.add("v-ripple__animation--in"),Pe(l,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const a=performance.now()-Number(t.dataset.activated),l=Math.max(250-a,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=t.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(t.parentNode)},300)},l)}};function tt(e){return typeof e>"u"||!!e}function U(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[oe])){if(e[oe]=!0,ue(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||et(e),t._ripple.class&&(n.class=t._ripple.class),ue(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{Z.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var a;(a=t==null?void 0:t._ripple)!=null&&a.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},hn)}else Z.show(e,t,n)}}function $e(e){e[oe]=!0}function x(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{x(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),Z.hide(n)}}function nt(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let X=!1;function at(e){!X&&(e.keyCode===ke.enter||e.keyCode===ke.space)&&(X=!0,U(e))}function st(e){X=!1,x(e)}function it(e){X&&(X=!1,x(e))}function lt(e,n,t){const{value:a,modifiers:l}=n,s=tt(a);if(s||Z.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=l.center,e._ripple.circle=l.circle,$t(a)&&a.class&&(e._ripple.class=a.class),s&&!t){if(l.stop){e.addEventListener("touchstart",$e,{passive:!0}),e.addEventListener("mousedown",$e);return}e.addEventListener("touchstart",U,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",nt,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",U),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",at),e.addEventListener("keyup",st),e.addEventListener("blur",it),e.addEventListener("dragstart",x,{passive:!0})}else!s&&t&&rt(e)}function rt(e){e.removeEventListener("mousedown",U),e.removeEventListener("touchstart",U),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",nt),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",at),e.removeEventListener("keyup",st),e.removeEventListener("dragstart",x),e.removeEventListener("blur",it)}function bn(e,n){lt(e,n,!1)}function _n(e){delete e._ripple,rt(e)}function pn(e,n){if(n.value===n.oldValue)return;const t=tt(n.oldValue);lt(e,n,t)}const Cn={mounted:bn,unmounted:_n,updated:pn},Sn=h({appendAvatar:String,appendIcon:M,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...en(),...L(),...ge(),...Me(),...nn(),...on(),...Qe(),...vn(),...he(),...gn(),...j(),...ne(),...Je({variant:"elevated"})},"VCard"),J=V()({name:"VCard",directives:{Ripple:Cn},props:Sn(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:l}=ae(e),{borderClasses:s}=tn(e),{colorClasses:r,colorStyles:o,variantClasses:u}=Ke(e),{densityClasses:d}=qe(e),{dimensionStyles:m}=We(e),{elevationClasses:b}=an(e),{loaderClasses:p}=un(e),{locationStyles:C}=Ze(e),{positionClasses:H}=fn(e),{roundedClasses:B}=ye(e),P=mn(e,t),E=v(()=>e.link!==!1&&P.isLink.value),k=v(()=>!e.disabled&&e.link!==!1&&(e.link||P.isClickable.value));return T(()=>{const R=E.value?"a":e.tag,A=!!(a.title||e.title),N=!!(a.subtitle||e.subtitle),W=A||N,z=!!(a.append||e.appendAvatar||e.appendIcon),f=!!(a.prepend||e.prependAvatar||e.prependIcon),y=!!(a.image||e.image),I=W||f||z,F=!!(a.text||e.text);return le(i(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},l.value,s.value,r.value,d.value,b.value,p.value,H.value,B.value,u.value,e.class],style:[o.value,m.value,C.value,e.style],href:P.href.value,onClick:k.value&&P.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var $;return[y&&i("div",{key:"image",class:"v-card__image"},[a.image?i(re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):i(Ye,{key:"image-img",cover:!0,src:e.image},null)]),i(cn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),I&&i(Zt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),F&&i(w,{key:"text"},{default:()=>{var q;return[((q=a.text)==null?void 0:q.call(a))??e.text]}}),($=a.default)==null?void 0:$.call(a),a.actions&&i(zt,null,{default:a.actions}),Ge(k.value,"v-card")]}}),[[Oe("ripple"),k.value&&e.ripple]])}),{}}});const kn=h({fluid:{type:Boolean,default:!1},...L(),...j()},"VContainer"),wn=V()({name:"VContainer",props:kn(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=ve();return T(()=>i(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),ot=(()=>se.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),ut=(()=>se.reduce((e,n)=>{const t="offset"+ee(n);return e[t]={type:[String,Number],default:null},e},{}))(),ct=(()=>se.reduce((e,n)=>{const t="order"+ee(n);return e[t]={type:[String,Number],default:null},e},{}))(),Te={col:Object.keys(ot),offset:Object.keys(ut),order:Object.keys(ct)};function xn(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const l=n.replace(e,"");a+=`-${l}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Vn=["auto","start","end","center","baseline","stretch"],In=h({cols:{type:[Boolean,String,Number],default:!1},...ot,offset:{type:[String,Number],default:null},...ut,order:{type:[String,Number],default:null},...ct,alignSelf:{type:String,default:null,validator:e=>Vn.includes(e)},...L(),...j()},"VCol"),K=V()({name:"VCol",props:In(),setup(e,n){let{slots:t}=n;const a=v(()=>{const l=[];let s;for(s in Te)Te[s].forEach(o=>{const u=e[o],d=xn(s,o,u);d&&l.push(d)});const r=l.some(o=>o.startsWith("v-col-"));return l.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return te(e.tag,{class:[a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),be=["start","end","center"],dt=["space-between","space-around","space-evenly"];function _e(e,n){return se.reduce((t,a)=>{const l=e+ee(a);return t[l]=n(),t},{})}const Ln=[...be,"baseline","stretch"],vt=e=>Ln.includes(e),ft=_e("align",()=>({type:String,default:null,validator:vt})),Pn=[...be,...dt],mt=e=>Pn.includes(e),gt=_e("justify",()=>({type:String,default:null,validator:mt})),$n=[...be,...dt,"stretch"],ht=e=>$n.includes(e),yt=_e("alignContent",()=>({type:String,default:null,validator:ht})),Be={align:Object.keys(ft),justify:Object.keys(gt),alignContent:Object.keys(yt)},Tn={align:"align",justify:"justify",alignContent:"align-content"};function Bn(e,n,t){let a=Tn[e];if(t!=null){if(n){const l=n.replace(e,"");a+=`-${l}`}return a+=`-${t}`,a.toLowerCase()}}const En=h({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:vt},...ft,justify:{type:String,default:null,validator:mt},...gt,alignContent:{type:String,default:null,validator:ht},...yt,...L(),...j()},"VRow"),Nn=V()({name:"VRow",props:En(),setup(e,n){let{slots:t}=n;const a=v(()=>{const l=[];let s;for(s in Be)Be[s].forEach(r=>{const o=e[r],u=Bn(s,r,o);u&&l.push(u)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return te(e.tag,{class:["v-row",a.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),An={__name:"index",setup(e){return Tt({title:"HEROBRINE_yashar"}),(n,t)=>(Et(),Bt(wn,{fluid:""},{default:c(()=>[i(Nn,null,{default:c(()=>[i(K,{cols:"12",md:"6",style:{height:"370px"}},{default:c(()=>[i(J,null,{default:c(()=>[i(S,{class:"text-warning"},{default:c(()=>[g("[ Ectasy ]")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ INFO ]")]),_:1}),i(w,null,{default:c(()=>[g("Ectasy is a backdoor that can be injected into any plugin, they are free with paid options.")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How it works ]")]),_:1}),i(w,null,{default:c(()=>[g("They add whole directory that has an infected class in it, this class will download the main backdoor from a url, then proceed to initialize the main backdoor, from there a person with ectasy can do ./login and basically destroy your server in a few seconds / mins")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How to Remove it]")]),_:1}),i(w,null,{default:c(()=>[g("Delete all plugins and delete PluginMetrics folder and redownload the plugins either from official sources or from official people")]),_:1})]),_:1})]),_:1}),i(K,{cols:"12",md:"6",style:{height:"370px"}},{default:c(()=>[i(J,null,{default:c(()=>[i(S,{class:"text-warning"},{default:c(()=>[g("[ Thicc Industries ]")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ INFO ]")]),_:1}),i(w,null,{default:c(()=>[g("Thicc Industries is a backdoor that can be injected into any plugin, they are free and open source.")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How it works ]")]),_:1}),i(w,null,{default:c(()=>[g("They create quite a obvious directory in the file (com.thiccindustries.debugger), this will be where all the infected classes are, when someone does the prefix it will activate the backdoor giving that person more power than op this can and will give them power to destroy your server ")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How to Remove it]")]),_:1}),i(w,null,{default:c(()=>[g("Just find what plugin has it using winrar, and delete the plugin, yep thats literally it...")]),_:1})]),_:1})]),_:1}),i(K,{cols:"12",md:"6",style:{height:"370px"}},{default:c(()=>[i(J,null,{default:c(()=>[i(S,{class:"text-warning"},{default:c(()=>[g("[ Bukloit / OpenBukloit ]")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ INFO ]")]),_:1}),i(w,null,{default:c(()=>[g("Bukloit / OpenBukloit is a backdoor that can be injected into any plugin, they are free and open source.")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How it works ]")]),_:1}),i(w,null,{default:c(()=>[g("Bukloit can create quite a obvious directory in the file (bukloit.Bukloit), this will be where all the infected classes are, when someone does the prefix it will activate the backdoor giving that person more power than op this can and will give them power to destroy your server.OpenBukloit has an option for Camouflage this will basically pick a random ass class and remove all its old contents and put the backdoor code into it")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How to Remove it]")]),_:1}),i(w,null,{default:c(()=>[g("Just find what plugin has it using winrar, and delete the plugin, yep thats literally it...")]),_:1})]),_:1})]),_:1}),i(K,{cols:"12",md:"6",style:{height:"370px"}},{default:c(()=>[i(J,null,{default:c(()=>[i(S,{class:"text-warning"},{default:c(()=>[g("[ HostFlow ]")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ INFO ]")]),_:1}),i(w,null,{default:c(()=>[g("HostFlow is a backdoor that can be injected into any plugin, they are private")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How it works ]")]),_:1}),i(w,null,{default:c(()=>[g("HostFlow disguises itself as JavaAssist package, you can find the url in a.class, this is were they connect to their url http://client.hostflow.eu:5050/ws, they get your server ip with http://checkip.amazonaws.com, then they send it to their webhook, They also make a package with the same name of the main package just has L10 at the end, in the main package onEnable they initialise the backdoor.")]),_:1}),i(S,{class:"text-info"},{default:c(()=>[g("[ How to Remove it]")]),_:1}),i(w,null,{default:c(()=>[g("Remove the JavaAssist package, then remove the initialize in the main class in the onEnable should look like this (new {MainPackage}L10()).a(getDataFolder().getParent());")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{An as default};