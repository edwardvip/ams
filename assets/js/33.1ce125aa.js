(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{237:function(e,o,t){"use strict";var n=t(0),a=(t(245),t(242)),i=t.n(a),s=t(238),c=t.n(s),r=t(251),d=t(246),l=t.n(d),u=(t(247),t(248)),f=t.n(u),g=t(249),m=t.n(g),p=t(250),h=t.n(p);n.default.use(i.a),n.default.use(c.a),console.log("ams init config"),n.default.use(f.a),n.default.use(m.a),n.default.use(h.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(r.a,{languages:{javascript:l.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},243:function(e,o,t){"use strict";t(237);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}},993:function(e,o,t){"use strict";t.r(o);var n=t(243),a={defaultError:{type:"error"},buttonError:{type:"error",data:{title:"404",subtitle:"Page not found"},operations:{goIndex:{type:"button",label:"返回首页",props:{type:"danger",size:"medium",round:!0}}},actions:{goIndex:function(){this.$message("你点击了返回首页按钮")}}}},i=t(262),s=t.n(i),c=t(260),r=t.n(c),d={mixins:[n.a],mounted:function(){var e=s()(a[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,a[this.blockName]),this.init=!0)}},l=t(13),u=Object(l.a)(d,function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);o.default=u.exports}}]);