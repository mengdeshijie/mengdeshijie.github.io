var variable = {};
var threeObj = {
  "ourls": "http://113.207.106.32:8092/model-map/2",
  "ourPdf": "/model-map/2",
  lightIamp: 3,
  directionalLightIamp: 0,
  outlinePass: { //鼠标移入模型边高亮
    edgeStrength: 5, //粗-高光边缘强度
    edgeGlow: 1, //发光-边缘微光强度
    edgeThickness: 1, //光晕粗-高光厚度
    pulsePeriod: 2, //闪烁-数值越大，律动越慢
    visibleEdgeColor: 0x00e4ff, // 设置显示的颜色-
    hiddenEdgeColor: 0x000000, // 设置阴影颜色
  },
  clickOutlinePass: { //鼠标选中模型边高亮
    edgeStrength: 4, //粗-高光边缘强度
    edgeGlow: 2, //发光-边缘微光强度
    edgeThickness: 2, //光晕粗-高光厚度
    pulsePeriod: 2, //闪烁-数值越大，律动越慢
    visibleEdgeColor: 'yellow', // 设置显示的颜色-
    hiddenEdgeColor: 'white', // 设置阴影颜色
  }
}
var basePath = '../model/gx1/';
var DISTANCE = 20,
  LINE_COLOR = 0xbaffff,
  MATERIAL_COLOR = 0x155c67,
  MATERIAL_COLOR2 = 0x004b57;

var floorArr = ['A001-A001', "C001-I001", "E001-A001", "E001-B001", "F001-A001", "F001-E001"]; //模块名称 'A001-A001', "C001-I001", "E001-A001", "E001-B001", "F001-A001", "F001-E001"

//全部
var modules = [].concat(floorArr, ["gx", "kjz001", "kjz002", "kjz003", "kjz004", "kjz005", "uv", "wjh", "dimian", "dian", "ico", "qy"]);

// var modules = [].concat(floorArr, ["gx", "dimian", "dian", "uv", "qy", "ico"]);
// var modules = ["gx", "dimian", "dian", "qy", "ico"];
//模型动画-电梯动态加载名称
var moduleMixer = ["A001A001Dianti", "A001B001Dianti", "A001C001Dianti"];
//不可交互对象名称集合，支持使用分组将子对象全部包含为不可交互
var nonInteractiveObjectNames = ["dian", "dimian", "qiao", "kjz001", "kjz002", "kjz003", "kjz004", "kjz005", "kjz006", "kjz007", "kjz008", "kjz009", "dsqy_q", "lr_q", "sbyzx_q", "xx_q", "ylf_q", "zbjjy_q", "zhy_q", "ztsdgc_q", "g001", "g002", "g003", "g004", "g005", "s001", "s002", "s003", "s004", "s005", "s006", "s007", "uv001", "uv002", "uv003", "uv004", "dsqy_k", "lr_k", "sbyzx_k", "xx_k", "zbjjy_k", "zhy_k", "ztsdgc_k", "A001-A001-Dianti01", "A001-A001-Dianti02", "A001-A001-Dianti03", "A001-A001-Dianti04", "A001-A001-Dianti05", "A001-A001-Dianti06", "A001-A001-Diantizhu01", "A001-B001-Dianti01", "A001-B001-Dianti02", "A001-B001-Dianti03", "A001-B001-diantizhu", "A001-C001-Dianti01", "A001-C001-Dianti02", "A001-C001-Dianti03", "A001-C001-Diantizhu"];

var nonInteractiveModulesNames = ['ico', 'qy']; //这里是模型模块名称
//和数据交互可以移动过去的("cy001","cy004",)位置已变更，代码创建 
var noIconMove = ["cy001", "cy004", "cy002", "cy003", "cy005", "cy006", "cy007", "cy008", "gl001", "gl002", "ty001", "ty002", "ty003", "ty004", "ty005"];
var iconPng = [].concat(noIconMove, ["4s001", "4s002", "4s003", "4s004", "4s005", "4s006", "4s007", "jyz001", "jyz002", "jyz003", "yd001", "yd002", "yd003", "yd004", "yd005", "yjd001", "yjd002", "zxc001", "zxc002", "zxc003", "zxc004"]);

