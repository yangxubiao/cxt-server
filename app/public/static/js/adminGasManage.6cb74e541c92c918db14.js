(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminGasManage"],{"83b1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pageLoading?n("Loading"):n("div",{staticClass:"wrapper"},[n("van-form",{staticClass:"container",on:{submit:e.throttleSubmit}},[n("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:e.formObj.oilName,label:"加油点",placeholder:"点击选择加油点",rules:[{required:!0,message:"请选择加油点"}]},on:{click:e.handlerPicker}}),n("van-field",{attrs:{type:"number",label:"加油升数",placeholder:"请输入加油升数",rules:[{required:!0,message:"请输入加油升数"}]},model:{value:e.formObj.oilLnum,callback:function(t){e.$set(e.formObj,"oilLnum",t)},expression:"formObj.oilLnum"}}),n("van-field",{attrs:{name:"uploader",label:"加油图片"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-uploader",{attrs:{"max-count":"1","after-read":e.afterRead},model:{value:e.uploader,callback:function(t){e.uploader=t},expression:"uploader"}})]},proxy:!0}])}),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.dynamicColumns,loading:e.loading},on:{confirm:e.onConfirm,cancel:function(t){e.showPicker=!1}}})],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1),n("JumpToPageVue",{attrs:{pageInfo:e.pageInfo}})],1)],1)},r=[],i=n("15fd"),o=n("5530"),s=n("1da1"),u=n("d4ec"),c=n("bee2"),l=n("262e"),m=n("2caf"),d=(n("96cf"),n("a9e3"),n("99af"),n("d3b7"),n("25f0"),n("b680"),n("d81d"),n("b0c0"),n("9ab4")),f=n("1b40"),b=n("208a"),p=n("8f93"),h=n("b047"),v=n.n(h),g=n("bd9f"),O=n("c428"),j=n("901e"),k=n.n(j),w=n("b8f0"),x=["updatedAt","createdAt"],y=function(e){Object(l["a"])(n,e);var t=Object(m["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.pageLoading=!0,e.showPicker=!1,e.loading=!1,e.columns=[],e.uploader=[],e.uploader1=[],e.userInfo={},e.lastOilLum="0",e.value="",e.formObj={userId:"",carNo:"",carName:"",carId:"",carProxyFee:"",oilName:"",oilId:"",oilProxyFee:"",oilLnum:"",oilImg:"",_id:"",gasMode:""},e.throttleSubmit=v()((function(){e.onSubmit()}),500),e}return Object(c["a"])(n,[{key:"pageInfo",get:function(){return{name:"adminGas",title:"加油记录"}}},{key:"dynamicColumns",get:function(){return this.columns}},{key:"onSubmit",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(this.formObj.oilLnum)<=0)){e.next=3;break}return this.$toast("加油升数不能小于0"),e.abrupt("return");case 3:if(this.uploader.length||(this.formObj.oilImg=""),"divide"!==(null===(t=this.formObj)||void 0===t?void 0:t.gasMode)){e.next=8;break}if(!(new k.a((null===(n=this.userInfo)||void 0===n?void 0:n.availableLum)||0).plus(this.lastOilLum).minus(this.formObj.oilLnum).toNumber()<0)){e.next=8;break}return this.$toast("可用升数不足，请先充值 !"),e.abrupt("return");case 8:this.$dialog.confirm({title:"",message:'<div>加油点: <span class="oil-text">'.concat(this.formObj.oilName,' </span></div><div>加油升数: <span class="oil-text">').concat(this.formObj.oilLnum,"</span> 升 ?</div>"),beforeClose:this.beforeCloseDialog});case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"beforeCloseDialog",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("confirm"!==t){e.next=18;break}if(e.prev=1,"divide"!==(null===(a=this.userInfo)||void 0===a?void 0:a.gasMode)){e.next=6;break}return e.next=5,Object(w["i"])({isEncrypt:!0,jsonObject:{_id:null===(r=this.userInfo)||void 0===r?void 0:r._id,availableLum:new k.a((null===(i=this.userInfo)||void 0===i?void 0:i.availableLum)||0).plus(this.lastOilLum).minus(this.formObj.oilLnum).toFixed(2).toString()}});case 5:e.sent;case 6:return e.next=8,Object(b["k"])({isEncrypt:!0,jsonObject:this.formObj});case 8:this.$toast("修改成功"),n(),this.$router.push({name:"adminGas"}),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),n();case 16:e.next=19;break;case 18:n();case 19:case"end":return e.stop()}}),e,this,[[1,13]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"afterRead",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.status="uploading",t.message="上传中...",n=new FormData,e.next=5,this.$compression(t.file);case 5:return a=e.sent,n.append("file",a.file),e.next=9,Object(p["a"])(n);case 9:r=e.sent,t.status="done",this.formObj.oilImg=r.url;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"onConfirm",value:function(e){this.formObj=Object(o["a"])(Object(o["a"])({},this.formObj),e.value),this.showPicker=!this.showPicker}},{key:"handlerPicker",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.columns=[],this.loading=!0,this.showPicker=!this.showPicker,e.next=5,Object(b["h"])();case 5:t=e.sent,t=t.map((function(e){return{text:e.name,value:{oilName:e.name,oilId:e._id,oilProxyFee:e.proxyFee}}})),this.columns=t,this.loading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["j"])(this.$route.query.id);case 2:return t=e.sent,t.updatedAt,t.createdAt,n=Object(i["a"])(t,x),this.lastOilLum=n.oilLnum,e.next=7,Object(w["f"])(t.userId);case 7:this.userInfo=e.sent,n.oilImg&&(this.uploader=[{url:n.oilImg}]),this.formObj=n,this.pageLoading=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(f["c"]);y=Object(d["a"])([Object(f["a"])({components:{JumpToPageVue:g["a"],Loading:O["a"]}})],y);var L=y,I=L,P=(n("9733"),n("9cb4"),n("2877")),R=Object(P["a"])(I,a,r,!1,null,"67bf9ce4",null);t["default"]=R.exports},9733:function(e,t,n){"use strict";n("d069")},"9cb4":function(e,t,n){"use strict";n("b592")},b592:function(e,t,n){},d069:function(e,t,n){}}]);