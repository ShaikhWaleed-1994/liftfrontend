!function(){function t(e,i){return(t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(e,i)}function e(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,a=n(t);if(e){var r=n(this).constructor;o=Reflect.construct(a,arguments,r)}else o=a.apply(this,arguments);return i(this,o)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[56484,55e3],{56484:function(t,e,i){"use strict";i.r(e),i.d(e,{NotificationModule:function(){return E}});var n=i(46700),a=i(55679),s=i(10135),l=i(99046),u=i(83845),f=i(73756),p=i(56410),d=i(2996),h=i(47701),g=i(11520),m=i(44019),v=i(43835),b=i(44689),Z=i(35366),y=i(37527),A=i(31041),x=i(92338),w=i(23733),T=i(17647),k=i(61116),q=i(55e3),L=i(40739),N=i(3183);function _(t,e){if(1&t){var i=Z.EpF();Z.TgZ(0,"button",19),Z.NdJ("click",function(){return Z.CHM(i),Z.oxw().create()}),Z._UZ(1,"i",20),Z._uU(2),Z.ALo(3,"abpLocalization"),Z.qZA()}2&t&&(Z.xp6(2),Z.hij(" ",Z.lcZ(3,1,"::NewNotification")," "))}function U(t,e){if(1&t&&Z._UZ(0,"is-empty",23),2&t){var i=Z.oxw().row;Z.Q6J("value",i.notificationTextAr)}}function C(t,e){if(1&t&&Z._UZ(0,"is-empty",23),2&t){var i=Z.oxw().row;Z.Q6J("value",i.notificationTextEn)}}function O(t,e){if(1&t&&(Z.TgZ(0,"div",21),Z.YNc(1,U,1,1,"is-empty",22),Z.YNc(2,C,1,1,"is-empty",22),Z.qZA()),2&t){var i=Z.oxw();Z.xp6(1),Z.Q6J("ngIf",i.isArabic),Z.xp6(1),Z.Q6J("ngIf",!i.isArabic)}}function F(t,e){if(1&t&&(Z.TgZ(0,"h3"),Z._uU(1),Z.ALo(2,"abpLocalization"),Z.qZA()),2&t){var i=Z.oxw();Z.xp6(1),Z.hij(" ",Z.lcZ(2,1,i.selected?"AbpUi::Edit":"::NewNotification")," ")}}function S(t,e){if(1&t){var i=Z.EpF();Z.TgZ(0,"form",24),Z.NdJ("ngSubmit",function(){return Z.CHM(i),Z.oxw().submitForm()}),Z.TgZ(1,"div",25),Z.TgZ(2,"div",26),Z.TgZ(3,"label",27),Z._uU(4),Z.ALo(5,"abpLocalization"),Z.qZA(),Z._UZ(6,"input",28),Z.qZA(),Z.TgZ(7,"div",26),Z.TgZ(8,"label",29),Z._uU(9),Z.ALo(10,"abpLocalization"),Z.qZA(),Z._UZ(11,"input",30),Z.qZA(),Z.TgZ(12,"div",26),Z.TgZ(13,"label",31),Z._uU(14),Z.ALo(15,"abpLocalization"),Z.qZA(),Z._UZ(16,"input",32),Z.qZA(),Z.TgZ(17,"div",26),Z.TgZ(18,"label",33),Z._uU(19),Z.ALo(20,"abpLocalization"),Z.qZA(),Z._UZ(21,"input",34),Z.qZA(),Z.TgZ(22,"div",26),Z.TgZ(23,"label",35),Z._uU(24),Z.ALo(25,"abpLocalization"),Z.qZA(),Z._UZ(26,"sw-date-picker",36),Z.qZA(),Z.TgZ(27,"div",37),Z._UZ(28,"input",38),Z.TgZ(29,"label",39),Z._uU(30),Z.ALo(31,"abpLocalization"),Z.qZA(),Z.qZA(),Z.TgZ(32,"div",26),Z.TgZ(33,"label",40),Z._uU(34),Z.ALo(35,"abpLocalization"),Z.qZA(),Z._UZ(36,"sw-lookup-select",41),Z.qZA(),Z.TgZ(37,"div",26),Z.TgZ(38,"label",42),Z._uU(39),Z.ALo(40,"abpLocalization"),Z.qZA(),Z._UZ(41,"sw-lookup-select",43),Z.qZA(),Z.qZA(),Z.qZA()}if(2&t){var n=Z.oxw();Z.Q6J("formGroup",n.form),Z.xp6(4),Z.hij(" ",Z.lcZ(5,11,"::NotificationTextAr")," "),Z.xp6(5),Z.hij(" ",Z.lcZ(10,13,"::NotificationTextEn")," "),Z.xp6(5),Z.hij(" ",Z.lcZ(15,15,"::WebRoute")," "),Z.xp6(5),Z.hij(" ",Z.lcZ(20,17,"::MobileRoute")," "),Z.xp6(5),Z.hij(" ",Z.lcZ(25,19,"::SentDate")," "),Z.xp6(6),Z.hij(" ",Z.lcZ(31,21,"::HadSeen")," "),Z.xp6(4),Z.hij(" ",Z.lcZ(35,23,"::AppUser")," "),Z.xp6(2),Z.Q6J("getFn",n.service.getAppUserLookup),Z.xp6(3),Z.hij(" ",Z.lcZ(40,25,"::AppUser")," "),Z.xp6(2),Z.Q6J("getFn",n.service.getAppUserLookup)}}function J(t,e){if(1&t){var i=Z.EpF();Z.TgZ(0,"button",44,45),Z._uU(2),Z.ALo(3,"abpLocalization"),Z.qZA(),Z.TgZ(4,"abp-button",46),Z.NdJ("click",function(){return Z.CHM(i),Z.oxw().submitForm()}),Z._uU(5),Z.ALo(6,"abpLocalization"),Z.qZA()}if(2&t){var n=Z.oxw();Z.xp6(2),Z.hij(" ",Z.lcZ(3,3,"AbpUi::Cancel")," "),Z.xp6(2),Z.Q6J("disabled",null==n.form?null:n.form.invalid),Z.xp6(1),Z.hij(" ",Z.lcZ(6,5,"AbpUi::Save")," ")}}var z,M,Y=[{path:"",component:(z=function(){function t(e,i,n,o,a,s,c,l,u){r(this,t),this.list=e,this.track=i,this.service=n,this.confirmation=o,this.dateService=a,this.fb=s,this.el=c,this.notificationIconService=l,this.sessionState=u,this.data={items:[],totalCount:0},this.isFiltersHidden=!0,this.isModalBusy=!1,this.isModalOpen=!1,this.headerHeight=0,this.rowHeight=75,this.pageLimit=10,this.isArabic=!0,this.lastOffsetY=0,this.lastDate=""}return c(t,[{key:"showFilter",get:function(){return this._showFilter},set:function(t){this._showFilter=t,this.isFiltersHidden=!t}},{key:"ngOnInit",value:function(){var t=this.sessionState.getLanguage();this.isArabic="ar"===t,this.onScroll(0)}},{key:"onScroll",value:function(t){if(t){var e=this.lastOffsetY;if(this.lastOffsetY=t,t-e<10)return}var i=this.el.nativeElement.getBoundingClientRect().height-this.headerHeight;if(!this.isLoading&&t+i>=this.data.items.length*this.rowHeight){var n=this.pageLimit;if(0===this.data.items.length){var o=Math.ceil(i/this.rowHeight);n=Math.max(o,this.pageLimit)}this.loadPage(n)}}},{key:"loadPage",value:function(t){var e=this;this.isLoading=!0;var i={};i.maxResultCount=t,i.markAllAsSeen=!0,this.lastDate&&(i.beforeDate=this.lastDate),this.service.getNotificationList(i).pipe((0,h.b)(1e3)).subscribe(function(t){var n=[].concat(o(e.data.items),o(t.items));n.length>0&&(e.lastDate=n[n.length-1].sentDate),e.data.items=n,e.data.totalCount=t.totalCount,e.isLoading=!1,e.sessionState.getLanguage(),i.hadSeen=!1,i.markAllAsSeen=!1,e.notificationIconService.loadOldNotifications()})}},{key:"clearFilters",value:function(){this.list.get()}},{key:"buildForm",value:function(){var t,e=(null===(t=this.selected)||void 0===t?void 0:t.notification)||{},i=e.notificationTextAr,n=e.notificationTextEn,o=e.webRoute,a=e.sentDate,r=e.hadSeen;this.form=this.fb.group({notificationTextAr:[null!=i?i:null,[]],notificationTextEn:[null!=n?n:null,[]],webRoute:[null!=o?o:null,[]],sentDate:[a?new Date(a):null,[]],hadSeen:[null!=r?r:null,[]]})}},{key:"hideForm",value:function(){this.isModalOpen=!1,this.form.reset()}},{key:"showForm",value:function(){this.buildForm(),this.isModalOpen=!0}},{key:"submitForm",value:function(){var t=this;if(!this.form.invalid){var e=this.selected?this.service.update(this.selected.notification.id,this.form.value):this.service.create(this.form.value);this.isModalBusy=!0,e.pipe((0,g.x)(function(){return t.isModalBusy=!1}),(0,m.b)(function(){return t.hideForm()})).subscribe(this.list.get)}}},{key:"create",value:function(){this.selected=void 0,this.showForm()}},{key:"update",value:function(t){this.selected=t,this.showForm()}},{key:"delete",value:function(t){var e=this;this.confirmation.warn("::DeleteConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,v.h)(function(t){return t===a.Tv.Status.confirm}),(0,b.w)(function(){return e.service.delete(t.notification.id)})).subscribe(this.list.get)}}]),t}(),z.\u0275fac=function(t){return new(t||z)(Z.Y36(n.XNV),Z.Y36(n.vR3),Z.Y36(y.g),Z.Y36(a.YP),Z.Y36(d.R),Z.Y36(A.qu),Z.Y36(Z.SBq),Z.Y36(x.O),Z.Y36(n.WxB))},z.\u0275cmp=Z.Xpm({type:z,selectors:[["app-notification"]],features:[Z._Bn([n.XNV,d.R])],decls:29,vars:22,consts:[[1,"app-notifications"],[1,"row","entry-row","align-items-center"],[1,"col-12","col-sm-auto","content-header-container"],[1,"content-header-title","custom-green"],[1,"col-lg-auto","pl-lg-0"],["hidden","",1,"col-lg"],[1,"text-lg-right","pt-2"],[1,"custom-control","custom-switch"],["type","checkbox","id","customSwitch1",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customSwitch1",1,"custom-control-label"],["hidden","",1,"col-auto"],["class","btn btn-primary btn-sm","type","button",3,"click",4,"abpPermission"],["default","",1,"app-dataview",3,"rows","count","list","headerHeight","columnMode","footerHeight","loadingIndicator","scrollbarV","scroll"],["prop","notification.notificationTextAr",3,"name","cellClass"],["ngx-datatable-cell-template",""],["size","lg",3,"busy","visible","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-plus","mr-1"],[1,"text-wrap","break-all"],[3,"value",4,"ngIf"],[3,"value"],["validateOnSubmit","",3,"formGroup","ngSubmit"],[1,"mt-2","fade-in-top","row"],[1,"form-group","col-md-4"],["for","notification-notification-text-ar"],["id","notification-notification-text-ar","formControlName","notificationTextAr","autofocus","",1,"form-control"],["for","notification-notification-text-en"],["id","notification-notification-text-en","formControlName","notificationTextEn",1,"form-control"],["for","notification-web-route"],["id","notification-web-route","formControlName","webRoute",1,"form-control"],["for","notification-mobile-route"],["id","notification-mobile-route","formControlName","mobileRoute",1,"form-control"],["for","notification-sent-date"],["id","notification-sent-date","name","notification-sent-date","formControlName","sentDate"],[1,"form-group","form-check","custom-checkbox","custom-control"],["type","checkbox","id","notification-had-seen","formControlName","hadSeen",1,"form-check-input","custom-control-input"],["for","notification-had-seen",1,"custom-control-label"],["for","app-user-sender-app-user-id"],["formControlName","senderAppUserId",3,"getFn"],["for","app-user-receiver-app-user-id"],["formControlName","receiverAppUserId",3,"getFn"],["type","button",1,"btn","btn-secondary"],["abpClose",""],["iconClass","fa fa-check",3,"disabled","click"]],template:function(t,e){1&t&&(Z.TgZ(0,"div",0),Z.TgZ(1,"div",1),Z.TgZ(2,"div",2),Z.TgZ(3,"h1",3),Z._uU(4),Z.ALo(5,"abpLocalization"),Z.qZA(),Z._UZ(6,"abp-breadcrumb"),Z.qZA(),Z._UZ(7,"div",4),Z.TgZ(8,"div",5),Z.TgZ(9,"div",6),Z.TgZ(10,"div",7),Z.TgZ(11,"input",8),Z.NdJ("ngModelChange",function(t){return e.showFilter=t}),Z.qZA(),Z.TgZ(12,"label",9),Z._uU(13),Z.ALo(14,"abpLocalization"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(15,"div",10),Z.TgZ(16,"div",6),Z.YNc(17,_,4,3,"button",11),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(18,"ngx-datatable",12),Z.NdJ("scroll",function(t){return e.onScroll(t.offsetY)}),Z.TgZ(19,"ngx-datatable-column",13),Z.ALo(20,"abpLocalization"),Z.YNc(21,O,3,2,"ng-template",14),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(22,"abp-modal",15),Z.NdJ("visibleChange",function(t){return e.isModalOpen=t}),Z.YNc(23,F,3,3,"ng-template",null,16,Z.W1O),Z.YNc(25,S,42,27,"ng-template",null,17,Z.W1O),Z.YNc(27,J,7,7,"ng-template",null,18,Z.W1O),Z.qZA()),2&t&&(Z.xp6(4),Z.Oqu(Z.lcZ(5,16,"::Notifications")),Z.xp6(7),Z.Q6J("ngModel",e.showFilter),Z.xp6(2),Z.Oqu(Z.lcZ(14,18,"::SeeAdvancedFilters")),Z.xp6(4),Z.Q6J("abpPermission","Physic.Notifications.Create"),Z.xp6(1),Z.Q6J("rows",e.data.items)("count",e.data.totalCount)("list",e.list)("headerHeight",e.headerHeight)("columnMode","force")("footerHeight",0)("loadingIndicator",e.isLoading)("scrollbarV",!0),Z.xp6(1),Z.s9C("name",Z.lcZ(20,20,"::NotificationTextAr")),Z.Q6J("cellClass","notification-cell"),Z.xp6(3),Z.Q6J("busy",e.isModalBusy)("visible",e.isModalOpen))},directives:[a.LI,A.Wl,A.JJ,A.On,w.m,n.l97,T.nE,a.x7,a.j3,T.UC,T.vq,a.zS,k.O5,q.K,A._Y,A.JL,n.YzZ,A.sg,l.hL,A.Fj,A.u,l.J5,n.Uqp,L.L,N.X,a.r0],pipes:[n.fuE],styles:[".app-notifications .datatable-body-row .datatable-row-group{align-items:center}"]}),z),canActivate:[n.a1M,n.nG9]}],j=function(){var t=function t(){r(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=Z.oAB({type:t}),t.\u0275inj=Z.cJS({imports:[[p.Bz.forChild(Y)],p.Bz]}),t}(),Q=i(56137),E=((M=function t(){r(this,t)}).\u0275fac=function(t){return new(t||M)},M.\u0275mod=Z.oAB({type:M}),M.\u0275inj=Z.cJS({imports:[[j,n.IR2,a.e2,f.Ck,u.vv,l.h2,s.lQ,s.M,Q.m,s.XC]]}),M)},55e3:function(t,e,i){"use strict";i.d(e,{K:function(){return p}});var n=i(46700),o=i(2996),a=i(35366),s=i(61116);function l(t,e){if(1&t&&(a.TgZ(0,"span",2),a.TgZ(1,"span"),a._uU(2),a.qZA(),a.Hsn(3),a.qZA()),2&t){var i=a.oxw();a.xp6(2),a.Oqu(i.parsedDate)}}function u(t,e){if(1&t&&(a.TgZ(0,"span",3),a._uU(1),a.qZA()),2&t){var i=a.oxw();a.xp6(1),a.hij(" ",i.l("NotFound"),"\n")}}var f=["*"],p=function(){var t=function(){function t(e,i){r(this,t),this.dateService=i,this.localization=e.get(n.oQ8)}return c(t,[{key:"value",get:function(){return this._value},set:function(t){this._value=t,this.parsedDate=this.value instanceof Date?this.dateService.parseDate(t):t}},{key:"l",value:function(t){return this.localization.instant("::"+t)}},{key:"isNotEmpty",value:function(){return!!this.value&&("string"!=typeof this.value||this.value.length>0)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.zs3),a.Y36(o.R))},t.\u0275cmp=a.Xpm({type:t,selectors:[["is-empty"]],inputs:{value:"value"},features:[a._Bn([o.R])],ngContentSelectors:f,decls:2,vars:2,consts:[["class","sw-dv-details",4,"ngIf"],["class","sw-dv-details empty-value custom-gray","style","font-size: 12px;font-style: italic;",4,"ngIf"],[1,"sw-dv-details"],[1,"sw-dv-details","empty-value","custom-gray",2,"font-size","12px","font-style","italic"]],template:function(t,e){1&t&&(a.F$t(),a.YNc(0,l,4,1,"span",0),a.YNc(1,u,2,1,"span",1)),2&t&&(a.Q6J("ngIf",e.isNotEmpty()),a.xp6(1),a.Q6J("ngIf",!e.isNotEmpty()))},directives:[s.O5],encapsulation:2}),t}()},3183:function(i,n,o){"use strict";o.d(n,{X:function(){return d}});var a=o(46700),s=o(35366),l=o(31041),u=o(23733),f=o(61116);function p(t,e){if(1&t&&(s.TgZ(0,"option",1),s._uU(1),s.qZA()),2&t){var i=e.$implicit,n=s.oxw();s.Q6J("ngValue",i.id),s.xp6(1),s.Oqu(i[n.lookupNameProp])}}var d=function(){var i,n=function(i){!function(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&t(e,i)}(o,i);var n=e(o);function o(){var t;return r(this,o),(t=n.apply(this,arguments)).lookupNameProp="displayName",t.disabled=!1,t.isLocalizable=!1,t.datas=[],t.pageQuery={maxResultCount:1e3,skipCount:0},t}return c(o,[{key:"ngOnInit",value:function(){this.get()}},{key:"get",value:function(){var t=this;this.getFn&&this.getFn(this.pageQuery).subscribe(function(e){var i=e.items;t.datas=i})}},{key:"onFocus",value:function(t){}}]),o}(a.ksn);return n.\u0275fac=function(t){return(i||(i=s.n5z(n)))(t||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["sw-lookup-select"]],inputs:{getFn:"getFn",lookupNameProp:"lookupNameProp",disabled:"disabled",isLocalizable:"isLocalizable",datas:"datas"},features:[s._Bn([{provide:l.JU,useExisting:(0,s.Gpc)(function(){return n}),multi:!0}]),s.qOj],decls:3,vars:3,consts:[[1,"custom-select","form-control",3,"disabled","ngModel","ngModelChange","focus"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(s.TgZ(0,"select",0),s.NdJ("ngModelChange",function(t){return e.value=t})("focus",function(t){return e.onFocus(t)}),s._UZ(1,"option",1),s.YNc(2,p,2,2,"option",2),s.qZA()),2&t&&(s.Q6J("disabled",e.disabled)("ngModel",e.value),s.xp6(2),s.Q6J("ngForOf",e.datas))},directives:[l.EJ,u.m,l.JJ,l.On,l.YN,l.Kr,f.sg],encapsulation:2}),n}()}}])}();