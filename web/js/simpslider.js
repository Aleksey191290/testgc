/*
 Simpslider v1.7 - jQuery slider for web developers
 author: Pavel A. Hryshayeu
 author email: gigatrop@gmail.com
 author site: http://psdvhtml.by
 plugin page: http://psdvhtml.by/simpslider
 license: GPL
*/

jQuery.fn.simpslider=function(D){function e(){var b=a.itemsSelector.split(","),c=$();$.each(b,function(a,b){c=d.find(b);if(c.length)return!1});return c}function q(b){b=a.dots.eq(b).addClass(a.activeClass);a.dots.not(b).removeClass(a.activeClass)}function w(){if("fade"===a.effect){var b=e();b.css({display:"none",position:"absolute",left:0,top:0,zIndex:a.itemsZ,opacity:0});b.eq(a.curID).css({display:"block",zIndex:a.itemsZ+1,opacity:100})}}function x(){a.itemsCount=e().length;w();r()}function y(b){$.extend(a,
b);x()}function t(b,c){var f=e(),p=f.eq(c),g=f.eq(b);f.not(p).not(g).css({display:"none",opacity:0,zIndex:a.itemsZ});p.css({display:"block",opacity:1,zIndex:a.itemsZ+1});a.fadePrevious&&p.animate({opacity:0},a.speed,a.easing);g.css({display:"block",opacity:0,zIndex:a.itemsZ+2}).animate({opacity:1},a.speed,a.easing,function(){k(b,c);p.css({display:"none"})})}function m(b){function c(){var c,g;"prev"!=a.touch.direction&&a.mover.prepend(e().last());if(a.horizontal){var d=b&&!a.touchSimple?a.touch.moveX-
a.touch.x-a.moveWidth:-a.moveWidth;c=b&&!a.touchSimple?a.moveWidth-(a.touch.moveX-a.touch.x):a.moveWidth;g=0<c?a.speed:0;a.mover.css("left",d+"px").animate({left:"+="+c+"px"},g,a.easing,function(){k(a.curID,f)})}else d=b&&!a.touchSimple?a.touch.y-a.touch.moveY+a.moveHeight:a.moveHeight,c=b&&!a.touchSimple?a.moveHeight-(a.touch.moveY-a.touch.y):a.moveHeight,g=0<c?a.speed:0,a.mover.css("top","-"+d+"px").animate({top:"+="+c+"px"},g,a.easing,function(){k(a.curID,f)})}if(!(2>a.itemsCount||a.moving||!a.infinit&&
!a.curID)){a.moving=!0;a.direction="prev";var f=a.curID--;a.idHistory.unshift(a.curID);0>a.curID&&(a.curID=a.itemsCount-1);a.willID=a.curID;$.isFunction(a.doBefore)&&a.doBefore(a.willID,f);q(a.curID);"move"===a.effect?c():"fade"===a.effect&&t(a.curID,f)}}function l(b){function c(){var c,g;a.horizontal?(c=b&&!a.touchSimple?a.moveWidth+(a.touch.moveX-a.touch.x):a.moveWidth,g=0<c?a.speed:0,a.mover.animate({left:"-="+c+"px"},g,a.easing,function(){a.mover.append(e().first());a.mover.css("left",0);k(a.curID,
f)})):(c=b&&!a.touchSimple?a.moveHeight+(a.touch.moveY-a.touch.y):a.moveHeight,g=0<c?a.speed:0,a.mover.animate({top:"-="+c+"px"},g,a.easing,function(){a.mover.append(e().first());a.mover.css("top",0);k(a.curID,f)}))}if(!(2>a.itemsCount||a.moving||!a.infinit&&a.curID==a.itemsCount-a.visibleCount)){a.moving=!0;a.direction="next";var f=a.curID++;a.idHistory.unshift(a.curID);a.curID>a.itemsCount-1&&(a.curID=0);a.willID=a.curID;$.isFunction(a.doBefore)&&a.doBefore(a.willID,f);q(a.curID);"move"===a.effect?
c():"fade"===a.effect&&t(a.curID,f)}}function z(b,c){function f(){var b=a.curID-d;if(0>b){for(var c=-b,f=0;f<c;f++)a.mover.prepend(e().last());a.horizontal?a.mover.css("left","-"+a.moveWidth*c+"px").animate({left:0},g,a.easing,function(){k(a.curID,d)}):a.mover.css("top","-"+a.moveHeight*c+"px").animate({top:0},g,a.easing,function(){k(a.curID,d)})}else a.horizontal?a.mover.animate({left:"+="+a.moveWidth*(d-a.curID)+"px"},g,a.easing,function(){0<b&&a.mover.css("left",0).append(e().slice(0,b));k(a.curID,
d)}):a.mover.animate({top:"+="+a.moveHeight*(d-a.curID)+"px"},g,a.easing,function(){0<b&&a.mover.css("top",0).append(e().slice(0,b));k(a.curID,d)})}if(b!=a.curID&&!(2>a.itemsCount||a.moving)){a.moving=!0;a.direction="to";var d=a.curID;a.curID=b;a.idHistory.unshift(a.curID);a.willID=a.curID;$.isFunction(a.doBefore)&&a.doBefore(a.willID,d);var g=c?0:a.speed;q(a.curID);"move"===a.effect?f():"fade"===a.effect&&t(a.curID,d)}}function k(b,c){a.moving=!1;r();$.isFunction(a.doAfter)&&a.doAfter(b,c)}function r(){a.infinit||
(a.left.toggleClass(a.disabledClass,!a.curID||a.itemsCount<a.visibleCount),a.right.toggleClass(a.disabledClass,a.curID==a.itemsCount-a.visibleCount||a.itemsCount<a.visibleCount))}function u(){v();a.iterator=setInterval(l,a.wait)}function v(){a.iterator&&clearInterval(a.iterator)}var d=$(this),h={},n=$.isFunction($.fn.on)?"on":"live",a={moveWidth:d.width(),moveWidthPercent:0,moveHeight:d.height(),mover:d.find(".mover"),left:d.find(".left"),right:d.find(".right"),autoStart:!0,speed:800,easing:"swing",
wait:5E3,stopOnHover:!0,dots:d.find("li"),itemsSelector:".item,img",horizontal:!0,doAfter:null,doBefore:null,visibleCount:1,infinit:!0,effect:"move",itemsZ:1,touchLength:50,touchSimple:!1,activeClass:"active",disabledClass:"disabled",direction:"",itemsCount:0,curID:0,willID:0,idHistory:[0],moving:!1,iterator:0,stopped:!1,touch:{started:!1,x:0,y:0,moveX:0,moveY:0,direction:""},responsive:!1,itemsWidthCoefficient:0,sidesRatio:0,itemsMarginPercent:0,fadePrevious:!1,gpu:!1};(function(){$.extend(a,D);
var b=e();a.itemsCount=b.length;"static"==a.mover.css("position")&&a.mover.css("position","relative");a.gpu&&d.add(a.overflow).add(a.mover).add(b).css({transform:"translateZ(0)","backface-visibility":"hidden",perspective:1E3});w()})();a.responsive&&function(){function b(){var b=d.width();a.itemsWidthCoefficient&&c.css("width",b*a.itemsWidthCoefficient+"px");if(a.sidesRatio){var e=b*a.itemsWidthCoefficient*a.sidesRatio+"px";a.horizontal&&d.add(a.overflow).add(a.mover).add(c).height(e)}a.itemsMarginPercent&&
c.css("margin-left",b*a.itemsMarginPercent+"px");y({moveWidth:b*a.moveWidthPercent})}var c=e();a.moveWidthPercent||(a.moveWidthPercent=a.moveWidth/d.width());b();$(window).resize(function(){b();setTimeout(b,330);setTimeout(b,660);setTimeout(b,1E3)})}();r();var A=$.noop;(function(){var b,c=!0;A=function(d){d.preventDefault();c&&!a.left.hasClass(a.disabledClass)&&(m(),c=!1,b=setTimeout(function(){c=!0;clearTimeout(b)},200))}})();var B=$.noop;(function(){var b,c=!0;B=function(d){d.preventDefault();c&&
!a.right.hasClass(a.disabledClass)&&(l(),c=!1,b=setTimeout(function(){c=!0;clearTimeout(b)},200))}})();var C=$.noop;(function(){var a,c=!0;C=function(d){d.preventDefault();c&&(z($(this).index()),c=!1,a=setTimeout(function(){c=!0;clearTimeout(a)},200))}})();a.left[n]("touchstart click",A);a.right[n]("touchstart click",B);a.dots[n]("touchstart click",C);(function(){a.mover[n]("touchstart",function(b){a.moving||(a.moving=!0,a.touch.started=!0,a.touch.x=b.originalEvent.touches[0].clientX,a.touch.y=b.originalEvent.touches[0].clientY,
a.touch.moveX=a.touch.x,a.touch.moveY=a.touch.y)});a.mover[n]("touchend",function(){if(a.touch.started){a.touch.started=!1;a.moving=!1;var b=a.touch.moveX-a.touch.x,c=a.touch.moveY-a.touch.y;"move"!=a.effect||a.touchSimple||(a.horizontal?b>a.touchLength?m(!0):0<b?(a.curID--,0>a.curID&&(a.curID=a.itemsCount-1),a.touch.x=0,a.touch.moveX=b-a.moveWidth,l(!0)):b<-a.touchLength?l(!0):0>b&&(a.curID++,a.curID>a.itemsCount-1&&(a.curID=0),a.touch.x=0,a.touch.moveX=a.moveWidth+b,"next"==a.touch.direction&&a.mover.append(e().first()),
m(!0)):c>a.touchLength?m(!0):0<c?(a.curID--,0>a.curID&&(a.curID=a.itemsCount-1),a.touch.y=0,a.touch.moveY=c-a.moveHeight,l(!0)):c<-a.touchLength?l(!0):0>c&&(a.curID++,a.curID>a.itemsCount-1&&(a.curID=0),a.touch.y=0,a.touch.moveY=a.moveHeight+c,"next"==a.touch.direction&&a.mover.append(e().first()),m(!0)));if("fade"==a.effect||a.touchSimple)a.horizontal?(b>a.touchLength&&m(!0),b<-a.touchLength&&l(!0)):(c>a.touchLength&&m(!0),c<-a.touchLength&&l(!0));a.touch.direction=""}});a.mover[n]("touchmove",function(b){a.touch.started&&
(10<a.touch.moveX-a.touch.x&&b.preventDefault(),a.touch.moveX=b.originalEvent.touches[0].clientX,a.touch.moveY=b.originalEvent.touches[0].clientY,"move"!=a.effect||a.touchSimple||(a.horizontal?(b=a.touch.moveX-a.touch.x,0<b&&(b>a.moveWidth&&(b=a.moveWidth,a.touch.moveX=a.touch.x+b),"prev"!=a.touch.direction&&(a.mover.prepend(e().last()),a.touch.direction="prev")),"prev"==a.touch.direction&&a.mover.css("left",b-a.moveWidth+"px"),0>b&&(b<-a.moveWidth&&(b=-a.moveWidth,a.touch.moveX=a.touch.x+b),"next"!=
a.touch.direction&&("prev"==a.touch.direction&&a.mover.append(e().first()),a.touch.direction="next")),"next"==a.touch.direction&&a.mover.css("left",b+"px")):(b=a.touch.moveY-a.touch.y,0<b&&(b>a.moveHeight&&(b=a.moveHeight,a.touch.moveY=a.touch.y+b),"prev"!=a.touch.direction&&(a.mover.prepend(e().last()),a.touch.direction="prev")),"prev"==a.touch.direction&&a.mover.css("top",b-a.moveHeight+"px"),0>b&&(b<-a.moveHeight&&(b=-a.moveHeight,a.touch.moveX=a.touch.y+b),"next"!=a.touch.direction&&("prev"==
a.touch.direction&&a.mover.append(e().first()),a.touch.direction="next")),"next"==a.touch.direction&&a.mover.css("top",b+"px"))))})})();a.autoStart&&u();a.autoStart&&a.stopOnHover&&d.mouseenter(v).mouseleave(function(){a.stopped||u()});h.stop=function(){v();a.stopped=!0};h.start=function(){u();a.stopped=!1};h.next=l;h.prev=m;h.to=z;h.back=function(b){1<a.idHistory.length&&h.to(a.idHistory[1],b)};h.refresh=x;h.setParams=y;h.params=a;return h};