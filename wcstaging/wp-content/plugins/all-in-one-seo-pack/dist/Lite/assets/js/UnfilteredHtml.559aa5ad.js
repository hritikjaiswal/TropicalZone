import{G as e}from"./constants.2019bcb3.js";import{u as n,l as s}from"./index.5a710757.js";import{C as a}from"./Caret.662da1f3.js";import"./translations.12335a6a.js";import{_ as c}from"./_plugin-vue_export-helper.249dac1d.js";import{s as l,_ as i}from"./default-i18n.54b5d8cd.js";import{v as u,o as p,k as m,b as _}from"./runtime-dom.esm-bundler.6789c400.js";const f="all-in-one-seo-pack",d={setup(){return{rootStore:n()}},components:{CoreAlert:a},data(){return{strings:{unfilteredHtmlError:l(i("Your user account role does not have access to edit this field. %1$s",f),s.getDocLink(e.learnMore,"unfilteredHtml",!0))}}}};function y(g,k,H,r,o,L){const t=u("core-alert");return r.rootStore.aioseo.user.unfilteredHtml?_("",!0):(p(),m(t,{key:0,class:"no-access",type:"red",innerHTML:o.strings.unfilteredHtmlError},null,8,["innerHTML"]))}const G=c(d,[["render",y]]);export{G as C};
