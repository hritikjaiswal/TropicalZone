import{newE2EPage}from"@stencil/core/testing";describe("sc-order-confirm-provider",(()=>{it("renders",(async()=>{const r=await newE2EPage();await r.setContent("<sc-order-confirm-provider></sc-order-confirm-provider>");const e=await r.find("sc-order-confirm-provider");expect(e).toHaveClass("hydrated")}))}));