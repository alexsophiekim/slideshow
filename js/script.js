$(document).ready(function(){

  var slideContainer = $('.slideContainer');

  setInterval(function(){

    slideContainer.addClass('transition').css('transform','translateX(-1000px)');

    setTimeout(function(){
      var firstSlide = $('.slide').first();
      slideContainer.append(firstSlide);
      slideContainer.removeClass('transition').css('transform','translateX(0)');
    },700)
  },3000)


  $('#next').click(function(){
    // console.log("button has been clicked");
    var firstSlide = $('.slide').first();
    console.log(firstSlide);
    // var clonedSlide = firstSlide.clone();
    // firstSlide.remove();
    // slideContainer.append(clonedSlide);
    slideContainer.append(firstSlide);
  });

});
