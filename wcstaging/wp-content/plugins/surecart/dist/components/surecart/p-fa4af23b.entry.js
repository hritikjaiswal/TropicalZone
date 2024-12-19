import{r as o,h as i}from"./p-e97fde0a.js";import{u as r,s as t}from"./p-322d462c.js";import{i as n}from"./p-b0d8cd6e.js";import{f as s}from"./p-d1f5a7ef.js";import{c as e}from"./p-4194d4cd.js";import"./p-03631502.js";import"./p-e2d5dc4f.js";import"./p-d3366af3.js";import"./p-401e165e.js";import"./p-830ab1a3.js";import"./p-ec182234.js";import"./p-3f6362a4.js";import"./p-d7296e4c.js";import"./p-6ec14893.js";import"./p-9a298389.js";const d=":host{display:block}.coupon-form{position:relative}.form{opacity:0;visibility:hidden;height:0;transition:opacity var(--sc-transition-fast) ease-in-out}.coupon-form--is-open .form{opacity:1;visibility:visible;height:auto;margin-top:var(--sc-spacing-small);display:grid;gap:var(--sc-spacing-small)}.coupon-form--is-open .trigger{color:var(--sc-input-label-color)}.coupon-form--is-open .trigger:hover{text-decoration:none}.trigger{cursor:pointer;font-size:var(--sc-font-size-small);color:var(--sc-color-gray-500);user-select:none}.trigger:hover{text-decoration:underline}.order-coupon-form--is-rtl .trigger,.order-coupon-form--is-rtl .trigger:hover{text-align:right}";const l=d;const a=class{constructor(i){o(this,i);this.label=undefined;this.loading=undefined;this.collapsed=undefined;this.placeholder=undefined;this.buttonText=undefined;this.open=undefined;this.value=undefined;this.error=undefined}async handleCouponApply(o){var i,n,s;const d=(o===null||o===void 0?void 0:o.detail)||null;try{this.error=null;r("FETCH");t.checkout=await e({id:t.checkout.id,data:{discount:{...d?{promotion_code:d}:{}}}});r("RESOLVE");await((i=this.couponForm)===null||i===void 0?void 0:i.triggerFocus())}catch(o){console.error(o);this.error=((s=(n=o===null||o===void 0?void 0:o.additional_errors)===null||n===void 0?void 0:n[0])===null||s===void 0?void 0:s.message)||(o===null||o===void 0?void 0:o.message)||wp.i18n.__("Something went wrong","surecart");r("REJECT")}}render(){var o,r,e,d,l,a,p,c,u;const v=(e=(r=(o=t===null||t===void 0?void 0:t.checkout)===null||o===void 0?void 0:o.line_items)===null||r===void 0?void 0:r.data)===null||e===void 0?void 0:e.some((o=>{var i;return(i=o===null||o===void 0?void 0:o.price)===null||i===void 0?void 0:i.recurring_interval}));return i("sc-coupon-form",{key:"6ffd838f7c44ac67cbfd0a02bb5e3ab8fae2ca06",ref:o=>this.couponForm=o,label:this.label||wp.i18n.__("Add Coupon Code","surecart"),collapsed:this.collapsed,placeholder:this.placeholder,loading:s()&&!((a=(l=(d=t.checkout)===null||d===void 0?void 0:d.line_items)===null||l===void 0?void 0:l.data)===null||a===void 0?void 0:a.length),busy:s(),discount:(p=t.checkout)===null||p===void 0?void 0:p.discount,currency:(c=t.checkout)===null||c===void 0?void 0:c.currency,"discount-amount":(u=t.checkout)===null||u===void 0?void 0:u.discount_amount,class:{"order-coupon-form--is-rtl":n()},"button-text":this.buttonText||wp.i18n.__("Apply","surecart"),"show-interval":v,onScApplyCoupon:o=>this.handleCouponApply(o),error:this.error})}};a.style=l;export{a as sc_order_coupon_form};
//# sourceMappingURL=p-fa4af23b.entry.js.map