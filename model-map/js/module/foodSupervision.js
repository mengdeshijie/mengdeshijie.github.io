publicObj.foodSupervision = {
    videoId: null,
    isAn: true,
    isZh: true,
    index: 0,
    init() {
        this.fnAjax();
        this.fnPopup();
        fnHtml("iframeHtml");
        this.fnLeftBtnHtml();
        this.fnClick();
    },
    fnAjax() {
        $.ajax({
            type: "GET",
            url: "../data/overview.json",
            dataType: "json",
            success: function (res) {
                var dataShadow = [];
                for (var i = 0; i < res.bar4.data.length; i++) {
                    dataShadow.push(res.bar4.yMax);
                };
                setTimeout(function () {
                    fnChart.fnBarY2("foodSupervision_bar1", res.bar6.data, res.bar6.yData, '告警数分析');
                    fnChart.fnPie1("foodSupervision_bar2", res.bar4.data, res.bar4.yData, '告警企业分析');
                    fnChart.fnPie1("foodSupervision_bar4", res.foodSupervision_bar4.data, res.foodSupervision_bar4.yData, '近一周', "#fff");
                    fnChart.fnBar("foodSupervision_bar3", res.foodSupervision_bar3.data, res.foodSupervision_bar3.yData, res.foodSupervision_bar3.yMax, '告警因素分析');
                }, 1000);
            }
        });
    },
    fnPopup() {
        var a = false,
            b = false,
            aIndex = null,
            bIndex = null,
            cIndex = null
        $(".table_box .table>tbody>tr").on("mouseover", function () {
            aIndex = $(this).index();
            a = true
            fnIconfont(a, b, aIndex, bIndex);
        });
        $(".table_box .table>tbody>tr").on("mouseout", function () {
            aIndex = $(this).index();
            a = false
            fnIconfont(a, b, aIndex, bIndex);
        });
        $(".centerHtml").on('click', '#foodTbody tr', function () {
            let oIndex = $(this).index();
            let selectId = $(this).data("id");
            publicObj.fnAjaxFloor("system/cesbasenodefood/" + selectId, (d) => {
                bIndex = oIndex;
                b = true;
                let {
                    data
                } = d;
                $(".popup_box .nameSpan").text(data.compName);
                $(".popup_box .link").text(data.link);
                $(".popup_box .tel").text(data.tel);
                $(".popup_box .oaddress").text(data.address);
                $(".popup_box .police").text(Math.ceil(Math.random() * 3));
                moveTo("大型餐饮定位-" + data.mark);
                if (bIndex != cIndex) {
                    if (cIndex == null) {
                        $(".popup_box").removeClass("popup_box_active2").addClass("popup_box_active1");
                    } else {
                        $(".popup_box").removeClass("popup_box_active1");
                        setTimeout(() => {
                            $(".popup_box").removeClass("popup_box_active2").addClass("popup_box_active1");
                        }, 200)
                    }
                    cIndex = bIndex
                } else {
                    $(".popup_box").removeClass("popup_box_active2").addClass("popup_box_active1");
                }
                $(".table_box .table>tbody>tr").eq(oIndex).addClass("activel").siblings().removeClass("activel");
                fnIconfont(a, b, aIndex, bIndex);
            })

        });
        $(".popup_box .close").click(function () {
            bIndex = $(this).index();
            b = false
            fnIconfont(a, b, aIndex, bIndex);
            cIndex = null
            $(".popup_box").removeClass("popup_box_active1").addClass("popup_box_active2");
            $(".table_box .table>tbody>tr").removeClass("activel")
        });
    },
    fnEquipmentTr(selectId) {
        if (selectId == "all") {
            let data = publicObj.selectAll,
                tr = "";
            for (let i = 0; i < data.length; i++) {
                tr += `<tr data-id="${data[i].id}"><td><div class="normal_num">${i + 1}</div></td><td>${data[i].compName}</td><td><span class="iconfont icon-weizhi"></span></td></tr>`;
            }
            $("#foodTbody").html(tr);
            $("#home").text(data.length + "家");
        } else {
            publicObj.fnAjaxFloor("system/cesbasenodefood/" + selectId, (d) => {
                let arrs = [],
                    tr = "";
                if (typeof d.data === "object" && d.data.id) {
                    arrs.push(d.data);
                } else {
                    arrs = d.rows;
                }
                for (let i = 0; i < arrs.length; i++) {
                    tr += `<tr data-id="${arrs[i].id}"><td><div class="normal_num">${i+1}</div></td><td>${arrs[i].compName}</td><td><span class="iconfont icon-weizhi"></span></td></tr>`
                }
                $("#foodTbody").html(tr);
                $("#home").text(arrs.length + "家");
            });
        }
    },
    fnVideo(index) {
        let videoId = this.videoId;
        if (videoId) {
            index ? videoId.play() : videoId.pause();
        }
    },
    fnClose(index, oSrc) {
        this.isAn = true;
        this.isZh = true;
        this.index = 0;
        $("#btnImgModel").removeClass("active");
        $("#foodImgModel img").eq(index).attr("src", "../img/foodSupervision/" + oSrc + ".png");
    },
    fnLeftBtnHtml() {
        fnHtml("foodZhuiSu");
        fnHtml({
            id: "foodAnXinJian",
            fn: () => this.videoId = document.getElementById("video")
        });
    },
    fnClick() {
        let self = this;
        let aw = window.screen.availWidth - 100;
        let ah = window.screen.availHeight - 100;
        $(".centerHtml").off("changed.bs.select").on('changed.bs.select', '#mySelect', () => {
            let selectId = $('#mySelect').selectpicker('val');
            this.fnEquipmentTr(selectId);
        });
        $("#foodLeftTop>div .info_num").click(function () {
            let id = $(this).data("id");
            if (id != "all") {
                id = "list?" + id;
            }
            self.fnEquipmentTr(id);
        });
        $("#foodImgModel img").click(function () {
            const id = $(this).data("id");
            let oSrc = "",
                oSrc2 = "";
            const sibId = $(this).siblings().data("id");
            if ($(this).index()) {
                if (self.isAn) {
                    oSrc = "anxinjian2";
                    self.isAn = !self.isAn;
                } else {
                    if (self.index) {
                        oSrc = "anxinjian1";
                        self.isAn = !self.isAn;
                    } else {
                        oSrc = "anxinjian2";
                        self.isAn = false;
                    }
                }
                oSrc2 = "zhuisu1";
                self.index = 1;
            } else { //0
                if (self.isZh) {
                    oSrc = "zhuisu2";
                    self.isZh = !self.isZh;
                } else {
                    if (self.index) {
                        oSrc = "zhuisu2";
                        self.isZh = false;
                    } else {
                        oSrc = "zhuisu1";
                        self.isZh = !self.isZh;
                    }
                }
                oSrc2 = "anxinjian1";
                self.index = 0;
            }
            $(this).attr("src", "../img/foodSupervision/" + oSrc + ".png");
            $(this).siblings().attr("src", "../img/foodSupervision/" + oSrc2 + ".png");
            if (oSrc == "zhuisu2" || oSrc == "anxinjian2") {
                // oSrc == "anxinjian2" ? self.fnVideo(1) : self.fnVideo(0);
                $("#btnImgModel").addClass("active");
            } else {
                self.fnVideo(0);
                $("#btnImgModel").removeClass("active");
            }
            $("#" + id).show();
            $("#" + sibId).hide();
        });
        $(".btnRigth").on("click", ".closes", function () {
            const index = $(this).index();
            if (index) {
                self.fnClose(0, "zhuisu1");
            } else {
                self.fnVideo(0);
                self.fnClose(1, "anxinjian1");
            }
        });
        $(".btnRigth").on("click", ".opens>span", function () {
            window.open($(this).data("src"), '', 'width=' + aw + ',height=' + ah + ',top=20,left=40');
        });
    }
}
publicObj.foodSupervision.init();

function fnIconfont(a, b, aIndex, bIndex) {
    if (b) {
        $(".icon-weizhi").removeClass("activel");
        $(".icon-weizhi").eq(bIndex).addClass("activel");
    } else {
        $(".icon-weizhi").removeClass("activel");
    }
    if (a) {
        $(".icon-weizhi").eq(aIndex).addClass("activel");
    } else {
        $(".icon-weizhi").eq(aIndex).removeClass("activel");
    }
}