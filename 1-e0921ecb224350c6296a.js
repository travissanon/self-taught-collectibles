(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(t,e,n){"use strict";var a=n(38);e.__esModule=!0,e.withPrefix=p,e.navigateTo=e.replace=e.push=e.navigate=e.default=void 0;var u=a(n(161)),r=a(n(162)),i=a(n(8)),o=a(n(52)),c=a(n(55)),s=a(n(5)),l=a(n(0)),M=n(16),d=n(145);function p(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)}var j={activeClassName:s.default.string,activeStyle:s.default.object},L=function(t){function e(e){var n;n=t.call(this)||this,(0,c.default)((0,o.default)((0,o.default)(n)),"defaultGetProps",function(t){return t.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var u=e.location;return n.state={IOSupported:a,location:u},n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(e,t);var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(t){var e,n,a,u=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue((0,d.parsePath)(u.props.to).pathname)},(a=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(a.unobserve(e),a.disconnect(),n())})})).observe(e))},n.render=function(){var t=this,e=this.props,n=e.to,a=e.getProps,i=void 0===a?this.defaultGetProps:a,o=e.onClick,c=e.onMouseEnter,s=e.location,j=(e.activeClassName,e.activeStyle,e.ref,e.innerRef,e.state),L=e.replace,T=(0,u.default)(e,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),f=p(n);return l.default.createElement(M.Link,(0,r.default)({to:f,state:j,getProps:i,innerRef:this.handleRef,onMouseEnter:function(t){c&&c(t),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(e){if(o&&o(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){e.preventDefault();var n=(0,d.parsePath)(f),a=n.pathname,u=n.hash;if(a===s.pathname||!a){var r=u?document.getElementById(u.substr(1)):null;null!==r?r.scrollIntoView():window.scrollTo(0,0)}O(f,{state:j,replace:L})}return!0}},T))},e}(l.default.Component);L.propTypes=(0,r.default)({},j,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var T,f=(T=L,function(t){return l.default.createElement(M.Location,null,function(e){var n=e.location;return l.default.createElement(T,(0,r.default)({location:n},t))})});e.default=f;var O=function(t,e){window.___navigate(t,e)};e.navigate=O;var g=function(t){window.___push(t)};e.push=g;e.replace=function(t){window.___replace(t)};e.navigateTo=function(t){return g(t)}},144:function(t,e,n){"use strict";var a=n(0),u=n.n(a),r=n(5),i=n.n(r),o=(n(147),n(160),n(148),n(150),function(t){var e=t.children;return u.a.createElement("div",{className:"main"},e)});o.propTypes={children:i.a.func},e.a=o},145:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return L}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return j});var a=n(0),u=n.n(a),r=n(5),i=n.n(r),o=n(143),c=n.n(o);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return o.withPrefix}),n.d(e,"navigate",function(){return o.navigate}),n.d(e,"push",function(){return o.push}),n.d(e,"replace",function(){return o.replace}),n.d(e,"navigateTo",function(){return o.navigateTo});var s=n(36);n.d(e,"waitForRouteChange",function(){return s.c});var l=n(163),M=n.n(l);n.d(e,"PageRenderer",function(){return M.a});var d=n(50);n.d(e,"parsePath",function(){return d.a});var p=u.a.createContext({}),j=function(t){return u.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):u.a.createElement("div",null,"Loading (StaticQuery)")})};function L(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}j.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5OSIgaGVpZ2h0PSI1MyIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDk5IDUzIj4KICAgIDxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik05OC43NjMgMjYuNEw4NS4yOTEgMTIuOTI3Yy0uMTk4LS4xOTgtLjM5Ni0uMTk4LS41OTUtLjA5OWEuNTQ1LjU0NSAwIDAgMC0uMjk3LjQ5NnY2LjgzNUg2OC4xNTNMNDguMTQzLjE0OWMtLjE5OC0uMTk5LS41OTQtLjE5OS0uNzkyIDBMMjcuNDQgMTkuOTZIMTQuNjZ2LTYuODM2YzAtLjE5OC0uMDk4LS4zOTYtLjM5NS0uNDk1LS4xOTgtLjA5OS0uMzk3IDAtLjU5NS4xTC4xOTggMjYuM2MtLjA5OS4xLS4xOTguMjk4LS4xOTguMzk3IDAgLjE5OC4xLjM5Ni4yOTcuNDk1TDEzLjc3IDQwLjY2NGMuMS4xLjE5OC4xOTguMzk3LjE5OGguMTk4Yy4xOTgtLjA5OS4zOTYtLjI5Ny4zOTYtLjQ5NXYtNi44MzVoMTMuNjdsMTguOTIgMTguOTJjLjEuMS4yOTguMTk4LjM5Ny4xOTguMSAwIC4yOTctLjA5OS4zOTYtLjE5OGwxOC44MjItMTguODIxaDE3LjQzNHY2LjgzNWMwIC4xOTguMS4zOTYuMjk3LjQ5NWguMTk5Yy4wOTkgMCAuMjk3LS4wOTkuMzk2LS4xOThsMTMuNDcyLTEzLjQ3MmMuMS0uMDk5LjE5OC0uMjk3LjE5OC0uNDk1LjEtLjE5OCAwLS4yOTctLjE5OC0uMzk2em0tNDcuNTQ5IDcuMDMzTDQ3Ljc0NyAzNi45bC0zLjU2Ni0zLjQ2N2g3LjAzM3ptMS4wOS0xLjA5Yy0uMSAwLS4xIDAgMCAwSDE0LjE2NmMtLjI5OCAwLS40OTYuMjk3LS40OTYuNTk1djYuMDQyTDEuMjg4IDI2LjY5NyAxMy41NyAxNC40MTN2Ni4wNDNjMCAuMjk3LjE5OC40OTUuNDk2LjQ5NWgzOS4xMjlsNS4xNSA1LjE1MS02LjA0MiA2LjI0MXptLTguOTE2LTEyLjM4Mmw0LjM1OS00LjQ1OCA0LjQ1OCA0LjQ1OGgtOC44MTd6bTQuMzU5IDMxLjIwNGwtMTcuODMtMTcuNzMyaDEyLjg3N2MwIC4wOTkgMCAuMTk4LjEuMjk3bDQuMzU4IDQuMzU5Yy4wOTkuMDk5LjI5Ny4xOTguMzk2LjE5OC4wOTkgMCAuMjk3LS4xLjM5Ni0uMTk4bDExLjQ5MS0xMS40OTFjLjE5OC0uMTk4LjE5OC0uNTk1IDAtLjc5M0w0OC4xNDMgMTQuNDEzYy0uMDk5LS4wOTktLjE5OC0uMTk4LS4zOTYtLjE5OHMtLjI5Ny4xLS4zOTYuMTk4TDQyIDE5Ljg2MmMtLjA5OS4wOTktLjA5OS4wOTktLjA5OS4xOThIMjkuMDI1TDQ3Ljc0NyAxLjIzOCA2Ny41NTkgMjEuMDVsNS4xNTEgNS4xNTEtMjQuOTYzIDI0Ljk2NHptMzcuNzQyLTEyLjA4NnYtNi4wNDJjMC0uMjk4LS4yOTctLjQ5Ni0uNTk0LS40OTZoLTE2Ljg0bDUuODQ0LTUuODQ0Yy4wOTktLjEuMTk4LS4yOTcuMTk4LS4zOTcgMC0uMDk5LS4wOTktLjI5Ny0uMTk4LS4zOTZsLTQuNjU2LTQuNjU2aDE1LjY1MmMuMjk3IDAgLjU5NC0uMjk3LjU5NC0uNTk0di02LjA0M2wxMi4yODMgMTIuMjg0TDg1LjQ5IDM5LjA3OXoiLz4KPC9zdmc+Cg=="},148:function(t,e,n){},150:function(t,e,n){},157:function(t,e,n){"use strict";var a=n(8),u=n.n(a),r=n(0),i=n.n(r),o=function(t){function e(e){var n,a=e.siteTitle;return(n=t.call(this,{siteTitle:a})||this).state={path:""},n}u()(e,t);var n=e.prototype;return n.componentDidMount=function(){this.setState({path:window.location.pathname})},n.render=function(){return i.a.createElement("div",{className:"footer"},i.a.createElement("a",{href:"https://twitter.com/devmaterial"},"Development by ",i.a.createElement("span",null,"Travis Sanon")),i.a.createElement("a",{href:"/about",style:{visibility:"/"===this.state.path?"visible":"hidden"}},"About"),i.a.createElement("a",{href:"https://twitter.com/_micahcarroll"},"Design by ",i.a.createElement("span",null,"Micah Carroll")))},e}(i.a.Component);e.a=o},163:function(t,e,n){var a;t.exports=(a=n(174))&&a.default||a},174:function(t,e,n){"use strict";n.r(e);n(39);var a=n(0),u=n.n(a),r=n(5),i=n.n(r),o=n(73),c=n(1),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return u.a.createElement(o.a,Object.assign({key:e.pathname,location:e,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s}}]);
//# sourceMappingURL=1-e0921ecb224350c6296a.js.map