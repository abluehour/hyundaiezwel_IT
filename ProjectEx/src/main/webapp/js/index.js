/**
 * index.js
 */

$(function () {
  //윈도우 스크롤 시 메인 메뉴 고정
  $(window).on("scroll", function () {
    //스크롤 되는 스크롤 바의 top의 위치가 hearderBox의 높이보다 커지면 메인메뉴 고정시키고 그림자 표시
    if ($(document).scrollTop() >= $("#headerBox").height()) {
      $("#mainMenuBox").addClass("mainMenuFixed mainMenuShadow");
    } else {
      //스크롤 바의 top의 위치가 headerBox의 높이보다 작으면 메인메뉴 고정 해제
      $("#mainMenuBox").removeClass("mainMenuFixed mainMenuShadow");
    }
  });

  $("#moveToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
