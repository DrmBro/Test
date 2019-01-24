var course={ 
 	init:function(){
		var $pageIndex=parseInt($("#hidden_page").val()); 
		course.commonScriptInit();
	},commonScriptInit:function(){
		
		  
	   var $btnCategory=$("#btn_category");
	   $btnCategory.click();
	   var categoryT=setTimeout(function(){},10);
	   var outTimer=setTimeout(function(){},10);
	   
	   var isIE7=navigator.appVersion.match(/7./i)=='7.';
	   
	   $('#category').on('mouseenter',function(){$(this).addClass('on');
			if(isIE7){
				$(this).find('.first_li').find('.second_ul').css('display','');
				$(this).find('.first_li').find('.cover').css('display','');
			}
		});
	   
	   $('#category').on('mouseleave',function(){
			$(this).removeClass('on');
			if(isIE7){
				var currentLi=$(this).find('.first_li');
				currentLi.each(function(){
					 if(currentLi.hasClass('current')){
						 $(this).removeClass('current').find('.second_ul').css('display','none');
						 $(this).find('.cover').css('display','none');
					 }
				 });
			 };
			 $(this).find('.first_li').removeClass('current');
			 clearTimeout(outTimer);
			 clearTimeout(categoryT);
		});
	   
		$('#category .first_li:gt(0)').hover(function(){
			var $this=$(this);
			clearTimeout(categoryT);
			categoryT=setTimeout(function(){
					$this.addClass('current').siblings().removeClass('current');
			},100);
			},function(){
				var $this=$(this);
				clearTimeout(outTimer);
			outTimer=setTimeout(function(){
					$this.removeClass('current');
			},100);
		});
	
		$('#page_nav .nav_item').on('mouseover',function(){
			var $this=$(this);
			var $secondUl=$this.find('.nav_second_link_ul');
			var $mainLink=$this.find('.main_link');
			if($secondUl.size()==1){
				$secondUl.css('display','block');
				$mainLink.css('background','#048ADC');
				
				$this.on('mouseout',function(){
						$secondUl.css('display','none');
						$mainLink.css('background','#309DE0');
						
					
				});
		}});
		
	
		if(window.XMLHttpRequest){
			var fixedHeight=$('#page_nav').offset().top-40;
			$(window).on('scroll',function(){
				var currentScrollTop=$(window).scrollTop();
				if(currentScrollTop>=fixedHeight){
					$('#page_nav').addClass('fixedNav');
					 $('#hidev').show();
					 
				}else{
					$('#page_nav').removeClass('fixedNav');
					 $('#hidev').hide();
			    };
			});
			if($('#banner').size()!=0){
				var fixedHeight=$('#page_nav').offset().top;
				var hideCategoryHeight=$('#banner').offset().top+$('#banner').height();
				var navHeight=$('#page_nav').height();
				var firstLiHeight=40;
				var firstLiNum=10;
				$(window).on('scroll',function(){
					var currentScrollTop=$(window).scrollTop();
					if(currentScrollTop>=fixedHeight){
						if(!$('.first_ul').is('hidden')){
							if($('#category').hasClass('on')){
								$('#category').removeClass('category_on');
							}else{
								$('.first_ul').stop().slideUp('fast',function(){
									$('#category').removeClass('category_on');
									$('.first_ul').attr('style','');
								});
							}
						}
					}else{
						$('#page_nav').removeClass('fixedNav');
						if($('.first_ul').css('display')=='none'){
							$('.first_ul').stop().slideDown('fast',function(){
								$('#category').addClass('category_on');
								$('.first_ul').attr('style','');
							});
						}else{
							$('#category').addClass('category_on');
						}
					};
				});
			
			}
		}


	 },getMyFavoriteClassList:function(){
		 }};

$(function(){
 course.init();
 });
 