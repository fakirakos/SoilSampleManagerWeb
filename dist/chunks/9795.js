"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9795],{29795:(e,r,t)=>{t.r(r),t.d(r,{default:()=>y});var s=t(23324),o=t(76877),i=t(11023),n=t(91862),p=t(74791),u=(t(89847),t(32780),t(76997),t(56793)),l=t(23481),d=t(67843);let a=class extends((0,d.I)((0,i.R)(l.Z))){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((e,r)=>{(0,n.Os)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let t="Unsupported layer type";e&&(t+=" "+e),r(new o.Z("layer:unsupported-layer-type",t,{layerType:e}))}))})))}read(e,r){const t={resourceInfo:e};null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),super.read(t,r)}write(e){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};(0,s._)([(0,p.Cb)({readOnly:!0})],a.prototype,"resourceInfo",void 0),(0,s._)([(0,p.Cb)({type:["show","hide"]})],a.prototype,"listMode",void 0),(0,s._)([(0,p.Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],a.prototype,"type",void 0),a=(0,s._)([(0,u.j)("esri.layers.UnsupportedLayer")],a);const y=a}}]);