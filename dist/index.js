"use strict";var e=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(o){throw (t=0, o)}};};var s=e(function(h,a){
var f=Date.prototype.getDay;a.exports=f
});var u=e(function(l,i){
var p=s();function D(r){try{return p.call(r),!0}catch(t){return!1}}i.exports=D
});var c=e(function(T,n){
var y=require('@stdlib/assert-has-tostringtag-support/dist'),g=require('@stdlib/utils-native-class/dist'),q=u(),v=y();function x(r){return typeof r=="object"?r instanceof Date?!0:v?q(r):g(r)==="[object Date]":!1}n.exports=x
});var b=c();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
