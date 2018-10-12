$('.slider').slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
});


$('.slider2').slick({
  arrows: false,
  slidesToShow: 6,
  autoplay: true,
  centerMode: true,
  infinite: true,
  adaptiveHeight: true,
});

$(document).ready(function () {

	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
	});
});