var transparentTreatment = ["uv", "qy"]; //透明处理
//UV动画对象
var updaterArrOffset = [{
    name: ["zbjjy_q", "dsqy_q", "ylf_q", "lr_q", "zhy_q", "ztsdgc_q", "sbyzx_q", "xx_q"],
    offset: "y",
    value: 0.002,
    direction: "+"
  },
  {
    name: ["uv001", "uv003"],
    offset: "y",
    value: 0.005
  }, {
    name: ["uv002", "uv004", "g001", "g002", "g003", "g004", "g005", "s001", "s002", "s003",
      "s004", "s005", "s006", "s007"
    ],
    offset: "y",
    value: 0.001,
    direction: "+"
  }
]
//模型icon
let playIcon = [{
  name: "cy001",
  position: [32, 0.84, -78.92]
}, {
  name: "cy004",
  position: [38, 0.84, -78.29]
}, {
  name: "ty006",
  position: [40.66, 0.84, -78.29]
}, {
  name: "ty007",
  position: [32.27, 0.84, -78.92]
}, {
  name: "ty008",
  position: [-76.07, -1.12, 46.51]
}, {
  name: "ty009",
  position: [-127.05, -0.99, 77.67]
}, {
  name: "ty010",
  position: [-77.28, 0.55, 0.25]
}, {
  name: "ty011",
  position: [-7.61, -0.63, 0.95]
}, {
  name: "ty012",
  position: [112.19, 0.22, -30.15]
}, {
  name: "ty013",
  position: [141.81, -0.6, -25.72]
}, {
  name: "ty014",
  position: [-25.24, -1.74, 48.06]
}, {
  name: "ty015",
  position: [-110.35, 3.61, 62.18]
}, {
  name: "ty016",
  position: [-101.72, 1.1, 63]
}, {
  name: "ty017",
  position: [-96.68, 0.65, 49.31]
}, {
  name: "ty018",
  position: [69.78, 0.9, -3.4]
}];
var objName = {
  "C001-A001": "智汇园-A栋",
  "C001-B001": "智汇园-B栋",
  "C001-C001": "智汇园-C栋",
  "C001-D001": "智汇园-D栋",
  "C001-E001": "智汇园-E栋",
  "C001-F001": "智汇园-F栋",
  "C001-G001": "智汇园-G栋",
  "C001-H001": "智汇园-H栋",
  "C001-I001-F013": "智汇园-I栋",
  "B001-A001": "龙软-A栋",
  "B001-B001": "龙软-B栋",
  "B001-C001": "龙软-C栋",
  "B001-D001": "龙软-D栋",
  "A001-B001": "云立方B栋",
  "A001-C001": "云立方C栋",
  "A001-A001-Ding": "云立方-A栋",
  "D001-A001": "都市前沿-A栋",
  "D001-B001": "都市前沿-B栋",
  "D001-C001": "都市前沿-C栋",
  "D001-D001": "都市前沿-D栋",
  "E001-A001-Ding": "市北壹中心-A栋",
  "E001-B001-Ding": "市北壹中心-B栋",
  "E001-C001": "市北壹中心-C栋",
  "E001-D001": "市北壹中心-D栋",
  "E001-E001": "市北壹中心-E栋",
  "E001-F001": "市北壹中心-F栋",
  "E001-G001": "市北壹中心-G栋",
  "E001-H001": "市北壹中心-H栋",
  "E001-I001": "市北壹中心-I栋",
  "E001-J001": "市北壹中心-J栋",
  "E001-K001": "市北壹中心-K栋",
  "F001-A001-Ding": "总部经济园-A栋",
  "F001-B001": "总部经济园-B栋",
  "F001-C001": "总部经济园-C栋",
  "F001-D001": "总部经济园-D栋",
  "F001-E001-Ding": "总部经济园-E栋",
  "F001-F001": "总部经济园-F栋",
  "F001-G001": "总部经济园-G栋",
  "F001-H001": "总部经济园-H栋",
  "F001-I001": "总部经济园-I栋",
  "F001-J001": "总部经济园-J栋",
  "G001-A001": "协信-A栋",
  "G001-B001": "协信-B栋",
  "G001-C001": "协信-C栋",
  "G001-D001": "协信-D栋",
  "G001-E001": "协信-E栋",
  "G001-F001": "协信-F栋",
  "G001-G001": "协信-G栋",
  "G001-H001": "协信-H栋",
  "G001-I001": "协信-I栋",
  "G001-J001": "协信-J栋",
  "G001-K001": "协信-K栋",
  "G001-L001": "协信-L栋",
  "G001-M001": "协信-M栋",
  "H001-A001": "中铁中环-A栋",
  "H001-B001": "中铁中环-B栋"
}; //判断是否为可交互对象