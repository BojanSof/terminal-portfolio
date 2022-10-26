/*! For license information please see 601e7e8b69947f87f55178638522f478404fbf25-e1fc1653b418042a183f.js.LICENSE.txt */
(self.webpackChunkbojansof_portfolio=self.webpackChunkbojansof_portfolio||[]).push([[437],{5900:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)o.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},8862:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(7294),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},1867:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(7294),i=f(r),l=f(n(5900)),s=f(n(5697)),c=f(n(8862)),u=f(n(5616)),d=n(4109);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["className","icons"])),r=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return i.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",o({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.Z=h,h.displayName="Toggle",h.defaultProps={icons:{checked:i.default.createElement(c.default,null),unchecked:i.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},4109:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var o=e.pageX;if(void 0!==o)return{x:o,y:e.pageY}}return{x:0,y:0}}},5616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(7294),r=(o=a)&&o.__esModule?o:{default:o};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},5604:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(7294),a=n(3935),r=n(5444),i=n(9831),l=n(7567),s=n(3765);function c(){var e=(0,r.useStaticQuery)("3407052760"),t=function(){return window.screen.width>1e3?"75%":"100%"},n=function(e){var n=new i.Z({title:e.node.frontmatter.title,width:t(),height:t(),x:"center",y:"center",onfocus:function(){this.removeClass("wb-no-focus"),this.addClass("wb-focus")},onblur:function(){this.removeClass("wb-focus"),this.addClass("wb-no-focus")}});a.render(o.createElement(s.Z,{title:e.node.frontmatter.title,popupImageSrc:e.node.frontmatter.popupImageSrc,popupImageAlt:e.node.frontmatter.popupImageAlt,video:e.node.frontmatter.video,popupGithubLink:e.node.frontmatter.popupGithubLink,popupLiveLink:e.node.frontmatter.popupLiveLink,techIcons:e.node.frontmatter.techIcons,html:e.node.html}),n.body)},c=e.info.edges.map((function(e){return o.createElement("li",{key:e.node.frontmatter.title,className:"infoItem"},o.createElement("button",{className:"popupWindowLinkButton",style:{cursor:"pointer"},onClick:function(){return n(e)}},e.node.frontmatter.listName))})),u=e.info.edges.map((function(e){return o.createElement("li",{key:e.node.frontmatter.title,className:"infoItem"},o.createElement(r.Link,{className:"popupWindowLinkButton",style:{cursor:"pointer"},to:e.node.frontmatter.slug},e.node.frontmatter.listName))})),d=e.projects.edges.map((function(e){return o.createElement("li",{key:e.node.frontmatter.title,className:e.node.frontmatter.nameOfClass,style:{display:"flex",alignItems:"center",width:"100%"}},o.createElement("button",{className:"popupWindowLinkButton",style:{cursor:"pointer",width:"30%"},onClick:function(){return n(e)}},e.node.frontmatter.listName),o.createElement("span",{style:{fontSize:"x-small",paddingLeft:"0.5rem",textJustify:"right",width:"70%"}},"lrwxr-xr-x 1 kielx admin "+e.node.frontmatter.added+" "+e.node.frontmatter.slug+" -> ",o.createElement("a",{href:e.node.frontmatter.popupGithubLink},e.node.frontmatter.popupGithubLink)))})),f=e.projects.edges.map((function(e){return o.createElement("li",{key:e.node.frontmatter.title,className:e.node.frontmatter.nameOfClass},o.createElement(r.Link,{className:"popupWindowLinkButton",style:{cursor:"pointer"},to:e.node.frontmatter.slug},e.node.frontmatter.listName))})),h=o.createElement("li",{className:"infoItem"},o.createElement("button",{className:"popupWindowLinkButton",style:{cursor:"pointer"},onClick:function(){var e=new i.Z({title:"Contact me",width:t(),height:t(),x:"center",y:"center",onfocus:function(){this.removeClass("wb-no-focus"),this.addClass("wb-focus")},onblur:function(){this.removeClass("wb-focus"),this.addClass("wb-no-focus")}});a.render(o.createElement(l.Z,{close:function(){return e.close()}}),e.body)}},o.createElement("span",{role:"img","aria-label":"e-mail"},"📧")," ","/Contact"));return o.createElement("ul",{className:"mappedItemsList"},window.screen.width<1024?o.createElement(o.Fragment,null,o.createElement("li",null,"→ Info:")," ",u," ",o.createElement("li",{className:"infoItem"},o.createElement(r.Link,{className:"popupWindowLinkButton",style:{cursor:"pointer"},to:"/contact"},o.createElement("span",{role:"img","aria-label":"e-mail"},"📧")," ","/Contact"))," ",o.createElement("li",null,"→ Projects:"),f," ",o.createElement("li",{className:"miniProject"},"→ Mini-Projects:")):o.createElement(o.Fragment,null,o.createElement("li",null,"→ Info:")," ",c," ",h," ",o.createElement("li",null,"→ Projects:"),d," ",o.createElement("li",{className:"miniProject"},"→ Mini-Projects:")))}var u=n(1867),d=n(9519),f=n(8014),h=function(){var e=(0,o.useState)("undefined"!=typeof window&&sessionStorage.getItem("isLoaded")||!1),t=e[0],n=(e[1],(0,o.useState)("undefined"!=typeof window&&JSON.parse(localStorage.getItem("lightMode"))||!1)),a=n[0],r=n[1];return(0,o.useEffect)((function(){sessionStorage.setItem("isLoaded",t)}),[t]),(0,o.useEffect)((function(){localStorage.setItem("lightMode",a),r(a),a?document.documentElement.classList.add("light"):document.documentElement.classList.remove("light")}),[a]),"undefined"!=typeof window?o.createElement(u.Z,{defaultChecked:a,icons:{checked:o.createElement(d.G,{icon:f.enB}),unchecked:o.createElement(d.G,{icon:f.DBF})},onChange:function(){r(!a)},"aria-label":"dark mode toggle"}):""},p=function(e){var t=e.text,n="undefined"!=typeof window;return o.createElement("div",{className:"LsDisplayWindow"},o.createElement("div",{className:"LsDisplayTaskbar"},o.createElement("span",null,"CMD"),o.createElement("div",{style:{position:"absolute",right:"10px",bottom:"-2px"}},o.createElement(h,null))),o.createElement("h2",null,t,n&&window.innerWidth>1024?"a":"",o.createElement("div",{className:"break"})),n?o.createElement(c,null):"")}},9219:function(e,t,n){"use strict";var o=n(7294),a=n(8938),r=n.n(a),i=function(e){e.siteTitle;var t=(0,o.useState)("undefined"!=typeof window&&sessionStorage.getItem("isLoaded")||!1),n=t[0],a=t[1];return o.createElement("header",null,o.createElement("div",{style:{display:"inline-flex"}},o.createElement("h1",null,">"),o.createElement("h1",null,n?"Bojan Sofronievski":o.createElement(r(),{style:{marginTop:0,paddingTop:0},options:{deleteSpeed:"natural"},onInit:function(e){e.typeString("Electrical Engineer").pauseFor(2500).deleteAll().typeString("Embedded Software Developer").pauseFor(2500).deleteAll().typeString("Signal Processing Engineer").pauseFor(2500).deleteAll().typeString("Problem solver").pauseFor(2500).deleteAll().typeString("Bojan Sofronievski").callFunction((function(){a(!0)})).start()}}))))};i.defaultProps={siteTitle:""},t.Z=i}}]);
//# sourceMappingURL=601e7e8b69947f87f55178638522f478404fbf25-e1fc1653b418042a183f.js.map