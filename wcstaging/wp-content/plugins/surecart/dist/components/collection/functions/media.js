export const sizeImage=(l="",t,i="fit=scale-down,format=auto")=>{var o,d;return l.includes("surecart.com")&&(null===(o=window.scData)||void 0===o?void 0:o.cdn_root)?`${null===(d=window.scData)||void 0===d?void 0:d.cdn_root}/${i},width=${t}/${l}`:l};export const getFeaturedProductMediaAttributes=(l,t)=>{var i,o,d;const u=null==l?void 0:l.featured_product_media,e=null==t?void 0:t.image,a={alt:(null===(i=null==u?void 0:u.media)||void 0===i?void 0:i.alt)||(null==l?void 0:l.name),url:(null===(o=null==u?void 0:u.media)||void 0===o?void 0:o.url)||(null==l?void 0:l.image_url),title:(null===(d=null==u?void 0:u.media)||void 0===d?void 0:d.title)||""};return(null==e?void 0:e.url)&&(a.url=e.url,a.alt=a.alt||e.alt,a.title=a.title||e.title),a};