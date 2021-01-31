console.log('im here too on front')
import $ from 'jquery'
window.jQuery = window.$ = $;
import 'slick-carousel'
jQuery(document).ready(function( $ ) {
	$('.carousel').slick({
		//rtl: true
		infinite: true,
		dots: true,
		speed: 300,
		adaptiveHeight: true,
		arrows: true,
		centerPadding: '60px',
	});
});
