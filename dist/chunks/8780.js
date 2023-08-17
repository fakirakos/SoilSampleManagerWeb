"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8780],{98780:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>d});var r=t(8773),o=t(27395),a=t(14187);function i(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?r.Z.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:a.yE[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):r.Z.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:a.yE[n.field.type],min:n.domain.min,max:n.domain.max}):null}function d(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,o.p)(t,2,3),(0,o.k)(t[0]))return i((0,o.T)(t[0],(0,o.d)(t[1]),void 0===t[2]?void 0:(0,o.t)(t[2])));if((0,o.q)(t[0]))return t[0]._ensureLoaded().then((()=>i((0,o.Z)((0,o.d)(t[1]),t[0],null,void 0===t[2]?void 0:(0,o.t)(t[2])))));throw new Error("Invalid Parameter")}))},n.functions.subtypes=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,o.p)(t,1,1),(0,o.k)(t[0])){const n=(0,o.Q)(t[0]);return n?r.Z.convertObjectToArcadeDictionary(n):null}if((0,o.q)(t[0]))return t[0]._ensureLoaded().then((()=>{const n=t[0].subtypes();return n?r.Z.convertObjectToArcadeDictionary(n):null}));throw new Error("Invalid Parameter")}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,o.p)(t,2,4),(0,o.k)(t[0]))return(0,o.U)(t[0],(0,o.d)(t[1]),t[2],void 0===t[3]?void 0:(0,o.t)(t[3]));if((0,o.q)(t[0]))return t[0]._ensureLoaded().then((()=>{const n=(0,o.Z)((0,o.d)(t[1]),t[0],null,void 0===t[3]?void 0:(0,o.t)(t[3]));return(0,o._)(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domainname",min:"2",max:"4"}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,o.p)(t,2,4),(0,o.k)(t[0]))return(0,o.V)(t[0],(0,o.d)(t[1]),t[2],void 0===t[3]?void 0:(0,o.t)(t[3]));if((0,o.q)(t[0]))return t[0]._ensureLoaded().then((()=>{const n=(0,o.Z)((0,o.d)(t[1]),t[0],null,void 0===t[3]?void 0:(0,o.t)(t[3]));return(0,o.$)(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domaincode",min:"2",max:"4"})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,o.p)(t,1,2),!(0,o.q)(t[0]))return(0,o.u)(t[0],t[1]);{const e=(0,o.C)(t[1],"");if(""===e)return t[0].castToText();if("schema"===e.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},n.functions.gdbversion=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,o.p)(t,1,1),(0,o.k)(t[0]))return t[0].gdbVersion();if((0,o.q)(t[0]))return t[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},n.functions.schema=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,o.p)(t,1,1),(0,o.q)(t[0]))return t[0].load().then((()=>r.Z.convertObjectToArcadeDictionary(t[0].schema())));if((0,o.k)(t[0])){const n=(0,o.P)(t[0]);return n?r.Z.convertObjectToArcadeDictionary(n):null}throw new Error("Invalid Parameter")}))}}}}]);