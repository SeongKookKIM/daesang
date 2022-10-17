$(function () {
  // 존중이야기 클릭시 변경

  $("#busniess .view_box .view_ch li").click(function (e) {
    e.preventDefault();

    $("#busniess .view_box .view_box_main img").attr(
      "src",
      $(this).children("img").attr("src")
    );
    $("#busniess .view_box .view_box_main p").text(
      $(this).children("p").text()
    );
    $("#busniess .view_box .view_box_main span").text(
      $(this).children("span").text()
    );
  });

  // 메뉴바
  $(function () {
    $(".btn").click(function () {
      $(this).next().slideToggle("slow");

      $(".list").not($(this).next()).slideUp("slow");
    });
  });

  //토글바
  var on_off = false;

  $(".toggle").click(function () {
    on_off = !on_off;

    if (on_off) {
      $(".t_stick, .b_stick")
        .animate({ top: "15px" }, 500, "easeOutExpo")
        .animate({ rotate: "45deg" }, 500, "easeOutExpo");

      $(".m_stick")
        .delay(500)
        .animate({ rotate: "-45deg" }, 500, "easeOutExpo");
      $("header #menu_box").css({ top: "20%" });
    } else {
      //
      $(".toggle .stick").animate({ rotate: "0deg" }, 500, "easeOutExpo");
      $(".t_stick").animate({ top: "5px" }, 500, "easeOutExpo");
      $(".b_stick").animate({ top: "25px" }, 500, "easeOutExpo");
      $("header #menu_box").css({ top: "-100%" });
    }
  });

  // 나타나는 이벤트
  $("#header_box h2").addClass("on");
  $("#header_box p").addClass("on1");
  $("#header_box .introbox").addClass("on2");

  // 대상트리
  var isFn = false;
  $(window).scroll(function () {
    if (isFn) {
      return;
    }

    var scrPos = $(this).scrollTop();

    if (
      scrPos >= $("#daesang").position().top - 250 &&
      scrPos <= $("#daesang").position().top + 110
    ) {
      $("#daesang .daesang_box").css({
        transform: "scale(" + 100 + "%)",
        opacity: "1",
      });
    }
  });
});
