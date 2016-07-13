$(function(){
	var mySwiper = new Swiper('#banner', {
	    autoplay: 3000,//可选选项，自动滑动
	    pagination: '.swiper-pagination',
	    paginationClickable: true
	})

	$('.recruit_expand').click(function(){
		var oThis = $(this),
			oParent = oThis.parent()

		oThis.toggleClass('expand');
		oParent.find('.can_expand').toggleClass('hidden');
	})
})
