$(document).ready(function() {
  $(".button-collapse").sideNav({
    edge: 'left'
  });
  $(".parallax").parallax();
  $('.modal').modal({
    onOpenEnd: (function() {
      console.log('onOpenEnd')
    }),
  });
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true,
    duration: 500,
    noWrap: true
  });
  Materialize.showStaggeredList('#ul-test')
})

