(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var s=c(1),r=c.n(s),i=c(3),n=c.n(i),d=(c(9),c(4)),a=(c(10),c(0));var l=function(){var t=Array.from(Array(100).keys()),e=Object(s.useState)(0),c=Object(d.a)(e,2),r=c[0],i=c[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("h1",{children:"Audio Samples"}),"Audio samples from LibriTTS"]}),Object(a.jsxs)("div",{className:"container",children:["Choose a range:\xa0",Object(a.jsx)("select",{onChange:function(t){i(t.target.value)},children:t.map((function(t){return Object(a.jsxs)("option",{value:t,children:[10*t," - ",10*t+9]})}))}),Object(a.jsxs)("table",{class:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Sample"}),Object(a.jsx)("td",{children:"Source"}),Object(a.jsx)("td",{children:"Target"}),Object(a.jsx)("td",{children:"Adain-VC"}),Object(a.jsx)("td",{children:"Ours (Same)"}),Object(a.jsx)("td",{children:"Ours (Diff + Cycle + Speaker)"})]})}),Object(a.jsx)("tbody",{children:Array.from(Array(10).keys()).map((function(t){var e=("00"+(10*r+t)).slice(-3);return Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:["Sample ",r+t]}),Object(a.jsx)("td",{children:Object(a.jsx)("audio",{style:{width:220},src:"/ssl_vc"+"/audio/libritts/src/s".concat(e,".wav"),controls:!0})}),Object(a.jsx)("td",{children:Object(a.jsx)("audio",{style:{width:220},src:"/ssl_vc"+"/audio/libritts/tgt/t".concat(e,".wav"),controls:!0})}),Object(a.jsx)("td",{children:Object(a.jsx)("audio",{style:{width:220},src:"/ssl_vc"+"/audio/libritts/adainvc/c".concat(e,".wav"),controls:!0})}),Object(a.jsx)("td",{children:Object(a.jsx)("audio",{style:{width:220},src:"/ssl_vc"+"/audio/libritts/same-part/c".concat(e,".wav"),controls:!0})}),Object(a.jsx)("td",{children:Object(a.jsx)("audio",{style:{width:220},src:"/ssl_vc"+"/audio/libritts/diff-part-cycle-clf/c".concat(e,".wav"),controls:!0})})]})}))})]})]})]})},j=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(e){var c=e.getCLS,s=e.getFID,r=e.getFCP,i=e.getLCP,n=e.getTTFB;c(t),s(t),r(t),i(t),n(t)}))};n.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),j()},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.763d5c2b.chunk.js.map