$(function(){
	$(document).scroll(function(){
		$('#mainNavbar').toggleClass('scrolled', $(this).scrollTop() > $('#mainNavbar').height());
	})
});