import{r as g,b as k}from"./index.5a710757.js";import{u as w}from"./GoogleSearchConsole.c9d25148.js";import{u as W}from"./Wizard.f0faf80a.js";import{c as y}from"./Caret.662da1f3.js";import{S as x}from"./ConnectGoogleSearchConsole.e2d138ab.js";import{W as b,a as A,b as B}from"./Header.141374e8.js";import{W as G}from"./CloseAndExit.7f340eb6.js";import{_ as L}from"./Steps.bdb4957a.js";import{_ as T}from"./_plugin-vue_export-helper.249dac1d.js";import{u as F}from"./SetupWizardStore.f2a8f9f3.js";import{c as N,C as o,l as i,v as t,o as P,a as e,x as n,t as r}from"./runtime-dom.esm-bundler.6789c400.js";import"./default-i18n.54b5d8cd.js";import"./helpers.f95d5840.js";import"./translations.12335a6a.js";import"./addons.ef42f038.js";import"./upperFirst.96c04516.js";import"./_stringToArray.08127ca9.js";import"./toString.1401d490.js";import"./Logo.f6ea28bf.js";import"./Index.c4d148bc.js";const V={setup(){const{strings:l}=W({stage:"search-console"}),{connect:_,loading:d,strings:c}=w({returnTo:"setup-wizard"});return{composableStrings:g(l,c),connect:_,loading:d,optionsStore:k(),setupWizardStore:F()}},components:{SvgCircleCheck:y,SvgConnectGoogleSearchConsole:x,WizardBody:b,WizardCloseAndExit:G,WizardContainer:A,WizardHeader:B,WizardSteps:L},data(){return{strings:g(this.composableStrings,{})}},methods:{saveAndConnect(){this.loading=!0,this.setupWizardStore.saveWizard("searchConsole").then(()=>{this.connect()})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}}},E={class:"aioseo-wizard-search-console"},D={class:"header"},H={class:"aioseo-wizard-search-console__panel"},O={class:"aioseo-wizard-search-console__image"},R={class:"aioseo-wizard-search-console__content"},U={class:"aioseo-wizard-search-console__content-text"},Y={class:"aioseo-wizard-search-console__content-list"},j={class:"go-back"},q=e("div",{class:"spacer"},null,-1);function I(l,_,d,c,s,p){const h=t("wizard-header"),z=t("wizard-steps"),f=t("svg-connect-google-search-console"),a=t("svg-circle-check"),u=t("router-link"),m=t("base-button"),S=t("wizard-body"),v=t("wizard-close-and-exit"),C=t("wizard-container");return P(),N("div",E,[o(h),o(C,null,{default:i(()=>[o(S,null,{footer:i(()=>[e("div",j,[o(u,{to:c.setupWizardStore.getPrevLink,class:"no-underline"},{default:i(()=>[n("←")]),_:1},8,["to"]),n("   "),o(u,{to:c.setupWizardStore.getPrevLink},{default:i(()=>[n(r(s.strings.goBack),1)]),_:1},8,["to"])]),q,o(m,{type:"gray",onClick:p.skipStep},{default:i(()=>[n(r(s.strings.skipThisStep),1)]),_:1},8,["onClick"]),o(m,{type:"blue",loading:c.loading,onClick:p.saveAndConnect},{default:i(()=>[n(r(s.strings.connectToGoogleSearchConsole)+" →",1)]),_:1},8,["loading","onClick"])]),default:i(()=>[o(z),e("div",D,r(s.strings.connectToGoogleSearchConsole),1),e("div",H,[e("div",O,[o(f)]),e("div",R,[e("div",U,r(s.strings.syncYourSiteWithGsc),1),e("ul",Y,[e("li",null,[o(a),n(" "+r(s.strings.gscFeature1),1)]),e("li",null,[o(a),n(" "+r(s.strings.gscFeature2),1)]),e("li",null,[o(a),n(" "+r(s.strings.gscFeature3),1)]),e("li",null,[o(a),n(" "+r(s.strings.gscFeature4),1)])])])])]),_:1}),o(v)]),_:1})])}const mo=T(V,[["render",I]]);export{mo as default};