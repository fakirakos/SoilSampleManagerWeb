"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[976],{70976:(e,t,r)=>{r.r(t),r.d(t,{createLabelFunction:()=>d,formatField:()=>y});var a=r(76877),n=r(20337),l=r(75e3),u=r(79231),i=r(50787),s=r(98859),o=r(73546);const c=n.Z.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},f={getAttribute:(e,t)=>e.field(t)};async function d(e,t,n){if(!e||!e.symbol)return p;const l=e.where,u=(0,s.hV)(e),i=l?await r.e(4008).then(r.bind(r,44008)):null;let d;if("arcade"===u.type){const e=await(0,o.WW)(u.expression,n,t);d={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):t});if(null!=r)return r.toString()}catch(e){c.error(new a.Z("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:t,expression:u}))}return null},needsHydrationToEvaluate:()=>null==(0,s.el)(u.expression)}}else d={type:"simple",evaluate:e=>u.expression.replace(/{[^}]*}/g,(r=>{const a=r.slice(1,-1),n=t.get(a);if(!n)return r;let l=null;return"attributes"in e?e&&e.attributes&&(l=e.attributes[n.name]):l=e.field(n.name),null==l?"":y(l,n)}))};if(l){let e;try{e=i.WhereClause.create(l,t)}catch(e){return p}const r=d.evaluate;d.evaluate=t=>{const a="attributes"in t?void 0:f;return e.testFeature(t,a)?r(t):null}}return d}function y(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,a="range"in r?r.range[0]:r.minValue,n="range"in r?r.range[1]:r.maxValue;if(a<=t&&t<=n)return r.name}let a=e;return"date"===t.type||"esriFieldTypeDate"===t.type?a=(0,l.p6)(a,(0,l.Ze)("short-date")):(0,i.H7)(t)&&(a=(0,u.uf)(+a)),a||""}}}]);