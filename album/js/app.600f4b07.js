(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var r=a[i];0!==o[r]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},i={app:0},o={app:0},n=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2f7587ee":"3aa1c698"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-2f7587ee":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-2f7587ee":"7d6b550f"}[t]+".css",o=c.p+s,n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var l=n[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===o))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===s||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||o,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete i[t],m.parentNode.removeChild(m),a(n)},m.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(m)})).then((function(){i[t]=0})));var s=o[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,a){s=o[t]=[e,a]}));e.push(s[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/album/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"16a3":function(t,e,a){"use strict";a("cd8c")},"1ae4":function(t,e,a){t.exports=a.p+"img/logo.e14d7d61.svg"},"2bea":function(t,e,a){},"46a6":function(t,e,a){"use strict";a("5f04")},"47a9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],n=(a("5c0b"),a("2877")),r={},c=Object(n["a"])(r,i,o,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Navbar"),a("Banner"),a("div",{staticClass:"navs"},[a("div",{staticClass:"nav-p"},t._l(t.list,(function(e,s,i){return a("a",{key:e.id,staticClass:"br3 anm",class:{activ:i==t.listIndex},on:{click:function(a){return t.listClick(i,e.id)}}},[t._v(t._s(e.name))])})),0)]),a("div",{staticClass:"waterfall"},[t.isLazyloadImg?a("lazyloadImg",{attrs:{apiData:t.apiData}}):t._e()],1)],1)},m=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbars fAIC"},[s("img",{staticClass:"logo",attrs:{alt:"logo",src:a("1ae4")}}),s("div",{staticClass:"menus "},[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[s("el-menu-item",{staticClass:"hidden-xs-only",attrs:{index:"1"}},[t._v("首页")]),s("el-menu-item",{staticClass:"hidden-xs-only",attrs:{index:"2"}},[t._v("其它")])],1)],1),s("el-dropdown",{staticClass:"hidden-sm-and-up",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[s("i",{staticClass:"iconfont icon-liebiao"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"a"}},[t._v("首页")]),s("el-dropdown-item",{attrs:{command:"b"}},[t._v("其它")])],1)],1)],1)},p=[],h={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)},handleCommand:function(t){this.$message("click on item "+t)}}},f=h,_=(a("16a3"),Object(n["a"])(f,g,p,!1,null,null,null)),v=_.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-templet"},[a("el-carousel",{attrs:{trigger:"click",height:"200px"}},t._l(t.imgList,(function(t,e){return a("el-carousel-item",{key:e},[a("img",{staticClass:"logo",attrs:{alt:"logo",src:t}})])})),1)],1)},b=[],x={data:function(){return{imgList:[a("d303"),a("d303")]}}},j=x,k=(a("46a6"),Object(n["a"])(j,w,b,!1,null,"1a2ebaab",null)),y=k.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-water-fall"},[a("waterfall",{attrs:{col:t.col,width:t.itemWidth,gutterWidth:t.gutterWidth,data:t.dataList,lazyDistance:t.loadDistance,loadDistance:t.loadDistance},on:{loadmore:t.loadmore,scroll:t.scroll}},[t._l(t.dataList,(function(e,s){return a("div",{key:s,staticClass:"cell-item",on:{click:function(a){return t.handelRouter(e.like)}}},[e.img?a("img",{attrs:{"lazy-src":e.img,alt:"load error"}}):t._e(),a("p",[a("a",{staticClass:"notip",attrs:{href:"https://flbook.com.cn/c/SOL9oRzGwK",title:"红色简约大气党建画册",target:"_blank"}},[t._v("红色简约大气党建画册")])]),a("div",{staticClass:"fAICJC fx"},[a("div",{staticClass:"flex item-body"},[a("div",{staticClass:"item-head"},[a("img",{attrs:{src:e.avatar}})]),a("div",{staticClass:"item-name"},[t._v(t._s(e.user))])]),a("div",{staticClass:"flex fl price"},[a("i",{staticClass:"iconfont icon-like-1"}),a("i",{staticClass:"iconfont icon-fen_xiang"})])])])}))],2)],1)},z=[],q=(a("99af"),a("c9b7")),O={data:function(){return{dataList:[{img:"https://image.watsons.com.cn//upload/8a316140.png?w=377&h=451&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"最近浴室新宠，日系神仙好物了解一下～",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/5c3e51e4.jpg?w=720&h=960&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"真的是万能.超级实用.包包必备单品! ! !",user:"迷人的小妖精迷人的小妖精",like:"952"},{img:"https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"150元搞定全套护肤品，这些护肤好物必须交出来！",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/13afe9a7.jpg?x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"夏天用这款姨妈巾，让你体验真正的清爽",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/642cb83c.jpeg?w=1080&h=1080&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"夏天用这款姨妈巾，让你体验真正的清爽",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/083767f0.JPG?w=828&h=620&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"150元搞定全套护肤品，这些护肤好物必须交出来！",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/31e42833.jpg?w=750&h=750&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"我想喝你的洗澡水！",user:"MFF",like:"953"},{img:"https://image.watsons.com.cn//upload/02a4f38d.jpg?w=1067&h=1067&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://ci.xiaohongshu.com/9d5d58d0-7f91-5792-b8e3-25b13b5c1807?imageView2/2/w/400/q/50/format/jpg",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"夏天用这款姨妈巾，让你体验真正的清爽",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://ci.xiaohongshu.com/7e4df2f1-a364-59e7-b7a8-b165abbecd69?imageView2/2/w/400/q/50/format/jpg",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"150元搞定全套护肤品，这些护肤好物必须交出来！",user:"迷人的小妖精迷人的小妖精",like:"953"}],col:6,gutterWidth:20,page:1,loadDistance:400}},computed:{itemWidth:function(){var t=this.col;return(document.documentElement.clientWidth-20*(t+1)-4)/t}},created:function(){"h5"==Object(q["a"])()&&(this.col=2)},mounted:function(){},methods:{handelRouter:function(t){console.log(t),this.$router.push("/album/".concat(t))},scroll:function(t){t.diff<100&&this.loadmore()},switchCol:function(t){this.col=t},loadmore:function(t){console.log(t);var e=[{img:"https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://ci.xiaohongshu.com/7e4df2f1-a364-59e7-b7a8-b165abbecd69?imageView2/2/w/400/q/50/format/jpg",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"150元搞定全套护肤品，这些护肤好物必须交出来！",user:"迷人的小妖精迷人的小妖精",like:"953"},{img:"https://image.watsons.com.cn//upload/642cb83c.jpeg?w=1080&h=1080&x-oss-process=image/resize,w_1080",avatar:"https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",title:"贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",user:"迷人的小妖精迷人的小妖精",like:"953"}];this.dataList=this.dataList.concat(e)}}},P=O,L=(a("a098"),Object(n["a"])(P,C,z,!1,null,null,null)),E=L.exports,I={name:"Home",data:function(){return{apiData:[],isLazyloadImg:!1,listIndex:0,list:{1:{id:"all",name:" 全部"}},vshareConfig:{shareList:[],common:{},share:[{}],slide:[],image:[],selectShare:[]}}},created:function(){this.getlistData()},components:{Navbar:v,Banner:y,lazyloadImg:E},methods:{listClick:function(t,e){console.log(e),this.listIndex=t,this.isLazyloadImg=!1,this.getlistData()},getlistData:function(){var t=this;setTimeout((function(){return t.isLazyloadImg=!0}),1e3)}}},S=I,D=(a("d07d"),Object(n["a"])(S,d,m,!1,null,"21539156",null)),A=D.exports;s["default"].use(u["a"]);var J=[{path:"/",name:"Home",component:A},{path:"/album/:id",name:"album",component:function(){return a.e("chunk-2f7587ee").then(a.bind(null,"ee18"))}}],T=new u["a"]({mode:"hash",base:"/album/",routes:J}),$=T,B=a("2f62");s["default"].use(B["a"]);var G=new B["a"].Store({state:{},mutations:{},actions:{},modules:{}}),M=a("5c96"),N=a.n(M),W=(a("0fae"),a("d21e"),a("be79")),F=a.n(W);s["default"].config.productionTip=!1,s["default"].use(F.a),s["default"].use(N.a),new s["default"]({router:$,store:G,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5f04":function(t,e,a){},"9c0c":function(t,e,a){},a098:function(t,e,a){"use strict";a("47a9")},c9b7:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var s=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"h5":"pc"}},cd8c:function(t,e,a){},d07d:function(t,e,a){"use strict";a("2bea")},d21e:function(t,e,a){},d303:function(t,e,a){t.exports=a.p+"img/1.9e3d54e4.jpg"}});