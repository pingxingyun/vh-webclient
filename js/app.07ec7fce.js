(function(t){function e(e){for(var o,r,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vh-webclient/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bfd":function(t,e,n){},"24f8":function(t,e,n){"use strict";n("0bfd")},5386:function(t,e,n){"use strict";n("8deb")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i={ref:"appContainer"},a={key:0,style:{position:"absolute","z-index":"99999"}},r=Object(o["f"])("h1",{style:{color:"red"}},"等待10S（这个不是倒计时）",-1),c=[r],l={key:1,style:{position:"absolute","z-index":"99999"}},s={key:2,class:"ui"},u={class:"chat"},d={class:"func"},p={class:"content"},f={key:0,class:"content-vm"},h={class:"content-text"},v={key:1,class:"content-user"},b={class:"content-text"},g={ref:"hiddenScroller",style:{height:"50px"}},m={class:"input"},y={class:"textInput"},O={class:"submit"},j={class:"controls"},C={class:"control-group"},k={class:"control-group"},S={class:"control-group"},w={class:"control-group"},x=Object(o["f"])("div",{class:"nav"},[Object(o["f"])("a",{href:"https://www.pingxingyun.com/"},[Object(o["f"])("button",null,"返回首页")])],-1);function R(t,e,n,r,R,I){var E=Object(o["p"])("font-awesome-icon"),T=Object(o["p"])("Slider");return Object(o["l"])(),Object(o["e"])("div",i,[R.wait?(Object(o["l"])(),Object(o["e"])("div",a,c)):(Object(o["l"])(),Object(o["e"])("div",l,[Object(o["f"])("button",{onClick:e[0]||(e[0]=function(){return I.playVideo&&I.playVideo.apply(I,arguments)})},"Play")])),R.showUi?(Object(o["l"])(),Object(o["e"])("div",s,[Object(o["f"])("div",u,[Object(o["f"])("div",d,[Object(o["g"])(E,{icon:["fas","trash"],size:"lg",onClick:I.clearContent},null,8,["onClick"])]),Object(o["f"])("div",p,[(Object(o["l"])(!0),Object(o["e"])(o["a"],null,Object(o["o"])(R.chatContent,(function(t,e){return Object(o["l"])(),Object(o["e"])("div",{key:e},["vm"==t.type?(Object(o["l"])(),Object(o["e"])("div",f,[Object(o["g"])(E,{icon:["fas","user-astronaut"],size:"2x"}),Object(o["f"])("div",h,Object(o["q"])(t.text),1)])):(Object(o["l"])(),Object(o["e"])("div",v,[Object(o["f"])("div",b,Object(o["q"])(t.text),1),Object(o["g"])(E,{icon:["fas","user-circle"],size:"2x"})]))])})),128)),Object(o["f"])("div",g,null,512)]),Object(o["f"])("div",m,[Object(o["f"])("div",{class:Object(o["j"])(I.recodeIconClass),onTouchstart:e[1]||(e[1]=function(){return I.startRecode&&I.startRecode.apply(I,arguments)}),onTouchend:e[2]||(e[2]=function(){return I.stopRecode&&I.stopRecode.apply(I,arguments)}),onTouchcancel:e[3]||(e[3]=function(){return I.stopRecode&&I.stopRecode.apply(I,arguments)}),onMousedown:e[4]||(e[4]=function(){return I.startRecode&&I.startRecode.apply(I,arguments)}),onMouseup:e[5]||(e[5]=function(){return I.stopRecode&&I.stopRecode.apply(I,arguments)}),onMouseleave:e[6]||(e[6]=function(){return I.stopRecode&&I.stopRecode.apply(I,arguments)})},[Object(o["g"])(E,{icon:["fas","microphone"],size:"3x"})],34),Object(o["f"])("div",y,[Object(o["t"])(Object(o["f"])("input",{"onUpdate:modelValue":e[7]||(e[7]=function(t){return R.inputValue=t}),onFocus:e[8]||(e[8]=function(){return I.onInputFocus&&I.onInputFocus.apply(I,arguments)}),onBlur:e[9]||(e[9]=function(){return I.onInputBlur&&I.onInputBlur.apply(I,arguments)}),placeholder:"hi,say something to me..."},null,544),[[o["r"],R.inputValue]])]),Object(o["f"])("div",O,[Object(o["f"])("button",{onClick:e[10]||(e[10]=function(){return I.sendText&&I.sendText.apply(I,arguments)})},"发送")])])]),Object(o["f"])("div",j,[Object(o["f"])("div",C,[Object(o["g"])(T,{onChange:I.changeAngle,max:180,min:-180},null,8,["onChange"])]),Object(o["f"])("div",k,[Object(o["f"])("button",{onClick:e[11]||(e[11]=function(t){return I.changeZoom(0)})},"全身"),Object(o["f"])("button",{onClick:e[12]||(e[12]=function(t){return I.changeZoom(50)})},"半身"),Object(o["f"])("button",{onClick:e[13]||(e[13]=function(t){return I.changeZoom(100)})},"特写")]),Object(o["f"])("div",S,[Object(o["f"])("button",{onClick:e[14]||(e[14]=function(t){return I.changeAlign(0)})},"对齐左"),Object(o["f"])("button",{onClick:e[15]||(e[15]=function(t){return I.changeAlign(1)})},"对齐中"),Object(o["f"])("button",{onClick:e[16]||(e[16]=function(t){return I.changeAlign(2)})},"对齐右")]),Object(o["f"])("div",w,[Object(o["f"])("button",{onClick:e[17]||(e[17]=function(t){return I.changeBg(1)})},"背景1"),Object(o["f"])("button",{onClick:e[18]||(e[18]=function(t){return I.changeBg(2)})},"背景2"),Object(o["f"])("button",{onClick:e[19]||(e[19]=function(t){return I.changeBg(3)})},"背景3")])]),x])):Object(o["d"])("",!0)],512)}n("e9c4");var I=n("e3d4"),E=function(t){return Object(o["n"])("data-v-4b13f0e6"),t=t(),Object(o["m"])(),t},T={class:"slider",ref:"slider"},J=E((function(){return Object(o["f"])("div",{class:"slider-button"},null,-1)}));function B(t,e,n,i,a,r){return Object(o["l"])(),Object(o["e"])("div",{class:"slider-wraper",onMouseup:e[3]||(e[3]=function(){return r.onEnd&&r.onEnd.apply(r,arguments)}),onMousecancel:e[4]||(e[4]=function(){return r.onEnd&&r.onEnd.apply(r,arguments)}),onMouseleave:e[5]||(e[5]=function(){return r.onEnd&&r.onEnd.apply(r,arguments)}),onMousemove:e[6]||(e[6]=function(){return r.onMove&&r.onMove.apply(r,arguments)})},[Object(o["f"])("div",T,[Object(o["f"])("div",{class:"slider-bar",style:Object(o["k"])(r.barStyle)},null,4),Object(o["f"])("div",{class:"slider-button-wraper",style:Object(o["k"])(r.buttonWraperStyle),onMouseenter:e[0]||(e[0]=function(){return r.onEnter&&r.onEnter.apply(r,arguments)}),onMouseleave:e[1]||(e[1]=function(){return r.onLeave&&r.onLeave.apply(r,arguments)}),onMousedown:e[2]||(e[2]=function(){return r.onStart&&r.onStart.apply(r,arguments)})},[Object(o["f"])("div",{class:Object(o["j"])(r.tooltipClass)},Object(o["q"])(r.computedValue),3),J],36)],512)],32)}function V(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect();return{top:e.top,left:e.left,right:e.right,bottom:e.bottom}}return{top:0,left:0,right:0,bottom:0}}function M(t){var e=V(t);return{width:e.right-e.left,height:e.bottom-e.top}}var z={props:["min","max"],components:{},data:function(){return{tooltip:!1,value:50,sliderSize:{width:0,height:0},started:!1}},computed:{computedValue:function(){var t=this.min?this.min:0,e=this.max?this.max:100,n=e-t;return Math.round(n*this.value/100)+t},tooltipClass:function(){return this.tooltip?"slider-button-tooltip":"slider-button-tooltip hide"},barStyle:function(){return"width:"+this.value+"%"},buttonWraperStyle:function(){return"left:"+this.value+"%"}},methods:{onEnter:function(){this.tooltip=!0},onLeave:function(){this.tooltip=!1},onStart:function(){this.started=!0},onEnd:function(){this.started=!1},onMove:function(t){if(this.started&&(0==this.sliderSize.width&&this.$refs["slider"]&&(this.sliderSize=M(this.$refs["slider"])),0!=this.sliderSize.width)){var e=this.value+t.movementX/this.sliderSize.width*100;e>100||e<0||(this.value=e,this.$emit("change",this.computedValue))}}},mounted:function(){console.log("slider size",M(this.$refs["slider"])),this.$refs["slider"]&&(this.sliderSize=M(this.$refs["slider"]))}},L=(n("24f8"),n("6b0d")),A=n.n(L);const N=A()(z,[["render",B],["__scopeId","data-v-4b13f0e6"]]);var D=N,P=n("3a34"),W=n.n(P),$={InitConfig:0,TextInput:1,CameraControl:2,ClientSize:3,Background:4},_={name:"App",components:{Slider:D},data:function(){return{wait:!0,chatContent:[],larksr:null,inputValue:"",showUi:!1,recoder:null,recodeTimer:null,savedCamera:{align:1,zoom:50,angle:0},meidaplaymute:!1,vconsole:null}},computed:{recodeIconClass:function(){return null!==this.recoder?"recoding recoder":"recoder"}},methods:{startRecode:function(t){var e;(console.log("start recode"),t.preventDefault(),this.meidaplaymute)&&(null===(e=this.larksr)||void 0===e||e.videoComponent.sountPlayout(),this.meidaplaymute=!1);this.larksr.startAiDmVoiceInput()},stopRecode:function(t){console.log("stop recode"),t.preventDefault(),this.larksr.stopAiDmVoiceInput()},pauseRecode:function(){console.log("pause recode"),this.larksr.stopAiDmVoiceInput()},vmOutput:function(t,e){this.chatContent.push({id:t,type:"vm",text:e}),this.$refs.hiddenScroller.scrollIntoView({behavior:"smooth"})},userInput:function(t,e){for(var n=!1,o=this.chatContent.length-1;o>=0;o--)this.chatContent[o].id==t&&(this.chatContent[o].text=e,n=!0);n||this.chatContent.push({id:t,type:"user",text:e}),this.$refs.hiddenScroller.scrollIntoView({behavior:"smooth"})},clearContent:function(){this.chatContent=[]},onInputFocus:function(){var t;console.log("onInputFocus",this.larksr.op.setKeyboardEnable),null===(t=this.larksr)||void 0===t||t.op.setKeyboardEnable(!1)},onInputBlur:function(){var t;console.log("onInputBlur"),null===(t=this.larksr)||void 0===t||t.op.setKeyboardEnable(!0)},sendInitConfig:function(){var t;null===(t=this.larksr)||void 0===t||t.sendTextToDataChannel(JSON.stringify({type:$.InitConfig,data:{background:1,hair:1,clothing:1}}))},sendText:function(){var t;this.meidaplaymute&&(null===(t=this.larksr)||void 0===t||t.videoComponent.sountPlayout(),this.meidaplaymute=!1);if(this.inputValue){var e=this.larksr.aiDmTextInput(this.inputValue);this.userInput(e,this.inputValue),this.inputValue=""}else console.log("input empty")},changeBg:function(t){var e;null===(e=this.larksr)||void 0===e||e.sendTextToDataChannel(JSON.stringify({type:$.Background,data:{backgound:t}}))},changeAngle:function(t){var e;this.savedCamera.angle=t,null===(e=this.larksr)||void 0===e||e.sendTextToDataChannel(JSON.stringify({type:$.CameraControl,data:this.savedCamera}))},changeZoom:function(t){var e;this.savedCamera.zoom=t,null===(e=this.larksr)||void 0===e||e.sendTextToDataChannel(JSON.stringify({type:$.CameraControl,data:this.savedCamera}))},changeAlign:function(t){var e;this.savedCamera.align=t,null===(e=this.larksr)||void 0===e||e.sendTextToDataChannel(JSON.stringify({type:$.CameraControl,data:this.savedCamera})),console.log("send align ",this.savedCamera)},clientSize:function(t,e){var n;null===(n=this.larksr)||void 0===n||n.sendTextToDataChannel(JSON.stringify({type:$.ClientSize,data:{platform:"win32",width:t,height:e,scale:1}}))},createLarkSR:function(){var t=this;console.log("LarkSR ",this.$refs["appContainer"]);var e=new I["LarkSR"]({rootElement:this.$refs["appContainer"],serverAddress:"https://cloudlark.pingxingyun.com:8586/",authCode:"6b09421012994a2bba959b556fc2b78f",scaleMode:"contain",fullScreenMode:0,frameRate:60,codeRate:8e3});e.on("connect",(function(t){console.log("LarkSRClientEvent CONNECT",t)})),e.on("gotremotesteam",(function(t){console.log("LarkSRClientEvent gotremotesteam",t)})),e.on("meidaloaded",(function(e){console.log("LarkSRClientEvent meidaloaded",e),t.showUi=!0})),e.on("mediaplaysuccess",(function(t){console.log("LarkSRClientEvent mediaplaysuccess",t)})),e.on("mediaplayfailed",(function(t){console.log("LarkSRClientEvent mediaplayfailed",t)})),e.on("meidaplaymute",(function(e){console.log("LarkSRClientEvent meidaplaymute",e),t.meidaplaymute=!0})),e.on("datachannelopen",(function(n){console.log("datachannel open",n),t.clientSize(e.screenState.viewPort.width,e.screenState.viewPort.height),t.sendInitConfig()})),e.on("datachanneltext",(function(e){try{var n=JSON.parse(e.data);console.log("datachannel cmd",n),4==n.type&&"PROJECT_READY"==n.data.text&&t.changeAlign(0)}catch(o){console.log("parse datachannel json cmd failed",e.data)}})),console.log("load appli success",this.larksr),e.on("error",(function(t){console.error("LarkSRClientEvent error",t),alert(JSON.stringify(t.message))})),e.on("info",(function(t){console.log("LarkSRClientEvent info",t)})),e.on("aivoicestatus",(function(e){console.log("aivoicestatus",e),t.vmOutput(0,JSON.stringify(e.data))})),e.on("aivoiceasrresult",(function(e){console.log("aivoiceasrresult",e.data),t.userInput(e.data.voiceId,e.data.text)})),e.on("aivoicedmresult",(function(e){try{var n=JSON.parse(e.data.text);console.log("aivoicedmresult",n),t.vmOutput(e.data.voiceId,n.dm.nlg)}catch(e){console.warn("parse aivoicedmresult failed",e.data)}})),e.on("aivoiceerror",(function(t){alert(JSON.stringify(t.data))})),this.larksr=e,document.addEventListener("WeixinJSBridgeReady",(function(){console.warn("WeixinJSBridgeReady play video"),e.videoComponent.playVideo()}),!1),window["WeixinJSBridge"]?(console.warn("WeixinJSBridge exits; try play video",window["WeixinJSBridge"]),window["WeixinJSBridge"].ready((function(){console.warn("WeixinJSBridge exits; play video",window["WeixinJSBridge"]),e.videoComponent.playVideo()}))):console.warn("WeixinJSBridge empty",window["WeixinJSBridge"])},playVideo:function(){console.log("manu play out"),this.larksr?this.larksr.videoComponent.playVideo():console.warn("lark sr not ready",this.larksr)}},mounted:function(){var t=this;this.createLarkSR(),window.setTimeout((function(){t.wait=!1,t.larksr.updateServerAddress("https://cloudlark.pingxingyun.com:8586/"),t.larksr.connect({appliId:"949293606043123712"}).then((function(){})).catch((function(t){alert(JSON.stringify(t))}))}),1e4),this.vconsole=new W.a},beforeUnmount:function(){this.larksr.app.disConnect(),this.larksr=null,this.vconsole&&this.vconsole.destroy()}};n("5386");const F=A()(_,[["render",R]]);var U=F,Z=(n("e6c6"),n("ecee")),q=n("c074"),K=n("ad3d");Z["c"].add(q["c"],q["b"],q["a"],q["d"],q["f"],q["e"]),Object(o["c"])(U).component("font-awesome-icon",K["a"]).mount("#app")},"8deb":function(t,e,n){},e6c6:function(t,e,n){}});