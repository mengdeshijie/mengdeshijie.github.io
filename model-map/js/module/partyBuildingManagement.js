publicObj.partyBuildingManagement = {
	init() {
		this.fnAjax();
		this.fnPopupListData();
		this.fnClick();
	},
	fnAjax() {
		$.ajax({
			type: "GET",
			url: "../data/overview.json",
			dataType: "json",
			success: function(res) {
				setTimeout(function() {
					fnChart.fnPartyPie("party_pie1", res.partyPie1.data, '干部学历情况');
					fnChart.fnPartyPie("party_pie2", res.partyPie2.data, '活动类型占比');
					fnChart.fnPartyPie("party_pie3", res.partyPie3.data, '年龄分布');
					fnChart.fnPie1("party_bar1", res.partyBar1.data, res.partyBar1.yData, '历年发展党员数量');
					fnChart.fnPartyBar("party_bar2", res.bar5.arr, res.bar5.yData, '历年活动数量统计');
				}, 1000);
			}
		});
	},
	fnPopupListData() {
		let str = "",
			strList = "罗方、褚扬、姚凌风、刘义远、李倩（女）、陈珺琦（女）、徐歌阳（女）、况飞龙、张帆（女）、孙旭峰、胡青",
			arrList = strList.split("、");
		for (let k in arrList) {
			str += `<li>${arrList[k]}</li>`;
		}
		$("#popupListOl").html(str);
	},
	fnClick() {
		let isof = true;
		$("#partyMember").click(() => {
			if (isof) {
				isof = false;
				$(".popup_box").removeClass("popup_box_active2").addClass("popup_box_active1");
			} else {
				isof = true;
				$(".popup_box").removeClass("popup_box_active1").addClass("popup_box_active2");
			}
		});
		$(".popup_box .close").click(function() {
			isof = true;
			$(".popup_box").removeClass("popup_box_active1").addClass("popup_box_active2");
		});
	}
}
publicObj.partyBuildingManagement.init();
