$(function () {
  btnHam();
  myFullpage();
});

function myFullpage() {
  const $myFull = $("#fullpage");
  const $header = $(".pageHeader");

  if (!$myFull) {
    return false;
  }
  $myFull.fullpage({
    verticalCentered: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: [
      "현세서윤",
      "효순은정",
      "세원_미진",
      "순상",
      "시찬",
      "희정",
      "지승",
      "혁",
      "정배",
    ],
    showActiveTooltip: true,

    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && direction == "down") {
        $header.addClass("sticky");
      } else if (index == 2 && direction == "up") {
        $header.removeClass("sticky");
      } else if (index == 5 && direction == "down") {
        $(".area.f img").addClass("show");
      }
    },
  });
}

function btnHam() {
  const $btnHam = $(".btnHam");
  const $dimm = $(".dimm");
  const $modal = $(".modal");
  const $modal2 = $(".modal2");
  const $header = $(".pageHeader");
  const $btnClose = $(".btnClose");

  $btnHam.click(function () {
    // $dimm.fadeIn(100);
    // $modal.fadeIn(100);
    // $modal2.animate({
    //     bottom : 0
    // }, 500);
    $header.addClass("full");
    $btnClose.show();
  });

  $btnClose.click(function () {
    $header.removeClass("full");
    $(this).hide();
  });

  $dimm.click(function () {
    $(this).hide();
    // $modal.hide();
    $modal2.animate(
      {
        bottom: "-70vh",
      },
      100
    );
  });
}
