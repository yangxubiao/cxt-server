(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminOil"],{"0c75":function(e,t,n){"use strict";n("60d1")},"15fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("a4d3"),n("b64b");function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function a(e,t){if(null==e)return{};var n,a,c=r(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},"208a":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"a",(function(){return b})),n.d(t,"i",(function(){return O})),n.d(t,"c",(function(){return w})),n.d(t,"f",(function(){return j})),n.d(t,"h",(function(){return R}));var r=n("15fd"),a=n("1da1"),c=(n("99af"),n("96cf"),n("78b1")),u=["perPage","queryPage"],i=["perPage","queryPage"];function s(e){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].post("/gases/createOilSite",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].get("/gases/findAllOilSitesList");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].delete("/gases/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function h(e){return g.apply(this,arguments)}function g(){return g=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,i,s,o,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.jsonObject,a=n.perPage,i=void 0===a?10:a,s=n.queryPage,o=void 0===s?1:s,l=Object(r["a"])(n,u),e.next=3,c["a"].post("/oil/getAllGasRecords?per_page=".concat(i,"&query_page=").concat(o),l);case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function b(e){return v.apply(this,arguments)}function v(){return v=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].post("/oil/createOilCleanRecord",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function O(e){return m.apply(this,arguments)}function m(){return m=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].put("/oil/updateOilCleanRecord",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return y=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].delete("/oil/delOilCleanRecord/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function j(e){return x.apply(this,arguments)}function x(){return x=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,u,s,o,l,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.jsonObject,a=n.perPage,u=void 0===a?10:a,s=n.queryPage,o=void 0===s?1:s,l=Object(r["a"])(n,i),e.next=3,c["a"].post("/oil/getAllOilRecordRecords?per_page=".concat(u,"&query_page=").concat(o),l);case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function R(e){return k.apply(this,arguments)}function k(){return k=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].get("/oil/getOilCleanRecordById/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}},"60d1":function(e,t,n){},a5f3:function(e,t,n){},c3c8:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("Loading"):n("div",{staticClass:"wrapper common-list"},[e._l(e.allOilList,(function(t,r){return n("van-swipe-cell",{key:r,scopedSlots:e._u([{key:"right",fn:function(){return[n("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(n){return e.delOilItemById(t)}}})]},proxy:!0}],null,!0)},[n("van-cell",{attrs:{title:t.name,value:"代价费: "+t.proxyFee+"毛"}})],1)})),n("div",{staticClass:"tips"},[e._v(" 没有更多了, "),n("span",{staticClass:"add-gas",on:{click:e.addGasSite}},[e._v("点击这里添加更多加油点")])])],2)},a=[],c=n("1da1"),u=n("d4ec"),i=n("bee2"),s=n("262e"),o=n("2caf"),l=(n("b0c0"),n("96cf"),n("9ab4")),p=n("1b40"),f=n("208a"),d=n("c428"),h=function(e){Object(s["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.loading=!0,e.allOilList=[],e}return Object(i["a"])(n,[{key:"created",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["g"])();case 2:t=e.sent,this.allOilList=t,this.loading=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllOilSitesList",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["g"])();case 2:t=e.sent,this.allOilList=t;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"delOilItemById",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$dialog.confirm({title:"删除用户",message:"确定要删除 ".concat(t.name," 吗 ?")}).then(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["d"])(t._id);case 2:n.$toast("删除成功"),n.getAllOilSitesList();case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addGasSite",value:function(){this.$router.push({path:"/admin-add-oil"})}}]),n}(p["b"]);h=Object(l["a"])([Object(p["a"])({components:{Loading:d["a"]}})],h);var g=h,b=g,v=(n("cf72"),n("2877")),O=Object(v["a"])(b,r,a,!1,null,"16310cc3",null);t["default"]=O.exports},c428:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"},[n("van-loading",{attrs:{size:"24px"}})],1)},a=[],c=n("d4ec"),u=n("262e"),i=n("2caf"),s=n("9ab4"),o=n("1b40"),l=function(e){Object(u["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(o["b"]);l=Object(s["a"])([o["a"]],l);var p=l,f=p,d=(n("0c75"),n("2877")),h=Object(d["a"])(f,r,a,!1,null,"be0735f6",null);t["a"]=h.exports},cf72:function(e,t,n){"use strict";n("a5f3")}}]);