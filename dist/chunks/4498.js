"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4498],{44498:(e,s,i)=>{i.r(s),i.d(s,{default:()=>o});var r=i(23324),t=i(43388),l=i(77030),a=(i(20337),i(76997),i(89847),i(32780),i(48973),i(56793)),n=i(16479),y=i(5608);let u=class extends y.default{initialize(){this.handles.add([(0,l.S1)(this.view,"viewpoint",(()=>this._update()))])}_injectOverrides(e){let s=super._injectOverrides(e);const i=this.view.scale,r=this.layer.sublayers.filter((e=>function(e,s){return!e.visible||0!==e.minScale&&s>e.minScale||0!==e.maxScale&&s<e.maxScale}(e,i))).map((e=>e.subtypeCode));if(!r.length)return s;s=(0,t.pC)(s)?s:(new n.Z).toJSON();const l=`NOT ${this.layer.subtypeField} IN (${r.join(",")})`;return s.where=s.where?`(${s.where}) AND (${l})`:l,s}_setLayersForFeature(e){const s=this.layer.fieldsIndex.get(this.layer.subtypeField),i=e.attributes[s.name],r=this.layer.sublayers.find((e=>e.subtypeCode===i));e.layer=r,e.sourceLayer=this.layer}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},s=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),i=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${s})`:"1=2";let r=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return r+=i,{...super._createSchemaConfig(),...e,definitionExpression:r}}};u=(0,r._)([(0,a.j)("esri.views.2d.layers.SubtypeGroupLayerView2D")],u);const o=u}}]);