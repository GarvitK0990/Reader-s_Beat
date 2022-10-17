  var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,

})

/*--For-make-Menu-responsive------------*/
$(document).ready(function(){
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active')
    $('.navigation').toggleClass('active')
  })
});
