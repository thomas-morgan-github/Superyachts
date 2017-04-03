
// top menu dropdown - toggle open close on click of menu icon 
$('#more, #menu').on('click', function() { 
 	$('#sub-nav').slideToggle();
});


// image gallery menu - toggle open close on click or more button 
$('#gallery-more, #gallery-menu').on('click', function() { 
	$('#gallery-sub-nav').slideToggle();
});



$('#nav-icon3').click(function(){
	$(this).toggleClass('open');
	$('#header-menu-dropdown').slideToggle('show-dropdown-menu');
});


// add downward arrow to selected link  
$('#gallery-nav li').on('click', function() {
    $('ul li.current').removeClass('current');
    $(this).closest('li').addClass('current');
});


// on click of slider prev arrow  center next slide 
$('#explore-heading .next').click(function(){
    $(".new-sections-slider").slick('slickNext');
});


// on click of slider prev arrow  center previous slide 
$('#explore-heading .prev').click(function(){
    $(".new-sections-slider").slick('slickPrev');
});



// Responsive slider for explore our new sections 
$('.new-sections-slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});




// content slider for latest news articles 

$('.latest-news-container').slick();


// on click of slider prev arrow  center next slide 
$('.latest-news .next').click(function(){
    $(".latest-news-container").slick('slickNext');
});


// on click of slider prev arrow  center previous slide 
$('.latest-news .prev').click(function(){
    $(".latest-news-container").slick('slickPrev');
});





// content slider featured news articles 

$('#featured-events-container').slick();


// on click of slider prev arrow  center next slide 
$('.events-featured .next').click(function(){
    $("#featured-events-container").slick('slickNext');
});


// on click of slider prev arrow  center previous slide 
$('.events-featured .prev').click(function(){
    $("#featured-events-container").slick('slickPrev');
});






// content slider featured news articles 

$('#news-slider-top').slick();


// on click of slider prev arrow  center next slide 
$('.news-slider-top .next').click(function(){
    $("#news-slider-top").slick('slickNext');
});


// on click of slider prev arrow  center previous slide 
$('.news-slider-top .prev').click(function(){
    $("#news-slider-top").slick('slickPrev');
});








// content slider featured news articles 

$('#news-slider-bottom').slick();


// on click of slider prev arrow  center next slide 
$('.news-slider-bottom .next').click(function(){
    $("#news-slider-bottom").slick('slickNext');
});


// on click of slider prev arrow  center previous slide 
$('.news-slider-bottom .prev').click(function(){
    $("#news-slider-bottom").slick('slickPrev');
});









