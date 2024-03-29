publicObj.modal = {
  enterpriseData: null,
  tabelObj: {
    "3": [{
        url: "license/gsj",
        name: "工商局",
        total: "gsjnum",
        th: {
          nodeId: "统一社会信用代码",
          licenseNumber: "许可文件编号",
          licenseName: "许可文件名称",
          validitySince: "有效期自",
          validityUntil: "有效期至",
          licenseAuthority: "许可机关",
          licenseContent: "许可内容"
        },
      },
      {
        url: "license/xyzg",
        name: "信用中国",
        total: "xyzgnum",
        th: {
          nodeId: "统一社会信用代码",
          decideNumber: "决定书文号",
          decisionAuthority: "决定机关",
          validitySince: "许可决定日期"
        }
      }
    ],
    "4": [{
      url: "tax",
      name: "",
      total: "taxnum",
      th: {
        taxType: "企业名称",
        taxpayerNumber: "2019年度纳税总额",
      },
    }],
    "5": [{
      url: "qualification",
      name: "",
      total: "zjzsnum",
      th: {
        nodeId: "统一社会信用代码",
        certificateType: "证书类型",
        certificateNumber: "证书编号",
        releaseDate: "发证日期",
        expirationDate: "截止日期"
      },
    }],
    "6": [{
        url: "rights/sbxx",
        name: "商标信息",
        total: "sbxxnum",
        th: {
          // nodeId: "统一社会信用代码",
          applicationDate: "申请日期",
          trademark: "商标",
          trademarkName: "商标名称",
          registrationNumber: "注册号",
          internationalType: "国际分类",
          trademarkState: "商标状态"
        },
      },
      {
        url: "rights/zlxx",
        name: "专利信息",
        total: "zlxxnum",
        th: {
          // nodeId: "统一社会信用代码",
          announcementDate: "申请公布日",
          patentName: "专利名称",
          applicationNumber: "申请号",
          announcementNumber: "申请公布号",
          patentType: "专利类型"
        },
      },
      {
        url: "rights/rjzzq",
        name: "软件著作权",
        total: "rjzzqnum",
        th: {
          // nodeId: "统一社会信用代码",
          approvalDate: "登记批准日期",
          softwareFullName: "软件全称",
          softwareName: "软件简称",
          registrationNumber: "登记号",
          classificationNumber: "分类号",
          versionNumber: "版本号"
        },
      },
      {
        url: "rights/wzba",
        name: "网站备案",
        total: "rjzzqnum",
        th: {
          // nodeId: "统一社会信用代码",
          auditDate: "审核日期",
          websiteName: "网站名称",
          websiteHomepage: "网站首页",
          domainName: "域名",
          websiteRecords: "网站备案/许可证号",
        },
      }
    ],
    "7": [{
      url: "report",
      name: "",
      total: "qynbnum",
      th: {
        nodeId: "统一社会信用代码",
        annualReport: "年报",
      },
    }],
    "8": [{
      url: "lawsuit",
      name: "",
      total: "flssnum",
      th: {
        // nodeId: "统一社会信用代码",
        releaseDate: "发布日期",
        caseName: "案件名称",
        caseReason: "案由",
        caseNumber: "案号",
        caseIdentity: "案件身份",
      },
    }],
    "9": [{
        url: "abnormal/lryc",
        name: "列入异常",
        total: "lyycnum",
        th: {
          nodeId: "统一社会信用代码",
          enrolDate: "列入日期",
          decisionAuthority: "作出决定机关",
          enrolReason: "列入经营异常名录原因",
        },
      },
      {
        url: "abnormal/ycyc",
        name: "移出异常",
        total: "ycycnum",
        th: {
          nodeId: "统一社会信用代码",
          enrolDate: "列入日期",
          enrolReason: "列入经营异常名录原因",
          decisionAuthority: "作出决定机关",
          removeDate: "移出日期",
          removeReason: "移出经营异常名录原因"
        },
      }
    ],
    "10": [{
      url: "punishment/gsj",
      name: "工商局数",
      total: "xzcfnum",
      th: {
        nodeId: "统一社会信用代码",
        penaltyDecideDate: "处罚决定日期",
        decideNumber: "决定书文号",
        penaltyContent: "行政处罚内容",
        decisionAuthority: "决定机关",
      },
    }],
  },
  init() {
    this.fnData();
    this.fnclick();
  },
  fnData() {
    this.fnModalAjax("system/node/" + publicObj.selectRow.id);
  },
  fnModalAjax(url) {
    publicObj.fnAjaxFloor(url, (d) => {
      this.enterpriseData = d.data;
      this.fnEstablish(d.data);
      this.fnNum()
    });
  },
  fnEstablish(data) {
    let okey = {
      // compName: "企业名称",
      legalPersonTel: "法定代表人",
      registeredCapital: "注册资本",
      contributedCapital: "实缴资本",
      recordDate: "成立日期",
      operatingState: "经营状态",
      socialCreditCode: "统一社会信用代码",
      registrationNumber: "工商注册号",
      taxNumber: "纳税人识别号",
      organizationCode: "组织机构代码",
      companyType: "公司类型",
      industry: "行业",
      acceptOrgan: "受理机关",
      territorialAuthority: "属地机关",
      businessTerm: "营业期限",
      taxpayerQualification: "纳税人资质",
      staffSize: "人员规模",
      contributorsIn: "参保人数",
      formerName: "曾用名",
      englishNames: "英文名称",
      registeredAddress: "注册地址",
      businessPremises: "经营场所地址",
      // businessScope: "经营范围",
      enterpriseType: "企业类型"
    }
    let htmls = "";
    for (let k in okey) {
      if (data[k] && data[k] != "-") {
        htmls +=
          `<div class="text_box">
                        <span class="name">${okey[k]}：</span>
                        <span class="content">${data[k]}</span>
                    </div>`;
      }
    }
    $("#compName").text(data.compName);
    $("#englishNames").text(data.englishNames);
    $("#writing").html(htmls);
  },
  fnImgs(osrc) {
    if (osrc) {
      return '<img class="datas oImgData" src="' + publicObj.oulAll + osrc + '" />';
    } else {
      return '<span class="datas noSpan">暂无数据</span>';
    }
  },
  fnImgEnlarge(osrc) {
    let newImg = new Image();
    newImg.src = publicObj.oulAll + osrc;
    let self = this;
    newImg.onload = function () {
      if (newImg.width > 1105 || newImg.g > 600) {
        $(".box_right>div .oImgData").addClass("active");
        $(".box_right>div .oImgData").click(function () {
          self.imgShow($(this).attr("src"));
        })
      }
    }
  },
  imgShow(src) {
    var domId = "imgWrap" + new Date().getTime();
    var styleId = "style" + new Date().getTime();
    var dom = `<div id="${domId}" class="imgWrap"><div class="imgBox"><img src="${src}"/></div></div>`;
    var style =
      `<style id="${styleId}">
        @keyframes smallToBig{
          0%{
            transform: scale(0);
          }
          50%{
            transform: scale(1.5);
          }
          100%{
            transform: scale(1);
          }
        }
        @keyframes fadeIn{
          0%{
            opacity:0;
          }
          100%{
            opacity:1;
          }
        }
        @keyframes fadeOut{
          0%{
            opacity:1;
          }
          100%{
            opacity:0;
          }
        }
        .imgWrap{cursor:-webkit-zoom-out;position: fixed;top: 0;left: 0;background: rgba(0,0,0,.6);width: 100%;height: 100%;z-index: 9999;-webkit-animation: fadeIn .5s forwards;-o-animation: fadeIn .5s forwards;animation: fadeIn .5s forwards;}
        .imgWrap img{-webkit-animation: smallToBig .5s forwards;-o-animation: smallToBig .5s forwards;animation: smallToBig .5s forwards;margin-top: 30px;}
        .imgWrap.fadeOut{animation: fadeOut .5s forwards;}
        .imgBox{height: 100%;overflow: auto;position: absolute;margin: auto;left: 0;right: 0;top: 0;bottom: 0;text-align: center;}
     </style>`;
    $('body').append(dom);
    $('head').append(style);
    $('#' + domId).click(function () {
      var _self = $(this);
      _self.addClass('fadeOut');
      setTimeout(function () {
        _self.remove()
        $('#' + styleId).remove()
      }, 500)
    })
  },
  fnNum() {
    let xzxknum = this.enterpriseData.gsjnum + this.enterpriseData.xyzgnum;//行政许可
    let supjnum = this.enterpriseData.taxnum;//纳税信息
    let zjzsnum = this.enterpriseData.zjzsnum;//资质证书
    let zscqnum = this.enterpriseData.rjzzqnum + this.enterpriseData.sbxxnum + this.enterpriseData.wzbanum + this.enterpriseData.zlxxnum;//知识产权
    let qynbnum = this.enterpriseData.qynbnum;//企业年报
    let flssnum = this.enterpriseData.flssnum;//法律诉讼
    let jyysnum = this.enterpriseData.lyycnum + this.enterpriseData.ycycnum;//经营异常
    let xzcfnum = this.enterpriseData.xzcfnum;//行政处罚
    // let tsjbnnum = this.enterpriseData.zjzsnum;//投诉举报
    $(".box_left>div .xzxknum").text("(" + xzxknum + ")");
    $(".box_left>div .supjnum").text("(" + supjnum + ")");
    $(".box_left>div .zjzsnum").text("(" + zjzsnum + ")");
    $(".box_left>div .zscqnum").text("(" + zscqnum + ")");
    $(".box_left>div .qynbnum").text("(" + qynbnum + ")");
    $(".box_left>div .flssnum").text("(" + flssnum + ")");
    $(".box_left>div .jyysnum").text("(" + jyysnum + ")");
    $(".box_left>div .xzcfnum").text("(" + xzcfnum + ")");
    // $(".box_left>div .tsjbnnum").text("(" + tsjbnnum + ")");
  },
  fnTable(index) {
    let enterpriseData = this.enterpriseData;
    let arrs = this.tabelObj[index];
    let boxRight = $(".box_right>div").eq(index);
    let boxLeft = $(".box_left>div").eq(index);
    let totals = 0;
    for (let k in arrs) {
      let url = `/system/${arrs[k].url}/list?pid=${enterpriseData.id}`;
      let ototal = arrs[k].total;
      totals += enterpriseData[ototal];
      publicObj.fnAjaxFloor(url, (d) => {
        let {
          rows
        } = d;
        if (rows.length) {
          let ths = arrs[k].th,
            oth = "",
            otr = "",
            tabelName = "";
          for (let r in rows) {
            let otd = "",
              annualUrl = "";
            for (let o in ths) {
              if (r == 0) {
                oth += `<th>${ths[o]}</th>`;
              }
              if (index == 7 && rows[r].annualUrl && o == "annualReport") {
                annualUrl = `data-annual="${rows[r].annualUrl}" class="annual"`
              }
              otd += `<td ${annualUrl}>${rows[r][o]}</td>`;
            }
            otr += `<tr>${otd}</tr>`;
          }
          if (arrs[k].name) {
            tabelName = `<div><span class="tabelName">${arrs[k].name}</span><span class="tabelLength">${rows.length}</span></div>`
          }
          let htmls = `<div class="datas table-responsive">${tabelName}<table class="table table-striped text-nowrap" data-toggle="table" data-height="4"><thead><tr>${oth}</tr></thead><tbody id="${index == 7 ? "report" : ""}">${otr}</tbody></table></div>`;
          boxRight.append(htmls);
          if (index == 7) {
            this.fnReport();
          }
        } else {
          if (!arrs[k].name) {
            boxRight.html(this.fnImgs());
          }
        }
      });
    }
    boxLeft.find(".total").text("(" + totals + ")");
  },
  fnReport() {
    $("#report>tr>td:last-of-type").click(function () {
      const annualUrl = $(this).data("annual");
      if (annualUrl) {
        publicObj.fnPdf("modal/" + annualUrl);
      }
      return false;
    })
  },
  fnclick() {
    let self = this;
    $('#modal-container').click(function () {
      $(this).addClass('out');
    });
    $(".modal-center").click(function (event) {
      event.preventDefault();
      return false;
    });
    $(".box_left>div").click(function () {
      let oIndex = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      let boxRight = $(".box_right>div").eq(oIndex);
      boxRight.show().siblings().hide();
      if (oIndex < 3) {
        let {
          architectureDiagram,
          equityThrough
        } = self.enterpriseData;
        if (!boxRight.find(".datas").length) {
          if (oIndex == 1) {
            if (architectureDiagram.indexOf(",") != -1) {
              const arrs = architectureDiagram.split(",");
              let strs = "";
              arrs.forEach(item => {
                strs += self.fnImgs(item);
                self.fnImgEnlarge(item);
              });
              boxRight.html(strs);
            } else {
              boxRight.html(self.fnImgs(architectureDiagram));
              self.fnImgEnlarge(architectureDiagram);
            }
          } else if (oIndex == 2) {
            if (equityThrough.indexOf(",") != -1) {
              const arrs = equityThrough.split(",");
              let strs = "";
              arrs.forEach(item => {
                strs += self.fnImgs(item);
                self.fnImgEnlarge(item);
              });
              boxRight.html(strs);
            } else {
              boxRight.html(self.fnImgs(equityThrough));
              self.fnImgEnlarge(equityThrough);
            }
          }
        }
        return false;
      }

      if (!boxRight.find(".datas").length) {
        let oType = $(this).data("otype");
        if (oType == "0") {
          boxRight.html(self.fnImgs());
        } else {
          self.fnTable(oIndex);
        }
      }
    });
  }
}
publicObj.modal.init();