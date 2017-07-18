$(document).ready(function(){
  $('.accordion').on('click', function(){
    if($(this).hasClass("active")){
      $(this).siblings().slideUp();
      $(this).removeClass("active");
    } else {
      $('.accordion').removeClass("active");
      $('.panel').slideUp();
      $(this).siblings().slideDown();
      $(this).addClass("active");      
    }
  })
  
  $('#lang-selection-dropdown').on("click", function(){
    if($(this).hasClass("open")){
      $('#lang-list').slideUp();
      $(this).removeClass("open");
    } else {
      $('#lang-list').slideDown();
      $(this).addClass("open");
    }
  })
  
})