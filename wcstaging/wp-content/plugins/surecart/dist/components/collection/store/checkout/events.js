import"../checkouts/events";import state,{on}from"./store";on("set",((t,e,i)=>{if("checkout"!==t)return;if(null==i?void 0:i.id)return;if(!(null==e?void 0:e.id))return;if(!state.isCheckoutPage)return;const n=new CustomEvent("scCheckoutInitiated",{detail:e,bubbles:!0});document.dispatchEvent(n)})),on("set",((t,e,i)=>{var n,u;if("checkout"!==t)return;if(!(null==e?void 0:e.status)||(null==i?void 0:i.status)===(null==e?void 0:e.status))return;if(!["paid","processing"].includes(e.status))return;const o=new CustomEvent("scOrderPaid",{detail:e,bubbles:!0});document.dispatchEvent(o);const s=new CustomEvent("scCheckoutCompleted",{detail:e,bubbles:!0});document.dispatchEvent(s);const c=((null===(n=null==e?void 0:e.line_items)||void 0===n?void 0:n.data)||[]).filter((t=>{var e;return(null===(e=null==t?void 0:t.price)||void 0===e?void 0:e.trial_duration_days)>0}));if(c.length>0){const t=new CustomEvent("scTrialStarted",{detail:c,bubbles:!0});document.dispatchEvent(t)}const d=((null===(u=null==e?void 0:e.line_items)||void 0===u?void 0:u.data)||[]).filter((t=>{var e;return(null===(e=null==t?void 0:t.price)||void 0===e?void 0:e.recurring_interval_count)>0}));if(d.length>0){const t=new CustomEvent("scSubscriptionStarted",{detail:d,bubbles:!0});document.dispatchEvent(t)}})),on("set",((t,e,i)=>{if("checkout"!==t)return;if(!state.isCheckoutPage)return;if(!(null==e?void 0:e.selected_shipping_choice))return;if((null==i?void 0:i.selected_shipping_choice)===(null==e?void 0:e.selected_shipping_choice))return;const n=new CustomEvent("scShippingInfoAdded",{detail:e,bubbles:!0});document.dispatchEvent(n)})),on("set",((t,e,i)=>{if("checkout"!==t)return;if(!state.isCheckoutPage)return;if(!(null==i?void 0:i.id))return;if(JSON.stringify(e)===JSON.stringify(i))return;const n=new CustomEvent("scCheckoutUpdated",{detail:{currentCheckout:e,previousCheckout:i},bubbles:!0});document.dispatchEvent(n)}));