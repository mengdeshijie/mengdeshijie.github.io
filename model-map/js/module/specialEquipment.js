var tableIndex = 0;
publicObj.specialEquipment = {
	videoSrc: "",
	videoClose: false,
	elVideo: document.getElementById('video'),
	elHls:{},
	init() {
		this.fnAjax();
		this.fnRuning();
		this.fnTable();
		this.fnPopup();
		this.fnClick();
	},
	fnAjax() {
		$.ajax({
			type: "GET",
			url: "../data/overview.json",
			dataType: "json",
			success: function(res) {
				var dataShadow = [];
				for (var i = 0; i < res.bar.data.length; i++) {
					dataShadow.push(res.bar.yMax);
				};
				setTimeout(function() {
					fnChart.fnPie("specialEquipment_pie1", [{
							value: 100,
							name: ''
						},
						{
							value: 0,
							name: ''
						},
					]);
					fnChart.fnPie("specialEquipment_pie2", [{
							value: 50,
							name: ''
						},
						{
							value: 0,
							name: ''
						},
					]);
				}, 1000);
			}
		});
	},
	fnRuning() {
		let elevatorNum = 10;
		let boilerNum = 10;
		for (let i = 0; i < 10; i++) {
			if (i < elevatorNum) {
				$(".running_elevator").append(`<div class="normal_num"></div>`)
			} else {
				$(".running_elevator").append(`<div class="abnormal_num"></div>`)
			}

			if (i < boilerNum) {
				$(".running_boiler").append(`<div class="normal_num"></div>`)
			} else {
				$(".running_boiler").append(`<div class="abnormal_num"></div>`)
			}
		}
	},
	fnTable() {
		$(".table_box .title>div").on("click", function() {
			tableIndex = $(this).index();
			$(this).addClass("activel").siblings().removeClass("activel");
			if (tableIndex == 0) {
				$(".table_box .table1").show();
				$(".table_box .table2").hide()
				$(".title_spr").show()
				publicObj.fnAreaHtml('特种设备', 1);
			} else {
				$("#boiler tr").show();
				$(".table_box .table2").show();
				$(".table_box .table1").hide();
				$(".title_spr").hide();
				publicObj.fnAreaHtml('特种设备', 3);
			}
			$(".popup_box").removeClass("popup_box_active1").addClass("popup_box_active2");
			$(".table_box .table>tbody>tr").removeClass("activel");
		});
	},
	fnPopup() {
		var b = false,
			bIndex = null,
			cIndex = null,
			wbDate = "";
		let self = this;
		$(".centerHtml").on("mouseover", ".equipmentTbody tr", function() {
			$(this).find(".icon-weizhi").addClass("activel");
		});
		$(".centerHtml").on("mouseout", ".equipmentTbody tr", function() {
			if ($(this).hasClass("activel")) {
				$(this).siblings().find(".icon-weizhi").removeClass("activel");
			} else {
				$(this).find(".icon-weizhi").removeClass("activel");
			}
		});
		$(".centerHtml").on("click", ".equipmentTbody tr", function() {
			self.elHls.media && self.elHls.destroy();
			let selectId = $(this).data("id");
			let oThis = $(this);
			if (tableIndex == 0) {
				let oIndex = $(this).index();
				publicObj.fnAjaxFloor("system/cesdevice/" + selectId, (d) => {
					let {
						data
					} = d;
					bIndex = oIndex;
					b = true;
					$(".popup_box .bum_text").text(data.code.substr(10));
					$(".popup_box .compName").text(data.compName);
					$(".popup_box .checkTime").text(data.checkTime);
					$(".popup_box .spanAbnormal").text(data.runStatus);
					$("#iconAbnormal").attr("class",
						`iconfont icon-${data.runStatus == "正常" ? "gouxuankuangxuanzhong" : "jurassic_warning"}`);
					$(".popup_box .floor").text(data.locationName);
					if (data.location) {
						moveTo(data.location);
					}
					$(".popup_box .replicator").text(data.person);
					$(".popup_box .telephone").text(data.tel);
					let maintenance = fnNewDate(6, data.wbDate);
					wbDate = data.wbDate;
					let td = "";
					for (let k in maintenance) {
						td += `<tr><td>${maintenance[k]}</td><td>${data.person}</td></tr>`;
					}
					$("#maintainer").html(td);
					$(".popup_box").removeClass("popup_box_active2").addClass("popup_box_active1");

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
					if (self.videoClose) {
						self.videoClose = false;
						$("#iframeBox").removeClass("iframeKeys");
					}
					if (data.camera) {
						self.videoSrc = data.camera;
						// $("#supervise").attr("data-id", data.camera);
						self.fnVideo(self.videoSrc);
						// let oIframe = window.parent.document.getElementById('oIframe');
						// oIframe.contentWindow.location.reload(true);
					} else {
						self.videoSrc = "";
					}
				});
			} else {
				self.videoSrc = "";
				let oIndex = $(this).index();
				bIndex = oIndex;
				b = true;
				let data = [{
						checkTime: "2021.11.18",
						code: "1200310108201602001",
						compName: "上海远运投资管理有限公司",
						deviceType: "电梯",
						id: 8,
						location: "协信商务",
						locationName: "供应五牛控股大厦和东贤大厦",
						runStatus: "正常",
						person: "陈海峰",
						tel: "13395188995",
						bum_text: 'WNS2.1-0.7/95/70-Q'
					},
					{
						checkTime: "2021.11.18",
						code: "12003101082016020004",
						compName: "上海远运投资管理有限公司",
						deviceType: "电梯",
						id: 8,
						location: "协信商务",
						locationName: "供应五牛控股大厦和东贤大厦",
						runStatus: "正常",
						person: "陈海峰",
						tel: "13395188995",
						bum_text: 'WNS2.1-0.7/95/70-Q'
					},
					{
						checkTime: "2021.11.8",
						code: "12003101082016020002",
						compName: "上海远运投资管理有限公司",
						deviceType: "电梯",
						id: 8,
						location: "协信商业广场",
						locationName: "供应五牛控股大厦和东贤大厦",
						runStatus: "正常",
						person: "傅铁成",
						tel: "13651806989",
						bum_text: 'WNS2.1-0.7/95/70-Q'
					},
					{
						checkTime: "2021.11.8",
						code: "12003101082016020003",
						compName: "上海远运投资管理有限公司",
						deviceType: "电梯",
						id: 8,
						location: "协信商业广场",
						locationName: "供应五牛控股大厦和东贤大厦",
						runStatus: "正常",
						person: "傅铁成",
						tel: "13651806989",
						bum_text: 'WNS2.1-0.7/95/70-Q'
					}
				]
				$(".popup_box .bum_text").text(data[oIndex].code.substr(10));
				$(".popup_box .compName").text(data[oIndex].compName);
				$(".popup_box .checkTime").text(data[oIndex].checkTime);
				$(".popup_box .spanAbnormal").text(data[oIndex].runStatus);
				$(".popup_box .person").text(data[oIndex].person);
				$(".popup_box .tel").text(data[oIndex].tel);
				$("#iconAbnormal").attr("class",
					`iconfont icon-${data[oIndex].runStatus == "正常" ? "gouxuankuangxuanzhong" : "jurassic_warning"}`);
				let maintenance = fnNewDate(6, wbDate);
				let td = "";
				for (let k in maintenance) {
					td += `<tr><td>${maintenance[k]}</td><td>${data[oIndex].person}</td></tr>`;
				}
				$("#maintainer").html(td);
				if (selectId) {
					moveTo("锅炉定位-" + selectId);
				}
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
			}
			oThis.addClass("activel").siblings().removeClass("activel");
		});
		$(".popup_box .close").click(function() {
			bIndex = $(this).index();
			b = false
			cIndex = null
			$(".popup_box").removeClass("popup_box_active1").addClass("popup_box_active2");
			$(".table_box .table>tbody>tr").removeClass("activel");
			$(".table .equipmentTbody").eq(tableIndex).find(".icon-weizhi").removeClass("activel");
		});
	},
	fnEquipmentTr(selectId) {
		if (selectId == "all") {
			let data = publicObj.selectAll,
				tr = "";
			for (let i = 0; i < data.length; i++) {
				let code = data[i].code.substr(10);
				tr +=
					`<tr data-id="${data[i].id}"><td><div class="normal_num">${i + 1}</div></td><td>${code}</td><td><span class="iconfont icon-weizhi"></span>${data[i].locationName}</td><td><span class="iconfont icon-${data[i].runStatus == "正常" ? "gouxuankuangxuanzhong" : "jurassic_warning"}"></span></td></tr>`;
			}
			$("#equipmentTbody").html(tr);
			$("#nHome").text(data.length + "家");
		} else {
			publicObj.fnAjaxFloor("system/cesdevice/" + selectId, (d) => {
				let {
					data
				} = d;
				let tr =
					`<tr data-id="${data.id}"><td><div class="normal_num">1</div></td><td>${data.code.substr(10)}</td><td><span class="iconfont icon-weizhi"></span>${data.locationName}</td><td><span class="iconfont icon-${data.runStatus == "正常" ? "gouxuankuangxuanzhong" : "jurassic_warning"}"></span></td></tr>`;
				$("#equipmentTbody").html(tr);
			});
			$("#nHome").text("1家");
		}
	},
	fnBoiler(str) {
		tableIndex = 1;
		$(".table_box .title>div").removeClass("activel").eq(1).addClass("activel");
		$(".table_box .table2").show();
		$(".table_box .table1").hide();
		$(".title_spr").hide();
		$("#boiler tr").each((index, item) => {
			if ($(item).data("id") == str) {
				$(item).show();
			} else {
				$(item).hide();
			}
		});
		if ($(".popup_box").hasClass("popup_box_active1")) {
			$(".popup_box").removeClass("popup_box_active1").addClass("popup_box_active2");
			$(".table_box .table>tbody>tr").removeClass("activel");
		}
		publicObj.fnAreaHtml('特种设备', 3);
	},
	fnVideo(str) {
		let video = this.elVideo;
		if (Hls.isSupported()) {
			this.elHls = new Hls();
			this.elHls.attachMedia(video);
			this.elHls.loadSource(str);
			this.elHls.on(Hls.Events.MANIFEST_PARSED, function() {
				video.play();
			});
			this.elHls.on(Hls.Events.ERROR, function() {
				publicObj.fnAlert("视频地址格式不正确", 3);
				self.videoClose = false;
				self.elHls.destroy();
				$("#iframeBox").removeClass("iframeKeys");
			});
		}
	},
	fnClick() {
		let self = this;
		$(".centerHtml").off("changed.bs.select").on('changed.bs.select', '#mySelect', () => {
			let selectId = $('#mySelect').selectpicker('val');
			if (tableIndex == "1") {
				let data = publicObj.selectAll,
					tr = "";
				if (selectId != "all") {
					data = publicObj.selectAll.filter((el) => el.id == selectId)
				}
				for (let i = 0; i < data.length; i++) {
					let code = data[i].code.substr(10);
					tr +=
						`<tr data-id="${data[i].id}"><td><div class="normal_num">${i + 1}</div></td><td>${code}</td><td><span class="iconfont icon-weizhi"></span>${data[i].location}</td><td><span class="iconfont icon-${data[i].runStatus == "正常" ? "gouxuankuangxuanzhong" : "jurassic_warning"}"></span></td></tr>`;
				}
				$("#boiler").html(tr);
			} else {
				this.fnEquipmentTr(selectId);
			}
		});
		$("#supervise").click(function() {
			self.videoClose = true;
			if (self.videoSrc) {
				!self.elHls.media && self.fnVideo(self.videoSrc);
				$("#iframeBox").addClass("iframeKeys");
			} else {
				publicObj.fnAlert("暂无视频", 3);
			}
		});
		$("#removeIcon").click(function() {
			self.elHls.media && self.elHls.destroy();
			self.videoClose = false;
			$("#iframeBox").removeClass("iframeKeys");
		});
	}
}
publicObj.specialEquipment.init();

function addDate(dd, dadd) {
	let a = new Date(dd)
	a = a.valueOf()
	a = a + dadd * 24 * 60 * 60 * 1000 * 15
	a = new Date(a);
	return a;
}

function fnNewDate(n, data) {
	let now = new Date();
	if (data) {
		now = new Date(data);
	}
	let dataTitle = [];
	for (i = 0; i < n; i++) {
		let month = (now.getMonth() + 1);
		dataTitle[i] = (now.getFullYear() + "-" + month + "-" + now.getDate());
		now = addDate(month + "/" + now.getDate() + "/" + now.getFullYear(), -1);
	}
	return dataTitle;
}
