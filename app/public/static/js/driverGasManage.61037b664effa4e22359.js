(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["driverGasManage"],{"06af":function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return f}));var n=r("15fd"),a=r("1da1"),i=(r("96cf"),r("99af"),r("78b1")),o=["perPage","queryPage"];function s(e){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,s,u,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.perPage,a=void 0===r?10:r,s=t.queryPage,u=void 0===s?1:s,c=Object(n["a"])(t,o),e.next=3,i["a"].post("/users/getCurrentUserAllDrivesList?per_page=".concat(a,"&query_page=").concat(u),c);case 3:return l=e.sent,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function c(){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/users/getCurrentUser");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return p=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/users/updateMany",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},"45f6":function(e,t,r){},"82df":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.pageLoading?r("Loading"):r("div",{staticClass:"wrapper"},[r("van-form",{staticClass:"container",on:{submit:e.throttleSubmit}},[e.isFromScan?e._e():r("van-field",{staticClass:"field",attrs:{readonly:"",clickable:"",name:"picker",value:e.formObj.oilName,label:"加油点",placeholder:"点击选择加油点",disabled:e.isFromScan,rules:[{required:!0,message:"请选择加油点"}]},on:{click:e.handlerPicker}}),r("van-field",{staticClass:"field",attrs:{type:"number",label:"加油升数",placeholder:"请输入加油升数",rules:[{required:!0,message:"请输入加油升数"}]},model:{value:e.formObj.oilLnum,callback:function(t){e.$set(e.formObj,"oilLnum",t)},expression:"formObj.oilLnum"}}),r("van-field",{staticClass:"field",attrs:{name:"uploader",label:"加油图片"},scopedSlots:e._u([{key:"input",fn:function(){return[r("van-uploader",{attrs:{"max-count":"1","after-read":e.afterRead},model:{value:e.uploader,callback:function(t){e.uploader=t},expression:"uploader"}})]},proxy:!0}])}),r("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[r("van-picker",{attrs:{"show-toolbar":"",columns:e.dynamicColumns,loading:e.loading},on:{confirm:e.onConfirm,cancel:function(t){e.showPicker=!1}}})],1),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1),r("JumpToPageVue",{attrs:{pageInfo:e.pageInfo}})],1)],1)},a=[],i=r("5530"),o=r("1da1"),s=r("d4ec"),u=r("bee2"),c=r("262e"),l=r("2caf"),f=(r("96cf"),r("a9e3"),r("99af"),r("d3b7"),r("25f0"),r("b680"),r("d81d"),r("b0c0"),r("9ab4")),p=r("1b40"),d=r("208a"),m=r("06af"),b=r("9c8f"),h=r("8f93"),v=r("b047"),g=r.n(v),j=r("bd9f"),O=r("b8f0"),y=r("c428"),k=r("901e"),w=r.n(k),x=function(e){Object(c["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.apply(this,arguments),e.pageLoading=!0,e.showPicker=!1,e.loading=!1,e.columns=[],e.uploader=[],e.uploader1=[],e.value="",e.userInfo={},e.formObj={userId:"",carNo:"",carName:"",carId:"",carProxyFee:"",oilName:"",oilId:"",oilProxyFee:"",oilLnum:"",oilImg:"",phone:"",gasMode:""},e.throttleSubmit=g()((function(){e.onSubmit()}),500),e}return Object(u["a"])(r,[{key:"pageInfo",get:function(){return{name:"driverGas",title:"加油记录"}}},{key:"dynamicColumns",get:function(){return this.columns}},{key:"onSubmit",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(this.formObj.oilLnum)<=0)){e.next=3;break}return this.$toast("加油升数不能小于0"),e.abrupt("return");case 3:if("divide"!==(null===(t=this.userInfo)||void 0===t?void 0:t.gasMode)){e.next=7;break}if(!(new w.a((null===(r=this.userInfo)||void 0===r?void 0:r.availableLum)||0).minus(this.formObj.oilLnum).toNumber()<0)){e.next=7;break}return this.$toast("可用升数不足，请先充值 !"),e.abrupt("return");case 7:this.$dialog.confirm({title:"",message:'<div>加油点: <span class="oil-text">'.concat(this.formObj.oilName,' </span></div><div>加油升数: <span class="oil-text">').concat(this.formObj.oilLnum,"</span> 升 ?</div>"),beforeClose:this.beforeCloseDialog});case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"beforeCloseDialog",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("confirm"!==t){e.next=18;break}if(e.prev=1,"divide"!==(null===(n=this.userInfo)||void 0===n?void 0:n.gasMode)){e.next=6;break}return e.next=5,Object(O["i"])({isEncrypt:!0,jsonObject:{_id:null===(a=this.userInfo)||void 0===a?void 0:a._id,availableLum:new w.a((null===(o=this.userInfo)||void 0===o?void 0:o.availableLum)||0).minus(this.formObj.oilLnum).toFixed(2).toString()}});case 5:e.sent;case 6:return e.next=8,Object(b["a"])(Object(i["a"])({},this.formObj));case 8:this.$toast("加油成功"),r(),this.$router.push({name:"driverGas"}),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),r();case 16:e.next=19;break;case 18:r();case 19:case"end":return e.stop()}}),e,this,[[1,13]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"afterRead",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.status="uploading",t.message="上传中...",r=new FormData,e.next=5,this.$compression(t.file);case 5:return n=e.sent,r.append("file",n.file),e.next=9,Object(h["a"])(r);case 9:a=e.sent,t.status="done",this.formObj.oilImg=a.url;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"onConfirm",value:function(e){this.formObj=Object(i["a"])(Object(i["a"])({},this.formObj),e.value),this.showPicker=!this.showPicker}},{key:"handlerPicker",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isFromScan){e.next=3;break}return this.$toast("扫码不能手动修改加油点"),e.abrupt("return");case 3:return this.columns=[],this.loading=!0,this.showPicker=!this.showPicker,e.next=8,Object(d["g"])();case 8:t=e.sent,t=t.map((function(e){return{text:e.name,value:{oilName:e.name,oilId:e._id,oilProxyFee:e.proxyFee}}})),this.columns=t,this.loading=!1;case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"isFromScan",get:function(){var e,t;return(null===(e=this.$route.query)||void 0===e?void 0:e.userId)&&"driverGasManage"===(null===(t=this.$route.query)||void 0===t?void 0:t.toPage)}},{key:"created",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isFromScan){e.next=7;break}return e.next=3,Object(O["f"])(this.$route.query.userId);case 3:t=e.sent,this.formObj.oilName=t.gasName,this.formObj.oilId=t.gasId,this.formObj.oilProxyFee=t.gasProxyFee;case 7:return e.next=9,Object(m["a"])();case 9:r=e.sent,this.userInfo=r,this.formObj.carNo=r.carNo,this.formObj.carName=r.carName,this.formObj.carId=r.carId,this.formObj.carProxyFee=r.carProxyFee,this.formObj.userId=r._id,this.formObj.gasMode=r.gasMode,this.formObj.phone=r.phone,this.pageLoading=!1;case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),r}(p["c"]);x=Object(f["a"])([Object(p["a"])({components:{JumpToPageVue:j["a"],Loading:y["a"]}})],x);var P=x,R=P,I=(r("ddf2"),r("cfe7"),r("2877")),L=Object(I["a"])(R,n,a,!1,null,"455d25ac",null);t["default"]=L.exports},"9c8f":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return c}));var n=r("15fd"),a=r("1da1"),i=(r("99af"),r("96cf"),r("78b1")),o=["perPage","queryPage"];function s(e){return u.apply(this,arguments)}function u(){return u=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].post("/oil/createOilRecord",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r,a,s,u,c,l,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.jsonObject,a=r.perPage,s=void 0===a?10:a,u=r.queryPage,c=void 0===u?1:u,l=Object(n["a"])(r,o),e.next=3,i["a"].post("/oil/getCurrentLoginGasRecord?per_page=".concat(s,"&query_page=").concat(c),l);case 3:return f=e.sent,e.abrupt("return",f);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}},cea6:function(e,t,r){},cfe7:function(e,t,r){"use strict";r("cea6")},ddf2:function(e,t,r){"use strict";r("45f6")}}]);