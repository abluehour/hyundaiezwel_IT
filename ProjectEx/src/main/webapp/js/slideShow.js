/**
 *slideShow.js
 */

$(function () {
  //이동한 이미지의 index 값 저장 변수(현재 이미지)
  var moveIndex = 0;
  var autoSlideTimer; // 자동 슬라이드 타이머 변수

  //슬라이드 패널을 움직여주는 함수
  function moveSlide(index) {
    //전달받은 index값을 moveIndex에 저장
    moveIndex = index;

    //슬라이드 이동
    var moveLeft = -(index * 1280);
    $("#slidePanel").animate({ left: moveLeft }, "slow");

    // 컨트롤 버튼 상태 업데이트
    updateControlButtons(index);
  }

  // 컨트롤 버튼 상태 업데이트 함수
  function updateControlButtons(activeIndex) {
    $(".controlButton").each(function (index) {
      if (index === activeIndex) {
        $(this).attr("src", "image/controlButton2.png");
      } else {
        $(this).attr("src", "image/controlButton1.png");
      }
    });
  }

  // 자동 슬라이드 함수
  function autoSlide() {
    moveIndex = (moveIndex + 1) % 5; // 0~4 순환
    moveSlide(moveIndex);
  }

  // 자동 슬라이드 시작 함수
  function startAutoSlide() {
    autoSlideTimer = setInterval(autoSlide, 5000); // 5초마다 실행
  }

  // 자동 슬라이드 정지 함수
  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }

  //prev 버튼 클릭하면 앞으로 이동
  $("#prevButton").on("click", function () {
    stopAutoSlide(); // 자동 슬라이드 정지

    if (moveIndex != 0)
      //첫번째 이미지가 아니면 진행
      moveIndex = moveIndex - 1;
    else moveIndex = 4; // 첫번째에서 prev 클릭하면 마지막으로

    moveSlide(moveIndex);
    startAutoSlide(); // 자동 슬라이드 재시작
  });

  //next 버튼 클릭하면 뒤로 이동
  $("#nextButton").on("click", function () {
    stopAutoSlide(); // 자동 슬라이드 정지

    if (moveIndex != 4)
      //마지막 이미지가 아니면 진행
      moveIndex = moveIndex + 1;
    else moveIndex = 0; // 마지막에서 next 클릭하면 첫번째로

    moveSlide(moveIndex);
    startAutoSlide(); // 자동 슬라이드 재시작
  });

  // 랜덤 시작 이미지 설정
  var randomNumber = Math.floor(Math.random() * 5);
  moveSlide(randomNumber);

  //각 컨트롤 버튼에 대해
  $(".controlButton").each(function (index) {
    $(this).hover(
      function () {
        $(this).attr("src", "image/controlButton2.png");
      },
      function () {
        $(this).attr("src", "image/controlButton1.png");
      }
    );
    $(this).on("click", function () {
      moveSlide(index);
    });
  }); //each 끝
}); //ready 끝
