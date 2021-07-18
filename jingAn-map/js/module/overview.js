publicObj.overview = {
  init() {
    publicObj.fnAreaHtml('企业查询', 0);

    this.fnAjax();
  },
  fnAjax() {
    $.ajax({
      type: "GET",
      url: "../data/overview.json",
      dataType: "json",
      success: function (res) {
        setTimeout(function () {
          fnChart.fnPie4("left_pie1");
          fnChart.fnDrawPieArea("drawPieArea");
          fnChart.fnBarY1("chart_bar1", res.bar1.data, res.bar1.yData, );
          fnChart.fnBarY("chart_bar2", res.bar.data, res.bar.yData);
          fnChart.fnPie1("left_bar", res.bar3.data, res.bar3.yData, );
        }, 1000);
      }
    });
    this.fnClick();
  },
  fnEnterprise(oIndex, oText) {
    publicObj.fnAjaxFloor("ces/node/list?cvalue=" + (oIndex + 1), (d) => {
      let rows = d.rows;
      $("#popupBoxImg").attr("src", "../img/popup_index" + oIndex + ".png");
      $("#popupBoxTitle").text(oText + "：");
      $("#popupBoxNum").text(rows.length);
      let src = "";
      for (let i = 0; i < rows.length; i++) {
        src += '<li>' + rows[i].compName + '</li>';
      }
      $("#popupBoxTbody").html(src);
      $(".popup_box").removeClass("popup_box_active1");
      setTimeout(() => {
        $(".popup_box").removeClass("popup_box_active2").addClass("popup_box_active1");
      }, 200);
    });
  },
  fnClick() {
    let self = this;
    $(".centerHtml").off("changed.bs.select").on('changed.bs.select', '#mySelect', function () {
      publicObj.fnSelectChanged(["floorHtml", "areaHtml"]);
    });
    $(".popup_box .close").click(function () {
      $(".popup_box").removeClass("popup_box_active1").addClass("popup_box_active2");
    });
    $(".rightOverview .right_center_box").click(function () {
      let oIndex = $(this).index();
      let oText = $(this).find(".center-title").text();
      self.fnEnterprise(oIndex, oText);
    });
  }
}
publicObj.overview.init();