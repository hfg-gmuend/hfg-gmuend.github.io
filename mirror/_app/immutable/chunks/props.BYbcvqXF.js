import{_ as T,a0 as F,a1 as K,a2 as I,a3 as V,d as R,W as c,a4 as D,g as h,P as Z,a5 as $,Y as z,w as G,U as H,O as m,E as W,a6 as J,a7 as Q,D as X,C as L,a8 as q,N as U,V as Y,F as p,a9 as ee,aa as ae,ab as re,i as k,q as te,ac as ne,ad as fe,ae as ie,af as se,ag as ue,ah as le,ai as de,aj as B,ak as ve,m as _e,al as ce}from"./runtime.ClRJlCNk.js";function A(r,l=null,y){if(typeof r!="object"||r===null||T in r)return r;const P=z(r);if(P!==F&&P!==K)return r;var n=new Map,i=G(r),g=I(0);i&&n.set("length",I(r.length));var _;return new Proxy(r,{defineProperty(t,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&V();var f=n.get(e);return f===void 0?(f=I(a.value),n.set(e,f)):R(f,A(a.value,_)),!0},deleteProperty(t,e){var a=n.get(e);return a===void 0?e in t&&n.set(e,I(c)):(R(a,c),M(g)),!0},get(t,e,a){var d;if(e===T)return r;var f=n.get(e),s=e in t;if(f===void 0&&(!s||(d=D(t,e))!=null&&d.writable)&&(f=I(A(s?t[e]:c,_)),n.set(e,f)),f!==void 0){var u=h(f);return u===c?void 0:u}return Reflect.get(t,e,a)},getOwnPropertyDescriptor(t,e){var a=Reflect.getOwnPropertyDescriptor(t,e);if(a&&"value"in a){var f=n.get(e);f&&(a.value=h(f))}else if(a===void 0){var s=n.get(e),u=s==null?void 0:s.v;if(s!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(t,e){var u;if(e===T)return!0;var a=n.get(e),f=a!==void 0&&a.v!==c||Reflect.has(t,e);if(a!==void 0||Z!==null&&(!f||(u=D(t,e))!=null&&u.writable)){a===void 0&&(a=I(f?A(t[e],_):c),n.set(e,a));var s=h(a);if(s===c)return!1}return f},set(t,e,a,f){var b;var s=n.get(e),u=e in t;if(i&&e==="length")for(var d=a;d<s.v;d+=1){var S=n.get(d+"");S!==void 0?R(S,c):d in t&&(S=I(c),n.set(d+"",S))}s===void 0?(!u||(b=D(t,e))!=null&&b.writable)&&(s=I(void 0),R(s,A(a,_)),n.set(e,s)):(u=s.v!==c,R(s,A(a,_)));var E=Reflect.getOwnPropertyDescriptor(t,e);if(E!=null&&E.set&&E.set.call(f,a),!u){if(i&&typeof e=="string"){var o=n.get("length"),w=Number(e);Number.isInteger(w)&&w>=o.v&&R(o,w+1)}M(g)}return!0},ownKeys(t){h(g);var e=Reflect.ownKeys(t).filter(s=>{var u=n.get(s);return u===void 0||u.v!==c});for(var[a,f]of n)f.v!==c&&!(a in t)&&e.push(a);return e},setPrototypeOf(){$()}})}function M(r,l=1){R(r,r.v+l)}function ge(r,l,y,P=null,n=!1){m&&W();var i=r,g=null,_=null,t=null,e=n?ee:0;H(()=>{if(t===(t=!!l()))return;let a=!1;if(m){const f=i.data===J;t===f&&(i=Q(),X(i),L(!1),a=!0)}t?(g?q(g):g=U(()=>y(i)),_&&Y(_,()=>{_=null})):(_?q(_):P&&(_=U(()=>P(i))),g&&Y(g,()=>{g=null})),a&&L(!0)},e),m&&(i=p)}function j(r,l){return r===l||(r==null?void 0:r[T])===l}function Pe(r={},l,y,P){return ae(()=>{var n,i;return re(()=>{n=i,i=[],k(()=>{r!==y(...i)&&(l(r,...i),n&&j(y(...n),r)&&l(null,...n))})}),()=>{te(()=>{i&&j(y(...i),r)&&l(null,...i)})}}),r}function he(r,l,y,P){var x;var n=(y&ue)!==0,i=(y&le)!==0,g=(y&de)!==0,_=(y&ce)!==0,t=r[l],e=(x=D(r,l))==null?void 0:x.set,a=P,f=!0,s=!1,u=()=>(s=!0,f&&(f=!1,_?a=k(P):a=P),a);t===void 0&&P!==void 0&&(e&&i&&ne(),t=u(),e&&e(t));var d;if(i)d=()=>{var v=r[l];return v===void 0?u():(f=!0,s=!1,v)};else{var S=(n?B:ve)(()=>r[l]);S.f|=fe,d=()=>{var v=h(S);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(y&ie))return d;if(e){var E=r.$$legacy;return function(v,O){return arguments.length>0?((!i||!O||E)&&e(O?d():v),v):d()}}var o=!1,w=_e(t),b=B(()=>{var v=d(),O=h(w);return o?(o=!1,O):w.v=v});return n||(b.equals=se),function(v,O){var C=h(b);if(arguments.length>0){const N=O?h(b):i&&g?A(v):v;return b.equals(N)||(o=!0,R(w,N),s&&a!==void 0&&(a=N),h(b)),v}return C}}export{A as a,Pe as b,ge as i,he as p};