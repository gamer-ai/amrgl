(this.webpackJsonpamrgl=this.webpackJsonpamrgl||[]).push([[0],{227:function(e,a,t){},258:function(e,a,t){},263:function(e,a,t){},268:function(e,a,t){},269:function(e,a,t){"use strict";t.r(a);var i=t(21),n=t(5),o=t.n(n),r=t(70),s=t.n(r),l=(t(258),t(40)),c=t(137),d=t(299),b=t(308),m=t(233),u=t.n(m),h=t(235),j=t.n(h),p=t(232),g=t.n(p),O=t(237),x=t.n(O),f=t(236),y=t.n(f),w=t(87),v=t(29),C=t(38),z=t(307),N=t(315),k=t(174),R=t.n(k),P=t(303),D=t(314),B=t(309),I=t(229),S=t.n(I),M=Object(d.a)((function(e){return{sliderroot:{width:100+2*e.spacing(3)},slidermargin:{height:e.spacing(2)},margin:{marginTop:e.spacing(1),marginRight:e.spacing(1)},textField:{width:"12ch",background:"white",borderRadius:8,opacity:.8}}})),E=Object(C.a)({root:{color:"red",height:4},thumb:{height:20,width:20,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(D.a),A=Object(C.a)({root:{color:"green",height:4},thumb:{height:20,width:20,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(D.a),T=Object(C.a)({root:{color:"blue",height:4},thumb:{height:20,width:20,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(D.a),F=function(e){var a,t,n=M(),r=o.a.useState({planesize:6e3,gridsize:50,gridChange:!1,lightR:.45,lightG:.45,lightB:.45,colorChange:!1}),s=Object(c.a)(r,2),d=s[0],m=s[1],u=function(e){return function(a){var t;m(Object(l.a)(Object(l.a)({},d),{},(t={},Object(w.a)(t,e,a.target.value),Object(w.a)(t,"gridChange",!1),t)))}},h=function(e){return function(a,t){var i;m(Object(l.a)(Object(l.a)({},d),{},(i={},Object(w.a)(i,e,t),Object(w.a)(i,"colorChange",!1),i)))}};return Object(i.jsxs)("div",{className:n.root,children:[Object(i.jsx)("div",{children:Object(i.jsxs)(P.a,{container:!0,direction:"row",alignItems:"center",children:[Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-planesize",variant:"filled",color:"secondary",label:"plane size",type:"number",defaultValue:d.planesize,onChange:u("planesize"),className:Object(v.a)(n.margin,n.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"inch"})}})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-gridsize",variant:"filled",color:"secondary",label:"grid size",type:"number",onChange:u("gridsize"),defaultValue:d.gridsize,className:Object(v.a)(n.margin,n.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"inch"})}})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(b.a,(a={size:"small",color:"secondary","aria-label":"confirm grid",onClick:function(){m(Object(l.a)(Object(l.a)({},d),{},{gridChange:!0})),e.onChange&&e.onChange(d)}},Object(w.a)(a,"color",d.gridChange?"primary":"default"),Object(w.a)(a,"children",Object(i.jsx)(R.a,{})),a))})]})}),Object(i.jsxs)(P.a,{container:!0,direction:"row",alignItems:"left",children:[Object(i.jsx)(P.a,{item:!0,children:Object(i.jsxs)("div",{className:n.sliderroot,children:[Object(i.jsx)("div",{className:n.slidermargin}),Object(i.jsxs)(B.a,{size:"small",disabled:!0,style:{color:"black"},children:[" Background ",Object(i.jsx)(S.a,{fontSize:"large"})]}),Object(i.jsx)("div",{className:n.slidermargin}),Object(i.jsx)(E,{valueLabelDisplay:"auto","aria-label":"pretto slider 2",defaultValue:.45,min:0,max:1,step:.01,onChange:h("lightR")}),Object(i.jsx)("div",{className:n.slidermargin}),Object(i.jsx)(T,{valueLabelDisplay:"auto","aria-label":"pretto slider 3",defaultValue:.45,min:0,max:1,step:.01,onChange:h("lightG")}),Object(i.jsx)("div",{className:n.slidermargin}),Object(i.jsx)(A,{valueLabelDisplay:"auto","aria-label":"pretto slider 4",defaultValue:.45,min:0,max:1,step:.01,onChange:h("lightB")})]})}),Object(i.jsxs)(P.a,{item:!0,children:[Object(i.jsx)("div",{className:n.slidermargin}),Object(i.jsx)(b.a,(t={size:"small",color:"secondary","aria-label":"confirm color",onClick:function(){m(Object(l.a)(Object(l.a)({},d),{},{colorChange:!0})),e.onChange&&e.onChange(d)}},Object(w.a)(t,"color",d.colorChange?"primary":"default"),Object(w.a)(t,"children",Object(i.jsx)(R.a,{})),t))]})]}),Object(i.jsx)("div",{})]})},L=t(39),G=t(210),Y=t(238),H=function(e){var a=Object(n.useRef)(null),t=e.antialias,o=e.engineOptions,r=e.adaptToDeviceRatio,s=e.sceneOptions,c=e.onRender,d=(e.onSceneReady,Object(Y.a)(e,["antialias","engineOptions","adaptToDeviceRatio","sceneOptions","onRender","onSceneReady"])),b=window.innerWidth,m=window.innerHeight;return Object(n.useEffect)((function(){if(a.current){var i=new L.c(a.current,t,o,r,{stencil:!0}),n=new L.j(i,s);n.clearColor=new L.b(.45,.45,.45),i.setSize(b,m),n.isReady()?e.onSceneReady(n):n.onReadyObservable.addOnce((function(a){return e.onSceneReady(a)})),i.runRenderLoop((function(){"function"===typeof c&&c(n),n.render()}));var l=function(){var e=window.innerWidth,a=window.innerHeight;i.setSize(e,a),n.getEngine().resize()};return window&&window.addEventListener("resize",l),function(){n.getEngine().dispose(),window&&window.removeEventListener("resize",l)}}}),[a]),Object(i.jsx)("canvas",Object(l.a)({ref:a},d))},V=(t(263),t(92)),J=t.n(V),q=null,X=null,U=null,$=null,W=function(e){var a=e.settingData,t=e.setSettings,n=e.addData,r=e.setAdd,s=o.a.useRef(null);o.a.useEffect((function(){var e=s.current;if(e){if(a.gridChange){console.log("grid change request");var i=e.getMeshByID("plane"),o=e.getMaterialByID("groundMaterial");if(i._width!=a.planesize||o.gridRatio!=a.gridsize){i.dispose(),o.dispose();var c=L.g.CreateGround("plane",{width:a.planesize,height:a.planesize},e),d=new G.a("groundMaterial",e);d.majorUnitFrequency=10,d.minorUnitVisibility=.5,d.gridRatio=a.gridsize,d.backFaceCulling=!1,d.mainColor=new L.b(1,1,1),d.lineColor=new L.b(1,1,1),d.opacity=.98,c.material=d,c.isPickable=!1}t(Object(l.a)(Object(l.a)({},a),{},{gridChange:!1}))}if(a.colorChange&&(console.log("color change request"),e.clearColor=new L.b(a.lightR,a.lightG,a.lightB),t(Object(l.a)(Object(l.a)({},a),{},{colorChange:!1}))),n.addnew)if(q?(q.attachedMesh=null,q.dispose(),X.dispose(),U.dispose(),$.dispose(),U=new L.k(e),q=new L.h(U),X=new L.i(U),$=new L.e(e)):(U=new L.k(e),q=new L.h(U),X=new L.i(U),$=new L.e(e)),q.attachedMesh=null,q.updateGizmoRotationToMatchAttachedMesh=!1,q.updateGizmoPositionToMatchAttachedMesh=!0,X.updateGizmoRotationToMatchAttachedMesh=!1,X.updateGizmoPositionToMatchAttachedMesh=!0,e.onPointerDown=function(e,a){a.hit?($.removeAllMeshes(),q.attachedMesh=a.pickedMesh,X.attachedMesh=a.pickedMesh,$.addMesh(a.pickedMesh,L.b.Magenta())):(q.attachedMesh=null,X.attachedMesh=null,$.removeAllMeshes())},console.log("add new prime request"),"BOX"==n.primetype){var b=e.getMeshByID(n.primename);if(b)J.a.fire({position:"top",text:"Do you want to edit an existing object, name: "+n.primename+" ?",showDenyButton:!0,background:"black",allowOutsideClick:!1,confirmButtonText:"Confirm",denyButtonText:"Cancel"}).then((function(a){if(a.isConfirmed){J.a.fire({background:"black",icon:"success",text:"Edited",showConfirmButton:!1,timer:1500}),b.dispose();var t=L.g.CreateBox(n.primename,{size:1},e);t.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),t.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}else a.isDenied&&J.a.fire("Changes are not saved, please edit again","","info")}));else{var m=L.g.CreateBox(n.primename,{size:1},e);m.isPickable=!0,m.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),m.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}}else if("SPHERE"==n.primetype){console.log("sphere");var u=e.getMeshByID(n.primename);if(u)J.a.fire({position:"top",text:"Do you want to edit an existing object, name: "+n.primename+" ?",showDenyButton:!0,background:"black",allowOutsideClick:!1,confirmButtonText:"Confirm",denyButtonText:"Cancel"}).then((function(a){if(a.isConfirmed){J.a.fire({background:"black",icon:"success",text:"Edited",showConfirmButton:!1,timer:1500}),u.dispose();var t=L.g.CreateSphere(n.primename,{size:1},e);t.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),t.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}else a.isDenied&&J.a.fire("Changes are not saved, please edit again","","info")}));else{var h=L.g.CreateSphere(n.primename,{size:1},e);h.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),h.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}}else if("CYLINDER"==n.primetype){var j=e.getMeshByID(n.primename);if(j)J.a.fire({position:"top",text:"Do you want to edit an existing object, name: "+n.primename+" ?",showDenyButton:!0,background:"black",allowOutsideClick:!1,confirmButtonText:"Confirm",denyButtonText:"Cancel"}).then((function(a){if(a.isConfirmed){J.a.fire({background:"black",icon:"success",text:"Edited",showConfirmButton:!1,timer:1500}),j.dispose();var t=L.g.CreateCylinder(n.primename,{size:1},e);t.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),t.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}else a.isDenied&&J.a.fire("Changes are not saved, please edit again","","info")}));else{var p=L.g.CreateCylinder(n.primename,{size:1},e);p.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),p.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}}else if("POLYHYDRON"==n.primetype){var g=e.getMeshByID(n.primename);if(g)J.a.fire({position:"top",text:"Do you want to edit an existing object, name: "+n.primename+" ?",showDenyButton:!0,background:"black",allowOutsideClick:!1,confirmButtonText:"Confirm",denyButtonText:"Cancel"}).then((function(a){if(a.isConfirmed){J.a.fire({background:"black",icon:"success",text:"Edited",showConfirmButton:!1,timer:1500}),g.dispose();var t=L.f.CreatePolyhedron(n.primename,{type:n.polyhydrontype,size:1},e);t.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),t.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}else a.isDenied&&J.a.fire("Changes are not saved, please edit again","","info")}));else{var O=L.f.CreatePolyhedron(n.primename,{type:n.polyhydrontype,size:1},e);O.position=new L.l(Number(n.positionx),Number(n.positiony),Number(n.positionz)),O.scaling=new L.l(Number(n.scalex),Number(n.scaley),Number(n.scalez)),r(Object(l.a)(Object(l.a)({},n),{},{addnew:!1}))}}}}),[a,n]);return Object(i.jsx)(H,{antialias:!0,onSceneReady:function(e){s.current=e;var t=new L.a("mainCamera",0,0,10,new L.l(0,0,0),e);t.setPosition(new L.l(0,500,-600));var i=e.getEngine().getRenderingCanvas();t.attachControl(i,!0),new L.d("light",new L.l(0,500,0),e).intensity=.7;var n=L.g.CreateGround("plane",{width:a.planesize,height:a.planesize},e),o=new G.a("groundMaterial",e);o.majorUnitFrequency=10,o.minorUnitVisibility=.5,o.gridRatio=a.gridsize,o.backFaceCulling=!1,o.mainColor=new L.b(1,1,1),o.lineColor=new L.b(1,1,1),o.opacity=.98,n.material=o,n.isPickable=!1},onRender:function(e){},id:"viewport"})},Z=(t(227),t(310)),_=Object(d.a)((function(e){return{root:{width:"fit-content",border:"1px solid ".concat(e.palette.divider),backgroundColor:e.palette.background.paper,color:e.palette.text.secondary,"& svg":{margin:e.spacing(1.5)},"& hr":{margin:e.spacing(0,.5)}}}})),K=function(e){var a=_();return Object(i.jsx)("div",{children:Object(i.jsxs)(P.a,{container:!0,alignItems:"left",className:a.root,children:["plane:",Object(i.jsx)(Z.a,{orientation:"vertical",flexItem:!0}),e.children.planesize,Object(i.jsx)(Z.a,{orientation:"vertical",flexItem:!0}),"grid:",Object(i.jsx)(Z.a,{orientation:"vertical",flexItem:!0}),e.children.gridsize]})})},Q=t(209),ee=t.n(Q),ae=t(230),te=t(316),ie=t(306),ne=t(312),oe=Object(d.a)((function(e){return{margin:{marginTop:e.spacing(1),marginRight:e.spacing(1)},textField:{width:"16ch",background:"white",borderRadius:8,opacity:.8}}})),re=function(e){var a,t=oe(),n=o.a.useState({primetype:"",primename:"",polyhydrontype:null,addnew:!1,positionx:null,positiony:null,positionz:null,scalex:null,scaley:null,scalez:null}),r=Object(c.a)(n,2),s=r[0],d=r[1],m=function(e){return function(a){var t;d(Object(l.a)(Object(l.a)({},s),{},(t={},Object(w.a)(t,e,a.target.value),Object(w.a)(t,"addnew",!1),t)))}};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:t.margin}),Object(i.jsxs)(P.a,{container:!0,direction:"row",alignItems:"center",children:[Object(i.jsx)(P.a,{item:!0,children:Object(i.jsxs)(ie.a,{size:"small",variant:"filled",className:t.textField,children:[Object(i.jsx)(te.a,{htmlFor:"filled-age-native-simple",children:"+ Primes"}),Object(i.jsxs)(ne.a,{native:!0,value:s.primetype,onChange:function(e){var a,t=e.target.name,i=e.target.value;"POLYHYDRON"==e.target.value?Object(ae.a)(ee.a.mark((function e(){var a,t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("selected Polyhydron, now choose type"),e.next=3,J.a.fire({position:"top",background:"black",input:"select",inputOptions:{Polyhydrons:{0:"Tetrahedron",1:"Octahedron",2:"Dodecahedron",3:"Icosahedron",4:"Rhombicuboctahedron",5:"Triangular Prism",6:"Pentagonal Prism",7:"HexagonalPrism",8:"Square Pyramid (J1)",9:"Pentagonal Pyramid (J2)",10:"Triangular Dipyramid (J12)",11:"Pentagonal Dipyramid (J13)",12:"Elongated Square Dipyramid (J15)",13:"Elongated Pentagonal Dipyramid (J16)",14:"Elongated Pentagonal Cupola (J20)"}},inputPlaceholder:"Select a Polyhydron",showCancelButton:!0,inputValidator:function(e){return new Promise((function(e){e()}))}});case 3:a=e.sent,(t=a.value)&&(J.a.fire({background:"black",icon:"success",text:"Selected",showConfirmButton:!1,timer:1500}),d(Object(l.a)(Object(l.a)({},s),{},{primetype:i,polyhydrontype:t,addnew:!1})));case 6:case"end":return e.stop()}}),e)})))():d(Object(l.a)(Object(l.a)({},s),{},(a={},Object(w.a)(a,t,e.target.value),Object(w.a)(a,"polyhydrontype",null),Object(w.a)(a,"addnew",!1),a)))},inputProps:{name:"primetype",id:"filled-primes-native-simple"},children:[Object(i.jsx)("option",{"aria-label":"None",value:""}),Object(i.jsx)("option",{value:"BOX",children:"BOX"}),Object(i.jsx)("option",{value:"SPHERE",children:"SPHERE"}),Object(i.jsx)("option",{value:"CYLINDER",children:"CYLINDER"}),Object(i.jsx)("option",{value:"POLYHYDRON",children:"POLYHYDRON"})]})]})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(B.a,{size:"small",disabled:!0,style:{color:"black"},children:" All Fields Required"})})]}),Object(i.jsx)("div",{children:Object(i.jsxs)(P.a,{container:!0,direction:"row",alignItems:"left",children:[Object(i.jsx)(P.a,{item:!0,children:Object(i.jsxs)(P.a,{container:!0,direction:"column",alignItems:"left",children:[Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-name",variant:"filled",color:"secondary",label:"object name",type:"string",onChange:m("primename"),className:Object(v.a)(t.margin,t.textField),InputProps:{}})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-x",variant:"filled",color:"secondary",label:"center position",type:"number",onChange:m("positionx"),className:Object(v.a)(t.margin,t.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"X:"})}})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-y",variant:"filled",color:"secondary",label:"center position",type:"number",onChange:m("positiony"),className:Object(v.a)(t.margin,t.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"Y:"})}})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-z",variant:"filled",color:"secondary",label:"center position",type:"number",onChange:m("positionz"),className:Object(v.a)(t.margin,t.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"Z:"})}})})]})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsxs)(P.a,{container:!0,direction:"column",alignItems:"left",children:[Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-x",variant:"filled",color:"secondary",label:"scale-x",type:"number",onChange:m("scalex"),className:Object(v.a)(t.margin,t.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"X:"})}})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-y",variant:"filled",color:"secondary",label:"scale-y",type:"number",onChange:m("scaley"),className:Object(v.a)(t.margin,t.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"Y:"})}})}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(N.a,{size:"small",id:"filled-secondary-z",variant:"filled",color:"secondary",label:"scale-z",type:"number",onChange:m("scalez"),className:Object(v.a)(t.margin,t.textField),InputProps:{startAdornment:Object(i.jsx)(z.a,{position:"start",children:"Z:"})}})}),Object(i.jsx)("div",{className:t.margin}),Object(i.jsx)(P.a,{item:!0,children:Object(i.jsx)(b.a,(a={size:"small",color:"secondary","aria-label":"confirm grid",onClick:function(){d(Object(l.a)(Object(l.a)({},s),{},{addnew:!0})),e.onChange&&e.onChange(s)}},Object(w.a)(a,"color",s.addnew?"primary":"default"),Object(w.a)(a,"children",Object(i.jsx)(R.a,{})),a))})]})})]})})]})},se=t(231),le=t(234),ce=Object(d.a)((function(e){return{root:{"& > *":{marginRight:e.spacing(2)}},extendedIcon:{marginRight:e.spacing(2)}}}));function de(){var e=ce(),a=o.a.useState({planesize:6e3,gridsize:50,gridChange:!1,confirmed:!1,lightR:.45,lightG:.45,lightB:.45,colorChange:!1}),t=Object(c.a)(a,2),n=t[0],r=t[1],s=o.a.useState({primetype:"",primename:"",addnew:!1,positionx:null,positiony:null,positionz:null,scalex:null,scaley:null,scalez:null}),d=Object(c.a)(s,2),m=d[0],h=d[1],p=o.a.useState({showAdd:!1,showSettings:!1,showEdit:!1,showImport:!1}),O=Object(c.a)(p,2),f=O[0],w=O[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:e.root,children:Object(i.jsxs)("div",{className:"Navigation",children:[Object(i.jsx)(b.a,{size:"small",color:f.showSettings?"primary":"default",onClick:function(){w({showImport:!1,showEdit:!1,showAdd:!1,showSettings:!f.showSettings})},children:Object(i.jsx)(g.a,{"aria-label":"setting"})}),Object(i.jsx)(b.a,{size:"small","aria-label":"add",color:f.showAdd?"primary":"default",onClick:function(){w({showImport:!1,showEdit:!1,showAdd:!f.showAdd,showSettings:!1})},children:Object(i.jsx)(u.a,{})}),Object(i.jsx)(b.a,{size:"small","aria-label":"import",color:f.showImport?"primary":"default",onClick:function(){w({showEdit:!1,showAdd:!1,showSettings:!1,showImport:!f.showImport})},children:Object(i.jsx)(se.a,{icon:le.a,size:"lg"})}),Object(i.jsx)(b.a,{size:"small","aria-label":"edit",children:Object(i.jsx)(j.a,{})}),Object(i.jsx)(b.a,{size:"small","aria-label":"delete",children:Object(i.jsx)(y.a,{})}),Object(i.jsx)(b.a,{size:"small","aria-label":"download",children:Object(i.jsx)(x.a,{})}),f.showSettings&&Object(i.jsx)("div",{className:"SettingTable",children:Object(i.jsx)(F,{onChange:function(e){e.planesize!=n.planesize||e.gridsize!=n.gridsize?(console.log("a grid change happened"),r(Object(l.a)(Object(l.a)({},e),{},{gridChange:!0,colorChange:!1}))):e.lightR!=n.lightR||e.lightB!=n.lightB||e.lightG!=n.lightG?(console.log("a scene color change happened"),r(Object(l.a)(Object(l.a)({},e),{},{colorChange:!0,gridChange:!1}))):console.log("no change needed")}})}),f.showAdd&&Object(i.jsx)("div",{className:"AddTable",children:Object(i.jsx)(re,{onChange:function(e){e.primetype==m.primetype&&e.primename==m.primename&&e.positionx==m.positionx&&e.positiony==m.positiony&&e.positionz==m.positionz&&e.scalex==m.scalex&&e.scalez==m.scalez&&e.scaley==m.scaley||h(Object(l.a)(Object(l.a)({},e),{},{addnew:!0}))}})})]})}),Object(i.jsx)("div",{className:"BottomView",children:Object(i.jsx)(W,{settingData:n,setSettings:r,addData:m,setAdd:h})}),Object(i.jsx)("div",{className:"Scaleline",children:Object(i.jsx)(K,{children:n})})]})}var be=t(240),me=t(313),ue=t(311);function he(e){e.preventDefault(),window.open("https://www.muyangguo.xyz/","_blank")}function je(){return Object(i.jsxs)(me.a,{"aria-label":"breadcrumb",children:[Object(i.jsx)(be.a,{color:"textPrimary",children:"Prototype V1"}),Object(i.jsx)(ue.a,{color:"inherit",href:"https://www.muyangguo.xyz",onClick:he,children:"@Muyang Guo"})]})}t(268);var pe=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(de,{}),Object(i.jsx)("div",{className:"Footer",children:Object(i.jsx)(je,{})})]})};s.a.render(Object(i.jsx)(pe,{}),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.c6196681.chunk.js.map