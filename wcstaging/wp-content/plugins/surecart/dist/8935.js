"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[8935],{488:function(n,r,t){t.d(r,{i:function(){return u},m:function(){return c},z:function(){return e}});var e=["bif","byr","clp","djf","gnf","isk","jpy","kmf","krw","pyg","rwf","ugx","vnd","vuv","xaf","xag","xau","xba","xbb","xbc","xbd","xdr","xof","xpd","xpf","xpt","xts"],c=function(n,r){return u(r)?n:n/100},u=function(n){var r;return e.includes(null===(r=null==n?void 0:n.toLowerCase)||void 0===r?void 0:r.call(n))}},1517:function(n,r,t){t.d(r,{a:function(){return c},b:function(){return _},c:function(){return p},d:function(){return i},g:function(){return u},i:function(){return o},p:function(){return l},t:function(){return a}});var e=t(488),c=function(n){return(null==n?void 0:n.amount_off)&&(null==n?void 0:n.currency)?u({amount:n.amount_off,currency:n.currency}):(null==n?void 0:n.percent_off)?wp.i18n.sprintf(wp.i18n.__("%1d%% off","surecart"),0|n.percent_off):""},u=function(n){var r=n.amount,t=n.currency,c=function(n,r){return e.z.includes(r)?n:n/100}(r,t);return"".concat(new Intl.NumberFormat(void 0,{style:"currency",currency:t}).format(parseFloat(c.toFixed(2))))},i=function(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"usd";return null===(n=new Intl.NumberFormat(void 0,{style:"currency",currency:r}).formatToParts().find((function(n){return"currency"===n.type})))||void 0===n?void 0:n.value},a=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:wp.i18n.__("every","surecart"),e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:wp.i18n.__("once","surecart"),c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];switch(r){case"day":return"".concat(t," ").concat(wp.i18n.sprintf(c?wp.i18n._n("%d day","%d days",n,"surecart"):wp.i18n._n("day","%d days",n,"surecart"),n));case"week":return"".concat(t," ").concat(wp.i18n.sprintf(c?wp.i18n._n("%d week","%d weeks",n,"surecart"):wp.i18n._n("week","%d weeks",n,"surecart"),n));case"month":return"".concat(t," ").concat(wp.i18n.sprintf(c?wp.i18n._n("%d month","%d months",n,"surecart"):wp.i18n._n("month","%d months",n,"surecart"),n));case"year":return"".concat(t," ").concat(wp.i18n.sprintf(c?wp.i18n._n("%d year","%d years",n,"surecart"):wp.i18n._n("year","%d years",n,"surecart"),n));default:return e}},o=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!n)return"";var t=r.showOnce,e=r.labels,c=r.abbreviate,u=(e||{}).interval,i=void 0===u?wp.i18n.__("every","surecart"):u;return"".concat(s(n,i,t?wp.i18n.__("once","surecart"):"",c)," ").concat(d(n,c))},s=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:wp.i18n.__("once","surecart"),e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.recurring_interval_count&&n.recurring_interval&&1!==(null==n?void 0:n.recurring_period_count)?e?function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:wp.i18n.__("once","surecart"),e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];switch(r){case"day":return" / ".concat(wp.i18n.sprintf(e?wp.i18n._n("%d day","%d days",n,"surecart"):wp.i18n._n("day","%d days",n,"surecart"),n));case"week":return" / ".concat(wp.i18n.sprintf(e?wp.i18n._n("%d wk","%d wks",n,"surecart"):wp.i18n._n("wk","%d wks",n,"surecart"),n));case"month":return" / ".concat(wp.i18n.sprintf(e?wp.i18n._n("%d mo","%d months",n,"surecart"):wp.i18n._n("mo","%d mos",n,"surecart"),n));case"year":return" / ".concat(wp.i18n.sprintf(e?wp.i18n._n("%d yr","%d yrs",n,"surecart"):wp.i18n._n("yr","%d yrs",n,"surecart"),n));default:return t}}(n.recurring_interval_count,n.recurring_interval,t):a(n.recurring_interval_count,n.recurring_interval," ".concat(r),t):""},d=function(n){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(null==n?void 0:n.recurring_period_count)&&1!==(null==n?void 0:n.recurring_period_count)?r?"x ".concat(n.recurring_period_count):" (".concat(wp.i18n.sprintf(wp.i18n._n("%d payment","%d payments",n.recurring_period_count,"surecart"),n.recurring_period_count),")"):""},_=function(n){return wp.i18n.sprintf(wp.i18n._n("%d payment remaining","%d payments remaining",n,"surecart"),n)},l=function(n){var r;return n?"".concat(null===(r=null==n?void 0:n.product)||void 0===r?void 0:r.name," ").concat((null==n?void 0:n.name)?"— ".concat(n.name):""):""},p=function(n){switch(n){case"invalid":return wp.i18n.__("Not valid","surecart");case"expired":return wp.i18n.__("Expired","surecart");case"gone":return wp.i18n.__("Not available","surecart");case"less_than_min_subtotal_amount":return wp.i18n.__("Minimum not met","surecart");case"greater_than_max_subtotal_amount":return wp.i18n.__("Order too large","surecart");case"not_applicable":return wp.i18n.__("Product(s) not eligible","surecart");case"not_applicable_to_customer":return wp.i18n.__("Not eligible","surecart");case"":return"";default:return wp.i18n.__("Not redeemable","surecart")}}},8935:function(n,r,t){t.r(r),t.d(r,{sc_format_interval:function(){return a}});var e=t(3029),c=t(2901),u=t(1346),i=t(1517),a=function(){return(0,c.A)((function n(r){(0,e.A)(this,n),(0,u.r)(this,r),this.value=0,this.interval="",this.every="/",this.fallback=""}),[{key:"render",value:function(){return(0,i.t)(this.value,this.interval," ".concat(this.every),this.fallback)}}])}()}}]);