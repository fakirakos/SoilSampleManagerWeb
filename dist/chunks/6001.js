"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6001],{66001:(t,e,r)=>{r.r(e),r.d(e,{default:()=>O});var o=r(23324),i=(r(15572),r(76877)),s=r(43388),n=r(2364),a=r(74791),u=(r(89847),r(32780)),l=(r(76997),r(56568)),p=r(56793),d=r(61391),c=r(68011),y=r(19955),h=r(26408),m=r(4130),f=r(3982);let g=class extends c.Z{constructor(t){super(t),this.type="csv",this.refresh=(0,y.Ds)((async t=>{await this.load();const{extent:e,timeExtent:r}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=(0,s.pC)(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null==(t=this._connection)||t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const r=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return m.default.fromJSON(r)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const r=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:r.count,extent:f.Z.fromJSON(r.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await(0,h.bA)("CSVSourceWorker",{strategy:(0,u.Z)("feature-layers-workers")?"dedicated":"local",signal:t});const{url:e,delimiter:r,fields:o,latitudeField:i,longitudeField:s,spatialReference:n,timeInfo:a}=this.loadOptions,l=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:null==o?void 0:o.map((t=>t.toJSON())),latitudeField:i,longitudeField:s,spatialReference:null==n?void 0:n.toJSON(),timeInfo:null==a?void 0:a.toJSON()}},{signal:t});this.locationInfo=l.locationInfo,this.sourceJSON=l.layerDefinition,this.delimiter=l.delimiter}};(0,o._)([(0,a.Cb)()],g.prototype,"type",void 0),(0,o._)([(0,a.Cb)()],g.prototype,"loadOptions",void 0),(0,o._)([(0,a.Cb)()],g.prototype,"customParameters",void 0),(0,o._)([(0,a.Cb)()],g.prototype,"locationInfo",void 0),(0,o._)([(0,a.Cb)()],g.prototype,"sourceJSON",void 0),(0,o._)([(0,a.Cb)()],g.prototype,"delimiter",void 0),g=(0,o._)([(0,p.j)("esri.layers.graphics.sources.CSVSource")],g);const b=g;var v=r(37562),S=r(54945),C=r(66517),w=r(49030);let _=class extends d.default{constructor(...t){super(...t),this.capabilities=(0,v.MS)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=w.Z.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){return null!=e.showLabels?e.showLabels:!!(e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=(0,n.mN)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new b({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(S.Z.from(t)||this.createQuery()))).then((t=>{if(null!=t&&t.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(S.Z.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(S.Z.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(S.Z.from(t)||this.createQuery())))}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new i.Z("CSVLayer",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return(0,s.pC)(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,o._)([(0,a.Cb)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"capabilities",void 0),(0,o._)([(0,a.Cb)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],_.prototype,"delimiter",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],_.prototype,"editingEnabled",void 0),(0,o._)([(0,a.Cb)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],_.prototype,"fields",void 0),(0,o._)([(0,a.Cb)({type:Boolean,readOnly:!0})],_.prototype,"isTable",null),(0,o._)([(0,l.r)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],_.prototype,"readWebMapLabelsVisible",null),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],_.prototype,"latitudeField",void 0),(0,o._)([(0,a.Cb)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,o._)([(0,a.Cb)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"locationType",void 0),(0,o._)([(0,a.Cb)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],_.prototype,"longitudeField",void 0),(0,o._)([(0,a.Cb)({type:["CSV"]})],_.prototype,"operationalLayerType",void 0),(0,o._)([(0,a.Cb)()],_.prototype,"outFields",void 0),(0,o._)([(0,a.Cb)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],_.prototype,"path",void 0),(0,o._)([(0,a.Cb)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],_.prototype,"portalItem",void 0),(0,o._)([(0,a.Cb)({json:{read:!1},cast:null,type:b,readOnly:!0})],_.prototype,"source",void 0),(0,o._)([(0,a.Cb)({json:{read:!1},value:"csv",readOnly:!0})],_.prototype,"type",void 0),(0,o._)([(0,a.Cb)({json:{read:C.r,write:{isRequired:!0,ignoreOrigin:!0,writer:C.w}}})],_.prototype,"url",null),_=(0,o._)([(0,p.j)("esri.layers.CSVLayer")],_);const O=_},68114:(t,e,r)=>{r.d(e,{g:()=>o});const o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},37562:(t,e,r)=>{r.d(e,{Dm:()=>p,Hq:()=>d,MS:()=>c,bU:()=>a});var o=r(32780),i=r(7175),s=r(68114),n=r(34619);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?n.I4:"esriGeometryPolyline"===t?n.ET:n.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function p(t,e){if((0,o.Z)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let r=`this.${e} = null;`;for(const e in t)r+=`this${u.test(e)?`.${e}`:`["${e}"]`} = ${JSON.stringify(t[e])};`;const o=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new o}catch(r){return()=>({[e]:null,...t})}}function d(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(t)}}]}function c(t,e){return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:s.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);