webpackJsonp([5],{PTwS:function(e,r){},dIqY:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("mtWM"),s={data:function(){return{rules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],repassword:[{required:!0,message:"重复输入密码",trigger:"blur"}]},checked:!0,loginForm:{username:"",password:"",repassword:""},loading:!1}},methods:{register:function(){var e=this,r=this;o({method:"post",url:"/register",data:{mail:this.loginForm.username,password:this.loginForm.password},header:{"Content-Type":"application/json"}}).then(function(t){void 0!==t.data.uid?(e.$alert("注册成功","提示",{confirmButtonText:"确定"}),r.$router.replace("/Login")):e.$alert("注册失败","提示",{confirmButtonText:"确定"})}).catch(function(e){})}}},a={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("body",{attrs:{id:"paper"}},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-container",attrs:{model:e.loginForm,rules:e.rules,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"login_title"},[e._v("用户注册")]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"邮箱"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"确认密码"},model:{value:e.loginForm.repassword,callback:function(r){e.$set(e.loginForm,"repassword",r)},expression:"loginForm.repassword"}})],1),e._v(" "),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"40%",background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var l=t("VU/8")(s,a,!1,function(e){t("PTwS")},null,null);r.default=l.exports}});
//# sourceMappingURL=5.709e9962a017f068c726.js.map