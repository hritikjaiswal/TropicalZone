import{newSpecPage}from"@stencil/core/testing";import{h}from"@stencil/core";import{ScProductDonationChoice}from"../sc-product-donation-choices";describe("sc-product-donation-choices",(()=>{it("renders",(async()=>{const o=await newSpecPage({components:[ScProductDonationChoice],template:()=>h("sc-product-donation-choices",null)});expect(o.root).toMatchSnapshot()}))}));