(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},1494:function(t,e,i){t.exports=i.p+"img/avatar-richard.a2c4b430.png"},"161e":function(t,e,i){"use strict";i("ca5c")},1771:function(t,e,i){var n={"./avatar-ali.png":"ae8d","./avatar-anisha.png":"1f0a","./avatar-richard.png":"1494","./avatar-shanai.png":"5ead","./bg-simplify-section-desktop.svg":"a797","./bg-simplify-section-mobile.svg":"7b8c","./bg-tablet-pattern.svg":"a759","./icon-close.svg":"9e40","./icon-facebook.svg":"431d","./icon-hamburger.svg":"823a","./icon-instagram.svg":"8158","./icon-pinterest.svg":"a952","./icon-twitter.svg":"5cfb","./icon-youtube.svg":"63ec","./illustration-intro.svg":"fc6c","./logo-white.svg":"f295","./logo.svg":"9b19"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="1771"},"179c":function(t,e,i){},"1f0a":function(t,e,i){t.exports=i.p+"img/avatar-anisha.d591dc60.png"},"244b":function(t,e,i){"use strict";i("f6a4")},3340:function(t,e,i){},"33e0":function(t,e,i){"use strict";i("179c")},"376e":function(t,e,i){},"3e31":function(t,e,i){},"431d":function(t,e,i){t.exports=i.p+"manage-landing-page/img/icon-facebook.1a81861b.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Overlay",{attrs:{menu:t.getMenuState}}),i("div",{staticClass:"second-bg"},[i("div",{staticClass:"hero"},[i("AppHeader",{on:{menuAction:function(e){t.menu=!t.menu}}}),i("AppHero")],1),i("AboutManage")],1),i("TestimonialsList"),i("SimplifyBlock"),i("AppFooter")],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"split"},[n("img",{staticClass:"logo",attrs:{src:i("9b19"),alt:"Manage logo"}}),n("div",{staticClass:"navigation"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],attrs:{src:i("9e40"),alt:"Menu close icon",id:"close-icon"},on:{click:t.toggleMenu}}),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.menuOpen,expression:"!menuOpen"}],attrs:{src:i("823a"),alt:"Menu icon",id:"menu-icon"},on:{click:t.toggleMenu}}),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen||t.desktopView,expression:"menuOpen || desktopView"}]},[t._m(0),t._m(1)])])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"navigation-links"},[i("li",[i("a",{attrs:{href:"#"}},[t._v("Pricing")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Product")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("About Us")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Careers")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Community")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn"},[i("span",[t._v("Get Started")])])}],c={name:"AppHeader",data:function(){return{isOpen:!1,windowSize:window.innerWidth}},computed:{menuOpen:function(){return this.isOpen},getWindowSize:function(){return this.windowSize},desktopView:function(){return this.getWindowSize>=1440}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen,this.$emit("menuAction",this.isOpen)},windowListener:function(){var t=this;window.addEventListener("resize",(function(){t.windowSize=window.innerWidth,t.getWindowSize<1440&&(t.isOpen=!1)}))}},updated:function(){this.windowListener()}},l=c,u=(i("ac0b"),i("2877")),d=Object(u["a"])(l,r,o,!1,null,"0a17a9c2",null),m=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"split"},[n("div",{staticClass:"hero-content"},[n("h1",{staticClass:"heading"},[t._v("Bring everyone together to build better products.")]),n("p",{staticClass:"desc"},[t._v(" Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view. ")]),n("div",{staticClass:"btn"},[n("span",[t._v("Get Started")])])]),n("img",{staticClass:"illustration",attrs:{src:i("fc6c"),alt:"Three statistical charts"}})])])}],v={name:"AppHero"},g=v,h=(i("9953"),Object(u["a"])(g,p,f,!1,null,"676410c8",null)),w=h.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"split"},[t._m(0),i("div",{staticClass:"right"},[i("FeatureList")],1)])])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left"},[i("h2",{staticClass:"heading"},[t._v("What's different about Manage?")]),i("p",{staticClass:"subheading"},[t._v("Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. ")])])}],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},t._l(t.features,(function(t,e){return i("Feature",{key:e,attrs:{title:t.title,description:t.description,id:t.id}})})),1)},k=[],x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h4",{staticClass:"heading",attrs:{"data-id":t.id}},[t._v(t._s(t.title))]),i("p",{staticClass:"desc"},[t._v(t._s(t.description))])])},C=[],E={name:"Feature",props:{id:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}}},O=E,S=(i("b040"),Object(u["a"])(O,x,C,!1,null,"7e0d950d",null)),T=S.exports,M={name:"FeatureList",components:{Feature:T},data:function(){return{features:[{id:"01",title:"Track company-wide progress",description:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."},{id:"02",title:"Advanced built-in reports",description:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."},{id:"03",title:"Everything you need in one place",description:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}]}}},N=M,$=(i("161e"),Object(u["a"])(N,y,k,!1,null,"6e3355f6",null)),j=$.exports,A={name:"AboutManage",components:{FeatureList:j}},W=A,L=(i("604e"),Object(u["a"])(W,b,_,!1,null,"e32e8a86",null)),P=L.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h2",{staticClass:"heading"},[t._v("What they've said")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.desktopView,expression:"!desktopView"}],staticClass:"testimonials"},t._l(t.testimonials,(function(e){return i("Testimonial",{directives:[{name:"show",rawName:"v-show",value:t.selectedTestimonial===e.id,expression:"selectedTestimonial === testimonial.id"}],key:e.id,staticClass:"testimonial",attrs:{id:e.id,img:e.img,fullName:e.fullName,testimonialText:e.testimonialText}})})),1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.desktopView,expression:"desktopView"}],staticClass:"h-scroll"},[i("div",{staticClass:"testimonials-desktop",attrs:{id:"desktop-list"},on:{mousemove:t.scrollTestimonials}},t._l(t.testimonials,(function(t){return i("Testimonial",{key:t.id,staticClass:"testimonial-desktop",attrs:{id:t.id,img:t.img,fullName:t.fullName,testimonialText:t.testimonialText}})})),1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.desktopView,expression:"!desktopView"}],staticClass:"pagination"},t._l(t.testimonials,(function(e){return i("span",{key:e.id,staticClass:"dot",class:{active:t.selectedTestimonial==e.id},on:{click:function(i){return t.selectSlide(e.id)}}})})),0),t._m(0)])},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn"},[i("span",[t._v("Get Started")])])}],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("img",{staticClass:"profile",attrs:{src:i("1771")("./"+t.img),alt:"Profile picture"}}),n("h3",{staticClass:"heading"},[t._v(t._s(t.fullName))]),n("p",[t._v(t._s(t.testimonialText))])])},I=[],B=(i("a9e3"),{name:"Testimonial",props:{id:{type:Number,required:!0},img:{type:String,required:!0},fullName:{type:String,required:!0},testimonialText:{type:String,required:!0}},data:function(){return{imageSrc:this.img}}}),q=B,G=(i("244b"),Object(u["a"])(q,z,I,!1,null,"6cff0f1a",null)),H=G.exports,U={name:"TestimonialsList",components:{Testimonial:H},data:function(){return{testimonials:[{id:0,img:"avatar-anisha.png",fullName:"Anisha Li",testimonialText:"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"},{id:1,img:"avatar-ali.png",fullName:"Ali Bravo",testimonialText:"“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"},{id:2,img:"avatar-richard.png",fullName:"Richard Watts",testimonialText:"“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"},{id:3,img:"avatar-shanai.png",fullName:"Shanai Gough",testimonialText:"“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"}],currentIndex:0,windowSize:window.innerWidth}},methods:{selectSlide:function(t){this.currentIndex=t},scrollTestimonials:function(t){var e=document.getElementById("desktop-list"),i=t.clientX-this.$el.scrollLeft,n=2e3-this.getWindowWidth,s=100/this.getWindowWidth*i,a=-1*n/100*s;e.style.marginLeft="".concat(a,"px")},windowListener:function(){var t=this;window.addEventListener("resize",(function(){t.windowSize=window.innerWidth}))}},computed:{selectedTestimonial:function(){return this.currentIndex},desktopView:function(){return this.getWindowWidth>=1440},getWindowWidth:function(){return this.windowSize}},updated:function(){this.windowListener()},created:function(){this.windowListener(),this.isOpen=!1}},R=U,D=(i("de56"),Object(u["a"])(R,F,V,!1,null,"72d7c1e5",null)),J=D.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("h2",[t._v("Simplify how your team works today.")]),i("div",{staticClass:"btn"},[i("span",[t._v("Get Started")])])])}],K={name:"SimplifyBlock"},Q=K,Z=(i("8bc0"),Object(u["a"])(Q,X,Y,!1,null,"76e6bcb5",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"split"},[t._m(0),t._m(1),i("div",{staticClass:"right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEmail,expression:"inputEmail"}],attrs:{type:"email",id:"email-form",placeholder:"Updates in your inbox..."},domProps:{value:t.inputEmail},on:{input:function(e){e.target.composing||(t.inputEmail=e.target.value)}}}),i("label",{directives:[{name:"show",rawName:"v-show",value:t.desktopView&&t.getError,expression:"desktopView && getError"}],staticClass:"error"},[t._v("Please insert a valid email")]),i("div",{staticClass:"btn",class:{disabled:t.getError},on:{click:t.validateNewsletterForm}},[i("span",[t._v("Go")])])])]),i("span",{staticClass:"copyright"},[t._v("Copyright 2020. All Rights Reserved")]),i("ErrorModal",{directives:[{name:"show",rawName:"v-show",value:t.getError&&!t.desktopView,expression:"getError && !desktopView"}],attrs:{id:"modal"},on:{closeModal:t.resetForm}})],1)},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("img",{staticClass:"logo",attrs:{src:i("f295"),alt:"Manage logo"}}),n("div",{staticClass:"social-media"},[n("img",{attrs:{src:i("431d"),alt:"Facebook icon"}}),n("img",{attrs:{src:i("63ec"),alt:"Youtube icon"}}),n("img",{attrs:{src:i("5cfb"),alt:"Twitter icon"}}),n("img",{attrs:{src:i("a952"),alt:"Pinterest icon"}}),n("img",{attrs:{src:i("8158"),alt:"Instagram icon"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"middle"},[i("div",[i("ul",[i("li",[i("a",{attrs:{href:"#"}},[t._v("Home")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Pricing")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Products")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("About Us")])])])]),i("div",[i("ul",[i("li",[i("a",{attrs:{href:"#"}},[t._v("Careers")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Community")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("Privacy Policy")])])])])])}],nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-modal"},[n("div",{staticClass:"split"},[t._m(0),n("img",{staticClass:"close",attrs:{src:i("9e40"),alt:"X close icon"},on:{click:function(e){return t.$emit("closeModal")}}})])])},st=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("h3",[t._v("Oh, no!")]),i("p",[t._v("Please, make sure to enter a valid email adress.")])])}],at={name:"ErrorModal"},rt=at,ot=(i("c6cc"),Object(u["a"])(rt,nt,st,!1,null,"132d8e1e",null)),ct=ot.exports,lt={name:"AppFooter",components:{ErrorModal:ct},data:function(){return{inputEmail:"",error:!1}},computed:{getError:function(){return this.error},desktopView:function(){var t=window.innerWidth;return t>=1440}},methods:{validateEmail:function(){var t=/^[^\s@]+@[^\s@]+$/;return t.test(String(this.inputEmail).toLowerCase())},validateNewsletterForm:function(){var t=this;if(""==this.inputEmail||!this.validateEmail())return this.error=!0,this.scrollToBottom(),void(this.desktopView&&setTimeout((function(){t.resetForm(),t.error=!1}),2e3));this.resetForm()},resetForm:function(){this.error=!1,this.inputEmail="",document.getElementById("email-form").value=""},scrollToBottom:function(){this.$nextTick(document.getElementById("modal").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"}))}}},ut=lt,dt=(i("33e0"),Object(u["a"])(ut,et,it,!1,null,"0f675681",null)),mt=dt.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.menu,expression:"menu"}],staticClass:"overlay"})},ft=[],vt={name:"Overlay",props:{menu:{type:Boolean,required:!0}}},gt=vt,ht=(i("ed52"),Object(u["a"])(gt,pt,ft,!1,null,"e8883016",null)),wt=ht.exports,bt={name:"App",components:{AppHeader:m,AppHero:w,AboutManage:P,TestimonialsList:J,SimplifyBlock:tt,AppFooter:mt,Overlay:wt},data:function(){return{menu:!1}},computed:{getMenuState:function(){return this.menu}}},_t=bt,yt=(i("034f"),Object(u["a"])(_t,s,a,!1,null,null,null)),kt=yt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(kt)}}).$mount("#app")},"5cfb":function(t,e,i){t.exports=i.p+"manage-landing-page/img/icon-twitter.064c3171.svg"},"5ead":function(t,e,i){t.exports=i.p+"img/avatar-shanai.b2507cb2.png"},"604e":function(t,e,i){"use strict";i("3340")},"63ec":function(t,e,i){t.exports=i.p+"manage-landing-page/img/icon-youtube.8e2f566f.svg"},"7b8c":function(t,e,i){t.exports=i.p+"manage-landing-page/img/bg-simplify-section-mobile.37dc0372.svg"},8158:function(t,e,i){t.exports=i.p+"manage-landing-page/img/icon-instagram.e0814599.svg"},"823a":function(t,e,i){t.exports=i.p+"manage-landing-page/img/icon-hamburger.bdd40cf9.svg"},"85ec":function(t,e,i){},"8bc0":function(t,e,i){"use strict";i("d57a")},9953:function(t,e,i){"use strict";i("376e")},"9b19":function(t,e,i){t.exports=i.p+"manage-landing-page/img/logo.f2cec4b2.svg"},"9e40":function(t,e,i){t.exports=i.p+"manage-landing-page/img/icon-close.57a86b4f.svg"},a759:function(t,e,i){t.exports=i.p+"manage-landing-page/img/bg-tablet-pattern.01061791.svg"},a797:function(t,e,i){t.exports=i.p+"manage-landing-page/img/bg-simplify-section-desktop.d6d0cb36.svg"},a952:function(t,e,i){t.exports=i.p+"manage-landing-page/img/icon-pinterest.ef15af23.svg"},ac0b:function(t,e,i){"use strict";i("d4fd")},ae8d:function(t,e,i){t.exports=i.p+"img/avatar-ali.d022b688.png"},b040:function(t,e,i){"use strict";i("3e31")},c65a:function(t,e,i){},c6cc:function(t,e,i){"use strict";i("ccd3")},ca5c:function(t,e,i){},ccd3:function(t,e,i){},d4fd:function(t,e,i){},d57a:function(t,e,i){},de56:function(t,e,i){"use strict";i("e9ea")},e9ea:function(t,e,i){},ed52:function(t,e,i){"use strict";i("c65a")},f295:function(t,e,i){t.exports=i.p+"manage-landing-page/img/logo-white.fca28dc6.svg"},f6a4:function(t,e,i){},fc6c:function(t,e,i){t.exports=i.p+"manage-landing-page/img/illustration-intro.6a53bba8.svg"}});
//# sourceMappingURL=app.55718569.js.map
