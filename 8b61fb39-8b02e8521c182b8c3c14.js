(self.webpackChunkdev_site_product_template=self.webpackChunkdev_site_product_template||[]).push([[714],{6561:function(e,i,t){"use strict";t.d(i,{a:function(){return k}});var n=t(9756),a=t(5007),s=t(4922),r=t(2905),o=t(7087),m=t(2390),l=t(5900),d=t.n(l);var c={2:0,3:0,4:0},p=["margin-left: 0;","margin-right: 0;"],g=function(e){var i=e.icons,t=e.isCentered;return i?(0,a.cloneElement)(i,{css:(0,s.iv)("list-style:none;padding:0;margin-bottom:var(--spectrum-global-dimension-size-400)!important;display:flex;justify-content:",t?"center":"flex-start",";& li{display:flex;border-right:1px solid var(--spectrum-global-color-gray-300);height:var(--spectrum-global-dimension-size-600);margin-right:var(--spectrum-global-dimension-size-150);}& li:last-of-type{padding-right:0;border-right:none;}.gatsby-resp-image-wrapper{position:relative;width:var(--spectrum-global-dimension-size-800)!important;}.gatsby-resp-image-image{position:absolute;top:0;left:0;height:100%;object-fit:contain;}","")}):null},u=function(e){var i=e.texts;return Object.keys(i).filter((function(e){return e.startsWith("text")})).map((function(e){return i[e]}))},h=function(e){var i=e.links,t=e.isCentered;return i?(0,a.cloneElement)(i,{css:(0,s.iv)("list-style:none;padding:0;display:flex;justify-content:",t?"center":"flex-start",";margin-top:",t?"var(--spectrum-global-dimension-size-200) !important;":"var(--spectrum-global-dimension-size-600) !important;",";& li{display:flex;align-items:center;height:var(--spectrum-global-dimension-size-400);}& li a{white-space:nowrap;margin-right:var(--spectrum-global-dimension-size-600);}& li:last-of-type a{margin-right:0;}.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-wrapper{width:var(--spectrum-global-dimension-size-400)!important;margin-left:0!important;margin-right:var(--spectrum-global-dimension-size-150)!important;}.gatsby-resp-image-image{object-fit:contain;}@media screen and (max-width: ",m.LU,"){flex-direction:column;align-items:",t?"center":"left",";li{margin-top:var(--spectrum-global-dimension-size-100);}li a{margin-right:0;}}","")}):null},b=function(e){var i=e.video,t=null;if(i){var n=(0,m.QK)(i),a=new URL(n.props.href);if(a.hostname.startsWith("youtube.com")||a.hostname.startsWith("www.youtube.com"))t=new URLSearchParams(a.search).get("v");else a.hostname.startsWith("youtu.be")&&(t=a.pathname.slice(1))}return t?(0,s.tZ)("div",{css:(0,s.iv)("&{display:inline;width:",(0,m.MY)(6),";box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",m.LU,"){display:block;width:100%;}}","")},(0,s.tZ)(o._F,{youTubeId:t})):null},v={name:"1p8rch3",styles:"margin-top:var(--spectrum-global-dimension-size-200)"},f={name:"1idn6nd",styles:"margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-200)!important;&+p{margin-top:0!important;}"},w={name:"k0oqwy",styles:"width:100%;background:var(--spectrum-global-color-gray-100)"},y={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},x={name:"1fdqnat",styles:"margin-top:var(--spectrum-global-dimension-size-150);margin-bottom:var(--spectrum-global-dimension-size-150);justify-content:center"},z={name:"1ykcbnq",styles:"margin-bottom:var(--spectrum-global-dimension-size-200)!important;&~p{margin-top:0;margin-bottom:0!important;}"},Z={name:"1vixyln",styles:"height:var(--spectrum-global-dimension-size-1000);margin-top:0;margin-bottom:var(--spectrum-global-dimension-size-300);.gatsby-resp-image-wrapper{position:relative;max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{position:absolute;top:0;left:0;height:100%;object-fit:contain;}"},k=function(e){var i=e.className,t=e.heading,o=e.links,l=e.buttons,k=e.icons,j=e.image,C=e.video,L=e.theme,U=void 0===L?"lightest":L,_=e.width,F=void 0===_?"100%":_,N=e.isCentered,W=void 0!==N&&N,E=(0,n.Z)(e,["className","heading","links","buttons","icons","image","video","theme","width","isCentered"]),H=100/parseFloat(F);"33%"===F&&(F=(100/3).toFixed(2)+"%",H=3);var M=(0,a.useState)(H)[0];if((0,a.useEffect)((function(){return function(){void 0!==c[M]&&c[M]--}}),[M]),W){var q="",A="";return void 0!==c[M]&&c[M]++,1===M?q="max-width: "+(0,m.MY)(6)+";":M>3?q="max-width: var(--spectrum-global-dimension-size-3600);":(q="max-width: var(--spectrum-global-dimension-size-4600);",A=p[c[M]%M]),(0,s.tZ)(a.default.Fragment,null,(0,s.tZ)("section",{className:d()(i,"spectrum--"+U),css:(0,s.iv)("display:table-cell;width:",F.replace("%","vw"),";background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-1000) 0;@media screen and (max-width: ",m.LU,"){display:block;width:100%;}","")},(0,s.tZ)("div",{css:(0,s.iv)(q," padding:0 var(--spectrum-global-dimension-size-400);margin:auto;",A,"@media screen and (max-width: ",m.LU,"){max-width:none;margin:auto;}","")},(0,s.tZ)(g,{icons:k,isCentered:W}),j&&(0,a.cloneElement)(j,{css:Z}),t&&(0,s.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeM",css:z},t.props.children),(0,s.tZ)(u,{texts:E}),(0,s.tZ)(r.F5,{buttons:l,css:x}),(0,s.tZ)(h,{links:o,isCentered:W}),C&&(0,s.tZ)("div",{css:y},(0,s.tZ)(b,{video:C})))),void 0!==c[M]&&c[M]%M==0?(0,s.tZ)("div",{"aria-hidden":"true"}):null)}var R=E.slots.endsWith("image")||E.slots.endsWith("video");return(0,s.tZ)("section",{className:d()(i,"spectrum--"+U),css:w},(0,s.tZ)("div",{css:(0,s.iv)("width:",m.Av,";box-sizing:border-box;margin:auto;padding:var(--spectrum-global-dimension-size-1000) 0;@media screen and (max-width: ",m.Av,"){width:100%;&>div{flex-direction:column!important;}}","")},(0,s.tZ)("div",{css:(0,s.iv)("display:flex;align-items:center;flex-direction:",R?"row-reverse":"row",";@media screen and (max-width: ",m.LU,"){flex-direction:column;}","")},j&&(0,a.cloneElement)(j,{css:(0,s.iv)("display:flex;align-items:center;justify-content:center;width:50%;height:calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-225));box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);margin-top:0;.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{object-fit:contain;}@media screen and (max-width: ",m.LU,"){height:auto;width:100%;}","")}),(0,s.tZ)(b,{video:C}),(0,s.tZ)("div",{css:(0,s.iv)("width:50%;display:flex;flex-direction:column;justify-content:center;text-align:left;box-sizing:border-box;padding:0 var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",m.LU,"){width:100%;margin:var(--spectrum-global-dimension-size-400) 0;}","")},(0,s.tZ)(g,{icons:k,isCentered:W}),t&&(0,s.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeM",css:f},t.props.children),(0,s.tZ)(u,{texts:E}),(0,s.tZ)(r.F5,{buttons:l,css:v}),(0,s.tZ)(h,{links:o,isCentered:W})))))}}}]);
//# sourceMappingURL=8b61fb39-8b02e8521c182b8c3c14.js.map