"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4165],{1154:(e,t,i)=>{i.d(t,{D:()=>D,b:()=>L});var r=i(39060),o=i(56031),a=i(12130),n=i(11546),s=i(59121),l=i(47413),c=i(62907),d=i(78467),u=i(18219),h=i(80184),m=i(53574),p=i(4944),f=i(37229),v=i(45281),g=i(22445),x=i(27464),T=i(68145),_=i(12951),b=i(44138),A=i(10790),S=i(11053),C=i(69202),O=i(89799),M=i(68264),E=i(23969),y=i(46918),w=i(23447),R=i(90720),P=i(45616),I=i(84439),N=i(78166);function L(e){const t=new I.kG,i=t.vertex.code,L=t.fragment.code;t.include(w.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const D=e.hasModelTransformation;return D&&t.vertex.uniforms.add("model","mat4"),t.include(u.f),t.varyings.add("vpos","vec3"),t.include(E.kl,e),t.include(c.fQ,e),t.include(v.LC,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||(t.include(d.O,e),t.include(l.w,{linearDepth:!1,hasModelTransformation:D}),e.normalType===d.h.Attribute&&e.offsetBackfaces&&t.include(a.w),t.include(T.Q,e),t.include(f.B,e),e.instancedColor&&t.attributes.add(N.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(m.D,e),t.include(o.q,e),t.include(h.R,e),t.include(p.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),i.add(P.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.H.float(y.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.h.Attribute?P.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${D?"model,":""} vpos);
          ${e.normalType===d.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===n.H.Alpha&&(t.include(s.p2,e),t.include(y.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(x.S),t.include(A.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(R.y),L.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(s.p2,e),t.include(b.X,e),t.include(_.K,e),t.include(y.sj,e),e.receiveShadows&&t.include(M.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(x.S),t.include(A.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(O.jV,e),t.include(C.T,e),t.fragment.include(R.y),t.include(S.k,e),L.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.h.ScreenDerivative?P.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===O.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===r.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P.H`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===O.f7.Normal||e.pbrMode===O.f7.Schematic?e.viewingMode===r.JY.Global?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===O.f7.Normal||e.pbrMode===O.f7.Schematic?P.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(g.s,e),t}const D=Object.freeze({__proto__:null,build:L})},84974:(e,t,i)=>{i.d(t,{R:()=>P,b:()=>R});var r=i(39060),o=i(56031),a=i(12130),n=i(11546),s=i(59121),l=i(47413),c=i(62907),d=i(78467),u=i(18219),h=i(80184),m=i(53574),p=i(4944),f=i(45281),v=i(22445),g=i(27464),x=i(12951),T=i(44138),_=i(10790),b=i(69202),A=i(89799),S=i(68264),C=i(23969),O=i(46918),M=i(90720),E=i(45616),y=i(84439),w=i(78166);function R(e){const t=new y.kG,i=t.vertex.code,R=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(u.f),t.varyings.add("vpos","vec3"),t.include(C.kl,e),t.include(c.fQ,e),t.include(f.LC,e),e.output!==n.H.Color&&e.output!==n.H.Alpha||(t.include(d.O,e),t.include(l.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(a.w),e.instancedColor&&t.attributes.add(w.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(m.D,e),t.include(o.q,e),t.include(h.R,e),t.include(p.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),i.add(E.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${E.H.float(O.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?E.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===n.H.Alpha&&(t.include(s.p2,e),t.include(O.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(g.S),t.include(_.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(M.y),R.add(E.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?E.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?E.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?E.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===n.H.Color&&(t.include(s.p2,e),t.include(T.X,e),t.include(x.K,e),t.include(O.sj,e),e.receiveShadows&&t.include(S.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(g.S),t.include(_.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(A.jV,e),t.include(b.T,e),t.fragment.include(M.y),R.add(E.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?E.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?E.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:E.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===A.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===r.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?E.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:E.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${E.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===A.f7.Normal||e.pbrMode===A.f7.Schematic?e.viewingMode===r.JY.Global?E.H`vec3 normalGround = normalize(vpos + localOrigin);`:E.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:E.H``}
        ${e.pbrMode===A.f7.Normal||e.pbrMode===A.f7.Schematic?E.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(v.s,e),t}const P=Object.freeze({__proto__:null,build:R})},35701:(e,t,i)=>{function r(){return new Float32Array(3)}function o(e,t,i){const r=new Float32Array(3);return r[0]=e,r[1]=t,r[2]=i,r}function a(){return r()}function n(){return o(1,1,1)}function s(){return o(1,0,0)}function l(){return o(0,1,0)}function c(){return o(0,0,1)}i.d(t,{c:()=>r,f:()=>o});const d=a(),u=n(),h=s(),m=l(),p=c();Object.freeze({__proto__:null,create:r,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:o,createView:function(e,t){return new Float32Array(e,t,3)},zeros:a,ones:n,unitX:s,unitY:l,unitZ:c,ZEROS:d,ONES:u,UNIT_X:h,UNIT_Y:m,UNIT_Z:p})},16192:(e,t,i)=>{function r(e){return e=e||globalThis.location.hostname,c.some((t=>{var i;return null!=(null==(i=e)?void 0:i.match(t))}))}function o(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(a)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}i.d(t,{XO:()=>r,pJ:()=>o});const a=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,n,/^jsapps.esri.com$/,s,l]},50603:(e,t,i)=>{i.d(t,{t:()=>o});var r=i(57603);async function o(e,t){const{data:i}=await(0,r.default)(e,{responseType:"image",...t});return i}},14165:(e,t,i)=>{i.r(t),i.d(t,{fetch:()=>si,gltfToEngineResources:()=>ci,parseUrl:()=>li});var r=i(16192),o=i(43388),a=i(40341),n=i(47950),s=i(87059),l=i(67829),c=i(55545),d=i(86591),u=i(16862),h=i(57070),m=i(68945),p=i(19540),f=i(45352),v=i(45280),g=i(67082),x=i(17185),T=i(57603),_=i(913),b=i(76877),A=i(20337),S=i(19955),C=i(38192),O=i(50603),M=i(87043),E=i(36159),y=i(94934);class w{constructor(e,t,i,r){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=i,this.position=r,this.center=(0,d.c)(),(0,y.hu)(e.length>=1),(0,y.hu)(i.length%this._numIndexPerPrimitive==0),(0,y.hu)(i.length>=e.length*this._numIndexPerPrimitive),(0,y.hu)(3===r.size||4===r.size);const{data:o,size:a}=r,n=e.length;let s=a*i[this._numIndexPerPrimitive*e[0]];R.clear(),R.push(s),this.bbMin=(0,d.f)(o[s],o[s+1],o[s+2]),this.bbMax=(0,d.a)(this.bbMin);for(let t=0;t<n;++t){const r=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){s=a*i[r+e],R.push(s);let t=o[s];this.bbMin[0]=Math.min(t,this.bbMin[0]),this.bbMax[0]=Math.max(t,this.bbMax[0]),t=o[s+1],this.bbMin[1]=Math.min(t,this.bbMin[1]),this.bbMax[1]=Math.max(t,this.bbMax[1]),t=o[s+2],this.bbMin[2]=Math.min(t,this.bbMin[2]),this.bbMax[2]=Math.max(t,this.bbMax[2])}}(0,c.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let e=0;e<R.length;++e){s=R.getItemAt(e);const t=o[s]-this.center[0],i=o[s+1]-this.center[1],r=o[s+2]-this.center[2],a=t*t+i*i+r*r;if(a<=l)continue;const n=Math.sqrt(a),c=.5*(n-this.radius);this.radius=this.radius+c,l=this.radius*this.radius;const d=c/n;this.center[0]+=t*d,this.center[1]+=i*d,this.center[2]+=r*d}R.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c.h)(this.bbMin,this.bbMax)>1){const e=(0,c.e)((0,d.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,i=new Uint8Array(t),r=new Array(8);for(let e=0;e<8;++e)r[e]=0;const{data:o,size:a}=this.position;for(let n=0;n<t;++n){let t=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[n];let l=a*this.indices[s],c=o[l],d=o[l+1],u=o[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=a*this.indices[s+e];const t=o[l],i=o[l+1],r=o[l+2];t<c&&(c=t),i<d&&(d=i),r<u&&(u=r)}c<e[0]&&(t|=1),d<e[1]&&(t|=2),u<e[2]&&(t|=4),i[n]=t,++r[t]}let n=0;for(let e=0;e<8;++e)r[e]>0&&++n;if(n<2)return;const s=new Array(8);for(let e=0;e<8;++e)s[e]=r[e]>0?new Uint32Array(r[e]):void 0;for(let e=0;e<8;++e)r[e]=0;for(let e=0;e<t;++e){const t=i[e];s[t][r[t]++]=this.primitiveIndices[e]}this._children=new Array(8);for(let e=0;e<8;++e)void 0!==s[e]&&(this._children[e]=new w(s[e],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){R.prune()}}const R=new E.Z({deallocator:null});var P,I,N=i(91844);class L{constructor(){this.id=(0,N.D)()}unload(){}}(I=P||(P={}))[I.Layer=0]="Layer",I[I.Object=1]="Object",I[I.Geometry=2]="Geometry",I[I.Material=3]="Material",I[I.Texture=4]="Texture",I[I.COUNT=5]="COUNT";var D=i(24345),H=i(78166);class F extends L{constructor(e,t=[],i=M.MX.Triangle,r=-1){super(),this._primitiveType=i,this.edgeIndicesLength=r,this.type=P.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[t,i]of e)i&&this._vertexAttributes.set(t,{...i});if(null==t||0===t.length){const e=function(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}(this._vertexAttributes),t=(0,D.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const e of this._vertexAttributes.keys())this._indices.set(e,t)}else for(const[e,i]of t)i&&(this._indices.set(e,z(i)),e===H.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(e).length:this.edgeIndicesLength))}cloneShallow(){const e=new F([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:i}=e;return this._vertexAttributes.forEach(((e,i)=>{t.set(i,e)})),this._indices.forEach(((e,t)=>{i.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,o.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===M.MX.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(H.T.POSITION),i=this.vertexAttributes.get(H.T.POSITION);return(0,D.cM)(i,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(H.T.POSITION),i=this.vertexAttributes.get(H.T.POSITION);return(0,D.NO)(i,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(H.T.POSITION);if(0===e.length)return null;const t=this.primitiveType===M.MX.Triangle?3:1;(0,y.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const i=(0,D.p)(e.length/t),r=this.vertexAttributes.get(H.T.POSITION);return new w(i,t,e,r)}}function z(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var B=i(79546),U=i(79001),G=i(19776),V=i(71919),W=i(2364),k=i(16875),q=i(22818);let $;var j;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(j||(j={}));var X=i(62146),J=i(16820),K=i(7057);let Y=null,Z=null;async function Q(){return(0,o.Wi)(Z)&&(Z=function(){if((0,o.Wi)($)){const e=e=>(0,q.V)(`esri/libs/basisu/${e}`);$=i.e(4983).then(i.bind(i,84983)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return $}(),Y=await Z),Z}function ee(e,t,i,r,o){const a=(0,K.RG)(t?X.q_.COMPRESSED_RGBA8_ETC2_EAC:X.q_.COMPRESSED_RGB8_ETC2),n=o&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(i*r*a*n)}function te(e){return e.getNumImages()>=1&&!e.isUASTC()}function ie(e){return e.getFaces()>=1&&e.isETC1S()}function re(e,t,i,r,o,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?r?[j.ETC2_RGBA,X.q_.COMPRESSED_RGBA8_ETC2_EAC]:[j.ETC1_RGB,X.q_.COMPRESSED_RGB8_ETC2]:c?r?[j.BC3_RGBA,X.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[j.BC1_RGB,X.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[j.RGBA32,X.VI.RGBA],h=t.hasMipmap?i:Math.min(1,i),m=[];for(let e=0;e<h;e++)m.push(new Uint8Array(n(e,d))),s(e,d,m[e]);const p=m.length>1,f=p?X.cw.LINEAR_MIPMAP_LINEAR:X.cw.LINEAR,v={...t,samplingMode:f,hasMipmap:p,internalFormat:u,width:o,height:a};return new J.x(e,v,{type:"compressed",levels:m})}const oe=A.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function ae(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const ne=ae("DXT1"),se=ae("DXT3"),le=ae("DXT5");const ce=new Map([[H.T.POSITION,0],[H.T.NORMAL,1],[H.T.UV0,2],[H.T.COLOR,3],[H.T.SIZE,4],[H.T.TANGENT,4],[H.T.AUXPOS1,5],[H.T.SYMBOLCOLOR,5],[H.T.AUXPOS2,6],[H.T.FEATUREATTRIBUTE,6],[H.T.INSTANCEFEATUREATTRIBUTE,6],[H.T.INSTANCECOLOR,7],[H.T.MODEL,8],[H.T.MODELNORMAL,12],[H.T.MODELORIGINHI,11],[H.T.MODELORIGINLO,15]]);var de=i(55879);new de.G(H.T.POSITION,3,X.g.FLOAT,0,12),new de.G(H.T.POSITION,3,X.g.FLOAT,0,20),new de.G(H.T.UV0,2,X.g.FLOAT,12,20),new de.G(H.T.POSITION,3,X.g.FLOAT,0,32),new de.G(H.T.NORMAL,3,X.g.FLOAT,12,32),new de.G(H.T.UV0,2,X.g.FLOAT,24,32),new de.G(H.T.POSITION,3,X.g.FLOAT,0,16),new de.G(H.T.COLOR,4,X.g.UNSIGNED_BYTE,12,16);const ue=[new de.G(H.T.POSITION,2,X.g.FLOAT,0,8)],he=[new de.G(H.T.POSITION,2,X.g.FLOAT,0,16),new de.G(H.T.UV0,2,X.g.FLOAT,8,16)];var me,pe,fe=i(85596),ve=i(65585),ge=i(79830),xe=i(88384);class Te extends L{constructor(e,t){super(),this.data=e,this.type=P.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new U.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:X.e8.REPEAT,t:X.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||M.CE.STRETCH,this.estimatedTexMemRequired=Te._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;(0,o.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){(0,W.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){(0,W.HK)(e.src)||(0,W.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,o.Wi)(e))return 0;if((0,V.eP)(e)||(0,V.lq)(e))return t.encoding===Te.KTX2_ENCODING?function(e,t){if((0,o.Wi)(Y))return e.byteLength;const i=new Y.KTX2File(new Uint8Array(e)),r=ie(i)?ee(i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),t):0;return i.close(),i.delete(),r}(e,t.mipmap):t.encoding===Te.BASIS_ENCODING?function(e,t){if((0,o.Wi)(Y))return e.byteLength;const i=new Y.BasisFile(new Uint8Array(e)),r=te(i)?ee(i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),t):0;return i.close(),i.delete(),r}(e,t.mipmap):e.byteLength;const{width:i,height:r}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Te._getDataDimensions(e):t;return(t.mipmap?4/3:1)*i*r*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var t;return{target:X.No.TEXTURE_2D,pixelFormat:X.VI.RGBA,dataType:X.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?X.cw.LINEAR_MIPMAP_LINEAR:X.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if((0,o.pC)(this._glTexture))return this._glTexture;if((0,o.pC)(this._loadingPromise))return this._loadingPromise;const i=this.data;return(0,o.Wi)(i)?(this._glTexture=new J.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof i?this._loadFromURL(e,t,i):i instanceof Image?this._loadFromImageElement(e,t,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,t):((0,V.eP)(i)||(0,V.lq)(i))&&this.params.encoding===Te.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,i)):((0,V.eP)(i)||(0,V.lq)(i))&&this.params.encoding===Te.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,i)):((0,V.eP)(i)||(0,V.lq)(i))&&this.params.encoding===Te.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,i)):(0,V.lq)(i)?this._loadFromPixelData(e,i):(0,V.eP)(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,i){if(!(this.data instanceof HTMLVideoElement)||(0,o.Wi)(this._glTexture))return i;if(this.data.readyState<me.HAVE_CURRENT_DATA||i===this.data.currentTime)return i;if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:i,vao:r,sourceTexture:o}=this._powerOfTwoStretchInfo;o.setData(this.data),this._drawStretchedTexture(e,t,i,r,o,this._glTexture)}else{const{width:e,height:t}=this.data,{width:i,height:r}=this._glTexture.descriptor;e!==i||t!==r?this._glTexture.updateData(0,0,0,Math.min(e,i),Math.min(t,r),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=function(e,t,i){const{textureData:r,internalFormat:o,width:a,height:n}=function(e,t){const i=new Int32Array(e,0,31);if(542327876!==i[0])return oe.error("Invalid magic number in DDS header"),null;if(!(4&i[20]))return oe.error("Unsupported format, must contain a FourCC code"),null;const r=i[21];let o,a;switch(r){case ne:o=8,a=X.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case se:o=16,a=X.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case le:o=16,a=X.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return oe.error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(r)),null}let n=1,s=i[4],l=i[3];0==(3&s)&&0==(3&l)||(oe.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;131072&i[2]&&!1!==t&&(n=Math.max(1,i[7])),1===n||(0,G.wt)(s)&&(0,G.wt)(l)||(oe.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let m=i[1]+4;const p=[];for(let t=0;t<n;++t)h=(s+3>>2)*(l+3>>2)*o,u=new Uint8Array(e,m,h),p.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:c,height:d}}(i,t.hasMipmap);return t.samplingMode=r.levels.length>1?X.cw.LINEAR_MIPMAP_LINEAR:X.cw.LINEAR,t.hasMipmap=r.levels.length>1,t.internalFormat=o,t.width=a,t.height=n,new J.x(e,t,r)}(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,i){(0,o.Wi)(Y)&&(Y=await Q());const r=new Y.KTX2File(new Uint8Array(i));if(!ie(r))return null;r.startTranscoding();const a=re(e,t,r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),((e,t)=>r.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,i)=>r.transcodeImage(i,e,0,0,t,0,-1,-1)));return r.close(),r.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,i){(0,o.Wi)(Y)&&(Y=await Q());const r=new Y.BasisFile(new Uint8Array(i));if(!te(r))return null;r.startTranscoding();const a=re(e,t,r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),((e,t)=>r.getImageTranscodedSizeInBytes(0,e,t)),((e,t,i)=>r.transcodeImage(i,0,e,t,0,0)));return r.close(),r.delete(),a}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,y.hu)(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=1===this.params.components?X.VI.LUMINANCE:3===this.params.components?X.VI.RGB:X.VI.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new J.x(e,i,t),this._glTexture}_loadFromURL(e,t,i){return this._loadAsync((async r=>{const o=await(0,O.t)(i,{signal:r});return(0,S.k_)(r),this._loadFromImage(e,o,t)}))}_loadFromImageElement(e,t,i){return i.complete?this._loadFromImage(e,i,t):this._loadAsync((async r=>{const o=await(0,k.f)(i,i.src,!1,r);return(0,S.k_)(r),this._loadFromImage(e,o,t)}))}_loadFromVideoElement(e,t,i){return i.readyState>=me.HAVE_CURRENT_DATA?this._loadFromImage(e,i,t):this._loadFromVideoElementAsync(e,t,i)}_loadFromVideoElementAsync(e,t,i){return this._loadAsync((r=>new Promise(((a,n)=>{const s=()=>{i.removeEventListener("loadeddata",l),i.removeEventListener("error",c),(0,o.hw)(d)},l=()=>{i.readyState>=me.HAVE_CURRENT_DATA&&(s(),a(this._loadFromImage(e,i,t)))},c=e=>{s(),n(e||new b.Z("Failed to load video"))};i.addEventListener("loadeddata",l),i.addEventListener("error",c);const d=(0,S.fu)(r,(()=>c((0,S.zE)())))}))))}_loadFromImage(e,t,i){const r=Te._getDataDimensions(t);this.params.width=r.width,this.params.height=r.height;const o=this._createDescriptor(e);return o.pixelFormat=3===this.params.components?X.VI.RGB:X.VI.RGBA,!this._requiresPowerOfTwo(e,o)||(0,G.wt)(r.width)&&(0,G.wt)(r.height)?(o.width=r.width,o.height=r.height,this._glTexture=new J.x(e,o,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,r,o,i),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const i=e(t.signal);this._loadingPromise=i;const r=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(r,r),i}_requiresPowerOfTwo(e,t){const i=X.e8.CLAMP_TO_EDGE,r="number"==typeof t.wrapMode?t.wrapMode===i:t.wrapMode.s===i&&t.wrapMode.t===i;return!(0,xe.Z)(e.gl)&&(t.hasMipmap||!r)}_makePowerOfTwoTexture(e,t,i,r,o){const{width:a,height:n}=i,s=(0,G.Sf)(a),l=(0,G.Sf)(n);let c;switch(r.width=s,r.height=l,this.params.powerOfTwoResizeMode){case M.CE.PAD:r.textureCoordinateScaleFactor=[a/s,n/l],c=new J.x(e,r),c.updateData(0,0,0,a,n,t);break;case M.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,r,o());break;default:(0,B.Bg)(this.params.powerOfTwoResizeMode)}return r.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,i,r){const o=new J.x(e,i),a=new ge.X(e,{colorTarget:X.Lm.TEXTURE,depthStencilTarget:X.OU.NONE},o),n=new J.x(e,{target:X.No.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:X.Br.UNSIGNED_BYTE,wrapMode:X.e8.CLAMP_TO_EDGE,samplingMode:X.cw.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},t),s=function(e,t=ue,i=ce,r=-1,o=1){let a=null;return a=t===he?new Float32Array([r,r,0,0,o,r,1,0,r,o,0,1,o,o,1,1]):new Float32Array([r,r,o,r,r,o,o,o]),new ve.U(e,i,{geometry:t},{geometry:fe.f.createVertex(e,X.l1.STATIC_DRAW,a)})}(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,r,a,s,n,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:n,framebuffer:a}:(s.dispose(!0),n.dispose(),a.detachColorTexture(),a.dispose()),e.bindFramebuffer(l),o}_drawStretchedTexture(e,t,i,r,o,a){e.bindFramebuffer(i);const n=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const s=e.useTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture(o,"tex"),e.bindVAO(r),e.drawArrays(X.MX.TRIANGLE_STRIP,0,(0,K._V)(r,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height)}unload(){if((0,o.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:i}=this._powerOfTwoStretchInfo;t.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,o.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,o.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}Te.DDS_ENCODING="image/vnd-ms.dds",Te.KTX2_ENCODING="image/ktx2",Te.BASIS_ENCODING="image/x.basis",(pe=me||(me={}))[pe.HAVE_NOTHING=0]="HAVE_NOTHING",pe[pe.HAVE_METADATA=1]="HAVE_METADATA",pe[pe.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",pe[pe.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",pe[pe.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";var _e,be=i(39060),Ae=i(86363),Se=i(11546),Ce=i(11053),Oe=i(46918),Me=i(77009);class Ee extends L{constructor(e,t){super(),this.type=P.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=ce,this._parameters=(0,Me.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(0,Me.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,o.pC)(this.repository)&&this.repository.materialChanged(this)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(_e||(_e={}));const ye={renderOccluded:_e.Occlude};var we,Re,Pe=i(17844),Ie=i(91450),Ne=i(61009),Le=i(2150),De=i(57250),He=i(35701),Fe=i(45494),ze=(i(32780),i(99491));(Re=we||(we={}))[Re.X=0]="X",Re[Re.Y=1]="Y",Re[Re.Z=2]="Z",i(89847);var Be=i(90594),Ue=i(19228);new Be.x((function(){return{origin:null,direction:null}})),(0,d.c)(),(0,d.c)();const Ge=A.Z.getLogger("esri.geometry.support.sphere");function Ve(){return(0,Fe.c)()}function We(e,t=Ve()){return(0,ze.c)(t,e)}function ke(e){return Array.isArray(e)?e[3]:e}function qe(e){return Array.isArray(e)?e:et}function $e(e,t,i){if((0,o.Wi)(t))return!1;const{origin:r,direction:a}=t,n=je;n[0]=r[0]-e[0],n[1]=r[1]-e[1],n[2]=r[2]-e[2];const s=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],l=2*(a[0]*n[0]+a[1]*n[1]+a[2]*n[2]),c=l*l-4*s*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-e[3]*e[3]);if(c<0)return!1;const d=Math.sqrt(c);let u=(-l-d)/(2*s);const h=(-l+d)/(2*s);return(u<0||h<u&&h>0)&&(u=h),!(u<0||(i&&(i[0]=r[0]+a[0]*u,i[1]=r[1]+a[1]*u,i[2]=r[2]+a[2]*u),0))}const je=(0,d.c)();function Xe(e,t,i){const r=Ue.WM.get(),o=Ue.MP.get();(0,c.c)(r,t.origin,t.direction);const a=ke(e);(0,c.c)(i,r,t.origin),(0,c.a)(i,i,1/(0,c.l)(i)*a);const n=Ke(e,t.origin),l=function(e,t){const i=(0,c.d)(e,t)/((0,c.l)(e)*(0,c.l)(t));return-(0,G.ZF)(i)}(t.origin,i);return(0,s.d)(o,l+n,r),(0,c.m)(i,i,o),i}function Je(e,t,i){const r=(0,c.f)(Ue.WM.get(),t,qe(e)),o=(0,c.a)(Ue.WM.get(),r,e[3]/(0,c.l)(r));return(0,c.b)(i,o,qe(e))}function Ke(e,t){const i=(0,c.f)(Ue.WM.get(),t,qe(e)),r=(0,c.l)(i),o=ke(e),a=o+Math.abs(o-r);return(0,G.ZF)(o/a)}const Ye=(0,d.c)();function Ze(e,t,i,r){const o=(0,c.f)(Ye,t,qe(e));switch(i){case we.X:{const e=(0,G.jE)(o,Ye)[2];return(0,c.s)(r,-Math.sin(e),Math.cos(e),0)}case we.Y:{const e=(0,G.jE)(o,Ye),t=e[1],i=e[2],a=Math.sin(t);return(0,c.s)(r,-a*Math.cos(i),-a*Math.sin(i),Math.cos(t))}case we.Z:return(0,c.n)(r,o);default:return}}function Qe(e,t){const i=(0,c.f)(tt,t,qe(e));return(0,c.l)(i)-e[3]}const et=(0,d.c)(),tt=(0,d.c)();Object.freeze({__proto__:null,create:Ve,copy:We,fromCenterAndRadius:function(e,t){return(0,Fe.f)(e[0],e[1],e[2],t)},wrap:function(e){return e},clear:function(e){e[0]=e[1]=e[2]=e[3]=0},fromRadius:function(e){return e},getRadius:ke,getCenter:qe,fromValues:function(e,t,i,r){return(0,Fe.f)(e,t,i,r)},elevate:function(e,t,i){return e!==i&&(0,c.g)(i,e),i[3]=e[3]+t,i},setExtent:function(e,t,i){return Ge.error("sphere.setExtent is not yet supported"),e===i?i:We(e,i)},intersectRay:$e,intersectsRay:function(e,t){return $e(e,t,null)},intersectRayClosestSilhouette:function(e,t,i){if($e(e,t,i))return i;const r=Xe(e,t,Ue.WM.get());return(0,c.b)(i,t.origin,(0,c.a)(Ue.WM.get(),t.direction,(0,c.i)(t.origin,r)/(0,c.l)(t.direction))),i},closestPointOnSilhouette:Xe,closestPoint:function(e,t,i){return $e(e,t,i)?i:(function(e,t,i){const r=(0,c.d)(e.direction,(0,c.f)(i,t,e.origin));(0,c.b)(i,e.origin,(0,c.a)(i,e.direction,r))}(t,qe(e),i),Je(e,i,i))},projectPoint:Je,distanceToSilhouette:function(e,t){const i=(0,c.f)(Ue.WM.get(),t,qe(e)),r=(0,c.p)(i),o=e[3]*e[3];return Math.sqrt(Math.abs(r-o))},angleToSilhouette:Ke,axisAt:Ze,altitudeAt:Qe,setAltitudeAt:function(e,t,i,r){const o=Qe(e,t),a=Ze(e,t,we.Z,tt),n=(0,c.a)(tt,a,i-o);return(0,c.b)(r,t,n)}});const it=new class{constructor(e=0){this.offset=e,this.sphere=Ve(),this.tmpVertex=(0,d.c)()}applyToVertex(e,t,i){const r=this.objectTransform.transform;let o=r[0]*e+r[4]*t+r[8]*i+r[12],a=r[1]*e+r[5]*t+r[9]*i+r[13],n=r[2]*e+r[6]*t+r[10]*i+r[14];const s=this.offset/Math.sqrt(o*o+a*a+n*n);o+=o*s,a+=a*s,n+=n*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*o+l[4]*a+l[8]*n+l[12],this.tmpVertex[1]=l[1]*o+l[5]*a+l[9]*n+l[13],this.tmpVertex[2]=l[2]*o+l[6]*a+l[10]*n+l[14],this.tmpVertex}applyToMinMax(e,t){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,d.c)(),this.mbs=(0,Fe.c)(),this.obb={center:(0,d.c)(),halfSize:(0,He.c)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,i){const r=e,o=t,a=i+this.componentLocalOriginLength,n=this.offset/Math.sqrt(r*r+o*o+a*a);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+o*n,this.tmpVertex[2]=i+a*n,this.tmpVertex}applyToAabb(e){const t=e[0],i=e[1],r=e[2]+this.componentLocalOriginLength,o=e[3],a=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+i*i+r*r);e[0]+=t*s,e[1]+=i*s,e[2]+=r*s;const l=this.offset/Math.sqrt(o*o+a*a+n*n);return e[3]+=o*l,e[4]+=a*l,e[5]+=n*l,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/t;return this.mbs[0]=e[0]+e[0]*i,this.mbs[1]=e[1]+e[1]*i,this.mbs[2]=e[2]+e[2]*i,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*i,this.obb.center[1]=t[1]+t[1]*i,this.obb.center[2]=t[2]+t[2]*i,(0,c.q)(this.obb.halfSize,e.halfSize,e.quaternion),(0,c.b)(this.obb.halfSize,this.obb.halfSize,e.center);const r=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*r,this.obb.halfSize[1]+=this.obb.halfSize[1]*r,this.obb.halfSize[2]+=this.obb.halfSize[2]*r,(0,c.f)(this.obb.halfSize,this.obb.halfSize,e.center),(0,Le.c)(rt,e.quaternion),(0,c.q)(this.obb.halfSize,this.obb.halfSize,rt),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}},new class{constructor(e=0){this.offset=e,this.tmpVertex=(0,d.c)()}applyToVertex(e,t,i){const r=e+this.localOrigin[0],o=t+this.localOrigin[1],a=i+this.localOrigin[2],n=this.offset/Math.sqrt(r*r+o*o+a*a);return this.tmpVertex[0]=e+r*n,this.tmpVertex[1]=t+o*n,this.tmpVertex[2]=i+a*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],i=e[1]+this.localOrigin[1],r=e[2]+this.localOrigin[2],o=e[3]+this.localOrigin[0],a=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+i*i+r*r);e[0]+=t*s,e[1]+=i*s,e[2]+=r*s;const l=this.offset/Math.sqrt(o*o+a*a+n*n);return e[3]+=o*l,e[4]+=a*l,e[5]+=n*l,e}};const rt=(0,De.a)();function ot(e,t,i,r){const o=i.typedBuffer,a=i.typedBufferStride,n=e.length;r*=a;for(let i=0;i<n;++i){const n=2*e[i];o[r]=t[n],o[r+1]=t[n+1],r+=a}}function at(e,t,i,r,o){const a=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,null==o||1===o)for(let i=0;i<s;++i){const o=3*e[i];a[r]=t[o],a[r+1]=t[o+1],a[r+2]=t[o+2],r+=n}else for(let i=0;i<s;++i){const s=3*e[i];for(let e=0;e<o;++e)a[r]=t[s],a[r+1]=t[s+1],a[r+2]=t[s+2],r+=n}}function nt(e,t,i,r,o,a=1){if(!i)return void at(e,t,r,o,a);const n=r.typedBuffer,s=r.typedBufferStride,l=e.length,c=i[0],d=i[1],u=i[2],h=i[4],m=i[5],p=i[6],f=i[8],v=i[9],g=i[10],x=i[12],T=i[13],_=i[14];if(o*=s,1===a)for(let i=0;i<l;++i){const r=3*e[i],a=t[r],l=t[r+1],b=t[r+2];n[o]=c*a+h*l+f*b+x,n[o+1]=d*a+m*l+v*b+T,n[o+2]=u*a+p*l+g*b+_,o+=s}else for(let i=0;i<l;++i){const r=3*e[i],l=t[r],b=t[r+1],A=t[r+2],S=c*l+h*b+f*A+x,C=d*l+m*b+v*A+T,O=u*l+p*b+g*A+_;for(let e=0;e<a;++e)n[o]=S,n[o+1]=C,n[o+2]=O,o+=s}}function st(e,t,i,r,o,a=1){if(!i)return void at(e,t,r,o,a);const n=i,l=r.typedBuffer,c=r.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],p=n[4],f=n[5],v=n[6],g=n[8],x=n[9],T=n[10],_=!(0,s.p)(n),b=1e-6,A=1-b;if(o*=c,1===a)for(let i=0;i<d;++i){const r=3*e[i],a=t[r],n=t[r+1],s=t[r+2];let d=u*a+p*n+g*s,S=h*a+f*n+x*s,C=m*a+v*n+T*s;if(_){const e=d*d+S*S+C*C;if(e<A&&e>b){const t=1/Math.sqrt(e);d*=t,S*=t,C*=t}}l[o+0]=d,l[o+1]=S,l[o+2]=C,o+=c}else for(let i=0;i<d;++i){const r=3*e[i],n=t[r],s=t[r+1],d=t[r+2];let S=u*n+p*s+g*d,C=h*n+f*s+x*d,O=m*n+v*s+T*d;if(_){const e=S*S+C*C+O*O;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,O*=t}}for(let e=0;e<a;++e)l[o+0]=S,l[o+1]=C,l[o+2]=O,o+=c}}function lt(e,t,i,r,o,a=1){if(!i)return void function(e,t,i,r,o=1){const a=i.typedBuffer,n=i.typedBufferStride,s=e.length;if(r*=n,1===o)for(let i=0;i<s;++i){const o=4*e[i];a[r]=t[o],a[r+1]=t[o+1],a[r+2]=t[o+2],a[r+3]=t[o+3],r+=n}else for(let i=0;i<s;++i){const s=4*e[i];for(let e=0;e<o;++e)a[r]=t[s],a[r+1]=t[s+1],a[r+2]=t[s+2],a[r+3]=t[s+3],r+=n}}(e,t,r,o,a);const n=i,l=r.typedBuffer,c=r.typedBufferStride,d=e.length,u=n[0],h=n[1],m=n[2],p=n[4],f=n[5],v=n[6],g=n[8],x=n[9],T=n[10],_=!(0,s.p)(n),b=1e-6,A=1-b;if(o*=c,1===a)for(let i=0;i<d;++i){const r=4*e[i],a=t[r],n=t[r+1],s=t[r+2],d=t[r+3];let S=u*a+p*n+g*s,C=h*a+f*n+x*s,O=m*a+v*n+T*s;if(_){const e=S*S+C*C+O*O;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,O*=t}}l[o+0]=S,l[o+1]=C,l[o+2]=O,l[o+3]=d,o+=c}else for(let i=0;i<d;++i){const r=4*e[i],n=t[r],s=t[r+1],d=t[r+2],S=t[r+3];let C=u*n+p*s+g*d,O=h*n+f*s+x*d,M=m*n+v*s+T*d;if(_){const e=C*C+O*O+M*M;if(e<A&&e>b){const t=1/Math.sqrt(e);C*=t,O*=t,M*=t}}for(let e=0;e<a;++e)l[o+0]=C,l[o+1]=O,l[o+2]=M,l[o+3]=S,o+=c}}function ct(e,t,i,r,o,a=1){const n=r.typedBuffer,s=r.typedBufferStride,l=e.length;if(o*=s,1===a){if(4===i)for(let i=0;i<l;++i){const r=4*e[i];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===i)for(let i=0;i<l;++i){const r=3*e[i];n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}else if(4===i)for(let i=0;i<l;++i){const r=4*e[i];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=s}else if(3===i)for(let i=0;i<l;++i){const r=3*e[i];for(let e=0;e<a;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=255,o+=s}}var dt=i(23324),ut=i(59121),ht=i(62907),mt=i(78467),pt=i(53574),ft=i(45281),vt=i(26698),gt=i(10790),xt=i(89799),Tt=i(68264),_t=i(23969),bt=i(44860);const At=(0,i(45396).c)();class St{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}function Ct(e={}){return(t,i)=>{var r,o;t._parameterNames=null!=(r=t._parameterNames)?r:[],t._parameterNames.push(i);const a=t._parameterNames.length-1,n=e.count||2,s=Math.ceil(Math.log2(n)),l=null!=(o=t._parameterBits)?o:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const d=l[c],u=(1<<s)-1<<d;l[c]+=s,Object.defineProperty(t,i,{get(){return this[a]},set(e){if(this[a]!==e&&(this[a]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+e<<d&u,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+i+" must be boolean or number, got "+typeof e}})}}var Ot=i(29570);class Mt{constructor(e,t,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new E.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generateSource("vertex"),t.generateSource("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=(0,Ot.hZ)()?t.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2f(e,t,i){this._glProgram.setUniform2f(e,t,i)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3f(e,t,i,r){this._glProgram.setUniform3f(e,t,i,r)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4f(e,t,i,r,o){this._glProgram.setUniform4f(e,t,i,r,o)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,o.Wi)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let i=this._textures.get(t);return null==i?(i=this._allocTextureUnit(e),this._textures.set(t,i)):i.texture=e,this._context.useProgram(this),this.setUniform1i(t,i.unit),this._context.bindTexture(e,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,o.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}X.wb.LESS,X.wb.ALWAYS;const Et={mask:255},yt={function:{func:X.wb.ALWAYS,ref:M.hU.OutlineVisualElementMask,mask:M.hU.OutlineVisualElementMask},operation:{fail:X.xS.KEEP,zFail:X.xS.KEEP,zPass:X.xS.ZERO}},wt={function:{func:X.wb.ALWAYS,ref:M.hU.OutlineVisualElementMask,mask:M.hU.OutlineVisualElementMask},operation:{fail:X.xS.KEEP,zFail:X.xS.KEEP,zPass:X.xS.REPLACE}};X.wb.EQUAL,M.hU.OutlineVisualElementMask,M.hU.OutlineVisualElementMask,X.xS.KEEP,X.xS.KEEP,X.xS.KEEP,X.wb.NOTEQUAL,M.hU.OutlineVisualElementMask,M.hU.OutlineVisualElementMask,X.xS.KEEP,X.xS.KEEP,X.xS.KEEP;var Rt=i(1154),Pt=i(83612);const It=A.Z.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class Nt extends class{constructor(e,t,i){this.release=i,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,o.O3)(this._program),this._pipeline=this._config=null}reload(e){(0,o.O3)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,i){e.setPipelineState(this.getPipelineState(t,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return X.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}}{initializeProgram(e){const t=Nt.shader.get(),i=this.configuration,r=t.build({oitEnabled:i.transparencyPassType===M.Am.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?i.isSchematic?xt.f7.Schematic:xt.f7.Normal:xt.f7.Disabled,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,hasModelTransformation:i.hasModelTransformation,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?mt.h.ScreenDerivative:mt.h.Attribute,doubleSidedMode:i.doubleSidedMode,vertexTangents:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?pt.N.Default:pt.N.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,bt.I)(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Mt(e.rctx,r,ce)}bindPass(e,t){var i,r;!function(e,t){e.setUniformMatrix4fv("proj",t)}(this.program,t.camera.projectionMatrix);const a=this.configuration.output;this.configuration.hasModelTransformation&&((0,o.pC)(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):It.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===Se.H.Depth||t.multipassTerrainEnabled||a===Se.H.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,gt.p)(this.program,t)),a===Se.H.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Me.FZ[e.colorMixMode])),a===Se.H.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Me.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,xt.nW)(this.program,e,this.configuration.isSchematic)):a===Se.H.Highlight&&(0,vt.wW)(this.program,t),(0,_t.uj)(this.program,e),(0,ft.Mo)(this.program,e,t),(0,Me.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==M.JJ.Mask&&e.textureAlphaMode!==M.JJ.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(i=t.shadowMap)||i.bind(this.program),null==(r=t.ssaoHelper)||r.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,d.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;(function(e,t,i){(0,s.j)(At,i,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",At)})(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===Se.H.Color||this.configuration.output===Se.H.Alpha||this.configuration.output===Se.H.Depth&&this.configuration.screenSizePerspective||this.configuration.output===Se.H.Normal&&this.configuration.screenSizePerspective||this.configuration.output===Se.H.Highlight&&this.configuration.screenSizePerspective)&&function(e,t,i){e.setUniform3f("cameraPosition",i[3]-t[0],i[7]-t[1],i[11]-t[2])}(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===Se.H.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&(0,ht.d3)(this.program,t),(0,ut.Vv)(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===Se.H.Color&&(0,Tt.vL)(this.program,e,t)}_convertDepthTestFunction(e){return e===M.Gv.Lequal?X.wb.LEQUAL:X.wb.LESS}_setPipeline(e,t){const i=this.configuration,r=e===M.Am.NONE,o=e===M.Am.FrontFace;return(0,Pt.sm)({blending:i.output!==Se.H.Color&&i.output!==Se.H.Alpha||!i.transparent?null:r?Pe.wu:(0,Pe.j7)(e),culling:Lt(i)&&(0,Pt.zp)(i.cullFace),depthTest:{func:(0,Pe.Bh)(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:r||o?i.writeDepth&&Pt.LZ:null,colorWrite:Pt.BK,stencilWrite:i.sceneHasOcludees?Et:null,stencilTest:i.sceneHasOcludees?t?wt:yt:null,polygonOffset:r||o?null:(0,Pe.je)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Lt(e){return e.cullFace?e.cullFace!==M.Vr.None:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}Nt.shader=new St(Rt.D,(()=>i.e(9600).then(i.bind(i,69600))));class Dt extends class{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const i of e)t[i]=this[i];return t}}{constructor(){super(...arguments),this.output=Se.H.Color,this.alphaDiscardMode=M.JJ.Opaque,this.doubleSidedMode=Ce.q.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=M.Vr.None,this.transparencyPassType=M.Am.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=M.Gv.Less}}(0,dt._)([Ct({count:Se.H.COUNT})],Dt.prototype,"output",void 0),(0,dt._)([Ct({count:M.JJ.COUNT})],Dt.prototype,"alphaDiscardMode",void 0),(0,dt._)([Ct({count:Ce.q.COUNT})],Dt.prototype,"doubleSidedMode",void 0),(0,dt._)([Ct()],Dt.prototype,"isSchematic",void 0),(0,dt._)([Ct()],Dt.prototype,"vertexColors",void 0),(0,dt._)([Ct()],Dt.prototype,"offsetBackfaces",void 0),(0,dt._)([Ct()],Dt.prototype,"symbolColors",void 0),(0,dt._)([Ct()],Dt.prototype,"vvSize",void 0),(0,dt._)([Ct()],Dt.prototype,"vvColor",void 0),(0,dt._)([Ct()],Dt.prototype,"verticalOffset",void 0),(0,dt._)([Ct()],Dt.prototype,"receiveShadows",void 0),(0,dt._)([Ct()],Dt.prototype,"slicePlaneEnabled",void 0),(0,dt._)([Ct()],Dt.prototype,"sliceHighlightDisabled",void 0),(0,dt._)([Ct()],Dt.prototype,"receiveAmbientOcclusion",void 0),(0,dt._)([Ct()],Dt.prototype,"screenSizePerspective",void 0),(0,dt._)([Ct()],Dt.prototype,"textureAlphaPremultiplied",void 0),(0,dt._)([Ct()],Dt.prototype,"hasColorTexture",void 0),(0,dt._)([Ct()],Dt.prototype,"usePBR",void 0),(0,dt._)([Ct()],Dt.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,dt._)([Ct()],Dt.prototype,"hasEmissionTexture",void 0),(0,dt._)([Ct()],Dt.prototype,"hasOcclusionTexture",void 0),(0,dt._)([Ct()],Dt.prototype,"hasNormalTexture",void 0),(0,dt._)([Ct()],Dt.prototype,"instanced",void 0),(0,dt._)([Ct()],Dt.prototype,"instancedColor",void 0),(0,dt._)([Ct()],Dt.prototype,"instancedDoublePrecision",void 0),(0,dt._)([Ct()],Dt.prototype,"vertexTangents",void 0),(0,dt._)([Ct()],Dt.prototype,"normalsTypeDerivate",void 0),(0,dt._)([Ct()],Dt.prototype,"writeDepth",void 0),(0,dt._)([Ct()],Dt.prototype,"sceneHasOcludees",void 0),(0,dt._)([Ct()],Dt.prototype,"transparent",void 0),(0,dt._)([Ct()],Dt.prototype,"enableOffset",void 0),(0,dt._)([Ct({count:M.Vr.COUNT})],Dt.prototype,"cullFace",void 0),(0,dt._)([Ct({count:M.Am.COUNT})],Dt.prototype,"transparencyPassType",void 0),(0,dt._)([Ct()],Dt.prototype,"multipassTerrainEnabled",void 0),(0,dt._)([Ct()],Dt.prototype,"cullAboveGround",void 0),(0,dt._)([Ct()],Dt.prototype,"hasModelTransformation",void 0),(0,dt._)([Ct({count:M.Gv.COUNT})],Dt.prototype,"customDepthTest",void 0);var Ht=i(84974);class Ft extends Nt{initializeProgram(e){const t=Ft.shader.get(),i=this.configuration,r=t.build({oitEnabled:i.transparencyPassType===M.Am.Color,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,pbrMode:i.usePBR?xt.f7.Normal:xt.f7.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:mt.h.Attribute,doubleSidedMode:Ce.q.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:i.hasColorTexture?pt.N.Default:pt.N.None,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,bt.I)(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:i.multipassTerrainEnabled,cullAboveGround:i.cullAboveGround});return new Mt(e.rctx,r,ce)}}Ft.shader=new St(Ht.R,(()=>i.e(921).then(i.bind(i,60921))));class zt extends Ee{constructor(e){super(e,Ut),this.supportsEdges=!0,this.techniqueConfig=new Dt,this.vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=(0,Ae.U$)().vec3f(H.T.POSITION).vec3f(H.T.NORMAL);return e.vertexTangents&&i.vec4f(H.T.TANGENT),t&&i.vec2f(H.T.UV0),e.vertexColors&&i.vec4u8(H.T.COLOR),e.symbolColors&&i.vec4u8(H.T.SYMBOLCOLOR),i}(this.parameters),this.instanceBufferLayout=e.instanced?function(e){let t=(0,Ae.U$)();return t=e.instancedDoublePrecision?t.vec3f(H.T.MODELORIGINHI).vec3f(H.T.MODELORIGINLO).mat3f(H.T.MODEL).mat3f(H.T.MODELNORMAL):t.mat4f(H.T.MODEL).mat4f(H.T.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(H.T.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(H.T.INSTANCEFEATUREATTRIBUTE)),t}(this.parameters):null}isVisibleInPass(e){return e!==Ie.C.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Ie.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Ie.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,i=e.vertexColors,r=e.symbolColors,o=!!t&&t.indexOf("color")>-1,a=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(o||a||r)?!!n||s:i?n?l:s:o||a||r?!!n||s:n?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,o.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?M.Vr.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,o.pC)(this.parameters.modelTransformation),e!==Se.H.Color&&e!==Se.H.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=Ce.q.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Ce.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Ce.q.WindingOrder:Ce.q.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Pe.ve),this.techniqueConfig}intersect(e,t,i,r,a,n,s){if(null!==this.parameters.verticalOffset){const e=r.camera;(0,c.s)(jt,i[12],i[13],i[14]);let t=null;switch(r.viewingMode){case be.JY.Global:t=(0,c.n)(qt,jt);break;case be.JY.Local:t=(0,c.g)(qt,kt)}let o=0;if(null!==this.parameters.verticalOffset){const i=(0,c.f)(Xt,jt,e.eye),r=(0,c.l)(i),a=(0,c.a)(i,i,1/r);let n=null;this.parameters.screenSizePerspective&&(n=(0,c.d)(t,a)),o+=(0,Me.Hx)(e,r,this.parameters.verticalOffset,n,this.parameters.screenSizePerspective)}(0,c.a)(t,t,o),(0,c.t)($t,t,r.transform.inverseRotation),a=(0,c.f)(Vt,a,$t),n=(0,c.f)(Wt,n,$t)}var l;(0,Me.Bw)(e,t,r,a,n,(l=r.verticalOffset,(0,o.pC)(l)?(it.offset=l,it):null),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?Ne.r.TRANSPARENT_MATERIAL:Ne.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:Ne.r.OPAQUE_MATERIAL)||e===Ne.r.DRAPED_MATERIAL}createGLMaterial(e){return e.output===Se.H.Color||e.output===Se.H.Alpha||e.output===Se.H.Depth||e.output===Se.H.Normal||e.output===Se.H.Shadow||e.output===Se.H.Highlight?new Bt(e):null}createBufferWriter(){return new Gt(this.vertexBufferLayout,this.instanceBufferLayout)}}class Bt extends class extends class{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,i=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(i,t),this._technique),this._technique}ensureResources(e){return M.Rw.LOADED}}{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,o.RY)(this._texture),this._textureNormal=(0,o.RY)(this._textureNormal),this._textureEmissive=(0,o.RY)(this._textureEmissive),this._textureOcclusion=(0,o.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,o.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?M.Rw.LOADED:M.Rw.LOADING}updateTexture(e){((0,o.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,o.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}bindTextures(e){(0,o.pC)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),(0,o.pC)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,o.pC)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,o.pC)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,o.pC)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=(0,o.pC)(this._texture)?this._texture.glTexture:null;(0,o.pC)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,t){if((0,o.Wi)(e))return void t(null);const i=this._textureRepository.acquire(e);if((0,S.y8)(i))return++this._numLoading,void i.then((e=>{if(this._disposed)return(0,o.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(i)}}{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?Ft:Nt,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==Se.H.Color&&this._output!==Se.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const Ut={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:M.Vr.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,n.c)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:M.Gv.Less,textureAlphaMode:M.JJ.Blend,textureAlphaCutoff:Oe.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...ye};class Gt{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(H.T.POSITION).length}write(e,t,i,r){!function(e,t,i,r,o,a){for(const n of t.fieldNames){const t=e.vertexAttributes.get(n),s=e.indices.get(n);if(t&&s)switch(n){case H.T.POSITION:{(0,y.hu)(3===t.size);const e=o.getField(n,h.ct);e&&nt(s,t.data,i,e,a);break}case H.T.NORMAL:{(0,y.hu)(3===t.size);const e=o.getField(n,h.ct);e&&st(s,t.data,r,e,a);break}case H.T.UV0:{(0,y.hu)(2===t.size);const e=o.getField(n,h.Eu);e&&ot(s,t.data,e,a);break}case H.T.COLOR:{(0,y.hu)(3===t.size||4===t.size);const e=o.getField(n,h.mc);e&&ct(s,t.data,t.size,e,a);break}case H.T.SYMBOLCOLOR:{(0,y.hu)(3===t.size||4===t.size);const e=o.getField(n,h.mc);e&&ct(s,t.data,t.size,e,a);break}case H.T.TANGENT:{(0,y.hu)(4===t.size);const e=o.getField(n,h.ek);e&&lt(s,t.data,r,e,a);break}}}}(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,r)}}const Vt=(0,d.c)(),Wt=(0,d.c)(),kt=(0,d.f)(0,0,1),qt=(0,d.c)(),$t=(0,d.c)(),jt=(0,d.c)(),Xt=(0,d.c)(),Jt=A.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function Kt(e){throw new b.Z("",`Request for object resource failed: ${e}`)}function Yt(e){const t=e.params,i=t.topology;let r=!0;switch(t.vertexAttributes||(Jt.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const i in t.vertexAttributes){const t=e[i];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Jt.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Jt.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(Jt.warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else Jt.warn("Indexed geometries must specify faces"),r=!1;break}default:Jt.warn(`Unsupported topology '${i}'`),r=!1}e.params.material||(Jt.warn("Geometry requires material"),r=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(Jt.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Zt(e){const t=(0,u.cS)();return e.forEach((e=>{const i=e.boundingInfo;(0,o.pC)(i)&&((0,u.pp)(t,i.getBBMin()),(0,u.pp)(t,i.getBBMax()))})),t}async function Qt(e,t){const i=[];for(const r in e){const a=e[r],n=a.images[0].data;if(!n){Jt.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+n,l="/textureDefinitions/"+r,c="rgba"===a.channels?a.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:X.e8.REPEAT,t:X.e8.REPEAT},preMultiplyAlpha:ei(c)!==M.JJ.Opaque},u=(0,o.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,O.t)(s,t);i.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const r=await Promise.all(i),a={};for(const e of r)a[e.refId]=e;return a}function ei(e){switch(e){case"mask":return M.JJ.Mask;case"maskAndTransparency":return M.JJ.MaskBlend;case"none":return M.JJ.Opaque;default:return M.JJ.Blend}}function ti(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ii=new C.G(1,2,"wosr");var ri=i(42997),oi=i(68364),ai=i(94234),ni=i(92730);async function si(e,t){const i=li((0,r.pJ)(e));if("wosr"===i.fileType){const e=await(t.cache?t.cache.loadWOSR(i.url,t):async function(e,t){const i=await async function(e,t){const i=(0,o.pC)(t)&&t.streamDataRequester;if(i)return async function(e,t,i){const r=await(0,_.q6)(t.request(e,"json",i));if(!0===r.ok)return r.value;(0,S.r9)(r.error),Kt(r.error.details.url)}(e,i,t);const r=await(0,_.q6)((0,T.default)(e,(0,o.Wg)(t)));if(!0===r.ok)return r.value.data;(0,S.r9)(r.error),Kt(r.error)}(e,t);return{resource:i,textures:await Qt(i.textureDefinitions,t)}}(i.url,t)),r=function(e,t){const i=[],r=[],a=[],n=[],s=e.resource,l=C.G.parse(s.version||"1.0","wosr");ii.validate(l);const c=s.model.name,u=s.model.geometries,h=s.materialDefinitions,m=e.textures;let p=0;const f=new Map;for(let e=0;e<u.length;e++){const s=u[e];if(!Yt(s))continue;const l=ti(s),c=s.params.vertexAttributes,v=[];for(const e in c){const t=c[e],i=t.values;v.push([e,{data:i,size:t.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==s.params.topology){const e=s.params.faces;for(const t in e)g.push([t,new Uint32Array(e[t].values)])}const x=m&&m[l.texture];if(x&&!f.has(l.texture)){const{image:e,params:t}=x,i=new Te(e,t);n.push(i),f.set(l.texture,i)}const T=f.get(l.texture),_=T?T.id:void 0;let b=a[l.material]?a[l.material][l.texture]:null;if(!b){const e=h[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const i=x&&x.alphaChannelUsage,r=e.transparency>0||"transparency"===i||"maskAndTransparency"===i,n=x?ei(x.alphaChannelUsage):void 0,s={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:M.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,o.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),b=new zt(s),a[l.material]||(a[l.material]={}),a[l.material][l.texture]=b}r.push(b);const A=new F(v,g);p+=g.position?g.position.length:0,i.push(A)}return{name:c,stageResources:{textures:n,materials:r,geometries:i},pivotOffset:s.model.pivotOffset,boundingBox:Zt(i),numberOfVertices:p,lodThreshold:null}}(e,t);return{lods:[r],referenceBoundingBox:r.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(i.url,t,t.usePBR):(0,g.z)(new v.C(t.streamDataRequester),i.url,t,t.usePBR)),n=(0,o.U2)(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&(0,o.pC)(n)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let i=0;i<e.model.lods.length;++i){const r=e.model.lods[i];e.customMeta.esriTreeRendering=!0;for(const a of r.parts){const r=a.attributes.normal;if((0,o.Wi)(r))return;const n=a.attributes.position,u=n.count,m=(0,d.c)(),p=(0,d.c)(),v=(0,d.c)(),g=(0,f.gS)(h.mc,u),x=(0,f.gS)(h.ct,u),T=(0,s.a)((0,l.c)(),a.transform);for(let o=0;o<u;o++){n.getVec(o,p),r.getVec(o,m),(0,c.m)(p,p,a.transform),(0,c.f)(v,p,t.center),(0,c.E)(v,v,t.radius);const s=v[2],l=(0,c.l)(v),d=Math.min(.45+.55*l*l,1);(0,c.E)(v,v,t.radius),(0,c.m)(v,v,T),(0,c.n)(v,v),i+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.e)(v,v,m,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(o,v),g.set(o,0,255*d),g.set(o,1,255*d),g.set(o,2,255*d),g.set(o,3,255)}a.attributes.normal=x,a.attributes.color=g}}}(a,n);const u=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},m={...t.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=i.specifiedLodIndex){const e=ci(a,u,m,i.specifiedLodIndex);let t=e[0].boundingBox;return 0!==i.specifiedLodIndex&&(t=ci(a,u,m,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const p=ci(a,u,m);return{lods:p,referenceBoundingBox:p[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function li(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ci(e,t,i,r){const s=e.model,l=(0,n.c)(),c=new Array,d=new Map,v=new Map;return s.lods.forEach(((e,n)=>{if(void 0!==r&&n!==r)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,o.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,u.cS)()};c.push(g),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),n=s.materials.get(e.material),c=(0,o.pC)(e.attributes.texCoord0),T=(0,o.pC)(e.attributes.normal),_=function(e){switch(e){case"BLEND":return M.JJ.Blend;case"MASK":return M.JJ.Mask;case"OPAQUE":case null:case void 0:return M.JJ.Opaque}}(n.alphaMode);if(!d.has(r)){if(c){if((0,o.pC)(n.textureColor)&&!v.has(n.textureColor)){const e=s.textures.get(n.textureColor),t={...e.parameters,preMultiplyAlpha:_!==M.JJ.Opaque};v.set(n.textureColor,new Te(e.data,t))}if((0,o.pC)(n.textureNormal)&&!v.has(n.textureNormal)){const e=s.textures.get(n.textureNormal);v.set(n.textureNormal,new Te(e.data,e.parameters))}if((0,o.pC)(n.textureOcclusion)&&!v.has(n.textureOcclusion)){const e=s.textures.get(n.textureOcclusion);v.set(n.textureOcclusion,new Te(e.data,e.parameters))}if((0,o.pC)(n.textureEmissive)&&!v.has(n.textureEmissive)){const e=s.textures.get(n.textureEmissive);v.set(n.textureEmissive,new Te(e.data,e.parameters))}if((0,o.pC)(n.textureMetallicRoughness)&&!v.has(n.textureMetallicRoughness)){const e=s.textures.get(n.textureMetallicRoughness);v.set(n.textureMetallicRoughness,new Te(e.data,e.parameters))}}const a=n.color[0]**(1/ri.K),l=n.color[1]**(1/ri.K),u=n.color[2]**(1/ri.K),h=n.emissiveFactor[0]**(1/ri.K),m=n.emissiveFactor[1]**(1/ri.K),p=n.emissiveFactor[2]**(1/ri.K),f=(0,o.pC)(n.textureColor)&&c?v.get(n.textureColor):null;d.set(r,new zt({...t,transparent:_===M.JJ.Blend,customDepthTest:M.Gv.Lequal,textureAlphaMode:_,textureAlphaCutoff:n.alphaCutoff,diffuse:[a,l,u],ambient:[a,l,u],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?M.Vr.None:M.Vr.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:T?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:(0,o.pC)(f)?f.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:(0,o.pC)(n.textureNormal)&&c?v.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:(0,o.pC)(f)&&!!f.params.preMultiplyAlpha,occlusionTextureId:(0,o.pC)(n.textureOcclusion)&&c?v.get(n.textureOcclusion).id:void 0,emissiveTextureId:(0,o.pC)(n.textureEmissive)&&c?v.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,o.pC)(n.textureMetallicRoughness)&&c?v.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[h,m,p],mrrFactors:[n.metallicFactor,n.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...i}))}const b=function(e,t){switch(t){case X.MX.TRIANGLES:return(0,x.nh)(e);case X.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case X.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),A=e.attributes.position.count,S=(0,f.gS)(h.ct,A);(0,m.t)(S,e.attributes.position,e.transform);const C=[[H.T.POSITION,{data:S.typedBuffer,size:S.elementCount,exclusive:!0}]],O=[[H.T.POSITION,b]];if((0,o.pC)(e.attributes.normal)){const t=(0,f.gS)(h.ct,A);(0,a.a)(l,e.transform),(0,m.a)(t,e.attributes.normal,l),C.push([H.T.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([H.T.NORMAL,b])}if((0,o.pC)(e.attributes.tangent)){const t=(0,f.gS)(h.ek,A);(0,a.a)(l,e.transform),(0,p.t)(t,e.attributes.tangent,l),C.push([H.T.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([H.T.TANGENT,b])}if((0,o.pC)(e.attributes.texCoord0)){const t=(0,f.gS)(h.Eu,A);(0,oi.n)(t,e.attributes.texCoord0),C.push([H.T.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([H.T.UV0,b])}if((0,o.pC)(e.attributes.color)){const t=(0,f.gS)(h.mc,A);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,ai.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,p.s)(t,e.attributes.color,1/256);else{(0,ai.f)(t,255,255,255,255);const i=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,m.s)(i,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,ni.c)(i,e.attributes.color):e.attributes.color instanceof h.mw&&(0,m.s)(i,e.attributes.color,1/256)}C.push([H.T.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),O.push([H.T.COLOR,b])}const E=new F(C,O);g.stageResources.geometries.push(E),g.stageResources.materials.push(d.get(r)),c&&((0,o.pC)(n.textureColor)&&g.stageResources.textures.push(v.get(n.textureColor)),(0,o.pC)(n.textureNormal)&&g.stageResources.textures.push(v.get(n.textureNormal)),(0,o.pC)(n.textureOcclusion)&&g.stageResources.textures.push(v.get(n.textureOcclusion)),(0,o.pC)(n.textureEmissive)&&g.stageResources.textures.push(v.get(n.textureEmissive)),(0,o.pC)(n.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(n.textureMetallicRoughness))),g.numberOfVertices+=A;const y=E.boundingInfo;(0,o.pC)(y)&&((0,u.pp)(g.boundingBox,y.getBBMin()),(0,u.pp)(g.boundingBox,y.getBBMax()))}))})),c}},71594:(e,t,i)=>{var r,o;i.d(t,{a9:()=>r}),i(19776),(o=r||(r={}))[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"},86363:(e,t,i)=>{i.d(t,{U$:()=>s});var r=i(57070),o=i(34714);class a{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const i=e.fields.get(t);this[t]=new i.constructor(this.buffer,i.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new a(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,r){const o=this.stride;if(o%4==0){const a=new Uint32Array(e.buffer,t*o,r*o/4);new Uint32Array(this.buffer,i*o,r*o/4).set(a)}else{const a=new Uint8Array(e.buffer,t*o,r*o);new Uint8Array(this.buffer,i*o,r*o).set(a)}}}class n{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,r.Eu,t),this}vec2f64(e,t){return this._appendField(e,r.q6,t),this}vec3f(e,t){return this._appendField(e,r.ct,t),this}vec3f64(e,t){return this._appendField(e,r.fP,t),this}vec4f(e,t){return this._appendField(e,r.ek,t),this}vec4f64(e,t){return this._appendField(e,r.Cd,t),this}mat3f(e,t){return this._appendField(e,r.gK,t),this}mat3f64(e,t){return this._appendField(e,r.ey,t),this}mat4f(e,t){return this._appendField(e,r.bj,t),this}mat4f64(e,t){return this._appendField(e,r.O1,t),this}vec4u8(e,t){return this._appendField(e,r.mc,t),this}f32(e,t){return this._appendField(e,r.ly,t),this}f64(e,t){return this._appendField(e,r.oS,t),this}u8(e,t){return this._appendField(e,r.D_,t),this}u16(e,t){return this._appendField(e,r.av,t),this}i8(e,t){return this._appendField(e,r.Hz,t),this}vec2i8(e,t){return this._appendField(e,r.Vs,t),this}vec2i16(e,t){return this._appendField(e,r.or,t),this}vec2u8(e,t){return this._appendField(e,r.xA,t),this}vec4u16(e,t){return this._appendField(e,r.v6,t),this}u32(e,t){return this._appendField(e,r.Nu,t),this}_appendField(e,t,i){const r=t.ElementCount*(0,o.n1)(t.ElementType),a=this.stride;this.fields.set(e,{size:r,constructor:t,offset:a,optional:i}),this.stride+=r,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new a(this,e)}createView(e){return new a(this,e)}clone(){const e=new n;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new n}},56031:(e,t,i)=>{i.d(t,{q:()=>a});var r=i(11546),o=i(45616);function a(e,t){t.output===r.H.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(o.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===r.H.Depth||t.output===r.H.Shadow?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("nearFar","vec2"),e.vertex.code.add(o.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(o.H`void forwardLinearDepth() {}`)}},12130:(e,t,i)=>{i.d(t,{w:()=>o});var r=i(45616);function o(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},11546:(e,t,i)=>{var r;i.d(t,{H:()=>r}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(r||(r={}))},59121:(e,t,i)=>{i.d(t,{Vv:()=>d,p2:()=>c});var r=i(43388),o=i(87059),a=i(67829),n=i(55545),s=i(86591),l=i(45616);function c(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,r=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.sliceHighlightDisabled?l.H`#define highlightSlice(_color_, _pos_) (_color_)`:l.H`
        ${r}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(o)}else{const i=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}function d(e,t,i,a){if(t.slicePlaneEnabled)if((0,r.pC)(i)){if((0,n.g)(u,i.origin),(0,n.g)(h,i.basis1),(0,n.g)(m,i.basis2),(0,r.pC)(a)&&(0,r.pC)(a.origin)&&(0,n.f)(u,i.origin,a.origin),(0,r.pC)(a)&&(0,r.pC)(a.view)){const e=(0,r.pC)(a.origin)?(0,o.j)(p,a.view,a.origin):a.view;(0,n.b)(h,h,u),(0,n.b)(m,m,u),(0,n.m)(u,u,e),(0,n.m)(h,h,e),(0,n.m)(m,m,e),(0,n.f)(h,h,u),(0,n.f)(m,m,u)}e.setUniform3fv("slicePlaneOrigin",u),e.setUniform3fv("slicePlaneBasis1",h),e.setUniform3fv("slicePlaneBasis2",m)}else e.setUniform3fv("slicePlaneBasis1",s.Z),e.setUniform3fv("slicePlaneBasis2",s.Z),e.setUniform3fv("slicePlaneOrigin",s.Z)}const u=(0,s.c)(),h=(0,s.c)(),m=(0,s.c)(),p=(0,a.c)()},47413:(e,t,i)=>{i.d(t,{w:()=>o});var r=i(45616);function o(e,t){const i={hasModelTransformation:!1,...t};if(i.hasModelTransformation)return i.linearDepth?void e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);i.linearDepth?e.vertex.code.add(r.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(r.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},62907:(e,t,i)=>{i.d(t,{d3:()=>d,fQ:()=>c});var r=i(86591),o=i(11546),a=i(44860),n=i(45616),s=i(78166),l=i(80111);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(s.T.MODELORIGINHI,"vec3"),e.attributes.add(s.T.MODELORIGINLO,"vec3"),e.attributes.add(s.T.MODEL,"mat3"),e.attributes.add(s.T.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(a.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const i=[n.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n.H``];e.vertex.code.add(i[0]),e.vertex.code.add(i[1]),e.vertex.code.add(i[2]),t.output===o.H.Normal&&e.vertex.code.add(i[3]),e.vertex.code.add(i[4])}function d(e,t){(0,l.po)(t,u,h,3),e.setUniform3fv("viewOriginHi",u),e.setUniform3fv("viewOriginLo",h)}const u=(0,r.c)(),h=(0,r.c)()},78467:(e,t,i)=>{i.d(t,{O:()=>l,h:()=>a});var r=i(45616);function o(e){const t=r.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var a,n,s=i(78166);function l(e,t){t.normalType===a.Attribute&&(e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(r.H`vec3 normalModel() {
return normal;
}`)),t.normalType===a.CompressedAttribute&&(e.include(o),e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===a.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(r.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}(n=a||(a={}))[n.Attribute=0]="Attribute",n[n.CompressedAttribute=1]="CompressedAttribute",n[n.Ground=2]="Ground",n[n.ScreenDerivative=3]="ScreenDerivative",n[n.COUNT=4]="COUNT"},18219:(e,t,i)=>{i.d(t,{f:()=>a});var r=i(45616),o=i(78166);function a(e){e.attributes.add(o.T.POSITION,"vec3"),e.vertex.code.add(r.H`vec3 positionModel() { return position; }`)}},80184:(e,t,i)=>{i.d(t,{R:()=>s});var r=i(71594),o=i(45616);function a(e){e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=i(78166);function s(e,t){t.symbolColor?(e.include(a),e.attributes.add(n.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},53574:(e,t,i)=>{i.d(t,{D:()=>s,N:()=>r});var r,o,a=i(45616),n=i(78166);function s(e,t){t.attributeTextureCoordinates===r.Default&&(e.attributes.add(n.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),t.attributeTextureCoordinates===r.Atlas&&(e.attributes.add(n.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(n.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(a.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),t.attributeTextureCoordinates===r.None&&e.vertex.code.add(a.H`void forwardTextureCoordinates() {}`)}(o=r||(r={}))[o.None=0]="None",o[o.Default=1]="Default",o[o.Atlas=2]="Atlas",o[o.COUNT=3]="COUNT"},4944:(e,t,i)=>{i.d(t,{c:()=>a});var r=i(45616),o=i(78166);function a(e,t){t.attributeColor?(e.attributes.add(o.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(r.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(r.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(r.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},37229:(e,t,i)=>{i.d(t,{B:()=>c});var r=i(39060),o=i(78467),a=(i(47950),i(67829),i(86591),i(18219)),n=i(44860),s=i(45616);function l(e,t){e.include(a.f),e.vertex.include(n.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(s.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(s.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function c(e,t){t.normalType===o.h.Attribute||t.normalType===o.h.CompressedAttribute?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===o.h.Ground?(e.include(l,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===r.JY.Global?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(s.H`void forwardNormal() {}`)}},36153:(e,t,i)=>{i.d(t,{i:()=>n});var r=i(53574),o=i(45616);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function n(e,t){e.include(r.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.attributeTextureCoordinates===r.N.Default&&e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),t.attributeTextureCoordinates===r.N.Atlas&&(e.include(a),e.fragment.code.add(o.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},45281:(e,t,i)=>{i.d(t,{LC:()=>n,Mo:()=>s});var r=i(39060),o=i(45616);function a(e){e.vertex.code.add(o.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(o.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(o.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(o.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(o.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function n(e,t){const i=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(a),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),i.add(o.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${t.viewingMode===r.JY.Global?o.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:o.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?o.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):i.add(o.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function s(e,t,i){if(!t.verticalOffset)return;const r=function(e,t,i,r=l){return r.screenLength=e.screenLength,r.perDistance=Math.tan(.5*t)/(.5*i),r.minWorldLength=e.minWorldLength,r.maxWorldLength=e.maxWorldLength,r}(t.verticalOffset,i.camera.fovY,i.camera.fullViewport[3]),o=i.camera.pixelRatio||1;e.setUniform4f("verticalOffset",r.screenLength*o,r.perDistance,r.minWorldLength,r.maxWorldLength)}i(77009);const l={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},22445:(e,t,i)=>{i.d(t,{s:()=>f});var r=i(11546),o=i(59121),a=i(47413),n=i(78467),s=i(53574),l=i(37229),c=i(81800),d=i(45616);function u(e,t){e.fragment.include(c.n),t.output===r.H.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===r.H.Depth&&e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var h=i(26698),m=i(23969),p=i(46918);function f(e,t){const i=e.vertex.code,c=e.fragment.code,f=t.hasModelTransformation;t.output!==r.H.Depth&&t.output!==r.H.Shadow||(e.include(a.w,{linearDepth:!0,hasModelTransformation:f}),e.include(s.D,t),e.include(m.kl,t),e.include(u,t),e.include(o.p2,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),i.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${f?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(p.sj,t),c.add(d.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===r.H.Normal&&(e.include(a.w,{linearDepth:!1,hasModelTransformation:f}),e.include(n.O,t),e.include(l.B,t),e.include(s.D,t),e.include(m.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),i.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===n.h.Attribute?d.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${f?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.p2,t),e.include(p.sj,t),c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===n.h.ScreenDerivative?d.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:d.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===r.H.Highlight&&(e.include(a.w,{linearDepth:!1,hasModelTransformation:f}),e.include(s.D,t),e.include(m.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),i.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${f?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o.p2,t),e.include(p.sj,t),e.include(h.bA),c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},26698:(e,t,i)=>{i.d(t,{bA:()=>s,wW:()=>l});var r=i(45494),o=i(45616);const a=(0,r.f)(1,1,0,1),n=(0,r.f)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",a).add("unoccludedHighlightFlag","vec4",n),e.fragment.code.add(o.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function l(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},27464:(e,t,i)=>{i.d(t,{S:()=>a});var r=i(81800),o=i(45616);function a(e){e.include(r.n),e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},68145:(e,t,i)=>{i.d(t,{Q:()=>l});var r=i(53574),o=i(36153),a=i(11053),n=i(45616),s=i(78166);function l(e,t){const i=e.fragment;t.vertexTangents?(e.attributes.add(s.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===a.q.WindingOrder?i.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),i.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.attributeTextureCoordinates!==r.N.None&&(e.include(o.i,t),i.uniforms.add("normalTexture","sampler2D"),i.uniforms.add("normalTextureSize","vec2"),i.code.add(n.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},12951:(e,t,i)=>{i.d(t,{K:()=>o});var r=i(45616);function o(e,t){const i=e.fragment;t.receiveAmbientOcclusion?(i.uniforms.add("ssaoTex","sampler2D"),i.uniforms.add("viewportPixelSz","vec4"),i.code.add(r.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):i.code.add(r.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},44138:(e,t,i)=>{i.d(t,{X:()=>h});var r=i(39060),o=i(89799),a=i(45616);function n(e,t){const i=e.fragment,r=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===r?(i.uniforms.add("lightingAmbientSH0","vec3"),i.code.add(a.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===r?(i.uniforms.add("lightingAmbientSH_R","vec4"),i.uniforms.add("lightingAmbientSH_G","vec4"),i.uniforms.add("lightingAmbientSH_B","vec4"),i.code.add(a.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===r&&(i.uniforms.add("lightingAmbientSH0","vec3"),i.uniforms.add("lightingAmbientSH_R1","vec4"),i.uniforms.add("lightingAmbientSH_G1","vec4"),i.uniforms.add("lightingAmbientSH_B1","vec4"),i.uniforms.add("lightingAmbientSH_R2","vec4"),i.uniforms.add("lightingAmbientSH_G2","vec4"),i.uniforms.add("lightingAmbientSH_B2","vec4"),i.code.add(a.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||i.code.add(a.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var s=i(12951);function l(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.uniforms.add("lightingSpecularStrength","float"),t.uniforms.add("lightingEnvironmentStrength","float"),t.code.add(a.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var c=i(69202),d=i(56222),u=i(68264);function h(e,t){const i=e.fragment;e.include(l),e.include(s.K,t),t.pbrMode!==o.f7.Disabled&&e.include(c.T,t),e.include(n,t),t.receiveShadows&&e.include(u.hX,t),i.uniforms.add("lightingGlobalFactor","float"),i.uniforms.add("ambientBoostFactor","float"),i.uniforms.add("hasFillLights","bool"),e.include(d.e),i.code.add(a.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===o.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),i.code.add(a.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===r.JY.Global?a.H`normalize(vPosWorld)`:a.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),i.code.add(a.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===o.f7.Disabled||t.pbrMode===o.f7.WaterOnIntegratedMesh?i.code.add(a.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(i.code.add(a.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(a.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),i.code.add(a.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.code.add(a.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(a.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===o.f7.Schematic?a.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:a.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},10790:(e,t,i)=>{i.d(t,{l:()=>o,p:()=>a});var r=i(45616);function o(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(r.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function a(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},11053:(e,t,i)=>{i.d(t,{k:()=>s,q:()=>r});var r,o,a=i(79546),n=i(45616);function s(e,t){const i=e.fragment;switch(i.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:i.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:i.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:i.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,a.Bg)(t.doubleSidedMode);case r.COUNT:}}(o=r||(r={}))[o.None=0]="None",o[o.View=1]="View",o[o.WindingOrder=2]="WindingOrder",o[o.COUNT=3]="COUNT"},69202:(e,t,i)=>{i.d(t,{T:()=>s});var r=i(45616);function o(e){const t=e.fragment.code;t.add(r.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var a=i(89799),n=i(56222);function s(e,t){const i=e.fragment.code;e.include(n.e),t.pbrMode===a.f7.Water||t.pbrMode===a.f7.WaterOnIntegratedMesh?(i.add(r.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),i.add(r.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),i.add(r.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),i.add(r.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),i.add(r.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==a.f7.Normal&&t.pbrMode!==a.f7.Schematic||(e.include(o),i.add(r.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),i.add(r.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),i.add(r.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),i.add(r.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),i.add(r.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),i.add(r.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},89799:(e,t,i)=>{i.d(t,{f7:()=>r,jV:()=>l,nW:()=>c});var r,o,a=i(35701),n=i(36153),s=i(45616);function l(e,t){const i=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;t.pbrMode===r.Normal&&o&&e.include(n.i,t),t.pbrMode!==r.Schematic?(t.pbrMode===r.Disabled&&i.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),t.pbrMode===r.Normal&&(i.uniforms.add("emissionFactor","vec3"),i.uniforms.add("mrrFactors","vec3"),i.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(i.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texMetallicRoughnessSize","vec2"),i.code.add(s.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(i.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texEmissionSize","vec2"),i.code.add(s.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(i.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&i.uniforms.add("texOcclusionSize","vec2"),i.code.add(s.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):i.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),i.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):i.code.add(s.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function c(e,t,i=!1){i||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}(0,a.f)(0,.6,.2),(o=r||(r={}))[o.Disabled=0]="Disabled",o[o.Normal=1]="Normal",o[o.Schematic=2]="Schematic",o[o.Water=3]="Water",o[o.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",o[o.COUNT=5]="COUNT"},56222:(e,t,i)=>{i.d(t,{e:()=>o});var r=i(45616);function o(e){e.vertex.code.add(r.H`const float PI = 3.141592653589793;`),e.fragment.code.add(r.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},68264:(e,t,i)=>{i.d(t,{hX:()=>a,vL:()=>n});var r=i(81800),o=i(45616);function a(e){e.fragment.include(r.n),e.fragment.uniforms.add("shadowMapTex","sampler2D"),e.fragment.uniforms.add("numCascades","int"),e.fragment.uniforms.add("cascadeDistances","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(o.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function n(e,t,i){t.shadowMappingEnabled&&t.shadowMap.bindView(e,i)}},23969:(e,t,i)=>{i.d(t,{kl:()=>a,uj:()=>n});var r=i(45616),o=i(78166);function a(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add(o.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(r.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(r.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?r.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(r.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(r.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?r.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(r.H`vec4 vvColor() { return vec4(1.0); }`)}function n(e,t){(function(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))})(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},46918:(e,t,i)=>{i.d(t,{F:()=>a,bf:()=>n,sj:()=>s});var r=i(45616),o=i(87043);const a=.1,n=.001;function s(e,t){const i=e.fragment;switch(t.alphaDiscardMode){case o.JJ.Blend:i.code.add(r.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${r.H.float(n)}) { discard; } }
      `);break;case o.JJ.Opaque:i.code.add(r.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case o.JJ.Mask:i.uniforms.add("textureAlphaCutoff","float"),i.code.add(r.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case o.JJ.MaskBlend:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(r.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},44860:(e,t,i)=>{i.d(t,{$:()=>a,I:()=>n});var r=i(32780),o=i(45616);function a({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function n(e){return!!(0,r.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},23447:(e,t,i)=>{i.d(t,{a:()=>n});var r=i(11546),o=i(45616),a=i(29570);function n(e,t){const i=o.H`
  /*
  *  ${t.name}
  *  ${t.output===r.H.Color?"RenderOutput: Color":t.output===r.H.Depth?"RenderOutput: Depth":t.output===r.H.Shadow?"RenderOutput: Shadow":t.output===r.H.Normal?"RenderOutput: Normal":t.output===r.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,a.CG)()&&(e.fragment.code.add(i),e.vertex.code.add(i))}},90720:(e,t,i)=>{i.d(t,{y:()=>n});var r=i(71594),o=i(45616);function a(e){e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function n(e){e.include(a),e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${o.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${o.H.int(r.a9.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${o.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},81800:(e,t,i)=>{i.d(t,{n:()=>o});var r=i(45616);function o(e){e.code.add(r.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},84439:(e,t,i)=>{i.d(t,{kG:()=>a});const r=i(20337).Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class o{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&r.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class a extends o{constructor(){super(...arguments),this.vertex=new l,this.fragment=new l,this.attributes=new c,this.varyings=new d,this.extensions=new u,this.constants=new h}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),i=this.attributes.generateSource(e),r=this.varyings.generateSource(),o="vertex"===e?this.vertex:this.fragment,a=o.uniforms.generateSource(),n=o.code.generateSource(),s="vertex"===e?p:m,l=this.constants.generateSource().concat(o.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}`}}class n{constructor(){this._entries=new Map}add(e,t,i){const r=`${e}_${t}_${i}`;return this._entries.set(r,{name:e,type:t,arraySize:i}),this}generateSource(){return Array.from(this._entries.values()).map((e=>{return`uniform ${e.type} ${e.name}${t=e.arraySize,t?`[${t}]`:""};`;var t}))}get entries(){return Array.from(this._entries.values())}}class s{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class l extends o{constructor(){super(...arguments),this.uniforms=new n,this.code=new s,this.constants=new h}get builder(){return this}}class c{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class h{constructor(){this._entries=[]}add(e,t,i){let r="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":r=h._numberToFloatStr(i);break;case"int":r=h._numberToIntStr(i);break;case"bool":r=i.toString();break;case"vec2":r=`vec2(${h._numberToFloatStr(i[0])},                            ${h._numberToFloatStr(i[1])})`;break;case"vec3":r=`vec3(${h._numberToFloatStr(i[0])},                            ${h._numberToFloatStr(i[1])},                            ${h._numberToFloatStr(i[2])})`;break;case"vec4":r=`vec4(${h._numberToFloatStr(i[0])},                            ${h._numberToFloatStr(i[1])},                            ${h._numberToFloatStr(i[2])},                            ${h._numberToFloatStr(i[3])})`;break;case"ivec2":r=`ivec2(${h._numberToIntStr(i[0])},                             ${h._numberToIntStr(i[1])})`;break;case"ivec3":r=`ivec3(${h._numberToIntStr(i[0])},                             ${h._numberToIntStr(i[1])},                             ${h._numberToIntStr(i[2])})`;break;case"ivec4":r=`ivec4(${h._numberToIntStr(i[0])},                             ${h._numberToIntStr(i[1])},                             ${h._numberToIntStr(i[2])},                             ${h._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":r=`${t}(${Array.prototype.map.call(i,(e=>h._numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${r};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",p="precision highp float;\nprecision highp sampler2D;"},45616:(e,t,i)=>{function r(e,...t){let i="";for(let r=0;r<t.length;r++)i+=e[r]+t[r];return i+=e[e.length-1],i}i.d(t,{H:()=>r}),function(e){e.int=function(e){return Math.round(e).toString()},e.float=function(e){return e.toPrecision(8)}}(r||(r={}))},17844:(e,t,i)=>{i.d(t,{Bh:()=>m,IB:()=>l,j7:()=>c,je:()=>h,ve:()=>d,wu:()=>n});var r=i(87043),o=i(62146),a=i(83612);const n=(0,a.wK)(o.zi.SRC_ALPHA,o.zi.ONE,o.zi.ONE_MINUS_SRC_ALPHA,o.zi.ONE_MINUS_SRC_ALPHA),s=(0,a.if)(o.zi.ONE,o.zi.ONE),l=(0,a.if)(o.zi.ZERO,o.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===r.Am.FrontFace?null:e===r.Am.Alpha?l:s}const d=5e5,u={factor:-1,units:-2};function h(e){return e?u:null}function m(e,t=o.wb.LESS){return e===r.Am.NONE||e===r.Am.FrontFace?t:o.wb.LEQUAL}},91450:(e,t,i)=>{var r;i.d(t,{C:()=>r}),function(e){e[e.MATERIAL=0]="MATERIAL",e[e.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",e[e.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",e[e.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",e[e.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",e[e.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",e[e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",e[e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT",e[e.MAX_PASS=8]="MAX_PASS"}(r||(r={}))},61009:(e,t,i)=>{var r;i.d(t,{r:()=>r}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_PLUGIN=3]="OPAQUE_PLUGIN",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_PLUGIN=5]="TRANSPARENT_PLUGIN",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=12]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=13]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VOXEL=22]="VOXEL",e[e.MAX_SLOTS=23]="MAX_SLOTS"}(r||(r={}))},94934:(e,t,i)=>{i.d(t,{hu:()=>o}),i(32622),i(95530),i(99491),(0,i(45494).c)();class r{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new r(t)}},78166:(e,t,i)=>{var r;i.d(t,{T:()=>r}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(r||(r={}))},87043:(e,t,i)=>{var r,o,a,n,s,l,c,d,u,h,m,p,f,v;i.d(t,{Am:()=>n,CE:()=>m,Gv:()=>o,JJ:()=>f,MX:()=>h,Rw:()=>l,Vr:()=>r,hU:()=>c}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(r||(r={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(o||(o={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(a||(a={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(l||(l={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(c||(c={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(d||(d={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(u||(u={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(h||(h={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(m||(m={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(p||(p={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(f||(f={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(v||(v={}))},77009:(e,t,i)=>{i.d(t,{bj:()=>C,FZ:()=>y,Uf:()=>O,Bw:()=>f,LO:()=>M,Hx:()=>S});var r=i(19776),o=i(43388),a=i(55545),n=i(86591),s=i(16862),l=i(87043);function c(e,t){return Math.max((0,r.t7)(e*t.scale,e,t.factor),function(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}(e,t))}i(39060),(0,r.Vl)(10),(0,r.Vl)(12),(0,r.Vl)(70),(0,r.Vl)(40);const d={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var u=i(94934),h=i(78166),m=(i(87059),i(67829));i(80111),new Float64Array(3),new Float32Array(6),(0,m.c)();const p=(0,s.Ue)();function f(e,t,i,r,a,n,s){if(!function(e){return!!(0,o.pC)(e)&&!e.visible}(t))if(e.boundingInfo){(0,u.hu)(e.primitiveType===l.MX.Triangle);const t=i.tolerance;g(e.boundingInfo,r,a,t,n,s)}else{const t=e.indices.get(h.T.POSITION),i=e.vertexAttributes.get(h.T.POSITION);T(r,a,0,t.length/3,t,i,void 0,n,s)}}const v=(0,n.c)();function g(e,t,i,r,n,l){if((0,o.Wi)(e))return;const c=function(e,t,i){return(0,a.s)(i,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,i,v);if((0,s.op)(p,e.getBBMin()),(0,s.Tn)(p,e.getBBMax()),(0,o.pC)(n)&&n.applyToAabb(p),function(e,t,i,r){return function(e,t,i,r,o){const a=(e[0]-r-t[0])*i[0],n=(e[3]+r-t[0])*i[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-r-t[1])*i[1],d=(e[4]+r-t[1])*i[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-r-t[2])*i[2],h=(e[5]+r-t[2])*i[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<1/0)}(e,t,i,r)}(p,t,c,r)){const{primitiveIndices:o,indices:a,position:s}=e,c=o?o.length:a.length/3;if(c>w){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&g(o[e],t,i,r,n,l);return}}T(t,i,0,c,a,s,o,n,l)}}const x=(0,n.c)();function T(e,t,i,r,a,n,s,l,c){if(s)return function(e,t,i,r,a,n,s,l,c){const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],p=e[2],f=t[0]-h,v=t[1]-m,g=t[2]-p;for(let e=i;e<r;++e){const t=s[e];let i=3*t,r=u*a[i++],n=d[r++],T=d[r++],_=d[r];r=u*a[i++];let b=d[r++],S=d[r++],C=d[r];r=u*a[i];let O=d[r++],M=d[r++],E=d[r];(0,o.pC)(l)&&([n,T,_]=l.applyToVertex(n,T,_,e),[b,S,C]=l.applyToVertex(b,S,C,e),[O,M,E]=l.applyToVertex(O,M,E,e));const y=b-n,w=S-T,R=C-_,P=O-n,I=M-T,N=E-_,L=v*N-I*g,D=g*P-N*f,H=f*I-P*v,F=y*L+w*D+R*H;if(Math.abs(F)<=Number.EPSILON)continue;const z=h-n,B=m-T,U=p-_,G=z*L+B*D+U*H;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const V=B*R-w*U,W=U*y-R*z,k=z*w-y*B,q=f*V+v*W+g*k;if(F>0){if(q<0||G+q>F)continue}else if(q>0||G+q<F)continue;const $=(P*V+I*W+N*k)/F;$>=0&&c($,A(y,w,R,P,I,N,x),t,!1)}}(e,t,i,r,a,n,s,l,c);const d=n.data,u=n.stride||n.size,h=e[0],m=e[1],p=e[2],f=t[0]-h,v=t[1]-m,g=t[2]-p;for(let e=i,t=3*i;e<r;++e){let i=u*a[t++],r=d[i++],n=d[i++],s=d[i];i=u*a[t++];let T=d[i++],_=d[i++],b=d[i];i=u*a[t++];let S=d[i++],C=d[i++],O=d[i];(0,o.pC)(l)&&([r,n,s]=l.applyToVertex(r,n,s,e),[T,_,b]=l.applyToVertex(T,_,b,e),[S,C,O]=l.applyToVertex(S,C,O,e));const M=T-r,E=_-n,y=b-s,w=S-r,R=C-n,P=O-s,I=v*P-R*g,N=g*w-P*f,L=f*R-w*v,D=M*I+E*N+y*L;if(Math.abs(D)<=Number.EPSILON)continue;const H=h-r,F=m-n,z=p-s,B=H*I+F*N+z*L;if(D>0){if(B<0||B>D)continue}else if(B>0||B<D)continue;const U=F*y-E*z,G=z*M-y*H,V=H*E-M*F,W=f*U+v*G+g*V;if(D>0){if(W<0||B+W>D)continue}else if(W>0||B+W<D)continue;const k=(w*U+R*G+P*V)/D;k>=0&&c(k,A(M,E,y,w,R,P,x),e,!1)}}const _=(0,n.c)(),b=(0,n.c)();function A(e,t,i,r,o,n,s){return(0,a.s)(_,e,t,i),(0,a.s)(b,r,o,n),(0,a.c)(s,_,b),(0,a.n)(s,s),s}function S(e,t,i,o,a){let n=(i.screenLength||0)*e.pixelRatio;a&&(n=function(e,t,i,r){return c(e,function(e,t,i){const r=i.parameters,o=i.paddingPixelsOverride;return d.scale=Math.min(r.divisor/(t-r.offset),1),d.factor=function(e){return Math.abs(e*e*e)}(e),d.minPixelSize=r.minPixelSize,d.paddingPixels=o,d}(t,i,r))}(n,o,t,a));const s=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,r.uZ)(s*t,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function C(e,t,i){if(!e)return;const r=e.parameters,o=e.paddingPixelsOverride;t.setUniform4f(i,r.divisor,r.offset,r.minPixelSize,o)}function O(e,t){const i=t?O(t):{};for(const t in e){let r=e[t];r&&r.forEach&&(r=E(r)),null==r&&t in i||(i[t]=r)}return i}function M(e,t){let i=!1;for(const r in t){const o=t[r];void 0!==o&&(i=!0,Array.isArray(o)?e[r]=o.slice():e[r]=o)}return i}function E(e){const t=[];return e.forEach((e=>t.push(e))),t}const y={multiply:1,ignore:2,replace:3,tint:4},w=1e3},55879:(e,t,i)=>{i.d(t,{G:()=>r});class r{constructor(e,t,i,r,o,a=!1,n=0){this.name=e,this.count=t,this.type=i,this.offset=r,this.stride=o,this.normalized=a,this.divisor=n}}},80111:(e,t,i)=>{function r(e,t,i){for(let r=0;r<i;++r)t[2*r]=e[r],t[2*r+1]=e[r]-t[2*r]}function o(e,t,i,o){for(let s=0;s<o;++s)a[0]=e[s],r(a,n,1),t[s]=n[0],i[s]=n[1]}i.d(t,{LF:()=>r,po:()=>o});const a=new Float64Array(1),n=new Float32Array(2)},83612:(e,t,i)=>{i.d(t,{BK:()=>u,LZ:()=>d,if:()=>a,jp:()=>U,sm:()=>_,wK:()=>n,zp:()=>c});var r=i(87043),o=i(62146);function a(e,t,i=o.db.ADD,r=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:i,opAlpha:i,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}function n(e,t,i,r,a=o.db.ADD,n=o.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:i,dstAlpha:r,opRgb:a,opAlpha:n,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:o.LR.BACK,mode:o.Wf.CCW},l={face:o.LR.FRONT,mode:o.Wf.CCW},c=e=>e===r.Vr.Back?s:e===r.Vr.Front?l:null,d={zNear:0,zFar:1},u={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function m(e){return O.intern(e)}function p(e){return E.intern(e)}function f(e){return w.intern(e)}function v(e){return P.intern(e)}function g(e){return N.intern(e)}function x(e){return D.intern(e)}function T(e){return F.intern(e)}function _(e){return B.intern(e)}class b{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),i=this.interns;return i.has(t)||i.set(t,this.makeRef(e)),i.get(t)}}function A(e){return"["+e.join(",")+"]"}const S=new b(C,(e=>({__tag:"Blending",...e})));function C(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const O=new b(M,(e=>({__tag:"Culling",...e})));function M(e){return e?A([e.face,e.mode]):null}const E=new b(y,(e=>({__tag:"PolygonOffset",...e})));function y(e){return e?A([e.factor,e.units]):null}const w=new b(R,(e=>({__tag:"DepthTest",...e})));function R(e){return e?A([e.func]):null}const P=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const D=new b(H,(e=>({__tag:"ColorWrite",...e})));function H(e){return e?A([e.r,e.g,e.b,e.a]):null}const F=new b(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?A([e.mask]):null}const B=new b((function(e){return e?A([C(e.blending),M(e.culling),y(e.polygonOffset),R(e.depthTest),I(e.stencilTest),L(e.depthWrite),H(e.colorWrite),z(e.stencilWrite)]):null}),(e=>({blending:h(e.blending),culling:m(e.culling),polygonOffset:p(e.polygonOffset),depthTest:f(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:T(e.stencilWrite)})));class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,i,r){return(i||e!==t)&&(r(e),this._pipelineInvalid=!0),e}}}}]);