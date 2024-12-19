"use strict";const isObject=t=>t&&"object"==typeof t&&!Array.isArray(t),getSerializedState=()=>{const t=document.querySelector('script[type="application/json"]#sc-store-data');if(!t)return{};try{const o=JSON.parse(t.textContent);if(isObject(o))return o;throw Error("Parsed state is not an object")}catch(t){console.log(t)}return{}},isProductVariantOptionSoldOut=(t,o,i,n)=>{var a,r,l,e,s;if(!(null==n?void 0:n.stock_enabled)||(null==n?void 0:n.allow_out_of_stock_purchases))return!1;if(1===t){const t=null===(l=(r=(null===(a=n.variants)||void 0===a?void 0:a.data)||[]).filter)||void 0===l?void 0:l.call(r,(t=>t.option_1===o));return Math.max(...t.map((t=>t.available_stock)))<=0}if(2===t){const t=((null===(e=n.variants)||void 0===e?void 0:e.data)||[]).filter((t=>(null==t?void 0:t.option_1)===i.option_1&&t.option_2===o));return Math.max(...t.map((t=>t.available_stock)))<=0}const d=((null===(s=n.variants)||void 0===s?void 0:s.data)||[]).filter((t=>(null==t?void 0:t.option_1)===i.option_1&&(null==t?void 0:t.option_2)===i.option_2&&t.option_3===o));return Math.max(...d.map((t=>t.available_stock)))<=0},isProductVariantOptionMissing=(t,o,i,n)=>{var a,r,l;return 1===t?!((null===(a=null==n?void 0:n.variants)||void 0===a?void 0:a.data)||[]).some((t=>t.option_1===o)):2===t?!((null===(r=null==n?void 0:n.variants)||void 0===r?void 0:r.data)||[]).some((t=>(null==t?void 0:t.option_1)===i.option_1&&t.option_2===o)):!((null===(l=null==n?void 0:n.variants)||void 0===l?void 0:l.data)||[]).some((t=>(null==t?void 0:t.option_1)===i.option_1&&(null==t?void 0:t.option_2)===i.option_2&&t.option_3===o))};exports.getSerializedState=getSerializedState,exports.isProductVariantOptionMissing=isProductVariantOptionMissing,exports.isProductVariantOptionSoldOut=isProductVariantOptionSoldOut;