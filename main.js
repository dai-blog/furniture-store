$(function() {
  $('.fa-list').click(function() {
    $('.modal-wrapper').fadeIn();
    $('.fa-list').fadeOut();
    
    
    
  });

  $('.fa-times').click(function() {
    $('.modal-wrapper').fadeOut();
    $('.fa-list').fadeIn();

  });

});