$('.slider').slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
});

$('.slider_2').slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
});

$('.slider_3').slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
});


 

$(document).ready(function () {

	$('.panel-heading').click(function () {
		$(this).toggleClass('in').next().slideToggle();
		$('.panel-heading').not(this).removeClass('in').next().slideUp();
	});
});


$('.slider2').slick({
  arrows: false,
  slidesToShow: 6,
  autoplay: true,
  centerMode: true,
  infinite: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
