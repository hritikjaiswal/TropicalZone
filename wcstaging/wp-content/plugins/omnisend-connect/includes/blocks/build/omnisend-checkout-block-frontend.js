(()=>{"use strict";const e=window.wc.blocksCheckout,t=window.React,o=window.wp.element,n=window.wc.wcSettings,{optInText:c,optInEnabled:s,optInPreselected:i}=(0,n.getSetting)("omnisend_consent_data",""),a=JSON.parse('{"apiVersion":2,"name":"omnisend/checkout-block","version":"2.0.0","title":"Omnisend subscriber checkbox","category":"woocommerce","description":"Adds a checkbox field to let the shopper become a subscriber.","supports":{"html":false,"align":false,"multiple":false,"reusable":false},"parent":["woocommerce/checkout-contact-information-block"],"attributes":{"lock":{"type":"object","default":{"remove":true,"move":true}},"text":{"type":"string","default":""}},"textdomain":"omnisend-checkout-block","editorStyle":""}');(0,e.registerCheckoutBlock)({metadata:a,component:({checkoutExtensionData:n})=>{const[a,r]=(0,o.useState)(i),{setExtensionData:l}=n;return(0,o.useEffect)((()=>{l("omnisend_consent","optin",a)}),[a,l]),s?(0,t.createElement)("div",{id:"omnisend-subscribe-block"},(0,t.createElement)(e.CheckboxControl,{id:"subscribe-to-newsletter",checked:a,onChange:r},c)):null}})})();