(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["adminGasManage"],{"0c75":function(e,t,n){"use strict";n("60d1")},"3ec4":function(e,t,n){"use strict";n("55d5")},"55d5":function(e,t,n){},"60d1":function(e,t,n){},"83b1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.pageLoading?n("Loading"):n("div",{staticClass:"wrapper"},[n("van-form",{staticClass:"container",on:{submit:e.throttleSubmit}},[n("van-field",{attrs:{readonly:"",clickable:"",name:"picker",value:e.formObj.oilName,label:"加油点",placeholder:"点击选择加油点",rules:[{required:!0,message:"请选择加油点"}]},on:{click:e.handlerPicker}}),n("van-field",{attrs:{type:"number",label:"加油升数",placeholder:"请输入加油升数",rules:[{required:!0,message:"请输入加油升数"}]},model:{value:e.formObj.oilLnum,callback:function(t){e.$set(e.formObj,"oilLnum",t)},expression:"formObj.oilLnum"}}),n("van-field",{attrs:{name:"uploader",label:"加油图片"},scopedSlots:e._u([{key:"input",fn:function(){return[n("van-uploader",{attrs:{"max-count":"1","after-read":e.afterRead},model:{value:e.uploader,callback:function(t){e.uploader=t},expression:"uploader"}})]},proxy:!0}])}),n("van-popup",{attrs:{position:"bottom"},model:{value:e.showPicker,callback:function(t){e.showPicker=t},expression:"showPicker"}},[n("van-picker",{attrs:{"show-toolbar":"",columns:e.dynamicColumns,loading:e.loading},on:{confirm:e.onConfirm,cancel:function(t){e.showPicker=!1}}})],1),n("div",{staticStyle:{margin:"16px"}},[n("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("提交")])],1),n("JumpToPageVue",{attrs:{pageInfo:e.pageInfo}})],1)],1)},r=[],i=n("15fd"),o=n("5530"),c=n("1da1"),s=n("d4ec"),u=n("bee2"),l=n("262e"),f=n("2caf"),m=(n("96cf"),n("a9e3"),n("99af"),n("d81d"),n("b0c0"),n("9ab4")),p=n("1b40"),d=n("208a"),b=n("8f93"),h=n("b047"),v=n.n(h),g=n("bd9f"),j=n("c428"),k=["updatedAt","createdAt"],O=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.pageLoading=!1,e.showPicker=!1,e.loading=!1,e.columns=[],e.uploader=[],e.uploader1=[],e.value="",e.formObj={userId:"",carNo:"",carName:"",carId:"",carProxyFee:"",oilName:"",oilId:"",oilProxyFee:"",oilLnum:"",oilImg:"",_id:""},e.throttleSubmit=v()((function(){e.onSubmit()}),500),e}return Object(u["a"])(n,[{key:"pageInfo",get:function(){return{name:"adminGas",title:"加油记录"}}},{key:"dynamicColumns",get:function(){return this.columns}},{key:"onSubmit",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(this.formObj.oilLnum)<=0)){e.next=3;break}return this.$toast("加油升数不能小于0"),e.abrupt("return");case 3:this.uploader.length||(this.formObj.oilImg=""),this.$dialog.confirm({title:"",message:'<div>加油点: <span class="oil-text">'.concat(this.formObj.oilName,' </span></div><div>加油升数: <span class="oil-text">').concat(this.formObj.oilLnum,"</span> 升 ?</div>"),beforeClose:this.beforeCloseDialog});case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"beforeCloseDialog",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("confirm"!==t){e.next=14;break}return e.prev=1,e.next=4,Object(d["j"])({isEncrypt:!0,jsonObject:this.formObj});case 4:this.$toast("修改成功"),n(),this.$router.push({name:"adminGas"}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),n();case 12:e.next=15;break;case 14:n();case 15:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"afterRead",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.status="uploading",t.message="上传中...",n=new FormData,e.next=5,this.$compression(t.file);case 5:return a=e.sent,n.append("file",a.file),e.next=9,Object(b["a"])(n);case 9:r=e.sent,t.status="done",this.formObj.oilImg=r.url;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"onConfirm",value:function(e){this.formObj=Object(o["a"])(Object(o["a"])({},this.formObj),e.value),this.showPicker=!this.showPicker}},{key:"handlerPicker",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.columns=[],this.loading=!0,this.showPicker=!this.showPicker,e.next=5,Object(d["g"])();case 5:t=e.sent,t=t.map((function(e){return{text:e.name,value:{oilName:e.name,oilId:e._id,oilProxyFee:e.proxyFee}}})),this.columns=t,this.loading=!1;case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(d["i"])(this.$route.query.id);case 2:t=e.sent,t.updatedAt,t.createdAt,n=Object(i["a"])(t,k),n.oilImg&&(this.uploader=[{url:n.oilImg}]),this.formObj=n,this.pageLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(p["c"]);O=Object(m["a"])([Object(p["a"])({components:{JumpToPageVue:g["a"],Loading:j["a"]}})],O);var w=O,x=w,y=(n("3ec4"),n("9cb4"),n("2877")),P=Object(y["a"])(x,a,r,!1,null,"436da26f",null);t["default"]=P.exports},"9cb4":function(e,t,n){"use strict";n("b592")},b592:function(e,t,n){},c428:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading"},[n("van-loading",{attrs:{size:"24px"}})],1)},r=[],i=n("d4ec"),o=n("262e"),c=n("2caf"),s=n("9ab4"),u=n("1b40"),l=function(e){Object(o["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);l=Object(s["a"])([u["a"]],l);var f=l,m=f,p=(n("0c75"),n("2877")),d=Object(p["a"])(m,a,r,!1,null,"be0735f6",null);t["a"]=d.exports}}]);