try{
var salePopupData = {
	o: [],
	u: [],
	a: [],
};
salePopupData.o.push("tai-nghe-logitech-g633s-lightsync-7-1");
salePopupData.o.push("tai-nghe-logitech-astro-a10");
salePopupData.o.push("tai-nghe-choi-game-rgb-khong-day-lightspeed-g733-mau-trang");
salePopupData.o.push("tai-nghe-gaming-logitech-g331");
salePopupData.o.push("tai-nghe-choi-game-rgb-khong-day-lightspeed-g733-mau-den");
salePopupData.o.push("mieng-lot-chuot-logitech-g440");
salePopupData.o.push("chuot-logitech-g502-hero-lightspeed-wireless");
salePopupData.o.push("chuot-choi-game-khong-day-logitech-pro");
salePopupData.o.push("ban-phim-co-logitech-g913-tkl-lightspeed-wireless");
salePopupData.o.push("chuot-logitech-g403-hero");
salePopupData.o.push("chuot-logitech-g304-khong-day-mau-trang");
salePopupData.o.push("ban-phim-co-logitech-g813-lightsync-rgb");
salePopupData.o.push("chuot-logitech-g102-lightsync-gen-2");
salePopupData.o.push("chuot-logitech-g102-gen-2-lightsync");
salePopupData.o.push("chuot-gaming-logitech-g604-lightspeed-wireless");
salePopupData.o.push("chuot-gaming-logitech-g502-hero");
salePopupData.o.push("chuot-logitech-pro-x-superlight-trang");
salePopupData.o.push("chuot-logitech-pro-x-superlight-den");
salePopupData.o.push("chuot-logitech-g903-hero-lightspeed-wireless");
salePopupData.o.push("chuot-logitech-g703-hero-lightspeed-wireless");
salePopupData.o.push("ban-phim-co-logitech-g512-carbon-rgb-linear");
salePopupData.o.push("ban-phim-co-logitech-g512-carbon-rgb-gaming-keyboard");
salePopupData.o.push("ban-phim-co-logitech-g512-carbon-lightsync-rgb-mechanical");
salePopupData.o.push("ban-phim-co-logitech-g-pro-x");
salePopupData.o.push("loa-logitech-gaming-g560-lightsync-bluetooth");
salePopupData.o.push("tai-nghe-gaming-logitech-g431-7-1-surround");
salePopupData.o.push("tai-nghe-gaming-logitech-g933-7-1-rgb");
salePopupData.o.push("tai-nghe-logitech-pro-x");
salePopupData.o.push("tay-cam-game-logitech-f710-wireless");
salePopupData.o.push("tay-cam-game-logitech-f310");
salePopupData.u.push("Bích Thủy ở Quảng Bình");
salePopupData.u.push("Quang Hải ở Nghệ An");
salePopupData.u.push("Thu Quỳnh ở Hà Nội");
salePopupData.u.push("Trọng Nghĩa ở Ninh Thuận");
salePopupData.u.push("Văn Trọng ở TP.Hồ Chí Minh");
salePopupData.a.push("Cách đây 19 phút");
salePopupData.a.push("23 phút trước");
salePopupData.a.push("2 ngày trước trước");
salePopupData.a.push("45 phút trước");
salePopupData.a.push("5 ngày trước");
}catch(e){}
window.F1GEN_vars = { 																																																						 
	template: "index",
	formatMoney: '{{amount}}₫',
	account: {
		logged: true,
		id: 1154414679,
		email: "demo@test.com"
	},
	product: {
		data: null,
		id: null,
		handle: null,
		title: "",
		gift: false,
		availableOption: true
	},
	quickView: null,
	collection: {
		paginate: {
			current: 1,
			value: ""
		},
		data: {
			id: "",
			title: "",
			vendors: "",
			types: "",
			sortBy: ""
		},
		filter: {
			config:{
				price: {
					min: "0",
					max: "20000000",
					step: "5000"
				}
			},
			data: {
				vendors: null,
				types: null,
				sortBy: null,
				prices: null,
				tags: null,
				variants: {
					option1:null,
					option2:null,
					option3:null,
				}
			}
		}
	},
	salePopup: {
		active: true,
		type: "collections",
		orders: salePopupData.o,
		customers: salePopupData.u,
		time: {
			ago: salePopupData.a,
			delayBetween: "4000",
			delayPopup: "5000",
		},
		count: "20",
	},
	hrefis: {
		href:'/pages/dieu-khoan-dich-vu',
	},
	contactPopup:{
		active: true,
		time:10000,
	},
	hoverTab: {
		check: true,
		title: "Khoan đã !",
		text: "Còn rất nhiều khuyến mãi Hot đang chờ bạn.",
		button1: "Lần sau.",
		button2: "Khám phá.",
		link: "/collections/all",
		minutes: 5
	}
}		

