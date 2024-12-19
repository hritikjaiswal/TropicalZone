import{newSpecPage}from"@stencil/core/testing";import{dispose as disposeCheckout,state as checkoutState}from"../../../../../store/checkout/index";import{dispose as disposeUser,state as userState}from"../../../../../store/user/index";import{ScCustomerEmail}from"../sc-customer-email";describe("sc-customer-email",(()=>{beforeEach((()=>{disposeCheckout(),disposeUser()}));const e=[{testLabel:"Customer and Checkout email provided",checkout:{email:"CheckoutEmail",customer:{email:"CustomerEmail"}}},{testLabel:"Customer email provided",checkout:{customer:{email:"CustomerEmail"}}},{testLabel:"Checkout email provided",checkout:{email:"CheckoutEmail"}}];function t(e){global.window=Object.create(window),Object.defineProperty(window,"location",{value:{search:e?new URLSearchParams("?email=UrlEmail").toString():""},writable:!0})}describe.each(e)("Logged In",(e=>{describe("Url Params",(()=>{it(e.testLabel,(async()=>{t(!0),userState.loggedIn=!0,checkoutState.checkout=e.checkout;const c=await newSpecPage({components:[ScCustomerEmail],html:"<sc-customer-email></sc-customer-email>"});expect(c.root).toMatchSnapshot(),c.rootInstance.disconnectedCallback()}))})),describe("Without Url Params",(()=>{it(e.testLabel,(async()=>{t(!1),userState.loggedIn=!0,checkoutState.checkout=e.checkout;const c=await newSpecPage({components:[ScCustomerEmail],html:"<sc-customer-email></sc-customer-email>"});expect(c.root).toMatchSnapshot(),c.rootInstance.disconnectedCallback()}))}))})),describe.each(e)("Logged Out",(e=>{it(`${e.testLabel} with URL Params`,(async()=>{t(!0),userState.loggedIn=!1,checkoutState.checkout=e.checkout;const c=await newSpecPage({components:[ScCustomerEmail],html:"<sc-customer-email></sc-customer-email>"});expect(c.root).toMatchSnapshot(),c.rootInstance.disconnectedCallback()})),it(`${e.testLabel} without URL Params`,(async()=>{t(!1),userState.loggedIn=!1,checkoutState.checkout=e.checkout;const c=await newSpecPage({components:[ScCustomerEmail],html:"<sc-customer-email></sc-customer-email>"});expect(c.root).toMatchSnapshot(),c.rootInstance.disconnectedCallback()}))}))}));