(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65e20d7a"],{"0cb2":function(e,t,i){var a=i("7b0b"),o=Math.floor,s="".replace,l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,n=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,i,r,c,d){var u=i+e.length,m=r.length,p=n;return void 0!==c&&(c=a(c),p=l),s.call(d,p,(function(a,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(u);case"<":l=c[s.slice(1,-1)];break;default:var n=+s;if(0===n)return a;if(n>m){var d=o(n/10);return 0===d?a:d<=m?void 0===r[d-1]?s.charAt(1):r[d-1]+s.charAt(1):a}l=r[n-1]}return void 0===l?"":l}))}},"0ccb":function(e,t,i){var a=i("50c4"),o=i("577e"),s=i("1148"),l=i("1d80"),n=Math.ceil,r=function(e){return function(t,i,r){var c,d,u=o(l(t)),m=u.length,p=void 0===r?" ":o(r),v=a(i);return v<=m||""==p?u:(c=v-m,d=s.call(p,n(c/p.length)),d.length>c&&(d=d.slice(0,c)),e?u+d:d+u)}};e.exports={start:r(!1),end:r(!0)}},"107c":function(e,t,i){var a=i("d039");e.exports=a((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1148:function(e,t,i){"use strict";var a=i("a691"),o=i("577e"),s=i("1d80");e.exports=function(e){var t=o(s(this)),i="",l=a(e);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(i+=t);return i}},"12ef":function(e,t,i){},1330:function(e,t,i){"use strict";i("b12c")},"14c3":function(e,t,i){var a=i("c6b6"),o=i("9263");e.exports=function(e,t){var i=e.exec;if("function"===typeof i){var s=i.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},"197e":function(e,t,i){"use strict";i("5b77")},"1a4e":function(e,t,i){},2302:function(e,t,i){},3182:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAAXNSR0IArs4c6QAAAZ5QTFRFAAAAgICAVVVVqqqqgICAqqqqkpKSgICAn5+fjo6OmZmZi4uLoqKilZWVnZ2dkpKSj4+PnJyclJSUkpKSnp6el5eXlZWVk5OTl5eXlZWVmZmZlJSUnJycm5ubmJiYlJSUl5eXk5OTmZmZmpqal5eXlpaWnJycmJiYmpqam5ublZWVm5ubmJiYmpqamJiYmJiYmJiYl5eXmZmZl5eXl5eXmJiYl5eXl5eXl5eXmJiYmZmZl5eXmZmZmJiYmZmZmJiYl5eXmJiYmZmZl5eXmJiYmJiYmZmZmJiYmZmZmZmZmJiYmJiYmJiYmJiYmZmZmpqamZmZmZmZmJiYmZmZmJiYmZmZmJiYmJiYmpqamZmZmJiYmZmZmpqamZmZmJiYmZmZmJiYmZmZmJiYmJiYmZmZmJiYmZmZmZmZmJiYmZmZmJiYmZmZmJiYmZmZmJiYmZmZmJiYmZmZmZmZmZmZmJiYmZmZmZmZmZmZmJiYmZmZmJiYmZmZmJiYmZmZmZmZmZmZmZmZmJiYmZmZmZmZmJiYmZmZmZmZmZmZmJiYmZmZ7q+Y+QAAAIh0Uk5TAAIDAwQGBwgICQoLCwwNDhASExUVFhgaGx0eHx8hJSYsLS0wMTM2OTo9QUJDSUpSVFZaYGJjZWdpb3Bxc3d4eXuDhIWKi5GUlpianJ+kpaanqqusr6+ys7W3ubm6u73AwsPExsrLz9DT1tjZ2tvc3N3g4+Xm5urr7O3u7/Hx9Pb3+Pj5+/v8/gqzWPMAAAFTSURBVBgZzcH5I5NxAAfgz1ZIzma5Qo4UmbkVZnKMWWS5QqxEbppbWdo0r/fzX3u/e23vd0d+zfPgP0krspjxbwWOb6ckr35M2M1IpfR9iDyacw+6Z3bpf2tCEkeQfzwvoasaDn19gniPJklfKQzln9ayIDPNkgsPEad3BDIneZyHBK4aGJ7/JduQyPQCho9kIAN3KVTIJchef9jyf5/qby3GrTckPZDUX1MXHoFunOQYJB2MaUTEKkkfJJbf1KjUfEHEHslQDiSdJFUK12UQdqh5B9kQVeq6ISxTc1ENmUulbh6Cm8LBMxjSP1NQyZ8QWhhx2oyo2g3GFEPz+Iy6xSYrgGzbWJiGVxD6GLO/sq0waj1AsgFC5iFTUSqfjiqsQ4RNYQpOABXefOh6mMyLeL1M5H2ABPYTyoJdSJY7cM6oS08JUspsn9j8pQT80w4r7qsbzDu7cXH5i6cAAAAASUVORK5CYII="},4058:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"uploadVideo"+e.condition},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"","on-change":e.handleChange,action:e.actionUrl,"before-upload":e.beforeUploadVideo,"on-remove":e.handleRemove,"auto-upload":!1,"show-file-list":!1,accept:".mp4, .qlv, .qsv, .ogg, .ogv, .flv, .avi, .wmv, .rmvb"}},[""!=e.showVideoPath||e.videoFlag?e.showVideoPath&&e.videoFlag?a("video",{staticClass:"video",attrs:{src:e.showVideoPath,controls:"controls"}},[e._v("您的浏览器不支持视频播放")]):a("el-progress",{attrs:{type:"circle",percentage:e.videoUploadPercent}}):a("div",{staticClass:"plus_tips"},[1==e.condition?[a("img",{attrs:{src:i("b6cc")}}),a("div",{staticClass:"el-upload__text"},[a("span",[e._v("上传视频")]),e._v("或者拖拽到此处")])]:[a("div",{staticClass:"fac icon_plus"},[a("span",[e._v("+")])]),a("span",[e._v("本地上传")])]],2)],1),e.showVideoPath?a("span",{staticClass:"iconClose",on:{click:e.handleRemove}},[a("i",{staticClass:"el-icon-close"})]):e._e()],1)},o=[],s=(i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),{name:"uploadVideo",props:["condition","queryId"],data:function(){return{actionUrl:"https://api.baiwanqilin.com/qilin-media/v1/videoSave",duration:0,videoFlag:!1,videoUploadPercent:0,showVideoPath:"",paramsdata:{area:"string",isExclusive:0,prices:1,type:1,videoAlId:"",videoCompilationsId:0,videoDescribe:"上传视频",videoEditingId:"",videoEditingImg:"string",videoImg:"string",videoLabelOne:"",videoLabelTwo:"",videoTitle:"视频"}}},methods:{beforeUploadVideo:function(e){console.log(e);var t=e.size/1024/1024<2e3;if(!t)return this.$message.error("上传视频大小不能超过2000MB哦!"),!1},handleChange:function(e){var t=this;console.log(e);var i=URL.createObjectURL(e.raw),a=new Audio(i);a.addEventListener("loadedmetadata",(function(){var o=Math.round(100*a.duration)/100,s=t.queryId;o>15||1==s&&o<=15&&o>=8||2==s&&o<8?t.$message("视频超出限制"):(t.$emit("duration",{duration:o,url:i}),t.$store.commit("videoFile",e),t.showVideoPath=i,t.videoFlag=!0,t.duration=o)}))},handleRemove:function(){this.showVideoPath="",this.videoFlag="",this.$emit("duration",0)},uploadVideoProcess:function(e,t,i){this.videoFlag=!0,this.videoUploadPercent=parseInt(t.percentage),console.log(this.videoUploadPercent,i)},handleVideoSuccess:function(e,t,i){this.videoFlag=!1,this.videoUploadPercent=0,this.Video=e.data[0],console.log(e,t,this.Video,i)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0,console.log(e.url)},handleVideoError:function(e,t,i){var a=this;console.log(e,t,i),setTimeout((function(){a.videoFlag=!1,a.videoUploadPercent=0,a.$message.error("token没有通过验证")}),2e3)}}}),l=s,n=(i("5372"),i("915a"),i("2877")),r=Object(n["a"])(l,a,o,!1,null,"24968723",null);t["a"]=r.exports},"408a":function(e,t,i){var a=i("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=a(e))throw TypeError("Incorrect invocation");return+e}},"4d90":function(e,t,i){"use strict";var a=i("23e7"),o=i("0ccb").start,s=i("9a0c");a({target:"String",proto:!0,forced:s},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5077:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload2"},[i("div",{staticClass:"flex"},[e.dialogImageUrl?i("div",{staticClass:"uploadImg flex"},[i("img",{attrs:{src:e.dialogImageUrl}}),i("div",{staticClass:"icon fcc"},[i("span",{staticClass:"zoom",on:{click:e.isDialogVisible}},[i("i",{staticClass:"el-icon-zoom-in"})]),i("span",{staticClass:"delete",on:{click:e.handleRemove}},[i("i",{staticClass:"el-icon-delete"})])])]):e._e(),e.fileList.length?e._l(e.fileList,(function(t,a){return i("div",{key:a,staticClass:"uploadImg flex"},[i("el-image",{attrs:{src:t.url}},[i("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[e._v(" 加载中 "),i("span",{staticClass:"dot"},[e._v("...")])])]),i("div",{staticClass:"icon fcc"},[i("span",{staticClass:"zoom",on:{click:function(i){return e.isDialogVisible(t.url)}}},[i("i",{staticClass:"el-icon-zoom-in"})]),i("span",{staticClass:"delete",on:{click:function(t){return e.handleRemoveAll(a,e.fileList)}}},[i("i",{staticClass:"el-icon-delete"})])])],1)})):e._e(),i("el-upload",{attrs:{action:"#","list-type":"picture-card","auto-upload":!1,"show-file-list":!1,"on-preview":e.handlePictureCardPreview,"on-change":e.handleChange,"on-remove":e.handleRemove,accept:".png, .jpg",multiple:e.multiple,limit:e.limit,"on-exceed":e.handleExceed,"file-list":e.fileList}},[i("div",{staticClass:"plus_tips"},[i("div",{staticClass:"icon_plus fac jc"},[i("span",[e._v("+")])]),i("span",[e._v("本地上传")])])])],2),i("el-dialog",{staticClass:"imgDialog",attrs:{visible:e.dialogVisible,top:"15px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.limit>1?e.dialogListImageUrl:e.dialogImageUrl}})])],1)},o=[],s=(i("a9e3"),i("b0c0"),i("a434"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("99af"),{name:"upload2",props:{multiple:{type:Boolean,default:!1},limit:{type:Number,default:1},filesList:Array},data:function(){return{disabled:!1,dialogImageUrl:"",dialogListImageUrl:"",dialogVisible:!1,fileList:[]}},methods:{handleRemove:function(){this.fileList=[],this.dialogImageUrl="",this.$emit("dialogImage","")},handleRemoveAll:function(e,t){var i=t[e],a=i.url,o=i.name;t.splice(e,1),this.$emit("dialogImage",this.fileList,o?"":a)},handleChange:function(e,t){if(this.limit>1)console.log(t),this.fileList=t,this.$emit("dialogImage",t);else{var i=URL.createObjectURL(e.raw);this.isImg(i)}},handlePictureCardPreview:function(e){console.log(e),this.isImg(e.url)},isImg:function(e){this.dialogImageUrl=e,this.$emit("dialogImage",e)},getFileList:function(){return this.fileList},isDialogVisible:function(e){"string"==typeof e&&(this.dialogListImageUrl=e),this.dialogVisible=!0},handleExceed:function(e,t){this.$message.warning("当前限制选择 ".concat(this.limit," 个文件，本次选择了 ").concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))}},created:function(){this.filesList&&this.filesList.length&&(this.fileList=this.filesList)},computed:{createObjectURL:function(){return function(e){return URL.createObjectURL(e)}}}}),l=s,n=(i("bf23"),i("db87"),i("2877")),r=Object(n["a"])(l,a,o,!1,null,"0c739ec6",null);t["a"]=r.exports},5319:function(e,t,i){"use strict";var a=i("d784"),o=i("d039"),s=i("825a"),l=i("a691"),n=i("50c4"),r=i("577e"),c=i("1d80"),d=i("8aa5"),u=i("0cb2"),m=i("14c3"),p=i("b622"),v=p("replace"),f=Math.max,g=Math.min,h=function(e){return void 0===e?e:String(e)},b=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),I=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));a("replace",(function(e,t,i){var a=A?"$":"$0";return[function(e,i){var a=c(this),o=void 0==e?void 0:e[v];return void 0!==o?o.call(e,a,i):t.call(r(a),e,i)},function(e,o){var c=s(this),p=r(e);if("string"===typeof o&&-1===o.indexOf(a)&&-1===o.indexOf("$<")){var v=i(t,c,p,o);if(v.done)return v.value}var b="function"===typeof o;b||(o=r(o));var A=c.global;if(A){var I=c.unicode;c.lastIndex=0}var Z=[];while(1){var x=m(c,p);if(null===x)break;if(Z.push(x),!A)break;var C=r(x[0]);""===C&&(c.lastIndex=d(p,n(c.lastIndex),I))}for(var y="",E=0,U=0;U<Z.length;U++){x=Z[U];for(var w=r(x[0]),D=f(g(l(x.index),p.length),0),J=[],Y=1;Y<x.length;Y++)J.push(h(x[Y]));var k=x.groups;if(b){var F=[w].concat(J,D,p);void 0!==k&&F.push(k);var V=r(o.apply(void 0,F))}else V=u(w,p,D,J,k,o);D>=E&&(y+=p.slice(E,D)+V,E=D+w.length)}return y+p.slice(E)}]}),!I||!b||A)},5372:function(e,t,i){"use strict";i("2302")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var a=i("1d80"),o=i("577e"),s=i("5899"),l="["+s+"]",n=RegExp("^"+l+l+"*"),r=RegExp(l+l+"*$"),c=function(e){return function(t){var i=o(a(t));return 1&e&&(i=i.replace(n,"")),2&e&&(i=i.replace(r,"")),i}};e.exports={start:c(1),end:c(2),trim:c(3)}},"5b77":function(e,t,i){},"6ba4":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"postVideo"},[a("VideoTitle",{attrs:{title:"发布视频"}}),a("div",{staticClass:"p40"},[a("div",{staticClass:"postVideo_top fsb"},[a("div",{staticClass:"postVideo_top_w"},[a("span",{staticClass:"text"},[e._v(e._s(2==e.queryId?"完整版视频":"免费小知识"))]),a("video",{ref:"videoPlay",attrs:{controls:"",poster:"https://video.baiwanqilin.com/image/cover/7D14EE5AB0774EE5B3377F010DE56463-6-2.png",src:e.videoUrl}},[e._v(" 抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 "),a("a",{attrs:{href:e.videoUrl}},[e._v("下载")]),e._v(" 并用你喜欢的播放器观看! ")]),a("div",{staticClass:"fsb tips replace"},[a("div",{on:{click:function(t){return e.videoDivision("更换视频")}}},[a("img",{attrs:{src:i("3182")}}),a("span",[e._v("更换视频")])])])]),2==e.queryId?a("div",{staticClass:"postVideo_top_w"},[a("span",{staticClass:"text"},[e._v("高光时刻")]),a("video",{ref:"videoPlay",attrs:{controls:"",poster:i("e632"),src:"http://www.baoxiniao.com.cn/video/oceans-clip.mp4"}},[e._v(" 抱歉，您的浏览器不支持内嵌视频，不过不用担心，你可以 "),a("a",{attrs:{href:"http://www.baoxiniao.com.cn/video/oceans-clip.mp4"}},[e._v("下载")]),e._v(" 高光简介规则 ")]),a("div",{staticClass:"fsb tips"},[a("div",{on:{click:e.editVideo}},[a("img",{attrs:{src:i("6daa")}}),a("span",[e._v("截取高光")])]),a("div",{on:{click:function(t){return e.videoDivision("上传高光")}}},[a("img",{attrs:{src:i("3182")}}),a("span",[e._v("上传高光")])])])]):e._e()]),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[a("div",{staticClass:"cover"},[a("div",{staticClass:"cover_left"},[a("span",{staticClass:"text"},[e._v("视频封面")]),a("UploadImg",{on:{dialogImage:e.dialogImage}})],1),a("el-form-item",{staticClass:"videoImg",attrs:{prop:"videoImg"}},[a("el-input",{model:{value:e.ruleForm.videoImg,callback:function(t){e.$set(e.ruleForm,"videoImg",t)},expression:"ruleForm.videoImg"}})],1)],1),a("el-form-item",{staticClass:"video_title",attrs:{prop:"videoTitle"}},[a("span",{staticClass:"text"},[e._v("视频标题")]),a("el-input",{attrs:{placeholder:"视频标题",maxlength:"20","show-word-limit":""},model:{value:e.ruleForm.videoTitle,callback:function(t){e.$set(e.ruleForm,"videoTitle",t)},expression:"ruleForm.videoTitle"}})],1),a("el-form-item",{staticClass:"video_title",attrs:{prop:"videoDescribe"}},[a("span",{staticClass:"text"},[e._v("视频简介")]),a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"填写你的视频简介",maxlength:"120","show-word-limit":""},model:{value:e.ruleForm.videoDescribe,callback:function(t){e.$set(e.ruleForm,"videoDescribe",t)},expression:"ruleForm.videoDescribe"}})],1),a("el-form-item",{staticClass:"video_title",attrs:{prop:"videoLabelOne"}},[a("span",{staticClass:"text"},[e._v("添加标签")]),a("div",{staticClass:"fsb"},[a("el-input",{attrs:{placeholder:"你可以输入标签，添加更多标签请点击右侧添加标签"},model:{value:e.ruleForm.videoLabelOne,callback:function(t){e.$set(e.ruleForm,"videoLabelOne",t)},expression:"ruleForm.videoLabelOne"}}),a("el-button",{staticClass:"el_btn"},[e._v("添加标签")])],1),a("div",{staticClass:"recommend_label"},[a("span",[e._v("推荐标签")]),a("ul",{staticClass:"flex wrap ul"},e._l(e.recommendData,(function(t,i){return a("li",{key:i},[a("span",[e._v(e._s(t))])])})),0)])]),a("el-form-item",{staticClass:"video_title",attrs:{prop:"videoCompilationsId"}},[a("span",{staticClass:"text"},[e._v("选择合集")]),a("div",{staticClass:"fsb"},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.videoCompilationsId,callback:function(t){e.$set(e.ruleForm,"videoCompilationsId",t)},expression:"ruleForm.videoCompilationsId"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{staticClass:"el_btn"},[e._v("新建合集")])],1)]),a("el-form-item",{staticClass:"video_title",attrs:{prop:"prices"}},[a("div",{staticClass:"fac pb"},[a("span",{staticClass:"text"},[e._v("选择价格")]),a("img",{staticClass:"icon_img",attrs:{src:i("b6af")}})]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.prices,callback:function(t){e.$set(e.ruleForm,"prices",t)},expression:"ruleForm.prices"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"video_title"},[a("span",{staticClass:"text"},[e._v("视频类型")]),a("div",{staticClass:"fac tips"},[a("div",{staticClass:"tip fac pm",class:{active:!e.activeIndex},on:{click:function(t){return e.tipClick(0)}}},[a("div",{staticClass:"img"}),a("span",[e._v("独家视频")]),a("img",{staticClass:"icon_img",attrs:{src:i("b6af")}})]),a("div",{staticClass:"tip fac",class:{active:e.activeIndex},on:{click:function(t){return e.tipClick(1)}}},[a("div",{staticClass:"img"}),a("span",[e._v("非独家视频")]),a("img",{staticClass:"icon_img",attrs:{src:i("b6af")}})])])])],1),a("el-button",{staticClass:"post_video",on:{click:e.postVideo}},[e._v("发布视频")])],1),e.isUploadAuth?a("UploadAuth"):e._e(),e.videoDialogObj.dialogVisible?a("Dialog",{attrs:{videoDialogObj:e.videoDialogObj},on:{dialogClose:e.dialogClose}},[a("div",{staticClass:"dialog_body"},[a("br"),a("UploadVideo",{attrs:{condition:"1",queryId:e.queryId},on:{duration:e.duration}})],1)]):e._e()],1)},o=[],s=(i("4d90"),i("ac1f"),i("5319"),i("b680"),i("83b2")),l=i("5077"),n=i("0ff2"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"input-control"},[i("label",{attrs:{for:"timeout"}},[e._v("请求过期时间（构造参数 timeout, 默认 60000）:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.timeout,expression:"timeout"}],attrs:{type:"text",id:"timeout",placeholder:"输入过期时间, 单位毫秒"},domProps:{value:e.timeout},on:{input:function(t){t.target.composing||(e.timeout=t.target.value)}}})]),i("div",{staticClass:"input-control"},[i("label",{attrs:{for:"retryCount"}},[e._v("网络失败重试次数（构造参数 retryCount, 默认 3）:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.retryCount,expression:"retryCount"}],staticClass:"form-control",attrs:{type:"text",id:"retryCount",placeholder:"输入网络失败重试次数, 默认为3"},domProps:{value:e.retryCount},on:{input:function(t){t.target.composing||(e.retryCount=t.target.value)}}})]),i("div",{staticClass:"input-control"},[i("label",{attrs:{for:"retryDuration"}},[e._v("网络失败重试间隔（构造参数 retryDuration, 默认 2）:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.retryDuration,expression:"retryDuration"}],staticClass:"form-control",attrs:{type:"text",id:"retryDuration",placeholder:"输入网络失败重试间隔, 默认2秒"},domProps:{value:e.retryDuration},on:{input:function(t){t.target.composing||(e.retryDuration=t.target.value)}}})]),i("div",{staticClass:"upload"},[i("div",[i("input",{attrs:{type:"file",id:"fileUpload"},on:{change:function(t){return e.fileChange(t)}}}),i("label",{staticClass:"status"},[e._v(" 上传状态: "),i("span",[e._v(e._s(e.statusText))])])]),i("div",{staticClass:"upload-type"},[e._v(" 上传方式一, 使用 UploadAuth 上传: "),i("button",{attrs:{disabled:e.uploadDisabled},on:{click:e.authUpload}},[e._v("开始上传")]),i("button",{attrs:{disabled:e.pauseDisabled},on:{click:e.pauseUpload}},[e._v("暂停")]),i("button",{attrs:{disabled:e.resumeDisabled},on:{click:e.resumeUpload}},[e._v("恢复上传")]),i("span",{staticClass:"progress"},[e._v(" 上传进度: "),i("i",{attrs:{id:"auth-progress"}},[e._v(e._s(e.authProgress))]),e._v(" % ")])])])])},c=[],d=(i("b0c0"),i("bc3a")),u=i.n(d),m={data:function(){return{timeout:"",parallel:"",retryCount:"",retryDuration:"",region:"cn-shanghai",userId:"",file:null,authProgress:0,uploadDisabled:!0,resumeDisabled:!0,pauseDisabled:!0,uploader:null,statusText:"",ruleForm:{area:"",isExclusive:0,prices:1,type:1,videoAlId:"",videoCompilationsId:"123",videoDescribe:"视频描述",videoEditingId:"",videoEditingImg:"",videoImg:"",videoLabelOne:"视频标签一",videoLabelTwo:"",videoTitle:"视频标题"}}},created:function(){var e=this.$store.getters,t=e.videoFile,i=e.userData;this.videoFile=t,this.userData=i.userId,this.fileChange()},methods:{fileChange:function(e){if(this.file=e?e.target.files[0]:this.videoFile,this.file){var t='{"Vod":{}}';this.uploader&&(this.uploader.stopUpload(),this.authProgress=0,this.statusText=""),this.uploader=this.createUploader(),console.log(t,this.file,this.videoFile),this.uploader.addFile(this.file,null,null,null,t),this.uploadDisabled=!1,this.pauseDisabled=!0,this.resumeDisabled=!0}else alert("请先选择需要上传的文件!")},authUpload:function(){null!==this.uploader&&(this.uploader.startUpload(),this.uploadDisabled=!0,this.pauseDisabled=!1)},pauseUpload:function(){null!==this.uploader&&(this.uploader.stopUpload(),this.resumeDisabled=!1,this.pauseDisabled=!0)},resumeUpload:function(){null!==this.uploader&&(this.uploader.startUpload(),this.resumeDisabled=!0,this.pauseDisabled=!1)},createUploader:function(){var e=this,t=new AliyunUpload.Vod({timeout:e.timeout||6e4,partSize:1048576,parallel:5,retryCount:e.retryCount||3,retryDuration:e.retryDuration||2,region:e.region,userId:e.userId,addFileSuccess:function(t){e.uploadDisabled=!1,e.resumeDisabled=!1,e.statusText="添加文件成功, 等待上传...",console.log("addFileSuccess: "+t.file.name)},onUploadstarted:function(i){if(Object(n["n"])(this.ruleForm).then((function(e){console.log(e)})),i.videoId){var a="https://demo-vod.cn-shanghai.aliyuncs.com/voddemo/RefreshUploadVideo?BusinessType=vodai&TerminalType=pc&DeviceModel=iPhone9,2&UUID=59ECA-4193-4695-94DD-7E1247288&AppVersion=1.0.0&Title=haha1&FileName=xxx.mp4&VideoId="+i.videoId;u.a.get(a).then((function(e){var a=e.data,o=a.UploadAuth,s=a.UploadAddress,l=a.VideoId;t.setUploadAuthAndAddress(i,o,s,l)}))}else{var o="https://demo-vod.cn-shanghai.aliyuncs.com/voddemo/CreateUploadVideo?Title=testvod1&FileName=aa.mp4&BusinessType=vodai&TerminalType=pc&DeviceModel=iPhone9,2&UUID=59ECA-4193-4695-94DD-7E1247288&AppVersion=1.0.0&VideoId=5bfcc7864fc14b96972842172207c9e6";u.a.get(o).then((function(e){var a=e.data,o=a.UploadAuth,s=a.UploadAddress,l=a.VideoId;t.setUploadAuthAndAddress(i,o,s,l)})),e.statusText="文件开始上传...",console.log("onUploadStarted:"+i.file.name+", endpoint:"+i.endpoint+", bucket:"+i.bucket+", object:"+i.object)}},onUploadSucceed:function(t){console.log("onUploadSucceed: "+t.file.name+", endpoint:"+t.endpoint+", bucket:"+t.bucket+", object:"+t.object),e.statusText="文件上传成功!"},onUploadFailed:function(t,i,a){console.log("onUploadFailed: file:"+t.file.name+",code:"+i+", message:"+a),e.statusText="文件上传失败!"},onUploadCanceled:function(t,i,a){console.log("Canceled file: "+t.file.name+", code: "+i+", message:"+a),e.statusText="文件已暂停上传"},onUploadProgress:function(t,i,a){console.log("onUploadProgress:file:"+t.file.name+", fileSize:"+i+", percent:"+Math.ceil(100*a)+"%");var o=Math.ceil(100*a);e.authProgress=o,e.statusText="文件上传中..."},onUploadTokenExpired:function(i){var a="https://demo-vod.cn-shanghai.aliyuncs.com/voddemo/RefreshUploadVideo?BusinessType=vodai&TerminalType=pc&DeviceModel=iPhone9,2&UUID=59ECA-4193-4695-94DD-7E1247288&AppVersion=1.0.0&Title=haha1&FileName=xxx.mp4&VideoId="+i.videoId;u.a.get(a).then((function(e){var i=e.data,a=i.UploadAuth;t.resumeUploadWithAuth(a),console.log("upload expired and resume upload with uploadauth "+a)})),e.statusText="文件超时..."},onUploadEnd:function(t){console.log("onUploadEnd: uploaded all the files"),e.statusText="文件上传完毕"}});return t}}},p=m,v=i("2877"),f=Object(v["a"])(p,r,c,!1,null,null,null),g=f.exports,h=i("4058"),b=i("9033"),A={name:"postVideo",data:function(){return{objVideo:{mediaType:"video",mediaId:"1509593c9c2e4c7898d91c87d4338fa8",url:"https://ice-pub-media.myalicdn.com/vod-demo/%E7%A9%BA%E4%B8%AD%E9%A3%9E%E8%B6%8A-%E5%86%85%E9%83%A8%E7%89%88%E6%9D%83.mp4",video:{title:"空中飞越-内部版权.mp4",coverUrl:"https://img.alicdn.com/imgextra/i4/O1CN01tKt3Tp21ymVVNTApM_!!6000000007054-0-tps-1920-1080.jpg",duration:30,sprites:["https://img.alicdn.com/imgextra/i4/O1CN01BZyX641oqSInj7g1G_!!6000000005276-0-tps-1210-680.jpg"],spriteConfig:{num:"32",lines:"10",cols:"10"}}},ruleForm:{area:"",isExclusive:0,prices:1,type:1,videoAlId:"",videoCompilationsId:"123",videoDescribe:"视频描述",videoEditingId:"",videoEditingImg:"",videoImg:"",videoLabelOne:"视频标签一",videoLabelTwo:"",videoTitle:"视频标题"},activeIndex:0,videoDialogObj:{dialogVisible:!1,title:"裁取高光"},recommendData:["添加标签","都不啊短短的古"],options:[],queryId:"",videoUrl:"",isUploadAuth:!1,rules:{videoTitle:[{required:!0,message:"请输入视频标题",trigger:"blur"}],videoDescribe:[{required:!0,message:"请输入视频简介",trigger:"blur"}],videoLabelOne:[{required:!0,message:"请输入视频标签",trigger:"blur"}],videoCompilationsId:[{required:!0,message:"请选择合集",trigger:"change"}],prices:[{required:!0,message:"请选择价格",trigger:"change"}],isExclusive:[{required:!0,message:"请选择类型",trigger:"change"}],videoImg:[{required:!0,message:"请上传视频封面"}]}}},methods:{tipClick:function(e){this.activeIndex=e},postVideo:function(){var e=this;this.$refs["ruleForm"].validate((function(t){Object(n["n"])(e.ruleForm).then((function(e){console.log(e)})),console.log(t)}))},dialogImage:function(e){this.ruleForm.videoImg=e},formatTooltip:function(e){if(e)return this.handleSliderValue(e)},handleSliderValue:function(e){return e.toFixed(2).replace(".",":").padStart(5,0)},videoDivision:function(e){this.videoDialogObj.title=e,this.videoDialogObj.dialogVisible=!0},editVideo:function(){this.$router.push({name:"editVideo",query:this.objVideo})},duration:function(e){e.duration;var t=e.url;this.videoUrl=t},dialogClose:function(){this.videoDialogObj.dialogVisible=!1}},components:{VideoTitle:s["a"],UploadImg:l["a"],UploadAuth:g,Dialog:b["a"],UploadVideo:h["a"]},created:function(){var e=this.$route.query,t=e.id,i=e.fileRaw;this.queryId=t,this.videoUrl=i,this.ruleForm.videoImg=i;var a=this.$store.getters,o=a.userData,s=a.videoFile;console.log(s),Object(n["a"])(o.userId).then((function(e){return console.log(e)}))}},I=A,Z=(i("daec"),i("1330"),Object(v["a"])(I,a,o,!1,null,"7a8c4c7a",null));t["default"]=Z.exports},"6d98":function(e,t,i){},"6daa":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAAXNSR0IArs4c6QAAANhQTFRFAAAAgICAlZWVj4+PlZWVl5eXkpKSnJycl5eXlpaWmZmZmpqal5eXlZWVmpqamJiYl5eXnJycmZmZmpqal5eXlpaWmJiYl5eXlpaWl5eXmZmZl5eXmZmZmJiYmpqamJiYmZmZmZmZmZmZmJiYmpqamZmZmJiYmJiYmZmZmZmZmpqamZmZmZmZmJiYmpqamJiYmZmZmZmZmJiYmpqamZmZmJiYmJiYmZmZmZmZmJiYmJiYmZmZmZmZmJiYmZmZmZmZmJiYmJiYmZmZmZmZmJiYmZmZmJiYmZmZI+FFHAAAAEd0Uk5TAAQMEBgbHB8gJygrLDAwNDs7PD9AREhMUFtfYGdob3d4e3+Dg4eLj4+Tl6Onq6uzt7u/v8PHy8vP09fX29/f4+fr6+/z9/uU9EPvAAABbklEQVQ4y73SWVfiQBCG4Q+JQlB0VFwQZ1xYhhHFXaOR2MZO3v//j+aiDSQQvfJYV6nq55x0V5X0fdFfKil6R/mMu0WzHN4WyKLxDQWSLBjfwGW+EACBNyfo50kPIPSKgq08qacF40RQvNwZAGEtJ9grkmoEgPElbcYAjOe7sGYBOJM23Ve42KktC1xU5Dth6iX9brxwUcnuEdZLB1U9noqr6qfj9E1ym8B55QtBU2sEXworKX6olR3+DSY3fQP0aicA8PYwWM2JbkpZpN3Zzs2qNrqL3mdpNusmEPc6AwtJXZKXgB12TmPglyMjMCuSGha6krqQrEvyXuHckQn8yX74KOkehpKk3xBni0tLktSBSFIEHUlSC3DEwIEk6cSt0SOcSpLa8O7I+GPynoF/koYQe5KWnuDKkR3gub19OIG0KamRwuvhdvsJ2Nf0SR/Rmy07MH2QVMnMYK6Xo9w8dy8t8bg1zTdGBnu9r5+N/3vTYWUzevY+AAAAAElFTkSuQmCC"},7156:function(e,t,i){var a=i("861d"),o=i("d2bb");e.exports=function(e,t,i){var s,l;return o&&"function"==typeof(s=t.constructor)&&s!==i&&a(l=s.prototype)&&l!==i.prototype&&o(e,l),e}},"83b2":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"fsb video_titles"},[i("span",{staticClass:"title_left"},[e._v(e._s(e.title))]),e._t("default")],2)},o=[],s={name:"videoTitles",props:["title"]},l=s,n=(i("197e"),i("2877")),r=Object(n["a"])(l,a,o,!1,null,"3eee2394",null);t["a"]=r.exports},"8aa5":function(e,t,i){"use strict";var a=i("6547").charAt;e.exports=function(e,t,i){return t+(i?a(e,t).length:1)}},9033:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{width:e.videoDialogObj.wdith?e.videoDialogObj.wdith:"50%",title:e.videoDialogObj.title,visible:e.videoDialogObj.dialogVisible,"close-on-click-modal":!1,"show-close":!1,top:"5vh"},on:{"update:visible":function(t){return e.$set(e.videoDialogObj,"dialogVisible",t)}}},[e._t("default"),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),i("el-button",{staticClass:"determine",on:{click:function(t){return e.handleClose("determine")}}},[e._v("确 定")])],1)],2)},o=[],s={name:"dialogs",props:{videoDialogObj:Object},methods:{handleClose:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$emit("dialogClose",e)}}},l=s,n=(i("97b3"),i("2877")),r=Object(n["a"])(l,a,o,!1,null,null,null);t["a"]=r.exports},"915a":function(e,t,i){"use strict";i("1a4e")},9263:function(e,t,i){"use strict";var a=i("577e"),o=i("ad6d"),s=i("9f7f"),l=i("5692"),n=i("7c73"),r=i("69f3").get,c=i("fce3"),d=i("107c"),u=RegExp.prototype.exec,m=l("native-string-replace",String.prototype.replace),p=u,v=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),f=s.UNSUPPORTED_Y||s.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],h=v||g||f||c||d;h&&(p=function(e){var t,i,s,l,c,d,h,b=this,A=r(b),I=a(e),Z=A.raw;if(Z)return Z.lastIndex=b.lastIndex,t=p.call(Z,I),b.lastIndex=Z.lastIndex,t;var x=A.groups,C=f&&b.sticky,y=o.call(b),E=b.source,U=0,w=I;if(C&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),w=I.slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==I.charAt(b.lastIndex-1))&&(E="(?: "+E+")",w=" "+w,U++),i=new RegExp("^(?:"+E+")",y)),g&&(i=new RegExp("^"+E+"$(?!\\s)",y)),v&&(s=b.lastIndex),l=u.call(C?i:b,w),C?l?(l.input=l.input.slice(U),l[0]=l[0].slice(U),l.index=b.lastIndex,b.lastIndex+=l[0].length):b.lastIndex=0:v&&l&&(b.lastIndex=b.global?l.index+l[0].length:s),g&&l&&l.length>1&&m.call(l[0],i,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(l[c]=void 0)})),l&&x)for(l.groups=d=n(null),c=0;c<x.length;c++)h=x[c],d[h[0]]=l[h[1]];return l}),e.exports=p},"97b3":function(e,t,i){"use strict";i("b7b0")},"9a0c":function(e,t,i){var a=i("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(a)},"9f7f":function(e,t,i){var a=i("d039"),o=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=a((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,i){"use strict";var a=i("23e7"),o=i("23cb"),s=i("a691"),l=i("50c4"),n=i("7b0b"),r=i("65f0"),c=i("8418"),d=i("1dde"),u=d("splice"),m=Math.max,p=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var i,a,d,u,g,h,b=n(this),A=l(b.length),I=o(e,A),Z=arguments.length;if(0===Z?i=a=0:1===Z?(i=0,a=A-I):(i=Z-2,a=p(m(s(t),0),A-I)),A+i-a>v)throw TypeError(f);for(d=r(b,a),u=0;u<a;u++)g=I+u,g in b&&c(d,u,b[g]);if(d.length=a,i<a){for(u=I;u<A-a;u++)g=u+a,h=u+i,g in b?b[h]=b[g]:delete b[h];for(u=A;u>A-a+i;u--)delete b[u-1]}else if(i>a)for(u=A-a;u>I;u--)g=u+a-1,h=u+i-1,g in b?b[h]=b[g]:delete b[h];for(u=0;u<i;u++)b[u+I]=arguments[u+2];return b.length=A-a+i,d}})},a9e3:function(e,t,i){"use strict";var a=i("83ab"),o=i("da84"),s=i("94ca"),l=i("6eeb"),n=i("5135"),r=i("c6b6"),c=i("7156"),d=i("d9b5"),u=i("c04e"),m=i("d039"),p=i("7c73"),v=i("241c").f,f=i("06cf").f,g=i("9bf2").f,h=i("58a8").trim,b="Number",A=o[b],I=A.prototype,Z=r(p(I))==b,x=function(e){if(d(e))throw TypeError("Cannot convert a Symbol value to a number");var t,i,a,o,s,l,n,r,c=u(e,"number");if("string"==typeof c&&c.length>2)if(c=h(c),t=c.charCodeAt(0),43===t||45===t){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+c}for(s=c.slice(2),l=s.length,n=0;n<l;n++)if(r=s.charCodeAt(n),r<48||r>o)return NaN;return parseInt(s,a)}return+c};if(s(b,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var C,y=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof y&&(Z?m((function(){I.valueOf.call(i)})):r(i)!=b)?c(new A(x(t)),i,y):x(t)},E=a?v(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),U=0;E.length>U;U++)n(A,C=E[U])&&!n(y,C)&&g(y,C,f(A,C));y.prototype=I,I.constructor=y,l(o,b,y)}},ac1f:function(e,t,i){"use strict";var a=i("23e7"),o=i("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,i){"use strict";var a=i("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,i){var a=i("83ab"),o=i("9bf2").f,s=Function.prototype,l=s.toString,n=/^\s*function ([^ (]*)/,r="name";a&&!(r in s)&&o(s,r,{configurable:!0,get:function(){try{return l.call(this).match(n)[1]}catch(e){return""}}})},b12c:function(e,t,i){},b680:function(e,t,i){"use strict";var a=i("23e7"),o=i("a691"),s=i("408a"),l=i("1148"),n=i("d039"),r=1..toFixed,c=Math.floor,d=function(e,t,i){return 0===t?i:t%2===1?d(e,t-1,i*e):d(e*e,t/2,i)},u=function(e){var t=0,i=e;while(i>=4096)t+=12,i/=4096;while(i>=2)t+=1,i/=2;return t},m=function(e,t,i){var a=-1,o=i;while(++a<6)o+=t*e[a],e[a]=o%1e7,o=c(o/1e7)},p=function(e,t){var i=6,a=0;while(--i>=0)a+=e[i],e[i]=c(a/t),a=a%t*1e7},v=function(e){var t=6,i="";while(--t>=0)if(""!==i||0===t||0!==e[t]){var a=String(e[t]);i=""===i?a:i+l.call("0",7-a.length)+a}return i},f=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){r.call({})}));a({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,i,a,n,r=s(this),c=o(e),f=[0,0,0,0,0,0],g="",h="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(g="-",r=-r),r>1e-21)if(t=u(r*d(2,69,1))-69,i=t<0?r*d(2,-t,1):r/d(2,t,1),i*=4503599627370496,t=52-t,t>0){m(f,0,i),a=c;while(a>=7)m(f,1e7,0),a-=7;m(f,d(10,a,1),0),a=t-1;while(a>=23)p(f,1<<23),a-=23;p(f,1<<a),m(f,1,1),p(f,2),h=v(f)}else m(f,0,i),m(f,1<<-t,0),h=v(f)+l.call("0",c);return c>0?(n=h.length,h=g+(n<=c?"0."+l.call("0",c-n)+h:h.slice(0,n-c)+"."+h.slice(n-c))):h=g+h,h}})},b6af:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAQAAADs3AYjAAAAAXNSR0IArs4c6QAAAblJREFUKM9tk81LlFEUxk9GUYvAVToESosQhEoQTEEIxIUf/QWpixJyIxKCG6FhIHAVLQIhN+NCVyPkQhAF573Pc2a0TLEg6QOlqCmYlc5ozkyNzutCfefO69y7Os/53XvuOTxXxForV/UOHyKIIIbY9q5Kyq31S+zCHH9ynxlmeIAdrGJkyQ9/qMRL/mGOR3S9/Z8pOrF7Fha/pmGkWLCgs53jhjadYqEKPGPaSma4w0MvylPfV4uIiGnAL0/e4wQHon06ys/FWzEmIiJ4ZRV97txlD54st2g3f5+pSERviKlEwsOS0VozqOv8pBENcMLTC+gTtFid/tBubJy806mLDRXfjbCYHivc5wqzdJnm/EKAr60GV4UD/pHogXkR7zQP+N1StwSP/CDexmr0KeP2XPFRTPs5cMppRNJXZUYWAkj5wDVMnjs8LO4FnfXJ3zDnU3Z5W0RMB3ZLTo/r/RLskNORiyKyeRlh5qxEHGNWVMBX03BqC96EMlvGOy6PkNBey2hL9VjUtOUZly4LzGKb/aGKEusuXmcIX/iXOeaZ13/MIIlIrLXsd+AtPkYYDhy8QdA0myvF3DH5VyVHcRr2OAAAAABJRU5ErkJggg=="},b6cc:function(e,t){e.exports="data:image/png;base64,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"},b7b0:function(e,t,i){},bf23:function(e,t,i){"use strict";i("f4ef")},d784:function(e,t,i){"use strict";i("ac1f");var a=i("6eeb"),o=i("9263"),s=i("d039"),l=i("b622"),n=i("9112"),r=l("species"),c=RegExp.prototype;e.exports=function(e,t,i,d){var u=l(e),m=!s((function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})),p=m&&!s((function(){var t=!1,i=/a/;return"split"===e&&(i={},i.constructor={},i.constructor[r]=function(){return i},i.flags="",i[u]=/./[u]),i.exec=function(){return t=!0,null},i[u](""),!t}));if(!m||!p||i){var v=/./[u],f=t(u,""[e],(function(e,t,i,a,s){var l=t.exec;return l===o||l===c.exec?m&&!s?{done:!0,value:v.call(t,i,a)}:{done:!0,value:e.call(i,t,a)}:{done:!1}}));a(String.prototype,e,f[0]),a(c,u,f[1])}d&&n(c[u],"sham",!0)}},daec:function(e,t,i){"use strict";i("6d98")},db87:function(e,t,i){"use strict";i("12ef")},e632:function(e,t,i){e.exports=i.p+"img/4.52015e21.jpg"},f4ef:function(e,t,i){},fce3:function(e,t,i){var a=i("d039");e.exports=a((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);