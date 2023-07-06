function toggleMenu() {
    let menu = document.getElementById('menu');
    $(menu).slideToggle(500);
}
$('.left-side i').on('click', function (e){
    $('.app-banner').slideUp(500);
});

$(function() {
  $(".eng").click(function() {
      //cabeçalho
      $(".dropbtn").text("EN");
      $(".dropbtn").removeClass("dropbtn-flag-ru");
      $(".dropbtn").removeClass("dropbtn-flag-usa");
      $(".dropbtn").addClass("dropbtn-flag-usa");
  });
});

$(function() {
  $(".ru").click(function() {
      //cabeçalho
      $(".dropbtn").text("RU");
      $(".dropbtn").removeClass("dropbtn-flag-usa");
      $(".dropbtn").removeClass("dropbtn-flag-ru");
      $(".dropbtn").addClass("dropbtn-flag-ru");
  });
});