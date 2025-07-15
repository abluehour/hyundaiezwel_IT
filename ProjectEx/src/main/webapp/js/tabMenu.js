/**
 * tabMenu.js
 */
$(function () {
  const tabContent = $("#tabContent div");

  // 첫 번째 탭을 선택된 상태로 설정
  $("#tabMenu li:first-child").addClass("selectedItem");

  $("#tabMenu li").on("click", function () {
    let index = $(this).index();

    //탭메뉴 항목을 선택된 이미지로 변경

    //메뉴 이미지 변경
    $("#tabMenu li").removeClass("selectedItem");
    $(this).addClass("selectedItem");

    //콘텐츠 이미지 변경
    //content의 모든 div 숨기기
    tabContent.css("display", "none");
    //선택된 tabMenu와 인덱스값이 같은 원소 div만 표현함
    tabContent.eq(index).css("display", "block");
  });
});
