// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol.toStringTag:"",l=e()?function(t){var e,l,c,f,i;if(null==t)return o.call(t);l=t[r],i=r,e=null!=(f=t)&&n.call(f,i);try{t[r]=void 0}catch(e){return o.call(t)}return c=o.call(t),e?t[r]=l:delete t[r],c}:function(t){return o.call(t)},c=Date.prototype.getDay,f=e();return function(t){return"object"==typeof t&&(t instanceof Date||(f?function(t){try{return c.call(t),!0}catch(t){return!1}}(t):"[object Date]"===l(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isDateObject=e();
//# sourceMappingURL=browser.js.map
