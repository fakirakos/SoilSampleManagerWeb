"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2318],{47802:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Q});var r=i(23324),o=i(76877),n=i(24022),s=i(43388),a=i(11023),p=i(19955),l=i(72278),c=i(74791),y=(i(89847),i(32780),i(76997),i(56568)),d=i(56793),u=i(95543),f=i(2364),h=i(76213),m=i(58742),g=i(26598);function v(e){return w[function(e){return e instanceof Blob?e.type:function(e){const t=(0,f.Ml)(e);return b[t]||S}(e.url)}(e)]||_}const w={},S="text/plain",_=w[S],b={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const e in b)w[b[e]]=e;var C=i(66517);function x(e){const t=(0,s.pC)(e)&&e.origins?e.origins:[void 0];return(i,r)=>{const o=function(e,t,i){if((0,s.pC)(e)&&"resource"===e.type)return function(e,t,i){const r=(0,m.VZ)(t,i);return{type:String,read:(e,t,i)=>{const o=(0,C.r)(e,t,i);return r.type===String?o:"function"==typeof r.type?new r.type({url:o}):void 0},write:{writer(t,o,n,a){if(!a||!a.resources)return"string"==typeof t?void(o[n]=(0,C.t)(t,a)):void(o[n]=t.write({},a));const p=function(e){return(0,s.Wi)(e)?null:"string"==typeof e?e:e.url}(t),l=p?(0,C.t)(p,{...a,verifyItemRelativeUrls:a&&a.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},C.M.NO):null,c=r.type!==String&&(!(0,u.l)(this)||a&&a.origin&&this.originIdOf(i)>(0,g.M9)(a.origin));a&&a.portalItem&&(0,s.pC)(l)&&!(0,f.YP)(l)?c?function(e,t,i,r,o,n,s,a){const p=s.portalItem.resourceFromPath(r),l=T(i,r,s);v(l)===(0,f.Ml)(p.path)?(I(e,t,p,l,s.resources.toUpdate),o[n]=r):O(e,t,i,r,o,n,s,a)}(this,i,t,l,o,n,a,e):function(e,t,i,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[i]=e}(l,o,n,a):a&&a.portalItem&&((0,s.Wi)(l)||(0,s.pC)((0,C.i)(l))||(0,f.jc)(l)||c)?O(this,i,t,l,o,n,a,e):o[n]=l}}}}(e,t,i);switch((0,s.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=C.p;return{read:e,write:t}}}}(e,i,r);for(const e of t){const t=(0,c.CJ)(i,e,r);for(const e in o)t[e]=o[e]}}}function O(e,t,r,o,n,a,p,l){const c=(0,h.D)(),y=T(r,o,p),d=(0,f.v_)((0,s.U2)(l,"prefix"),c),u=`${d}.${v(y)}`,m=p.portalItem.resourceFromPath(u);(0,f.jc)(o)&&p.resources.pendingOperations.push(async function(e){const t=(await Promise.resolve().then(i.bind(i,57603))).default,{data:r}=await t(e,{responseType:"blob"});return r}(o).then((e=>{m.path=`${d}.${v(e)}`,n[a]=m.itemRelativeUrl})).catch((()=>{}))),I(e,t,m,y,p.resources.toAdd),n[a]=m.itemRelativeUrl}function I(e,t,i,r,o){o.push({resource:i,content:r,finish:i=>{!function(e,t,i){"string"==typeof e[t]?e[t]=i.url:e[t].url=i.url}(e,t,i)}})}function T(e,t,i){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(i))],{type:"application/json"})}var M,R=i(23481),U=i(95399),j=i(19149),N=i(53542),L=i(67843),P=i(42673),J=i(47745),Z=i(42157),V=i(67313),A=i(57603),D=i(82640),z=i(37501),K=(i(15572),i(7175)),k=i(62229),F=i(81018),W=i(14290),$=i(18223);let q=M=class extends z.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,i,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,W.Up)(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new k.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const o=new $.Z;(0,W.Wt)(e,o,r.layer.spatialReference),t[i]=o.toJSON(r)}else t[i]=e.toJSON(r);delete t[i].spatialReference}clone(){return new M({geometry:(0,K.d9)(this.geometry),type:this.type})}};(0,r._)([(0,c.Cb)({type:$.Z}),x()],q.prototype,"geometry",void 0),(0,r._)([(0,F.c)(["web-scene","portal-item"],"geometry")],q.prototype,"writeGeometry",null),(0,r._)([(0,c.Cb)({type:["clip","mask","replace"],nonNullable:!0}),x()],q.prototype,"type",void 0),q=M=(0,r._)([(0,d.j)("esri.layers.support.SceneModification")],q);const E=q;var Y;let B=Y=class extends((0,z.eC)(D.Z.ofType(E))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new Y({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const i of e)this.add(E.fromJSON(i,t))}static fromJSON(e,t){const i=new Y;return i._readModifications(e,t),i}static async fromUrl(e,t,i){const r={url:(0,f.mN)(e),origin:"service"},o=await(0,A.default)(e,{responseType:"json",signal:(0,s.U2)(i,"signal")}),n=t.toJSON(),a=[];for(const e of o.data)a.push(E.fromJSON({...e,geometry:{...e.geometry,spatialReference:n}},r));return new Y({url:e,items:a})}};(0,r._)([(0,c.Cb)({type:String})],B.prototype,"url",void 0),B=Y=(0,r._)([(0,d.j)("esri.layers.support.SceneModifications")],B);const G=B;let H=class extends((0,J.Vt)((0,j.Y)((0,N.q)((0,L.I)((0,P.M)((0,a.R)((0,U.V)(R.Z)))))))){constructor(...e){super(...e),this.handles=new n.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,l.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),l.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,i){this._modificationsSource={url:(0,C.f)(e,i),context:i}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,s.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(e){(0,p.r9)(e)}if(await this._fetchService(t),(0,s.pC)(this._modificationsSource)){const t=await G.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,s.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(J.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(J.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new o.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new o.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new o.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,r._)([(0,c.Cb)({type:String,readOnly:!0})],H.prototype,"geometryType",void 0),(0,r._)([(0,c.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,r._)([(0,c.Cb)({type:["IntegratedMeshLayer"]})],H.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),(0,r._)([(0,c.Cb)({type:V.U4,readOnly:!0})],H.prototype,"nodePages",void 0),(0,r._)([(0,c.Cb)({type:[V.QI],readOnly:!0})],H.prototype,"materialDefinitions",void 0),(0,r._)([(0,c.Cb)({type:[V.Yh],readOnly:!0})],H.prototype,"textureSetDefinitions",void 0),(0,r._)([(0,c.Cb)({type:[V.H3],readOnly:!0})],H.prototype,"geometryDefinitions",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],H.prototype,"serviceUpdateTimeStamp",void 0),(0,r._)([(0,c.Cb)({type:G}),x({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],H.prototype,"modifications",void 0),(0,r._)([(0,y.r)(["web-scene","portal-item"],"modifications")],H.prototype,"readModifications",null),(0,r._)([(0,c.Cb)(Z.PV)],H.prototype,"elevationInfo",void 0),(0,r._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],H.prototype,"path",void 0),H=(0,r._)([(0,d.j)("esri.layers.IntegratedMeshLayer")],H);const Q=H}}]);