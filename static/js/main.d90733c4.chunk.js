(this.webpackJsonpburger_builder=this.webpackJsonpburger_builder||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports={BreadBottom:"burger_ingredients_BreadBottom__1v6Tg",BreadTop:"burger_ingredients_BreadTop__3mt-8",Seeds1:"burger_ingredients_Seeds1__20q4W",Seeds2:"burger_ingredients_Seeds2__3d7KW",Meat:"burger_ingredients_Meat__1Wkhd",Cheese:"burger_ingredients_Cheese__2EqLk",Salad:"burger_ingredients_Salad__2YC98",Bacon:"burger_ingredients_Bacon__2DTi1"}},,,,function(e,t,a){e.exports={SideDrawer:"side_drawer_SideDrawer__Pm93F",Open:"side_drawer_Open__1hy0C",Close:"side_drawer_Close__2s0jR",Logo:"side_drawer_Logo__38E9I"}},,,function(e,t,a){e.exports={BuildControl:"build_control_BuildControl__f2SOZ",Label:"build_control_Label__1uhKi",Less:"build_control_Less__3dO3U",More:"build_control_More__1qQlP"}},,function(e,t,a){e.exports={Toolbar:"toolbar_Toolbar__6xqBH",Logo:"toolbar_Logo__2QogE",DesktopOnly:"toolbar_DesktopOnly__23-bG"}},function(e,t,a){e.exports={Modal:"modal_Modal__1zgTe",showModal:"modal_showModal__gmHsh",hideModal:"modal_hideModal__2mD4o"}},,function(e,t,a){e.exports={NavigationItem:"navitem_NavigationItem__il4Xk",active:"navitem_active__1WS3z"}},,,,function(e,t,a){e.exports={BuildControls:"build_controls_BuildControls__3Dc2d",OrderButton:"build_controls_OrderButton__22fnG",enable:"build_controls_enable__1b-F8"}},function(e,t,a){e.exports={Button:"button_Button__2uX61",Success:"button_Success__R5wR_",Danger:"button_Danger__2R0xH"}},function(e,t,a){e.exports={Order:"order_Order__1Qy15",span:"order_span__mX4wy"}},,,,,,,,,,,,function(e,t,a){e.exports={content:"layout_content__ragF6"}},function(e,t,a){e.exports={Logo:"logo_Logo__146Z2"}},function(e,t,a){e.exports=a.p+"static/media/logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"navitems_NavigationItems__3SqwF"}},,function(e,t,a){e.exports={DrawerToggle:"menu_DrawerToggle__30Mga"}},function(e,t,a){e.exports={backdrop:"backdrop_backdrop__1Zvs5"}},function(e,t,a){e.exports={Burger:"burger_Burger__20nQK"}},,function(e,t,a){e.exports={Loader:"spinner_Loader__nxN9Q",load1:"spinner_load1__277ro"}},,function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1TzNM"}},function(e,t,a){e.exports={ContactForm:"contatc-form_ContactForm__1PaLW"}},,function(e,t,a){e.exports=a(83)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),c=a.n(o),i=(a(60),a(3)),l=a(4),s=a(6),u=a(5),d=a(41),m=a.n(d),p=function(e){return e.children},h=a(20),_=a.n(h),b=a(42),g=a.n(b),f=a(43),v=a.n(f);function E(){return r.a.createElement("div",{className:g.a.Logo},r.a.createElement("img",{src:v.a}))}var k=a(44),y=a.n(k),O=a(12),C=a(23),S=a.n(C),j=function(e){return r.a.createElement("li",{className:S.a.NavigationItem},r.a.createElement(O.b,{activeClassName:S.a.active,to:e.link},e.children))};function N(){return r.a.createElement("ul",{className:y.a.NavigationItems},r.a.createElement(j,{link:"/burger_builder"},"BURGER"),r.a.createElement(j,{link:"/orders"},"ORDERS"))}var w=a(46),D=a.n(w);function B(e){return r.a.createElement("div",{onClick:e.openClose,className:D.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}function M(e){return r.a.createElement("div",null,r.a.createElement("header",{className:_.a.Toolbar},r.a.createElement(B,{openClose:e.menuHandler}),r.a.createElement("div",{className:_.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:_.a.DesktopOnly},r.a.createElement(N,null))))}var x=a(15),L=a.n(x),I=a(47),P=a.n(I);function H(e){return e.show?r.a.createElement("div",{className:P.a.backdrop,onClick:e.closebackdrop}):null}function T(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(p,null,r.a.createElement(H,{show:e.open,closebackdrop:e.closed}),r.a.createElement("header",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))}var R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawerState:!1},e.sideDrawerCloseHandler=function(){e.setState({sideDrawerState:!1})},e.sideDrawerMenuHandler=function(){e.setState((function(e){return{sideDrawerState:!e.sideDrawerState}}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(T,{open:this.state.sideDrawerState,closed:this.sideDrawerCloseHandler}),r.a.createElement(M,{menuHandler:this.sideDrawerMenuHandler}),r.a.createElement("main",{className:m.a.content},this.props.children))}}]),a}(n.Component),q=a(14),A=a(54),U=a(48),W=a.n(U),F=a(11),Y=a.n(F),Q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Y.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Y.a.BreadTop},r.a.createElement("div",{className:Y.a.Seeds1}),r.a.createElement("div",{className:Y.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Y.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Y.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Y.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Y.a.Bacon});break;default:e=null}return e}}]),a}(n.Component),z=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(A.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(Q,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add some ingredients")),r.a.createElement("div",{className:W.a.Burger},r.a.createElement(Q,{type:"bread-top"}),t,r.a.createElement(Q,{type:"bread-bottom"}))},G=a(27),K=a.n(G),V=a(18),X=a.n(V);function Z(e){return r.a.createElement("div",{className:X.a.BuildControl},r.a.createElement("div",{className:X.a.Label},e.label),r.a.createElement("button",{className:X.a.More,onClick:e.added},"More"),r.a.createElement("button",{className:X.a.Less,onClick:e.remove,disabled:e.disInfo},"Less"))}function J(e){return r.a.createElement("div",{className:K.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}].map((function(t){return r.a.createElement(Z,{key:t.label,label:t.label,added:function(){e.addIngredient(t.type)},remove:function(){e.removeIngredient(t.type)},disInfo:e.disable[t.type]})})),r.a.createElement("button",{className:K.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))}var $=a(21),ee=a.n($),te=function(e){return r.a.createElement(p,null,r.a.createElement(H,{show:e.show,closebackdrop:e.removebackdrop}),r.a.createElement("div",{className:"".concat(ee.a.Modal," ").concat(e.show?ee.a.showModal:ee.a.hideModal)},e.children))},ae=a(28),ne=a.n(ae);function re(e){return r.a.createElement("button",{className:[ne.a.Button,ne.a[e.btntype]].join(" "),onClick:e.clicked},e.children)}var oe=r.a.memo((function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":",e.ingredients[t])}));return r.a.createElement(p,null,r.a.createElement("h1",null,"Your Order Summary"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Do you want to checkout"),r.a.createElement(re,{btntype:"Danger",clicked:e.cancleorder},"DISMISS"),r.a.createElement(re,{btntype:"Success",clicked:e.continueorder},"CONTINUE"))})),ce=a(49),ie=a.n(ce).a.create({baseURL:"https://itsburgerapp.firebaseio.com/"}),le=a(50),se=a.n(le),ue=function(){return r.a.createElement("div",{className:se.a.Loader},"Loading...")},de=function(e,t){return function(a){Object(s.a)(o,a);var n=Object(u.a)(o);function o(){var e;Object(i.a)(this,o);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.errorConfirmed=function(){e.setState({error:null})},e}return Object(l.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqint=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resint=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqint),t.interceptors.response.eject(this.resint)}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(te,{show:this.state.error,removebackdrop:this.errorConfirmed},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(n.Component)},me=a(51),pe=a(1),he=a(52),_e=a.n(he),be=function(e){return r.a.createElement("div",{className:_e.a.CheckoutSummary},r.a.createElement("h1",null,"Hope You Will Like The Taste"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(z,{ingredients:e.ingredients})),r.a.createElement(re,{btntype:"Success",clicked:e.checkoutContinue},"CONTINUE"),r.a.createElement(re,{btntype:"Danger",clicked:e.checkoutCancle},"CANCLE"))},ge=a(53),fe=a.n(ge),ve={bacon:3,cheese:2,meat:4,salad:1},Ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",address:{city:"",postalCode:""},ingredients:null,loading:!1,totalPrice:5},e.placeOrder=function(t){t.preventDefault(),e.setState({loading:!0});var a={ingredient:e.state.ingredients,price:e.state.totalPrice};ie.post("/orders.json",a).then((function(t){e.setState({loading:!1}),e.props.history.push("/burger_builder")})).catch((function(t){e.setState({loading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){Object.keys(this.props.data).length;var e=this.props.data,t=this.state.totalPrice;for(var a in ve)t+=ve[a]*e[a];this.setState({totalPrice:t,ingredients:e})}},{key:"render",value:function(){return r.a.createElement(p,null,this.state.loading?r.a.createElement(ue,null):r.a.createElement("div",{className:fe.a.ContactForm},r.a.createElement("form",{onSubmit:this.placeOrder},r.a.createElement("input",{name:"name",type:"text",placeholder:"Your Name"}),r.a.createElement("input",{name:"email",type:"email",placeholder:"Your Email"}),r.a.createElement("input",{name:"name",type:"text",placeholder:"Your "}),r.a.createElement("input",{name:"postal",type:"text",placeholder:"Your Postal Code"}),r.a.createElement(re,{btntype:"Success"}," PLACE ORDER "))))}}]),a}(n.Component),ke=Object(pe.e)(Ee),ye=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{cheese:1,meat:1,bacon:1,salad:1}},e.checkoutContinueHandler=function(){e.props.history.replace("/checkout/contact-form")},e.checkoutCancleHandler=function(){e.props.history.goBack()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),a={},n=Object(me.a)(t.entries());try{for(n.s();!(e=n.n()).done;){var r=e.value;a[r[0]]=+r[1]}}catch(o){n.e(o)}finally{n.f()}this.setState({ingredients:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(be,{ingredients:this.state.ingredients,checkoutCancle:this.checkoutCancleHandler,checkoutContinue:this.checkoutContinueHandler}),r.a.createElement(pe.a,{path:this.props.match.path+"/contact-form",component:function(){return r.a.createElement(ke,{data:e.state.ingredients})}}))}}]),a}(n.Component),Oe={cheese:2,salad:1,meat:4,bacon:3},Ce=de(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:5,isPurchasable:!1,OrderClicked:!1,loading:!1,error:!1},e.addIngredientsHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(q.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalPrice+Oe[t];e.setState({totalPrice:r,ingredients:n}),e.orderButtonValiadtor(n)},e.removeIngredientsHandler=function(t){var a=e.state.ingredients[t]-1,n=Object(q.a)({},e.state.ingredients);n[t]=a;var r=e.state.totalPrice-Oe[t];e.setState({totalPrice:r,ingredients:n}),e.orderButtonValiadtor(n)},e.orderClcikedHandler=function(){e.setState({OrderClicked:!0})},e.removeModal=function(){e.setState({OrderClicked:!1})},e.continueOrder=function(){var t=[];for(var a in e.state.ingredients)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e.state.ingredients[a]));var n=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+n})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;ie.get("https://itsburgerapp.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"orderButtonValiadtor",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({isPurchasable:t>0})}},{key:"render",value:function(){var e=Object(q.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Ingredients can't load "):r.a.createElement(ue,null);return this.state.ingredients&&(n=r.a.createElement(p,null,r.a.createElement(z,{ingredients:this.state.ingredients}),r.a.createElement(J,{addIngredient:this.addIngredientsHandler,removeIngredient:this.removeIngredientsHandler,disable:e,price:this.state.totalPrice,purchasable:this.state.isPurchasable,ordered:this.orderClcikedHandler})),a=r.a.createElement(oe,{ingredients:this.state.ingredients,cancleorder:this.removeModal,continueorder:this.continueOrder})),this.state.loading&&(a=r.a.createElement(ue,null)),r.a.createElement(p,null,r.a.createElement(te,{show:this.state.OrderClicked,removebackdrop:this.removeModal},a),n)}}]),a}(n.Component),ie),Se=a(29),je=a.n(Se),Ne=function(e){var t=[];for(var a in e.ingredients)t.push({ingredientName:a,quantity:e.ingredients[a]});var n=t.map((function(e){return r.a.createElement("span",{className:je.a.span,key:e.ingredientName},e.ingredientName," (",e.quantity,")")}));return r.a.createElement("div",{className:je.a.Order},r.a.createElement("p",null,"Ingredients: ",n),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,e.price)))},we=de(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;ie.get("/orders.json").then((function(t){var a=[];for(var n in t.data)a.push(Object(q.a)(Object(q.a)({},t.data[n]),{},{id:n}));e.setState({orders:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.orders.map((function(e){return r.a.createElement(Ne,{ingredients:e.ingredient,price:e.price,key:e.id})}))}}]),a}(n.Component),ie),De=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(pe.a,{exact:!0,path:"/burger_builder",component:Ce}),r.a.createElement(pe.a,{path:"/checkout",component:ye}),r.a.createElement(pe.a,{path:"/orders",component:we}))}}]),a}(n.Component),Be=r.a.createElement(O.a,null,r.a.createElement(De,null));c.a.render(Be,document.getElementById("root"))}],[[55,1,2]]]);
//# sourceMappingURL=main.d90733c4.chunk.js.map