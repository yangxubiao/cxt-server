(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["oilDivideManage"],{"06af":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return d}));var r=n("15fd"),a=n("1da1"),i=(n("96cf"),n("99af"),n("78b1")),u=["perPage","queryPage"];function s(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,s,c,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.perPage,a=void 0===n?10:n,s=t.queryPage,c=void 0===s?1:s,o=Object(r["a"])(t,u),e.next=3,i["a"].post("/users/getCurrentUserAllDrivesList?per_page=".concat(a,"&query_page=").concat(c),o);case 3:return l=e.sent,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function o(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/users/getCurrentUser");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/users/updateMany",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},"122c":function(e,t,n){"use strict";n("a43d")},"18b7":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n("15fd"),a=n("1da1"),i=(n("96cf"),n("99af"),n("78b1")),u=["perPage","queryPage"];function s(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,s,c,o,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.jsonObject,a=n.perPage,s=void 0===a?10:a,c=n.queryPage,o=void 0===c?1:c,l=Object(r["a"])(n,u),e.next=3,i["a"].post("/oil/getCurrentCarOwnerGasRecord?per_page=".concat(s,"&query_page=").concat(o),l);case 3:return d=e.sent,e.abrupt("return",d);case 5:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/oil/divideOil",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},2532:function(e,t,n){"use strict";var r=n("23e7"),a=n("5a34"),i=n("1d80"),u=n("577e"),s=n("ab13");r({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~u(i(this)).indexOf(u(a(e)),arguments.length>1?arguments[1]:void 0)}})},"468c":function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=1500,a=500,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e7,i=arguments.length>2?arguments[2]:void 0;n.e("es6-tween").then(n.t.bind(null,"de48",7)).then((function(n){var u=n.Tween,s=n.update;function c(){s()&&requestAnimationFrame(c)}var o=new u({tweeningValue:e}).to({tweeningValue:t},r).on("update",(function(){i(o)})).delay(a).start();c()}))};t["a"]=i},"4e5f":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n("1da1"),a=(n("96cf"),n("78b1"));function i(e){return u.apply(this,arguments)}function u(){return u=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("/summary/queryCarOwnerGasInfo",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function s(){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("/summary/findAllSummaryList");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"75e6":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n("15fd"),a=n("1da1"),i=(n("99af"),n("96cf"),n("78b1")),u=["perPage","queryPage"];function s(e){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/oilDivideRecord/insertMany",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function o(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a,s,c,o,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.jsonObject,a=n.perPage,s=void 0===a?10:a,c=n.queryPage,o=void 0===c?1:c,l=Object(r["a"])(n,u),e.next=3,i["a"].post("/oilDivideRecord/getOilDivideRecord?per_page=".concat(s,"&query_page=").concat(o),l);case 3:return d=e.sent,e.abrupt("return",d);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},"7d56":function(e,t,n){"use strict";n("edd5")},a43d:function(e,t,n){},ab13:function(e,t,n){var r=n("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},cc78:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("Loading"):n("div",{staticClass:"wrapper"},[n("van-grid",{staticClass:"grid",attrs:{"column-num":2}},e._l(e.grids,(function(t,r){return n("van-grid-item",{key:r,scopedSlots:e._u([{key:"icon",fn:function(){return[n("p",{staticClass:"title"},[e._v(" "+e._s(t.name))])]},proxy:!0},{key:"text",fn:function(){return["可分配"===t.name?n("p",{staticClass:"subtitle"},[e._v(e._s(e.ableUseValue)+"升")]):n("p",{staticClass:"subtitle"},[e._v(" "+e._s(e.alredyUseValue)+"升")])]},proxy:!0}],null,!0)})})),1),n("van-field",{staticClass:"field",attrs:{center:"",clearable:"",placeholder:"请输入关键字"},scopedSlots:e._u([{key:"button",fn:function(){return[n("van-button",{attrs:{type:"danger"},on:{click:e.onConfirm}},[e._v("搜索")])]},proxy:!0}]),model:{value:e.valueKey,callback:function(t){e.valueKey=t},expression:"valueKey"}}),n("ul",{staticClass:"common-list list"},e._l(e.usersList,(function(t,r){return n("li",{key:r,staticClass:"item",class:{"item-activited":e.isActivited(t._id)},on:{click:function(n){return e.clickUserItem(t)}}},[n("div",{staticClass:"cars"},[n("p",{staticClass:"card-title"},[e._v(" "+e._s(t.carNo)+" ")]),n("p",{staticClass:"card-title"},[e._v(" 剩余"),n("span",{staticClass:"focus-text"},[e._v(e._s(e.carAvaliableLnum(t.availableLum)))]),e._v("升")]),n("p",{staticClass:"card-title"},[e._v(" "+e._s(t.name)+" ")])])])})),0),n("div",{staticClass:"btns"},[n("van-button",{staticClass:"btn",attrs:{size:"large",type:"danger"},on:{click:function(t){return e.submit("add")}}},[e._v("分油")]),e._v("      "),n("van-button",{staticClass:"btn",attrs:{size:"large",type:"danger"},on:{click:function(t){return e.submit("div")}}},[e._v("扣油")])],1),n("van-dialog",{attrs:{title:e.dialogInfo.title,"show-cancel-button":""},on:{confirm:e.dialogConfirm},model:{value:e.dialogShow,callback:function(t){e.dialogShow=t},expression:"dialogShow"}},[n("div",{staticClass:"dialog-content"},e._l(e.dialogInfo.contentData,(function(e,t){return n("van-cell",{key:t,attrs:{title:e.name,value:e.carNo}})})),1),n("van-field",{staticClass:"field",attrs:{type:"number","input-align":"right",label:e.dialogInfo.title+"升数",placeholder:"请输入"+e.dialogInfo.title+"升数"},model:{value:e.lnum,callback:function(t){e.lnum=t},expression:"lnum"}})],1)],1)},a=[],i=n("1da1"),u=n("d4ec"),s=n("bee2"),c=n("262e"),o=n("2caf"),l=(n("96cf"),n("d3b7"),n("25f0"),n("b680"),n("a9e3"),n("4de4"),n("caad"),n("2532"),n("d81d"),n("b0c0"),n("9ab4")),d=n("1b40"),f=n("06af"),p=n("c428"),h=n("77c1"),m=n.n(h),v=n("d90f"),g=n("c50c"),b=n("4e5f"),y=n("468c"),x=n("901e"),w=n.n(x),O=n("18b7"),k=n("75e6"),j=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.grids=[{name:"可分配"},{name:"已分配"}],e.valueKey="",e.option=[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],e.ableUseValue="0",e.alredyUseValue="0",e.usersList=[],e.lnum="",e.usersALl=[],e.dialogShow=!1,e.roleVlue="",e.loading=!0,e.gasInfo=null,e.selectedIdx=[],e.oilFlag="",e.nameOption=[{text:"全部",value:""}],e.serachform={perPage:10,queryPage:1,name:"",gasMode:"divide"},e}return Object(s["a"])(n,[{key:"getTotalLnum",get:function(){var e;if(null!==(e=this.usersList)&&void 0!==e&&e.length){var t=this.usersList.reduce((function(e,t){return new w.a(e).plus(t.availableLum)}),0).toNumber();return t}return 0}},{key:"onConfirm",value:function(){this.getUsersByCondition()}},{key:"avaliableLnum",get:function(){var e;return(null===(e=this.gasInfo)||void 0===e?void 0:e.avaliableLnum)||0}},{key:"carAvaliableLnum",value:function(e){return new w.a(e).toFixed(2).toString()}},{key:"updateValue",value:function(e){this.ableUseValue=Object(v["a"])(e.object.tweeningValue).toFixed(2)}},{key:"updateValue1",value:function(e){this.alredyUseValue=Object(v["a"])(e.object.tweeningValue).toFixed(2)}},{key:"mounted",value:function(){this.queryCarOwnerGasInfo()}},{key:"queryCarOwnerGasInfo",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(g["a"])("userInfo"),e.next=3,Object(b["b"])({isEncrypt:!0,jsonObject:{carId:t.carId,carName:t.carName}});case 3:n=e.sent,this.loading=!1,this.gasInfo=n,Object(y["a"])(0,this.avaliableLnum,this.updateValue);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"submit",value:function(e){this.oilFlag=e,this.selectedIdx.length?"div"!==e&&Number(this.ableUseValue)<=0?this.$toast("对不起！请先充值 !"):this.dialogShow=!0:this.$toast("没有选中车辆")}},{key:"dialogInfo",get:function(){var e=this;return{title:"div"===this.oilFlag?"扣油":"分油",contentData:this.usersList.filter((function(t){return e.selectedIdx.includes(t._id)}))}}},{key:"dialogConfirm",value:function(){this.lnum?Number(this.lnum)<=0?this.$toast("".concat(this.dialogInfo.title,"升数不能小于0")):"div"!==this.oilFlag?this.handleAddOil():this.handleDivOil():this.$toast("请输入".concat(this.dialogInfo.title,"升数"))}},{key:"handleAddOil",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=new w.a(this.ableUseValue),n=new w.a(this.lnum).multipliedBy(this.selectedIdx.length).toNumber(),r=t.minus(n).toNumber(),!(r<0)){e.next=6;break}return this.$toast("可分配的升数不足，请先充值 !"),e.abrupt("return");case 6:return a=this.usersList.filter((function(e){return u.selectedIdx.includes(e._id)})),this.loading=!0,e.next=10,Object(f["c"])({data:a.map((function(e){return{_id:e._id,availableLum:new w.a(u.lnum).plus(e.availableLum).toFixed(2).toString()}}))});case 10:return i=Object(g["a"])("userInfo"),e.next=13,Object(O["a"])({carId:i.carId,lnum:String(n),gasMode:"divide"});case 13:return e.next=15,Object(k["b"])({data:a.map((function(e){return{mode:"divide",lum:u.lnum,name:e.name,phone:e.phone,roleName:e.roleName,roleNo:e.roleNo,carName:e.carName,carId:e.carId,carProxyFee:e.carProxyFee,carNo:e.carNo}}))});case 15:return e.next=17,this.getUsersByCondition();case 17:return e.next=19,this.queryCarOwnerGasInfo();case 19:this.selectedIdx=[],this.lnum="",this.$toast("分油成功"),this.loading=!1;case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"handleDivOil",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,i,u,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.usersList.filter((function(e){return s.selectedIdx.includes(e._id)})),n=t.filter((function(e){return Number(e.availableLum)<Number(s.lnum)})),!n.length){e.next=8;break}for(r="",a=0;a<n.length;a++)r+='<div class="handle-div-oil"><span class="focus-text">'.concat(n[a].carNo,"</span>剩余升数不足</div>");this.$dialog.alert({title:"扣油失败原因",message:r,theme:"round-button"}).then((function(){})),e.next=25;break;case 8:return this.loading=!0,e.next=11,Object(f["c"])({data:t.map((function(e){return{_id:e._id,availableLum:new w.a(e.availableLum).minus(s.lnum).toFixed(2).toString()}}))});case 11:return i=Object(g["a"])("userInfo"),u=new w.a(this.lnum).multipliedBy(this.selectedIdx.length).toString(),e.next=15,Object(O["a"])({carId:i.carId,lnum:u,gasMode:"div"});case 15:return e.next=17,Object(k["b"])({data:t.map((function(e){return{mode:"div",lum:s.lnum,name:e.name,phone:e.phone,roleName:e.roleName,roleNo:e.roleNo,carName:e.carName,carId:e.carId,carProxyFee:e.carProxyFee,carNo:e.carNo}}))});case 17:return e.next=19,this.getUsersByCondition();case 19:return e.next=21,this.queryCarOwnerGasInfo();case 21:this.selectedIdx=[],this.lnum="",this.$toast("扣油成功"),this.loading=!1;case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isActivited",value:function(e){return this.selectedIdx.some((function(t){return t===e}))}},{key:"clickUserItem",value:function(e){this.selectedIdx.some((function(t){return t===e._id}))?this.selectedIdx=this.selectedIdx.filter((function(t){return t!==e._id})):this.selectedIdx.push(e._id)}},{key:"getUsersByCondition",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.serachform={isWhole:!0,name:this.serachform.name,gasMode:"divide"},e.next=3,Object(f["b"])(this.serachParams);case 3:t=e.sent,this.usersList=t,this.usersALl.length||(this.usersALl=t),Object(y["a"])(0,this.getTotalLnum,this.updateValue1);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"serachParams",get:function(){var e=m()(this.serachform);return this.valueKey&&(e.valueKey=this.valueKey),e}},{key:"created",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.getUsersByCondition();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(d["c"]);j=Object(l["a"])([Object(d["a"])({components:{Loading:p["a"]}})],j);var I=j,_=I,C=(n("7d56"),n("122c"),n("2877")),N=Object(C["a"])(_,r,a,!1,null,"45c36958",null);t["default"]=N.exports},d90f:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("9129"),n("a9e3");function r(e){return Number.isNaN(Number(e))?0:Number(e)}},edd5:function(e,t,n){}}]);