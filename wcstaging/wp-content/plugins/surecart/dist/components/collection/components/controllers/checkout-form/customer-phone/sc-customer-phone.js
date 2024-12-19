import{h}from"@stencil/core";import{state as checkoutState,onChange}from"../../../../store/checkout/index";export class ScCustomerPhone{constructor(){this.size="medium",this.value="",this.pill=!1,this.label=void 0,this.showLabel=!0,this.help="",this.placeholder=void 0,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.autofocus=void 0,this.hasFocus=void 0,this.error=void 0}async handleChange(){this.value=this.input.value,this.scChange.emit()}async reportValidity(){var e,t;return null===(t=null===(e=this.input)||void 0===e?void 0:e.reportValidity)||void 0===t?void 0:t.call(e)}componentWillLoad(){this.handleCheckoutChange(),this.removeChangeListener=onChange("checkout",(()=>this.handleCheckoutChange()))}disconnectedCallback(){this.removeChangeListener()}handleCheckoutChange(){var e,t,o,l,a,i;(null==this?void 0:this.value)||((null===(e=checkoutState.checkout)||void 0===e?void 0:e.phone)?this.value=null===(t=checkoutState.checkout)||void 0===t?void 0:t.phone:(null===(l=null===(o=checkoutState.checkout)||void 0===o?void 0:o.customer)||void 0===l?void 0:l.phone)&&(this.value=null===(i=null===(a=checkoutState.checkout)||void 0===a?void 0:a.customer)||void 0===i?void 0:i.phone))}render(){return h("sc-phone-input",{key:"ffa46581cc85dead7a0ca10463dee021f0496ab4",name:"phone",ref:e=>this.input=e,value:this.value,label:this.label,help:this.help,autocomplete:"phone",placeholder:this.placeholder,readonly:this.readonly,required:this.required,invalid:this.invalid,autofocus:this.autofocus,hasFocus:this.hasFocus,onScChange:()=>this.handleChange(),onScInput:()=>this.scInput.emit(),onScFocus:()=>this.scFocus.emit(),onScBlur:()=>this.scBlur.emit()})}static get is(){return"sc-customer-phone"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-customer-phone.css"]}}static get styleUrls(){return{$:["sc-customer-phone.css"]}}static get properties(){return{size:{type:"string",mutable:!1,complexType:{original:"'small' | 'medium' | 'large'",resolved:'"large" | "medium" | "small"',references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's size."},attribute:"size",reflect:!0,defaultValue:"'medium'"},value:{type:"string",mutable:!0,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's value attribute."},attribute:"value",reflect:!1,defaultValue:"''"},pill:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Draws a pill-style input with rounded edges."},attribute:"pill",reflect:!0,defaultValue:"false"},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's label."},attribute:"label",reflect:!1},showLabel:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Should we show the label"},attribute:"show-label",reflect:!1,defaultValue:"true"},help:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's help text."},attribute:"help",reflect:!1,defaultValue:"''"},placeholder:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's placeholder text."},attribute:"placeholder",reflect:!1},disabled:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Disables the input."},attribute:"disabled",reflect:!0,defaultValue:"false"},readonly:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the input readonly."},attribute:"readonly",reflect:!0,defaultValue:"false"},required:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Makes the input a required field."},attribute:"required",reflect:!0,defaultValue:"false"},invalid:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"This will be true when the control is in an invalid state. Validity is determined by props such as `type`,\n`required`, `minlength`, `maxlength`, and `pattern` using the browser's constraint validation API."},attribute:"invalid",reflect:!0,defaultValue:"false"},autofocus:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The input's autofocus attribute."},attribute:"autofocus",reflect:!1},hasFocus:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Inputs focus"},attribute:"has-focus",reflect:!0},error:{type:"boolean",mutable:!0,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Error focus"},attribute:"error",reflect:!1}}}static get events(){return[{method:"scChange",name:"scChange",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control's value changes."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scClear",name:"scClear",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the clear button is activated."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scInput",name:"scInput",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control receives input."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scFocus",name:"scFocus",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control gains focus."},complexType:{original:"void",resolved:"void",references:{}}},{method:"scBlur",name:"scBlur",bubbles:!0,cancelable:!0,composed:!0,docs:{tags:[],text:"Emitted when the control loses focus."},complexType:{original:"void",resolved:"void",references:{}}}]}static get methods(){return{reportValidity:{complexType:{signature:"() => Promise<boolean>",parameters:[],references:{Promise:{location:"global",id:"global::Promise"}},return:"Promise<boolean>"},docs:{text:"",tags:[]}}}}}