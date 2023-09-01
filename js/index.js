$("document").ready(function () {
  let typed = new Typed("#typed1", {
    stringsElement: "#typed",
    typeSpeed: 100,
  });
  // web-swiper
  const webSwiper = new Swiper(".swiper .web-swiper", {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    loop: true,
  });
  // 없는것을 임의로 만들어둠 false 일때 실행하지 않음
  // 이걸 true로 만들어줘서 왔다갔다 할때 실행되지 않도록 하는 원리...
  // 프로그래스바가 중첩으로 실행되는 것을 막아줌
  let isChk = false;

  $(".fullpage").fullpage({
    sectionsColor: [
      "#140a42",
      "#f1f0f5",
      "#f1f0f5",
      "#f1f0f5",
      "#f1f0f5",
      "#f1f0f5",
    ],
    navigation: true,
    anchors: [
      "home",
      "profile",
      "publishing",
      "design",
      "ux",
      "contact",
      "footer",
    ],
    navigationTooltips: [
      "홈",
      "프로필",
      "퍼블리싱",
      "디자인",
      "경험",
      "컨텍트",
      "카피라이트",
    ],
    // 뷰포트 너비가 1200px 미만일때 반응형 가능
    responsiveWidth: 1200,
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    // afterLoad: 각 섹션에 로딩한 후에 실행
    // origin은 어디서부터 이벤트가 발생했는지, destination은 어디로 이동하는지를 나타냄
    afterLoad: function (origin, destination) {
      console.log(destination);
      // 첫번째 섹션으로 이동할 때,
      if (destination == 1) {
        $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on");
      }
      // 툴팁
      if (destination == 2 && isChk == false) {
        isChk = true;
        let bar = new ProgressBar.Line("#html", {
          strokeWidth: 4,
          trailWidth: 4,
          color: "#fac8c8",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar.animate(0.7);
        let bar2 = new ProgressBar.Line("#css", {
          strokeWidth: 4,
          trailWidth: 4,
          color: "#fac8c8",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar2.animate(0.5);
        let bar3 = new ProgressBar.Line("#js", {
          strokeWidth: 4,
          trailWidth: 4,
          color: "#fac8c8",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar3.animate(0.3);
        let bar4 = new ProgressBar.Line("#ps", {
          strokeWidth: 4,
          trailWidth: 4,
          color: "#fac8c8",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar4.animate(1);
        let bar5 = new ProgressBar.Line("#ai", {
          strokeWidth: 4,
          trailWidth: 4,
          color: "#fac8c8",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar5.animate(0.9);
        let bar6 = new ProgressBar.Line("#of", {
          strokeWidth: 4,
          trailWidth: 4,
          color: "#fac8c8",
          duration: 1400,
          step: function (state, circle) {
            circle.setText(Math.round(circle.value() * 100) + "%");
          },
        });
        bar6.animate(0.8);
      }
    },
    // onLeave:사용자가 페이지에서 다른 섹션으로 이동할때 발생하는 이벤트
    onLeave: function (origin, destination) {
      // header 보이기 숨기기
      if (destination > 1) {
        $(".header").fadeIn();
      } else {
        $(".header").fadeOut();
      }
      // 풀페이지 툴팁에 대한 내용
      $("#fp-nav ul li .fp-tooltip")
        .removeClass("on")
        .eq(destination - 1)
        .addClass("on");
    },
  });
});
