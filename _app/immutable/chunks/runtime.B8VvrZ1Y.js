var Sn=Array.isArray,Dn=Array.from,In=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,On=Object.prototype,xn=Array.prototype,Vt=Object.getPrototypeOf;const kn=()=>{};function Nn(t){return t()}function Gt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ct=4,M=8,nt=16,y=32,$=64,I=128,U=256,p=512,R=1024,Y=2048,C=4096,j=8192,Kt=16384,vt=32768,Cn=65536,$t=1<<18,pt=1<<19,ut=Symbol("$state"),bn=Symbol("legacy props"),Pn=Symbol("");function ht(t){return t===this.v}function Zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Zt(t,this.v)}function zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function Xt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function Fn(){throw new Error("hydration_failed")}function qn(t){throw new Error("props_invalid_value")}function Ln(){throw new Error("state_descriptors_fixed")}function Mn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}let Z=!1;function Yn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function jn(t){return Et(rt(t))}function nn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Hn(t,n=!1){return Et(nn(t,n))}function Et(t){return u!==null&&u.f&m&&(E===null?dn([t]):E.push(t)),t}function Bn(t,n){return rn(t,gn(()=>An(t))),n}function rn(t,n){return u!==null&&at()&&u.f&(m|nt)&&(E===null||!E.includes(t))&&tn(),en(t,n)}function en(t,n){return t.equals(n)||(t.v=n,t.version=Lt(),yt(t,R),at()&&o!==null&&o.f&p&&!(o.f&y)&&(_!==null&&_.includes(t)?(w(o,R),W(o)):g===null?En([t]):g.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&R||!e&&l===o||(w(l,n),i&(p|I)&&(i&m?yt(l,Y):W(l)))}}const Un=1,Vn=2,Gn=16,Kn=1,$n=2,Zn=4,zn=8,Wn=16,Xn=1,Jn=2,sn="[",an="[!",ln="]",wt={},Qn=Symbol();function Tt(t){console.warn("hydration_mismatch")}let D=!1;function tr(t){D=t}let d;function F(t){if(t===null)throw Tt(),wt;return d=t}function nr(){return F(O(d))}function rr(t){if(D){if(O(d)!==null)throw Tt(),wt;d=t}}function er(t=1){if(D){for(var n=t,r=d;n--;)r=O(r);d=r}}function sr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===sn||r===an)&&(t+=1)}var e=O(n);n.remove(),n=e}}var it,mt,At;function ar(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;mt=ot(n,"firstChild").get,At=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return mt.call(t)}function O(t){return At.call(t)}function lr(t,n){if(!D)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function or(t,n){if(!D){var r=J(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function ur(t,n=1,r=!1){let e=D?d:t;for(var s;n--;)s=e,e=O(e);if(!D)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=X();return e===null?s==null||s.after(l):e.before(l),F(l),l}return F(e),e}function ir(t){t.textContent=""}function on(t){var n=m|R;o===null?n|=I:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=on(t);return n.equals=dt,n}function gt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):P(e)}}}function Rt(t){var n,r=o;K(t.parent);try{gt(t),n=Mt(t)}finally{K(r)}return n}function St(t){var n=Rt(t),r=(x||t.f&I)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=Lt())}function et(t){gt(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Dt(t){o===null&&u===null&&Xt(),u!==null&&u.f&I&&Wt(),st&&zt()}function un(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&$)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{ft(!0),z(l),l.f|=Kt}catch(c){throw P(l),c}finally{ft(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&pt)===0;if(!T&&!s&&e&&(a!==null&&un(l,a),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(l)}return l}function _r(t){const n=b(M,null,!1);return w(n,p),n.teardown=t,n}function cr(t){Dt();var n=o!==null&&(o.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=It(t);return e}}function vr(t){return Dt(),fn(t)}function pr(t){const n=b($,t,!0);return()=>{P(n)}}function It(t){return b(ct,t,!1)}function fn(t){return b(M,t,!0)}function hr(t){return _n(t)}function _n(t,n=0){return b(M|nt|n,t,!0)}function dr(t,n=!0){return b(M|y,t,!0,n)}function Ot(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function xt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function cn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}kt(t,n&&!r),xt(t),L(t,0),w(t,j);var l=t.transitions;if(l!==null)for(const T of l)T.stop();Ot(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Er(t,n){var r=[];Ct(t,r,!0),vn(r,()=>{P(t),n&&n()})}function vn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ct(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&y)!==0;Ct(e,n,a?r:!1),e=s}}}function yr(t){bt(t,!0)}function bt(t,n){if(t.f&C){H(t)&&z(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&y)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,Q=[];function Pt(){V=!1;const t=Q.slice();Q=[],Gt(t)}function wr(t){V||(V=!0,queueMicrotask(Pt)),Q.push(t)}function pn(){V&&Pt()}const Ft=0,hn=1;let B=Ft,q=!1,k=!1,st=!1;function ft(t){k=t}function _t(t){st=t}let S=[],N=0;let u=null;function G(t){u=t}let o=null;function K(t){o=t}let E=null;function dn(t){E=t}let _=null,h=0,g=null;function En(t){g=t}let qt=0,x=!1,f=null;function Lt(){return++qt}function at(){return!Z||f!==null&&f.l===null}function H(t){var l,i;var n=t.f;if(n&R)return!0;if(n&Y){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(H(a)&&St(a),e&&o!==null&&!x&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function yn(t,n,r){throw t}function Mt(t){var lt;var n=_,r=h,e=g,s=u,a=x,l=E,i=f,T=t.f;_=null,h=0,g=null,u=T&(y|$)?null:t,x=!k&&(T&I)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!x)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,x=a,E=l,f=i}}function wn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(I|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)wn(t,r[e])}function z(t){var n=t.f;if(!(n&j)){w(t,p);var r=o;o=t;try{n&nt?cn(t):kt(t),xt(t),Ot(t);var e=Mt(t);t.teardown=typeof e=="function"?e:null,t.version=qt}catch(s){yn(s)}finally{o=r}}}function Yt(){N>1e3&&(N=0,Jt()),N++}function jt(t){var n=t.length;if(n!==0){Yt();var r=k;k=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Ht(s,a),Tn(a)}}finally{k=r}}}function Tn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|C))&&H(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function mn(){if(q=!1,N>1001)return;const t=S;S=[],jt(t),q||(N=0)}function W(t){B===Ft&&(q||(q=!0,queueMicrotask(mn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|y)){if(!(r&p))return;n.f^=p}}S.push(n)}function Ht(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&M){a?r.f^=p:H(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ht(i,n)}function Bt(t){var n=B,r=S;try{Yt();const s=[];B=hn,S=s,q=!1,jt(r);var e=t==null?void 0:t();return pn(),(S.length>0||s.length>0)&&Bt(),N=0,e}finally{B=n,S=r}}async function Tr(){await Promise.resolve(),Bt()}function An(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=Rt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&Qt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&y)&&g.includes(t)&&(w(o,R),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,H(a)&&St(a)),t.v}function gn(t){const n=u;try{return u=null,t()}finally{u=n}}const Rn=~(R|Y|p);function w(t,n){t.f=t.f&Rn|n}function mr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Ar(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];K(a.effect),G(a.reaction),It(a.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function gr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{pr as $,Vn as A,Un as B,Gn as C,O as D,vt as E,Yn as F,ur as G,an as H,C as I,lr as J,rr as K,Pn as L,er as M,kn as N,gn as O,_r as P,An as Q,rn as R,hr as S,Hn as T,Tt as U,wt as V,or as W,Bn as X,ar as Y,sn as Z,Fn as _,nr as a,mr as a0,Ar as a1,f as a2,G as a3,K as a4,wr as a5,In as a6,vr as a7,cr as a8,Gt as a9,Wn as aA,Bt as aB,Tr as aC,jn as aD,Zt as aE,Nn as aa,gr as ab,on as ac,Xn as ad,Jn as ae,ut as af,On as ag,xn as ah,Ln as ai,Qn as aj,ot as ak,Mn as al,It as am,fn as an,qn as ao,Cn as ap,Zn as aq,dt as ar,y as as,$ as at,Kn as au,Z as av,$n as aw,zn as ax,bn as ay,fr as az,_n as b,tr as c,yr as d,dr as e,d as f,Vt as g,D as h,Ut as i,X as j,Sn as k,Dn as l,o as m,en as n,Ct as o,Er as p,ir as q,sr as r,F as s,vn as t,P as u,J as v,ln as w,u as x,nn as y,rt as z};
