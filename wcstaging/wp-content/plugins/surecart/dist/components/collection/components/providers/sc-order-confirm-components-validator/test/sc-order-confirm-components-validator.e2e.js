import{newE2EPage}from"@stencil/core/testing";describe("sc-order-confirm-components-validator",(()=>{it("renders",(async()=>{const o=await newE2EPage();await o.setContent("<sc-order-confirm-components-validator></sc-order-confirm-components-validator>");const e=await o.find("sc-order-confirm-components-validator");expect(e).toHaveClass("hydrated")}))}));