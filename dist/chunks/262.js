"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[262],{70262:(e,t,i)=>{i.r(t),i.d(t,{ElevationQuery:()=>q,GeometryDescriptor:()=>A,default:()=>q,getFinestLodIndex:()=>Z});var s=i(913),n=i(76877),o=i(43388),l=i(19955),a=i(89462),r=i(11901),c=i(74991),u=i(77401),h=i(14290),p=i(89805),m=(i(15572),i(32780),i(20337)),f=i(67775),d=i(11559);const y=m.Z.getLogger("esri.layers.support.ElevationSampler");class x{queryElevation(e){return function(e,t){const i=g(e,t.spatialReference);if(!i)return null;switch(e.type){case"point":!function(e,t,i){e.z=(0,o.Pt)(i.elevationAt(t),0)}(e,i,t);break;case"polyline":!function(e,t,i){w.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let n=0;n<e.paths.length;n++){const l=e.paths[n],a=t.paths[n];for(let e=0;e<l.length;e++){const t=l[e],n=a[e];w.x=n[0],w.y=n[1],s&&(t[3]=t[2]),t[2]=(0,o.Pt)(i.elevationAt(w),0)}}e.hasZ=!0}(e,i,t);break;case"multipoint":!function(e,t,i){w.spatialReference=t.spatialReference;const s=e.hasM&&!e.hasZ;for(let n=0;n<e.points.length;n++){const l=e.points[n],a=t.points[n];w.x=a[0],w.y=a[1],s&&(l[3]=l[2]),l[2]=(0,o.Pt)(i.elevationAt(w),0)}e.hasZ=!0}(e,i,t)}return e}(e.clone(),this)}on(){return R}projectIfRequired(e,t){return g(e,t)}}class v extends x{constructor(e,t,i){super(),this.tile=e,this.noDataValue=i,this.extent=(0,p.HH)(e.tile.extent,t.spatialReference);const s=(0,a.c9)(t.spatialReference),n=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:n,max:n}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return(0,f.aV)(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if((0,o.Wi)(t))return null;if(!this.contains(e)){const t=this.extent,i=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;return y.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${i})`),this.noDataValue}return this.tile.sample(t.x,t.y)}}class T extends x{constructor(e,t,i){let s;super(),"number"==typeof t?(this.noDataValue=t,s=null):(s=t,this.noDataValue=i),this.samplers=s?e.map((e=>new v(e,s,this.noDataValue))):e;const n=this.samplers[0];if(n){this.extent=n.extent.clone();const{min:e,max:t}=n.demResolution;this.demResolution={min:e,max:t};for(let e=1;e<this.samplers.length;e++){const t=this.samplers[e];this.extent.union(t.extent),this.demResolution.min=Math.min(this.demResolution.min,t.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,t.demResolution.max)}}else this.extent=(0,p.HH)((0,p.Ue)(),s.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return y.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),this.noDataValue}}function g(e,t){if((0,o.Wi)(e))return null;const i=e.spatialReference;if(i.equals(t))return e;const s=(0,d.iV)(e,t);return s||y.error(`Cannot project geometry spatial reference (wkid:${i.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),s}const w=new c.Z,R={remove(){}};class _{constructor(e,t=null){if(this.tile=e,(0,o.pC)(t)){const i=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}}sample(e,t){if((0,o.Wi)(this.samplerData))return;const{safeWidth:i,width:s,pixelData:n,noDataValue:l,dx:a,dy:r,y1:c,x0:u}=this.samplerData,h=E(r*(c-t),0,i),p=E(a*(e-u),0,i),m=Math.floor(h),f=Math.floor(p),d=m*s+f,y=d+s,x=n[d],v=n[y],T=n[d+1],g=n[y+1];if(x!==l&&v!==l&&T!==l&&g!==l){const e=p-f,t=x+(T-x)*e;return t+(v+(g-v)*e-t)*(h-m)}}}function E(e,t,i){return e<t?t:e>i?i:e}class q{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const s=A.fromGeometry(t);let o=!1;i&&i.returnSampleInfo||(o=!0);const l={...M,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],s,l),r=await this._queryAllContinue(e,a,l);return r.geometry=r.geometry.export(),o&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new n.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof A)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new n.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const s={...M,...i},o=new D(e,t.spatialReference,s),l=s.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(o,t,l),await this._selectTiles(o,l),await this._populateElevationTiles(o,l),this._sampleGeometryWithElevation(o),this._createQueryResult(o,l)}async createSampler(e,t,i){if(!e)throw new n.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n.Z("elevation-query:invalid-extent","Invalid or undefined extent");const s={...M,...i};return this._createSampler(e,t,s)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new n.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new n.Z("elevation-query:invalid-extent","Invalid or undefined extent");const s={...M,...i,returnSampleInfo:!0},o=await this._createSampler(e[e.length-1],t,s);return this._createSamplerAllContinue(e,t,o,s)}async _createSampler(e,t,i,s){const n=i.signal;await e.load({signal:n});const o=t.spatialReference,l=e.tileInfo.spatialReference;o.equals(l)||(await(0,h.iQ)([{source:o,dest:l}],{signal:n}),t=(0,h.iV)(t,l));const a=new C(e,t,i,s);return await this._selectTiles(a,n),await this._populateElevationTiles(a,n),new T(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,s){if(e.pop(),!e.length)return i;const n=i.samplers.map((e=>(0,p.oJ)(e.extent))),o=await this._createSampler(e[e.length-1],t,s,n);if(0===o.samplers.length)return i;const l=i.samplers.concat(o.samplers),a=new T(l,s.noDataValue);return this._createSamplerAllContinue(e,t,a,s)}async _queryAllContinue(e,t,i){const s=e.pop(),n=t.geometry.coordinates,o=[],l=[];for(let i=0;i<n.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=s):e.length&&(o.push(n[i]),l.push(i))}if(!e.length||0===o.length)return t;const a=t.geometry.clone(o),r=await this.query(e[e.length-1],a,i);return l.forEach(((e,i)=>{n[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let s;const o=e.layer.tileInfo.spatialReference;if(t instanceof A?s=await t.project(o,i):(await(0,h.iQ)([{source:t.spatialReference,dest:o}],{signal:i}),s=(0,h.iV)(t,o)),!s)throw new n.Z("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${o.wkid}'`);e.geometry=A.fromGeometry(s)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new n.Z("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if((0,o.Wi)(e.layer.fullExtent))return;const t=new _(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const s=e.x,n=e.y;(s<i.xmin||s>i.xmax||n<i.ymin||n>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/(0,a.c9)(e.spatialReference);let s=e.lods[0],n=0;for(let t=1;t<e.lods.length;t++){const o=e.lods[t];Math.abs(o.resolution-i)<Math.abs(s.resolution-i)&&(s=o,n=t)}return n}async _selectTilesFinestContiguous(e,t){const i=Z(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const s=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const o=s.tilemapCache,a=e.getTilesToFetch();try{if(o)await(0,l.Hl)(Promise.all(a.map((e=>o.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new n.Z("elevation-query:has-unavailable-tiles")}catch(s){(0,l.r9)(s),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),s={},n=e.options.cache,a=e.options.noDataValue,r=i.map((async i=>{const l=`${e.layer.uid}:${i.id}:${a}`,r=(0,o.pC)(n)?n.get(l):null,c=(0,o.pC)(r)?r:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:a,signal:t});(0,o.pC)(n)&&n.put(l,c),s[i.id]=new _(i,c)}));await(0,l.Hl)((0,l.as)(r),t),e.populateElevationTiles(s)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),o={},a=n.map((async e=>{const n={id:null,level:0,row:0,col:0,extent:(0,p.Ue)()},a=await(0,s.q6)(i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:t}));!1===a.ok?(0,l.r9)(a.error):o[e.id]=n}));await(0,l.Hl)(Promise.all(a),t),e.remapTiles(o)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const s={},n=e=>{e.id in s?s[e.id]++:(s[e.id]=1,i++)},o=e=>{const t=s[e.id];1===t?(delete s[e.id],i--):s[e.id]=t-1};e.forEachTileToFetch(n,o);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch((s=>{i<=e.options.maximumAutoTileRequests||(o(s),t.upsampleTile(s)&&(l=!0),n(s))}),o),l););}_selectTilesAutoFinest(e){const t=Z(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let s=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?s=!0:t()})),s&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let s=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);(0,o.pC)(e)?s=e:t.elevationTile=null}t.z=s}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=(0,a.c9)(t.spatialReference);return e.geometry.coordinates.map((s=>{let n=-1;return s.elevationTile&&s.elevationTile!==e.outsideExtentTile&&(n=t.lodAt(s.elevationTile.tile.level).resolution*i),{demResolution:n}}))}}class A{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new A;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await(0,h.iQ)([{source:this.spatialReference,dest:e}],{signal:t});const i=new r.Z({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),s=(0,h.iV)(i,e);if(!s)return null;const n=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),n=s.points[t];return i.x=n[0],i.y=n[1],i})),o=this.clone(n);return o.spatialReference=e,o}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new A;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof A)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const s=e.clone(t);return s.spatialReference=i,s};else switch(e.type){case"point":{const i=e,{hasZ:s,hasM:n}=i;t.coordinates=s&&n?[{x:i.x,y:i.y,z:i.z,m:i.m}]:s?[{x:i.x,y:i.y,z:i.z}]:n?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new c.Z(t[0].x,t[0].y,t[0].z,t[0].m,i):new c.Z(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:s,hasM:n}=i;t.coordinates=s&&n?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):s?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):n?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new r.Z({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new r.Z(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,s=[],n=[],{hasZ:o,hasM:l}=e;let a=0;for(const e of i.paths)if(n.push([a,a+e.length]),a+=e.length,o&&l)for(const t of e)s.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(o)for(const t of e)s.push({x:t[0],y:t[1],z:t[2]});else if(l)for(const t of e)s.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)s.push({x:t[0],y:t[1]});t.coordinates=s,t._exporter=(t,i)=>{const s=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),o=n.map((e=>s.slice(e[0],e[1])));return new u.Z({paths:o,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class I{constructor(e,t){this.layer=e,this.options=t}}class D extends I{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const s=i.tile;i.elevationTile||!i.tile||e[s.id]||(e[s.id]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}}class C extends I{constructor(e,t,i,s){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=s}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),s=Math.min(i,e);s<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(s)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if((0,o.Wi)(i))return-1;for(let s=t.lods.length-1;s>=0;s--){const n=t.lods[s],o=n.resolution*t.size[0],l=n.resolution*t.size[1];if(Math.ceil(i.width/o)*Math.ceil(i.height/l)<=e)return s}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let s=!1;e(i,(()=>s=!0)),s?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},s=[];for(const n of e)i[n.id]?t&&t(n):(i[n.id]=n,s.push(n));const n=s.sort(((e,t)=>e.level-t.level));return n.filter(((e,i)=>{for(let s=0;s<i;s++)if((0,p.r3)(n[s].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if((0,o.Wi)(t))return;const i=this.layer.tileInfo,s=i.lods[e],n=i.tileAt(s.level,t.xmin,t.ymin),l=s.resolution*i.size[0],a=s.resolution*i.size[1],r=Math.ceil((t.xmax-n.extent[0])/l),c=Math.ceil((t.ymax-n.extent[1])/a);for(let e=0;e<c;e++)for(let t=0;t<r;t++){const s={id:null,level:n.level,row:n.row-e,col:n.col+t};i.updateTileInfo(s),this._tileIsMasked(s)||this.candidateTiles.push(s)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>(0,p.r3)(t,e.extent)))}}function Z(e,t){let i=e.lods.length-1;if(t>0){const s=e.lods.findIndex((e=>e.resolution<t));0===s?i=0:s>0&&(i=s-1)}return i}const M={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);