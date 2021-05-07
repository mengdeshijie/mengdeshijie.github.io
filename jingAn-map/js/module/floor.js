publicObj.floor = {
  isChanged: true,
  init() {
    publicObj.fnAreaHtml(publicObj.selectRow.compName);
    moveTo(publicObj.selectRow.areaHomesLayer);
    if (publicObj.modelCllck) {
      publicObj.fnAjaxFloor("system/node/selectlist?location=" + publicObj.modelCllck, (d) => {
        this.fnEnterpriseTr(d.rows);
      });
    } else {
      this.fnEnterpriseTr(publicObj.selectRow);
    }
    publicObj.modelCllck = "";
    this.fnClick();
  },
  fnRowAjax(url, floor, moxing) {
    let floorName = floor;
    if (floorName.indexOf("Ding") != "-1") {
      floorName = floorName.substring(0, 9);
    }
    publicObj.fnAjaxFloor(url + floorName, (d) => {
      this.fnEnterpriseTr(d.rows, floorName);
    });
    if (moxing) {
      $("#rightOverview").removeClass("rightOverview");
    }
  },
  fnEnterpriseTr(o, floorName) {
    let lis = "",
      home = "1";
    if (o && o.id) {
      let {
        id,
        compName,
        areaHomesLayer
      } = o;
      lis = `<tr data-id="${id}"><td>${compName}</td><td class="details">信息</td></tr>`;
      this.fnIndexOf(areaHomesLayer);
    } else {
      for (let k in o) {
        lis += `<tr data-id="${o[k].id}"><td>${o[k].compName}</td><td class="details">信息</td></tr>`;
      }
      home = o.length;
      this.fnIndexOf(floorName);
    }
    $("#home").text(`${home}家`);
    if (!lis) {
      lis = `<tr class="noData"><td>暂无数据</td></tr>`;
    }
    $("#htmlUlLi").html(lis);
  },
  fnIndexOf(floorName) {
    if (!floorName) {
      return;
    }
    let layer = "";
    if (floorName.split("-").length > 2) {
      let floorNameLayer = floorName.substring(floorName.length - 2);
      layer = `-${floorNameLayer=="ng" ? '顶' : floorNameLayer}层`; //取最后2位
    }
    $("#tung").text(`${floorName.substr(0, 1)}区-${floorName.charAt(5)}栋${layer}`);
  },
  fnClick() {
    let self = this;
    $(".centerHtml").off("changed.bs.select").on('changed.bs.select', '#mySelect', () => {
      publicObj.fnSelectChanged();
      moveTo(publicObj.selectRow.areaHomesLayer);
      this.fnEnterpriseTr(publicObj.selectRow);
      $("#constituencySpan").text(publicObj.selectRow.compName);
      this.isChanged = false;
    });
    $("#htmlUlLi").off("click").on('click', 'tr', function () {
      let oIndex = $(this).index();
      $(".table_box .table>tbody>tr").eq(oIndex).addClass("activel").siblings().removeClass("activel");
      publicObj.selectRow.id = $(this).data("id");
      if (publicObj.selectRow.id) {
        fnHtml({
          id: "modalHtml",
          fn: () => {
            $('.modal_delete').click(function (event) {
              event.preventDefault();
              $('#modal-container').addClass('out');
            });
            self.isChanged = true;
          }
        });
      }
    });
  }
}
publicObj.floor.init();