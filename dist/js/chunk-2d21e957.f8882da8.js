(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e957"],{d5d4:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column "},[e("date")],1),e("div",{staticClass:"column"},[e("weather")],1)])])},i=[],a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"panel is-success"},[e("div",{staticClass:"panel-heading"},[t._v(" Time ")]),e("div",{staticClass:"panel-block"},[e("div",{staticClass:"content is-centered"},[e("p",{staticClass:"button"},[t._v(t._s(t.hours))]),e("p",{staticClass:"button"},[t._v(t._s(t.minutes))]),e("p",{staticClass:"button"},[t._v(t._s(t.seconds))]),e("p",{staticClass:"button"},[t._v(t._s(t.hourtime))])])])])])])},o=[],u=1e3,c=12;function r(t){return t>=12?"PM":"AM"}function l(t){return(parseInt(t,10)>=10?"":"0")+t}var d={data:function(){return{hours:0,minutes:0,seconds:0,hourtime:""}},mounted:function(){this.$options.timer=window.setTimeout(this.updateDateTime,u)},beforeUnmount:function(){window.clearTimeout(this.$options.timer)},methods:{updateDateTime:function(){var t=new Date;this.hours=t.getHours(),this.minutes=l(t.getMinutes()),this.seconds=l(t.getSeconds()),this.hourtime=r(this.hours),this.hours=this.hours%c||c,this.$options.timer=window.setTimeout(this.updateDateTime,u)}}},h=d,v=e("2877"),p=Object(v["a"])(h,a,o,!1,null,null,null),m=p.exports,C=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"panel is-success"},[e("div",{staticClass:"panel-heading"},[t._v(" Quote ")]),e("div",{staticClass:"panel-block"},[e("p",{staticClass:"sub-title"},[t._v(t._s(t.quote))]),e("p",{staticClass:"is-danger"},[t._v(t._s(t.error))])])])])])},f=[],_=(e("d3b7"),e("25f0"),e("bc3a")),b=e.n(_),w={data:function(){return{quote:"",error:""}},mounted:function(){var t=this;b.a.get("https://quotes.rest/qod").then((function(s){t.quote=s.data.contents.quotes[0].quote})).catch((function(s){return t.error=s.toString()}))}},g=w,q=Object(v["a"])(g,C,f,!1,null,null,null),T=q.exports,D={components:{Date:m,Weather:T},Date:m},$=D,k=Object(v["a"])($,n,i,!1,null,null,null);s["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d21e957.f8882da8.js.map