import{newSpecPage}from"@stencil/core/testing";import{ScPriceInput}from"../sc-price-input";describe("sc-price-input",(()=>{it("renders",(async()=>{const c=await newSpecPage({components:[ScPriceInput],html:"<sc-price-input></sc-price-input>"});expect(c.root).toMatchSnapshot()}))}));