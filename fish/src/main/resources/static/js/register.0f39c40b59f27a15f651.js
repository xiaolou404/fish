webpackJsonp([7,5],{"+BTi":function(e,n){},"+Rdb":function(e,n){},"/I4U":function(e,n){},"/bpg":function(e,n){},"/i/W":function(e,n){},"2rGO":function(e,n){},"5JDR":function(e,n){},BWRa:function(e,n){},BWar:function(e,n){},DSCY:function(e,n){},Df1Z:function(e,n){},Dte2:function(e,n){},EYpU:function(e,n){},GXEp:function(e,n){},H3rH:function(e,n){},Hdw5:function(e,n){},I4nB:function(e,n){},"IUI+":function(e,n){},Iun5:function(e,n){},IxJZ:function(e,n){},M9yL:function(e,n){},Mf0D:function(e,n){},NFZi:function(e,n){},NOFV:function(e,n){},PTwS:function(e,n){},Q6SQ:function(e,n){},RWjY:function(e,n){},TFIm:function(e,n){},"V+Zk":function(e,n,t){"use strict";var a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-menu",{staticStyle:{"min-width":"1300px"},attrs:{"default-active":e.currentPath,router:"",mode:"horizontal","background-color":"white","text-color":"#222","active-text-color":"red"}},[e._l(e.navList,function(n,a){return t("el-menu-item",{key:a,attrs:{index:n.name}},[e._v("\n      "+e._s(n.navItem)+"\n    ")])}),e._v(" "),t("span",{staticStyle:{position:"absolute","padding-top":"20px",right:"43%","font-size":"20px","font-weight":"bold"}},[e._v("酸菜鱼")]),e._v(" "),t("el-input",{staticStyle:{width:"300px",position:"absolute","margin-top":"12px",right:"18%"},attrs:{placeholder:"快速搜索...","prefix-icon":"el-icon-search",size:"medium"},model:{value:e.keywords,callback:function(n){e.keywords=n},expression:"keywords"}})],2)],1)},staticRenderFns:[]};var u=t("VU/8")({name:"NavMenu",props:["user"],data:function(){return{navList:[{name:"/index",navItem:"首页"},{name:"/movie",navItem:"影库"},{name:"/control",navItem:"管理中心"},{name:"/Login",navItem:"登录"}],keywords:""}},computed:{hoverBackground:function(){return"#ffd04b"},currentPath:function(){var e=this.$route.path.indexOf("/",1);return-1!==e?this.$route.path.substring(0,e):this.$route.path}}},a,!1,function(e){t("Hdw5")},"data-v-ecc96dea",null);n.a=u.exports},V5v9:function(e,n){},WzZF:function(e,n){},"X+ky":function(e,n){},Xd7X:function(e,n){},YaEn:function(e,n,t){"use strict";var a=t("7+uW"),u=t("/ocq"),o={components:{NavMenu:t("V+Zk").a}},r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("nav-menu",{staticClass:"nav-menu"}),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")(o,r,!1,function(e){t("BWRa")},null,null).exports;a.default.use(u.a);n.a=new u.a({mode:"history",routes:[{path:"/",name:"Default",redirect:"/home",component:i},{path:"/home",name:"Home",component:i,redirect:"/index",children:[{path:"/index",name:"AppIndex",component:function(){return t.e(0).then(t.bind(null,"aWud"))}},{path:"/movie",name:"movie",component:function(){return t.e(2).then(t.bind(null,"VhVx"))}},{path:"/movieDetail/:id",name:"movieDetail",component:function(){return t.e(1).then(t.bind(null,"bd//"))}}]},{path:"/control",name:"control",component:function(){return t.e(3).then(t.bind(null,"8HC2"))}},{path:"/login",name:"Login",component:function(){return t.e(4).then(t.bind(null,"xJsL"))}},{path:"/register",name:"Register",component:function(){return t.e(5).then(t.bind(null,"dIqY"))}}]})},Yq4J:function(e,n){},Z1wW:function(e,n){},ZzA9:function(e,n){},akml:function(e,n){},bwiK:function(e,n){},cDSy:function(e,n){},cwe7:function(e,n){},d7TW:function(e,n){},dIqY:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("mtWM"),u={data:function(){return{rules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],repassword:[{required:!0,message:"重复输入密码",trigger:"blur"}]},checked:!0,loginForm:{username:"",password:"",repassword:""},loading:!1}},methods:{register:function(){var e=this,n=this;a({method:"post",url:"/register",data:{mail:this.loginForm.username,password:this.loginForm.password},header:{"Content-Type":"application/json"}}).then(function(t){void 0!==t.data.uid?(e.$alert("注册成功","提示",{confirmButtonText:"确定"}),n.$router.replace("/Login")):e.$alert("注册失败","提示",{confirmButtonText:"确定"})}).catch(function(e){})}}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("body",{attrs:{id:"paper"}},[t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-container",attrs:{model:e.loginForm,rules:e.rules,"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"login_title"},[e._v("用户注册")]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"邮箱"},model:{value:e.loginForm.username,callback:function(n){e.$set(e.loginForm,"username",n)},expression:"loginForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(n){e.$set(e.loginForm,"password",n)},expression:"loginForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"确认密码"},model:{value:e.loginForm.repassword,callback:function(n){e.$set(e.loginForm,"repassword",n)},expression:"loginForm.repassword"}})],1),e._v(" "),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"40%",background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:e.register}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var r=t("VU/8")(u,o,!1,function(e){t("PTwS")},null,null);n.default=r.exports},dmRH:function(e,n){},hXTu:function(e,n){},is90:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("cwe7"),t("+BTi");var a=t("2X9z"),u=t.n(a),o=(t("/I4U"),t("yg6k")),r=t.n(o),i=(t("oq7i"),t("+TD8")),s=t.n(i),l=(t("2rGO"),t("nu7/")),c=t.n(l),f=(t("xBlb"),t("dVA0")),d=t.n(f),p=(t("NFZi"),t("4KUO")),m=t.n(p),v=(t("IUI+"),t("h2ff")),g=t.n(v),h=(t("5JDR"),t("fM7S")),w=t.n(h),b=(t("uY4q"),t("yUdt")),y=t.n(b),x=(t("ukeg"),t("f65a")),I=t.n(x),k=(t("NOFV"),t("mWcH")),_=t.n(k),F=(t("w2s5"),t("oTyR")),S=t.n(F),D=(t("ZzA9"),t("cgIP")),R=t.n(D),W=(t("H3rH"),t("6mNG")),B=t.n(W),$=(t("hXTu"),t("y7os")),T=t.n($),q=(t("vBcO"),t("ARSI")),M=t.n(q),Y=(t("EYpU"),t("9Y4M")),Z=t.n(Y),V=(t("Z1wW"),t("raHz")),z=t.n(V),A=(t("BWar"),t("IMy7")),E=t.n(A),L=(t("Q6SQ"),t("LQMI")),O=t.n(L),H=(t("akml"),t("wZaX")),J=t.n(H),j=(t("r0Bz"),t("dO6S")),U=t.n(j),X=(t("uKbn"),t("GegP")),N=t.n(X),P=(t("jAzQ"),t("wOhx")),C=t.n(P),G=(t("jZDA"),t("91Nw")),K=t.n(G),Q=(t("d7TW"),t("ajQY")),ee=t.n(Q),ne=(t("Iun5"),t("ttjG")),te=t.n(ne),ae=(t("Df1Z"),t("D3wm")),ue=t.n(ae),oe=(t("s967"),t("855/")),re=t.n(oe),ie=(t("wJKS"),t("orbS")),se=t.n(ie),le=(t("DSCY"),t("LaeV")),ce=t.n(le),fe=(t("IxJZ"),t("NoPp")),de=t.n(fe),pe=(t("+Rdb"),t("Mezo")),me=t.n(pe),ve=(t("qunJ"),t("vqwl")),ge=t.n(ve),he=(t("M9yL"),t("OSLW")),we=t.n(he),be=(t("/i/W"),t("V1RD")),ye=t.n(be),xe=(t("RWjY"),t("aMwW")),Ie=t.n(xe),ke=(t("Dte2"),t("q4le")),_e=t.n(ke),Fe=(t("isE6"),t("LR6y")),Se=t.n(Fe),De=(t("vonM"),t("zAL+")),Re=t.n(De),We=(t("GXEp"),t("mtrD")),Be=t.n(We),$e=(t("I4nB"),t("STLj")),Te=t.n($e),qe=(t("cDSy"),t("e0Bm")),Me=t.n(qe),Ye=(t("WzZF"),t("wxbk")),Ze=t.n(Ye),Ve=(t("TFIm"),t("s3ue")),ze=t.n(Ve),Ae=(t("Xd7X"),t("L6k1")),Ee=t.n(Ae),Le=(t("dmRH"),t("EKTV")),Oe=t.n(Le),He=(t("X+ky"),t("HJMx")),Je=t.n(He),je=(t("V5v9"),t("D8db")),Ue=t.n(je),Xe=(t("/bpg"),t("ACGT")),Ne=t.n(Xe),Pe=(t("Mf0D"),t("exT9")),Ce=t.n(Pe),Ge=(t("bwiK"),t("SExR")),Ke=t.n(Ge),Qe=(t("Yq4J"),t("qubY")),en=t.n(Qe),nn=(t("ylrw"),t("6oiW")),tn=t.n(nn),an=t("7+uW"),un=t("YaEn"),on={name:"registerApp",components:{register:t("dIqY").default}},rn={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"register"}},[n("register")],1)},staticRenderFns:[]};var sn=t("VU/8")(on,rn,!1,function(e){t("mB2a")},"data-v-4d0fec69",null).exports;t("OS1Z"),t("pw1w"),t("tcAE"),t("tvR6");an.default.use(tn.a),an.default.use(en.a),an.default.use(Ke.a),an.default.use(Ce.a),an.default.use(Ne.a),an.default.use(Ue.a),an.default.use(Je.a),an.default.use(Oe.a),an.default.use(Ee.a),an.default.use(ze.a),an.default.use(Ze.a),an.default.use(Me.a),an.default.use(Te.a),an.default.use(Be.a),an.default.use(Re.a),an.default.use(Se.a),an.default.use(_e.a),an.default.use(Ie.a),an.default.use(ye.a),an.default.use(we.a),an.default.use(ge.a),an.default.use(me.a),an.default.use(de.a),an.default.use(ce.a),an.default.use(se.a),an.default.use(re.a),an.default.use(ue.a),an.default.use(te.a),an.default.use(ee.a),an.default.use(K.a),an.default.use(C.a),an.default.use(N.a),an.default.use(U.a),an.default.use(J.a),an.default.use(O.a),an.default.use(E.a),an.default.use(z.a),an.default.use(Z.a),an.default.use(M.a),an.default.use(T.a),an.default.use(B.a),an.default.use(R.a),an.default.use(S.a),an.default.use(_.a),an.default.use(I.a),an.default.use(y.a),an.default.use(w.a),an.default.use(g.a),an.default.use(m.a),an.default.use(d.a),an.default.use(c.a.directive),an.default.prototype.$loading=c.a.service,an.default.prototype.$msgbox=s.a,an.default.prototype.$alert=s.a.alert,an.default.prototype.$confirm=s.a.confirm,an.default.prototype.$prompt=s.a.prompt,an.default.prototype.$notify=r.a,an.default.prototype.$message=u.a,new an.default({el:"#register",router:un.a,components:{registerApp:sn},template:"<registerApp/>"})},isE6:function(e,n){},jAzQ:function(e,n){},jZDA:function(e,n){},mB2a:function(e,n){},oq7i:function(e,n){},pw1w:function(e,n){},qunJ:function(e,n){},r0Bz:function(e,n){},s967:function(e,n){},tvR6:function(e,n){},uKbn:function(e,n){},uY4q:function(e,n){},ukeg:function(e,n){},vBcO:function(e,n){},vonM:function(e,n){},w2s5:function(e,n){},wJKS:function(e,n){},xBlb:function(e,n){},ylrw:function(e,n){}},["is90"]);
//# sourceMappingURL=register.0f39c40b59f27a15f651.js.map