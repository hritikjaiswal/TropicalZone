import{h,Host}from"@stencil/core";import apiFetch from"../../../../functions/fetch";import{openWormhole}from"stencil-wormhole";import{__}from"@wordpress/i18n";export class ScCustomOrderPriceInput{constructor(){this.priceId=void 0,this.price=void 0,this.loading=!1,this.busy=!1,this.label=void 0,this.placeholder=void 0,this.required=void 0,this.help=void 0,this.showCode=void 0,this.lineItems=[],this.fetching=!1,this.lineItem=void 0}handleBlur(e){var t;const i=parseInt(e.target.value);isNaN(i)||(null===(t=this.lineItem)||void 0===t?void 0:t.ad_hoc_amount)!==i&&this.scUpdateLineItem.emit({price_id:this.priceId,quantity:1,ad_hoc_amount:i})}handleLineItemsChange(){var e;(null===(e=this.lineItems)||void 0===e?void 0:e.length)&&(this.lineItem=(this.lineItems||[]).find((e=>e.price.id===this.priceId)))}componentDidLoad(){this.price||this.fetchPrice()}async fetchPrice(){if(this.priceId)try{this.fetching=!0,this.price=await apiFetch({path:`surecart/v1/prices/${this.priceId}`})}catch(e){}finally{this.fetching=!1}}renderEmpty(){var e;return(null===(e=null===window||void 0===window?void 0:window.wp)||void 0===e?void 0:e.blocks)?h("sc-alert",{type:"danger",open:!0,style:{margin:"0px"}},__("This price has been archived.","surecart")):h(Host,{style:{display:"none"}})}render(){var e,t,i,r,o,s;return this.loading||this.fetching?h("div",null,h("sc-skeleton",{style:{width:"20%",marginBottom:"0.75em"}}),h("sc-skeleton",{style:{width:"100%"}})):!(null===(e=null==this?void 0:this.price)||void 0===e?void 0:e.id)||(null===(t=this.price)||void 0===t?void 0:t.archived)?this.renderEmpty():h("div",{class:"sc-custom-order-price-input"},h("sc-price-input",{"currency-code":(null===(i=this.price)||void 0===i?void 0:i.currency)||"usd",label:this.label,min:null===(r=null==this?void 0:this.price)||void 0===r?void 0:r.ad_hoc_min_amount,max:null===(o=null==this?void 0:this.price)||void 0===o?void 0:o.ad_hoc_max_amount,placeholder:this.placeholder,required:this.required,value:null===(s=this.lineItem)||void 0===s?void 0:s.ad_hoc_amount.toString(),"show-code":this.showCode,help:this.help}),this.busy&&h("sc-block-ui",{style:{zIndex:"9"}}))}static get is(){return"sc-custom-order-price-input"}static get originalStyleUrls(){return{$:["sc-custom-order-price-input.css"]}}static get styleUrls(){return{$:["sc-custom-order-price-input.css"]}}static get properties(){return{priceId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Id of the price."},attribute:"price-id",reflect:!0},price:{type:"unknown",mutable:!0,complexType:{original:"Price",resolved:"Price",references:{Price:{location:"import",path:"../../../../types",id:"src/types.ts::Price"}}},required:!1,optional:!1,docs:{tags:[],text:"Stores the price"}},loading:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this loading"},attribute:"loading",reflect:!1,defaultValue:"false"},busy:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this busy"},attribute:"busy",reflect:!1,defaultValue:"false"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Label for the field."},attribute:"label",reflect:!1},placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Input placeholder."},attribute:"placeholder",reflect:!1},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this required?"},attribute:"required",reflect:!1},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Help text."},attribute:"help",reflect:!1},showCode:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Show the currency code?"},attribute:"show-code",reflect:!0},lineItems:{type:"unknown",mutable:!1,complexType:{original:"LineItem[]",resolved:"LineItem[]",references:{LineItem:{location:"import",path:"../../../../types",id:"src/types.ts::LineItem"}}},required:!1,optional:!1,docs:{tags:[],text:"Label for the choice."},defaultValue:"[]"}}}static get states(){return{fetching:{},lineItem:{}}}static get events(){return[{method:"scUpdateLineItem",name:"scUpdateLineItem",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Toggle line item event"},complexType:{original:"LineItemData",resolved:"LineItemData",references:{LineItemData:{location:"import",path:"../../../../types",id:"src/types.ts::LineItemData"}}}}]}static get watchers(){return[{propName:"lineItems",methodName:"handleLineItemsChange"}]}static get listeners(){return[{name:"scBlur",method:"handleBlur",target:void 0,capture:!1,passive:!1}]}}openWormhole(ScCustomOrderPriceInput,["busy","lineItems"],!1);