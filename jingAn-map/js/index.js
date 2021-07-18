"use strict";

var objIndex = {
  init: function () {
    // publicObj.init();
    this.fnClick();
  },
  fnClick: function () {
    $(".centerHtml").on("click", "#areaSelect>div", function () {
      $(this).addClass("active").siblings().removeClass("active");
      areaHighlight($(this).data("id"), "highlight"); //区域高亮
    });
    $(".centerHtml").on("click", "#areaAll", function () {
      var oId = $(".centerHtml").attr("id");
      if (oId == "specialEquipmentHtml") {
        fnHtml({
          id: oId,
          fn: function fn() {
            return publicObj.fnAreaHtml('特种设备', 1);
          }
        });
      } else if (oId == "foodSupervisionHtml") {
        fnHtml({
          id: oId,
          fn: function fn() {
            return publicObj.fnAreaHtml('食品监管', 2);
          }
        });
      } else if (oId == "InternetRegulation") {
        fnHtml({
          id: oId,
          fn: function fn() {
            return publicObj.fnAreaHtml('企业查询', "internetTbody");
          }
        });
      } else if (oId == "floorHtml") {
        $(".centerHtml").attr("id", "overviewHtml");
        fnHtml("overviewHtml");
      } else {
        fnHtml(oId);
      }
      moveBack();
    })
  }
};
objIndex.init();