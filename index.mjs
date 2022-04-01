// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-tostringtag-support@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@esm/index.mjs";var s=Date.prototype.getDay;var r=e,a=function(t){try{return s.call(t),!0}catch(t){return!1}},n=t();var o=function(t){return"object"==typeof t&&(t instanceof Date||(n?a(t):"[object Date]"===r(t)))};export{o as default};
//# sourceMappingURL=index.mjs.map
