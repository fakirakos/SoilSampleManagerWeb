"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[594],{28769:(t,e,n)=>{n.d(e,{Hq:()=>A,Mk:()=>h,P_:()=>I,Qp:()=>F,VO:()=>w,_D:()=>y,kZ:()=>O,kr:()=>z,nF:()=>k,tB:()=>_,ut:()=>T,vF:()=>V,zD:()=>g}),n(15572);var r=n(76877),o=n(43388),i=n(89462),s=n(60460),a=n(14290),l=n(3982),c=n(74991),f=n(49030);function h(t,e,n){return!(0,a.Up)(t,e,n)}function u(t,e,n){const o=h(t,e,n);if(o&&!(0,a.kR)())throw new r.Z("rasterprojectionhelper-project","projection engine is not loaded");return o}const p=function(t,e,n,r=0){if(1===n[0])return[0,0];let o=1,i=-1,s=1,a=-1;for(let e=0;e<t.length;e+=2)isNaN(t[e])||(o=o>t[e]?t[e]:o,i=i>t[e]?i:t[e],s=s>t[e+1]?t[e+1]:s,a=a>t[e+1]?a:t[e+1]);const{cols:l,rows:c}=e,f=(i-o)/l/n[0],h=(a-s)/c/n[1],u=2*r;let p=0,m=!1,x=[0,0];for(let e=0;e<l-3;e++){for(let n=0;n<c-3;n++){const r=e*c*2+2*n,o=(t[r]+t[r+4]+t[r+4*c]+t[r+4*c+4])/4,i=(t[r+1]+t[r+5]+t[r+4*c+1]+t[r+4*c+5])/4,s=Math.abs((o-t[r+2*c+2])/f),a=Math.abs((i-t[r+2*c+3])/h);if(s+a>p&&(p=s+a,x=[s,a]),u&&p>u){m=!0;break}}if(m)break}return x},m={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},x=new Map,d=new Map;async function g(){if((0,a.kR)())return null;await(0,a.zD)()}function y(t,e,n){return u(t.spatialReference,e)?n?(0,a.rS)(e,t.spatialReference,t):(0,a.rS)(t.spatialReference,e,t):null}function w(t,e,n,r=null){const s=t.spatialReference;if(s.equals(e))return t;u(s,e,r);const c=n.center,f=new l.Z({xmin:c.x-t.x/2,xmax:c.x+t.x/2,ymin:c.y-t.y/2,ymax:c.y+t.y/2,spatialReference:s}),h=(0,a.iV)(f,e,r);if((0,o.Wi)(h))return null;const p={x:h.xmax-h.xmin,y:h.ymax-h.ymin},m=T(e);if((0,o.pC)(m)&&p.x>=m){const n=(0,i.c9)(s)/(0,i.c9)(e);p.x=t.x*n,p.y=t.y*n}return p}function M(t,e=.01){return(0,i.c9)(t)?e/(0,i.c9)(t):0}function k(t,e,n=null,r=!0){const i=t.spatialReference;if(i.equals(e))return t;u(i,e,n);const s=(0,a.iV)(t,e,n);if(!r||!s)return s;const l=G(i,!0),c=G(e,!0),f=M(i);return f&&(0,o.pC)(l)&&(0,o.pC)(c)&&(s.x>0&&Math.abs(t.x-l[0])<f?s.x-=c[1]-c[0]:s.x<0&&Math.abs(t.x-l[1])<f&&(s.x+=c[1]-c[0])),s}function P(t){const{inSR:e,outSR:n,datumTransformation:r,preferPE:i}=t;if(e.equals(n)){const{points:e}=v(t,null);return e}if(e.isWebMercator&&n.isWGS84||e.isWGS84&&n.isWebMercator)return function(t){const{cols:e,rows:n,xres:r,yres:o,usePixelCenter:i,inSR:s,outSR:l}=t;let{xmin:f,ymax:h}=t;i&&(f+=r/2,h-=o/2);const u=[],p=[],m=Math.max(e,n);for(let t=0;t<m;t++){const i=f+r*Math.min(e,t),m=h-o*Math.min(n,t),x=(0,a.iV)(new c.Z({x:i,y:m,spatialReference:s}),l);t<=e&&u.push(x.x),t<=n&&p.push(x.y)}const x=[];for(let t=0;t<e;t++)for(let e=0;e<n;e++)x.push([u[t],p[e]]);return x}(t);if(u(e,n,r)&&i){if(e.isGeographic)return R(t);const n=S(e);if((0,o.pC)(n))return R(t)}return function(t){const{points:e}=v(t,null),n=e.map((e=>new c.Z(e[0],e[1],t.inSR)));return(0,a.iV)(n,t.outSR,t.datumTransformation).map((t=>t?[t.x,t.y]:[NaN,NaN]))}(t)}function R(t){const{inSR:e,outSR:n,datumTransformation:r}=t,i=S(e),{points:a,mask:l}=v(t,i);if(!e.isGeographic){const t=e.wkid?s.e.coordsys(e.wkid):s.e.fromString(e.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,e.wkt);s.g.projToGeog(t,a.length,a)}if((0,o.pC)(r)&&r.steps.length&&r.steps.forEach((t=>{const e=t.wkid?s.e.geogtran(t.wkid):s.e.fromString(s.f.PE_TYPE_GEOGTRAN,t.wkt);s.h.geogToGeog(e,a.length,a,null,t.isInverse?s.f.PE_TRANSFORM_2_TO_1:s.f.PE_TRANSFORM_1_TO_2)})),!n.isGeographic){const t=S(n,!0),e=(0,o.pC)(t)&&t.isEnvelope?[t.bbox[1],t.bbox[3]]:[-90,90];!function(t,e){const[n,r]=e;for(let e=0;e<t.length;e++){const o=t[e][1];(o<n||o>r)&&(t[e]=[NaN,NaN])}}(a,e);const r=n.wkid?s.e.coordsys(n.wkid):s.e.fromString(n.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,n.wkt);s.g.geogToProj(r,a.length,a)}let c=a;if(l&&a.length!==l.length){c=[];for(let t=0,e=0;t<l.length;t++)l[t]?c.push(a[e++]):c.push([NaN,NaN])}return c}function S(t,e=!1){let n=t.wkid||t.wkt;if(!n||t.isGeographic)return null;if(n=String(n),x.has(n)){const t=x.get(n);return e?null==t?void 0:t.gcs:null==t?void 0:t.pcs}const r=t.wkid?s.e.coordsys(t.wkid):s.e.fromString(t.isGeographic?s.f.PE_TYPE_GEOGCS:s.f.PE_TYPE_PROJCS,t.wkt),o=b(r,M(t,1e-4)),i=b(r,0,!0);return x.set(n,{pcs:o,gcs:i}),e?i:o}function b(t,e=0,n=!1){const r=s.j.generate(t),o=n?t.horizonGcsGenerate():t.horizonPcsGenerate();if(null==o||!o.length)return null;let i=!1,a=o.find((t=>1===t.getInclusive()&&1===t.getKind()));if(!a){if(a=o.find((t=>1===t.getInclusive()&&0===t.getKind())),!a)return null;i=!0}const l=r.isPannableRectangle(),c=a.getCoord();if(i)return{isEnvelope:i,isPannable:l,vertices:c,coef:null,bbox:[c[0][0]-e,c[0][1]-e,c[1][0]+e,c[1][1]+e]};let f=0;const h=[];let[u,p]=c[0],[m,x]=c[0];for(let t=0,e=c.length;t<e;t++){f++,f===e&&(f=0);const[n,r]=c[t],[o,i]=c[f];if(i===r)h.push([n,o,r,i,2]);else{const t=(o-n)/(i-r||1e-4),e=n-t*r;r<i?h.push([t,e,r,i,0]):h.push([t,e,i,r,1])}u=u<n?u:n,p=p<r?p:r,m=m>n?m:n,x=x>r?x:r}return{isEnvelope:!1,isPannable:l,vertices:c,coef:h,bbox:[u,p,m,x]}}function v(t,e){const n=[],{cols:r,rows:i,xres:s,yres:a,usePixelCenter:l}=t;let{xmin:c,ymax:f}=t;if(l&&(c+=s/2,f-=a/2),!(0,o.pC)(e)){for(let t=0;t<r;t++)for(let e=0;e<i;e++)n.push([c+s*t,f-a*e]);return{points:n}}const h=new Uint8Array(r*i);if(e.isEnvelope){const{bbox:[t,o,l,u]}=e;for(let p=0,m=0;p<r;p++){const r=c+s*p,x=e.isPannable||r>=t&&r<=l;for(let t=0;t<i;t++,m++){const e=f-a*t;x&&e>=o&&e<=u&&(n.push([r,e]),h[m]=1)}}return{points:n,mask:h}}const{coef:u}=e,p=[];for(let t=0;t<i;t++){const e=f-a*t,n=[],r=[];for(let t=0;t<u.length;t++){const[o,i,s,a,l]=u[t];if(e===s&&s===a)n.push(o),n.push(i),r.push(2),r.push(2);else if(e>=s&&e<=a){const t=o*e+i;n.push(t),r.push(l)}}let o=n;if(n.length>2){let t=2===r[0]?0:r[0],e=n[0];o=[];for(let i=1;i<r.length;i++)2===r[i]&&i!==r.length-1||(r[i]!==t&&(o.push(0===t?Math.min(e,n[i-1]):Math.max(e,n[i-1])),t=r[i],e=n[i]),i===r.length-1&&o.push(0===r[i]?Math.min(e,n[i]):Math.max(e,n[i])));o.sort(((t,e)=>t-e))}else n[0]>n[1]&&(o=[n[1],n[0]]);p.push(o)}for(let t=0,e=0;t<r;t++){const r=c+s*t;for(let t=0;t<i;t++,e++){const o=f-a*t,i=p[t];if(2===i.length)r>=i[0]&&r<=i[1]&&(n.push([r,o]),h[e]=1);else if(i.length>2){let t=!1;for(let e=0;e<i.length;e+=2)if(r>=i[e]&&r<=i[e+1]){t=!0;break}t&&(n.push([r,o]),h[e]=1)}}}return{points:n,mask:h}}function C(t){const e=T(t[0].spatialReference);if(t.length<2||!(0,o.pC)(e))return t[0];let{xmin:n,xmax:r,ymin:i,ymax:s}=t[0];for(let n=1;n<t.length;n++){const o=t[n];r=o.xmax+e*n,i=Math.min(i,o.ymin),s=Math.max(s,o.ymax)}return new l.Z({xmin:n,xmax:r,ymin:i,ymax:s,spatialReference:t[0].spatialReference})}function _(t,e,n=null,r=!0){if(t.spatialReference.equals(e))return t;const i=A(t),s=T(t.spatialReference,!0),a=T(e);if(0===i||(0,o.Wi)(s)||(0,o.Wi)(a))return E(t,e,n,r);const c=t.clone().normalize();if(1===c.length&&t.xmax<s&&t.xmax-s/2>M(t.spatialReference)){const{xmin:e,xmax:n}=t;for(let r=0;r<=i;r++){const o=0===r?e:-s/2,a=r===i?n-s*r:s/2;c[r]=new l.Z({xmin:o,xmax:a,ymin:t.ymin,ymax:t.ymax,spatialReference:t.spatialReference})}}return C(c.map((t=>E(t,e,n,r))).filter((t=>!!t)))}function E(t,e,n=null,r=!0,i=!0){const s=t.spatialReference;if(s.equals(e))return t;u(s,e,n);const l=(0,a.iV)(t,e,n);if(i&&e.isWebMercator&&l&&(l.ymax=Math.min(20037508.342787,l.ymax),l.ymin=Math.max(-20037508.342787,l.ymin),l.ymin>=l.ymax))return null;if(!r||!l)return l;const f=G(s,!0),h=G(e,!0);if((0,o.Wi)(f)||(0,o.Wi)(h))return l;const p=M(s,.001),m=M(s,500),x=M(e,.001);if(Math.abs(l.xmin-h[0])<x&&Math.abs(l.xmax-h[1])<x){const r=Math.abs(t.xmin-f[0]),o=Math.abs(f[1]-t.xmax);if(r<p&&o>m){l.xmin=h[0];const r=[];r.push(new c.Z(t.xmax,t.ymin,s)),r.push(new c.Z(t.xmax,(t.ymin+t.ymax)/2,s)),r.push(new c.Z(t.xmax,t.ymax,s));const o=r.map((t=>k(t,e,n))).filter((t=>!isNaN(null==t?void 0:t.x))).map((t=>t.x));l.xmax=Math.max.apply(null,o)}if(o<p&&r>m){l.xmax=h[1];const r=[];r.push(new c.Z(t.xmin,t.ymin,s)),r.push(new c.Z(t.xmin,(t.ymin+t.ymax)/2,s)),r.push(new c.Z(t.xmin,t.ymax,s));const o=r.map((t=>k(t,e,n))).filter((t=>!isNaN(null==t?void 0:t.x))).map((t=>t.x));l.xmin=Math.min.apply(null,o)}}else{const t=M(e,.001);Math.abs(l.xmin-h[0])<t&&(l.xmin=h[0]),Math.abs(l.xmax-h[1])<t&&(l.xmax=h[1])}return l}function T(t,e=!1){const n=e?20037508.342787:20037508.342788905;return t.isWebMercator?2*n:t.wkid&&t.isGeographic?360:2*m[t.wkid]||null}function G(t,e=!1){if(t.isGeographic)return[-180,180];const n=T(t,e);return(0,o.pC)(n)?[-n/2,n/2]:null}function N(t,e,n,r){let o=(t-e)/n;return o-Math.floor(o)!=0?o=Math.floor(o):r&&(o-=1),o}function A(t,e=!1){const n=T(t.spatialReference);if(!(0,o.pC)(n))return 0;const r=e?0:-n/2,i=M(t.spatialReference),s=!e&&Math.abs(t.xmax-n/2)<i?n/2:t.xmax,a=!e&&Math.abs(t.xmin+n/2)<i?-n/2:t.xmin;return N(s,r,n,!0)-N(a,r,n,!1)}function I(t){const e=t.storageInfo.origin.x,n=T(t.spatialReference,!0);if(!(0,o.pC)(n))return{originX:e,halfWorldWidth:null,pyramidsInfo:null};const r=n/2,{nativePixelSize:i,storageInfo:s,extent:a}=t,{maximumPyramidLevel:l,blockWidth:c,pyramidScalingFactor:f}=s;let h=i.x;const u=[],p=(0,o.pC)(t.transform)&&"gcs-shift"===t.transform.type,m=e+(p?0:r),x=p?n-e:r-e;for(let t=0;t<=l;t++){const t=(a.xmax-e)/h/c,n=t-Math.floor(t)==0?t:Math.ceil(t),r=x/h/c,o=r-Math.floor(r)==0?r:Math.ceil(r),i=Math.floor(m/h/c),s=Math.round(m/h)%c,l=(c-Math.round(x/h)%c)%c;u.push({resolutionX:h,blockWidth:c,datsetColumnCount:n,worldColumnCountFromOrigin:o,leftMargin:s,rightPadding:l,originColumnOffset:i}),h*=f}return{originX:e,halfWorldWidth:r,pyramidsInfo:u,hasGCSSShiftTransform:p}}function F(t){const e=t.isAdaptive&&null==t.spacing;let n=t.spacing||[32,32],r=W(t),i={cols:r.size[0]+1,rows:r.size[1]+1};const a=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let l=r.outofBoundPointCount===r.offsets.length/2||e&&a?[0,0]:p(r.offsets,i,n,4);const c=(l[0]+l[1])/2,u=t.projectedExtent.spatialReference,m=t.srcBufferExtent.spatialReference;if(e&&(a||c>4)&&(h(u,m,t.datumTransformation)&&(u.isGeographic||(0,o.pC)(S(u))),n=[4,4],r=W({...t,spacing:n}),i={cols:r.size[0]+1,rows:r.size[1]+1},l=p(r.offsets,i,n,4)),r.error=l,n[0]>1&&(r.coefficients=Z(r.offsets,i,a)),t.includeGCSGrid&&!u.isGeographic&&!u.isWebMercator)if(m.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:n};else{const e=S(u);if((0,o.pC)(e)&&!e.isEnvelope){const e=function(t){if(!t||t.isGeographic)return t;const e=String(t.wkid||t.wkt);let n;return d.has(e)?n=d.get(e):(n=(t.wkid?s.e.coordsys(t.wkid):s.e.fromString(s.f.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),d.set(e,n)),new f.Z({wkid:n})}(u),o=_(t.projectedExtent,e),{offsets:l}=W({...t,srcBufferExtent:o,spacing:n}),c=Z(l,i,a);r.gcsGrid={offsets:l,coefficients:c,spacing:n}}}return r}function W(t){const{projectedExtent:e,srcBufferExtent:n,pixelSize:r,datumTransformation:i,rasterTransform:s}=t,a=e.spatialReference,l=n.spatialReference;u(a,l);const{xmin:f,ymin:h,xmax:p,ymax:m}=e,x=T(l),d=(0,o.pC)(x)&&(t.hasWrapAround||"gcs-shift"===(null==s?void 0:s.type)),g=t.spacing||[32,32],y=g[0]*r.x,w=g[1]*r.y,k=1===g[0],R=Math.ceil((p-f)/y-.1/g[0])+(k?0:1),S=Math.ceil((m-h)/w-.1/g[1])+(k?0:1),b=P({cols:R,rows:S,xmin:f,ymax:m,xres:y,yres:w,inSR:a,outSR:l,datumTransformation:i,preferPE:g[0]<=4,usePixelCenter:k}),v=[];let C,_=0;const E=k?-1:NaN,{xmin:G,xmax:N,ymax:A,width:I,height:F}=n,W=M(l,500);for(let t=0;t<R;t++){const e=[];for(let n=0;n<S;n++){let r=b[t*S+n];if(d&&r[0]>N&&r[0]>x/2-W&&(r[0]-=x),!r||isNaN(r[0])||isNaN(r[1]))v.push(E),v.push(E),e.push(null),_++;else{if(s){const t=s.inverseTransform(new c.Z({x:r[0],y:r[1],spatialReference:l}));r=[t.x,t.y]}e.push(r),t>0&&d&&C[n]&&r[0]<C[n][0]&&(r[0]+=x),v.push((r[0]-G)/I),v.push((A-r[1])/F)}}C=e}return{offsets:v,error:null,coefficients:null,outofBoundPointCount:_,spacing:g,size:k?[R,S]:[R-1,S-1]}}function Z(t,e,n){const{cols:r,rows:o}=e,i=new Float32Array((r-1)*(o-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let e=0;e<r-1;e++){for(let n=0;n<o-1;n++){let l=e*o*2+2*n;const c=t[l],f=t[l+1],h=t[l+2],u=t[l+3];l+=2*o;const p=t[l],m=t[l+1],x=t[l+2],d=t[l+3];let g=0,y=12*(n*(r-1)+e);for(let t=0;t<3;t++)i[y++]=s[g++]*c+s[g++]*h+s[g++]*x;g=0;for(let t=0;t<3;t++)i[y++]=s[g++]*f+s[g++]*u+s[g++]*d;g=0;for(let t=0;t<3;t++)i[y++]=a[g++]*c+a[g++]*p+a[g++]*x;g=0;for(let t=0;t<3;t++)i[y++]=a[g++]*f+a[g++]*m+a[g++]*d}if(n)for(let t=0;t<i.length;t++)isNaN(i[t])&&(i[t]=-1)}return i}function O(t){const e=t.clone().normalize();return 1===e.length?e[0]:C(e)}function z(t,e,n){const{storageInfo:r,pixelSize:i}=e;let s,a=!1;const{pyramidResolutions:l}=r;if((0,o.pC)(l)&&l.length){const r=(t.x+t.y)/2,o=l[l.length-1],f=(o.x+o.y)/2,h=(i.x+i.y)/2;if(r<=h)s=0;else if(r>=f)s=l.length,a=r/f>8;else{let t,e=h;for(let o=1;o<=l.length;o++){if(t=(l[o-1].x+l[o-1].y)/2,r<=t){r===t?s=o:"down"===n?(s=o-1,a=r/e>8):s="up"===n||r-e>t-r||r/e>2?o:o-1;break}e=t}}const u=0===s?i:l[s-1];return{pyramidLevel:s,pyramidResolution:new c.Z({x:u.x,y:u.y,spatialReference:e.spatialReference}),excessiveReading:a}}const f=Math.log(t.x/i.x)/Math.LN2,h=Math.log(t.y/i.y)/Math.LN2,u=e.storageInfo.maximumPyramidLevel||0;s="down"===n?Math.floor(Math.min(f,h)):"up"===n?Math.ceil(Math.max(f,h)):Math.round((f+h)/2),s<0?s=0:s>u&&(a=s>u+3,s=u);const p=2**s;return{pyramidLevel:s,pyramidResolution:new c.Z({x:p*e.nativePixelSize.x,y:p*e.nativePixelSize.y,spatialReference:e.spatialReference}),excessiveReading:a}}function V(t,e,n=512,r=!0){const{extent:o,spatialReference:s,pixelSize:a}=t,l=w(new c.Z({x:a.x,y:a.y,spatialReference:s}),e,o);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const f=(l.x+l.y)/2,h=(0,i.c9)(e),u=f*h*96*39.37,p=e.isGeographic?256/n*295828763.7958547:256/n*591657527.591555;let m="vector-magdir"===t.dataType||"vector-uv"===t.dataType;const x=_(o,e);m||r&&(e.isGeographic||e.isWebMercator)&&(m=x.xmin*x.xmax<0);let d,g=u;const y=1.001;if(m){g=p;const t=e.isGeographic?1341104507446289e-21:.29858214164761665,n=t*(96*h*39.37),r=e.isGeographic?4326:3857;d=w(new c.Z({x:t,y:t,spatialReference:{wkid:r}}),s,x),d.x*=g/n,d.y*=g/n}else{d={x:a.x,y:a.y};const e=Math.ceil(Math.log(Math.min(t.width,t.height)/32)/Math.LN2);let n=0;for(;g<p*(y/2)&&n<e;)n++,g*=2,d.x*=2,d.y*=2;Math.max(g,p)/Math.min(g,p)<=y&&(g=p)}const M=[g],k=[{x:d.x,y:d.y}],P=Math.min(70.5310735,u)/y;for(;g>=P;)g/=2,d.x/=2,d.y/=2,M.push(g),k.push({x:d.x,y:d.y});return{projectedPixelSize:l,scales:M,srcResolutions:k,isCustomTilingScheme:!m}}},46841:(t,e,n)=>{n.d(e,{BH:()=>g,K:()=>C,KC:()=>x,NL:()=>c,QI:()=>d,Tg:()=>u,Yx:()=>f,nb:()=>E,wF:()=>_,xQ:()=>m});var r=n(51598),o=n(43388),i=n(32911),s=n(62296);const a=new Map;a.set("meter-per-second",1),a.set("kilometer-per-hour",.277778),a.set("knots",.514444),a.set("feet-per-second",.3048),a.set("mile-per-hour",.44704);const l=180/Math.PI,c=new r.X({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function f(t,e){return a.get(t)/a.get(e)||1}function h(t){return(450-t)%360}function u(t,e="geographic"){const[n,r]=t,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n)*l;return i=(360+i)%360,"geographic"===e&&(i=h(i)),[o,i]}function p(t,e="geographic"){let n=t[1];"geographic"===e&&(n=h(n)),n%=360;const r=t[0];return[r*Math.cos(n/l),r*Math.sin(n/l)]}function m(t,e,n,r="geographic"){if(!(0,s.nk)(t)||(0,o.Wi)(n))return t;const i="vector-magdir"===e?t.clone():(0,o.Wg)(x(t,e)),a=i.pixels[1];for(let t=0;t<a.length;t++)a[t]="geographic"===r?(a[t]+n[t]+270)%360:(a[t]+360-n[t])%360;return"vector-magdir"===e?i:x(i,"vector-magdir")}function x(t,e,n="geographic",r=1){if(!(0,s.nk)(t))return t;const{pixels:o,width:a,height:l}=t,c=a*l,f=o[0],h=o[1],m=t.pixelType.startsWith("f")?t.pixelType:"f32",x=i.Z.createEmptyBand(m,c),d=i.Z.createEmptyBand(m,c);let g=0;for(let t=0;t<l;t++)for(let t=0;t<a;t++)"vector-uv"===e?([x[g],d[g]]=u([f[g],h[g]],n),x[g]*=r):([x[g],d[g]]=p([f[g],h[g]],n),x[g]*=r,d[g]*=r),g++;const y=new i.Z({pixelType:m,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[x,d]});return y.updateStatistics(),y}function d(t,e,n=1){if(1===n||!(0,s.nk)(t))return t;const r=t.clone(),{pixels:o,width:i,height:a}=r,l=o[0],c=o[1];let f=0;for(let t=0;t<a;t++)for(let t=0;t<i;t++)"vector-uv"===e?(l[f]*=n,c[f]*=n):l[f]*=n,f++;return r.updateStatistics(),r}function g(t,e,n,r,i){if(!(0,o.pC)(i)||!i.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(e/r),height:Math.round(n/r),resolution:t.width/e};const s=i.xmin,a=i.ymax,l=(t.xmax-t.xmin)/e*r,c=(t.ymax-t.ymin)/n*r,f=(l+c)/2;return t.xmin=s+Math.floor((t.xmin-s)/l)*l,t.xmax=s+Math.ceil((t.xmax-s)/l)*l,t.ymin=a+Math.floor((t.ymin-a)/c)*c,t.ymax=a+Math.ceil((t.ymax-a)/c)*c,{extent:t,width:Math.round(t.width/l),height:Math.round(t.height/c),resolution:f}}const y=function(t=0,e=0,n=Math.PI,r=!0){r&&(n=(2*Math.PI-n)%(2*Math.PI));const o=r?-1:1,i=13*o,s=-7*o,a=-2*o,l=-16*o,c=21.75,[f,h]=M(0,e+i,n,c),[u,p]=M(t-5.5,e+s,n,c),[m,x]=M(t+5.5,e+s,n,c),[d,g]=M(t-1.5,e+a,n,c),[y,w]=M(t+1.5,e+a,n,c),[k,P]=M(t-1.5,e+l,n,c),[R,S]=M(t+1.5,e+l,n,c);return[f,h,u,p,d,g,y,w,m,x,k,P,R,S]}(0,0,0);function w(t=0,e=Math.PI,n=!0){n&&(e=(2*Math.PI-e)%(2*Math.PI));const r=n?-1:1,o=5*r,i=20*r,s=25*r,a=45,l=2*r;let[c,f]=[5,0-i],[h,u]=[c+2,f],[p,m]=[h-0,u+l],[x,d]=[-5,0-s],[g,y]=[x+0,d-l],w=Math.ceil(t/5),k=Math.floor(w/10);w-=8*k;const P=[],R=[];for(let t=0;t<w/2;t++,k--){k<=0&&w%2==1&&t===(w-1)/2&&(x=0,g=x+0,d=(d+f)/2,y=d-l);const[n,r]=M(x,d,e,a);if(k>0){const[t,o]=M(h,d,e,a),[i,s]=M(c,f,e,a);P.push(t),P.push(o),P.push(n),P.push(r),P.push(i),P.push(s)}else{const[t,o]=M(h,u,e,a),[i,s]=M(p,m,e,a),[l,c]=M(g,y,e,a);R.push(n),R.push(r),R.push(l),R.push(c),R.push(i),R.push(s),R.push(t),R.push(o)}d+=o,f+=o,u+=o,m+=o,y+=o}const[S,b]=M(5,0+i,e,a),[v,C]=M(7,0+i,e,a),[_,E]=M(5,0-s,e,a),[T,G]=M(7,0-s,e,a);return{pennants:P,barbs:R,shaft:[S,b,v,C,_,E,T,G]}}function M(t,e,n,r=1){const o=Math.sqrt(t*t+e*e)/r,i=(2*Math.PI+Math.atan2(e,t))%(2*Math.PI);return[o,(2*Math.PI+i-n)%(2*Math.PI)]}const k=[0,1,3,6,10,16,21,27,33,40,47,55,63],P=[0,.5,1,1.5,2],R=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function S(t,e,n,r){const o=f(r||"knots",n);let i;for(i=1;i<e.length;i++)if(i===e.length-1){if(t<e[i]*o)break}else if(t<=e[i]*o)break;return Math.min(i-1,e.length-2)}function b(t,e,n,r,o){let i=0;switch(e){case"beaufort_kn":i=S(t,k,"knots",n);break;case"beaufort_km":i=S(t,k,"kilometer-per-hour",n);break;case"beaufort_ft":i=S(t,k,"feet-per-second",n);break;case"beaufort_m":i=S(t,k,"meter-per-second",n);break;case"classified_arrow":i=S(t,o,r,n);break;case"ocean_current_m":i=S(t,P,"meter-per-second",n);break;case"ocean_current_kn":i=S(t,R,"knots",n)}return i}const v=[];function C(t,e){let n=0,r=0;const{width:o,height:i,mask:s}=t,a=t.pixels[0],l=[],h=[],u=f(c.fromJSON(e.inputUnit),"knots"),p="wind_speed"===e.style?5:Number.MAX_VALUE;for(let t=0;t<i;t++)for(let e=0;e<o;e++){const c=a[t*o+e]*u;if((!s||s[t*o+e])&&c<p){for(let r=0;r<4;r++)l[n++]=(e+.5)/o,l[n++]=(t+.5)/i,l[n++]=r<2?-.5:.5,l[n++]=r%2==0?-.5:.5,l[n++]=0,l[n++]=c;const s=4*(n/24-1);h[r++]=s,h[r++]=s+1,h[r++]=s+2,h[r++]=s+1,h[r++]=s+2,h[r++]=s+3}}return{vertexData:new Float32Array(l),indexData:new Uint32Array(h)}}function _(t,e){return"simple_scalar"===e.style?C(t,e):"wind_speed"===e.style?function(t,e){if(0===v.length)for(let t=0;t<30;t++)v.push(w(5*t,0));const n=f(c.fromJSON(e.inputUnit),"knots"),{width:r,height:o,mask:i}=t,s=t.pixels[0],a=t.pixels[1],l=[],h=[];let u=0,p=0;for(let t=0;t<o;t++)for(let e=0;e<r;e++){const c=t*r+e,f=s[c]*n;if((!i||i[t*r+e])&&f>=5){var m;const n=null!=(m=(a[c]+360)%360/180*Math.PI)?m:2*Math.PI*Math.random(),{pennants:i,barbs:s,shaft:x}=v[Math.min(Math.floor(f/5),29)];if(i.length+s.length===0)continue;let d=l.length/6;const g=(e+.5)/r,y=(t+.5)/o;for(let t=0;t<i.length;t+=2)l[u++]=g,l[u++]=y,l[u++]=i[t],l[u++]=i[t+1]+n,l[u++]=0,l[u++]=f;for(let t=0;t<s.length;t+=2)l[u++]=g,l[u++]=y,l[u++]=s[t],l[u++]=s[t+1]+n,l[u++]=0,l[u++]=f;for(let t=0;t<x.length;t+=2)l[u++]=g,l[u++]=y,l[u++]=x[t],l[u++]=x[t+1]+n,l[u++]=0,l[u++]=f;for(let t=0;t<i.length/6;t++)h[p++]=d,h[p++]=d+1,h[p++]=d+2,d+=3;for(let t=0;t<s.length/8;t++)h[p++]=d,h[p++]=d+1,h[p++]=d+2,h[p++]=d+1,h[p++]=d+2,h[p++]=d+3,d+=4;h[p++]=d+0,h[p++]=d+1,h[p++]=d+2,h[p++]=d+1,h[p++]=d+3,h[p++]=d+2,d+=4}}return{vertexData:new Float32Array(l),indexData:new Uint32Array(h)}}(t,e):function(t,e){const{style:n,inputUnit:r,outputUnit:o,breakValues:i}=e,s=c.fromJSON(r),a=c.fromJSON(o);let l=0,f=0;const{width:h,height:u,mask:p}=t,m=t.pixels[0],x=t.pixels[1],d=p?p.filter((t=>t>0)).length:h*u,g=new Float32Array(42*d),w=new Uint32Array(15*d);for(let t=0;t<u;t++)for(let e=0;e<h;e++){const r=t*h+e;if(!p||p[t*h+e]){var M;const o=null!=(M=(x[r]+360)%360/180*Math.PI)?M:2*Math.PI*Math.random(),c=b(m[r],n,s,a,i);for(let n=0;n<y.length;n+=2)g[l++]=(e+.5)/h,g[l++]=(t+.5)/u,g[l++]=y[n],g[l++]=y[n+1]+o,g[l++]=c,g[l++]=m[r];const p=7*(l/42-1);w[f++]=p,w[f++]=p+1,w[f++]=p+2,w[f++]=p+0,w[f++]=p+4,w[f++]=p+3,w[f++]=p+0,w[f++]=p+2,w[f++]=p+3,w[f++]=p+2,w[f++]=p+5,w[f++]=p+3,w[f++]=p+5,w[f++]=p+6,w[f++]=p+3}}return{vertexData:g,indexData:w}}(t,e)}function E(t,e,n,r=[0,0],o=.5){const{width:s,height:a,mask:l}=t,[c,f]=t.pixels,[h,m]=r,x=Math.round((s-h)/n),d=Math.round((a-m)/n),g=x*d,y=new Float32Array(g),w=new Float32Array(g),M=new Uint8Array(g),k="vector-uv"===e;for(let t=0;t<d;t++)for(let e=0;e<x;e++){let r=0;const i=t*x+e,d=Math.max(0,t*n+m),g=Math.max(0,e*n+h),P=Math.min(a,d+n),R=Math.min(s,g+n);for(let t=d;t<P;t++)for(let e=g;e<R;e++){const n=t*s+e;if(!l||l[n]){r++;const t=k?[c[n],f[n]]:[c[n],(360+f[n])%360],[e,o]=k?t:p(t);y[i]+=e,w[i]+=o}}if(r>=(P-d)*(R-g)*(1-o)){M[i]=1;const[t,e]=u([y[i]/r,w[i]/r]);y[i]=t,w[i]=e}else M[i]=0,y[i]=0,w[i]=0}const P=new i.Z({width:x,height:d,pixels:[y,w],mask:M});return P.updateStatistics(),P}},66807:(t,e,n)=>{n.d(e,{KK:()=>x,z_:()=>h}),n(15572);var r=n(20337),o=n(19776),i=n(43388),s=n(19955),a=n(28675),l=n(54522),c=n(3982);const f=r.Z.getLogger("esri.views.2d.engine.flow.dataUtils");async function h(t,e,n){const r=performance.now(),o=function(t,e){const n=function(t,e,n,r){if(0===r)return t;const o=Math.round(3*r),i=new Array(2*o+1);let s=0;for(let t=-o;t<=o;t++){const e=Math.exp(-t*t/(r*r));i[t+o]=e,s+=e}for(let t=-o;t<=o;t++)i[t+o]/=s;const a=new Float32Array(t.length);for(let r=0;r<n;r++)for(let n=0;n<e;n++){let s=0,l=0;for(let a=-o;a<=o;a++){if(n+a<0||n+a>=e)continue;const c=i[a+o];s+=c*t[2*(r*e+(n+a))+0],l+=c*t[2*(r*e+(n+a))+1]}a[2*(r*e+n)+0]=s,a[2*(r*e+n)+1]=l}const l=new Float32Array(t.length);for(let t=0;t<e;t++)for(let r=0;r<n;r++){let s=0,c=0;for(let l=-o;l<=o;l++){if(r+l<0||r+l>=n)continue;const f=i[l+o];s+=f*a[2*((r+l)*e+t)+0],c+=f*a[2*((r+l)*e+t)+1]}l[2*(r*e+t)+0]=s,l[2*(r*e+t)+1]=c}return l}(e.data,e.width,e.height,t.smoothing);return t.interpolate?(t,r)=>{const o=Math.floor(t),i=Math.floor(r);if(o<0||o>=e.width)return[0,0];if(i<0||i>=e.height)return[0,0];const s=t-o,a=r-i,l=o,c=i,f=o<e.width-1?o+1:o,h=i<e.height-1?i+1:i,u=n[2*(c*e.width+l)],p=n[2*(c*e.width+f)],m=n[2*(h*e.width+l)],x=n[2*(h*e.width+f)],d=n[2*(c*e.width+l)+1],g=n[2*(c*e.width+f)+1];return[(u*(1-a)+m*a)*(1-s)+(p*(1-a)+x*a)*s,(d*(1-a)+n[2*(h*e.width+l)+1]*a)*(1-s)+(g*(1-a)+n[2*(h*e.width+f)+1]*a)*s]}:(t,r)=>{const o=Math.round(t),i=Math.round(r);return o<0||o>=e.width||i<0||i>=e.height?[0,0]:[n[2*(i*e.width+o)+0],n[2*(i*e.width+o)+1]]}}(t,e),i=performance.now(),l=p(t,o,e.width,e.height),c=performance.now(),h=function(t,e){const n=new a.Z,r=t.reduce(((t,e)=>t+e.length),0),o=new Float32Array(4*r),i=new Array(t.length);let s=0,l=0;for(const e of t){const t=s;for(const t of e)o[4*s+0]=t.x,o[4*s+1]=t.y,o[4*s+2]=t.t,o[4*s+3]=t.speed,s++;i[l++]={startVertex:t,numberOfVertices:e.length,totalTime:e[e.length-1].t,timeSeed:n.getFloat()}}return{lineVertices:o,lineDescriptors:i}}(l),u=performance.now(),m=function(t,e=10){const{lineVertices:n,lineDescriptors:r}=t;let o=0,i=0;for(const t of r)o+=2*t.numberOfVertices,i+=6*(t.numberOfVertices-1);const s=new Float32Array(9*o),a=new Uint32Array(i);let l=0,c=0;function f(){a[c++]=l-2,a[c++]=l,a[c++]=l-1,a[c++]=l,a[c++]=l+1,a[c++]=l-1}function h(t,e,n,r,o,i,a,c){const f=9*l;let h=0;s[f+h++]=t,s[f+h++]=e,s[f+h++]=1,s[f+h++]=n,s[f+h++]=i,s[f+h++]=a,s[f+h++]=r/2,s[f+h++]=o/2,s[f+h++]=c,l++,s[f+h++]=t,s[f+h++]=e,s[f+h++]=-1,s[f+h++]=n,s[f+h++]=i,s[f+h++]=a,s[f+h++]=-r/2,s[f+h++]=-o/2,s[f+h++]=c,l++}for(const t of r){const{totalTime:r,timeSeed:o}=t;let i=null,s=null,a=null,l=null,c=null,u=null;for(let p=0;p<t.numberOfVertices;p++){const m=n[4*(t.startVertex+p)+0],x=n[4*(t.startVertex+p)+1],d=n[4*(t.startVertex+p)+2],g=n[4*(t.startVertex+p)+3];let y=null,w=null,M=null,k=null;if(p>0){y=m-i,w=x-s;const t=Math.sqrt(y*y+w*w);if(y/=t,w/=t,p>1){let t=y+c,n=w+u;const r=Math.sqrt(t*t+n*n);t/=r,n/=r;const o=Math.min(1/(t*y+n*w),e);t*=o,n*=o,M=-n,k=t}else M=-w,k=y;null!==M&&null!==k&&(h(i,s,a,M,k,r,o,g),f())}i=m,s=x,a=d,c=y,u=w,l=g}h(i,s,a,-u,c,r,o,l)}return{vertexData:s,indexData:a}}(h),x=performance.now();if(t.profile){const t={"_createFlowFieldFromData()":Math.round(i-r),"_getStreamlines()":Math.round(c-i),"createAnimatedLinesData()":Math.round(u-c),"createLinesMesh()":Math.round(x-u),"Total elapsed time":Math.round(x-r)};f.info("createStreamlinesMesh profile",t)}return await Promise.resolve(),(0,s.k_)(n),m}function u(t,e,n,r,o,i,s,a,l){const c=[];let f=n,h=r,u=0,[p,m]=e(f,h);p*=t.velocityScale,m*=t.velocityScale;const x=Math.sqrt(p*p+m*m);let d,g;c.push({x:f,y:h,t:u,speed:x});for(let n=0;n<t.verticesPerLine;n++){let[n,r]=e(f,h);n*=t.velocityScale,r*=t.velocityScale;const p=Math.sqrt(n*n+r*r);if(p<t.minSpeedThreshold)return c;const m=n/p,x=r/p;if(f+=m*t.segmentLength,h+=x*t.segmentLength,u+=t.segmentLength/p,Math.acos(m*d+x*g)>t.maxTurnAngle)return c;if(t.mergeLines){const t=Math.round(f*l),e=Math.round(h*l);if(t<0||t>s-1||e<0||e>a-1)return c;const n=i[e*s+t];if(-1!==n&&n!==o)return c;i[e*s+t]=o}c.push({x:f,y:h,t:u,speed:p}),d=m,g=x}return c}function p(t,e,n,r){const o=[],i=new a.Z,s=1/Math.max(t.lineCollisionWidth,1),l=Math.round(n*s),c=Math.round(r*s),f=new Int32Array(l*c);for(let t=0;t<f.length;t++)f[t]=-1;const h=[];for(let e=0;e<r;e+=t.lineSpacing)for(let r=0;r<n;r+=t.lineSpacing)h.push({x:r,y:e,sort:i.getFloat()});h.sort(((t,e)=>t.sort-e.sort));for(const{x:n,y:r}of h)if(i.getFloat()<t.density){const i=u(t,e,n,r,o.length,f,l,c,s);if(i.length<2)continue;o.push(i)}return o}function m(t,e){const n=e.pixels,{width:r,height:i}=e,s=new Float32Array(r*i*2);if("vector-uv"===t)for(let t=0;t<r*i;t++)s[2*t+0]=n[0][t],s[2*t+1]=-n[1][t];else if("vector-magdir"===t)for(let t=0;t<r*i;t++){const e=n[0][t],r=(0,o.Vl)(n[1][t]),i=Math.cos(r-Math.PI/2),a=Math.sin(r-Math.PI/2);s[2*t+0]=i*e,s[2*t+1]=a*e}return{data:s,width:r,height:i}}async function x(t,e,n,r,o,i){const s=(0,l.C5)(e.spatialReference);if(!s)return d(t,e,n,r,o,i);const[a,f]=s.valid,h=f-a,u=Math.ceil(e.width/h),p=e.width/u,m=Math.round(n/u);let x=e.xmin;const g=[];for(let n=0;n<u;n++){const n=new c.Z({xmin:x,xmax:x+p,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference});g.push(d(t,n,m,r,o,i)),x+=p}const y=await Promise.all(g),w={data:new Float32Array(n*r*2),width:n,height:r};let M=0;for(const t of y){for(let e=0;e<t.height;e++)for(let r=0;r<t.width;r++)M+r>=n||(w.data[2*(e*n+M+r)+0]=t.data[2*(e*t.width+r)+0],w.data[2*(e*n+M+r)+1]=t.data[2*(e*t.width+r)+1]);M+=t.width}return w}async function d(t,e,n,r,o,s){const a={requestProjectedLocalDirections:!0,signal:s};if((0,i.pC)(o)&&(a.timeExtent=o),"imagery"===t.type){await t.load({signal:s});const o=t.rasterInfo.dataType,l=await t.fetchImage(e,n,r,a);return!l||(0,i.Wi)(l.pixelData)||(0,i.Wi)(l.pixelData.pixelBlock)?{data:new Float32Array(n*r*2),width:n,height:r}:m(o,l.pixelData.pixelBlock)}await t.load({signal:s});const l=t.rasterInfo.dataType,c=await t.fetchPixels(e,n,r,a);return!c||(0,i.Wi)(c.pixelBlock)?{data:new Float32Array(n*r*2),width:n,height:r}:m(l,c.pixelBlock)}}}]);