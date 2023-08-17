"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9392,9108],{49108:(e,t,n)=>{n.r(t),n.d(t,{hydratedAdapter:()=>u});var r=n(3982),a=n(11901),i=n(74991),o=n(18223),c=n(77401);const u={convertToGEGeometry:function(e,t){if(null==t)return null;let n="cache"in t?t.cache._geVersion:void 0;return null==n&&(n=e.convertJSONToGeometry(t),"cache"in t&&(t.cache._geVersion=n)),n},exportPoint:function(e,t,n){const r=e.hasZ(t),a=e.hasM(t),o=new i.Z({x:e.getPointX(t),y:e.getPointY(t),spatialReference:n});return r&&(o.z=e.getPointZ(t)),a&&(o.m=e.getPointM(t)),o.cache._geVersion=t,o},exportPolygon:function(e,t,n){const r=new o.Z({rings:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportPolyline:function(e,t,n){const r=new c.Z({paths:e.exportPaths(t),hasZ:e.hasZ(t),hasM:e.hasM(t),spatialReference:n});return r.cache._geVersion=t,r},exportMultipoint:function(e,t,n){const r=new a.Z({hasZ:e.hasZ(t),hasM:e.hasM(t),points:e.exportPoints(t),spatialReference:n});return r.cache._geVersion=t,r},exportExtent:function(e,t,n){const a=e.hasZ(t),i=e.hasM(t),o=new r.Z({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:n});if(a){const n=e.getZExtent(t);o.zmin=n.vmin,o.zmax=n.vmax}if(i){const n=e.getMExtent(t);o.mmin=n.vmin,o.mmax=n.vmax}return o.cache._geVersion=t,o}}},39392:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>V,clip:()=>c,contains:()=>d,convexHull:()=>w,crosses:()=>s,cut:()=>u,densify:()=>H,difference:()=>v,disjoint:()=>g,distance:()=>f,equals:()=>l,extendedSpatialReferenceInfo:()=>o,flipHorizontal:()=>k,flipVertical:()=>C,generalize:()=>D,geodesicArea:()=>O,geodesicBuffer:()=>P,geodesicDensify:()=>J,geodesicLength:()=>X,intersect:()=>M,intersects:()=>p,isSimple:()=>x,nearestCoordinate:()=>I,nearestVertex:()=>S,nearestVertices:()=>z,offset:()=>Z,overlaps:()=>A,planarArea:()=>L,planarLength:()=>N,relate:()=>G,rotate:()=>b,simplify:()=>m,symmetricDifference:()=>E,touches:()=>h,union:()=>R,within:()=>y});var r=n(86896),a=n(49108);function i(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function o(e){return r.G.extendedSpatialReferenceInfo(e)}function c(e,t){return r.G.clip(a.hydratedAdapter,i(e),e,t)}function u(e,t){return r.G.cut(a.hydratedAdapter,i(e),e,t)}function d(e,t){return r.G.contains(a.hydratedAdapter,i(e),e,t)}function s(e,t){return r.G.crosses(a.hydratedAdapter,i(e),e,t)}function f(e,t,n){return r.G.distance(a.hydratedAdapter,i(e),e,t,n)}function l(e,t){return r.G.equals(a.hydratedAdapter,i(e),e,t)}function p(e,t){return r.G.intersects(a.hydratedAdapter,i(e),e,t)}function h(e,t){return r.G.touches(a.hydratedAdapter,i(e),e,t)}function y(e,t){return r.G.within(a.hydratedAdapter,i(e),e,t)}function g(e,t){return r.G.disjoint(a.hydratedAdapter,i(e),e,t)}function A(e,t){return r.G.overlaps(a.hydratedAdapter,i(e),e,t)}function G(e,t,n){return r.G.relate(a.hydratedAdapter,i(e),e,t,n)}function x(e){return r.G.isSimple(a.hydratedAdapter,i(e),e)}function m(e){return r.G.simplify(a.hydratedAdapter,i(e),e)}function w(e,t=!1){return r.G.convexHull(a.hydratedAdapter,i(e),e,t)}function v(e,t){return r.G.difference(a.hydratedAdapter,i(e),e,t)}function E(e,t){return r.G.symmetricDifference(a.hydratedAdapter,i(e),e,t)}function M(e,t){return r.G.intersect(a.hydratedAdapter,i(e),e,t)}function R(e,t=null){return r.G.union(a.hydratedAdapter,i(e),e,t)}function Z(e,t,n,o,c,u){return r.G.offset(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function V(e,t,n,o=!1){return r.G.buffer(a.hydratedAdapter,i(e),e,t,n,o)}function P(e,t,n,o,c,u){return r.G.geodesicBuffer(a.hydratedAdapter,i(e),e,t,n,o,c,u)}function I(e,t,n=!0){return r.G.nearestCoordinate(a.hydratedAdapter,i(e),e,t,n)}function S(e,t){return r.G.nearestVertex(a.hydratedAdapter,i(e),e,t)}function z(e,t,n,o){return r.G.nearestVertices(a.hydratedAdapter,i(e),e,t,n,o)}function _(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function b(e,t,n){var a;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;if(null==(n=null!=(a=n)?a:_(e)))throw new Error("Illegal Argument Exception");const o=e.constructor.fromJSON(r.G.rotate(e,t,n));return o.spatialReference=i,o}function k(e,t){var n;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(t=null!=(n=t)?n:_(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.G.flipHorizontal(e,t));return i.spatialReference=a,i}function C(e,t){var n;if(null==e)throw new Error("Illegal Argument Exception");const a=e.spatialReference;if(null==(t=null!=(n=t)?n:_(e)))throw new Error("Illegal Argument Exception");const i=e.constructor.fromJSON(r.G.flipVertical(e,t));return i.spatialReference=a,i}function D(e,t,n,o){return r.G.generalize(a.hydratedAdapter,i(e),e,t,n,o)}function H(e,t,n){return r.G.densify(a.hydratedAdapter,i(e),e,t,n)}function J(e,t,n,o=0){return r.G.geodesicDensify(a.hydratedAdapter,i(e),e,t,n,o)}function L(e,t){return r.G.planarArea(a.hydratedAdapter,i(e),e,t)}function N(e,t){return r.G.planarLength(a.hydratedAdapter,i(e),e,t)}function O(e,t,n){return r.G.geodesicArea(a.hydratedAdapter,i(e),e,t,n)}function X(e,t,n){return r.G.geodesicLength(a.hydratedAdapter,i(e),e,t,n)}}}]);