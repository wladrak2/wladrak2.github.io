$(document).ready(function(){
  $('.menu').hide();

  $('#f-1').hover(function() {
        $('.menu', this).show();
  }, function() {
        $('.menu', this).hide();
  });

  $('#f-2').hover(function() {
    $('.menu', this).show();
}, function() {
    $('.menu', this).hide();
});
}); 


$(document).ready(function(){
  $('.menu ul ul').hide();

  $('#podmenu-1').hover(function() {
    $('ul', this).slideDown(0);
  }, function() {
    $('ul', this).slideUp(0);
  });
}); 