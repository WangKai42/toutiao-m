(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54fdad4a"],{"064f":function(t,e,n){"use strict";n("1be5")},"07fd":function(t,e,n){},"1be5":function(t,e,n){},2282:function(t,e,n){},2423:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return l}));var r=n("b775"),o=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_1/articles",params:t})},a=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})},c=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},i=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},l=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),a=n("d039"),c=n("ad6d"),i="toString",s=RegExp.prototype,l=s[i],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),m=l.name!=i;(u||m)&&r(RegExp.prototype,i,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2909:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){if(Array.isArray(t))return r(t)}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n("fb6a");function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return o(t)||a(t)||c(t)||i()}},"3f1b":function(t,e,n){},"400f":function(t,e,n){"use strict";n("c8ad")},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),a=n("9bdd"),c=n("e95a"),i=n("50c4"),s=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,m,f,d,p=o(t),b="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,_=l(p),w=0;if(g&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==_||b==Array&&c(_))for(e=i(p.length),n=new b(e);e>w;w++)d=g?h(p[w],w):p[w],s(n,w,d);else for(m=_.call(p),f=m.next,n=new b;!(u=f.call(m)).done;w++)d=g?a(m,h,[u.value,w],!0):u.value,s(n,w,d);return n.length=w,n}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o=n("5899"),a="["+o+"]",c=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},5981:function(t,e,n){"use strict";n("3f1b")},7156:function(t,e,n){var r=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var a,c;return o&&"function"==typeof(a=e.constructor)&&a!==n&&r(c=a.prototype)&&c!==n.prototype&&o(t,c),t}},"72e1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-container"},[n("van-nav-bar",{staticClass:"app-nav-bar",attrs:{title:"文章详情","left-arrow":""},on:{"click-left":function(e){return t.$router.back()}}}),n("div",{staticClass:"article-wrap"},[n("h1",{staticClass:"title"},[t._v(" "+t._s(t.article.title))]),n("van-cell",{staticClass:"user-info",attrs:{center:""}},[n("div",{staticClass:"name",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.aut_name))]),n("van-image",{staticClass:"avatar",attrs:{slot:"icon",round:"",fit:"cover",src:t.article.aut_photo},slot:"icon"}),n("div",{staticClass:"pabdata",attrs:{slot:"label"},slot:"label"},[t._v(" "+t._s(t._f("relativeTime")(t.article.pubdate))+" ")]),n("van-button",{staticClass:"fowllow-btn",attrs:{type:t.article.is_followed?"danger":"info",icon:t.article.is_followed?"":"plus",round:"",size:"small",loading:t.isLoadingFollow},on:{click:t.onFollow}},[t._v(" "+t._s(t.article.is_followed?"已关注":"关注")+" ")])],1),n("div",{ref:"artice-content",staticClass:"markdown-body",domProps:{innerHTML:t._s(t.article.content)}}),n("comment-list",{attrs:{source:t.articleId,list:t.commentList},on:{"update-total-count":function(e){t.totleCommentCount=e},"reply-click":t.onReplyClick}})],1),n("div",{staticClass:"article-bottom"},[n("van-button",{staticClass:"comment-btn",attrs:{type:"default",round:"",size:"small"},on:{click:function(e){t.isPostShow=!0}}},[t._v(" 写评论 ")]),n("van-icon",{staticClass:"sum",attrs:{name:"comment-o",color:"#777",info:t.totleCommentCount}}),n("van-icon",{attrs:{name:t.article.is_collected?"star":"star-o",color:t.article.is_collected?"orange":"#777"},on:{click:t.onCollect}}),n("van-icon",{attrs:{name:1===t.article.attitude?"good-job":"good-job-o",color:1===t.article.attitude?"skyblue":"#777"},on:{click:t.onLike}}),n("van-icon",{attrs:{name:"share",color:"#777"}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.isPostShow,callback:function(e){t.isPostShow=e},expression:"isPostShow"}},[n("post-comment",{attrs:{target:t.articleId},on:{"post-success":t.onPostSuccess}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.isReplyShow,callback:function(e){t.isReplyShow=e},expression:"isReplyShow"}},[t.isReplyShow?n("comment-reply",{attrs:{comment:t.replyComment,"article-id":t.articleId,"post-success":t.onPostSuccess},on:{close:function(e){t.isReplyShow=!1}}}):t._e()],1)],1)},o=[],a=n("1da1"),c=(n("96cf"),n("a9e3"),n("4160"),n("159b"),n("07fd"),n("2423")),i=n("28a2"),s=n("c24f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-list"},[n("van-cell",{attrs:{title:"全部评论"}}),n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,r){return n("comment-item",{key:r,attrs:{comment:e},on:{"reply-click":function(e){return t.$emit("reply-click",e)}}})})),1)],1)},u=[],m=n("2909"),f=(n("d3b7"),n("25f0"),n("b775")),d=function(t){return Object(f["a"])({method:"GET",url:"/app/v1_0/comments",params:t})},p=function(t){return Object(f["a"])({method:"POST",url:"/app/v1_0/comment/likings",data:{target:t}})},b=function(t){return Object(f["a"])({method:"DELETE",url:"/app/v1_0/comment/likings/".concat(t)})},v=function(t){return Object(f["a"])({method:"POST",url:"/app/v1_0/comments",data:t})},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell",{staticClass:"comment-item"},[n("van-image",{staticClass:"avatar",attrs:{slot:"icon",round:"",fil:"cover",src:t.comment.aut_photo},slot:"icon"}),n("div",{attrs:{slot:"title"},slot:"title"},[n("div",{staticClass:"title-wrap"},[n("div",{staticClass:"name"},[t._v(t._s(t.comment.aut_name)+" ")]),n("div",{staticClass:"like-wrap",on:{click:t.onCommentLike}},[n("van-icon",{staticClass:"like-icon liked",class:{liked:t.comment.is_liking},attrs:{name:t.comment.is_liking?"good-job":"good-job-o"}}),n("span",{staticClass:"like-count"},[t._v(t._s(t.comment.like_count))])],1)]),n("div",{staticClass:"content"},[t._v(t._s(t.comment.content)+" ")]),n("div",[n("span",{staticClass:"pubdate"},[t._v(t._s(t._f("datetime")(t.comment.pubdate))+" ")]),n("van-button",{staticClass:"reply-btn",attrs:{round:"",size:"mini"},on:{click:function(e){return t.$emit("reply-click",t.comment)}}},[t._v(" "+t._s(t.comment.reply_count)+" 回复")])],1)])],1)],1)},g=[],_={props:{comment:{type:Object,required:!0}},data:function(){return{}},methods:{onCommentLike:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$toast.loading({message:"操作中...",forbidClick:!0}),!t.comment.is_liking){e.next=8;break}return e.next=4,p(t.comment.aut_id);case 4:t.comment.like_count--,t.comment.like_count<0&&(t.comment.like_count=0),e.next=11;break;case 8:return e.next=10,b(t.comment.aut_id);case 10:t.comment.like_count++;case 11:t.comment.is_liking=!t.comment.is_liking;case 12:case"end":return e.stop()}}),e)})))()}},components:{}},w=_,y=(n("5981"),n("2877")),k=Object(y["a"])(w,h,g,!1,null,"5a415f11",null),C=k.exports,O={props:{source:{type:[Number,String,Object],required:!0},type:{type:String,default:"a"},list:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,finished:!1,offset:null,limit:10}},methods:{onLoad:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d({type:t.type,source:t.source.toString(),offset:t.offset,limit:t.limit});case 2:r=e.sent,o=r.data,t.$emit("update-total-count",o.data.total_count),a=o.data.results,(n=t.list).push.apply(n,Object(m["a"])(a)),t.loading=!1,a.length?t.offset=a.last_id:t.finished=!0;case 9:case"end":return e.stop()}}),e)})))()}},components:{commentItem:C}},j=O,S=Object(y["a"])(j,l,u,!1,null,"7ecf23a0",null),x=S.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-comment"},[n("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},model:{value:t.message,callback:function(e){t.message="string"===typeof e?e.trim():e},expression:"message"}}),n("van-button",{attrs:{size:"mini",disabled:!t.message},on:{click:t.onPost}},[t._v(" 发布 ")])],1)},I=[],P={props:{target:{type:[Number,String,Object],required:!0},articleId:{type:[Number,String,Object],default:null}},data:function(){return{message:""}},methods:{onPost:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v({target:t.target.toString(),content:t.message,art_id:t.articleId?t.articleId.toString():null});case 2:n=e.sent,r=n.data,t.$emit("post-success",r.data.new_obj),t.$toast.success("发布成功"),t.message="";case 7:case"end":return e.stop()}}),e)})))()}},components:{}},A=P,R=(n("a864"),Object(y["a"])(A,E,I,!1,null,"3a8d9b37",null)),T=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-reply"},[n("van-nav-bar",{attrs:{title:t.comment.reply_count+"条回复"}},[n("van-icon",{attrs:{slot:"left",name:"cross"},on:{click:function(e){return t.$emit("close")}},slot:"left"})],1),n("comment-item",{attrs:{comment:t.comment}}),n("comment-list",{attrs:{title:"所有回复",source:t.comment.com_id,type:"c",list:t.commentList}}),n("div",{staticClass:"article-bottom"},[n("van-button",{staticClass:"comment-btn",attrs:{type:"default",round:"",size:"small"},on:{click:function(e){t.isPostShow=!0}}},[t._v(" 写评论 ")])],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.isPostShow,callback:function(e){t.isPostShow=e},expression:"isPostShow"}},[n("post-comment",{attrs:{target:t.comment.com_id,"article-id":t.articleId},on:{"post-success":t.onPostSuccess}})],1)],1)},N=[],$={props:{comment:{type:Object,required:!0},articleId:{type:[Number,String,Object],required:!0}},data:function(){return{isPostShow:!1,commentList:[]}},methods:{onPostSuccess:function(t){this.commentList.unshift(t),this.comment.reply_count++,this.isPostShow=!1}},components:{CommentItem:C,CommentList:x,PostComment:T}},F=$,G=(n("400f"),Object(y["a"])(F,L,N,!1,null,"24adbc7c",null)),q=G.exports,z={props:{articleId:{type:[Number,String,Object],required:!0}},data:function(){return{article:{},isLoadingFollow:!1,isLoadingCollect:!1,isPostShow:!1,commentList:[],totleCommentCount:0,isReplyShow:!1,replyComment:{}}},created:function(){this.loadArticle()},methods:{loadArticle:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["f"])(t.articleId);case 2:n=e.sent,r=n.data,t.article=r.data,t.$nextTick((function(){t.perviewImage()}));case 6:case"end":return e.stop()}}),e)})))()},perviewImage:function(){var t=this.$refs["artice-content"],e=t.querySelectorAll("img"),n=[];e.forEach((function(t,e){n.push(t.src),t.onclick=function(){Object(i["a"])({images:n,startPosition:e})}}))},onFollow:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLoadingFollow=!0,!t.article.is_followed){e.next=6;break}return e.next=4,Object(s["b"])(t.article.aut_id);case 4:e.next=8;break;case 6:return e.next=8,Object(s["a"])(t.article.aut_id);case 8:t.article.is_followed=!t.article.is_followed,t.isLoadingFollow=!1;case 10:case"end":return e.stop()}}),e)})))()},onCollect:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$toast.loading({message:"操作中...",forbidClick:!0}),!t.article.is_collected){e.next=6;break}return e.next=4,Object(c["c"])(t.articleId);case 4:e.next=8;break;case 6:return e.next=8,Object(c["a"])(t.articleId);case 8:t.article.is_collected=!t.article.is_collected,t.$toast.success("".concat(t.article.is_collected?"收藏成功":"取消收藏"," "));case 10:case"end":return e.stop()}}),e)})))()},onLike:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$toast.loading({message:"操作中...",forbidClick:!0}),1!==t.article.attitude){e.next=7;break}return e.next=4,Object(c["d"])(t.articleId);case 4:t.article.attitude=-1,e.next=10;break;case 7:return e.next=9,Object(c["b"])(t.articleId);case 9:t.article.attitude=1;case 10:t.$toast.success("".concat(1===t.article.attitude?"点赞成功":"取消点赞"," "));case 11:case"end":return e.stop()}}),e)})))()},onPostSuccess:function(t){this.commentList.unshift(t),this.totleCommentCount++,this.isPostShow=!1},onReplyClick:function(t){console.log("onRplyClick",t),this.replyComment=t,this.isReplyShow=!0}},components:{commentList:x,PostComment:T,CommentReply:q}},M=z,D=(n("064f"),Object(y["a"])(M,r,o,!1,null,"512107ee",null));e["default"]=D.exports},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(c){throw o(t),c}}},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),a=n("1c7e"),c=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:o})},a864:function(t,e,n){"use strict";n("2282")},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),a=n("94ca"),c=n("6eeb"),i=n("5135"),s=n("c6b6"),l=n("7156"),u=n("c04e"),m=n("d039"),f=n("7c73"),d=n("241c").f,p=n("06cf").f,b=n("9bf2").f,v=n("58a8").trim,h="Number",g=o[h],_=g.prototype,w=s(f(_))==h,y=function(t){var e,n,r,o,a,c,i,s,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(a=l.slice(2),c=a.length,i=0;i<c;i++)if(s=a.charCodeAt(i),s<48||s>o)return NaN;return parseInt(a,r)}return+l};if(a(h,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(w?m((function(){_.valueOf.call(n)})):s(n)!=h)?l(new g(y(e)),n,C):y(e)},O=r?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),j=0;O.length>j;j++)i(g,k=O[j])&&!i(C,k)&&b(C,k,p(g,k));C.prototype=_,_.constructor=C,c(o,h,C)}},c24f:function(t,e,n){"use strict";n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"i",(function(){return m})),n.d(e,"c",(function(){return f}));var r=n("b775"),o=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})},a=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})},c=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},i=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})},l=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})},u=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})},m=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})},f=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}},c8ad:function(t,e,n){},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),a=n("e8b5"),c=n("23cb"),i=n("50c4"),s=n("fc6a"),l=n("8418"),u=n("b622"),m=n("1dde"),f=m("slice"),d=u("species"),p=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var n,r,u,m=s(this),f=i(m.length),v=c(t,f),h=c(void 0===e?f:e,f);if(a(m)&&(n=m.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[d],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(m,v,h);for(r=new(void 0===n?Array:n)(b(h-v,0)),u=0;v<h;v++,u++)v in m&&l(r,u,m[v]);return r.length=u,r}})}}]);
//# sourceMappingURL=chunk-54fdad4a.fc0b88d9.js.map