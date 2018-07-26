$(document).ready(function(){
  var bp = 767;

  $(".menu-logo").click(function(){
    $(this).toggleClass("open");

    if (window.innerWidth >= bp)
      $(this).removeClass("open");

    $(".menu-content").addClass("show animated faster");

    if ($(this).hasClass('open')) {
      if ($('.menu-content').hasClass('fadeOut'))
        $(".menu-content").removeClass("fadeOut");
      $(".menu-content").addClass("fadeIn");
    }
    else {
      $(".menu-content").removeClass("fadeIn");
      $(".menu-content").addClass("fadeOut");
    }
  });

  $(".toTop, .nav .link, .header .logo, .hero .start").click(function() {
   $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
   }, {
      duration: 500,
      easing: "swing"
   });
   return false;
 });

 $(document).scroll(function(){
   var arrowToTop =  $('.toTop');
   if ($(document).scrollTop() >= $(".hero").height() / 2)
      arrowToTop.removeClass('hidden');
  else
      arrowToTop.addClass('hidden');
 });

  $('.header').waypoint(function() {
    $('.header').addClass('animated slideInDown fast');
  }, { offset: '100%' });

  $('.hero').waypoint(function() {
    $('.hero h2, .hero h3, .hero button').addClass('animated fadeIn fast');
  }, { offset: '100%' });

  $('.feature').waypoint(function()
  {
    $('.feature').addClass('animated slideInLeft fast')
  }, { offset: '100%' });

  $('.demo .info').waypoint(function()
  {
    $('.demo .info').addClass('animated slideInRight fast');
    $('.demo .demo-img').addClass('animated fadeInRight fast');
  }, { offset: '100%' });

  $('.showcase').waypoint(function() {
    $('.showcase').addClass('animated slideInLeft fast')
    $('.showcase .draggable-task').addClass('drag-active');
  }, { offset: '100%' });

  $('.design').waypoint(function() {
    $('.design h2, .design p').addClass('animated fadeIn fast');
  }, { offset: '100%' });

  $('.design .mockup').waypoint(function()
  {
    $('.design .info').addClass('animated fadeIn fast');
  }, { offset: '100%' });

  $('.pricing').waypoint(function()
  {
    $('.pricing h2, .pricing p, .pricing button').addClass('animated fadeIn fast');
  }, { offset: '100%' });

  $('.pricing .plans').waypoint(function()
  {
    $('.pricing .plans').addClass('animated slideInUp fast');
  }, { offset: '100%' });
});
