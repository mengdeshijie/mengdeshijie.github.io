publicObj.internetRegulation = {
	init() {
		this.fnAjax();
		this.fnClick();
		$("#tung").text("企业情况");
	},
	fnAjax() {
		let self = this;
		publicObj.fnAjaxFloor("system/monitor/listwt", d => {
			let data = d.rows,
				ohtml = "";
			if (data.length) {
				for (let i = 0; i < data.length; i++) {
					ohtml +=
						`<div class="flex spaceBetween alignCenter"><div class="checkResult"><span></span>${data[i].checkResult}</div><div class="up">${data[i].orderno}</div></div>`;
				}
				$("#internetLeftList").html(ohtml);
				$("#internetLeftList>div .checkResult").click(function() {
					let oText = $(this).text();
					self.fnSelect("checkResult", oText);
				});
			}
		});
		$.ajax({
			type: "GET",
			url: "../data/overview.json",
			dataType: "json",
			success: (res) => {
				const dataMonth = this.fnMonth();
				setTimeout(function() {
					fnChart.fnPie1("internetRegulation_bar1", res.internetRegulation_bar1.data, dataMonth, '抽取企业数趋势');
				}, 1000);
			}
		});
	},
	fnMonth() {
		let date = new Date();
		let MonthData = []
		let month = ''
		let m = date.getMonth() + 1 - 5;
		// let gYear = date.getFullYear() + "年";
		let gYear = "";
		for (let i = 0; i < 5; i++) {
			if (m < 0) {
				month = 12 - (Math.abs(m) % 12) + i
				if (month > 12) {
					month = month - 12
				}
				MonthData.push(gYear + month + "月")
			} else {
				month = m + i
				if (month == 0) {
					month = 12
				}
				MonthData.push(gYear + month + "月")
			}
		}
		return MonthData;
	},
	fnSelect(selectId, oText) {
		let url = "";
		if (selectId == "1") {
			url = "isAbnormal=是";
		} else if (selectId == "checkResult") {
			url = "checkResult=" + oText;
		} else if (selectId != "all") {
			url = "monitorObject=" + selectId;
		}
		publicObj.fnAjaxFloor("system/monitor/list?" + url, d => {
			let tr = "";
			if (d.rows.length) {
				let data = d.rows;
				for (let i = 0; i < data.length; i++) {
					tr +=
						`<tr data-id="${data[i].monitorObject}"><td><div class="normal_num">${i + 1}</div></td><td>${data[i].monitorObject}</td><td><span class="internetType ${data[i].isAbnormal=="否" ? '' : "abnormal"}"></span></td></tr>`;
				}
				$("#internetTbody").html(tr);
				$("#home").text(data.length + "家");
			}
		});
	},
	fnClick() {
		$(".centerHtml").off("changed.bs.select").on('changed.bs.select', '#mySelect', () => {
			let selectId = $('#mySelect').selectpicker('val');
			this.fnSelect(selectId);
		});
		$("#tableId").on('click', '#internetTbody>tr', function() {
			let id = $(this).data("id");
			publicObj.fnPdf("InternetRegulation/" + id);
		});
		$(".internetRegulation .total").click(() => {
			this.fnSelect("all");
		});
		$(".internetRegulation .abnormal").click(() => {
			this.fnSelect(1);
		});
	}

}
publicObj.internetRegulation.init();
