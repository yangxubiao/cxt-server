(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["driverGasManage"],{"00fd":function(e,t,r){var n=r("9e69"),a=Object.prototype,u=a.hasOwnProperty,i=a.toString,o=n?n.toStringTag:void 0;function c(e){var t=u.call(e,o),r=e[o];try{e[o]=void 0;var n=!0}catch(c){}var a=i.call(e);return n&&(t?e[o]=r:delete e[o]),a}e.exports=c},"06af":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return s}));var n=r("15fd"),a=r("1da1"),u=(r("96cf"),r("99af"),r("78b1")),i=["perPage","queryPage"];function o(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,c,s,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.perPage,a=void 0===r?10:r,o=t.queryPage,c=void 0===o?1:o,s=Object(n["a"])(t,i),e.next=3,u["a"].post("/users/getCurrentUserAllDrivesList?per_page=".concat(a,"&query_page=").concat(c),s);case 3:return f=e.sent,e.abrupt("return",f);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function s(){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].post("/users/getCurrentUser");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},1310:function(e,t){function r(e){return null!=e&&"object"==typeof e}e.exports=r},"15fd":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("b64b");function n(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function a(e,t){if(null==e)return{};var r,a,u=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(u[r]=e[r])}return u}},"188e":function(e,t,r){"use strict";r("ee38")},"1a8c":function(e,t){function r(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=r},"208a":function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"g",(function(){return f})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return h})),r.d(t,"i",(function(){return g})),r.d(t,"c",(function(){return O})),r.d(t,"f",(function(){return j})),r.d(t,"h",(function(){return k}));var n=r("15fd"),a=r("1da1"),u=(r("99af"),r("96cf"),r("78b1")),i=["perPage","queryPage"],o=["perPage","queryPage"];function c(e){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].post("/gases/createOilSite",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get("/gases/findAllOilSitesList");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function l(e){return b.apply(this,arguments)}function b(){return b=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].delete("/gases/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return m=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,c,s,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.jsonObject,a=r.perPage,o=void 0===a?10:a,c=r.queryPage,s=void 0===c?1:c,f=Object(n["a"])(r,i),e.next=3,u["a"].post("/oil/getAllGasRecords?per_page=".concat(o,"&query_page=").concat(s),f);case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return v=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].post("/oil/createOilCleanRecord",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return y=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].put("/oil/updateOilCleanRecord",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function O(e){return w.apply(this,arguments)}function w(){return w=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].delete("/oil/delOilCleanRecord/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function j(e){return x.apply(this,arguments)}function x(){return x=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,i,c,s,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.jsonObject,a=r.perPage,i=void 0===a?10:a,c=r.queryPage,s=void 0===c?1:c,f=Object(n["a"])(r,o),e.next=3,u["a"].post("/oil/getAllOilRecordRecords?per_page=".concat(i,"&query_page=").concat(s),f);case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function k(e){return R.apply(this,arguments)}function R(){return R=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].get("/oil/getOilCleanRecordById/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}},"29f3":function(e,t){var r=Object.prototype,n=r.toString;function a(e){return n.call(e)}e.exports=a},"2b3e":function(e,t,r){var n=r("585a"),a="object"==typeof self&&self&&self.Object===Object&&self,u=n||a||Function("return this")();e.exports=u},3729:function(e,t,r){var n=r("9e69"),a=r("00fd"),u=r("29f3"),i="[object Null]",o="[object Undefined]",c=n?n.toStringTag:void 0;function s(e){return null==e?void 0===e?o:i:c&&c in Object(e)?a(e):u(e)}e.exports=s},"408c":function(e,t,r){var n=r("2b3e"),a=function(){return n.Date.now()};e.exports=a},"4cef":function(e,t){var r=/\s/;function n(e){var t=e.length;while(t--&&r.test(e.charAt(t)));return t}e.exports=n},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");var n=r("ade3");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"585a":function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r("c8ba"))},"82df":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("van-form",{staticClass:"container",on:{submit:e.throttleSubmit}},[r("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:e.formObj.oilName,label:"加油点",placeholder:"点击选择加油点",rules:[{required:!0,message:"请选择加油点"}]},on:{click:e.handlerPicker}}),r("van-field",{attrs:{type:"number",label:"加油升数",placeholder:"请输入加油升数",rules:[{required:!0,message:"请输入加油升数"}]},model:{value:e.formObj.oilLnum,callback:function(t){e.$set(e.formObj,"oilLnum",t)},expression:"formObj.oilLnum"}}),r("van-field",{attrs:{name:"uploader",label:"加油图片",rules:[{required:!0,message:"请上传加油图片"}]},scopedSlots:e._u([{key:"input",fn:function(){return[r("van-uploader",{attrs:{"max-count":"1","after-read":e.afterRead},model:{value:e.uploader,callback:function(t){e.uploader=t},expression:"uploader"}})]},proxy:!0}])}),r("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[r("van-picker",{attrs:{"show-toolbar":"",columns:e.dynamicColumns,loading:e.loading},on:{confirm:e.onConfirm,cancel:function(t){e.showPicker=!1}}})],1),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1)],1)],1)},a=[],u=r("5530"),i=r("1da1"),o=r("d4ec"),c=r("bee2"),s=r("262e"),f=r("2caf"),p=(r("d81d"),r("b0c0"),r("96cf"),r("9ab4")),l=r("1b40"),b=r("208a"),d=r("06af"),m=r("9c8f"),h=r("78b1");function v(e){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h["a"].post("/upload",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var y=r("b047"),O=r.n(y),w=function(e){Object(s["a"])(r,e);var t=Object(f["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.showPicker=!1,e.loading=!1,e.columns=[],e.uploader=[],e.uploader1=[],e.value="",e.formObj={userId:"",carNo:"",carName:"",carId:"",carProxyFee:"",oilName:"",oilId:"",oilProxyFee:"",oilLnum:"",oilImg:""},e.throttleSubmit=O()((function(){e.onSubmit()}),500),e}return Object(c["a"])(r,[{key:"dynamicColumns",get:function(){return this.columns}},{key:"onSubmit",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.formObj.oilImg||this.$toast("加油图片未上传"),e.next=3,Object(m["a"])(Object(u["a"])({},this.formObj));case 3:this.$toast("加油成功"),this.$router.push({name:"driverGas"});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"afterRead",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.status="uploading",t.message="上传中...",r=new FormData,r.append("file",t.file),e.next=6,v(r);case 6:n=e.sent,t.status="done",this.formObj.oilImg=n.url;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"onConfirm",value:function(e){this.formObj=Object(u["a"])(Object(u["a"])({},this.formObj),e.value),this.showPicker=!this.showPicker}},{key:"handlerPicker",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.columns=[],this.loading=!0,this.showPicker=!this.showPicker,e.next=5,Object(b["g"])();case 5:t=e.sent,t=t.map((function(e){return{text:e.name,value:{oilName:e.name,oilId:e._id,oilProxyFee:e.proxyFee}}})),this.columns=t,this.loading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["a"])();case 2:t=e.sent,this.formObj.carNo=t.carNo,this.formObj.carName=t.carName,this.formObj.carId=t.carId,this.formObj.carProxyFee=t.carProxyFee,this.formObj.userId=t._id;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(l["b"]);w=Object(p["a"])([l["a"]],w);var j=w,x=j,k=(r("188e"),r("2877")),R=Object(k["a"])(x,n,a,!1,null,"7c213521",null);t["default"]=R.exports},"8d74":function(e,t,r){var n=r("4cef"),a=/^\s+/;function u(e){return e?e.slice(0,n(e)+1).replace(a,""):e}e.exports=u},"9c8f":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s}));var n=r("15fd"),a=r("1da1"),u=(r("99af"),r("96cf"),r("78b1")),i=["perPage","queryPage"];function o(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].post("/oil/createOilRecord",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function s(e){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,o,c,s,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.jsonObject,a=r.perPage,o=void 0===a?10:a,c=r.queryPage,s=void 0===c?1:c,f=Object(n["a"])(r,i),e.next=3,u["a"].post("/oil/getCurrentLoginGasRecord?per_page=".concat(o,"&query_page=").concat(s),f);case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},"9e69":function(e,t,r){var n=r("2b3e"),a=n.Symbol;e.exports=a},ade3:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},b047:function(e,t,r){var n=r("1a8c"),a=r("408c"),u=r("b4b0"),i="Expected a function",o=Math.max,c=Math.min;function s(e,t,r){var s,f,p,l,b,d,m=0,h=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var r=s,n=f;return s=f=void 0,m=t,l=e.apply(n,r),l}function O(e){return m=e,b=setTimeout(x,t),h?y(e):l}function w(e){var r=e-d,n=e-m,a=t-r;return v?c(a,p-n):a}function j(e){var r=e-d,n=e-m;return void 0===d||r>=t||r<0||v&&n>=p}function x(){var e=a();if(j(e))return k(e);b=setTimeout(x,w(e))}function k(e){return b=void 0,g&&s?y(e):(s=f=void 0,l)}function R(){void 0!==b&&clearTimeout(b),m=0,s=d=f=b=void 0}function P(){return void 0===b?l:k(a())}function S(){var e=a(),r=j(e);if(s=arguments,f=this,d=e,r){if(void 0===b)return O(d);if(v)return clearTimeout(b),b=setTimeout(x,t),y(d)}return void 0===b&&(b=setTimeout(x,t)),l}return t=u(t)||0,n(r)&&(h=!!r.leading,v="maxWait"in r,p=v?o(u(r.maxWait)||0,t):p,g="trailing"in r?!!r.trailing:g),S.cancel=R,S.flush=P,S}e.exports=s},b4b0:function(e,t,r){var n=r("8d74"),a=r("1a8c"),u=r("ffd6"),i=NaN,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,f=parseInt;function p(e){if("number"==typeof e)return e;if(u(e))return i;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=c.test(e);return r||s.test(e)?f(e.slice(2),r?2:8):o.test(e)?i:+e}e.exports=p},dbb4:function(e,t,r){var n=r("23e7"),a=r("83ab"),u=r("56ef"),i=r("fc6a"),o=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,n=i(e),a=o.f,s=u(n),f={},p=0;while(s.length>p)r=a(n,t=s[p++]),void 0!==r&&c(f,t,r);return f}})},e439:function(e,t,r){var n=r("23e7"),a=r("d039"),u=r("fc6a"),i=r("06cf").f,o=r("83ab"),c=a((function(){i(1)})),s=!o||c;n({target:"Object",stat:!0,forced:s,sham:!o},{getOwnPropertyDescriptor:function(e,t){return i(u(e),t)}})},ee38:function(e,t,r){},ffd6:function(e,t,r){var n=r("3729"),a=r("1310"),u="[object Symbol]";function i(e){return"symbol"==typeof e||a(e)&&n(e)==u}e.exports=i}}]);