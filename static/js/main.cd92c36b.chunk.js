(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{119:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(16),s=t.n(r),l=t(63),o=t(1),m=(t(72),t(41)),i=t.n(m),d=t(42),A=t.n(d),u=t(43),p=t.n(u),E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-md-12 pr-0 pl-0",id:"top"},n.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{className:"carousel-indicators"},n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),n.a.createElement("div",{className:"carousel-inner"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("img",{src:i.a,className:"d-block w-100 imgBg",alt:"edificios"})),n.a.createElement("div",{class:"carousel-item"},n.a.createElement("img",{src:A.a,className:"d-block w-100 imgBg",alt:"escritorio"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{src:p.a,className:"d-block w-100 imgBg",alt:"focos"}))))))},g=t(44),N=t.n(g),x=t(8),b=function(){return n.a.createElement("div",{className:" footer row mx-0 justify-content-around"},n.a.createElement("div",{className:"text-center col-12 title col-md-6 pt-1 pt-md-5 order-md-1 order-2"},n.a.createElement("p",null,"Copyright 2020 - Decodevs todos los derechos reservados")),n.a.createElement("div",{className:"position-absolute align-self-end"},n.a.createElement(x.Link,{to:"top",spy:!0,smooth:!0,duration:800}," ",n.a.createElement("img",{className:"flecha",src:N.a,alt:"flecha"}))),n.a.createElement("div",{className:"col-12 col-md-4 order-1 order-md-2",id:"contacto"},n.a.createElement("h2",{className:" mt-4 title text-center"},"Nuestras Redes"),n.a.createElement("div",{className:"text-center text-md-right pr-md-5 my-3 my-md-0 "},n.a.createElement("a",{href:"http://bit.ly/decodevs",target:"_blank",className:"text-dark text-decoration-none"},"+ 54 9 381 6261384 ",n.a.createElement("i",{className:"fab redesIcon my-2 fa-whatsapp ml-3 wtsap"})),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.facebook.com/dcdsolucionesweb",target:"_blank",className:"text-dark text-decoration-none"},"Decodevs ",n.a.createElement("i",{className:"fab redesIcon my-2 fa-facebook ml-3 fb"})),n.a.createElement("br",null),n.a.createElement("a",{href:"!#",className:"text-dark text-decoration-none"},"contacto@decodevs.com ",n.a.createElement("i",{className:"far redesIcon my-2 fa-envelope ml-3 gmail"})))))},f=t(23),v=t.n(f),h=t(45),T=t(17),y=t(24),w=t(11),D=t(46),k=t.n(D),j=t(47),M=t.n(j);var U=function(){var e=n.a.useState({}),a=Object(w.a)(e,2),t=a[0],c=a[1],r=n.a.useRef(null),s=n.a.useRef(null),l=function(e){c(Object(y.a)(Object(y.a)({},t),{},Object(T.a)({},e.target.name,e.target.value)))},o=function(){var e=Object(h.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,k.a.post("/api/v1/form",t);case 4:M.a.fire({icon:"success",title:"Envio Exitoso. Pronto responderemos tu consulta"}),s.current.reset(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"container-fluid pt-3 pb-3 text-white imgBgForm",id:"contacto"},n.a.createElement("h2",{className:"title text-center text-black display-4",ref:r},"Contacto"),n.a.createElement("p",{className:"title text-center"},"\xbfTen\xe9s una idea y quer\xe9s plasmarla? \xa1Nosotros te ayudamos!"),n.a.createElement("p",{className:"title text-center"},"Dejanos tu mensaje en el siguiente formulario de contacto y pronto nos comunicaremos."),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row mx-0 justify-content-center flex-wrap"},n.a.createElement("div",{className:"col-md-5 px-0 order-1 order-md-2"},n.a.createElement("form",{ref:s},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",id:"nombre",className:"form-control rounded-lg",name:"name","aria-describedby":"emailHelp",onChange:l,maxLength:"10",placeholder:"Nombre Completo"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control rounded-lg",name:"email",id:"email",onChange:l,maxLength:"50",placeholder:"mail@ejemplo.com"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{type:"text",rows:"4",className:"form-control rounded-lg",name:"textarea",id:"message",onChange:l,maxLength:"200",placeholder:"Escribe un Mensaje"})),n.a.createElement("button",{type:"submit",className:"btn btn-dark font-weight-bold boton",onClick:o},"Enviar"))))))},B=t(48),C=t(49),I=t(66),G=t(65),R=t(50),S=t.n(R),J=t(51),L=t.n(J),Q=t(52),F=t.n(Q),O=t(53),V=t.n(O),W=t(54),Y=t.n(W),Z=t(55),P=t.n(Z),H=(t(115),t(116),function(e){Object(I.a)(t,e);var a=Object(G.a)(t);function t(){return Object(B.a)(this,t),a.apply(this,arguments)}return Object(C.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"lang pt-4 pb-3"},n.a.createElement("div",{id:"",className:"","data-ride":""},n.a.createElement("div",{className:"pb-1"},n.a.createElement("h2",{className:"title text-center display-4"},"Dise\xf1amos"),n.a.createElement("p",{className:"title text-center"},"Tu proyecto con los \xfaltimos lenguajes de programaci\xf3n")),n.a.createElement(P.a,Object.assign({className:""},{arrows:!1,dots:!1,infinite:!0,slidesToShow:4,slidesToScroll:1,autoplay:!0,speed:2e3,autoplaySpeed:2e3,cssEase:"linear"}),n.a.createElement("div",{className:""},n.a.createElement("img",{src:S.a,className:"d-block w-100 imgLang",alt:"html5"})),n.a.createElement("div",{className:""},n.a.createElement("img",{src:L.a,className:"d-block w-100 imgLang",alt:"css"})),n.a.createElement("div",{className:""},n.a.createElement("img",{src:F.a,className:"d-block w-100 imgLang",alt:"Javascript"})),n.a.createElement("div",{className:""},n.a.createElement("img",{src:V.a,className:"d-block w-100 imgLang",alt:"react-Js"})),n.a.createElement("div",{className:""},n.a.createElement("img",{src:Y.a,className:"d-block w-100 imgLang",alt:"bootstrap"})))))}}]),t}(n.a.Component)),K=t(56),X=t.n(K),q=t(57),z=t.n(q),_=t(58),$=t.n(_),ee=function(){return n.a.createElement("div",{className:"container-fluid my-4",id:"proyectos"},n.a.createElement("h2",{className:"text-center display-4 subtitle mb-3"},"Proyectos"),n.a.createElement("div",{className:"card-deck mx-auto "},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:z.a,className:"card-img-top imgProyect",width:"",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Asturias Foods & Drinks "),n.a.createElement("p",{className:"card-text"}))),n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:X.a,className:"card-img-top imgProyect",height:"",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Del Valle Cr\xe9ditos"),n.a.createElement("p",{className:"card-text"}))),n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:$.a,className:"card-img-top imgProyect ",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Norte Tabacos"),n.a.createElement("p",{className:"card-text"})))))},ae=t(59),te=t.n(ae),ce=t(60),ne=t.n(ce),re=t(61),se=t.n(re),le=function(){return n.a.createElement("div",{className:"container-fluid my-4",id:"nosotros"},n.a.createElement("h2",{className:"text-center display-4 subtitle"},"Nosotros"),n.a.createElement("div",{className:"row mx-auto justify-content-around"},n.a.createElement("div",{className:"foto"},n.a.createElement("img",{src:te.a,width:"200",height:"200",className:"",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Andres Perlo"),n.a.createElement("p",{className:"card-text"},"Desarrollador Web Backend"))),n.a.createElement("div",{className:"foto"},n.a.createElement("img",{src:ne.a,className:"",width:"200",height:"200",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Marco Baiad"),n.a.createElement("p",{className:"card-text"},"Desarrollador Web Fullstack"))),n.a.createElement("div",{className:"foto"},n.a.createElement("img",{src:se.a,className:"",width:"200",height:"200",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},"Martin Sandander"),n.a.createElement("p",{className:"card-text"},"Desarrollador Web Frontend")))))};var oe=function(){return n.a.createElement("div",null,n.a.createElement(E,null),n.a.createElement(H,null),n.a.createElement(ee,null),n.a.createElement(U,null),n.a.createElement(le,null),n.a.createElement(b,null))},me=t(62),ie=t.n(me);var de=function(){var e=Object(c.useState)(),a=Object(w.a)(e,2),t=a[0],r=a[1],s=Object(c.useState)(),l=Object(w.a)(s,2),o=l[0],m=l[1],i=n.a.useRef(),d=function(){var e=document.getElementById("carouselExampleIndicators");r(i.current.offsetTop),m(e.clientHeight),o>t&&i.current.classList.remove("navTransparent"),window.pageYOffset>o&&i.current.classList.add("navTransparent")};return n.a.useEffect((function(){d()}),[]),window.onscroll=d,n.a.createElement("nav",{className:"navbar-dark navbar navbar-expand-md fixed-top",ref:i},n.a.createElement(x.Link,{className:"navbar-brand text-white",to:"top",spy:!0,smooth:!0,duration:800},"<Decodevs_/>"),n.a.createElement("img",{src:ie.a,className:"navbar-toggler btn-menu",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}),n.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(x.Link,{className:"nav-link text-white pb-0 mb-0",to:"nosotros",spy:!0,smooth:!0,duration:800},"Nosotros",n.a.createElement("span",{className:"sr-only"},"(current)")),n.a.createElement(x.Link,{className:"nav-link text-white pb-0",to:"proyectos",spy:!0,offset:-80,smooth:!0,duration:800},"Proyectos"),n.a.createElement(x.Link,{className:"nav-link text-white pb-0",to:"contacto",spy:!0,offset:-60,smooth:!0,duration:800},"Contacto"))))};var Ae=function(){return n.a.createElement(l.a,null,n.a.createElement(de,null),n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",component:oe})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,a,t){e.exports=t.p+"static/media/panorama.3cd6b85b.jpg"},42:function(e,a,t){e.exports=t.p+"static/media/escritorio.f437cabc.jpg"},43:function(e,a,t){e.exports=t.p+"static/media/focos.3301ef96.jpg"},44:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAAD/UCD/Tx//Tx//Th3/UR7/UCD/Tx//Thz/Uh//Tx//Tx//TiH/UB7/UB//Tx//Tx//UCD/Tx7/Tx//UCH/UB3/Tx//Tx7/Th//UB//TiD/Tx//UB//UB3/TyD/AAD/TyD/TiD/TyD/AAD/VQD/Tx//TyD/Tx7/Tx//ZjP/VSv/Th//TiD/Tx//Tx//TyD/VRz/Rhf/Tx7/UB//Tx//Tx//Tx//SST/TR//Th//Th//Tx//Tx//TRr/USD/USD/Tx//UCD/Th//Th//TR//Tx//Tx7/TiD/Ux7/Th//UB//TyX/Uh//Tx//Tx//Uyb/VRz/Tx//Tx//TCb/VRX/UCD/TiD/SST/Tx//Tx//QAD/QAD/TyD/Tx//Tx7/TyD/Tx7/Tx8AAADkXnpkAAAAYXRSTlMAMPLGGjz63yRL/OcuXf3uOnD+9EaD+VSWY6n+c7aIAs/QkQEG2cd3pAUM5LFq/bIJFuydWvq/DiGKS/bLFG4/8cr+YjLp+0gi3fk3GdP1KBLH7xsMuugHrNwIBKH7q3FuQrIuXQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCwMXFjgJl9V3AAAA7klEQVQ4y2NgGHSAkYmZBZ88K1tiIjsHbnlOrkQg4ObBJc/LlwgG/ALY5QWFEqFAWASbvGgiAoiJY8pLJCIDLkl0ealEVCAtgyovm4gB5JCk5RXgwopKcKaSMkxeRRUuqMbAoA7naGhC5LW04UI6IL6uHoyrbwDiGxrB5Y0hOkxMYQJm5gwMFkxweUuYnVbWMCEbWwZhuMfsEK62d4CJOjLAWE7OyN52cYWJwxS4uaMGjIcnqgIvb/Sg9fFFVuDnjxk5AYEIBUHB2KI3JBSmICwAewIJj4AoiIzClcSiYxJjGeL05RlwAuX4BIahAADCF3Gnmx3tnQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMS0wM1QyMzoyMjo1NiswMDowMLzck98AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTEtMDNUMjM6MjI6NTYrMDA6MDDNgStjAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},50:function(e,a,t){e.exports=t.p+"static/media/html.0caacd80.svg"},51:function(e,a,t){e.exports=t.p+"static/media/css.4d785e94.svg"},52:function(e,a,t){e.exports=t.p+"static/media/js.4b48442d.svg"},53:function(e,a,t){e.exports=t.p+"static/media/rejs.a03a8833.svg"},54:function(e,a,t){e.exports=t.p+"static/media/bts4.cb0c27b1.svg"},56:function(e,a,t){e.exports=t.p+"static/media/dvc.3a293f4b.png"},57:function(e,a,t){e.exports=t.p+"static/media/asturias.b1a68e44.png"},58:function(e,a,t){e.exports=t.p+"static/media/tabaco.16bbcda4.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/Andres.1d66a9a9.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/marco.cc05cfe6.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/martin.656c0336.jpg"},62:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkCwMUKjkPJSJHAAAARklEQVRIx2NgGAWM/wUYDBmYydT9l+E84/+rDFoUOOAqE4U++M/4n5/BiAIvnKPQAaOAKmA0JY6mxMEBRlPiaEpkYGBgAADASx3d86y11QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMS0wM1QyMDo0Mjo1NyswMDowME/UPuYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTEtMDNUMjA6NDI6NTcrMDA6MDA+iYZaAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},67:function(e,a,t){e.exports=t(119)},72:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.cd92c36b.chunk.js.map