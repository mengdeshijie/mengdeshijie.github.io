(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c17afca"],{"0ef3":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAR1JREFUOE+F0rErx2EQx/HXr4wGg8HIYFf8A8pgMBAmKcJESf4AymwQZWAgI4oYDAaDkYkyMNhQlGJUdLqvvr9v/XL11D3dve8+9zxXU29tmMUg2jP0gFNs4KVIr5W4YWzn/Qi36XdhIP1pHIZfgAEd5JnBe0VJC7YwkmqOAwx5dzjHaALdiOphoeI6/X30oTPAFcyhIztFofuc6Q1LkYhntBaxAG9whcms2oN5jKMJT6nkIuN76ArwA8tYrczVjJOEe/GV8cXID/A7u+1UwAmMYQifpdi/YH8mn1UK/klt1HE95S2UwLrHaQROJbhbAuu+oxFYVhidNnMBYuaj4nHiky8rs8Q1gPLKxZfFOv6uXHRsZPGaj5m8htci8QdpOkTJvXj5pgAAAABJRU5ErkJggg=="},"197e":function(t,a,e){"use strict";e("5b77")},2232:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"collectionAdmin"},[i("div",{staticClass:"collectionAdmin_top"},[i("VideoTitle",{attrs:{title:"查看合集"}})],1),t.listDataAll&&t.listDataAll.length?i("div",[t._l(t.listDataAll,(function(a,A){return i("div",{key:A,staticClass:"flex collectionAdmin_conter"},[i("div",{staticClass:"left_img"},[i("img",{attrs:{src:a.videoEditingImg}}),i("span",[t._v(t._s(a.videoEditingDuration))])]),i("div",{staticClass:"column right"},[i("div",{staticClass:"right_top"},[i("div",{staticClass:"right_tltle"},[t._v(t._s(a.videoTitle))]),i("div",{staticClass:"flex icon_text"},[i("div",{staticClass:"fac"},[i("img",{attrs:{src:e("c3e8")}}),i("span",[t._v(t._s(a.videoPlayNum))])]),i("div",{staticClass:"fac"},[i("img",{attrs:{src:e("c2d6")}}),i("span",[t._v(t._s(a.videoGiveReward))])]),i("div",{staticClass:"fac"},[i("img",{attrs:{src:e("7a45")}}),i("span",[t._v(t._s(a.comment))])]),i("div",{staticClass:"fac"},[i("img",{attrs:{src:e("84c3")}}),i("span",[t._v(t._s(a.videoDuration))])])]),i("span",[t._v("发布时间:"+t._s(a.videoCreateTime))]),i("div",{staticClass:"state"},[t._v(" 视频状态： "),i("span",[t._v(t._s(t.videoState(a.videoState)))])])]),i("div",{staticClass:"flex right_botton"},[i("div",{staticClass:"fcc",on:{click:function(e){return t.editVideo(a)}}},[i("img",{attrs:{src:e("988e")}}),i("span",[t._v("编辑视频")])]),i("div",{staticClass:"fcc",on:{click:function(e){return t.addQuestions(a)}}},[i("img",{attrs:{src:e("0ef3")}}),i("span",[t._v("添加提问")])])])])])})),i("Pagination",{attrs:{pageTabel:t.listQuery},on:{pagingChange:t.pagingChange}})],2):i("el-empty",{attrs:{"image-size":200,description:"暂无数据"}})],1)},A=[],s=e("83b2"),n=e("0ff2"),c=e("a920"),o=e("c9b7"),r={name:"collectionAdmin",data:function(){return{activeIndex:0,inputSearch:"",listDataAll:[],listQuery:{compilationsId:this.$route.query.compilationsId,pageNum:1,pageSize:6,total:0}}},created:function(){this.getListData()},methods:{getListData:function(){var t=this;Object(n["m"])(this.listQuery).then((function(a){var e=a.data,i=e.video,A=e.total;t.listDataAll=i,t.listQuery.total=A}))},pagingChange:function(t){this.productList.pageNum=t.pageNum,this.getDataList()},editVideo:function(t){this.$router.push({name:"postVideo",query:t})},moveVideo:function(t){console.log(t)},addQuestions:function(t){this.$router.push({name:"addQuestions",query:{videoId:t.videoId}})},videoState:function(t){return console.log(t),Object(o["e"])(t)}},components:{VideoTitle:s["a"],Pagination:c["a"]}},g=r,l=(e("eec9"),e("c449"),e("2877")),u=Object(l["a"])(g,i,A,!1,null,"3392a802",null);a["default"]=u.exports},"5b77":function(t,a,e){},"5c19":function(t,a,e){},"7a45":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAdhJREFUOE+tkzFoFFEQhv//7R2ksLCwOMHCImBawYCgQhrRRjhBq1gevF0WrrIUvMbKxkJu38MrBG1FhYCNkBQRAkkRQVBQweKKgNeZQvZ238gsWVnkjJ5xup0375v/n3lLzIgsy64YY24AWBGRzkHJmORmCOFxkiRvfr3GZmI4HJ4xxjiSK7Ma1DkR2SDZs9Z+rnM/QaPR6EJZlmsAjh8GaZxNoijq9nq9Sl0FUiVRFG3NAal5kxDCcpIkXyqQc279T3YOUfnaWnuZzrmrJF/9pZ2ZZUVRXKL3/hGA3lFAAB4q6COAxQboO4CFJlhE9kke+12NiLxTa98aRbsqs91uL4YQtkm2SJ6dTqefWq3WOoBzAO5Ya+855+6TvH0An6giaXR6Ya29PhgMFjqdzlfNl2V5Mk3Tfe/9cwBdEenGcfwyy7JVY8xTrRGRPQW9B7DUhInIKZLaXYt2SI4VUncXkTWS+l2/uV0FPQFw64jDfvD/1q9KvPc6jxP/okptxnF8Ta0poBrsvKFDzvN8ud/vjxWkQ9ONzBXVpsib1trN6qf13t8FMJiHonbyPE9USX1PQRcBWAAfQghvQwg7xpglY8yqiJwHcBqAvuw9ABtFUTxL07RS0YwfghDPW2SPBlUAAAAASUVORK5CYII="},"83b2":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fsb video_titles"},[e("span",{staticClass:"title_left"},[t._v(t._s(t.title))]),t._t("default")],2)},A=[],s={name:"videoTitles",props:["title"]},n=s,c=(e("197e"),e("2877")),o=Object(c["a"])(n,i,A,!1,null,"3eee2394",null);a["a"]=o.exports},"84c3":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAhJJREFUOE+tlLGLE1EQxmfe7kISAptCuAVTKCiccIXFgRYWChYWB1rY2Qjh2E2igYCFhcWClVik0GU3yZ8g4sGdaGFh5xUKZxfhCouIVxyoIMEku++TWbPHEkRzp696PGZ+b9433zym3ArD8LhS6hoRXSCiZSI6QUSVWcgPAB+JaJeZtwFseZ73Pktn2XQ6nUqpVHoI4CYzm3n4n/YAXluW5dVqtQ8pqNvtviCiK4sC5uL2R6PR6QyEI0LSNK31pf8LiqLoMzM7/1DVmbSiXq93GcCTXIcWYgKIieie53kPUlDWuWKx6DLzdSJa/QtJbLARx3HQbDZ3JTYFRVG0OSOnvgiCoGwYRuojAOU0kDlmZgEMXNfdl7N+v7+UJMldZn46L/YOEb0EsK21HhiGsee67jdJ8n2/UK1Wl6bT6TIzn2VmkeOi+O6ga1EUvWHm8wsJMxcE4Dszn0wrCoLAsSzrEQDR5zBrB8C653lvs6cdk3eHYbiilLo6m7UVIqrOuxhAOmtJkjxvNBqvfN83bdsuZ6AvAB4DiOr1+qd8smhj23ah3W5/zZ9LQ0zTvEFEd7TW679z9kDElu4w857WOjYMQya/DKDCzKcAiD1WswHPj8gzIpLv4yhrGMfxL2dL+Y7j3GfmW0RUOARtYzwe3261WsMDZ2dGVEqtKaXOEZGILR9b/n8aypMBvJtMJlsCyC79Ccjd7ErMaCivAAAAAElFTkSuQmCC"},"988e":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAANVJREFUOE+N0qFOgzEUBtAzh+QREAgEAjmCQeIgIYglkGwKLG+CxCyQDAICQbLJCR4AOblkcmITSBzkLn+XZbT/qGtvTr/etg0c4RG7/o473FbLp7jHN24amGCM5wz8xAjneMUAWzgI+INOlZqxS/SOK7yguQmmpIR6OMNFHSyhFt5KsBZFPzl4gj7Wj7dIwj6uczCa38MhUk8JRVgbDzk4xVf1XrH7KirCbcwwxwe6GK69UTExcCSWRhHWmEVpCdOXe9okqvolduJyjuOWYvJPGP+68wvqskcZjxUP1QAAAABJRU5ErkJggg=="},a920:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-pagination",{attrs:{"pager-count":5,"current-page":t.pageTabel.pageNum,layout:"total, prev, pager, next",total:t.pageTabel.total,"page-size":t.pageTabel.pageSize},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(a){return t.$set(t.pageTabel,"pageNum",a)},"update:current-page":function(a){return t.$set(t.pageTabel,"pageNum",a)}}})},A=[],s={name:"pagination",props:{pageTabel:{type:Object}},data:function(){return{pagingObj:{pageNum:1}}},methods:{handleCurrentChange:function(t){this.pagingObj.pageNum=t,this.$emit("pagingChange",this.pagingObj)}}},n=s,c=(e("dc83"),e("2877")),o=Object(c["a"])(n,i,A,!1,null,null,null);a["a"]=o.exports},c014:function(t,a,e){},c2d6:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAXdJREFUOE+tlDtLA0EUhc/djI2oICh2dlqJiJUEH51gtPQPKGaTTWMn/oKAnU2W3UkjWNqKaOO7ECsrUSwtRCwNKsLOkQluCHGjxjjl3DPfnDtzZgT/NCTm+L4/qpRaN8ZMikg/gDuSuyQ3jTGOUmoVwDyAIZJPAE4BFPP5/LVlVEFa62WSAYCOBIMPABwAAwm1dxFZcV13W7TWYyQvm0B+0/hbFEVjEgTBjogs/mbFN5ptCcPQ9tvXDojkvQW9t9FWdX+SrxZ0C2C4HUcAbixoA8Bam6Ci+L7fm0qlrgAM/hH2CGCkmqMwDMdJHolIT4uw5yiKZguFwkV9siccxzloAVYBMJfL5c5ryY5dlEqltFJqH0D3D84qjuNkstnsWayrOYontNZpkgcAuprAXkQk47ruSX39C8gWy+XylDFmrxFm80Iy43neceMmiaDPhzxD0sI649CRXPA87zDJaVOQFQdBMC0iW/aXMMYsJTlpekYtXn9N/gGck4+iIoAuOgAAAABJRU5ErkJggg=="},c3e8:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAXRJREFUOE+l1EFLwmAYB/D/M6ZBp+g6u3iUoFPHDt2CdewDCMoYRPsMfoE6z5OH+gjZcWIThC6BBzFQEDwIHkJLXXPqE681iWyrteewwcv//W17n4cRPqtQKEiKouzP5/Ndfy3sLsvys+M4T4ZhuCJH4mKa5hmAKyLa+wviZ5j5BcC5rus3ZJrmCRHd+WgUSGSZeQngWED3RHQUFfiaZ2aLisWi+Mbkd0iWZaRSKQwGA0yn09DnMLMjIP4ppaoqFEWB53mo1+totVqhWCCUz+chSdJ6c7fbRbVaheuumrRRgZCmaRvhyWSCcrmM4XAYDxK7m80marVafMiyLLTb7f9Ds9kMtm2j0+lEO6NsNotk8mMq+v0+KpUKxuNxYOcCDzudTiOTyaDX66HRaIgJ/rX9bwC2Yk62K97oAcBhTMgWkArgNg4E4NT/jehEdAlgOyI4IqILTdOuV5CoUqm043newWKxWK+FoUS0TCQSj7lc7lXk3gF0iqoMJnpufgAAAABJRU5ErkJggg=="},c449:function(t,a,e){"use strict";e("eeaf")},dc83:function(t,a,e){"use strict";e("5c19")},eeaf:function(t,a,e){},eec9:function(t,a,e){"use strict";e("c014")}}]);