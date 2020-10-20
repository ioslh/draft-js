/*! For license information please see 808dc608.8607e805.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),i=(n(191),n(190)),a={id:"advanced-topics-issues-and-pitfalls",title:"Issues and Pitfalls"},s={id:"advanced-topics-issues-and-pitfalls",title:"Issues and Pitfalls",description:"This article addresses some known issues with the Draft editor framework, as",source:"@site/../docs/Advanced-Topics-Issues-and-Pitfalls.md",permalink:"/docs/advanced-topics-issues-and-pitfalls",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/Advanced-Topics-Issues-and-Pitfalls.md",lastUpdatedBy:"Micha\xebl De Boey",lastUpdatedAt:1596144839,sidebar:"docs",previous:{title:"EditorState Race Conditions",permalink:"/docs/advanced-topics-editorstate-race-conditions"},next:{title:"Editor Component",permalink:"/docs/api-reference-editor"}},c=[{value:"Common Pitfalls",id:"common-pitfalls",children:[{value:"Delayed state updates",id:"delayed-state-updates",children:[]},{value:"Missing <code>Draft.css</code>",id:"missing-draftcss",children:[]}]},{value:"Known Issues",id:"known-issues",children:[{value:"Custom OSX Keybindings",id:"custom-osx-keybindings",children:[]},{value:"Browser plugins/extensions",id:"browser-pluginsextensions",children:[]},{value:"IME and Internet Explorer",id:"ime-and-internet-explorer",children:[]},{value:"Polyfills",id:"polyfills",children:[]},{value:"Mobile Not Yet Supported",id:"mobile-not-yet-supported",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article addresses some known issues with the Draft editor framework, as\nwell as some common pitfalls that we have encountered while using the framework\nat Facebook."),Object(i.b)("h2",{id:"common-pitfalls"},"Common Pitfalls"),Object(i.b)("h3",{id:"delayed-state-updates"},"Delayed state updates"),Object(i.b)("p",null,"A common pattern for unidirectional data management is to batch or otherwise\ndelay updates to data stores, using a setTimeout or another mechanism. Stores are\nupdated, then emit changes to the relevant React components to propagate\nre-rendering."),Object(i.b)("p",null,"When delays are introduced to a React application with a Draft editor, however,\nit is possible to cause significant interaction problems. This is because the\neditor expects immediate updates and renders that stay in sync with the user's typing\nbehavior. Delays can prevent updates from being propagated through the editor\ncomponent tree, which can cause a disconnect between keystrokes and updates."),Object(i.b)("p",null,"To avoid this while still using a delaying or batching mechanism, you should\nseparate the delay behavior from your ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," state propagation. That is,\nyou must always allow your ",Object(i.b)("inlineCode",{parentName:"p"},"EditorState")," to propagate to your ",Object(i.b)("inlineCode",{parentName:"p"},"Editor"),"\ncomponent without delay, and independently perform batched updates that do\nnot affect the state of your ",Object(i.b)("inlineCode",{parentName:"p"},"Editor")," component."),Object(i.b)("h3",{id:"missing-draftcss"},"Missing ",Object(i.b)("inlineCode",{parentName:"h3"},"Draft.css")),Object(i.b)("p",null,"The Draft framework includes a handful of CSS resources intended for use with\nthe editor, available in a single file via the build, ",Object(i.b)("inlineCode",{parentName:"p"},"Draft.css"),"."),Object(i.b)("p",null,"This CSS should be included when rendering the editor, as these styles set defaults\nfor text alignment, spacing, and other important features. Without it, you may\nencounter issues with block positioning, alignment, and cursor behavior."),Object(i.b)("p",null,"If you choose to write your own CSS independent of ",Object(i.b)("inlineCode",{parentName:"p"},"Draft.css"),", you will most\nlikely need to replicate much of the default styling."),Object(i.b)("h2",{id:"known-issues"},"Known Issues"),Object(i.b)("h3",{id:"custom-osx-keybindings"},"Custom OSX Keybindings"),Object(i.b)("p",null,"Because the browser has no access to OS-level custom keybindings, it is not\npossible to intercept edit intent behaviors that do not map to default system\nkey bindings."),Object(i.b)("p",null,"The result of this is that users who use custom keybindings may encounter\nissues with Draft editors, since their key commands may not behave as expected."),Object(i.b)("h3",{id:"browser-pluginsextensions"},"Browser plugins/extensions"),Object(i.b)("p",null,"As with any React application, browser plugins and extensions that modify the\nDOM can cause Draft editors to break."),Object(i.b)("p",null,"Grammar checkers, for instance, may modify the DOM within contentEditable\nelements, adding styles like underlines and backgrounds. Since React cannot\nreconcile the DOM if the browser does not match its expectations,\nthe editor state may fail to remain in sync with the DOM."),Object(i.b)("p",null,"Certain old ad blockers are also known to break the native DOM Selection\nAPI -- a bad idea no matter what! -- and since Draft depends on this API to\nmaintain controlled selection state, this can cause trouble for editor\ninteraction."),Object(i.b)("h3",{id:"ime-and-internet-explorer"},"IME and Internet Explorer"),Object(i.b)("p",null,"As of IE11, Internet Explorer demonstrates notable issues with certain international\ninput methods, most significantly Korean input."),Object(i.b)("h3",{id:"polyfills"},"Polyfills"),Object(i.b)("p",null,"Some of Draft's code and that of its dependencies make use of ES2015 language\nfeatures. Syntax features like ",Object(i.b)("inlineCode",{parentName:"p"},"class")," are compiled away via Babel when Draft is\nbuilt, but it does not include polyfills for APIs now included in many modern\nbrowsers (for instance: ",Object(i.b)("inlineCode",{parentName:"p"},"String.prototype.startsWith"),"). We expect your browser\nsupports these APIs natively or with the assistance of a polyfill. One such\npolyfill is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/es-shims/es6-shim"}),"es6-shim"),", which we use in\nmany examples but you are free to use\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/docs/usage/polyfill/"}),"babel-polyfill")," if that's more\nyour scene."),Object(i.b)("p",null,"When using either polyfill/shim, you should include it as early as possible in\nyour application's entrypoint (at the very minimum, before you import Draft).\nFor instance, using\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookincubator/create-react-app"}),"create-react-app")," and\ntargeting IE11, ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.js")," is probably a good spot to import your polyfill:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"src/index.js"))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import 'babel-polyfill';\n// or\nimport 'es6-shim';\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\nimport './index.css';\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),Object(i.b)("h3",{id:"mobile-not-yet-supported"},"Mobile Not Yet Supported"),Object(i.b)("p",null,"Draft.js is moving towards full mobile support, but does not officially support\nmobile browsers at this point. There are some known issues affecting Android and\niOS - see issues tagged\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/labels/android"}),"'android'")," or\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/labels/ios"}),"'ios'")," for the current status."))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";e.exports=n(192)},192:function(e,t,n){"use strict";var r=n(193),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var k=w.prototype=new j;k.constructor=w,r(k,v.prototype),k.isPureReactComponent=!0;var S={current:null},x=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:e,key:a,ref:s,props:o,_owner:S.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var D=/\/+/g,_=[];function N(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,o){var s=typeof t;"undefined"!==s&&"boolean"!==s||(t=null);var c=!1;if(null===t)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case a:c=!0}}if(c)return r(o,t,""===n?"."+T(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=n+T(s=t[l],l);c+=e(s,u,r,o)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(s=t.next()).done;)c+=e(s=s.value,u=n+T(s,l++),r,o);else if("object"===s)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?$(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),r.push(e))}function $(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(D,"$&/")+"/"),R(e,M,t=N(t,i,r,o)),I(t)}var B={current:null};function U(){var e=B.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return $(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,A,t=N(null,null,t,n)),I(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return $(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(h(143));return e}},t.Component=v,t.Fragment=s,t.Profiler=l,t.PureComponent=w,t.StrictMode=c,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var o=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)x.call(t,u)&&!C.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:i,type:e.type,key:a,ref:s,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},193:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,s,c=a(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))o.call(n,u)&&(c[u]=n[u]);if(r){s=r(n);for(var p=0;p<s.length;p++)i.call(n,s[p])&&(c[s[p]]=n[s[p]])}}return c}}}]);