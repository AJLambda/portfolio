(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(296),r=t(232),s=t.n(r),o=t(295),i=t(246),m=t.n(i),d=t(249),p=t.n(d),u=t(250),E=t(258),f=t(210),h=t(259),g=t.n(h);var v=function(e){return e.children},N=function(e){var a,t;function n(){var a;return(a=e.call(this)||this).handleClick=a.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var l=n.prototype;return l.componentDidMount=function(){g.a.polyfill()},l.handleClick=function(e){e.preventDefault();var a=0,t=!0,n=this.props,c=n.type,l=n.element,r=n.offset,s=n.timeout;if(c&&l)switch(c){case"class":t=!!(a=document.getElementsByClassName(l)[0]);break;case"id":t=!!(a=document.getElementById(l))}t?this.scrollTo(a,r,s):console.log("Element not found: "+l)},l.scrollTo=function(e,a,t){void 0===a&&(a=0),void 0===t&&(t=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;t?setTimeout(function(){window.scroll({top:n+a,left:0,behavior:"smooth"})},t):window.scroll({top:n+a,left:0,behavior:"smooth"})},l.render=function(){return c.a.createElement(v,null,"object"==typeof this.props.children?c.a.cloneElement(this.props.children,{onClick:this.handleClick}):c.a.createElement("span",{onClick:this.handleClick},this.props.children))},n}(c.a.Component),b=t(216),w=t.n(b);function y(){return c.a.createElement("section",{id:"header"},c.a.createElement("header",{className:"major"},c.a.createElement("h1",null,w.a.heading),c.a.createElement("p",null,w.a.subHeading),c.a.createElement("section",{id:"section07",className:"demo"},c.a.createElement(N,{type:"id",element:"one"},c.a.createElement("div",{className:"arw-bkg"},c.a.createElement("a",{href:"#one"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)))))))}t(51);function k(){return c.a.createElement("footer",null,c.a.createElement("ul",{className:"icons"},w.a.socialLinks.map(function(e){var a=e.icon,t=e.name,n=e.url;return c.a.createElement("li",{key:n},c.a.createElement("a",{href:n,className:"icon alt "+a},c.a.createElement("span",{className:"label"},t)))})),c.a.createElement("ul",{className:"copyright"},c.a.createElement("li",null,"© Highlights"),c.a.createElement("li",null,"Design: ",c.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")),c.a.createElement("li",null,"Customization: Austin James")))}var j=t(260),x=t.n(j),I=t(261),C=t.n(I),T=t(262),L=t.n(T),S=t(263),_=t.n(S),D=t(264),M=t.n(D),A=t(265),R=t.n(A),F=t(266),J=t.n(F),U=t(267),P=t.n(U),q=t(268),B=t.n(q),H=t(269),O=t.n(H),W=t(270),Y=t.n(W),z=t(271),Q=t.n(z),G=t(272),K=t.n(G),V=t(273),X=t.n(V),Z=[{id:"one",bg:t(203)},{id:"two",bg:t(203)},{id:"three",bg:t(203)},{id:"footer",bg:t(203)}];a.default=function(){return c.a.createElement(f.a,null,c.a.createElement(y,{id:"header"}),c.a.createElement("section",{id:"one",className:"main special"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"major"},c.a.createElement(p.a,null,c.a.createElement("img",{className:"profile-img",src:O.a,alt:"Austin"})),c.a.createElement("h2",null,"About Me")),c.a.createElement("p",null,"I am a 27 year old web developer student at Lambda School. I love to create, design, and solve.")),c.a.createElement(N,{offset:10,type:"id",element:"two"},c.a.createElement("a",{href:"#two",className:"goto-next "},c.a.createElement("div",{className:"center-con"},c.a.createElement("div",{className:"round"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))))),c.a.createElement("section",{id:"two",className:"main special"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Portfolio")),c.a.createElement("p",null,"I have worked on many projects while enrolled in the Full Stack program. These are some of my most notable creations."),c.a.createElement(m.a,null,c.a.createElement("div",{className:"desktop-project"},c.a.createElement("h3",{className:"project-title"},"Review It Yourself"),c.a.createElement("div",{className:"project-box"},c.a.createElement("div",{className:"project-content"},c.a.createElement("div",{className:"project-container"},c.a.createElement("div",{className:"content-overlay"}),c.a.createElement("img",{className:"content-image1",src:Y.a,alt:"Review It Yourself"}),c.a.createElement("div",{className:"content-details fadeIn-bottom"},c.a.createElement("h3",{className:"content-title"},"- Review It Yourself -"),c.a.createElement("p",{className:"content-text"},"My capstone project at Lambda School. I worked as a Full Stack Web Developer on an amazing team. We spent five weeks building the app from the ground up."),c.a.createElement("div",{className:"content-links"},c.a.createElement(l.a,{TransitionComponent:o.a,title:"Code"},c.a.createElement("a",{href:"https://github.com/labs13-how-to",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(u.a,{icon:E.a,className:"github-icon"}))),c.a.createElement(l.a,{TransitionComponent:o.a,title:"URL"},c.a.createElement("a",{href:"https://review-it-yourself.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"fa fa-link fa-3x"})))))))))),c.a.createElement(m.a,null,c.a.createElement("div",{className:"desktop-project"},c.a.createElement("h3",{className:"project-title"},"Safe Space"),c.a.createElement("div",{className:"project-box"},c.a.createElement("div",{className:"project-content"},c.a.createElement("div",{className:"project-container"},c.a.createElement("div",{className:"content-overlay"}),c.a.createElement("img",{className:"content-image",src:Q.a,alt:"Safespace"}),c.a.createElement("div",{className:"content-details fadeIn-bottom"},c.a.createElement("h3",{className:"content-title"},"- Safe Space -"),c.a.createElement("p",{className:"content-text"},"A project I created during my time at Lambda School. I worked as the Front End Developer in collaboration with a UI Developer and two Back End Developers."),c.a.createElement("div",{className:"content-links"},c.a.createElement(l.a,{TransitionComponent:o.a,title:"Code"},c.a.createElement("a",{href:"https://github.com/AJLambda/safespace",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(u.a,{icon:E.a,className:"github-icon"}))),c.a.createElement(l.a,{TransitionComponent:o.a,title:"URL"},c.a.createElement("a",{href:"https://safespace-frontend.netlify.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"fa fa-link fa-3x"})))))))))),c.a.createElement(m.a,null,c.a.createElement("div",{className:"desktop-project"},c.a.createElement("h3",{className:"project-title"},"My Top Nine"),c.a.createElement("div",{className:"project-box"},c.a.createElement("div",{className:"project-content"},c.a.createElement("div",{className:"project-container"},c.a.createElement("div",{className:"content-overlay"}),c.a.createElement("img",{className:"content-image",src:K.a,alt:"My Top Nine"}),c.a.createElement("div",{className:"content-details fadeIn-bottom"},c.a.createElement("h3",{className:"content-title"},"- My Top Nine -"),c.a.createElement("p",{className:"content-text"},"My first group project at Lambda School. I was the UI Designer on the team. This is the first landing page that I created on my own."),c.a.createElement("div",{className:"content-links"},c.a.createElement(l.a,{TransitionComponent:o.a,title:"Code"},c.a.createElement("a",{href:"https://github.com/AJLambda/MyTopNine",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(u.a,{icon:E.a,className:"github-icon"}))),c.a.createElement(l.a,{TransitionComponent:o.a,title:"URL"},c.a.createElement("a",{href:"https://mytopnine.netlify.com",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"fa fa-link fa-3x"}))))))))))),c.a.createElement(m.a,null,c.a.createElement("div",{className:"desktop-project"},c.a.createElement("h3",{className:"project-title"},"LambdaFIT"),c.a.createElement("div",{className:"project-box"},c.a.createElement("div",{className:"project-content"},c.a.createElement("div",{className:"project-container"},c.a.createElement("div",{className:"content-overlay"}),c.a.createElement("img",{className:"content-image",src:X.a,alt:"Lambda Fit"}),c.a.createElement("div",{className:"content-details fadeIn-bottom"},c.a.createElement("h3",{className:"content-title"},"- LambdaFIT -"),c.a.createElement("p",{className:"content-text"},"This was another group project I worked on at Lambda School. I was a Back End Developer on the team. I worked in collaboration with a Front End Developer."),c.a.createElement("div",{className:"content-links"},c.a.createElement(l.a,{TransitionComponent:o.a,title:"Code"},c.a.createElement("a",{href:"https://github.com/weight-lifting-app",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(u.a,{icon:E.a,className:"github-icon"}))),c.a.createElement(l.a,{TransitionComponent:o.a,title:"URL"},c.a.createElement("a",{href:"https://infallible-brattain-b0f591.netlify.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"fa fa-link fa-3x"})))))))))),c.a.createElement(N,{offset:10,type:"id",element:"three"},c.a.createElement("a",{href:"#three"},c.a.createElement("div",{className:"center-con",id:"arrow"},c.a.createElement("div",{className:"round"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))))),c.a.createElement("section",{id:"three",className:"main special"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Experience")),c.a.createElement("p",null,"Some of the languages and tools that I use."),c.a.createElement("div",{className:"icons-container"},c.a.createElement(p.a,{big:!0,cascade:!0},c.a.createElement("div",{className:"icons-grid"},c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:C.a,alt:"html5",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:L.a,alt:"css",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:B.a,alt:"css",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:x.a,alt:"js",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:M.a,alt:"nodejs",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:R.a,alt:"nodejs",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:P.a,alt:"nodejs",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:J.a,alt:"nodejs",className:"icons-img"})),c.a.createElement("div",{className:"icons-wrapper"},c.a.createElement("img",{src:_.a,alt:"nodejs",className:"icons-img"})))))),c.a.createElement(N,{offset:10,type:"id",element:"footer"},c.a.createElement("a",{href:"#footer",className:"goto-next "},c.a.createElement("div",{className:"center-con",id:"arrow"},c.a.createElement("div",{className:"round"},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))))),c.a.createElement("section",{id:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("header",{className:"major"},c.a.createElement("h2",null,"Get in touch")),c.a.createElement("form",{method:"post",action:"https://formspree.io/apj2277@gmail.com"},c.a.createElement("div",{className:"row gtr-uniform"},c.a.createElement("div",{className:"col-6 col-12-xsmall"},c.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),c.a.createElement("div",{className:"col-6 col-12-xsmall"},c.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),c.a.createElement("div",{className:"col-12"},c.a.createElement("textarea",{name:"message",id:"message",placeholder:"Message",rows:"4"})),c.a.createElement("div",{className:"col-12"},c.a.createElement("ul",{className:"actions special"},c.a.createElement("li",null,c.a.createElement("input",{type:"submit",value:"Send Message",className:"primary"}))))))),c.a.createElement(k,null)),c.a.createElement(s.a,{items:Z.map(function(e){return e.id}),currentClassName:"active",componentTag:"div"},Z.map(function(e){return c.a.createElement("div",{key:e.id,className:"main-bg",id:e.id+"-bg",style:{backgroundImage:"url("+e.bg+")",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundRepeat:"none",backgroundSize:"cover"}})})))}},200:function(e,a,t){var n;e.exports=(n=t(206))&&n.default||n},203:function(e,a,t){e.exports=t.p+"static/rocks-9734485774070274edfd1170fda0e49f.jpg"},205:function(e){e.exports={data:{site:{siteMetadata:{title:"Austin James"}}}}},206:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),c=t.n(n),l=t(104);a.default=function(e){var a=e.location,t=e.pageResources;return t?c.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null}},210:function(e,a,t){"use strict";var n=t(205),c=t(0),l=t.n(c),r=t(211),s=t.n(r),o=(t(66),t(200),t(9).default.enqueue,l.a.createContext({}));function i(e){var a=e.staticQueryData,t=e.data,n=e.query,c=e.render,r=t?t.data:a[n]&&a[n].data;return l.a.createElement(l.a.Fragment,null,r&&c(r),!r&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var a=e.data,t=e.query,n=e.render,c=e.children;return l.a.createElement(o.Consumer,null,function(e){return l.a.createElement(i,{data:a,query:t,render:n||c,staticQueryData:e})})};t(213);var d=function(e){var a,t;function c(a){var t;return(t=e.call(this,a)||this).state={isPreloaded:!0},t}t=e,(a=c).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=c.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.render=function(){var e=this.props.children,a=this.state.isPreloaded;return l.a.createElement(m,{query:"1044757290",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Highlights"},{name:"keywords",content:"site, web"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement("div",{className:a?"main-body is-preload":"main-body"},e))},data:n})},c}(c.Component);a.a=d},216:function(e,a){e.exports={siteTitle:"Austin James",manifestName:"Highlights",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-highlights/",heading:"Austin James",subHeading:"Web Developer",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/AJLambda"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/IAustinJames"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/austin.james.96"},{icon:"fa-envelope-o",name:"Email",url:"mailto:apj2277@gmail.com"},{icon:"fa-phone",name:"Phone",url:"tel:9498423646"}]}},260:function(e,a,t){e.exports=t.p+"static/node-d1dfea5e7a21c178112aa45c6996f3d4.png"},261:function(e,a,t){e.exports=t.p+"static/html-360a74f61397fdcdacdbc8c1e1031b3b.png"},262:function(e,a,t){e.exports=t.p+"static/css3-17f6d85b930d0f060ffed9845300b7a5.png"},263:function(e,a,t){e.exports=t.p+"static/git-2073654927dcfaaea4faa8c5256a965a.png"},264:function(e,a,t){e.exports=t.p+"static/react-8a065e4d0d3dd37b530dd93c91b337c2.png"},265:function(e,a,t){e.exports=t.p+"static/redux-3537e364281360ba3aeaa27e12d5b521.png"},266:function(e,a,t){e.exports=t.p+"static/sql-82a1090de8fd411360c1b347a807d63b.png"},267:function(e,a,t){e.exports=t.p+"static/python-2dd6c80e08162a93524cc0a1cbd01d8f.png"},268:function(e,a,t){e.exports=t.p+"static/javascript-429eaca4c495176b64926bbea409c350.png"},269:function(e,a,t){e.exports=t.p+"static/austinjames-6359f69f1fcbbeccce3f0f35422eeba5.png"},270:function(e,a,t){e.exports=t.p+"static/reviewityourself-d44280ddc6911d21a41cae537d4ff53c.png"},271:function(e,a,t){e.exports=t.p+"static/safespace-a2f1aa8b331bf4fbac1b94ea61cea392.png"},272:function(e,a,t){e.exports=t.p+"static/topnine-b1e1ba58d9a6f6511380e7ecb5c230a4.png"},273:function(e,a,t){e.exports=t.p+"static/lambdafit-690a6d4e6689c14ce91b2125ca846c70.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-1a59d5c37d78bcf5755c.js.map