(this.webpackJsonpautumn=this.webpackJsonpautumn||[]).push([[0],{107:function(t,e,a){},113:function(t,e,a){},122:function(t,e,a){"use strict";a.r(e);var i=a(0),n=a.n(i),r=a(9),s=a.n(r),o=(a(107),a(22)),c=a(170),l=a(171),d=a(62),h=a(159),u=a(12),j=a(36),b=a(61),p=a(4),g=a(178),m=a(162),f=a(167),O=a(164),x=a(165),v=a(166),y=a(168),w=a(67),k=a.n(w),C=a(88),S=a.n(C),I=a(87),L=a.n(I),D=a(89),E=a.n(D),T=a(90),A=a.n(T),R=a(2),B=Object(h.a)({list:{width:250},fullList:{width:"auto"}});function F(){var t=B(),e=n.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(b.a)(e,2),i=a[0],r=a[1],s=function(t,e){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&r(Object(j.a)(Object(j.a)({},i),{},Object(o.a)({},t,e)))}},c=function(e){return Object(R.jsxs)("div",{className:Object(p.a)(t.list,Object(o.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:s(e,!1),onKeyDown:s(e,!1),children:[Object(R.jsxs)(m.a,{children:[Object(R.jsxs)(O.a,{button:!0,onClick:function(){return window.location.href=""},children:[Object(R.jsx)(x.a,{children:Object(R.jsx)(L.a,{})}),Object(R.jsx)(v.a,{primary:"Top"})]},"Top"),Object(R.jsxs)(O.a,{button:!0,onClick:function(){return window.location.href="#howto"},children:[Object(R.jsx)(x.a,{children:Object(R.jsx)(S.a,{})}),Object(R.jsx)(v.a,{primary:"How to USE"})]},"How to USE"),Object(R.jsxs)(O.a,{button:!0,onClick:function(){return window.location.href="#directory"},children:[Object(R.jsx)(x.a,{children:Object(R.jsx)(E.a,{})}),Object(R.jsx)(v.a,{primary:"List"})]},"Directory"),Object(R.jsxs)(O.a,{button:!0,onClick:function(){return window.open("https://hirokazuniimoto.github.io/portfolio/","_blank")},children:[Object(R.jsx)(x.a,{children:Object(R.jsx)(A.a,{})}),Object(R.jsx)(v.a,{primary:"Producer"})]},"Producer")]}),Object(R.jsx)(f.a,{})]})};return Object(R.jsx)("div",{children:["left"].map((function(e){return Object(R.jsxs)(n.a.Fragment,{children:[Object(R.jsx)(y.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:s(e,!0),children:Object(R.jsx)(k.a,{})}),Object(R.jsx)(g.a,{anchor:e,open:i[e],onClose:s(e,!1),onOpen:s(e,!0),children:c(e)})]},e)}))})}var U=Object(h.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:Object(o.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),search:Object(o.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(u.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function N(t){var e=U();return Object(R.jsx)("div",{className:e.root,children:Object(R.jsx)(c.a,{position:"static",color:"dtransparent",style:{position:"fixed"},children:Object(R.jsxs)(l.a,{style:{color:"black"},children:[Object(R.jsx)(F,{}),Object(R.jsx)(d.a,{className:e.title,variant:"h6",noWrap:!0,style:{color:"black"},children:Object(R.jsx)("a",{href:"",style:{color:"black"},children:"YoURList"})})]})})})}var P=a(27),z=a(28),V=a(31),G=a(29),H=(a.p,a(113),a(18)),J=a(176),M=a(172),W=Object(h.a)((function(t){return{root:{"& > *":{margin:t.spacing(1)}}}}));function _(t){var e=W();return Object(R.jsx)("div",{className:e.root,children:Object(R.jsx)(M.a,{variant:"outlined",color:"primary",style:{width:"80%"},children:t.text})})}var K=a(20);var Y=a(175),q=a(60),Q=a.n(q),X=a(169);a(173),a(174),Object(h.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:24},pos:{marginBottom:12}});Object(h.a)((function(t){return{appBar:{position:"relative"},title:{marginLeft:t.spacing(2),flex:1}}}));i.Component;var Z=a(177);var $=function(t){Object(V.a)(a,t);var e=Object(G.a)(a);function a(t){var i;return Object(P.a)(this,a),(i=e.call(this,t)).inputdname="",i.newdata={},i.state={alertflag:!1,erroralertflag:!1},i.doChange=i.doChange.bind(Object(H.a)(i)),i.doAction=i.doAction.bind(Object(H.a)(i)),i}return Object(z.a)(a,[{key:"doChange",value:function(t){this.inputdname=t.target.value,this.setState({})}},{key:"doAction",value:function(t){localStorage.hasOwnProperty(this.inputdname)||""==this.inputdname?this.setState({alertflag:!1,erroralertflag:!0,dname:""}):(t.preventDefault(),this.setState({directoryname:this.inputdname,alertflag:!0,erroralertflag:!0,dname:""}),localStorage.setItem(this.inputdname,"newdir"),setTimeout((function(){window.location.reload()}),2e3))}},{key:"render",value:function(){return Object(R.jsxs)("div",{children:[" ",this.state.alertflag?Object(R.jsxs)(Z.a,{severity:"success",style:{width:"80%",margin:"0 auto"},children:["\u65b0\u898f\u30ea\u30b9\u30c8\u300c",this.state.directoryname,"\u300d\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f\u3002"]}):this.state.erroralertflag?Object(R.jsx)(Z.a,{severity:"error",style:{width:"80%",margin:"0 auto"},children:"\u540c\u540d\u306e\u30ea\u30b9\u30c8\u304c\u5b58\u5728\u3059\u308b\u304b\u30ea\u30b9\u30c8\u540d\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002"}):Object(R.jsx)("p",{}),alert,Object(R.jsx)("form",{class:"mt-4",noValidate:!0,autoComplete:"off",children:Object(R.jsx)(J.a,{id:"standard-basic",label:"\u30ea\u30b9\u30c8\u540d\u3092\u5165\u529b",onChange:this.doChange,style:{width:"80%"}})}),Object(R.jsx)("div",{class:"mt-3",children:Object(R.jsx)(M.a,{variant:"outlined",color:"primary",style:{width:"80%"},onClick:this.doAction,children:"\u30ea\u30b9\u30c8\u4f5c\u6210"})})]})}}]),a}(i.Component);$=Object(K.b)((function(t){return t}))($);var tt=Object(K.b)((function(t){return t}))($);for(var et=n.a.forwardRef((function(t,e){return Object(R.jsx)(X.a,Object(j.a)({direction:"up",ref:e},t))})),at=[],it=0;it<localStorage.length;it++){var nt=localStorage.key(it);-1!=localStorage.getItem(nt).indexOf("newdir")&&at.push(nt)}var rt=function(t){Object(V.a)(a,t);var e=Object(G.a)(a);function a(t){var i;return Object(P.a)(this,a),(i=e.call(this,t)).inputtitle="",i.inputurl="",i.data={},i.style={appBar:{position:"relative"},title:{flex:1}},i.handleClose=function(){i.setOpen(!1)},i.state={open:!1,dirnametitle:"",pages:[],dirnames:i.getdirnames(),urltitle:i.geturltitle(),urlerrorflag:!1},i.doChange1=i.doChange1.bind(Object(H.a)(i)),i.doChange2=i.doChange2.bind(Object(H.a)(i)),i.doAction=i.doAction.bind(Object(H.a)(i)),i.doDelete=i.doDelete.bind(Object(H.a)(i)),i.deletedirectory=i.deletedirectory.bind(Object(H.a)(i)),i.getdirnames=i.getdirnames.bind(Object(H.a)(i)),i.geturltitle=i.geturltitle.bind(Object(H.a)(i)),i}return Object(z.a)(a,[{key:"getdirnames",value:function(){for(var t=[],e=0;e<localStorage.length;e++){var a=localStorage.key(e);-1!=localStorage.getItem(a).indexOf("newdir")&&t.push(a)}return t}},{key:"geturltitle",value:function(t){try{this.pages=localStorage.getItem(t).split(","),this.pages.pop()}catch(e){this.pages=[]}return this.pages}},{key:"doChange1",value:function(t){this.inputtitle=t.target.value,this.setState({})}},{key:"doChange2",value:function(t){this.inputurl=t.target.value,this.setState({})}},{key:"doAction",value:function(t){if(localStorage.hasOwnProperty(this.inputtitle)||""==this.inputtitle||"newdir"==this.inputtitle)this.setState({alertflag:!1,erroralertflag:!0,dname:""});else{this.setState({title:this.inputtitle,url:this.inputurl,alertflag:!0,erroralertflag:!0,dname:"",dirnames:this.getdirnames()}),console.log(this.state.pages),this.data=[this.inputtitle,this.inputurl],this.data=[this.inputtitle],this.value=localStorage.getItem(this.state.dirnametitle),this.data.push(this.value),localStorage.setItem(this.state.dirnametitle,this.data),localStorage.setItem(this.inputtitle,this.inputurl);try{this.state.pages=localStorage.getItem(this.state.dirnametitle).split(","),this.state.pages.pop()}catch(t){this.state.pages=[]}t.preventDefault()}}},{key:"doDelete",value:function(t){localStorage.removeItem(t),this.value=localStorage.getItem(this.state.dirnametitle),t+=",",this.value=this.value.replace(t,""),localStorage.setItem(this.state.dirnametitle,this.value);try{this.state.pages=localStorage.getItem(this.state.dirnametitle).split(","),this.state.pages.pop()}catch(e){this.state.pages=[]}this.setState({})}},{key:"deletedirectory",value:function(t){this.result=window.confirm("\u672c\u5f53\u306b\u6d88\u53bb\u3057\u3066\u3082\u3088\u308d\u3057\u3044\u3067\u3059\u304b\uff1f"),this.result&&(this.deletepages=localStorage.getItem(this.state.dirnametitle).split(","),this.deletepages.pop(),this.deletepages.map((function(t){localStorage.removeItem(t)})),localStorage.removeItem(this.state.dirnametitle),this.setState({open:!1}),window.location.reload())}},{key:"setOpen",value:function(t){this.setState({open:t})}},{key:"urlopen",value:function(t){-1!=t.indexOf("http://")||-1!=t.indexOf("https://")?window.open(t,"_blank"):this.setState({urlerrorflag:!0})}},{key:"handleClickOpen",value:function(t){this.setState({open:!0,dirnametitle:t});try{this.state.pages=localStorage.getItem(t).split(","),this.state.pages.pop()}catch(e){this.state.pages=[]}}},{key:"render",value:function(){var t=this;return Object(R.jsxs)("div",{children:[this.state.dirnames.map((function(e){return Object(R.jsx)("div",{children:Object(R.jsx)(M.a,{variant:"outlined",color:"primary",onClick:function(){return t.handleClickOpen(e)},style:{width:"80%",height:"80px",fontSize:"20px",marginTop:"20px"},children:e})})})),Object(R.jsxs)(Y.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:et,children:[Object(R.jsx)(c.a,{style:this.style.appBar,children:Object(R.jsxs)(l.a,{children:[Object(R.jsx)(y.a,{edge:"start",color:"inherit",onClick:this.handleClose,"aria-label":"close",children:Object(R.jsx)(Q.a,{})}),Object(R.jsx)(d.a,{variant:"h6",style:this.style.title,children:this.state.dirnametitle}),Object(R.jsx)(M.a,{autoFocus:!0,color:"inherit",onClick:this.deletedirectory,children:"\u30ea\u30b9\u30c8\u6d88\u53bb"}),Object(R.jsx)(M.a,{autoFocus:!0,color:"inherit",onClick:this.handleClose,children:"\u4fdd\u5b58"})]})}),this.state.alertflag?Object(R.jsxs)(Z.a,{severity:"success",style:{width:"100%",margin:"10 auto",marginTop:"20px"},children:["\u65b0\u898f\u30da\u30fc\u30b8\u300c",this.state.title,"\u300d\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f\u3002"]}):this.state.erroralertflag?Object(R.jsx)(Z.a,{severity:"error",style:{width:"100%",margin:"10 auto",marginTop:"20px"},children:"\u540c\u540d\u306e\u30da\u30fc\u30b8\u30bf\u30a4\u30c8\u30eb\u304c\u5b58\u5728\u3059\u308b\u304b\u30da\u30fc\u30b8\u30bf\u30a4\u30c8\u30eb\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002"}):Object(R.jsx)("p",{}),this.state.urlerrorflag?Object(R.jsx)(Z.a,{severity:"error",style:{width:"100%",margin:"10 auto",marginTop:"20px"},children:"\u30da\u30fc\u30b8\u3092\u958b\u3051\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u5165\u529b\u3055\u308c\u305fURL\u304c\u9593\u9055\u3063\u3066\u3044\u306a\u3044\u304b\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}):Object(R.jsx)("p",{}),Object(R.jsxs)("div",{class:"ml-3 mr-3 mt-4",style:{},children:[Object(R.jsx)("h5",{children:"\u65b0\u3057\u304f\u30da\u30fc\u30b8\u3092\u8ffd\u52a0"}),Object(R.jsx)("form",{class:"mt-1",noValidate:!0,autoComplete:"off",children:Object(R.jsx)(J.a,{id:"standard-basic",label:"\u30da\u30fc\u30b8\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b",onChange:this.doChange1,style:{width:"100%"}})}),Object(R.jsx)("form",{class:"mt-1",noValidate:!0,autoComplete:"off",children:Object(R.jsx)(J.a,{id:"standard-basic",label:"URL\u3092\u5165\u529b",onChange:this.doChange2,style:{width:"100%"}})}),Object(R.jsx)("div",{class:"mt-4 mb-5",children:Object(R.jsx)(M.a,{variant:"outlined",color:"primary",onClick:this.doAction,style:{width:"100%"},children:"\u8ffd\u52a0"})})]}),Object(R.jsxs)(m.a,{children:[Object(R.jsx)(f.a,{}),this.state.pages.map((function(e){return Object(R.jsxs)("div",{children:[Object(R.jsxs)(O.a,{children:[Object(R.jsx)(v.a,{primary:e,secondary:localStorage.getItem(e)}),Object(R.jsx)("a",{onClick:function(){return t.urlopen(localStorage.getItem(e))},children:Object(R.jsx)(_,{text:"\u958b\u304f"})}),Object(R.jsx)("a",{onClick:function(){return t.doDelete(e)},children:Object(R.jsx)(_,{text:"\u6d88\u53bb"})})]}),Object(R.jsx)(f.a,{})]})}))]})]})]})}}]),a}(i.Component),st=Object(K.b)((function(t){return t}))(rt),ot=function(t){Object(V.a)(a,t);var e=Object(G.a)(a);function a(t){return Object(P.a)(this,a),e.call(this,t)}return Object(z.a)(a,[{key:"render",value:function(){return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)("h1",{class:"text-center mt-5 mb-4",children:Object(R.jsx)("span",{class:"marker-animation",children:"\u30ea\u30b9\u30c8\u306e\u4f5c\u6210"})}),Object(R.jsx)(tt,{}),Object(R.jsx)("a",{id:"directory"}),Object(R.jsx)("h1",{class:"text-center mt-5 mb-4",children:Object(R.jsx)("span",{class:"marker-animation",children:"\u30ea\u30b9\u30c8\u4e00\u89a7"})}),Object(R.jsx)(st,{})]})}}]),a}(i.Component),ct=Object(K.b)((function(t){return t}))(ot),lt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(e){var a=e.getCLS,i=e.getFID,n=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),i(t),n(t),r(t),s(t)}))},dt=a(43),ht={data:{},message:"please type message:",mode:"default",fdata:[],alertflag:!1,erroralertflag:!1};function ut(t,e){var a=t.data.slice();return a.splice(e.index,1),{data:a,message:'delete "'+e.index+'":',mode:"delete",fdata:[]}}function jt(t,e){var a=e.find,i=[];return t.data.forEach((function(t){t.message.indexOf(a)>=0&&i.push(t)})),{data:t.data,message:'find "'+a+'":',mode:"find",fdata:i}}function bt(t,e){var a=e.find,i=[];return t.data.forEach((function(t){t.message.indexOf(a)>=0&&i.push(t)})),{data:t.data,message:'find "'+a+'":',mode:"find",fdata:i}}function pt(t,e){var a=e.find,i=[];return t.data.forEach((function(t){t.message.indexOf(a)>=0&&i.push(t)})),{data:t.data,message:'find "'+a+'":',mode:"find",fdata:i}}var gt=Object(dt.b)({directory:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DirectoryCreate":return{message:"Added!",mode:"default",fdata:[],alertflag:!0};case"DirectoryDELETE":return ut(t,e);case"URLFIND":return pt(t,e);case"URLADD":return jt(t,e);case"URLDELETE":return bt(t,e);default:return t}}}),mt=Object(dt.c)(gt);s.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(N,{})}),document.getElementById("header")),s.a.render(Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(K.a,{store:mt,children:Object(R.jsx)(ct,{})})}),document.getElementById("root")),lt()}},[[122,1,2]]]);
//# sourceMappingURL=main.53c50faa.chunk.js.map