//IE7,8 html 5 support
if(!$.support.leadingWhitespace){var e=("abbr,article,aside,audio,canvas,datalist,details,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,time,video,figcaption,summary").split(',');for(var i=0;i<e.length;i++){document.createElement(e[i])}}

$(domReady);
$(window).load( windowOnload );


var initStyles = function( selector ){
    var context = $(selector || 'body');

	// ie9 placeholders
	if( $.isFunction($.fn.placeholder) ) context.find(':text,:password,textarea').each(function(){ $(this).placeholder() });
};


var Tabs = function( tabsItems, pagesItems ){
    var t = this, tabs = $(tabsItems), pages = $(pagesItems);
	tabs.click(function(){ t.select($(this).index()) });
	t.select = function(id){ // public method
		tabs.removeClass('active').eq(id).addClass('active');
		pages.removeClass('active').eq(id).addClass('active');
	};
};


function domReady(){
	
	var win = $(window),
		body = $('body');
	initStyles();
	
	// widget-numbers
	$('div.widget-numbers').each(function(){
		var box = $(this),
			sliderBox = box.find('div.slider');
		sliderBox.simpslider({
			itemsSelector: '.item',
			effect: 'fade',
			left: box.find('div.left'),
			right: box.find('div.right')
		});
	});
	
	// partners-block slider
	$('div.partners-block').each(function(){
		var box = $(this),
			sliderBox = box.find('div.slider'),
			mover = sliderBox.find('div.mover');
		// images layout
		function relayout(){
			box.find('div.item').each(function(){
				var item = $(this),
					imgs = item.children(),
					loadedCount = 0;
				function layout(){
					var imgsWidth = 0;
					imgs.css({
						marginTop: '',
						marginLeft: ''
					});
					imgs.each(function(){ imgsWidth += $(this).width() });
					var spaceLeft = item.width() - imgsWidth,
						spaceBetween = spaceLeft / (imgs.length-1);
					imgs.not(':first').css('margin-left',spaceBetween);
					var itemHeight = item.height();
					imgs.each(function(){
						var img = $(this);
						$(this).css('margin-top',(itemHeight-img.height())/2);
					});
				}
				layout();
				imgs.on('load',function(){
					loadedCount += 1;
					if( loadedCount == imgs.length ) layout();
				});
			});
		}
		// slider
		var slider = sliderBox.simpslider({
			itemsSelector: '.item',
			autoStart: false,
			left: box.find('div.left'),
			right: box.find('div.right'),
			touchSimple: true,
			gpu: true
		});
		// images count per item on different resolutions
		function resChanged(){
			var winWidth = win.width();
			function recreateItems(countPerItem){
				var items = mover.find('div.item').remove(),
					imgs = items.find('img'),
					i = 0,
					item;
				imgs.each(function(){
					var img = $(this);
					if(!i){
						item = $('<div class="item"></div>');
						mover.append(item);
					}
					item.append(img);
					i++;
					if( i == countPerItem ) i=0;
				});
				relayout();
			}
			if( winWidth > 1059 ){ // desktop
				recreateItems(6);
				slider.setParams({
					moveWidth: 1112
				});
			} else if( winWidth > 799 ){ // tablet
				recreateItems(4);
				slider.setParams({
					moveWidth: 820
				});
			} else { // mobile
				recreateItems( (winWidth > 449) ? 3 : 2 );
				mover.find('div.item').css('width',winWidth-50);
				relayout();
				slider.setParams({
					moveWidth: winWidth-50+80
				});
			}
		}
		resChanged();
		win.resize(function(){
			resChanged();
			setTimeout(resChanged,1000);
		});
	});
	
	// img slider
	$('section.img-slider').each(function(){
		var box = $(this);
		box.simpslider({
			itemsSelector: '.item',
			dots: box.find('.thumbs img'),
			moveWidthPercent: 1,
			responsive: true,
			itemsWidthCoefficient: 1,
			sidesRatio: 0.66666,
			touchSimple: true,
			gpu: true
		});
	});
	
	// tabs
	$('.content-tabs').each(function(){
		var box = $(this);
		new Tabs( box.find('ul.btns li'), box.find('.tab-page') );
	});
	
	// widget-find datepickers
	$('form.widget-find').each(function(){
		var inps = $(this).find(':text');
		inps.datepicker({
			changeMonth: true,
			changeYear: true,
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			firstDay: 1,
			dateFormat: 'dd.mm.yy'
		});
	});
	
	// nav on mobile
	(function(){
		var nav = $('nav.main-nav');
		if( !nav.length ) return;
		var btn = $('div.btn-nav-open span');
		btn.click(function(){ // nav open
			nav.toggleClass('opened').find('.opened').removeClass('opened');
		});
		function bodyClick(e){ // nav close when outside click
			if( e.target != nav[0] && !$(e.target).parents('.main-nav').length && e.target != btn[0] && !$(e.target).parents('.btn-nav-open').length ){
				nav.removeClass('opened');
				nav.find('.opened').removeClass('opened');
			}
		}
		var lis = nav.find('.has-sub');
		function lisClick(e){
			var li = $(this),
				a = li.children('a');
			if( e.target != li[0] && e.target != a[0] ) return;
			e.preventDefault();
			li.toggleClass('opened');
		}
		win.resize(function(){
			resized();
			setTimeout(resized,500);
		});
		function resized(){
			body.off('click',bodyClick);
				lis.off('click',lisClick);
			if( win.width() < 1060 ){ // mobile
				body.click(bodyClick);
				lis.click(lisClick);
			} else {
				nav.removeClass('opened').find('.opened').removeClass('opened');
			}
		}
		resized();
	})();
	
}

function windowOnload(){
	
	// google maps baloon
	(function(){
		if( !document.getElementById('google-map-canvas') ) return;
		var pos = new google.maps.LatLng(60.059613, 30.326307),
	        mapCanvas = document.getElementById('google-map-canvas'),
	        mapOptions = {
		        zoom: 14,
		        center: pos,
		        disableDefaultUI: true,
		        navigationControl: false,
		        mapTypeControl: false,
		        streetViewControl: false,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
	        },
	        map = new google.maps.Map(mapCanvas, mapOptions);
	    new google.maps.Marker({
	        position: pos,
	        map: map,
	        icon: 'img/map-baloon.png',
	        title: 'Отель Гранд Каньон'
	    });
	})();
	
}

$(document).on("click", ".btn-big", function(){
    $(".modal.in").modal("hide");
})
        