(this.webpackJsonpburger_builder=this.webpackJsonpburger_builder||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"burger_ingredients_BreadBottom__1v6Tg",BreadTop:"burger_ingredients_BreadTop__3mt-8",Seeds1:"burger_ingredients_Seeds1__20q4W",Seeds2:"burger_ingredients_Seeds2__3d7KW",Meat:"burger_ingredients_Meat__1Wkhd",Cheese:"burger_ingredients_Cheese__2EqLk",Salad:"burger_ingredients_Salad__2YC98",Bacon:"burger_ingredients_Bacon__2DTi1"}},function(e,t,a){e.exports={SideDrawer:"side_drawer_SideDrawer__Pm93F",Open:"side_drawer_Open__1hy0C",Close:"side_drawer_Close__2s0jR",Logo:"side_drawer_Logo__38E9I"}},function(e,t,a){e.exports={BuildControl:"build_control_BuildControl__f2SOZ",Label:"build_control_Label__1uhKi",Less:"build_control_Less__3dO3U",More:"build_control_More__1qQlP"}},function(e,t,a){e.exports={Toolbar:"toolbar_Toolbar__6xqBH",Logo:"toolbar_Logo__2QogE",DesktopOnly:"toolbar_DesktopOnly__23-bG"}},function(e,t,a){e.exports={Modal:"modal_Modal__1zgTe",showModal:"modal_showModal__gmHsh",hideModal:"modal_hideModal__2mD4o"}},,function(e,t,a){e.exports={NavigationItem:"navitem_NavigationItem__il4Xk",active:"navitem_active__1WS3z"}},function(e,t,a){e.exports={BuildControls:"build_controls_BuildControls__3Dc2d",OrderButton:"build_controls_OrderButton__22fnG",enable:"build_controls_enable__1b-F8"}},function(e,t,a){e.exports={Button:"button_Button__2uX61",Success:"button_Success__R5wR_",Danger:"button_Danger__2R0xH"}},,,,,,,,,,,function(e,t,a){e.exports={content:"layout_content__ragF6"}},function(e,t,a){e.exports={Logo:"logo_Logo__146Z2"}},function(e,t,a){e.exports=a.p+"static/media/logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"navitems_NavigationItems__3SqwF"}},function(e,t,a){e.exports={DrawerToggle:"menu_DrawerToggle__30Mga"}},function(e,t,a){e.exports={backdrop:"backdrop_backdrop__1Zvs5"}},function(e,t,a){e.exports={Burger:"burger_Burger__20nQK"}},,function(e,t,a){e.exports={Loader:"spinner_Loader__nxN9Q",load1:"spinner_load1__277ro"}},,function(e,t,a){e.exports=a(58)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),i=(a(40),a(2)),c=a(3),s=a(5),d=a(4),u=a(25),m=a.n(u),_=function(e){return e.children},b=a(9),p=a.n(b),g=a(26),h=a.n(g),v=a(27),f=a.n(v);function E(){return r.a.createElement("div",{className:h.a.Logo},r.a.createElement("img",{src:f.a}))}var k=a(28),O=a.n(k),y=a(12),S=a.n(y);function C(e){return r.a.createElement("li",{className:S.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?S.a.active:null},e.children))}function w(){return r.a.createElement("ul",{className:O.a.NavigationItems},r.a.createElement(C,{link:"/",active:!0},"BURGER"),r.a.createElement(C,{link:"/"},"CHECKOUT"))}var N=a(29),j=a.n(N);function B(e){return r.a.createElement("div",{onClick:e.openClose,className:j.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function D(e){return r.a.createElement("div",null,r.a.createElement("header",{className:p.a.Toolbar},r.a.createElement(B,{openClose:e.menuHandler}),r.a.createElement("div",{className:p.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:p.a.DesktopOnly},r.a.createElement(w,null))))}var M=a(7),x=a.n(M),I=a(30),L=a.n(I);function H(e){return e.show?r.a.createElement("div",{className:L.a.backdrop,onClick:e.closebackdrop}):null}function T(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),r.a.createElement(_,null,r.a.createElement(H,{show:e.open,closebackdrop:e.closed}),r.a.createElement("header",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(w,null))))}var P=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawerState:!1},e.sideDrawerCloseHandler=function(){e.setState({sideDrawerState:!1})},e.sideDrawerMenuHandler=function(){e.setState((function(e){return{sideDrawerState:!e.sideDrawerState}}))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(T,{open:this.state.sideDrawerState,closed:this.sideDrawerCloseHandler}),r.a.createElement(D,{menuHandler:this.sideDrawerMenuHandler}),r.a.createElement("main",{className:m.a.content},this.props.children))}}]),a}(n.Component),q=a(11),R=a(34),W=a(31),U=a.n(W),z=a(6),F=a.n(z),A=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:F.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:F.a.BreadTop},r.a.createElement("div",{className:F.a.Seeds1}),r.a.createElement("div",{className:F.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:F.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:F.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:F.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:F.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),K=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(R.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(A,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add some ingredients")),r.a.createElement("div",{className:U.a.Burger},r.a.createElement(A,{type:"bread-top"}),t,r.a.createElement(A,{type:"bread-bottom"}))},Q=a(13),G=a.n(Q),V=a(8),Z=a.n(V);function J(e){return r.a.createElement("div",{className:Z.a.BuildControl},r.a.createElement("div",{className:Z.a.Label},e.label),r.a.createElement("button",{className:Z.a.More,onClick:e.added},"More"),r.a.createElement("button",{className:Z.a.Less,onClick:e.remove,disabled:e.disInfo},"Less"))}function X(e){return r.a.createElement("div",{className:G.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}].map((function(t){return r.a.createElement(J,{key:t.label,label:t.label,added:function(){e.addIngredient(t.type)},remove:function(){e.removeIngredient(t.type)},disInfo:e.disable[t.type]})})),r.a.createElement("button",{className:G.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))}var Y=a(10),$=a.n(Y),ee=function(e){return r.a.createElement(_,null,r.a.createElement(H,{show:e.show,closebackdrop:e.removebackdrop}),r.a.createElement("div",{className:"".concat($.a.Modal," ").concat(e.show?$.a.showModal:$.a.hideModal)},e.children))},te=a(14),ae=a.n(te);function ne(e){return r.a.createElement("button",{className:[ae.a.Button,ae.a[e.btntype]].join(" "),onClick:e.clicked},e.children)}var re=r.a.memo((function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.ingredients[t])}));return r.a.createElement(_,null,r.a.createElement("h1",null,"Your Order Summary"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Do you want to checkout"),r.a.createElement(ne,{btntype:"Danger",clicked:e.cancleorder},"DISMISS"),r.a.createElement(ne,{btntype:"Success",clicked:e.continueorder},"CONTINUE"))})),oe=a(32),le=a.n(oe).a.create({baseURL:"https://itsburgerapp.firebaseio.com/"}),ie=a(33),ce=a.n(ie),se=function(){return r.a.createElement("div",{className:ce.a.Loader},"Loading...")},de={cheese:2,salad:1,meat:4,bacon:3},ue=function(e,t){return function(a){Object(s.a)(o,a);var n=Object(d.a)(o);function o(){var e;Object(i.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.errorConfirmed=function(){e.setState({error:null})},e}return Object(c.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqint=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resint=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqint),t.interceptors.response.eject(this.resint)}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(ee,{show:this.state.error,removebackdrop:this.errorConfirmed},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(n.Component)}(function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:5,isPurchasable:!1,OrderClicked:!1,loading:!1,error:!1},e.addIngredientsHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(q.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalPrice+de[t];e.setState({totalPrice:r,ingredients:n}),e.orderButtonValiadtor(n)},e.removeIngredientsHandler=function(t){var a=e.state.ingredients[t]-1,n=Object(q.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalPrice-de[t];e.setState({totalPrice:r,ingredients:n}),e.orderButtonValiadtor(n)},e.orderClcikedHandler=function(){e.setState({OrderClicked:!0})},e.removeModal=function(){e.setState({OrderClicked:!1})},e.continueOrder=function(){e.setState({loading:!0});var t={ingredient:e.state.ingredients,price:e.state.totalPrice,customerData:{name:"shahroz",address:"shadman town, karachi",email:"shahrozahmed286@gmail.com"}};le.post("/orders.json",t).then((function(t){e.setState({loading:!1,OrderClicked:!1})})).catch((function(t){e.setState({loading:!1,OrderClicked:!1})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;le.get("https://itsburgerapp.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"orderButtonValiadtor",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({isPurchasable:t>0})}},{key:"render",value:function(){var e=Object(q.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Ingredients can't load "):r.a.createElement(se,null);return this.state.ingredients&&(n=r.a.createElement(_,null,r.a.createElement(K,{ingredients:this.state.ingredients}),r.a.createElement(X,{addIngredient:this.addIngredientsHandler,removeIngredient:this.removeIngredientsHandler,disable:e,price:this.state.totalPrice,purchasable:this.state.isPurchasable,ordered:this.orderClcikedHandler})),a=r.a.createElement(re,{ingredients:this.state.ingredients,cancleorder:this.removeModal,continueorder:this.continueOrder})),this.state.loading&&(a=r.a.createElement(se,null)),r.a.createElement(_,null,r.a.createElement(ee,{show:this.state.OrderClicked,removebackdrop:this.removeModal},a),n)}}]),a}(n.Component),le),me=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(ue,null))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.a0867ab2.chunk.js.map