/* empty css             *//* empty css                   */import{O as Pe,P as Fe,Q as T,r as S,R as ct,S as ut,T as Le,U as ae,V as Me,W as F,X as dt,I as ye,Y as Oe,Z as W,i as f,$ as fe,a0 as ft,m as ue,_ as gt,o as O,c as J,a as I,F as Ae,d as mt,b as K,n as vt,t as ht,w as le,v as pe,p as bt,h as Et,f as yt}from"./index-18d1094d.js";const H=Object.assign,At=typeof window<"u",oe=e=>e!==null&&typeof e=="object",B=e=>e!=null,ne=e=>typeof e=="function",pt=e=>oe(e)&&ne(e.then)&&ne(e.catch),Je=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),It=()=>At?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Ie(e,t){const a=t.split(".");let o=e;return a.forEach(i=>{var l;o=oe(o)&&(l=o[i])!=null?l:""}),o}function Se(e,t,a){return t.reduce((o,i)=>((!a||e[i]!==void 0)&&(o[i]=e[i]),o),{})}const Ce=e=>Array.isArray(e)?e:[e],ee=null,_=[Number,String],ge={type:Boolean,default:!0},St=e=>({type:_,default:e}),D=e=>({type:String,default:e});var Ne=typeof window<"u";function Ct(e){const t=Pe(e,null);if(t){const a=ae(),{link:o,unlink:i,internalChildren:l}=t;o(a),Fe(()=>i(a));const E=T(()=>l.indexOf(a));return{parent:t,index:E}}return{parent:null,index:S(-1)}}function Bt(e){let t;Me(()=>{e(),F(()=>{t=!0})}),dt(()=>{t&&e()})}function wt(e,t,a={}){if(!Ne)return;const{target:o=window,passive:i=!1,capture:l=!1}=a;let E=!1,s;const r=b=>{if(E)return;const h=ye(b);h&&!s&&(h.addEventListener(e,t,{capture:l,passive:i}),s=!0)},c=b=>{if(E)return;const h=ye(b);h&&s&&(h.removeEventListener(e,t,l),s=!1)};Fe(()=>c(o)),ct(()=>c(o)),Bt(()=>r(o));let g;return ut(o)&&(g=Le(o,(b,h)=>{c(h),r(b)})),()=>{g==null||g(),c(o),E=!0}}var X,se;function xt(){if(!X&&(X=S(0),se=S(0),Ne)){const e=()=>{X.value=window.innerWidth,se.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:X,height:se}}var kt=Symbol("van-field");function Be(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function Re(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Ue(e){Be(window,e),Be(document.body,e)}const _t=It();function Dt(){_t&&Ue(Re())}const Vt=e=>e.stopPropagation();function te(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Vt(e)}xt();function P(e){if(B(e))return Je(e)?`${e}px`:String(e)}const Tt=/-(\w)/g,ze=e=>e.replace(Tt,(t,a)=>a.toUpperCase());function we(e,t,a){const o=e.indexOf(t);return o===-1?e:t==="-"&&o!==0?e.slice(0,o):e.slice(0,o+1)+e.slice(o).replace(a,"")}function Pt(e,t=!0,a=!0){t?e=we(e,".",/\./g):e=e.split(".")[0],a?e=we(e,"-",/-/g):e=e.replace(/-/,"");const o=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(o,"")}const{hasOwnProperty:Ft}=Object.prototype;function Lt(e,t,a){const o=t[a];B(o)&&(!Ft.call(e,a)||!oe(o)?e[a]=o:e[a]=Ge(Object(e[a]),o))}function Ge(e,t){return Object.keys(t).forEach(a=>{Lt(e,t,a)}),e}var Mt={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const xe=S("zh-CN"),ke=Oe({"zh-CN":Mt}),Ot={messages(){return ke[xe.value]},use(e,t){xe.value=e,this.add({[e]:t})},add(e={}){Ge(ke,e)}};var Jt=Ot;function Nt(e){const t=ze(e)+".";return(a,...o)=>{const i=Jt.messages(),l=Ie(i,t+a)||Ie(i,a);return ne(l)?l(...o):l}}function de(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,o)=>a+de(e,o),""):Object.keys(t).reduce((a,o)=>a+(t[o]?de(e,o):""),""):""}function Rt(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${de(t,a)}`)}function z(e){const t=`van-${e}`;return[t,Rt(t),Nt(t)]}const Ut=Symbol("van-form");function q(e){return e.install=t=>{const{name:a}=e;a&&(t.component(a,e),t.component(ze(`-${a}`),e))},e}function je(e){const t=ae();t&&H(t.proxy,e)}const zt={to:[String,Object],url:String,replace:Boolean};function Gt({to:e,url:t,replace:a,$router:o}){e&&o?o[a?"replace":"push"](e):t&&(a?location.replace(t):location.href=t)}function jt(){const e=ae().proxy;return()=>Gt(e)}const[$t,_e]=z("badge"),Wt={dot:Boolean,max:_,tag:D("div"),color:String,offset:Array,content:_,showZero:ge,position:D("top-right")};var Ht=W({name:$t,props:Wt,setup(e,{slots:t}){const a=()=>{if(t.content)return!0;const{content:s,showZero:r}=e;return B(s)&&s!==""&&(r||s!==0&&s!=="0")},o=()=>{const{dot:s,max:r,content:c}=e;if(!s&&a())return t.content?t.content():B(r)&&Je(c)&&+c>+r?`${r}+`:c},i=s=>s.startsWith("-")?s.replace("-",""):`-${s}`,l=T(()=>{const s={background:e.color};if(e.offset){const[r,c]=e.offset,{position:g}=e,[b,h]=g.split("-");t.default?(typeof c=="number"?s[b]=P(b==="top"?c:-c):s[b]=b==="top"?P(c):i(c),typeof r=="number"?s[h]=P(h==="left"?r:-r):s[h]=h==="left"?P(r):i(r)):(s.marginTop=P(c),s.marginLeft=P(r))}return s}),E=()=>{if(a()||e.dot)return f("div",{class:_e([e.position,{dot:e.dot,fixed:!!t.default}]),style:l.value},[o()])};return()=>{if(t.default){const{tag:s}=e;return f(s,{class:_e("wrapper")},{default:()=>[t.default(),E()]})}return E()}}});const qt=q(Ht),[Qt,Hn]=z("config-provider"),Yt=Symbol(Qt),[Zt,De]=z("icon"),Kt=e=>e==null?void 0:e.includes("/"),Xt={dot:Boolean,tag:D("i"),name:String,size:_,badge:_,color:String,badgeProps:Object,classPrefix:String};var en=W({name:Zt,props:Xt,setup(e,{slots:t}){const a=Pe(Yt,null),o=T(()=>e.classPrefix||(a==null?void 0:a.iconPrefix)||De());return()=>{const{tag:i,dot:l,name:E,size:s,badge:r,color:c}=e,g=Kt(E);return f(qt,fe({dot:l,tag:i,class:[o.value,g?"":`${o.value}-${E}`],style:{color:c,fontSize:P(s)},content:r},e.badgeProps),{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t),g&&f("img",{class:De("image"),src:E},null)]}})}}});const $=q(en);let tn=0;function $e(){const e=ae(),{name:t="unknown"}=(e==null?void 0:e.type)||{};return`${t}-${++tn}`}const[nn,U]=z("cell"),We={tag:D("div"),icon:String,size:String,title:_,value:_,label:_,center:Boolean,isLink:Boolean,border:ge,iconPrefix:String,valueClass:ee,labelClass:ee,titleClass:ee,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},an=H({},We,zt);var on=W({name:nn,props:an,setup(e,{slots:t}){const a=jt(),o=()=>{if(t.label||B(e.label))return f("div",{class:[U("label"),e.labelClass]},[t.label?t.label():e.label])},i=()=>{var r;if(t.title||B(e.title)){const c=(r=t.title)==null?void 0:r.call(t);return Array.isArray(c)&&c.length===0?void 0:f("div",{class:[U("title"),e.titleClass],style:e.titleStyle},[c||f("span",null,[e.title]),o()])}},l=()=>{const r=t.value||t.default;if(r||B(e.value))return f("div",{class:[U("value"),e.valueClass]},[r?r():f("span",null,[e.value])])},E=()=>{if(t.icon)return t.icon();if(e.icon)return f($,{name:e.icon,class:U("left-icon"),classPrefix:e.iconPrefix},null)},s=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const r=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return f($,{name:r,class:U("right-icon")},null)}};return()=>{var r;const{tag:c,size:g,center:b,border:h,isLink:w,required:C}=e,v=(r=e.clickable)!=null?r:w,L={center:b,required:!!C,clickable:v,borderless:!h};return g&&(L[g]=!!g),f(c,{class:U(L),role:v?"button":void 0,tabindex:v?0:void 0,onClick:a},{default:()=>{var M;return[E(),i(),l(),s(),(M=t.extra)==null?void 0:M.call(t)]}})}}});const rn=q(on);function He(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function ln(e,t){if(He(e)){if(t.required)return!1;if(t.validateEmpty===!1)return!0}return!(t.pattern&&!t.pattern.test(String(e)))}function sn(e,t){return new Promise(a=>{const o=t.validator(e,t);if(pt(o)){o.then(a);return}a(o)})}function Ve(e,t){const{message:a}=t;return ne(a)?a(e,t):a||""}function cn({target:e}){e.composing=!0}function Te({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function un(e,t){const a=Re();e.style.height="auto";let o=e.scrollHeight;if(oe(t)){const{maxHeight:i,minHeight:l}=t;i!==void 0&&(o=Math.min(o,i)),l!==void 0&&(o=Math.max(o,l))}o&&(e.style.height=`${o}px`,Ue(a))}function dn(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function V(e){return[...e].length}function ce(e,t){return[...e].slice(0,t).join("")}const[fn,x]=z("field"),me={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:_,formatter:Function,clearIcon:D("clear"),modelValue:St(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:D("focus"),formatTrigger:D("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},gn=H({},We,me,{rows:_,type:D("text"),rules:Array,autosize:[Boolean,Object],labelWidth:_,labelClass:ee,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var mn=W({name:fn,props:gn,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:t,slots:a}){const o=$e(),i=Oe({status:"unvalidated",focused:!1,validateMessage:""}),l=S(),E=S(),s=S(),{parent:r}=Ct(Ut),c=()=>{var n;return String((n=e.modelValue)!=null?n:"")},g=n=>{if(B(e[n]))return e[n];if(r&&B(r.props[n]))return r.props[n]},b=T(()=>{const n=g("readonly");if(e.clearable&&!n){const u=c()!=="",d=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return u&&d}return!1}),h=T(()=>s.value&&a.input?s.value():e.modelValue),w=T(()=>{var n;const u=g("required");return u==="auto"?(n=e.rules)==null?void 0:n.some(d=>d.required):u}),C=n=>n.reduce((u,d)=>u.then(()=>{if(i.status==="failed")return;let{value:y}=h;if(d.formatter&&(y=d.formatter(y,d)),!ln(y,d)){i.status="failed",i.validateMessage=Ve(y,d);return}if(d.validator)return He(y)&&d.validateEmpty===!1?void 0:sn(y,d).then(A=>{A&&typeof A=="string"?(i.status="failed",i.validateMessage=A):A===!1&&(i.status="failed",i.validateMessage=Ve(y,d))})}),Promise.resolve()),v=()=>{i.status="unvalidated",i.validateMessage=""},L=()=>t("endValidate",{status:i.status,message:i.validateMessage}),M=(n=e.rules)=>new Promise(u=>{v(),n?(t("startValidate"),C(n).then(()=>{i.status==="failed"?(u({name:e.name,message:i.validateMessage}),L()):(i.status="passed",u(),L())})):u()}),G=n=>{if(r&&e.rules){const{validateTrigger:u}=r.props,d=Ce(u).includes(n),y=e.rules.filter(A=>A.trigger?Ce(A.trigger).includes(n):d);y.length&&M(y)}},re=n=>{var u;const{maxlength:d}=e;if(B(d)&&V(n)>+d){const y=c();if(y&&V(y)===+d)return y;const A=(u=l.value)==null?void 0:u.selectionEnd;if(i.focused&&A){const p=[...n],k=p.length-+d;return p.splice(A-k,k),p.join("")}return ce(n,+d)}return n},N=(n,u="onChange")=>{const d=n;n=re(n);const y=V(d)-V(n);if(e.type==="number"||e.type==="digit"){const p=e.type==="number";n=Pt(n,p,p)}let A=0;if(e.formatter&&u===e.formatTrigger){const{formatter:p,maxlength:k}=e;if(n=p(n),B(k)&&V(n)>+k&&(n=ce(n,+k)),l.value&&i.focused){const{selectionEnd:Z}=l.value,Ee=ce(d,Z);A=V(p(Ee))-V(Ee)}}if(l.value&&l.value.value!==n)if(i.focused){let{selectionStart:p,selectionEnd:k}=l.value;if(l.value.value=n,B(p)&&B(k)){const Z=V(n);y?(p-=y,k-=y):A&&(p+=A,k+=A),l.value.setSelectionRange(Math.min(p,Z),Math.min(k,Z))}}else l.value.value=n;n!==e.modelValue&&t("update:modelValue",n)},m=n=>{n.target.composing||N(n.target.value)},R=()=>{var n;return(n=l.value)==null?void 0:n.blur()},Q=()=>{var n;return(n=l.value)==null?void 0:n.focus()},Y=()=>{const n=l.value;e.type==="textarea"&&e.autosize&&n&&un(n,e.autosize)},qe=n=>{i.focused=!0,t("focus",n),F(Y),g("readonly")&&R()},Qe=n=>{i.focused=!1,N(c(),"onBlur"),t("blur",n),!g("readonly")&&(G("onBlur"),F(Y),Dt())},ve=n=>t("clickInput",n),Ye=n=>t("clickLeftIcon",n),Ze=n=>t("clickRightIcon",n),Ke=n=>{te(n),t("update:modelValue",""),t("clear",n)},he=T(()=>{if(typeof e.error=="boolean")return e.error;if(r&&r.props.showError&&i.status==="failed")return!0}),Xe=T(()=>{const n=g("labelWidth"),u=g("labelAlign");if(n&&u!=="top")return{width:P(n)}}),et=n=>{n.keyCode===13&&(!(r&&r.props.submitOnEnter)&&e.type!=="textarea"&&te(n),e.type==="search"&&R()),t("keypress",n)},be=()=>e.id||`${o}-input`,tt=()=>i.status,nt=()=>{const n=x("control",[g("inputAlign"),{error:he.value,custom:!!a.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(a.input)return f("div",{class:n,onClick:ve},[a.input()]);const u={id:be(),ref:l,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:n,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${o}-label`:void 0,onBlur:Qe,onFocus:qe,onInput:m,onClick:ve,onChange:Te,onKeypress:et,onCompositionend:Te,onCompositionstart:cn};return e.type==="textarea"?f("textarea",u,null):f("input",fe(dn(e.type),u),null)},at=()=>{const n=a["left-icon"];if(e.leftIcon||n)return f("div",{class:x("left-icon"),onClick:Ye},[n?n():f($,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ot=()=>{const n=a["right-icon"];if(e.rightIcon||n)return f("div",{class:x("right-icon"),onClick:Ze},[n?n():f($,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},it=()=>{if(e.showWordLimit&&e.maxlength){const n=V(c());return f("div",{class:x("word-limit")},[f("span",{class:x("word-num")},[n]),ue("/"),e.maxlength])}},rt=()=>{if(r&&r.props.showErrorMessage===!1)return;const n=e.errorMessage||i.validateMessage;if(n){const u=a["error-message"],d=g("errorMessageAlign");return f("div",{class:x("error-message",d)},[u?u({message:n}):n])}},lt=()=>{const n=g("labelWidth"),u=g("labelAlign"),d=g("colon")?":":"";if(a.label)return[a.label(),d];if(e.label)return f("label",{id:`${o}-label`,for:a.input?void 0:be(),onClick:y=>{te(y),Q()},style:u==="top"&&n?{width:P(n)}:void 0},[e.label+d])},st=()=>[f("div",{class:x("body")},[nt(),b.value&&f($,{ref:E,name:e.clearIcon,class:x("clear")},null),ot(),a.button&&f("div",{class:x("button")},[a.button()])]),it(),rt()];return je({blur:R,focus:Q,validate:M,formValue:h,resetValidation:v,getValidationStatus:tt}),ft(kt,{customValue:s,resetValidation:v,validateWithTrigger:G}),Le(()=>e.modelValue,()=>{N(c()),v(),G("onChange"),F(Y)}),Me(()=>{N(c(),e.formatTrigger),F(Y)}),wt("touchstart",Ke,{target:T(()=>{var n;return(n=E.value)==null?void 0:n.$el})}),()=>{const n=g("disabled"),u=g("labelAlign"),d=at(),y=()=>{const A=lt();return u==="top"?[d,A].filter(Boolean):A||[]};return f(rn,{size:e.size,class:x({error:he.value,disabled:n,[`label-${u}`]:u}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Xe.value,valueClass:x("value"),titleClass:[x("label",[u,{required:w.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:d&&u!=="top"?()=>d:null,title:y,value:st,extra:a.extra})}}});const vn=q(mn),[hn,j,bn]=z("search"),En=H({},me,{label:String,shape:D("square"),leftIcon:D("search"),clearable:ge,actionText:String,background:String,showAction:Boolean});var yn=W({name:hn,props:En,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:t,slots:a,attrs:o}){const i=$e(),l=S(),E=()=>{a.action||(t("update:modelValue",""),t("cancel"))},s=m=>{m.keyCode===13&&(te(m),t("search",e.modelValue))},r=()=>e.id||`${i}-input`,c=()=>{if(a.label||e.label)return f("label",{class:j("label"),for:r()},[a.label?a.label():e.label])},g=()=>{if(e.showAction){const m=e.actionText||bn("cancel");return f("div",{class:j("action"),role:"button",tabindex:0,onClick:E},[a.action?a.action():m])}},b=()=>{var m;return(m=l.value)==null?void 0:m.blur()},h=()=>{var m;return(m=l.value)==null?void 0:m.focus()},w=m=>t("blur",m),C=m=>t("focus",m),v=m=>t("clear",m),L=m=>t("clickInput",m),M=m=>t("clickLeftIcon",m),G=m=>t("clickRightIcon",m),re=Object.keys(me),N=()=>{const m=H({},o,Se(e,re),{id:r()}),R=Q=>t("update:modelValue",Q);return f(vn,fe({ref:l,type:"search",class:j("field",{"with-message":m.errorMessage}),border:!1,onBlur:w,onFocus:C,onClear:v,onKeypress:s,onClickInput:L,onClickLeftIcon:M,onClickRightIcon:G,"onUpdate:modelValue":R},m),Se(a,["left-icon","right-icon"]))};return je({focus:h,blur:b}),()=>{var m;return f("div",{class:j({"show-action":e.showAction}),style:{background:e.background}},[(m=a.left)==null?void 0:m.call(a),f("div",{class:j("content",e.shape)},[c(),N()]),g()])}}});const An=q(yn);const pn="/prd.demo/assets/Group 1312314564-fe859e1b.png",In="/prd.demo/assets/图层 1 1 copy-81adbb8d.png",Sn="data:image/png;base64,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",Cn="/prd.demo/assets/Frame 1597880501-45b67510.png",Bn="/prd.demo/assets/4ad7de3c30bb845d04c5f67922faa16f-77e9293c.mp4",wn="/prd.demo/assets/Frame 1597880506-d4dc30ce.png",xn="/prd.demo/assets/Frame 1597880505-e7897766.png",kn="/prd.demo/assets/Frame 1597880508-f0a5eed4.png",_n="/prd.demo/assets/微信图片_20240811152252-80b32c2a.jpg";const ie=e=>(bt("data-v-4548bb9c"),e=e(),Et(),e),Dn={class:"wrap"},Vn=ie(()=>I("img",{src:pn,alt:"",class:"top"},null,-1)),Tn={key:0,class:"user-msg"},Pn={key:1,class:"user-img"},Fn=["src"],Ln={key:2,class:"ai-msg-box"},Mn=["src"],On={class:"box"},Jn=ie(()=>I("img",{src:In,alt:"",class:"icon"},null,-1)),Nn={class:"input-box"},Rn=ie(()=>I("img",{src:Sn,alt:"",class:"voice"},null,-1)),Un=ie(()=>I("div",{class:"right"},null,-1)),zn=["src"],Gn={__name:"ai",setup(e){const t=S(),a=S([]),o=S(""),i=b=>{console.log(b)},l=(b,h)=>{const w=a.value.length;let C;w==0?C=Cn:w==2?C=null:w==4?C=wn:w==7&&(C=kn),h=="img"?a.value.push({type:"img",msg:_n}):a.value.push({type:"user",msg:o.value}),o.value="",a.value.push({type:"ai",msg:C,loading:!0}),setTimeout(()=>{a.value[a.value.length-1].loading=!1},500),a.value.length==6&&setTimeout(()=>{a.value.push({type:"ai",msg:xn,loading:!0}),setTimeout(()=>{a.value[a.value.length-1].loading=!1},500),F(()=>{setTimeout(()=>{t.value.scrollTop=9999},500)})},500),F(()=>{setTimeout(()=>{t.value.scrollTop=9999},500)})},E=S(""),s=S(!1),r=S(null),c=()=>{s.value=!1,l("","img")},g=()=>{s.value=!0,F(()=>{E.value=Bn,r.value.requestFullscreen()})};return(b,h)=>{const w=An,C=yt;return O(),J(Ae,null,[I("div",Dn,[Vn,I("div",{ref_key:"msgBox",ref:t,class:"msg-box"},[(O(!0),J(Ae,null,mt(a.value,v=>(O(),J("div",{class:"msg",style:vt("justify-content:flex-"+(v.type=="user"?"end":"start")),onScroll:i},[v.type=="user"?(O(),J("div",Tn,[I("span",null,ht(v.msg),1)])):K("",!0),v.type=="img"?(O(),J("div",Pn,[I("img",{src:v.msg,alt:""},null,8,Fn)])):K("",!0),v.type=="ai"?le((O(),J("div",Ln,[le(I("img",{src:v.msg,alt:"",class:"ai-msg"},null,8,Mn),[[pe,!v.loading&&v.msg]]),le(I("div",On,[Jn,I("div",{class:"msg"},[ue(" 好的哦，任务已接取，请小主按时完成哦，请网格经理到达目的后先完成任务第一项打卡操作哦!请点击"),I("span",{onClick:g}," 打卡"),ue(" 拍照发给我就可以啦! ")])],512),[[pe,!v.loading&&!v.msg]])])),[[C,v.loading]]):K("",!0)],36))),256))],512),I("div",Nn,[Rn,f(w,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=v=>o.value=v),placeholder:"欢迎向我提问",change:"onChange","left-icon":"",shape:"round",class:"input",onSearch:l},null,8,["modelValue"]),Un])]),s.value?(O(),J("div",{key:0,class:"fullscreen-video",onClick:h[1]||(h[1]=(...v)=>b.close&&b.close(...v))},[I("video",{ref_key:"video",ref:r,src:E.value,autoplay:"",muted:"",playsinline:"","webkit-playsinline":"",onEnded:c},null,40,zn)])):K("",!0)],64)}}},qn=gt(Gn,[["__scopeId","data-v-4548bb9c"]]);export{qn as default};
