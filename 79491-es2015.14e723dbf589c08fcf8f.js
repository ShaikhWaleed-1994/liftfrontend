(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[79491,55e3,31702,30212],{79491:function(t,e,i){"use strict";i.r(e),i.d(e,{CityModule:function(){return D}});var a=i(46700),n=i(55679),o=i(10135),s=i(99046),r=i(83845),l=i(73756),u=i(56410),c=i(31041),d=i(2996),p=i(11520),g=i(44019),m=i(43835),h=i(44689),v=i(30212),f=i(45908),b=i(35366);let Z=(()=>{class t{constructor(t){this.restService=t,this.apiName="Default",this.create=t=>this.restService.request({method:"POST",url:"/api/app/cities",body:t},{apiName:this.apiName}),this.delete=t=>this.restService.request({method:"DELETE",url:`/api/app/cities/${t}`},{apiName:this.apiName}),this.disableCityById=t=>this.restService.request({method:"POST",url:`/api/app/cities/disable-status/${t}`},{apiName:this.apiName}),this.enableCityById=t=>this.restService.request({method:"POST",url:`/api/app/cities/enable-status/${t}`},{apiName:this.apiName}),this.get=t=>this.restService.request({method:"GET",url:`/api/app/cities/${t}`},{apiName:this.apiName}),this.getCountryLookup=t=>this.restService.request({method:"GET",url:"/api/app/cities/country-lookup",params:{filter:t.filter,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:this.apiName}),this.getList=t=>this.restService.request({method:"GET",url:"/api/app/cities",params:{filterText:t.filterText,cityName:t.cityName,cityNameEn:t.cityNameEn,countryId:t.countryId,sorting:t.sorting,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:this.apiName}),this.getWithNavigationProperties=t=>this.restService.request({method:"GET",url:`/api/app/cities/with-navigation-properties/${t}`},{apiName:this.apiName}),this.update=(t,e)=>this.restService.request({method:"PUT",url:`/api/app/cities/${t}`,body:e},{apiName:this.apiName})}}return t.\u0275fac=function(e){return new(e||t)(b.LFG(a.vgb))},t.\u0275prov=b.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var y=i(73545),A=i(23733),q=i(3183),N=i(17647),w=i(55e3),x=i(61116);function T(t,e){if(1&t){const t=b.EpF();b.TgZ(0,"button",34),b.NdJ("click",function(){return b.CHM(t),b.oxw().create()}),b._UZ(1,"i",35),b._uU(2),b.ALo(3,"abpLocalization"),b.qZA()}2&t&&(b.xp6(2),b.hij(" ",b.lcZ(3,1,"::NewCity")," "))}function C(t,e){if(1&t&&(b.TgZ(0,"div",36),b._uU(1),b.ALo(2,"abpLocalization"),b.qZA(),b.TgZ(3,"span",37),b._UZ(4,"is-empty",38),b.qZA()),2&t){const t=e.row,i=b.oxw();b.xp6(1),b.Oqu(b.lcZ(2,2,"::CityName")),b.xp6(3),b.Q6J("value",i.langService.getLocalized(t.city.cityName,t.city.cityNameEn))}}function L(t,e){if(1&t&&b._uU(0),2&t){const t=e.row,i=b.oxw();b.hij(" ",i.langService.getLocalized(null==t.country?null:t.country.countryName,null==t.country?null:t.country.countryNameEn)," ")}}function k(t,e){if(1&t){const t=b.EpF();b.TgZ(0,"div",42),b.NdJ("click",function(){b.CHM(t);const e=b.oxw().row;return b.oxw().update(e)}),b._UZ(1,"i",43),b.TgZ(2,"div"),b._uU(3),b.ALo(4,"abpLocalization"),b.qZA(),b.qZA()}2&t&&(b.xp6(3),b.Oqu(b.lcZ(4,1,"AbpUi::Edit")))}function I(t,e){1&t&&b._UZ(0,"i",47)}function z(t,e){1&t&&b._UZ(0,"i",48)}function S(t,e){if(1&t){const t=b.EpF();b.TgZ(0,"div",44),b.NdJ("click",function(){b.CHM(t);const e=b.oxw().row;return b.oxw().changeStatus(e)}),b.ALo(1,"abpLocalization"),b.YNc(2,I,1,0,"i",45),b.YNc(3,z,1,0,"i",46),b.TgZ(4,"div"),b._uU(5),b.ALo(6,"abpLocalization"),b.qZA(),b.qZA()}if(2&t){const t=b.oxw().row,e=b.oxw();b.Q6J("ngbTooltip",b.lcZ(1,4,t.city.statusGeneralLookupId!=e.ItemStatus.Disabled.valueOf()?"::Active":"::Deactive")),b.xp6(2),b.Q6J("ngIf",t.city.statusGeneralLookupId!=e.ItemStatus.Disabled.valueOf()),b.xp6(1),b.Q6J("ngIf",t.city.statusGeneralLookupId==e.ItemStatus.Disabled.valueOf()),b.xp6(2),b.Oqu(b.lcZ(6,6,"::StatusGeneralLookup"))}}function E(t,e){1&t&&(b.TgZ(0,"div",39),b.YNc(1,k,5,3,"div",40),b.YNc(2,S,7,8,"div",41),b.qZA()),2&t&&(b.xp6(1),b.Q6J("abpPermission","Physic.Cities.Edit"),b.xp6(1),b.Q6J("abpPermission","Physic.Cities.Edit"))}function M(t,e){if(1&t&&(b.TgZ(0,"h3"),b._uU(1),b.ALo(2,"abpLocalization"),b.qZA()),2&t){const t=b.oxw();b.xp6(1),b.hij(" ",b.lcZ(2,1,t.selected?"AbpUi::Edit":"::NewCity")," ")}}function O(t,e){if(1&t){const t=b.EpF();b.TgZ(0,"form",49),b.NdJ("ngSubmit",function(){return b.CHM(t),b.oxw().submitForm()}),b.TgZ(1,"div",50),b.TgZ(2,"div",51),b.TgZ(3,"label",52),b._uU(4),b.ALo(5,"abpLocalization"),b.qZA(),b._UZ(6,"input",53),b.qZA(),b.TgZ(7,"div",51),b.TgZ(8,"label",54),b._uU(9),b.ALo(10,"abpLocalization"),b.qZA(),b._UZ(11,"input",55),b.qZA(),b.TgZ(12,"div",51),b.TgZ(13,"label",56),b._uU(14),b.ALo(15,"abpLocalization"),b.qZA(),b._UZ(16,"sw-lookup-select",57),b.qZA(),b.TgZ(17,"div",58),b.TgZ(18,"button",59,60),b._uU(20),b.ALo(21,"abpLocalization"),b.qZA(),b.TgZ(22,"button",61),b._uU(23),b.ALo(24,"abpLocalization"),b.qZA(),b.qZA(),b.qZA(),b.qZA()}if(2&t){const t=b.oxw();b.Q6J("formGroup",t.form),b.xp6(4),b.hij(" ",b.lcZ(5,8,"::CityName")," "),b.xp6(5),b.hij(" ",b.lcZ(10,10,"::CityNameEn")," "),b.xp6(5),b.hij(" ",b.lcZ(15,12,"::Country")," "),b.xp6(2),b.Q6J("getFn",t.service.getCountryLookup)("lookupNameProp",t.langService.getLookupNameProp()),b.xp6(4),b.hij(" ",b.lcZ(21,14,"AbpUi::Cancel")," "),b.xp6(3),b.hij(" ",b.lcZ(24,16,"AbpUi::Save")," ")}}const U=function(){return{standalone:!0}},F=function(t){return{emptyMessage:t}},J=[{path:"",component:(()=>{class t{constructor(t,e,i,a,n,o,s){this.list=t,this.track=e,this.service=i,this.confirmation=a,this.dateService=n,this.langService=o,this.fb=s,this.data={items:[],totalCount:0},this.filters={},this.isFiltersHidden=!0,this.isModalBusy=!1,this.isModalOpen=!1,this.ItemStatus=f.Ms,this.isLoading=!0}get showFilter(){return this._showFilter}set showFilter(t){this._showFilter=t,this.isFiltersHidden=!t}ngOnInit(){this.list.hookToQuery(t=>{let e=Object.assign({},this.filters);return this.service.getList(Object.assign(Object.assign(Object.assign({},t),e),{filterText:t.filter})).pipe((0,p.x)(()=>this.isLoading=!1))}).subscribe(t=>this.data=t)}clearFilters(){this.filters={},this.list.get()}buildForm(){var t;const{cityName:e,cityNameEn:i,countryId:a}=(null===(t=this.selected)||void 0===t?void 0:t.city)||{};this.form=this.fb.group({cityName:[null!=e?e:null,[v.d.RequiredValidator(),v.d.InvalidCharacterValidator(),c.kI.minLength(1),c.kI.maxLength(250)]],cityNameEn:[null!=i?i:null,[v.d.RequiredValidator(),v.d.InvalidCharacterValidator(),c.kI.minLength(1),c.kI.maxLength(250)]],countryId:[null!=a?a:null,[c.kI.required]]})}hideForm(){this.isModalOpen=!1,this.form.reset()}showForm(){this.buildForm(),this.isModalOpen=!0}submitForm(){if(this.form.invalid)return;const t=this.selected?this.service.update(this.selected.city.id,this.form.value):this.service.create(this.form.value);this.isModalBusy=!0,t.pipe((0,p.x)(()=>this.isModalBusy=!1),(0,g.b)(()=>this.hideForm())).subscribe(this.list.get)}create(){this.selected=void 0,this.showForm()}update(t){this.selected=t,this.showForm()}delete(t){this.confirmation.warn("::DeleteConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,m.h)(t=>t===n.Tv.Status.confirm),(0,h.w)(()=>this.service.delete(t.city.id))).subscribe(this.list.get)}changeStatus(t){this.confirmation.warn(t.city.statusGeneralLookupId===f.Ms.Disabled.valueOf()?"::ActiveConfirmationMessage":"::DeactiveConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,m.h)(t=>t===n.Tv.Status.confirm),(0,h.w)(()=>t.city.statusGeneralLookupId===f.Ms.Disabled.valueOf()?this.service.enableCityById(t.city.id):this.service.disableCityById(t.city.id))).subscribe(this.list.get)}}return t.\u0275fac=function(e){return new(e||t)(b.Y36(a.XNV),b.Y36(a.vR3),b.Y36(Z),b.Y36(n.YP),b.Y36(d.R),b.Y36(y.C),b.Y36(c.qu))},t.\u0275cmp=b.Xpm({type:t,selectors:[["app-city"]],features:[b._Bn([a.XNV,d.R])],decls:63,vars:49,consts:[[1,"row","entry-row","align-items-center"],[1,"col-12","col-sm-auto","content-header-container"],[1,"content-header-title","custom-green"],[1,"col-lg-auto","pl-lg-0"],[1,"col-lg"],[1,"text-lg-right","pt-2"],[1,"custom-control","custom-switch"],["type","checkbox","id","customSwitch1",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customSwitch1",1,"custom-control-label"],[1,"col-auto"],["class","btn btn-success btn-new btn-lg","type","button",3,"click",4,"abpPermission"],["id","advanced-content-filters",3,"ngbCollapse"],[1,"card","mb-4"],[1,"card-body"],[3,"keyup.enter"],["filterForm",""],[1,"row"],[1,"col-md-6","col-sm-auto"],[1,"form-group"],["for","cityNameFilter"],["id","cityNameFilter",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[3,"getFn","lookupNameProp","ngModel","ngModelOptions","ngModelChange"],[1,"col-md-12","align-self-end","mb-3"],[1,"col"],["type","button",1,"btn","btn-outline-primary","btn-block",3,"click"],["type","button",1,"btn","btn-primary","btn-block",3,"click"],["default","",1,"app-dataview",3,"messages","rows","count","list"],["prop","city.cityName",3,"name"],["ngx-datatable-cell-template",""],["prop","country.countryName",3,"name"],[3,"name","maxWidth","width","sortable"],["size","md",3,"busy","visible","visibleChange"],["abpHeader",""],["abpBody",""],["type","button",1,"btn","btn-success","btn-new","btn-lg",3,"click"],["aria-hidden","true",1,"fa","fa-plus","mr-1"],[1,"custom-gray","custom-600"],[1,"custom-black","custom-600"],[3,"value"],[1,"action-items"],["class","action-item",3,"click",4,"abpPermission"],["class","action-item",3,"ngbTooltip","click",4,"abpPermission"],[1,"action-item",3,"click"],[1,"fa","fa-pen","custom-green"],[1,"action-item",3,"ngbTooltip","click"],["class","fas fa-toggle-on custom-green action-boarder text-success",4,"ngIf"],["class","fas fa-toggle-off custom-green action-boarder",4,"ngIf"],[1,"fas","fa-toggle-on","custom-green","action-boarder","text-success"],[1,"fas","fa-toggle-off","custom-green","action-boarder"],["validateOnSubmit","",3,"formGroup","ngSubmit"],[1,"mt-2","fade-in-top","row"],[1,"form-group","col-md-12"],["for","city-city-name"],["id","city-city-name","formControlName","cityName","maxlength","250","minlength","1","autofocus","",1,"form-control"],["for","city-city-name-en"],["id","city-city-name-en","formControlName","cityNameEn","maxlength","250","minlength","1","autofocus","",1,"form-control"],["for","country-country-id"],["formControlName","countryId",3,"getFn","lookupNameProp"],[1,"col-sm-12","modal-footer"],["type","button",1,"pull-left","btn-wide","btn","btn-secondary","btn-cancel"],["abpClose",""],["type","submit",1,"pull-left","btn-wide","btn","btn-success","btn-save"]],template:function(t,e){1&t&&(b.TgZ(0,"div",0),b.TgZ(1,"div",1),b.TgZ(2,"h1",2),b._uU(3),b.ALo(4,"abpLocalization"),b.qZA(),b._UZ(5,"abp-breadcrumb"),b.qZA(),b._UZ(6,"div",3),b.TgZ(7,"div",4),b.TgZ(8,"div",5),b.TgZ(9,"div",6),b.TgZ(10,"input",7),b.NdJ("ngModelChange",function(t){return e.showFilter=t}),b.qZA(),b.TgZ(11,"label",8),b._uU(12),b.ALo(13,"abpLocalization"),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(14,"div",9),b.TgZ(15,"div",5),b.YNc(16,T,4,3,"button",10),b.qZA(),b.qZA(),b.qZA(),b.TgZ(17,"div",11),b.TgZ(18,"div",12),b.TgZ(19,"div",13),b.TgZ(20,"form",14,15),b.NdJ("keyup.enter",function(){return e.list.get()}),b.TgZ(22,"div",16),b.TgZ(23,"div",17),b.TgZ(24,"div",18),b.TgZ(25,"label",19),b._uU(26),b.ALo(27,"abpLocalization"),b.qZA(),b.TgZ(28,"input",20),b.NdJ("ngModelChange",function(t){return e.filters.cityName=t}),b.qZA(),b.qZA(),b.qZA(),b.TgZ(29,"div",17),b.TgZ(30,"div",18),b.TgZ(31,"label"),b._uU(32),b.ALo(33,"abpLocalization"),b.qZA(),b.TgZ(34,"sw-lookup-select",21),b.NdJ("ngModelChange",function(t){return e.filters.countryId=t}),b.qZA(),b.qZA(),b.qZA(),b.TgZ(35,"div",22),b.TgZ(36,"div",16),b._UZ(37,"div",23),b.TgZ(38,"div",9),b.TgZ(39,"button",24),b.NdJ("click",function(){return e.clearFilters()}),b.TgZ(40,"span"),b._uU(41),b.ALo(42,"abpLocalization"),b.qZA(),b.qZA(),b.qZA(),b.TgZ(43,"div",9),b.TgZ(44,"button",25),b.NdJ("click",function(){return e.list.get()}),b.TgZ(45,"span"),b._uU(46),b.ALo(47,"abpLocalization"),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.qZA(),b.TgZ(48,"ngx-datatable",26),b.TgZ(49,"ngx-datatable-column",27),b.ALo(50,"abpLocalization"),b.YNc(51,C,5,4,"ng-template",28),b.qZA(),b.TgZ(52,"ngx-datatable-column",29),b.ALo(53,"abpLocalization"),b.YNc(54,L,1,1,"ng-template",28),b.qZA(),b.TgZ(55,"ngx-datatable-column",30),b.ALo(56,"abpLocalization"),b.YNc(57,E,3,2,"ng-template",28),b.qZA(),b.qZA(),b.TgZ(58,"abp-modal",31),b.NdJ("visibleChange",function(t){return e.isModalOpen=t}),b.YNc(59,M,3,3,"ng-template",null,32,b.W1O),b.YNc(61,O,25,18,"ng-template",null,33,b.W1O),b.qZA()),2&t&&(b.xp6(3),b.Oqu(b.lcZ(4,27,"::Cities")),b.xp6(7),b.Q6J("ngModel",e.showFilter),b.xp6(2),b.Oqu(b.lcZ(13,29,"::SeeAdvancedFilters")),b.xp6(4),b.Q6J("abpPermission","Physic.Cities.Create"),b.xp6(1),b.Q6J("ngbCollapse",e.isFiltersHidden),b.xp6(9),b.hij(" ",b.lcZ(27,31,"::CityName")," "),b.xp6(2),b.Q6J("ngModel",e.filters.cityName)("ngModelOptions",b.DdM(45,U)),b.xp6(4),b.hij(" ",b.lcZ(33,33,"::Country")," "),b.xp6(2),b.Q6J("getFn",e.service.getCountryLookup)("lookupNameProp",e.langService.getLookupNameProp())("ngModel",e.filters.countryId)("ngModelOptions",b.DdM(46,U)),b.xp6(7),b.Oqu(b.lcZ(42,35,"::Clear")),b.xp6(5),b.Oqu(b.lcZ(47,37,"::Search")),b.xp6(2),b.Q6J("messages",b.VKq(47,F,e.isLoading?"<div class=loader><div></div></div>":"<div class=data-empty></div>"))("rows",e.data.items)("count",e.data.totalCount)("list",e.list),b.xp6(1),b.s9C("name",b.lcZ(50,39,"::CityName")),b.xp6(3),b.s9C("name",b.lcZ(53,41,"::Country")),b.xp6(3),b.Q6J("name",b.lcZ(56,43,"AbpUi::Actions"))("maxWidth",200)("width",200)("sortable",!1),b.xp6(3),b.Q6J("busy",e.isModalBusy)("visible",e.isModalOpen))},directives:[n.LI,c.Wl,c.JJ,c.On,A.m,a.l97,o._D,c._Y,c.JL,c.F,c.Fj,q.X,N.nE,n.x7,n.j3,N.UC,N.vq,n.zS,w.K,o._L,x.O5,a.YzZ,c.sg,s.hL,c.u,s.J5,c.nD,c.wO,a.Uqp],pipes:[a.fuE],encapsulation:2}),t})(),canActivate:[a.a1M,a.nG9]}];let _=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({imports:[[u.Bz.forChild(J)],u.Bz]}),t})();var P=i(56137);let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.oAB({type:t}),t.\u0275inj=b.cJS({imports:[[_,a.IR2,n.e2,l.Ck,r.vv,s.h2,o.lQ,o.M,P.m,o.XC]]}),t})()},55e3:function(t,e,i){"use strict";i.d(e,{K:function(){return c}});var a=i(46700),n=i(2996),o=i(35366),s=i(61116);function r(t,e){if(1&t&&(o.TgZ(0,"span",2),o.TgZ(1,"span"),o._uU(2),o.qZA(),o.Hsn(3),o.qZA()),2&t){const t=o.oxw();o.xp6(2),o.Oqu(t.parsedDate)}}function l(t,e){if(1&t&&(o.TgZ(0,"span",3),o._uU(1),o.qZA()),2&t){const t=o.oxw();o.xp6(1),o.hij(" ",t.l("NotFound"),"\n")}}const u=["*"];let c=(()=>{class t{constructor(t,e){this.dateService=e,this.localization=t.get(a.oQ8)}get value(){return this._value}set value(t){this._value=t,this.parsedDate=this.value instanceof Date?this.dateService.parseDate(t):t}l(t){return this.localization.instant("::"+t)}isNotEmpty(){return!!this.value&&("string"!=typeof this.value||this.value.length>0)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.zs3),o.Y36(n.R))},t.\u0275cmp=o.Xpm({type:t,selectors:[["is-empty"]],inputs:{value:"value"},features:[o._Bn([n.R])],ngContentSelectors:u,decls:2,vars:2,consts:[["class","sw-dv-details",4,"ngIf"],["class","sw-dv-details empty-value custom-gray","style","font-size: 12px;font-style: italic;",4,"ngIf"],[1,"sw-dv-details"],[1,"sw-dv-details","empty-value","custom-gray",2,"font-size","12px","font-style","italic"]],template:function(t,e){1&t&&(o.F$t(),o.YNc(0,r,4,1,"span",0),o.YNc(1,l,2,1,"span",1)),2&t&&(o.Q6J("ngIf",e.isNotEmpty()),o.xp6(1),o.Q6J("ngIf",!e.isNotEmpty()))},directives:[s.O5],encapsulation:2}),t})()},3183:function(t,e,i){"use strict";i.d(e,{X:function(){return u}});var a=i(46700),n=i(35366),o=i(31041),s=i(23733),r=i(61116);function l(t,e){if(1&t&&(n.TgZ(0,"option",1),n._uU(1),n.qZA()),2&t){const t=e.$implicit,i=n.oxw();n.Q6J("ngValue",t.id),n.xp6(1),n.Oqu(t[i.lookupNameProp])}}let u=(()=>{class t extends a.ksn{constructor(){super(...arguments),this.lookupNameProp="displayName",this.disabled=!1,this.isLocalizable=!1,this.datas=[],this.pageQuery={maxResultCount:1e3,skipCount:0}}ngOnInit(){this.get()}get(){this.getFn&&this.getFn(this.pageQuery).subscribe(({items:t})=>{this.datas=t})}onFocus(t){}}return t.\u0275fac=function(){let e;return function(i){return(e||(e=n.n5z(t)))(i||t)}}(),t.\u0275cmp=n.Xpm({type:t,selectors:[["sw-lookup-select"]],inputs:{getFn:"getFn",lookupNameProp:"lookupNameProp",disabled:"disabled",isLocalizable:"isLocalizable",datas:"datas"},features:[n._Bn([{provide:o.JU,useExisting:(0,n.Gpc)(()=>t),multi:!0}]),n.qOj],decls:3,vars:3,consts:[[1,"custom-select","form-control",3,"disabled","ngModel","ngModelChange","focus"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(n.TgZ(0,"select",0),n.NdJ("ngModelChange",function(t){return e.value=t})("focus",function(t){return e.onFocus(t)}),n._UZ(1,"option",1),n.YNc(2,l,2,2,"option",2),n.qZA()),2&t&&(n.Q6J("disabled",e.disabled)("ngModel",e.value),n.xp6(2),n.Q6J("ngForOf",e.datas))},directives:[o.EJ,s.m,o.JJ,o.On,o.YN,o.Kr,r.sg],encapsulation:2}),t})()},30212:function(t,e,i){"use strict";i.d(e,{d:function(){return s}});var a=i(31041),n=i(29609);class o{isNationalNumber(t){if(null==t||void 0===t||""===t)return!0;if(10!==t.length)return!1;let e;e=t;let i=new Array(10);for(let s=0;s<e.length;s++)i[s]=+e[s];let a=0;for(let s=0;s<i.length-1;s++)if(s%2!=0)a+=i[s];else{let t=(2*i[s]).toString(),e=new Array(t.length),n=0;for(let i=0;i<e.length;i++)e[i]=+t[i],n+=e[i];a+=n}let n=a.toString(),o=+n[n.length-1];return 0===o&&0===i[9]||10-o===i[9]}}class s{static PasswordComplexityValidator(t,e,i,a,n,o){return s=>{const r=s.value;if(null==r||0===r.length)return null;let l=null;return t&&r&&!/[0-9]/.test(r)&&(l=l||{},l.requireDigit=!0),e&&r&&!/[A-Z]/.test(r)&&(l=l||{},l.requireUppercase=!0),i&&r&&!/[a-z]/.test(r)&&(l=l||{},l.requireLowercase=!0),a&&r&&r.length<a&&(l=l||{},l.requiredLength=!0),n&&r&&/^[0-9a-zA-Z]+$/.test(r)&&(l=l||{},l.requireNonAlphanumeric=!0),r.length<o&&(l=l||{}),null!==l?{passwordComplexity:{value:l}}:null}}static NationalIdValidator(){return t=>!1===(new o).isNationalNumber(t.value)?{nationalId:!0}:null}static isIntegerValidator(){return t=>void 0===t.value||null==t.value?null:s.InIntegerCheckerInvalid(t.value)||(t.value||0).toString().length>10?{integerNumber:!0}:null}static InIntegerCheckerInvalid(t){if(!t)return;let e=parseFloat(t)==parseInt(t)?+t:NaN;return e!=e}static RequiredValidator(){return t=>null==t.value||""===t.value.toString().trim()?{required:!0}:a.kI.required(t)}static RequiredValidatorEditor(){return t=>null==t.value||""===t.value.replace(/(<([^>]+)>)/gi,"").toString().trim()?{required:!0}:a.kI.required(t)}static EqualValidator(t){return e=>{const i=t;if(!i)return null;const a=e.value,n=i.value;return a||n?a!==n?{validateEqual:!0}:null:(i.errors&&delete i.errors.validateEqual,i.errors&&!Object.keys(i.errors).length&&i.setErrors(null),null)}}static GreaterThanValidator(t){return e=>{const i=t;if(!i)return null;const a=e.value,n=i.value;return a&&n?a<=n?{GreaterThanValidator:!0}:null:(i.errors&&delete i.errors.GreaterThanValidator,i.errors&&!Object.keys(i.errors).length&&i.setErrors(null),null)}}static NotEqualValidator(t){return e=>{const i=t;if(!i)return null;const a=e.value,n=i.value;return a||n?a===n?{validateNotEqual:!0}:null:(i.errors&&delete i.errors.validateNotEqual,i.errors&&!Object.keys(i.errors).length&&i.setErrors(null),null)}}static RegExValidator(t){return e=>t.test(e.value)?null:{forbiddenReg:{value:e.value}}}static MobileValidator(){return t=>null==t.value||void 0===t.value||""===t.value||new RegExp("^(05)(5|0|3|6|4|9|1|8|7)([0-9]{7})$").test(t.value)?null:{invalidMobile:{value:t.value}}}static UrlValidator(){return t=>{const e=new RegExp("(https?://(?:www.|(?!www))[a-zA-Z0-9] [a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9] [a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})","gmis").test(t.value);return t.value&&""!=t.value?e?null:{invalidUrl:{value:t.value}}:null}}static EmailValidator(){return t=>null==t.value||void 0===t.value||""===t.value||new RegExp("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}").test(t.value)?null:{invalidEmail:{value:t.value}}}static InvalidCharacterValidator(){return t=>{let e=Array.from("!$%&*<>[]{]\u2018\u201c;/?+|^#"),i="";return null!=t.value&&e.forEach(e=>{String(t.value).indexOf(e)>=0&&(i+=e||{})}),i.length>0?{InvalidCharacter:i}:null}}static UniqueValidator(t,e){return i=>new Promise((a,n)=>{e.call(t,i.value).subscribe(t=>{a(!0===t?{notUnique:"true"}:null)})})}static UniqueValidatorExpectCurrent(t,e,i){return a=>new Promise((n,o)=>{e.call(t,a.value,i).subscribe(t=>{n(!0===t?{notUnique:"true"}:null)})})}static DateAfterValidator(t){return e=>{if(!t||!e.value)return null;let i,o=e.value;if(t instanceof a.TO){if(i=t.value,!o&&!i)return t.errors&&delete t.errors.validateEqual,t.errors&&!Object.keys(t.errors).length&&t.setErrors(null),null}else i=t;if(o instanceof Date&&i instanceof Date){if(o=new Date(o.toDateString()),i=new Date(i.toDateString()),o<=i)return{validateDateAfter:!0}}else if((0,n.isMoment)(o)&&(0,n.isMoment)(i)){if(n(i).isAfter(o,"day"))return{validateDateAfter:!0}}else if(o<=i)return{validateDateAfter:!0};return null}}}}}]);