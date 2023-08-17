"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4983],{84983:(t,e,n)=>{n.r(e),n.d(e,{b:()=>l});var r,i,o,a=n(14031),u={exports:{}};r=u,i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(i=i||__filename),o=function(t){var e,n,r=void 0!==(t=t||{})?t:{};r.ready=new Promise((function(t,r){e=t,n=r}));var o,u,s,l,c,f={};for(o in r)r.hasOwnProperty(o)&&(f[o]=r[o]);u="object"==typeof window,s="function"==typeof importScripts,l="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,c=!u&&!l&&!s;var p,d,y,h,v="";l?(v=s?require("path").dirname(v)+"/":__dirname+"/",p=function(t,e){return y||(y=require("fs")),h||(h=require("path")),t=h.normalize(t),y.readFileSync(t,e?null:"utf8")},d=function(t){var e=p(t,!0);return e.buffer||(e=new Uint8Array(e)),T(e.buffer),e},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof _e))throw t})),process.on("unhandledRejection",et),r.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(p=function(t){return read(t)}),d=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(T("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(u||s)&&(s?v=self.location.href:document.currentScript&&(v=document.currentScript.src),i&&(v=i),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",p=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},s&&(d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}));var m,g,b=r.print||console.log.bind(console),$=r.printErr||console.warn.bind(console);for(o in f)f.hasOwnProperty(o)&&(r[o]=f[o]);f=null,r.arguments,r.thisProgram,r.quit,r.wasmBinary&&(m=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&et("no native wasm support detected");var C=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),w=!1;function T(t,e){t||et("Assertion failed: "+e)}var _="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(t,e,n){for(var r=e+n,i=e;t[i]&&!(i>=r);)++i;if(i-e>16&&t.subarray&&_)return _.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function A(t,e){return t?P(S,t,e):""}var W,E,S,k,O,j,F,R,x,D="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function I(t,e){for(var n=t,r=n>>1,i=r+e/2;!(r>=i)&&O[r];)++r;if((n=r<<1)-t>32&&D)return D.decode(S.subarray(t,n));for(var o=0,a="";;){var u=k[t+2*o>>1];if(0==u||o==e/2)return a;++o,a+=String.fromCharCode(u)}}function U(t,e,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var r=e,i=(n-=2)<2*t.length?n/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);k[e>>1]=a,e+=2}return k[e>>1]=0,e-r}function M(t){return 2*t.length}function V(t,e){for(var n=0,r="";!(n>=e/4);){var i=j[t+4*n>>2];if(0==i)break;if(++n,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function z(t,e,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var r=e,i=r+n-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),j[e>>2]=a,(e+=4)+4>i)break}return j[e>>2]=0,e-r}function H(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&++n,e+=4}return e}function B(t,e){return t%e>0&&(t+=e-t%e),t}function q(t){W=t,r.HEAP8=E=new Int8Array(t),r.HEAP16=k=new Int16Array(t),r.HEAP32=j=new Int32Array(t),r.HEAPU8=S=new Uint8Array(t),r.HEAPU16=O=new Uint16Array(t),r.HEAPU32=F=new Uint32Array(t),r.HEAPF32=R=new Float32Array(t),r.HEAPF64=x=new Float64Array(t)}var N=r.INITIAL_MEMORY||16777216;function G(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var n=e.func;"number"==typeof n?void 0===e.arg?r.dynCall_v(n):r.dynCall_vi(n,e.arg):n(void 0===e.arg?null:e.arg)}else e(r)}}(g=r.wasmMemory?r.wasmMemory:new WebAssembly.Memory({initial:N/65536,maximum:32768}))&&(W=g.buffer),N=W.byteLength,q(W),j[80624]=5565536;var L=[],X=[],J=[],Y=[],Z=Math.ceil,K=Math.floor,Q=0,tt=null;function et(t){r.onAbort&&r.onAbort(t),$(t+=""),w=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}function nt(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}function rt(t){return nt(t,"data:application/octet-stream;base64,")}function it(t){return nt(t,"file://")}r.preloadedImages={},r.preloadedAudios={};var ot,at="basis_transcoder.wasm";function ut(){try{if(m)return new Uint8Array(m);if(d)return d(at);throw"both async and sync fetching of the wasm failed"}catch(t){et(t)}}rt(at)||(ot=at,at=r.locateFile?r.locateFile(ot,v):v+ot),X.push({func:function(){$e()}});var st={};function lt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function ct(t){return this.fromWireType(F[t>>2])}var ft={},pt={},dt={};function yt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function ht(t,e){return t=yt(t),function(){return e.apply(this,arguments)}}function vt(t,e){var n=ht(e,(function(t){this.name=e,this.message=t;var n=new Error(t).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))}));return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var mt=void 0;function gt(t){throw new mt(t)}function bt(t,e,n){function r(e){var r=n(e);r.length!==t.length&&gt("Mismatched type converter count");for(var i=0;i<t.length;++i)Pt(t[i],r[i])}t.forEach((function(t){dt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){pt.hasOwnProperty(t)?i[e]=pt[t]:(o.push(t),ft.hasOwnProperty(t)||(ft[t]=[]),ft[t].push((function(){i[e]=pt[t],++a===o.length&&r(i)})))})),0===o.length&&r(i)}function $t(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var Ct=void 0;function wt(t){for(var e="",n=t;S[n];)e+=Ct[S[n++]];return e}var Tt=void 0;function _t(t){throw new Tt(t)}function Pt(t,e,n){if(n=n||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=e.name;if(t||_t('type "'+r+'" must have a positive integer typeid pointer'),pt.hasOwnProperty(t)){if(n.ignoreDuplicateRegistrations)return;_t("Cannot register type '"+r+"' twice")}if(pt[t]=e,delete dt[t],ft.hasOwnProperty(t)){var i=ft[t];delete ft[t],i.forEach((function(t){t()}))}}function At(t){return{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType}}function Wt(t){_t(function(t){return t.$$.ptrType.registeredClass.name}(t)+" instance already deleted")}var Et=!1;function St(t){}function kt(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function Ot(t){return"undefined"==typeof FinalizationGroup?(Ot=function(t){return t},t):(Et=new FinalizationGroup((function(t){for(var e=t.next();!e.done;e=t.next()){var n=e.value;n.ptr?kt(n):console.warn("object already deleted: "+n.ptr)}})),Ot=function(t){return Et.register(t,t.$$,t.$$),t},St=function(t){Et.unregister(t.$$)},Ot(t))}var jt=void 0,Ft=[];function Rt(){for(;Ft.length;){var t=Ft.pop();t.$$.deleteScheduled=!1,t.delete()}}function xt(){}var Dt={};function It(t,e,n){if(void 0===t[e].overloadTable){var r=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||_t("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[r.argCount]=r}}function Ut(t,e,n){r.hasOwnProperty(t)?((void 0===n||void 0!==r[t].overloadTable&&void 0!==r[t].overloadTable[n])&&_t("Cannot register public name '"+t+"' twice"),It(r,t,t),r.hasOwnProperty(n)&&_t("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),r[t].overloadTable[n]=e):(r[t]=e,void 0!==n&&(r[t].numArguments=n))}function Mt(t,e,n,r,i,o,a,u){this.name=t,this.constructor=e,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Vt(t,e,n){for(;e!==n;)e.upcast||_t("Expected null or instance of "+n.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function zt(t,e){if(null===e)return this.isReference&&_t("null is not a valid "+this.name),0;e.$$||_t('Cannot pass "'+ue(e)+'" as a '+this.name),e.$$.ptr||_t("Cannot pass deleted object as a pointer of type "+this.name);var n=e.$$.ptrType.registeredClass;return Vt(e.$$.ptr,n,this.registeredClass)}function Ht(t,e){var n;if(null===e)return this.isReference&&_t("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,n),n):0;e.$$||_t('Cannot pass "'+ue(e)+'" as a '+this.name),e.$$.ptr||_t("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&_t("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;if(n=Vt(e.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&_t("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?n=e.$$.smartPtr:_t("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:n=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)n=e.$$.smartPtr;else{var i=e.clone();n=this.rawShare(n,ie((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,n)}break;default:_t("Unsupporting sharing policy")}return n}function Bt(t,e){if(null===e)return this.isReference&&_t("null is not a valid "+this.name),0;e.$$||_t('Cannot pass "'+ue(e)+'" as a '+this.name),e.$$.ptr||_t("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&_t("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;return Vt(e.$$.ptr,n,this.registeredClass)}function qt(t,e,n){if(e===n)return t;if(void 0===n.baseClass)return null;var r=qt(t,e,n.baseClass);return null===r?null:n.downcast(r)}var Nt={};function Gt(t,e){return e.ptrType&&e.ptr||gt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&gt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},Ot(Object.create(t,{$$:{value:e}}))}function Lt(t,e,n,r,i,o,a,u,s,l,c){this.name=t,this.registeredClass=e,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==e.baseClass?this.toWireType=Ht:r?(this.toWireType=zt,this.destructorFunction=null):(this.toWireType=Bt,this.destructorFunction=null)}function Xt(t,e,n){r.hasOwnProperty(t)||gt("Replacing nonexistant public symbol"),void 0!==r[t].overloadTable&&void 0!==n?r[t].overloadTable[n]=e:(r[t]=e,r[t].argCount=n)}function Jt(t,e){t=wt(t);var n=function(t){var n=[e];return function(){n.length=arguments.length+1;for(var e=0;e<arguments.length;e++)n[e+1]=arguments[e];return t.apply(null,n)}}(r["dynCall_"+t]);return"function"!=typeof n&&_t("unknown function pointer with signature "+t+": "+e),n}var Yt=void 0;function Zt(t){var e=Te(t),n=wt(e);return we(e),n}function Kt(t,e){var n=[],r={};throw e.forEach((function t(e){r[e]||pt[e]||(dt[e]?dt[e].forEach(t):(n.push(e),r[e]=!0))})),new Yt(t+": "+n.map(Zt).join([", "]))}function Qt(t,e){for(var n=[],r=0;r<t;r++)n.push(j[(e>>2)+r]);return n}function te(t,e,n,r,i){var o=e.length;o<2&&_t("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==n,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var l="void"!==e[0].name,c=o-2,f=new Array(c),p=[],d=[];return function(){var n;arguments.length!==c&&_t("function "+t+" called with "+arguments.length+" arguments, expected "+c+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(n=e[1].toWireType(d,this),p[1]=n);for(var o=0;o<c;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=r.apply(null,p);if(u)lt(d);else for(o=a?1:2;o<e.length;o++){var y=1===o?n:f[o-2];null!==e[o].destructorFunction&&e[o].destructorFunction(y)}if(l)return e[0].fromWireType(s)}}var ee=[],ne=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function re(t){t>4&&0==--ne[t].refcount&&(ne[t]=void 0,ee.push(t))}function ie(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=ee.length?ee.pop():ne.length;return ne[e]={refcount:1,value:t},e}}function oe(t,e,n){switch(e){case 0:return function(t){var e=n?E:S;return this.fromWireType(e[t])};case 1:return function(t){var e=n?k:O;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=n?j:F;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function ae(t,e){var n=pt[t];return void 0===n&&_t(e+" has unknown type "+Zt(t)),n}function ue(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function se(t,e){switch(e){case 2:return function(t){return this.fromWireType(R[t>>2])};case 3:return function(t){return this.fromWireType(x[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function le(t,e,n){switch(e){case 0:return n?function(t){return E[t]}:function(t){return S[t]};case 1:return n?function(t){return k[t>>1]}:function(t){return O[t>>1]};case 2:return n?function(t){return j[t>>2]}:function(t){return F[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function ce(t){return t||_t("Cannot use deleted val. handle = "+t),ne[t].value}var fe={};function pe(t){var e=fe[t];return void 0===e?wt(t):e}var de=[];function ye(){if("object"==typeof globalThis)return globalThis;function t(t){t.$$$embind_global$$$=t;var e="object"==typeof $$$embind_global$$$&&t.$$$embind_global$$$===t;return e||delete t.$$$embind_global$$$,e}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof a.c&&t(a.c)?$$$embind_global$$$=a.c:"object"==typeof self&&t(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var he={};function ve(t){try{return g.grow(t-W.byteLength+65535>>>16),q(g.buffer),1}catch(t){}}var me={mappings:{},buffers:[null,[],[]],printChar:function(t,e){var n=me.buffers[t];0===e||10===e?((1===t?b:$)(P(n,0)),n.length=0):n.push(e)},varargs:void 0,get:function(){return me.varargs+=4,j[me.varargs-4>>2]},getStr:function(t){return A(t)},get64:function(t,e){return t}};mt=r.InternalError=vt(Error,"InternalError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Ct=t}(),Tt=r.BindingError=vt(Error,"BindingError"),xt.prototype.isAliasOf=function(t){if(!(this instanceof xt))return!1;if(!(t instanceof xt))return!1;for(var e=this.$$.ptrType.registeredClass,n=this.$$.ptr,r=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)n=e.upcast(n),e=e.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return e===r&&n===i},xt.prototype.clone=function(){if(this.$$.ptr||Wt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t=Ot(Object.create(Object.getPrototypeOf(this),{$$:{value:At(this.$$)}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t},xt.prototype.delete=function(){this.$$.ptr||Wt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),St(this),kt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},xt.prototype.isDeleted=function(){return!this.$$.ptr},xt.prototype.deleteLater=function(){return this.$$.ptr||Wt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&_t("Object already scheduled for deletion"),Ft.push(this),1===Ft.length&&jt&&jt(Rt),this.$$.deleteScheduled=!0,this},Lt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Lt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Lt.prototype.argPackAdvance=8,Lt.prototype.readValueFromPointer=ct,Lt.prototype.deleteObject=function(t){null!==t&&t.delete()},Lt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var n=function(t,e){return e=function(t,e){for(void 0===e&&_t("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),Nt[e]}(this.registeredClass,e);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=e,n.$$.smartPtr=t,n.clone();var r=n.clone();return this.destructor(t),r}function i(){return this.isSmartPointer?Gt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):Gt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),u=Dt[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=qt(e,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?Gt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:t}):Gt(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})},r.getInheritedInstanceCount=function(){return Object.keys(Nt).length},r.getLiveInheritedInstances=function(){var t=[];for(var e in Nt)Nt.hasOwnProperty(e)&&t.push(Nt[e]);return t},r.flushPendingDeletes=Rt,r.setDelayFunction=function(t){jt=t,Ft.length&&jt&&jt(Rt)},Yt=r.UnboundTypeError=vt(Error,"UnboundTypeError"),r.count_emval_handles=function(){for(var t=0,e=5;e<ne.length;++e)void 0!==ne[e]&&++t;return t},r.get_first_emval=function(){for(var t=5;t<ne.length;++t)if(void 0!==ne[t])return ne[t];return null};var ge={u:function(t){var e=st[t];delete st[t];var n=e.rawConstructor,r=e.rawDestructor,i=e.fields;bt([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(e,n){var r=e.fieldName,a=t[n],u=e.getter,s=e.getterContext,l=t[n+i.length],c=e.setter,f=e.setterContext;o[r]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,e){var n=[];c(f,t,l.toWireType(n,e)),lt(n)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var n in o)e[n]=o[n].read(t);return r(t),e},toWireType:function(t,e){for(var i in o)if(!(i in e))throw new TypeError('Missing field:  "'+i+'"');var a=n();for(i in o)o[i].write(a,e[i]);return null!==t&&t.push(r,a),a},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:r}]}))},J:function(t,e,n,r,i){var o=$t(n);Pt(t,{name:e=wt(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===n)r=E;else if(2===n)r=k;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+e);r=j}return this.fromWireType(r[t>>o])},destructorFunction:null})},y:function(t,e,n,r,i,o,a,u,s,l,c,f,p){c=wt(c),o=Jt(i,o),u&&(u=Jt(a,u)),l&&(l=Jt(s,l)),p=Jt(f,p);var d=yt(c);Ut(d,(function(){Kt("Cannot construct "+c+" due to unbound types",[r])})),bt([t,e,n],r?[r]:[],(function(e){var n,i;e=e[0],i=r?(n=e.registeredClass).instancePrototype:xt.prototype;var a=ht(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new Tt("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new Tt(c+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new Tt("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Mt(c,a,s,p,n,o,u,l),y=new Lt(c,f,!0,!1,!1),h=new Lt(c+"*",f,!1,!1,!1),v=new Lt(c+" const*",f,!1,!0,!1);return Dt[t]={pointerType:h,constPointerType:v},Xt(d,a),[y,h,v]}))},x:function(t,e,n,r,i,o){T(e>0);var a=Qt(e,n);i=Jt(r,i);var u=[o],s=[];bt([],[t],(function(t){var n="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new Tt("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){Kt("Cannot construct "+t.name+" due to unbound types",a)},bt([],a,(function(r){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&_t(n+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var t=1;t<e;++t)u[t]=r[t].toWireType(s,arguments[t-1]);var o=i.apply(null,u);return lt(s),r[0].fromWireType(o)},[]})),[]}))},d:function(t,e,n,r,i,o,a,u){var s=Qt(n,r);e=wt(e),o=Jt(i,o),bt([],[t],(function(t){var r=(t=t[0]).name+"."+e;function i(){Kt("Cannot call "+r+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var l=t.registeredClass.instancePrototype,c=l[e];return void 0===c||void 0===c.overloadTable&&c.className!==t.name&&c.argCount===n-2?(i.argCount=n-2,i.className=t.name,l[e]=i):(It(l,e,r),l[e].overloadTable[n-2]=i),bt([],s,(function(i){var u=te(r,i,t,o,a);return void 0===l[e].overloadTable?(u.argCount=n-2,l[e]=u):l[e].overloadTable[n-2]=u,[]})),[]}))},k:function(t,e,n){t=wt(t),bt([],[e],(function(e){return e=e[0],r[t]=e.fromWireType(n),[]}))},I:function(t,e){Pt(t,{name:e=wt(e),fromWireType:function(t){var e=ne[t].value;return re(t),e},toWireType:function(t,e){return ie(e)},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:null})},n:function(t,e,n,r){var i=$t(n);function o(){}e=wt(e),o.values={},Pt(t,{name:e,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:oe(e,i,r),destructorFunction:null}),Ut(e,o)},a:function(t,e,n){var r=ae(t,"enum");e=wt(e);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:ht(r.name+"_"+e,(function(){}))}});i.values[n]=o,i[e]=o},B:function(t,e,n){var r=$t(n);Pt(t,{name:e=wt(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+ue(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:se(e,r),destructorFunction:null})},i:function(t,e,n,r,i,o){var a=Qt(e,n);t=wt(t),i=Jt(r,i),Ut(t,(function(){Kt("Cannot call "+t+" due to unbound types",a)}),e-1),bt([],a,(function(n){var r=[n[0],null].concat(n.slice(1));return Xt(t,te(t,r,null,i,o),e-1),[]}))},j:function(t,e,n,r,i){e=wt(e),-1===i&&(i=4294967295);var o=$t(n),a=function(t){return t};if(0===r){var u=32-8*n;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");Pt(t,{name:e,fromWireType:a,toWireType:function(t,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+ue(n)+'" to '+this.name);if(n<r||n>i)throw new TypeError('Passing a number "'+ue(n)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+r+", "+i+"]!");return s?n>>>0:0|n},argPackAdvance:8,readValueFromPointer:le(e,o,0!==r),destructorFunction:null})},h:function(t,e,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=F,n=e[t>>=2],i=e[t+1];return new r(W,i,n)}Pt(t,{name:n=wt(n),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(t,e){var n="std::string"===(e=wt(e));Pt(t,{name:e,fromWireType:function(t){var e,r=F[t>>2];if(n)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==S[a]){var u=A(i,a-i);void 0===e?e=u:(e+=String.fromCharCode(0),e+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(S[t+4+o]);e=s.join("")}return we(t),e},toWireType:function(t,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var r="string"==typeof e;r||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||_t("Cannot pass non-string to std::string");var i=(n&&r?function(){return function(t){for(var e=0,n=0;n<t.length;++n){var r=t.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++n)),r<=127?++e:e+=r<=2047?2:r<=65535?3:4}return e}(e)}:function(){return e.length})(),o=Ce(4+i+1);if(F[o>>2]=i,n&&r)!function(t,e,n){!function(t,e,n,r){if(!(r>0))return 0;for(var i=n+r-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(n>=i)break;e[n++]=a}else if(a<=2047){if(n+1>=i)break;e[n++]=192|a>>6,e[n++]=128|63&a}else if(a<=65535){if(n+2>=i)break;e[n++]=224|a>>12,e[n++]=128|a>>6&63,e[n++]=128|63&a}else{if(n+3>=i)break;e[n++]=240|a>>18,e[n++]=128|a>>12&63,e[n++]=128|a>>6&63,e[n++]=128|63&a}}e[n]=0}(t,S,e,n)}(e,o+4,i+1);else if(r)for(var a=0;a<i;++a){var u=e.charCodeAt(a);u>255&&(we(o),_t("String has UTF-16 code units that do not fit in 8 bits")),S[o+4+a]=u}else for(a=0;a<i;++a)S[o+4+a]=e[a];return null!==t&&t.push(we,o),o},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:function(t){we(t)}})},w:function(t,e,n){var r,i,o,a,u;n=wt(n),2===e?(r=I,i=U,a=M,o=function(){return O},u=1):4===e&&(r=V,i=z,a=H,o=function(){return F},u=2),Pt(t,{name:n,fromWireType:function(t){for(var n,i=F[t>>2],a=o(),s=t+4,l=0;l<=i;++l){var c=t+4+l*e;if(l==i||0==a[c>>u]){var f=r(s,c-s);void 0===n?n=f:(n+=String.fromCharCode(0),n+=f),s=c+e}}return we(t),n},toWireType:function(t,r){"string"!=typeof r&&_t("Cannot pass non-string to C++ string type "+n);var o=a(r),s=Ce(4+o+e);return F[s>>2]=o>>u,i(r,s+4,o+e),null!==t&&t.push(we,s),s},argPackAdvance:8,readValueFromPointer:ct,destructorFunction:function(t){we(t)}})},v:function(t,e,n,r,i,o){st[t]={name:wt(e),rawConstructor:Jt(n,r),rawDestructor:Jt(i,o),fields:[]}},c:function(t,e,n,r,i,o,a,u,s,l){st[t].fields.push({fieldName:wt(e),getterReturnType:n,getter:Jt(r,i),getterContext:o,setterArgumentType:a,setter:Jt(u,s),setterContext:l})},K:function(t,e){Pt(t,{isVoid:!0,name:e=wt(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},m:function(t,e,n){t=ce(t),e=ae(e,"emval::as");var r=[],i=ie(r);return j[n>>2]=i,e.toWireType(r,t)},s:function(t,e,n,r){(t=de[t])(e=ce(e),n=pe(n),null,r)},b:re,z:function(t){return 0===t?ie(ye()):(t=pe(t),ie(ye()[t]))},t:function(t,e){var n=function(t,e){for(var n=new Array(t),r=0;r<t;++r)n[r]=ae(j[(e>>2)+r],"parameter "+r);return n}(t,e),r=n[0],i=new Array(t-1);return function(t){var e=de.length;return de.push(t),e}((function(e,o,a,u){for(var s=0,l=0;l<t-1;++l)i[l]=n[l+1].readValueFromPointer(u+s),s+=n[l+1].argPackAdvance;var c=e[o].apply(e,i);for(l=0;l<t-1;++l)n[l+1].deleteObject&&n[l+1].deleteObject(i[l]);if(!r.isVoid)return r.toWireType(a,c)}))},r:function(t){return t=pe(t),ie(r[t])},e:function(t,e){return ie((t=ce(t))[e=ce(e)])},g:function(t){t>4&&(ne[t].refcount+=1)},q:function(t,e,n,r){t=ce(t);var i=he[e];return i||(i=function(t){var e=new Array(t+1);return function(n,r,i){e[0]=n;for(var o=0;o<t;++o){var a=ae(j[(r>>2)+o],"parameter "+o);e[o+1]=a.readValueFromPointer(i),i+=a.argPackAdvance}return ie(new(n.bind.apply(n,e)))}}(e),he[e]=i),i(t,n,r)},f:function(t){return ie(pe(t))},l:function(t){lt(ne[t].value),re(t)},p:function(){et()},F:function(t,e,n){S.copyWithin(t,e,e+n)},G:function(t){t>>>=0;var e=S.length,n=2147483648;if(t>n)return!1;for(var r=1;r<=4;r*=2){var i=e*(1+.2/r);if(i=Math.min(i,t+100663296),ve(Math.min(n,B(Math.max(16777216,t,i),65536))))return!0}return!1},H:function(t){return 0},D:function(t,e,n,r,i){},A:function(t,e,n,r){for(var i=0,o=0;o<n;o++){for(var a=j[e+8*o>>2],u=j[e+(8*o+4)>>2],s=0;s<u;s++)me.printChar(t,S[a+s]);i+=u}return j[r>>2]=i,0},memory:g,o:function(t){return(t=+t)>=0?+K(t+.5):+Z(t-.5)},E:function(t){},table:C};!function(){var t={a:ge};function e(t,e){var n=t.exports;r.asm=n,function(t){if(Q--,r.monitorRunDependencies&&r.monitorRunDependencies(Q),0==Q&&tt){var e=tt;tt=null,e()}}()}function n(t){e(t.instance)}function i(e){return(m||!u&&!s||"function"!=typeof fetch||it(at)?new Promise((function(t,e){t(ut())})):fetch(at,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+at+"'";return t.arrayBuffer()})).catch((function(){return ut()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){$("failed to asynchronously prepare wasm: "+t),et(t)}))}if(Q++,r.monitorRunDependencies&&r.monitorRunDependencies(Q),r.instantiateWasm)try{return r.instantiateWasm(t,e)}catch(t){return $("Module.instantiateWasm callback failed with error: "+t),!1}!function(){if(m||"function"!=typeof WebAssembly.instantiateStreaming||rt(at)||it(at)||"function"!=typeof fetch)return i(n);fetch(at,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(n,(function(t){return $("wasm streaming compile failed: "+t),$("falling back to ArrayBuffer instantiation"),i(n)}))}))}()}();var be,$e=r.___wasm_call_ctors=function(){return($e=r.___wasm_call_ctors=r.asm.L).apply(null,arguments)},Ce=r._malloc=function(){return(Ce=r._malloc=r.asm.M).apply(null,arguments)},we=r._free=function(){return(we=r._free=r.asm.N).apply(null,arguments)},Te=r.___getTypeName=function(){return(Te=r.___getTypeName=r.asm.O).apply(null,arguments)};function _e(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Pe(t){function n(){be||(be=!0,r.calledRun=!0,w||(G(X),G(J),e(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),function(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)t=r.postRun.shift(),Y.unshift(t);var t;G(Y)}()))}Q>0||(function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)t=r.preRun.shift(),L.unshift(t);var t;G(L)}(),Q>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),n()}),1)):n()))}if(r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.P).apply(null,arguments)},r.dynCall_viii=function(){return(r.dynCall_viii=r.asm.Q).apply(null,arguments)},r.dynCall_vi=function(){return(r.dynCall_vi=r.asm.R).apply(null,arguments)},r.dynCall_v=function(){return(r.dynCall_v=r.asm.S).apply(null,arguments)},r.dynCall_i=function(){return(r.dynCall_i=r.asm.T).apply(null,arguments)},r.dynCall_iii=function(){return(r.dynCall_iii=r.asm.U).apply(null,arguments)},r.dynCall_ii=function(){return(r.dynCall_ii=r.asm.V).apply(null,arguments)},r.dynCall_vii=function(){return(r.dynCall_vii=r.asm.W).apply(null,arguments)},r.dynCall_iiii=function(){return(r.dynCall_iiii=r.asm.X).apply(null,arguments)},r.dynCall_iiiii=function(){return(r.dynCall_iiiii=r.asm.Y).apply(null,arguments)},r.dynCall_iiiiii=function(){return(r.dynCall_iiiiii=r.asm.Z).apply(null,arguments)},r.dynCall_iiiiiiii=function(){return(r.dynCall_iiiiiiii=r.asm._).apply(null,arguments)},r.dynCall_iiiiiiiii=function(){return(r.dynCall_iiiiiiiii=r.asm.$).apply(null,arguments)},r.dynCall_viiii=function(){return(r.dynCall_viiii=r.asm.aa).apply(null,arguments)},r.dynCall_iiiiiii=function(){return(r.dynCall_iiiiiii=r.asm.ba).apply(null,arguments)},r.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(r.dynCall_iiiiiiiiiiiiiiiiiiii=r.asm.ca).apply(null,arguments)},r.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(r.dynCall_iiiiiiiiiiiiiiiiiiiii=r.asm.da).apply(null,arguments)},r.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(r.dynCall_iiiiiiiiiiiiiiiiiii=r.asm.ea).apply(null,arguments)},r.dynCall_viiiii=function(){return(r.dynCall_viiiii=r.asm.fa).apply(null,arguments)},r.dynCall_iiiiiiiiii=function(){return(r.dynCall_iiiiiiiiii=r.asm.ga).apply(null,arguments)},r.dynCall_iiiiiiiiiii=function(){return(r.dynCall_iiiiiiiiiii=r.asm.ha).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.ia).apply(null,arguments)},r.dynCall_viiiiii=function(){return(r.dynCall_viiiiii=r.asm.ja).apply(null,arguments)},tt=function t(){be||Pe(),be||(tt=t)},r.run=Pe,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return Pe(),t.ready},r.exports=o;const s=u.exports,l=Object.freeze(function(t,e){for(var n=0;n<e.length;n++){const r=e[n];if("string"!=typeof r&&!Array.isArray(r))for(const e in r)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}return Object.freeze(t)}({__proto__:null,default:s},[u.exports]))}}]);