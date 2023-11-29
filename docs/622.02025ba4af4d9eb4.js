"use strict";(self.webpackChunkgeneral_house_service=self.webpackChunkgeneral_house_service||[]).push([[622],{9622:(y,p,l)=>{l.r(p),l.d(p,{CheckoutModule:()=>q});var c=l(6895),u=l(4298),i=l(4006),a=l(6148),e=l(4650),m=l(4617),g=l(529);let Z=(()=>{class o{constructor(t){this.HttpClient=t}get(){return this.HttpClient.get("client_location")}postCreate(t){const n=new FormData;return n.append("client_id",t.client_id),n.append("lat",t.lat),n.append("long",t.long),n.append("phone_number",t.phone_number),n.append("location_type",t.location_type),n.append("street",t.street),n.append("building",t.building),n.append("floor",t.floor),n.append("floor",t.floor),t.additional_instructions&&n.append("additional_instructions",t.additional_instructions),t.additional_instructions&&n.append("telephone",t.telephone),this.HttpClient.post("client/register",n)}postUpdate(t){const n=new FormData;return n.append("client_id",t.client_id),n.append("lat",t.lat),n.append("long",t.long),n.append("phone_number",t.phone_number),n.append("location_type",t.location_type),n.append("street",t.street),n.append("building",t.building),n.append("floor",t.floor),n.append("floor",t.floor),n.append("additional_instructions",t.additional_instructions),n.append("telephone",t.telephone),this.HttpClient.post("client/register",n)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(g.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var _=l(577),s=l(1269);function h(o,r){1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2," t-shirt black (ironing) "),e.qZA(),e.TgZ(3,"td"),e._uU(4," 1 "),e.qZA(),e.TgZ(5,"td",50),e._uU(6,"300 AUD"),e.qZA(),e.TgZ(7,"td"),e._uU(8," 300 AUD "),e.qZA()())}function v(o,r){if(1&o&&e._UZ(0,"agm-marker",87),2&o){const t=r.$implicit;e.Q6J("latitude",t.lat)("longitude",t.lng)}}function f(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",84)(1,"agm-map",85),e.NdJ("mapClick",function(d){e.CHM(t);const C=e.oxw(2);return e.KtG(C.mapClick(d))}),e.YNc(2,v,1,2,"agm-marker",86),e.qZA()()}if(2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("latitude",30.04442)("longitude",31.235712),e.xp6(1),e.Q6J("ngForOf",t.markers)}}function T(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",51)(1,"div",52)(2,"div",53)(3,"div",54)(4,"h2",55),e._uU(5,"Add New Address"),e.qZA(),e.TgZ(6,"button",56),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.openModal=!1)}),e.qZA()(),e.TgZ(7,"div",57)(8,"div",22)(9,"div",58)(10,"h4",59),e._uU(11,"Contact Information"),e.qZA(),e.TgZ(12,"div",60),e._UZ(13,"input",61),e.qZA()(),e.TgZ(14,"div",62)(15,"h4",63),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.Map())}),e._uU(16,"Select Location From Map"),e.qZA(),e.TgZ(17,"div",60),e._UZ(18,"input",64),e.qZA()()(),e.TgZ(19,"div",22)(20,"div",65)(21,"h4",59),e._uU(22,"Delivery Address"),e.qZA()(),e.TgZ(23,"div",66)(24,"div",67)(25,"div",68),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.locationType("apartment"))}),e._UZ(26,"img",69),e.TgZ(27,"p",70),e._uU(28,"Apartment"),e.qZA()(),e.TgZ(29,"div",68),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.locationType("house"))}),e._UZ(30,"img",71),e.TgZ(31,"p",70),e._uU(32,"House"),e.qZA()(),e.TgZ(33,"div",68),e.NdJ("click",function(){e.CHM(t);const d=e.oxw();return e.KtG(d.locationType("office"))}),e._UZ(34,"img",72),e.TgZ(35,"p",70),e._uU(36,"Office"),e.qZA()()()(),e.TgZ(37,"div",66)(38,"div",73),e._UZ(39,"input",74),e.qZA()(),e.TgZ(40,"div",66)(41,"div",73),e._UZ(42,"input",75),e.qZA()(),e.TgZ(43,"div",66)(44,"div",73),e._UZ(45,"input",76),e.qZA()(),e.TgZ(46,"div",66)(47,"div",73),e._UZ(48,"input",77),e.qZA()(),e.TgZ(49,"div",66)(50,"div",73),e._UZ(51,"input",78),e.qZA()(),e.TgZ(52,"div",66)(53,"div",73),e._UZ(54,"input",79),e.qZA()(),e.TgZ(55,"div",80)(56,"button",81),e._uU(57,"Save the address"),e.qZA()(),e.YNc(58,f,3,3,"div",82),e.qZA()(),e._UZ(59,"div",83),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(58),e.Q6J("ngIf",t.showMap)}}const b=function(){return[]},A=function(){return["/orders/order-details"]},U=[{path:"",component:(()=>{class o{constructor(t,n){this.LocalStorageService=t,this.ClientLocation=n,this.showMap=!1,this.openModal=!1,this.markers=[],this.clientLocation=new i.cw({client_id:new i.NI(null,[i.kI.required]),lat:new i.NI(null,[i.kI.required]),long:new i.NI(null,[i.kI.required]),phone_number:new i.NI(null,[i.kI.required]),location_type:new i.NI(null,[i.kI.required]),street:new i.NI(null,[i.kI.required]),building:new i.NI(null,[i.kI.required]),floor:new i.NI(null,[i.kI.required]),apartment:new i.NI(null,[i.kI.required]),detailed_address:new i.NI(null,[i.kI.required]),additional_instructions:new i.NI(null,[i.kI.required]),telephone:new i.NI(null,[i.kI.required])})}ngOnInit(){console.log(JSON.parse(localStorage.getItem("clientToken"))),this.ClientLocation.get()}close(){this.openModal=!1}Map(){this.showMap=!this.showMap}mapClick(t){this.markers.push(t?.coords)}locationType(t){console.log(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.n),e.Y36(Z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout"]],decls:141,vars:5,consts:[[1,"pt-lg","pb-lg","bg-white"],[1,"container"],[1,"d-flex","justify-content-between","border-bottom"],["href","javascript:void(0)"],[1,"fs-md","text-success"],[1,"d-flex","justify-content-between","mt-sm","mb-md"],[1,"fs-md","fw-medium"],[1,"appTable"],[2,"background-color","#F5EFEF"],["scope","col"],[4,"ngFor","ngForOf"],[1,"border-bottom","mt-md"],[1,"d-flex","justify-content-between"],[1,"btn","btn-link","mb-xs","text-decoration-underline","text-success","btn-md",3,"click"],[1,"mb-xs","mt-xs","fs-sm"],[1,"payment","mt-md"],[1,"mb-xs"],[1,"bg-light","p-md"],[1,"fw-medium"],[1,"d-flex"],["type","text","placeholder","Enter promo code",1,"form-control","rounded-3","form-control-light","me-xxs"],[1,"btn","btn-outline-primary"],[1,"row"],[1,"col-md-6"],[1,"mb-xs","mt-md"],[1,"mt-sm"],[1,"d-block","p-xs","w-100","cursor"],[1,"form-check"],["type","radio","name","payment","checked","",1,"form-check-input"],[1,"form-check-label","fs-sm"],["src","assets/icons/credit-card.svg",1,"fs-md","ms-xs"],[1,"d-block","p-xs","w-100","cursor","mt-sm"],["type","radio","name","payment",1,"form-check-input"],["src","assets/icons/money.svg",1,"fs-md","ms-xs"],[1,"col"],[1,"mb-xs","mt-md","me-auto"],[1,"col-lg-6","col-md-6","col-sm-12"],["aria-label","Default select example",1,"form-select","rounded-3","p-sm","mb-md"],["selected","","disabled",""],["value","1"],["value","2"],["value","3"],[1,"row","m-0"],[1,"col-md-6","p-0"],["src","../../../assets/icons/plus.png","alt",""],[1,"col-md-12"],["placeholder","Write Your Instruction","rows","5",1,"form-control","rounded-3"],[1,"mt-sm","text-center"],[1,"btn","btn-light-success","btn-lg",3,"routerLink"],["class","modal fade d-block mt-sm","tabindex","-1",4,"ngIf"],[1,"fw-medium","fs-xs"],["tabindex","-1",1,"modal","fade","d-block","mt-sm"],[1,"modal-dialog","modal-lg","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"col-lg-6"],[1,"underLine"],[1,"input-group","mb-3"],["type","text","placeholder","Phone Number | +20","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm","mb-md"],[1,"col-lg-6","text-end"],[2,"color","#3777A2","cursor","pointer",3,"click"],["type","text","placeholder","Land Line (optional)","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm","mb-md"],[1,"col-lg-12","col-md-12","col-sm-12"],[1,"col-lg-6","mb-sm"],[1,"row","d-flex","justify-content-around","align-items-center"],[1,"icon","d-flex","flex-column","justify-content-center","align-items-center",3,"click"],["src","../../../assets/icons/apartment.png","alt","png",1,"w-75"],[1,"m-0"],["src","../../../assets/icons/garage.png","alt","png",1,"w-75"],["src","../../../assets/icons/network.png","alt","png",1,"w-75"],[1,"input-group"],["type","text","placeholder","Detailed address","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm"],["type","text","placeholder","street name","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm"],["type","text","placeholder","Building","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm"],["type","text","placeholder","floor","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm"],["type","text","placeholder","Apartment number","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm"],["type","text","placeholder","Additional instructions (optional)","aria-label","Sizing example input","aria-describedby","inputGroup-sizing-default",1,"form-control","rounded-3","p-sm"],[1,"col-lg-6","mb-sm","text-center"],["type","submit",1,"btn","btn-success","w-100","h-100"],["class","col-lg-12 mt-lg",4,"ngIf"],[1,"modal-footer"],[1,"col-lg-12","mt-lg"],[3,"latitude","longitude","mapClick"],[3,"latitude","longitude",4,"ngFor","ngForOf"],[3,"latitude","longitude"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),e._uU(4,"Order Details"),e.qZA(),e.TgZ(5,"a",3)(6,"span",4),e._uU(7,"Edit order"),e.qZA()()(),e.TgZ(8,"div",5)(9,"h4",6),e._uU(10,"General House Service Company"),e.qZA()(),e.TgZ(11,"table",7)(12,"thead")(13,"tr",8)(14,"th",9),e._uU(15,"Name"),e.qZA(),e.TgZ(16,"th",9),e._uU(17,"Qty"),e.qZA(),e.TgZ(18,"th",9),e._uU(19,"Price"),e.qZA(),e.TgZ(20,"th",9),e._uU(21,"Total"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,h,9,0,"tr",10),e.qZA()(),e.TgZ(24,"div",11)(25,"div",12)(26,"h3"),e._uU(27,"Address"),e.qZA(),e.TgZ(28,"button",13),e.NdJ("click",function(){return n.openModal=!0}),e._uU(29,"+Add New Address"),e.qZA()(),e.TgZ(30,"p",14),e._uU(31,"Please add a new address in Maadi to process the request"),e.qZA()(),e.TgZ(32,"div",15)(33,"h3",16),e._uU(34,"Payment Details"),e.qZA(),e.TgZ(35,"div",17)(36,"div",12)(37,"h5",18),e._uU(38,"do you have promo code ?"),e.qZA(),e.TgZ(39,"div",19),e._UZ(40,"input",20),e.TgZ(41,"button",21),e._uU(42,"Apply"),e.qZA()()()()(),e.TgZ(43,"div",22)(44,"div",23)(45,"h3",24),e._uU(46,"Total order :"),e.qZA(),e.TgZ(47,"div",25)(48,"label",26)(49,"div",27),e._UZ(50,"input",28),e.TgZ(51,"span",29),e._uU(52,"Credit Card"),e.qZA(),e._UZ(53,"svg-icon",30),e.qZA()(),e.TgZ(54,"label",31)(55,"div",27),e._UZ(56,"input",32),e.TgZ(57,"span",29),e._uU(58,"Cach"),e.qZA(),e._UZ(59,"svg-icon",33),e.qZA()()()(),e._UZ(60,"div",23),e.qZA(),e._UZ(61,"hr"),e.TgZ(62,"div",22)(63,"div",34)(64,"h3",35),e._uU(65,"Delivery Details :"),e.qZA(),e.TgZ(66,"div",22)(67,"div",36)(68,"select",37)(69,"option",38),e._uU(70,"Pickup Date"),e.qZA(),e.TgZ(71,"option",39),e._uU(72,"One"),e.qZA(),e.TgZ(73,"option",40),e._uU(74,"Two"),e.qZA(),e.TgZ(75,"option",41),e._uU(76,"Three"),e.qZA()()(),e.TgZ(77,"div",36)(78,"select",37)(79,"option",38),e._uU(80,"Pickup Date"),e.qZA(),e.TgZ(81,"option",39),e._uU(82,"One"),e.qZA(),e.TgZ(83,"option",40),e._uU(84,"Two"),e.qZA(),e.TgZ(85,"option",41),e._uU(86,"Three"),e.qZA()()()(),e.TgZ(87,"div",22)(88,"div",36)(89,"select",37)(90,"option",38),e._uU(91,"Transportation Period"),e.qZA(),e.TgZ(92,"option",39),e._uU(93,"One"),e.qZA(),e.TgZ(94,"option",40),e._uU(95,"Two"),e.qZA(),e.TgZ(96,"option",41),e._uU(97,"Three"),e.qZA()()(),e.TgZ(98,"div",36)(99,"select",37)(100,"option",38),e._uU(101,"Transportation Period"),e.qZA(),e.TgZ(102,"option",39),e._uU(103,"One"),e.qZA(),e.TgZ(104,"option",40),e._uU(105,"Two"),e.qZA(),e.TgZ(106,"option",41),e._uU(107,"Three"),e.qZA()()()(),e.TgZ(108,"div",22)(109,"div",36)(110,"select",37)(111,"option",38),e._uU(112,"Pickup Driver"),e.qZA(),e.TgZ(113,"option",39),e._uU(114,"One"),e.qZA(),e.TgZ(115,"option",40),e._uU(116,"Two"),e.qZA(),e.TgZ(117,"option",41),e._uU(118,"Three"),e.qZA()()(),e.TgZ(119,"div",36)(120,"select",37)(121,"option",38),e._uU(122,"Delivery Driver"),e.qZA(),e.TgZ(123,"option",39),e._uU(124,"One"),e.qZA(),e.TgZ(125,"option",40),e._uU(126,"Two"),e.qZA(),e.TgZ(127,"option",41),e._uU(128,"Three"),e.qZA()()()()()(),e.TgZ(129,"div",22)(130,"div",42)(131,"div",43)(132,"h3",35),e._uU(133,"Special Instructions "),e._UZ(134,"img",44),e.qZA()(),e.TgZ(135,"div",45),e._UZ(136,"textarea",46),e.qZA()()(),e.TgZ(137,"div",47)(138,"button",48),e._uU(139,"Confirm Order"),e.qZA()()()(),e.YNc(140,T,60,1,"div",49)),2&t&&(e.xp6(23),e.Q6J("ngForOf",e.DdM(3,b).constructor(4)),e.xp6(115),e.Q6J("routerLink",e.DdM(4,A)),e.xp6(2),e.Q6J("ngIf",n.openModal))},dependencies:[c.sg,c.O5,a.rH,_.bk,i.YN,i.Kr,s.SA,s.pt],styles:["label[_ngcontent-%COMP%]{border:1px solid}.underLine[_ngcontent-%COMP%]{text-decoration:underline}.icon[_ngcontent-%COMP%]{width:80px;height:80px;border:1px solid black;border-radius:4px;cursor:pointer}agm-map[_ngcontent-%COMP%]{height:300px}"]}),o})()}];let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[a.Bz.forChild(U),a.Bz]}),o})();var x=l(2340);let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,k,u.m,i.u5,i.UX,s.su.forRoot({apiKey:x.N.googleMapsAPiKey,libraries:["places"]})]}),o})()}}]);