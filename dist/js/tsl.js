!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.TSL=i():t.TSL=i()}(this,function(){return function(t){function i(e){if(s[e])return s[e].exports;var o=s[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var s={};return i.m=t,i.c=s,i.p="",i(0)}([function(t,i,s){function e(t){this.opts=$.extend(!0,{isDisableAutoLoad:!1,isDisableScroll:!1,defaultTabIndex:0,startPage:1,iScroll:".J_iScroll",isTabSticky:!0,className:{tabWrap:"J_tabWrap",tabActive:"tab-active",tabTag:"li",contWrap:"J_contWrap",contActive:"cont-active",cont:"cont",items:"__items__"},load:function(){},render:function(t){},tabClick:function(t){},scroll:function(t){}},t),this.WINDOW_HEIGHT=$(window).height(),this.$tabWrap=$("."+this.opts.className.tabWrap),this.$contWrap=$("."+this.opts.className.contWrap),this.$cont=null,this.$items=null,this.arr_tab=[],this.curTabIndex=this.opts.defaultTabIndex||0,this.oCurTab={},this.isHasTab=!!this.$tabWrap.length,this.y=0,this.loader=new n(this.opts.loading),this.timer=null,this.init()}var o=s(1);s(2);var n=s(3);e.prototype={init:function(){this.loader.init(),this.setSticky(),this.setIScroll(),this.bindClick(),this.setDOM(),this.start(),this.bindEvent()},start:function(){if(this.arr_tab[this.curTabIndex].isEnd)return!1;var t=this;t.getContainer(),t.loader.show(),clearTimeout(t.timer),t.timer=setTimeout(function(){t.opts.load.call(t)},500)},render:function(t){var i=this;this.$items=this.$cont.eq(this.curTabIndex).find("."+this.opts.className.items),this.opts.render.call(this,t),this.oCurTab.page++,this.oCurTab.isRender=!0,this.loader.inform("- 上滑继续加载 -"),this.opts.isDisableAutoLoad||this.isOut()?this.setMinHeight():i.start()},fail:function(t){this.oCurTab.isEnd=!0,this.loader.inform(t),this.setMinHeight()},bindClick:function(){if(!this.isHasTab)return!1;var t=this;this.$tabWrap.on("click",t.opts.className.tabTag,function(){if($(this).hasClass(t.opts.className.tabActive))return!1;var i=$(this).index();t.curTabIndex=i,t.oCurTab=t.arr_tab[i],$(this).addClass(t.opts.className.tabActive).siblings(t.opts.className.tabTag).removeClass(t.opts.className.tabActive),t.$cont.eq(i).addClass(t.opts.className.contActive).show().siblings("."+t.opts.className.cont).removeClass(t.opts.className.contActive).hide(),t.opts.iScroll&&setTimeout(function(){window.myScroll.scrollToElement("li:nth-child("+(i+1)+")",200,!0)},200);var s=t.oCurTab.scroll;t.opts.isTabSticky&&t.sticky.isFixed?t.oCurTab.isRender?(s=s<t.sticky.arr_tops[0]?t.y:s,window.scrollTo(0,s)):(window.scrollTo(0,t.y),t.start()):(t.oCurTab.scroll=$(window).scrollTop(),t.oCurTab.isRender||t.start()),t.opts.tabClick.call(t,$(this))})},bindEvent:function(){var t=this;window.addEventListener("scroll",function(){if(t.opts.isDisableScroll||t.loader.isLoading())return!1;var i=$(window).scrollTop(),s=$(document.body).height();i>=s-t.WINDOW_HEIGHT&&t.start(),t.isHasTab&&(t.oCurTab.scroll=i),t.opts.scroll.call(t,i)})},getContainer:function(){var t=this.$cont.eq(this.curTabIndex);this.loader.container=t},isOut:function(){return this.loader.container.height()+this.loader.container.offset().top>this.WINDOW_HEIGHT},setMinHeight:function(){return!this.isSetMinHeight&&void(this.isOut()&&this.isHasTab&&(this.$contWrap.css("min-height",this.WINDOW_HEIGHT),this.isSetMinHeight=!0))},setSticky:function(){this.isHasTab&&this.opts.isTabSticky&&(this.sticky=this.$tabWrap.sticky({top:-1}),this.y=this.sticky.arr_tops[0]+2)},setIScroll:function(){this.isHasTab&&this.opts.iScroll&&(window.myScroll=new o(this.opts.iScroll,{fixedScrollBar:!0,bindToWrapper:!1,eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1}))},setDOM:function(){var t=this,i="",s={page:this.opts.startPage,isRender:!1,isEnd:!1,scroll:0};this.isHasTab?this.$tabWrap.find(t.opts.className.tabTag).each(function(e,o){t.arr_tab.push($.extend(!0,{},s)),i+='<div class="'+t.opts.className.cont+" "+(0==e?t.opts.className.contActive:"")+'">\t\t\t\t\t\t\t\t\t<div class="'+t.opts.className.items+'"></div>\t\t\t\t\t\t\t\t</div>'}):(this.arr_tab.push($.extend(!0,{},s)),i+='<div class="'+t.opts.className.cont+" "+t.opts.className.contActive+'">\t\t\t\t\t\t\t\t\t<div class="'+t.opts.className.items+'"></div>\t\t\t\t\t\t\t</div>'),this.$contWrap.html(i),this.$cont=this.$contWrap.find("."+this.opts.className.cont),this.$items=this.$cont.eq(this.curTabIndex).find("."+this.opts.className.items),t.oCurTab=t.arr_tab[t.curTabIndex]},reload:function(){var t=this;t.loader.loading.html('<input value="重新加载" class="reloadBtn" type="button">'),t.$cont.on("click",".reloadBtn",function(){t.oCurTab.isEnd=!1,t.start()})}},window.TSL=e,"undefined"!=typeof t&&t.exports&&(t.exports=e)},function(t,i,s){var e;/*! iScroll v5.2.0-snapshot ~ (c) 2008-2017 Matteo Spinelli ~ http://cubiq.org/license */
!function(o,n,r){function a(t,i){this.wrapper="string"==typeof t?n.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={disablePointer:!l.hasPointer,disableTouch:l.hasPointer||!l.hasTouch,disableMouse:l.hasPointer||l.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:"undefined"==typeof o.onmousedown};for(var s in i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&l.hasPerspective?" translateZ(0)":"",this.options.useTransition=l.hasTransition&&this.options.useTransition,this.options.useTransform=l.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?l.ease[this.options.bounceEasing]||l.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var h=o.requestAnimationFrame||o.webkitRequestAnimationFrame||o.mozRequestAnimationFrame||o.oRequestAnimationFrame||o.msRequestAnimationFrame||function(t){o.setTimeout(t,1e3/60)},l=function(){function t(t){return e!==!1&&(""===e?t:e+t.charAt(0).toUpperCase()+t.substr(1))}var i={},s=n.createElement("div").style,e=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],e=0,o=i.length;e<o;e++)if(t=i[e]+"ransform",t in s)return i[e].substr(0,i[e].length-1);return!1}();i.getTime=Date.now||function(){return(new Date).getTime()},i.extend=function(t,i){for(var s in i)t[s]=i[s]},i.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},i.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},i.prefixPointerEvent=function(t){return o.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},i.momentum=function(t,i,s,e,o,n){var a,h,l=t-i,c=r.abs(l)/s;return n=void 0===n?6e-4:n,a=t+c*c/(2*n)*(l<0?-1:1),h=c/n,a<e?(a=o?e-o/2.5*(c/8):e,l=r.abs(a-t),h=l/c):a>0&&(a=o?o/2.5*(c/8):0,l=r.abs(t)+a,h=l/c),{destination:r.round(a),duration:h}};var a=t("transform");return i.extend(i,{hasTransform:a!==!1,hasPerspective:t("perspective")in s,hasTouch:"ontouchstart"in o,hasPointer:!(!o.PointerEvent&&!o.MSPointerEvent),hasTransition:t("transition")in s}),i.isBadAndroid=function(){var t=o.navigator.appVersion;if(/Android/.test(t)&&!/Chrome\/\d/.test(t)){var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&i.length>=2)||parseFloat(i[1])<535.19}return!1}(),i.extend(i.style={},{transform:a,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin"),touchAction:t("touchAction")}),i.hasClass=function(t,i){var s=new RegExp("(^|\\s)"+i+"(\\s|$)");return s.test(t.className)},i.addClass=function(t,s){if(!i.hasClass(t,s)){var e=t.className.split(" ");e.push(s),t.className=e.join(" ")}},i.removeClass=function(t,s){if(i.hasClass(t,s)){var e=new RegExp("(^|\\s)"+s+"(\\s|$)","g");t.className=t.className.replace(e," ")}},i.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},i.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},i.extend(i.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),i.extend(i.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return r.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,s=.4;return 0===t?0:1==t?1:s*r.pow(2,-10*t)*r.sin((t-i/4)*(2*r.PI)/i)+1}}}),i.tap=function(t,i){var s=n.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},i.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||(i=n.createEvent(o.MouseEvent?"MouseEvents":"Event"),i.initEvent("click",!0,!0),i.view=t.view||o,i.detail=1,i.screenX=s.screenX||0,i.screenY=s.screenY||0,i.clientX=s.clientX||0,i.clientY=s.clientY||0,i.ctrlKey=!!t.ctrlKey,i.altKey=!!t.altKey,i.shiftKey=!!t.shiftKey,i.metaKey=!!t.metaKey,i.button=0,i.relatedTarget=null,i._constructed=!0,s.dispatchEvent(i))},i.getTouchAction=function(t,i){var s="none";return"vertical"===t?s="pan-y":"horizontal"===t&&(s="pan-x"),i&&"none"!=s&&(s+=" pinch-zoom"),s},i.getRect=function(t){if(t instanceof SVGElement){var i=t.getBoundingClientRect();return{top:i.top,left:i.left,width:i.width,height:i.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}},i}();a.prototype={version:"5.2.0-snapshot",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=l.eventType[t.type]){var i;if(i=t.which?t.button:t.button<2?0:4==t.button?1:2,0!==i)return}if(this.enabled&&(!this.initiated||l.eventType[t.type]===this.initiated)){!this.options.preventDefault||l.isBadAndroid||l.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var s,e=t.touches?t.touches[0]:t;this.initiated=l.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=l.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,s=this.getComputedPosition(),this._translate(r.round(s.x),r.round(s.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=e.pageX,this.pointY=e.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&l.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,a=n.pageX-this.pointX,h=n.pageY-this.pointY,c=l.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=a,this.distY+=h,e=r.abs(this.distX),o=r.abs(this.distY),!(c-this.endTime>300&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}a=this.hasHorizontalScroll?a:0,h=this.hasVerticalScroll?h:0,i=this.x+a,s=this.y+h,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+a/3:i>0?0:this.maxScrollX),(s>0||s<this.maxScrollY)&&(s=this.options.bounce?this.y+h/3:s>0?0:this.maxScrollY),this.directionX=a>0?-1:a<0?1:0,this.directionY=h>0?-1:h<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),c-this.startTime>300&&(this.startTime=c,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&l.eventType[t.type]===this.initiated){this.options.preventDefault&&!l.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var i,s,e=(t.changedTouches?t.changedTouches[0]:t,l.getTime()-this.startTime),o=r.round(this.x),n=r.round(this.y),a=r.abs(o-this.startX),h=r.abs(n-this.startY),c=0,p="";if(this.isInTransition=0,this.initiated=0,this.endTime=l.getTime(),!this.resetPosition(this.options.bounceTime))return this.scrollTo(o,n),this.moved?this._events.flick&&e<200&&a<100&&h<100?void this._execEvent("flick"):(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?l.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?l.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,c=r.max(i.duration,s.duration),this.isInTransition=1),o!=this.x||n!=this.y?((o>0||o<this.maxScrollX||n>0||n<this.maxScrollY)&&(p=l.ease.quadratic),void this.scrollTo(o,n,c,p)):void this._execEvent("scrollEnd")):(this.options.tap&&l.tap(t,this.options.tap),this.options.click&&l.click(t),void this._execEvent("scrollCancel"))}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){l.getRect(this.wrapper),this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight;var t=l.getRect(this.scroller);this.scrollerWidth=t.width,this.scrollerHeight=t.height,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,l.hasPointer&&!this.options.disablePointer&&(this.wrapper.style[l.style.touchAction]=l.getTouchAction(this.options.eventPassthrough,!0),this.wrapper.style[l.style.touchAction]||(this.wrapper.style[l.style.touchAction]=l.getTouchAction(this.options.eventPassthrough,!1))),this.wrapperOffset=l.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);s>-1&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||l.ease.circular,this.isInTransition=this.options.useTransition&&s>0;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=l.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top;var a=l.getRect(t),h=l.getRect(this.wrapper);s===!0&&(s=r.round(a.width/2-h.width/2)),e===!0&&(e=r.round(a.height/2-h.height/2)),n.left-=s||0,n.top-=e||0,n.left=n.left>0?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=n.top>0?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=void 0===i||null===i||"auto"===i?r.max(r.abs(this.x-n.left),r.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var i=l.style.transitionDuration;if(i&&(this.scrollerStyle[i]=t+"ms",!t&&l.isBadAndroid)){this.scrollerStyle[i]="0.0001ms";var s=this;h(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}}},_transitionTimingFunction:function(t){this.scrollerStyle[l.style.transitionTimingFunction]=t},_translate:function(t,i){this.options.useTransform?this.scrollerStyle[l.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=r.round(t),i=r.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i},_initEvents:function(t){var i=t?l.removeEvent:l.addEvent,s=this.options.bindToWrapper?this.wrapper:o;i(o,"orientationchange",this),i(o,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),l.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,l.prefixPointerEvent("pointerdown"),this),i(s,l.prefixPointerEvent("pointermove"),this),i(s,l.prefixPointerEvent("pointercancel"),this),i(s,l.prefixPointerEvent("pointerup"),this)),l.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=o.getComputedStyle(this.scroller,null);return this.options.useTransform?(s=s[l.style.transform].split(")")[0].split(", "),t=+(s[12]||s[4]),i=+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),i=+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_animate:function(t,i,s,e){function o(){var u,d,f,m=l.getTime();return m>=p?(n.isAnimating=!1,n._translate(t,i),void(n.resetPosition(n.options.bounceTime)||n._execEvent("scrollEnd"))):(m=(m-c)/s,f=e(m),u=(t-r)*f+r,d=(i-a)*f+a,n._translate(u,d),void(n.isAnimating&&h(o)))}var n=this,r=this.x,a=this.y,c=l.getTime(),p=c+s;this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},a.utils=l,"undefined"!=typeof t&&t.exports?t.exports=a:(e=function(){return a}.call(i,s,i,t),!(void 0!==e&&(t.exports=e)))}(window,document,Math)},function(t,i){function s(t,i){this.$elem=t,this.opts=$.extend(!0,{placeholderName:"__placeholder__",isUseSticky:!0,top:0,zIndex:1e3},i),this.isFixed=!1,this.arr_tops=[],this.curIndex=-1,this.newCurIndex=-1,this.isInitPlaceholder=!1,this.BODY_HEIGHT=$(document.body).height(),this.init()}s.prototype={init:function(){if(!$||!this.$elem.length)return!1;var t=this;this.isSupport()&&t.$elem.addClass("sticky").css({top:t.opts.top,"z-index":t.opts.zIndex}),this.getOffsetTop(),window.addEventListener("scroll",function(){var i=$(this).scrollTop();$(document.body).height()!==t.BODY_HEIGHT&&(t.getOffsetTop(),t.BODY_HEIGHT=$(document.body).height());var s=i+t.opts.top;if(1==t.arr_tops_len)s>=t.arr_tops[0]?t.curIndex=0:t.curIndex=-1;else for(var e=0;e<t.arr_tops_len;e++)s<t.arr_tops[0]?t.curIndex=-1:s>=t.arr_tops[t.arr_tops_len-1]?t.curIndex=t.arr_tops_len-1:s>=t.arr_tops[e]&&s<t.arr_tops[e+1]&&(t.curIndex=e);t.curIndex!==t.newCurIndex&&(t.newCurIndex=t.curIndex,t.$elem.each(function(i,s){i==t.curIndex?t.fixed($(this)):t.unfixed($(this))}),t.isFixed=s>=t.arr_tops[0])})},getOffsetTop:function(){var t,i=this;this.arr_tops=[],this.$elem.each(function(s,e){var o=$(this);$(this).siblings("."+i.opts.placeholderName).length||(i.isSupport()?$(this).after('<div class="'+i.opts.placeholderName+'" style="height:1px;margin-top:-1px;">'):$(this).after('<div class="'+i.opts.placeholderName+'" style="display:none;height:'+$(this).height()+'px;">')),i.isSupport()?(o=$(this).siblings("."+i.opts.placeholderName),t=o.offset().top-$(this).height()+o.height(),i.arr_tops.push(t)):($(this).data("isFixed")&&(o=$(this).siblings("."+i.opts.placeholderName)),t=o.offset().top,i.arr_tops.push(t)),$(this).data("target",t-parseInt(i.opts.top))}),this.arr_tops_len=this.arr_tops.length},fixed:function(t){var i=this;i.isSupport()||(t.css({position:"fixed",width:"100%",left:0,top:i.opts.top,"z-index":i.opts.zIndex}),i.placeHolderShow(t)),t.data("isFixed",1)},unfixed:function(t){var i=this;i.isSupport()||(t.removeAttr("style"),i.placeHolderHide(t)),t.data("isFixed",0)},isSupport:function(){for(var t=["","-webkit-"],i="",s=0;s<t.length;s++)i+="position:"+t[s]+"sticky;";var e=document.createElement("div"),o=document.body;e.style.cssText="display:none;"+i,o.appendChild(e);var n=/sticky/i.test(window.getComputedStyle(e).position);return o.removeChild(e),e=null,!!this.opts.isUseSticky&&n},placeHolderShow:function(t){t.siblings("."+this.opts.placeholderName).show()},placeHolderHide:function(t){t.siblings("."+this.opts.placeholderName).hide()}},$.fn.sticky=function(t){return new s(this,t)},"undefined"!=typeof t&&t.exports&&(t.exports=s)},function(t,i){function s(t){this.opts=$.extend({},{styleID:"__loading_style__",className:"__loading__",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD0UlEQVRoQ+1ZUVLbMBDV+kPwVzhBwwlKT1A4AXACkh8kf7U5AeEEhC9b/ISeAHOC0hM0PUHpCRo+YQZtZzNyRngkSzZOUjpoJjOZkb3at293tbsG9soXvHL92RuAdTP4xsB/xUCe5wcAsIuIPcYY/RYLAKaIeIeIN2ma3nUF/MUupJQ6RsQ9ADhkjG3FKEZAAKDQWl+8FExrAEqpQ0Q8B4Bnlo4BYD+DiFeIeNYWSGMAk8lk6/HxccIYI4s7FyL+BIAZbSLiFgB8CACbIeJISnnR1ACNAFxeXu5qra+rVjcKXwHA7cnJydSlRJZlvSRJiLW+DxCxIaUcNAERDYCUR8RvFT//rrUepWl62+TQLMsoZsYeIFPO+f5gMJgzGFpRADzKD4UQ49ABdftKqS+MsXPHM4UQ4ihGdhCA8Xmy/K4ReK+1PmxqdZ8yxEaSJAVj7F0luC+klASwdgUB5HlOVH8ulQeAPZ+fhw7z7RuGyQ2fgdBa74cMVQvABN4v6+AjIQRZq/OVZVk/SRLKbotF94WUcqfusFoAeZ4XAHBgBJwJIUada24JrLA939FaD9I0vfKd6wVQsf4957wXmxnagjTxRmXGwpVCLHgB2BkiZIW2CrveU0oRy6eVPa/regFY7nMvhIiqcboA4og7EvtVCNF3ya9jAM0L3pe7UNjDArnR+3Kvzo2cAExuptwfDKJlgFBKUdAe27I559uuGIwBEMzFXYNwxYHvTnACoFKZMXZNigkhgpfdEgC4SgxnIPsALDLBOgDYLmwZx3kP/ZMMmNLih81sIxeyLbAOBkjxShw0S6PmRvxDggDgY9fFW2zM0J2wubk5q6sA6u6BeS5e5S1cBUauFDJe3U08L6NpDCKl9Pa/sdZs8xy5cuty2gqkGed8Z9mFnMv6T09Ps9C0ojbHK6XKK33ppXQVAPUHdWV0+XyooSmbjJWyQK7DGLsLWX+eZEK+mef51EwPVsYClfKxA4MggEq/urSWsjQkdWUbGxuj2JgLAiDBVr86A4D9UGoLserbJ8trraehzGO/HwVgFSCUUqda698xgdsKQBWE1nrY9DCX5ctZq9aaxu7e5t3HWjQDpQB7EIWIt0mSDNu6lBnND5Mk6beV0RgAASGrPTw8jMqBFw1lGWOFlPIm5P+m5/2EiEP6RsA5H8cGrEt2KwAWGz0A+GI+blAPS2NySrs0oZ7/py81AEBDAfpRft9GxAIRxzF5PmSQFwGwhZt0u0efl+gzk71nQFEGK9q6SmcxELLIqvc7Y2DVikfVQutSqsm5bww0sdYynn31DPwFeAEST8nFLJYAAAAASUVORK5CYII=",size:20,multi:2.5,html:"<i></i><span>加载中, 请稍后...</span>"},t),this.status=0,this.className=this.opts.className,this.height=this.opts.size*this.opts.multi,this.container=$(document.body)}s.prototype={constructor:s,init:function(){this.insertCSS()},insertCSS:function(){if(document.getElementById(this.opts.styleID))return!1;var t=document.createElement("style");t.id=this.opts.styleID;var i=[".<className>{text-align:center;font-size:<size>px;color:#666;height:<multi>em;line-height:<multi>em;visibility:hidden;}",".<className> i{display:inline-block;vertical-align:middle;margin-right:0.3em;background:url(<icon>) no-repeat;background-size:100%;width:0.9em;height:0.9em;animation: loader-infinite 1s infinite linear;-webkit-animation: loader-infinite 1s infinite linear;}",".<className> span{display:inline-block;vertical-align:middle;font-size:0.7em;}",".<className> input{border:1px solid #f2f2f2;width:62.5%;height:100%;padding:0;margin:0 auto;display:block;font-size:0.7em;}","@keyframes loader-infinite {0% { transform: rotate(0deg);}\t100% { transform: rotate(360deg);}}"].join("");t.innerHTML=this.replaceCss(this.opts,i),document.getElementsByTagName("head")[0].appendChild(t)},insert:function(){this.loading=null,this.container.find("."+this.className).length||this.container.append('<div class="'+this.className+'">'+this.opts.html+"</span></div>"),this.loading=this.container.find("."+this.className)},show:function(){this.insert(),this.loading.html(this.opts.html).css("visibility","visible"),this.status=1},hide:function(){this.loading.css("visibility","hidden"),this.status=0},remove:function(){this.loading.remove(),this.status=0},inform:function(t){this.loading.html("<span>"+t+"</span>"),this.status=0},isLoading:function(){return 1==this.status},replaceCss:function(t,i){for(var s in t){var e=new RegExp("<"+s+">","g");i=i.replace(e,t[s])}return i}},window.Loading=s,"undefined"!=typeof t&&t.exports&&(t.exports=s)}])});
//# sourceMappingURL=tsl.js.map