(function(t){function e(e){for(var r,a,i=e[0],l=e[1],s=e[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var c=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0966":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"DEMO"}})],1)},u=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),n("h3",[t._v("自然语言处理 DEMO")]),n("div",{},[n("div",{},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"textarea",attrs:{cols:"30",rows:"2"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("div",[n("input",{attrs:{type:"button",value:t.label},on:{click:t.parse}})])]),n("div",{},[n("pre",{attrs:{cols:"30",rows:"10"}},[t._v(t._s(t.output))])])]),n("h3",[t._v("人工智能诊断 DEMO")]),n("div",[t._v("WIP")])])},i=[],l=n("bc3a"),s=n.n(l),c={name:"HelloWorld",props:{msg:String},data:function(){return{label:"解析",text:"最近有点咳嗽，还有点流鼻涕，但不发烧",output:""}},methods:{parse:function(){var t=this;this.output="",this.label="Loading...",s.a.post("/api/nlp",{text:this.text}).then((function(e){t.output=JSON.stringify(e.data,null,2)})).catch((function(e){e.response?429===e.response.status?t.output="请求太频繁，请稍后再试":t.output=e.response.data:t.output=e.message})).then((function(){t.label="解析"}))}}},p=c,f=(n("b213"),n("2877")),d=Object(f["a"])(p,a,i,!1,null,"eb20fe4e",null),v=d.exports,b={name:"App",components:{HelloWorld:v}},h=b,m=(n("034f"),Object(f["a"])(h,o,u,!1,null,null,null)),g=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"85ec":function(t,e,n){},b213:function(t,e,n){"use strict";n("0966")}});
//# sourceMappingURL=app.ef38c2c2.js.map