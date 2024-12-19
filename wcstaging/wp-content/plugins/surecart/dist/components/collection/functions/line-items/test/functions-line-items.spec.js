import{calculateInitialLineItems,getSessionId}from"../index";const prices=[{id:"price1",product_id:"product1",quantity:1,enabled:!0},{id:"price2",product_id:"product1",quantity:2,enabled:!0},{id:"price3",product_id:"product2",quantity:3,enabled:!0},{id:"price4",product_id:"product2",quantity:4,enabled:!0}];describe("Line items functions",(()=>{it("calculateInitialLineItems",(()=>{expect(calculateInitialLineItems(prices,"all")).toEqual([{price_id:"price1",quantity:1},{price_id:"price2",quantity:2},{price_id:"price3",quantity:3},{price_id:"price4",quantity:4}]),expect(calculateInitialLineItems(prices,"multiple")).toEqual([{price_id:"price1",quantity:1}]),expect(calculateInitialLineItems(prices,"single")).toEqual([{price_id:"price1",quantity:1}])})),describe("getSessionId",(()=>{it("Should be able to refresh",(async()=>{expect(getSessionId("asdf",{id:"existing"},!0)).toBe(!1)})),it("Should return the checkout session id if it already exists",(async()=>{expect(getSessionId("asdf",{id:"existing"})).toBe("existing")})),it("Should get the checkout session from the url, first",(async()=>{delete window.location,window.location=new URL("https://www.example.com?order=urltest"),expect(getSessionId("asdf",{})).toBe("urltest")})),it("Should get the checkout session from localstorage, second",(async()=>{jest.spyOn(window.localStorage.__proto__,"getItem"),window.localStorage.__proto__.getItem=jest.fn(),getSessionId("asdf",{}),expect(localStorage.getItem).toHaveBeenCalled()}))}))}));