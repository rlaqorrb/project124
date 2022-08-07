$('.span-container').on('click', function () {
  $('menu').toggleClass('show');
  $('.bar').eq(0).toggleClass('bar-show1');
  $('.bar').eq(1).toggleClass('bar-show2');
  $('.bar').eq(2).toggleClass('bar-show3');
  $('.logo').toggleClass('logo-show');
  $('.time').toggleClass('time-show');
})