var F1GEN = {};
F1GEN.Helper = {
	productSlider: function(element, itemsOne, itemsTwo, itemsThree, options){
		if( $(element).length > 0 ){
			$(element).slick({
				slidesToShow: itemsOne,
				prevArrow:"<button type='button' class='slick-prev'><i class='lni lni-chevron-left'></i></button>", 
				nextArrow:"<button type='button' class='slick-next'><i class='lni lni-chevron-right'></i></button>",
				rows: options && options.rows ? options.rows: 1,
				centerMode: options && options.centerMode ? options.centerMode: false,
				focusOnSelect: options && options.focusOnSelect ? options.focusOnSelect: false,
				autoplay: options && options.autoplay ? options.autoplay: false,
				infinite: options && options.infinite ? options.infinite: false,
				autoplaySpeed: 4000,
				fade: options && options.fade ? options.fade: false,
				dots: true,
				arrows: true,
				speed: 1000,
				responsive: [
					{
						breakpoint: 991, 
						settings: {
							slidesToShow: itemsThree,
						}
					},
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: itemsTwo,
						}
					},
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: itemsOne,
						}
					}
				]
			});
		}
	},
	getCart: function(){
		var html = '';
		$.ajax({
			type:"GET",
			url:"/cart.js",
			dataType: 'json',
			async: false,
			success: function(data){
				$.each(data.items, function(index, item){
					html += `
<div class="cart-item" data-id="${item.variant_id}">
<div class="cart-item-left">
<a href="${item.url}">
<img src="${item.image}" alt="${item.title}"/>
</a>
</div>
<div class="cart-item-right">
<h4>${item.title}</h4>
<span>${item.variant_title}</span>
<p>${Haravan.formatMoney(item.price, window.formatMoney)}₫</p>
<div class="cart-item-right-action">
<div class="cart-item-right-action-quantity">
<button class="f-button" type="button" data-type="minus" data-id="${item.variant_id}">-</button>
<input name="cart-item-right-count" value="${item.quantity}"/>
<button class="f-button" type="button" data-type="plus" data-id="${item.variant_id}">+</button>
</div>
<div class="cart-item-right-action-remove">
<button class="f-button" data-id="${item.variant_id}">Remove</button">
</div>
</div>
</div>
</div>`
				});
				$('.cart-sidebar .add-to-cartProduct span:last-child').html(Haravan.formatMoney(data.total_price) + '₫')
				$('.header-bottom-right-item[data-action="cart"] .header-bottom-right-item-count').html(data.item_count)
				$('.cart-sidebar .cart-sidebar-note textarea').val(data.note);
				if(data.item_count === 0){
					$('.cart-sidebar-mid').html('<div class="cart-sidebar-mid-no">Giỏ hàng của bạn còn trống</div>')
				}else{
					$('.cart-sidebar-mid').html('<div class="cart-sidebar-mid-yes"></div>')
				}
			}
		})
		$('.cart-sidebar .cart-sidebar-mid-yes').html('').append(html);
	},
	updateCart: function(type, id, quantity, string){
		if(type == 'add'){
			$.ajax({
				type: 'POST',
				async: false,
				url: '/cart/add.js',
				data:  {
					id: id,
					quantity: quantity
				},
				dataType: 'json',
				success: function(cart) { 
					if(string == 'checkout'){
						window.location.href = "/checkout";
					}else{
						swal("Cảm ơn bạn!", "Sản phẩm đã được thêm vào giỏ thành công", "success");
						F1GEN.Helper.getCart();
					}
				},
				error: function(XMLHttpRequest, textStatus) {
					swal("Xin lỗi bạn!", "Có chút vấn đề về tồn kho!", "error");
				}
			})
		}else if(type == 'update'){
			$.ajax({
				type: 'POST',
				async: false,
				url: '/cart/change.js',
				data:  {
					id: id,
					quantity: quantity
				},
				dataType: 'json',
				success: function(cart) { 
					$('.header-bottom-right-item[data-action="cart"] .header-bottom-right-item-count').html(cart.item_count)
					$('.cart-sidebar .cart-sidebar-bot a span').last().html(Haravan.formatMoney(cart.total_price, window.formatMoney) + 'đ')
				},
				error: function(XMLHttpRequest, textStatus) {
					Haravan.onError(XMLHttpRequest, textStatus);
				}
			})
		}else if(type == 'delete'){
			$.ajax({
				type: 'POST',
				async: false,
				url: '/cart/change.js',
				data:  {
					id: id,
					quantity: 0
				},
				dataType: 'json',
				success: function(cart) { 
					$('.cart-sidebar .cart-sidebar-bot a span').last().html(Haravan.formatMoney(cart.total_price, window.formatMoney))
					$('.cart-sidebar .cart-sidebar-mid-yes .cart-item[data-id="' + id + '"]').remove();
					if(cart.item_count === 0){
						$('.cart-sidebar-mid').html('<div class="cart-sidebar-mid-no">YOUR CART IS EMPTY</div>')
					}
				},
				error: function(XMLHttpRequest, textStatus) {
					Haravan.onError(XMLHttpRequest, textStatus);
				}
			})
		}else{
			$.ajax({
				type: 'POST',
				async: false,
				url: '/cart/change.js',
				data:  {
					note: string
				},
				dataType: 'json',
				success: function(cart) { 
					$('.cart-sidebar .cart-sidebar-note textarea').html(cart.note);
					$('.cart-sidebar .cart-sidebar-note').removeClass('active');
				},
				error: function(XMLHttpRequest, textStatus) {
					Haravan.onError(XMLHttpRequest, textStatus);
				}
			})
		}
	}
};
F1GEN.General = {
	init: function(){
		this.optionCart();
		this.optionsAccount();
		this.hoverTab();
		this.salePopup();
		this.backToTop();
		this.clickScrollMb();
		this.headerScroll();
		this.addCartLoop();
		this.removeAll();
		this.activeMenu();
		if($(window).width() > 991){
			this.contactPopup();
		}
		this.toggleFooter();
		this.suggestSearch();
		F1GEN.Helper.getCart();
		F1GEN.Quickview.init();
		F1GEN.Wishlist.init();
		F1GEN.Compare.init();
	},
	optionCart: function(){
		$('body').on('click', '.header-bottom-right-item[data-action="cart"]', function(){
			$('body, html').addClass('open-overplay open-noscroll open-cart');
		})
		$('body').on('click', '.cart-sidebar .cart-sidebar-top button', function(){
			$('body, html').removeClass('open-noscroll open-overplay open-cart');
		})
		$('body').on('click', '.cart-item-right-action .cart-item-right-action-quantity button', function(){
			var type = $(this).attr('data-type');
			if(type.toString() === 'minus'){
				if(+$(this).next().val() > 1){
					$(this).next().val(+$(this).next().val() - 1)
				}
			}else{
				$(this).prev().val(+$(this).prev().val() + 1)
			}
			F1GEN.Helper.updateCart('update', +$(this).attr('data-id'), $(this).parent().find('input').val());
		})
		$('body').on('click', '.cart-item-right-action .cart-item-right-action-remove button', function(){
			F1GEN.Helper.updateCart('delete', +$(this).attr('data-id'), 0);
		})
		$('body').on('click', '.cart-sidebar .cart-sidebar-bot button', function(){
			$('.cart-sidebar .cart-sidebar-note').addClass('active');
		})
		$('body').on('click', '.cart-sidebar .cart-sidebar-note a', function(e){
			e.preventDefault();
			var string = $(this).prev().val();
			F1GEN.Helper.updateCart('updateNote', 0, 0, string);
		})
	},
	optionsAccount: function(){
		$('body').on('click','.header-bottom-right-item[data-action="account"]',function(){
			if($(window).width() > 768){
				if(window.F1GEN_vars.account.logged == false ){
					$('#accountModal').modal('show');
				}else{
					window.location.href = "/account";
				}
			}else{
				window.location.href = "/account";
			}
		})
		$('body').on('click', '#accountModal .closeModal', function(){
			$('#accountModal').modal('hide');
		})
	},
	hoverTab: function(){
		if(window.F1GEN_vars?.hoverTab.check){
			var checkLocal = () => {
				var setupTime = localStorage.getItem('closeTab');
				if (setupTime !== null) {
					if((new Date().getTime() - setupTime) > window.F1GEN_vars.hoverTab.minutes*60*1000) { 
						localStorage.removeItem('closeTab');
					}
				}
				return setupTime;
			}
			$(document).on("mouseout", function(event) {
				var getLocal = checkLocal();
				event = event ? event : window.event;
				var from = event.relatedTarget || event.toElement;
				if ((!from || from.nodeName == "HTML") && event.clientY <= 10 ) {
					if(getLocal == null){
						swal({
							title: window.F1GEN_vars.hoverTab.title,
							text: window.F1GEN_vars.hoverTab.text,
							icon: "warning",
							buttons: [window.F1GEN_vars.hoverTab.button1, window.F1GEN_vars.hoverTab.button2],
							dangerMode: true,
						}).then((willDelete) => {
							localStorage.setItem('closeTab', new Date().getTime());
							if (willDelete) {
								window.location.href= window.F1GEN_vars.hoverTab.link;
							}
						});
					}
				}
			});
		}
	},
	contactPopup: function(){
		if(window.F1GEN_vars.contactPopup.active){
			setTimeout(function(){
				if(sessionStorage.contact_popup == null){
					$('body, html').addClass('open-overplay open-noscroll open-modalContact');
					sessionStorage.contact_popup = 'show' ;
				}
			},window.F1GEN_vars.contactPopup.time);
			$('body').on('click', '.modal-contact .modal-contact-wrap-close i', function(){
				$('body, html').removeClass('open-overplay open-noscroll open-modalContact');
			})
		}
	},
	salePopup: function(){
		try{
			if(window.F1GEN_vars.salePopup.active && $(window).width() > 768 ){ 
				if(window.F1GEN_vars.salePopup.orders.length > 0){
					var count_increase = 1;
					var interval = setInterval(function() {
						var item = window.F1GEN_vars.salePopup.orders[Math.floor(Math.random()*window.F1GEN_vars.salePopup.orders.length)];
						var customer = window.F1GEN_vars.salePopup.customers[Math.floor(Math.random()*window.F1GEN_vars.salePopup.customers.length)];
						var time = window.F1GEN_vars.salePopup.time.ago[Math.floor(Math.random()*window.F1GEN_vars.salePopup.time.ago.length)];
						$.get("/products/" + item + '.js').done(function(data) {
							var sale_template = `
<div class="sale-popup-notification">
<div class="sale-popup-notification-container">
<a href="${data.url}" class="sale-popup-notification-container-image">
<img src="${data.featured_image}" class="img-fluid">
</a>
<div class="sale-popup-notification-container-content">
<p>
${customer}<br>vừa mua <a href="${data.url}"><b>${data.title}</b></a>
<small>${time}</small>
</p>
</div>
</div>
<div class="sale-popup-notification-close"></div>
</div>`;
							$('.sale-popup').html('').append(sale_template);
							$(".sale-popup").slideDown(400);
							setTimeout(function(){
								$(".sale-popup").stop().slideUp(400);
							}, parseInt(window.F1GEN_vars.salePopup.time.delayPopup))
							count_increase++
							if (count_increase > parseInt(window.F1GEN_vars.salePopup.count)){
								clearInterval(interval);
							}
						})
					}, parseInt(window.F1GEN_vars.salePopup.time.delayBetween)+parseInt(window.F1GEN_vars.salePopup.time.delayPopup));
				}
				$("body").on('click','.sale-popup-notification-close', function() {
					$(this).parents(".sale-popup").stop().slideUp(400);
				})

			}
		}catch(e){console.log(e)}
	},
	backToTop:function(){
		$(window).on('scroll',function() {
			if ($('.back-to-top').length > 0 && $(window).scrollTop() > 100  ) {
				$('body, html').addClass('open-back');
			} else {
				$('body, html').removeClass('open-back');
			}
		})
		$('body').on("click", ".back-to-top", function(){
			$('html, body').animate({
				scrollTop: 0			
			}, 600);
		});
	},
	clickScrollMb:function(){
		$('a.btn-support').click(function(e){
			e.preventDefault();
			$('.support-content').toggleClass('open');
		});
	},
	headerScroll:function(){
		if($(window).width() > 1024){ 
			var initHeader = $('.header').outerHeight();
			$('.header').css('height', initHeader + 'px');
		}
		$(window).on('scroll',function() {
			if($(window).scrollTop() > 400){
				$('.header-bottom-center-search-smart').hide();
				if($(window).width() > 1024){
					$('body, html').addClass('open-mega');
				}
			}else{
				$('body, html').removeClass('open-mega');
			}
		})
	},
	addCartLoop: function (){
		$('body').on('click', '.pro-loop .setAddCartLoop, .pro-loop-small .setAddCartLoop', function(e){
			e.preventDefault();
			F1GEN.Helper.updateCart('add', +$(this).attr('data-id'), 1);
		})
	},
	removeAll:function(){
		$('body').on('click touchstart', '.overplay-all', function(e){
			e.preventDefault();
			$('body, html').removeClass('open-overplay open-noscroll open-wishlist open-compare open-cart open-modalContact open-modalLogin open-sidebar open-menu open-alert open-filter');
		})
	},
	activeMenu:function(){
		$('body').on('click', '.menu-mobile-item-head button', function(e){
			e.preventDefault();
			$(this).parent('.menu-mobile-item-head').siblings('ul').slideToggle(400);
			$(this).toggleClass('active');
		})
		$('body').on('click', 'div[data-action="bars"]', function(e){
			e.preventDefault();
			$('body, html').addClass('open-overplay open-noscroll open-menu');
		})
	},
	toggleFooter: function(){
		if($(window).width() < 769){
			$('body').on('click', '.footer .footer-top-item h4', function(){
				$(this).toggleClass('active');
				$(this).next().slideToggle();
			})
		}
	},
	suggestSearch: function(){
		try{
			$('body').on('keyup', '.header .header-bottom-center-search form input[name="q"]', function(e){
				e.preventDefault();
				if(e.which !== 40 && e.which !== 38){
					var s = $(this).val();
					if(	typeof s === 'string' && s.length>0 ){
						$.get('/search?q=filter=((collectionid:product>=0)%26%26(title:product%20contains%20' + encodeURIComponent(s) + '))&view=smart', function(res){
							$('.header-bottom-center-search-smart').html(res).show(); 
						});
					}else{
						$('.header-bottom-center-search-smart').hide();
					}
				}
			});
			$('body').on('click', '.header-bottom-center-search-suggest li a', function(e){
				e.preventDefault();
				$('.header .header-bottom-center-search form input[name="q"]').val($(this).text())
				$('.header .header-bottom-center-search form input[name="q"]').trigger('keyup');  
			})
			$('body').on('submit', '.headerSearch', function(e){
				e.preventDefault();
				var s = $(this).find('.headerSearchInput').val();
				window.location.href = '/search?q=filter=((collectionid:product>=0)%26%26(title:product%20contains%20' + encodeURIComponent(s) + '))';
			})
			if(window.F1GEN_vars.template == 'search'){
				var flagUrl = window.location.href.split('collectionid:product%3E=')[1].split(')')[0];
				$('.headerSearch').find('select').val(flagUrl);
			}
			$(document).on('mouseup touchstart', function(e) {
				var container = $('.header .header-bottom-center-search');
				if (!container.is(e.target) && container.has(e.target).length === 0) {
					$('.header-bottom-center-search-smart').hide();
				}
			});
		}catch(e){
			console.log(e);
		}
	},
};
F1GEN.Quickview = {
	init: function(){
		this.getDataQuickview();
		this.actions();
		this.changeQuantity();
	},
	statusVariants: {},
	statusOption1: {},
	getDataQuickview:function(){
		var self = this;
		$('body').on('click','.setQuickview',function(e){
			e.preventDefault();
			if($(window).width() > 991){
				$('.overplay-all').trigger('click');
				$('#quickviewModal').modal('show');
				let flagHandle = $(this).attr('data-handle');
				$.ajax({
					url:'/products/' + flagHandle + '.js',
					async: false,
					success: function(data){
						window.F1GEN_vars.quickview = data;
					}
				})
				$.ajax({
					url:'/products/' + flagHandle + '?view=quickview',
					async: false,
					success: function(product){
						$('#quickviewModal .modal-body').css('opacity', 0).html(product);
						setTimeout(function(){
							self.sliderInit();
							self.changeOption(); 
							self.render();
							self.setStatusVariants();
							self.checkOptionFirst();
							$('#quickviewModal .modal-body').css('opacity', 1)
						},200)
					},
					error: function(err){}
				})
			}else{
				window.location.href = $(this).attr('href');
			}
		})
	},
	changeQuantity:function(){
		$('body').on('click','#productPageQuickview .productActionMain .qtyBtn',function(e){ 
			e.preventDefault();
			let type = $(this).data('type');
			if(type == "plus"){
				$(this).prev().val(parseInt($(this).prev().val()) + 1);
			}else{
				if(parseInt($(this).next().val()) !== 1)
					$(this).next().val(parseInt($(this).next().val()) - 1);
			}
		})
	},
	setStatusVariants: function(){
		var self = this;
		var opsAll = [];
		var ops1 = [];
		$.each(window.F1GEN_vars.quickview.variants, function(i, v){
			var flagOpsAll = { val:'', status:''};
			if($.inArray(v['options'], opsAll) === -1){
				flagOpsAll.val = v['options'].toString();
				flagOpsAll.status = v.available;
				opsAll.push(flagOpsAll);
			}
			if($.inArray(v['option1'], ops1) === -1){
				ops1.push(v['option1']);
			}
		});
		self.statusVariants = opsAll; 
		self.statusOption1 = ops1; 
	},
	checkOptionFirst: function(){
		var self = this;
		var flagClick0 = false; 
		$('#productPageQuickview .product-sw-lineQW').eq(0).find('.product-sw-select-itemQW input').addClass('soldOut').prop('checked',false);
		$.each(self.statusOption1, function(keyC1, valC1){
			$.each(self.statusVariants, function(keyC2, valC2){
				if(String(valC2.val).indexOf(valC1) !== -1){
					if(valC2.status === true){
						$('#productPageQuickview .product-sw-select-itemQW input[value="'+ valC1 +'"]').removeClass('soldOut');
						if(flagClick0 == false){
							flagClick0 = true;
							$('#productPageQuickview .product-sw-select-itemQW input[value="'+ valC1 +'"]').trigger('click');
						}
					}
				}
			})
		})
	},
	checkAvailable: function(type, name, value){
		var self = this;
		if(name.indexOf(1) !== -1){
			$('#productPageQuickview .product-sw-lineQW').eq(1).find('.product-sw-select-itemQW input').addClass('soldOut').prop('checked',false);
			$('#productPageQuickview .product-sw-lineQW').eq(2).find('.product-sw-select-itemQW input').addClass('soldOut').prop('checked',false);
			var flagClick1 = false; 
			$('#productPageQuickview .product-sw-lineQW').eq(1).find('input').each(function(key1, val1){
				var flagOption1 = $(this).val();
				if(window.F1GEN_vars.quickview.options.length === 3){
					$('#productPageQuickview .product-sw-lineQW').eq(2).find('input').each(function(key1, val1){
						var flagOption2 = $(this).val();
						var flagCheck = `${value},${flagOption1},${flagOption2}`;
						$.each(self.statusVariants, function(keyC, valC){
							if(String(valC.val) === String(flagCheck) && valC.status){
								$('#productPageQuickview .product-sw-select-itemQW input[value="'+ flagOption1 +'"]').removeClass('soldOut');
								$('#productPageQuickview .product-sw-select-itemQW input[value="'+ flagOption2 +'"]').removeClass('soldOut');
								if(flagClick1 == false){
									flagClick1 = true;
									$('#productPageQuickview .product-sw-select-itemQW input[value="'+ flagOption1 +'"]').trigger('click');
								}
								return false;
							}
						})
					});
				}else{
					var flagCheck = `${value},${flagOption1}`
					$.each(self.statusVariants, function(keyC, valC){
						if(String(valC.val) === String(flagCheck) && valC.status){
							$('#productPageQuickview .product-sw-select-itemQW input[value="'+ flagOption1 +'"]').removeClass('soldOut');
							if(flagClick1 == false){
								flagClick1 = true;
								$('#productPageQuickview .product-sw-select-itemQW input[value="'+ flagOption1 +'"]').trigger('click');
							}
							return false;
						}
					})
				}
			})
		}else if(name.indexOf(2) !== -1){
			if(window.F1GEN_vars.quickview.options.length == 3){
				var flagClick2 = false;
				$('#productPageQuickview .product-sw-lineQW').eq(2).find('input').each(function(key23, val3){
					var flagOption2 = $(this).val();
					var flagCheck = `${$('#productPageQuickview .product-sw-lineQW').eq(0).find('input:checked').val()},${value},${flagOption2}`;
					$.each(self.statusVariants, function(keyC, valC){
						if(String(valC.val) === String(flagCheck) && valC.status){
							$('#productPageQuickview .product-sw-select-itemQW input[value="'+ value +'"]').removeClass('soldOut');
							$('#productPageQuickview .product-sw-select-itemQW input[value="'+ flagOption2 +'"]').removeClass('soldOut');
							if(flagClick2 == ''){
								flagClick2 = true;
								$('#productPageQuickview .product-sw-select-itemQW input[value="'+ flagOption2 +'"]').trigger('click');
							}
							return false;
						}
					})
				})
			}
		}
		return false;
	},
	changeOption: function(){
		var self = this;
		$('body').on('change', '#productPageQuickview .trigger-option-swQW', function(){
			var name = $(this).attr('data-name');
			var value = $(this).val();
			$('#productPageQuickview select[data-option='+name+'][id^="productSelectQW"]').val(value).trigger('change');
			self.checkAvailable(true, name, value);
		})
	},
	render: function(){
		new Haravan.OptionSelectors("productSelectQW", { product: window.F1GEN_vars.quickview, onVariantSelected: this.variants });
	},
	variants: function(variant, selector){
		if(variant){
			if(variant.featured_image){
				var items = $('#productPageQuickview .featureImage .featureImageItem[data-id="'+variant.featured_image.id+'"]');
				$('#productPageQuickview .featureImage').slick('slickGoTo', parseInt(items.attr('data-index')) - 1);
			}
			if(variant.available){
				$('#productPageQuickview #addToCartQW').removeClass('sold-out').text('Thêm vào giỏ hàng');
				window.F1GEN_vars.quickview.availableOption = true;
			}else{
				$('#productPageQuickview #addToCartQW').addClass('sold-out').text('Hết hàng');
				window.F1GEN_vars.quickview.availableOption = false;
			}
			if(variant.price == 0){
				$('#productPageQuickview .productPriceMain').text('Liên hệ');
				$('#productPageQuickview .productPriceCompare').addClass('hidden');
				$('#productPageQuickview .productDiscount').addClass('hidden');
			}else{
				var saleChange = Math.round(100 - (variant.price / (variant.compare_at_price / 100)));
				$('#productPageQuickview .productPriceMain').text(Haravan.formatMoney(variant.price, window.F1GEN_vars.formatMoney));
				if(variant.compare_at_price > variant.price){
					$('#productPageQuickview .productPriceCompare').text(Haravan.formatMoney(variant.compare_at_price, window.F1GEN_vars.formatMoney)).removeClass('hidden');
					$('#productPageQuickview .productDiscount').html('(-' + saleChange + '%)').removeClass('hidden');
				}else{
					$('#productPageQuickview .productPriceCompare').addClass('hidden');
					$('#productPageQuickview .productDiscount').addClass('hidden');
				}
			}
			if(variant.sku != null){
				$('#productPageQuickview .productSku').html('<span><strong>Mã sản phẩm:</strong> </span>' + variant.sku);
			}

		}else{
			$('#productPageQuickview #addToCartQW').addClass('sold-out').text('Hết hàng');
		}
	},
	sliderInit: function(){
		var self = this;
		if($('#productPageQuickview .featureImage .featureImageItem').length > 1){
			$('#productPageQuickview .featureImage').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite:false,
				dots: false,
				prevArrow:"<button type='button' class='slick-prev'><i class='lni lni-chevron-left'></i></button>", 
				nextArrow:"<button type='button' class='slick-next'><i class='lni lni-chevron-right'></i></button>",
			});
		}
	},
	actions: function(){
		var self = this;
		$('body').on('click', '#productPageQuickview #addToCartQW', function(e){
			e.preventDefault();
			F1GEN.Helper.updateCart('add', +$('#productPageQuickview #productSelectQW').val(), $('#productPageQuickview #quantity').val());
		})
		$('body').on('click', '#productPageQuickview #buyNowQW', function(e){
			e.preventDefault();
			F1GEN.Helper.updateCart('add', +$('#productPageQuickview #productSelectQW').val(), $('#productPageQuickview #quantity').val(), 'checkout');
		})
	},
};
F1GEN.Wishlist = {
	init: function(){
		this.setWishlistProductLoop();
		F1GEN.Wishlist.wishlistProduct();
		this.removeWishlist();
	},
	setWishlistProductLoop: function(){ 
		$('body').on('click', '.header-bottom-right-item[data-action="wishlist"]', function(){
			$('body, html').addClass('open-wishlist open-overplay open-noscroll');
		})
		$('body').on('click', '.modal-wishlist .modal-wishlist-header button', function(){
			$('body, html').removeClass('open-wishlist open-overplay open-noscroll');
		})
		$('body').on('click','.setWishlist',function(e){
			e.preventDefault();
			if($(this).hasClass('active')){
				$('body, html').addClass('open-wishlist open-overplay open-noscroll');
			}else{
				var phand = [];
				var handle = $(this).attr('data-handle');
				if(document.cookie.indexOf('last_wishlist_products') !== -1){
					var las = Cookies.getJSON('last_wishlist_products');
					if($.inArray(handle, las) === -1){
						phand = [handle];
						for(var i = 0; i < las.length; i++){
							phand.push(las[i]);
							if(phand.length > 15){
								break;
							}
						}
						Cookies.set('last_wishlist_products', phand, { expires: 180, sameSite: 'None', secure: true });
					}
				}else{
					phand = [handle];
					Cookies.set('last_wishlist_products', phand, { expires: 180, sameSite: 'None', secure: true });
				}
				F1GEN.Wishlist.wishlistProduct();
				$('.header-bottom-right-item[data-action="wishlist"]').trigger('click');
			}
		})
	},
	wishlistProduct: function(){
		if($('.modal-wishlist .modal-wishlist-body').length > 0){
			if(document.cookie.indexOf('last_wishlist_products') !== -1){
				$('.modal-wishlist .modal-wishlist-body').html('')
				var last_wishlist_pro_array = Cookies.getJSON('last_wishlist_products');
				F1GEN.Wishlist.activityWishlist();
				var recentview_promises = [];
				for(var i = 0; i < 3; i++){
					if(typeof last_wishlist_pro_array[i] == 'string'){
						var promise = new Promise(function(resolve, reject) {
							$.ajax({
								url:'/products/' + last_wishlist_pro_array[i] + '?view=item_small',
								async: false,
								success: function(product){
									resolve({error: false, data: product});
								},
								error: function(err){
									if(err.status === 404){
										try{
											var u = ((this.url.split('?'))[0]).replace('/products/', '');
											resolve({error: true, handle: u});
										}catch(e){
											resolve({error: false, data: ''})
										}
									}else{
										resolve({error: false, data: ''});
									}
								}
							})
						});
						recentview_promises.push(promise);
					}
				}
				Promise.all(recentview_promises).then(function(values) {
					if(values.length > 0){
						var x = [];
						$.each(values, function(i, v){
							if(v.error){
								x.push(v.handle);
							}else{
								$('.modal-wishlist .modal-wishlist-body').append(v.data);
							}
						});
						if(x.length > 0){
							var new_last_viewed_pro_array = [];
							$.each(last_wishlist_pro_array, function(i, v){
								if($.inArray(v, x) === -1){
									new_last_viewed_pro_array.push(v);
								}
							})
							if(new_last_viewed_pro_array.length > 0){
								Cookies.set('last_viewed_products', new_last_viewed_pro_array, { expires: 180, sameSite: 'None', secure: true });
							}
						}
					}else{
						$('.modal-wishlist .modal-wishlist-body').append('<div class="modal-wishlist-body-error"><span>Bạn chưa có sản phẩm yêu thích, vào <a href="/collections/all">đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
					}
				});
			}else{
				$('.modal-wishlist .modal-wishlist-body').append('<div class="modal-wishlist-body-error"><span>Bạn chưa có sản phẩm yêu thích, vào <a href="/collections/all">đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
			}
		}else{
			$('.modal-wishlist .modal-wishlist-body').append('<div class="modal-wishlist-body-error"><span>Bạn chưa có sản phẩm yêu thích, vào <a href="/collections/all">đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
		}
	},
	activityWishlist: function(){
		var last_wishlist_pro_array = Cookies.getJSON('last_wishlist_products');
		$.each(last_wishlist_pro_array, function(i, v){
			$('.setWishlist[data-handle="' + v + '"] i').removeClass('lni-heart').addClass('lni-heart-filled').parent().addClass('active');
		})
		setTimeout(function(){
			$('.header-bottom-right-item[data-action="wishlist"] .header-bottom-right-item-count').html($('.modal-wishlist-body .pro-loop-small').length);
		},500)
	},
	removeWishlist:function(){
		$('body').on('click', '.pro-loop-small .removeWishlist',function(e){
			var phand = [];
			var handle = $(this).attr('data-handle');
			$('a.setWishlist[data-handle="' + handle + '"]').find('i').removeClass('lni-heart-filled').addClass('lni-heart').parent().removeClass('active');
			if(document.cookie.indexOf('last_wishlist_products') !== -1){
				var las = Cookies.getJSON('last_wishlist_products');
				var flagIndex = $.inArray(handle, las);
				las.splice(flagIndex,1)
				Cookies.set('last_wishlist_products', las, { expires: 180, sameSite: 'None', secure: true });
			}else{
				phand = [handle];
				Cookies.set('last_wishlist_products', phand, { expires: 180, sameSite: 'None', secure: true });
			}
			F1GEN.Wishlist.wishlistProduct();
		})
	}
}
F1GEN.Compare = {
	init: function(){
		this.setCompareProductLoop();
		F1GEN.Compare.compareProduct();
		this.removeCompare();
	},
	setCompareProductLoop: function(){
		$('body').on('click', '.header-bottom-right-item[data-action="compare"]', function(){
			if(window.F1GEN_vars.template == 'page.compare'){
				$('body, html').addClass('open-compare open-overplay open-noscroll');
			}else{
				var url = $(this).attr('data-url');
				if(url.indexOf("page")>-1){
					window.location.href = url;
				}else{
					$('body, html').addClass('open-compare open-overplay open-noscroll');
				}
			}
		})
		$('body').on('click', '.modal-compare .modal-compare-header button', function(){
			$('body, html').removeClass('open-compare open-overplay open-noscroll');
		})
		$('body').on('click','.setCompare',function(e){
			e.preventDefault();
			if($(this).hasClass('active')){
				$('body, html').addClass('open-compare open-overplay open-noscroll');
			}else{
				var phand = [];
				var handle = $(this).attr('data-handle');
				if(document.cookie.indexOf('last_compare_products') !== -1){
					var las = Cookies.getJSON('last_compare_products');
					if($.inArray(handle, las) === -1){
						phand = [handle];
						for(var i = 0; i < las.length; i++){
							phand.push(las[i]);
							if(phand.length > 15){
								break;
							}
						}
						Cookies.set('last_compare_products', phand, { expires: 180, sameSite: 'None', secure: true });
					}
				}else{
					phand = [handle];
					Cookies.set('last_compare_products', phand, { expires: 180, sameSite: 'None', secure: true });
				}
				F1GEN.Compare.compareProduct();
				$('body, html').addClass('open-compare open-overplay open-noscroll');
			}
		})
	},
	compareProduct: function(){
		if($('.modal-compare .modal-compare-body').length > 0){
			if(document.cookie.indexOf('last_compare_products') !== -1){
				$('.modal-compare .modal-compare-body').html('')
				var last_compare_pro_array = Cookies.getJSON('last_compare_products');
				F1GEN.Compare.activityCompare();
				var recentview_promises = [];
				for(var i = 0; i < 3; i++){
					if(typeof last_compare_pro_array[i] == 'string'){
						var promise = new Promise(function(resolve, reject) {
							$.ajax({
								url:'/products/' + last_compare_pro_array[i] + '?view=item_small',
								async: false,
								success: function(product){
									resolve({error: false, data: product});
								},
								error: function(err){
									if(err.status === 404){
										try{
											var u = ((this.url.split('?'))[0]).replace('/products/', '');
											resolve({error: true, handle: u});
										}catch(e){
											resolve({error: false, data: ''})
										}
									}else{
										resolve({error: false, data: ''});
									}
								}
							})
						});
						recentview_promises.push(promise);
					}
				}
				Promise.all(recentview_promises).then(function(values) {
					if(values.length > 0){
						var x = [];
						$.each(values, function(i, v){
							if(v.error){
								x.push(v.handle);
							}else{
								$('.modal-compare .modal-compare-body').append(v.data);
							}
						});
						if(x.length > 0){
							var new_last_viewed_pro_array = [];
							$.each(last_compare_pro_array, function(i, v){
								if($.inArray(v, x) === -1){
									new_last_viewed_pro_array.push(v);
								}
							})
							if(new_last_viewed_pro_array.length > 0){
								Cookies.set('last_viewed_products', new_last_viewed_pro_array, { expires: 180, sameSite: 'None', secure: true });
							}
						}
					}else{
						$('.modal-compare .modal-compare-body').append('<div class="modal-compare-body-error"><span>Bạn chưa có sản phẩm so sánh, vào <a href="/collections/all">đây</a> để thêm thật nhiều sản phẩm vào so sánh nào. </span></div>')
					}
				});
				if($('#pageCompare').length > 0){
					var selfPage = $('#pageCompare').find('table');
					for(var i = 0; i < 3; i++){
						if(typeof last_compare_pro_array[i] == 'string'){
							var promise = new Promise(function(resolve, reject) {
								$.ajax({
									url:'/products/' + last_compare_pro_array[i] + '?view=compare_json',
									async: false,
									success: function(product){
										var parseData = $.parseJSON(product);
										selfPage.find(`tr.image td:nth-child(${i + 2})`).html(parseData.image?`<img class="img-fluid" src="${parseData.image}" alt="${parseData.title}"/>`:"Đang cập nhật");
										selfPage.find(`tr.title td:nth-child(${i + 2})`).html(`<h2><a href="${parseData.url}">${parseData.title}</a></h2>`);
										selfPage.find(`tr.price td:nth-child(${i + 2})`).html(parseData.price);
										selfPage.find(`tr.available td:nth-child(${i + 2})`).html(parseData.available? 'Còn hàng' : 'Hết hàng');
										if(parseData.optionAll.length > 0){
											$.each(parseData.optionAll, function(key, val){
												selfPage.find(`tr.variant td:nth-child(${i + 2})`).html(`<strong>${val.name}: </strong>${val.values}`); 
											})
										}else{
											selfPage.find(`tr.variant td:nth-child(${i + 2})`).html('Đang cập nhật'); 
										}
										selfPage.find(`tr.type td:nth-child(${i + 2})`).html(parseData.type?parseData.type:"Đang cập nhật");
										selfPage.find(`tr.vendor td:nth-child(${i + 2})`).html(parseData.vendor?parseData.vendor:"Đang cập nhật");
										selfPage.find(`tr.description td:nth-child(${i + 2})`).html(parseData.description?parseData.description:"Đang cập nhật");
									},
									error: function(err){
										$('#alertError').modal('show').find('.modal-body').html('Xin lỗi, có vấn đề khi thực hiện so sánh, vui lòng thử lại sau!');
									}
								})
							});
							recentview_promises.push(promise);
						}
					}
				}
			}else{
				$('.modal-compare .modal-compare-body').append('<div class="modal-compare-body-error"><span>Bạn chưa có sản phẩm so sánh, vào <a href="/collections/all">đây</a> để thêm thật nhiều sản phẩm vào so sánh nào. </span></div>')
			}
		}else{
			$('.modal-compare .modal-compare-body').append('<div class="modal-compare-body-error"><span>Bạn chưa có sản phẩm so sánh, vào <a href="/collections/all">đây</a> để thêm thật nhiều sản phẩm vào so sánh nào. </span></div>')
		}
	},
	activityCompare: function(){
		var last_compare_pro_array = Cookies.getJSON('last_compare_products');
		$.each(last_compare_pro_array, function(i, v){
			$('.setCompare[data-handle="' + v + '"] i').removeClass('lni-heart').addClass('lni-heart-filled').parent().addClass('active');
		})
		setTimeout(function(){
			$('.header-bottom-right-item[data-action="compare"] .header-bottom-right-item-count').html($('.modal-compare-body .pro-loop-small').length); 
		},500)
	},
	removeCompare:function(){
		$('body').on('click', '.pro-loop-small .removeCompare',function(e){
			var phand = [];
			var handle = $(this).attr('data-handle');
			$('a.setCompare[data-handle="' + handle + '"]').find('i').removeClass('lni-heart-filled').addClass('lni-heart').parent().removeClass('active');
			if(document.cookie.indexOf('last_compare_products') !== -1){
				var las = Cookies.getJSON('last_compare_products');
				var flagIndex = $.inArray(handle, las);
				las.splice(flagIndex,1)
				Cookies.set('last_compare_products', las, { expires: 180, sameSite: 'None', secure: true });
			}else{
				phand = [handle];
				Cookies.set('last_compare_products', phand, { expires: 180, sameSite: 'None', secure: true });
			}
			F1GEN.Compare.compareProduct();
		})
	}
}
F1GEN.Index = {
	init: function(){
		F1GEN.Helper.productSlider('#slider .slider-main', 1, 1, 1, {
			infinite: true,
			autoplay: true,
			fade: true,
		});
		var checkScroll = false; 
		$(window).on('scroll',function() {
			if(!checkScroll && $(window).scrollTop() > 0){
				if($(window).width() > 768){
					F1GEN.Helper.productSlider('.home-product-deal .home-product-deal-wrap-body-right', 4, 3, 2);
					F1GEN.Helper.productSlider('.home-product-slider .home-product-slider-wrap-body', 3, 3, 2, {
						autoplay: true,
						infinite: true,
						centerMode: true,
						focusOnSelect: true
					});
					F1GEN.Helper.productSlider('.home-blog .home-blog-body', 3, 3, 2);
					F1GEN.Helper.productSlider('.home-vendor .home-vendor-wrap-body', 4, 3, 2);
				}else{
					F1GEN.Helper.productSlider('#group-product-small .group-product-small-main', 1, 1, 1, {
						rows: 2
					});
				}
				F1GEN.Helper.productSlider('#index-blog .index-blog-main', 2, 2, 1);
				$('#group-product ul li a').first().trigger('click');
				checkScroll = true;
			}
		});
		this.setCountDown();
		this.clickTabs();
		this.actions();
	},
	clickTabs: function(){
		$('body').on('click', '.home-product-tab #pagination a', function(e){
			e.preventDefault();
			var dataHandle = $(this).attr('href');
			$('.home-product-tab .container').height($('.home-product-tab .container').height())
			$.ajax({
				url: dataHandle + '&view=view-home-product-tab',
				async: false,
				success:function(data){
					$('.home-product-tab .container').html('').append(data).removeAttr('style');
				}
			})
		})
		$('body').on('click', '.home-product-deal-tab .home-product-deal-tab-wrap-header div[data-option]', function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('.home-product-deal-tab .home-product-deal-tab-wrap-body').hide();
			$('.home-product-deal-tab .home-product-deal-tab-wrap-body[data-option="' + $(this).attr('data-option') + '"]').css('display','flex');
		})
	},
	setCountDown: function(){
		function newUYDate(pDate) {
			let dd = pDate.split("/")[0].padStart(2, "0");
			let mm = pDate.split("/")[1].padStart(2, "0");
			let yyyy = pDate.split("/")[2].split(" ")[0];
			let hh = pDate.split("/")[2].split(" ")[1].split(":")[0].padStart(2, "0");
			let mi = pDate.split("/")[2].split(" ")[1].split(":")[1].padStart(2, "0");
			let secs = pDate.split("/")[2].split(" ")[1].split(":")[2].padStart(2, "0");
			mm = (parseInt(mm) - 1).toString(); // January is 0
			return new Date(yyyy, mm, dd, hh, mi, secs);
		}
		try{
			var x = setInterval(function() {
				var now = new Date().getTime();
				$('.countdownLoop').each(function(){
					var time = $(this).attr('data-time');
					var countDownDate = newUYDate(time);
					if(time){  
						var distance = countDownDate - now; 
						var days = Math.floor(distance / (1000 * 60 * 60 * 24));
						var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
						var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
						var seconds = Math.floor((distance % (1000 * 60)) / 1000);
						$(this).html(`<span class="days"><b>${days < 10 ? '0' + days : days}</b><br/>Ngày</span>
<span class="hours"><b>${hours < 10 ? '0' + hours : hours}</b><br/>Giờ</span>
<span class="minutes"><b>${minutes < 10 ? '0' + minutes : minutes}</b><br/>Phút</span>
<span class="seconds"><b>${seconds < 10 ? '0' + seconds : seconds}</b><br/>Giây</span>`);
						if (distance < 0) {
							clearInterval(x);
							$(this).html(`<span class="days">00</span>
<span class="hours">00</span>
<span class="minutes">00</span>
<span class="seconds">00</span>`);
						}
					}
				})
			}, 1000);

		}catch(e){}
	},
	actions:function(){
		$('.home-product-slider-wrap-body').on('init afterChange', function(event, slick, currentSlide, nextSlide){
			$('.home-product-slider-wrap-body').find(`[data-slick-index] a`).attr('onclick', 'return false;')
			$('.home-product-slider-wrap-body').find(`[data-slick-index="${currentSlide}"] a`).removeAttr('onclick')
		});
	}
};
F1GEN.InitAll = function(){
	this.General.init();
	if(window.F1GEN_vars.template == 'index'){
		this.Index.init();
	}
}
F1GEN.InitAll();