// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,l="function"==typeof r?r.toStringTag:"",f=e()?function(t){var e,r,f,c,i;if(null==t)return o.call(t);r=t[l],i=l,e=null!=(c=t)&&n.call(c,i);try{t[l]=void 0}catch(e){return o.call(t)}return f=o.call(t),e?t[l]=r:delete t[l],f}:function(t){return o.call(t)},c=Date.prototype.getDay,i=e();return function(t){return"object"==typeof t&&(t instanceof Date||(i?function(t){try{return c.call(t),!0}catch(t){return!1}}(t):"[object Date]"===f(t)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isDateObject=e();
//# sourceMappingURL=browser.js.map
