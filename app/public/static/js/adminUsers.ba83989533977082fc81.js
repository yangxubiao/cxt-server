(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminUsers"],{"600b":function(e,t,r){},"6db5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loading?r("Loading"):r("div",{staticClass:"wrapper"},[r("van-dropdown-menu",[r("van-dropdown-item",{attrs:{options:e.roleOption},on:{change:e.roleChange},model:{value:e.roleVlue,callback:function(t){e.roleVlue=t},expression:"roleVlue"}})],1),r("van-list",{staticClass:"common-list",attrs:{finished:e.userFinished},on:{load:e.onLoad},scopedSlots:e._u([{key:"finished",fn:function(){return[e._v(" 没有更多了, "),r("span",{staticClass:"add-user",on:{click:e.addUser}},[e._v("点击这里添加更多用户")])]},proxy:!0}]),model:{value:e.userLoading,callback:function(t){e.userLoading=t},expression:"userLoading"}},e._l(e.usersList,(function(t,n){return r("van-swipe-cell",{key:n,scopedSlots:e._u([{key:"right",fn:function(){return[r("van-button",{attrs:{square:"",type:"primary",text:"编辑"},on:{click:function(r){return e.editUserItemById(t._id)}}})]},proxy:!0}],null,!0)},[r("van-cell",{attrs:{title:t.name,value:t.roleName}})],1)})),1)],1)},a=[],s=r("2909"),u=r("1da1"),i=r("d4ec"),c=r("bee2"),o=r("262e"),p=r("2caf"),l=(r("96cf"),r("99af"),r("b0c0"),r("9ab4")),h=r("1b40"),f=r("b8f0"),d=r("c428"),m=r("77c1"),g=r.n(m),v=function(e){Object(o["a"])(r,e);var t=Object(p["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.usersList=[],e.roleVlue="",e.loading=!0,e.userLoading=!1,e.userFinished=!1,e.serachform={perPage:10,queryPage:1,roleNo:""},e.roleOption=[{text:"全部",value:""},{text:"管理员",value:"0"},{text:"车队",value:"1"},{text:"驾驶员",value:"2"},{text:"加油工",value:"3"}],e}return Object(c["a"])(r,[{key:"onLoad",value:function(){this.serachform.queryPage+=1,this.getAllUserList()}},{key:"serachParams",get:function(){return g()(this.serachform)}},{key:"getAllUserList",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f["e"])(this.serachParams);case 3:t=e.sent,t&&t.length<this.serachform.perPage?this.userFinished=!0:this.userFinished=!1,this.userLoading=!1,this.usersList=[].concat(Object(s["a"])(this.usersList),Object(s["a"])(t)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0,"error");case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"roleChange",value:function(e){this.serachform.roleNo=e,this.getUsersByCondition({isWhole:!0,roleNo:e})}},{key:"getUsersByCondition",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isWhole&&(this.serachform={perPage:10,queryPage:1,roleNo:this.serachform.roleNo}),e.next=3,Object(f["e"])(this.serachParams);case 3:r=e.sent,r&&r.length<this.serachform.perPage?this.userFinished=!0:this.userFinished=!1,this.usersList=r;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delUserItemById",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$dialog.confirm({title:"删除用户",message:"确定要删除 ".concat(t.name," 用户吗 ?")}).then(Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["b"])(t._id);case 2:r.$toast("删除成功"),r.getUsersByCondition({isWhole:!0});case 4:case"end":return e.stop()}}),e)})))).catch((function(){}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["e"])(this.serachParams);case 2:t=e.sent,this.usersList=t,this.loading=!1;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"editUserItemById",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$router.push({path:"/admin-manage-users",query:{id:t,scene:"update"}});case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"addUser",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$router.push({path:"/admin-manage-users",query:{scene:"add"}});case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(h["c"]);v=Object(l["a"])([Object(h["a"])({components:{Loading:d["a"]}})],v);var w=v,b=w,y=(r("c239"),r("2877")),x=Object(y["a"])(b,n,a,!1,null,"9528b4e4",null);t["default"]=x.exports},b8f0:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"g",(function(){return f})),r.d(t,"h",(function(){return m})),r.d(t,"f",(function(){return v})),r.d(t,"i",(function(){return b})),r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return O}));var n=r("15fd"),a=r("1da1"),s=(r("99af"),r("96cf"),r("78b1")),u=["perPage","queryPage"];function i(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].post("/users/createUser",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,i,c,o,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.perPage,a=void 0===r?10:r,i=t.queryPage,c=void 0===i?1:i,o=Object(n["a"])(t,u),e.next=3,s["a"].post("/users/findAllUsersList?per_page=".concat(a,"&query_page=").concat(c),o);case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].delete("/users/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].post("/users/login",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return g=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].put("/users/updataPassword",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function v(e){return w.apply(this,arguments)}function w(){return w=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].get("/users/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function b(e){return y.apply(this,arguments)}function y(){return y=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].put("/users/updateUser",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function x(){return k.apply(this,arguments)}function k(){return k=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].post("/users/getAllCarslist");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function O(){return R.apply(this,arguments)}function R(){return R=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s["a"].post("/users/getAllOillist");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}},c239:function(e,t,r){"use strict";r("600b")}}]);