!function(t){var e={};function i(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}({4:function(t,e,i){"use strict";i.r(e);let r,o={loaderType:class extends class{constructor(t,e,...i){this.container=t,this.loaderOptions=e,this.scripts=i}load(){return new Promise(((t,e)=>{this.loadStart();let i=[];this.scripts.forEach(t=>i.push(this._loadScript(t))),Promise.all(i).then((()=>{this.loadEnd(),t()}).bind(this))}).bind(this))}create(){}loadStart(){}loadEnd(){}_setProgress(t){}_loadScript(t){return new Promise(((e,i)=>{var r=new XMLHttpRequest;r.open("GET",t),r.addEventListener("progress",function(t){t.lengthComputable&&this._setProgress(t.loaded/t.total)}.bind(this),!1),r.addEventListener("load",function(t){t.target;var i=document.createElement("script");i.innerHTML=r.responseText,document.documentElement.appendChild(i),e()}.bind(this),!1),r.send()}).bind(this))}}{constructor(){super(...arguments),this.bgPosition=50,this.rate=-2.5,this.animateBackground=!1,this.barColour="white",this.barBackgroundColour="grey",this.textColour="white",this.barWidth=100,this.barHeight=10,this.backgroundColour=void 0}create(){this.container||new Error("Cannot load game into container with ID '"+this.loaderOptions.gameTarget+"'. No element with that name was found."),this.bgImage=this.loaderOptions.backgroundImage,this.backgroundColour=this.loaderOptions.backgroundColor,this.barColour=this.loaderOptions.barColour,this.backgroundColour&&(this.container.style.backgroundColor=this.backgroundColour),this.div=document.createElement("div"),this.div.innerHTML='<div id="barOuter" style="                background-color: '+this.barBackgroundColour+";                 width: "+this.barWidth+"px;                 height: "+this.barHeight+'px;                 position: absolute;                 left: 50%;                 top: 80%;                 border: 0px solid black;                 transform: translate(-50%, -50%);">            <div id="barInner" style="                width: 0px;                 height: 100%;                 background-color: '+this.barColour+';"></div>            <div id="barText" style="                font-size: 10pt;                 position: absolute;                 color: '+this.textColour+';                 left: 50%;                 top: -17px;                 transform: translate(-50%, 0%);">            </div></div>',this.container.appendChild(this.div),this.bar=document.querySelector("#barOuter"),this.bar2=document.querySelector("#barInner"),this.barText=document.querySelector("#barText"),this.barText.innerText="Loading...",this.bar2.style.width="0px"}loadStart(){this.bgImage&&this._loadBackgroundImage()}loadEnd(){this.div.style.visibility="hidden",this.animateBackground=!1}_animCallback(){if(!this.lastCalledTime)return this.lastCalledTime=Date.now(),void window.requestAnimationFrame(this._animCallback.bind(this));let t=Date.now()-this.lastCalledTime;this.lastCalledTime=Date.now(),this.container.style.backgroundPositionX=this.bgPosition+"%",this.bgPosition+=this.rate*(t/1e3),this.bgPosition<=0&&(this.rate=-this.rate),this.bgPosition>100&&(this.rate=-this.rate),this.animateBackground&&window.requestAnimationFrame(this._animCallback.bind(this))}_setProgress(t){this.bar2.style.width=t*this.barWidth+"px"}_loadBackgroundImage(){var t=new Image;t.onload=function(){this.container.style.backgroundSize="cover",this.container.style.backgroundImage="url("+this.bgImage+")",this.container.style.backgroundPosition="50% 50%",this.animateBackground&&window.requestAnimationFrame(this._animCallback.bind(this))}.bind(this),t.src=this.bgImage}},gameTarget:"gameTarget",backgroundColour:"#f8f2f2",backgroundImage:void 0,barColour:"#fc6c6c",scripts:["./game.js"],loadEndCallback:()=>{}};void 0!==o.gameTarget&&(r=document.querySelector("#"+o.gameTarget));let a=new o.loaderType(r,o,...o.scripts);a.create(),a.load()}});