(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[59060,20013],{67917:function(e,t,i){"use strict";i.d(t,{w:function(){return n}});var n=function(e){return e[e.OneWeek=1]="OneWeek",e[e.TwoWeeks=2]="TwoWeeks",e[e.ThreeWeeks=3]="ThreeWeeks",e[e.FourWeeks=4]="FourWeeks",e}({})},83865:function(e,t,i){"use strict";i.d(t,{h:function(){return n}});class n{constructor(e,t,i,n){this.isSelected=!1,this.title=t,this.itemId=e,this.day=i,this.extraData=n}}},46140:function(e,t,i){"use strict";i.d(t,{U:function(){return he}});var n=i(55679),s=i(35366);class a{constructor(e){this.weeks=[],this.calendarView=e}addWeek(e){this.firstActive||(this.firstActive=e),this.weeks.push(e)}isLastWeekVisible(){return 0===this.weeks.length||this.weeks[this.weeks.length-1].isVisible}isLastWeekEmpty(){if(0===this.weeks.length)return!0;let e=!0;return this.weeks[this.weeks.length-1].days.forEach(t=>{t.items.length>0&&(e=!1)}),e}}var o=i(67917);class r{constructor(e,t,i){this.items=[],this.isLoading=!0,this.dayId=e,this.title=t,this.week=i}setDate(e){let t="ar";t="rtl"==document.getElementsByTagName("body")[0].getAttribute("dir")?"ar":"en",this.startDate=e;const i=e,n=(new Intl.DateTimeFormat(t,{year:"numeric"}).format(i),new Intl.DateTimeFormat(t,{month:"2-digit"}).format(i)),s=new Intl.DateTimeFormat(t,{day:"2-digit"}).format(i);this.title=`${s}/${n}`}isEmpty(){return 0===this.items.length}addItem(e){this.items.push(e),this.isLoading=!1}clearItems(){this.isLoading=!1,this.items=[]}InitiateItems(){this.isLoading=!0,this.items=[],setTimeout(()=>{this.isLoading=!1},1)}}class c{constructor(e,t){this.isCopy=e,this.data=t}}class l{constructor(e,t){this.item=e,this.day=t}}class d{constructor(e,t){this.days=[],this.isVisible=!1,this.isSelected=!1,this.board=t,this.weekId=e}getTitle(){return this.startDate?this.getDateParsedWithoutYear(this.startDate)+" ~ "+this.getDateParsedWithoutYear(this.addDays(this.startDate,6)):this.weekId+1}addDays(e,t){var i=new Date(e);return i.setDate(i.getDate()+t),i}getDateParsed(e){let t="ar";t="rtl"==document.getElementsByTagName("body")[0].getAttribute("dir")?"ar":"en";const i=e,n=new Intl.DateTimeFormat(t,{year:"numeric"}).format(i),s=new Intl.DateTimeFormat(t,{month:"short"}).format(i);return`${new Intl.DateTimeFormat(t,{day:"2-digit"}).format(i)}-${s}-${n}`}getDateParsedWithoutYear(e){let t="ar";t="rtl"==document.getElementsByTagName("body")[0].getAttribute("dir")?"ar":"en";const i=e,n=new Intl.DateTimeFormat(t,{month:"short"}).format(i);return`${new Intl.DateTimeFormat(t,{day:"2-digit"}).format(i)}-${n}`}}var h=i(46700);let u=(()=>{class e{constructor(){this.tagedItems={},this.tagedUsers={}}setTaggedItems(e,t,i){this.tagedItems[e]=t,this.setTaggedUser(e,i)}getTaggedItems(e){return this.tagedItems[e]||(this.tagedItems[e]=[]),this.tagedItems[e]}setTaggedUser(e,t){this.tagedUsers[e]=t}getTaggedUser(e){return this.tagedUsers[e]||(this.tagedUsers[e]=[]),this.tagedUsers[e]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),g=(()=>{class e{constructor(e,t,i,n){this.toaster=e,this.confirmation=t,this.localizationService=i,this.globalCopyService=n,this.weekCreated=new s.vpe,this.weekDeleted=new s.vpe,this.itemDeleted=new s.vpe,this.itemDeletedBulk=new s.vpe,this.itemEdited=new s.vpe,this.itemViewed=new s.vpe,this.itemCreated=new s.vpe,this.overlapError=new s.vpe,this.itemCopiedMoved=new s.vpe,this.allDays=[],this.isPlaning=!0,this.weekCounts=1,this.totalItems=0,this.isCopying=!1,this.firstWeekIndex=0,this.isNavigating=!1}get calendarView(){var e,t;return null!==(t=null===(e=this.boardDto)||void 0===e?void 0:e.calendarView)&&void 0!==t?t:o.w.TwoWeeks}set calendarView(e){this.boardDto&&(this.boardDto.calendarView=e)}changeWeekCounts(e){this.calendarView=e;const t=this.calendarView;let i=this.getFirstWeek(),n=this.refreshWeeks(i,i+t-1);this.weekCounts=t,this.autoAppendWeeks(n)}getFirstDayInWeek(e){e.setHours(0,0,0,0);const t=e.getDay();return 7!==t&&(e=this.addDays(e,-1*(t+1))),e}setup(e,t,i,n,s,a){const o=this;this.isNavigating=!0,this.tag=s,this.userUID=a,this.initiateDate||(this.initiateDate=n),n&&(n=this.getFirstDayInWeek(n)),this.startDate=n,this.isPlaning=i,this.weekCounts=e,this.calendarView=t,setTimeout(()=>{o.init(t),o.refresh(t),o.globalCopyService.getTaggedItems(s).length>0&&(0==s.search("planed")?o.globalCopyService.setTaggedItems(s,[],o.userUID):o.isCopying=!0),o.isNavigating=!1},10)}init(e){this.totalItems=0,this.allDays=[],this.boardDto=new a(e)}refresh(e){if(this.boardDto||this.init(e),this.isPlaning)for(let t=0;t<this.weekCounts;t++)this.createWeek(1+50*t);else{for(let e=0;e<this.weekCounts;e++)this.createWeek(1+50*e);this.firstWeekIndex=0}}addDays(e,t){var i=new Date(e);return i.setDate(i.getDate()+t),i}appendWeek(){this.createWeek(null)}createWeek(e){let t=new d(this.boardDto.weeks.length,this.boardDto);this.isPlaning||(t.startDate=this.addDays(this.startDate,7*this.boardDto.weeks.length)),t.days=[];for(let i=0;i<7;i++){const e=this.localizationService.instant("::TheDay")+` ${this.allDays.length+1}`;let n=new r(this.allDays.length+1,e,t);n.isLoading=!0,this.isPlaning||n.setDate(this.addDays(t.startDate,i)),t.days.push(n),this.allDays.push(n)}return this.boardDto.addWeek(t),this.boardDto.weeks.length<=this.calendarView&&(t.isVisible=!0),setTimeout(()=>{this.weekCreated.emit(t)},e||1),t}dateVar(e,t){return(t.getTime()-e.getTime())/864e5}pastOnDay(e){if(0===this.copiedItems.length)return;const t=this.copiedItems[0];let i=e.dayId-t.day.dayId;e.startDate&&t.day.startDate&&(i=this.dateVar(t.day.startDate,e.startDate));const s=this,a=()=>{let e=[];s.copiedItems.forEach(t=>{let n=this.getDayByItemDistance(t,i);n||(this.appendWeek(),n=this.getDayByItemDistance(t,i));let s=new l(t,n);e.push(s)}),s.itemCopiedMoved.emit(new c(this.isCopying,e)),this.isCopying||s.clearCopyItems()};if(!this.checkIsPasteValidForItems(this.copiedItems,i))return this.overlapError.emit(),void this.confirmation.warn("::OverridePasteDetails","::OverridePaste").subscribe(e=>{e==n.Tv.Status.confirm&&a()});a()}get copiedItems(){return this.globalCopyService.getTaggedItems(this.tag)}set copiedItems(e){this.globalCopyService.setTaggedItems(this.tag,e,this.userUID)}copyBulkItems(e,t){this.isCopying=t,this.copiedItems=[...e]}clearCopyItems(){this.copiedItems=[]}getDayByItemDistance(e,t){let i=e.day,n=this.allDays.indexOf(i);if(n<0){const e=this;let n;return this.allDays.forEach(s=>{e.dateVar(i.startDate,s.startDate)==t&&(n=s)}),n}let s=this.allDays[n+t];return s||(s=t>0?this.allDays[this.allDays.length]:this.allDays[0]),s}checkIsPasteValidForDay(e){var t,i;return 0===(null!==(i=null===(t=null==e?void 0:e.items)||void 0===t?void 0:t.length)&&void 0!==i?i:0)}checkIsPasteValid(e,t){const i=this.getDayByItemDistance(e,t);return this.checkIsPasteValidForDay(i)}checkIsPasteValidForItems(e,t){let i=!0;return e.forEach(e=>{i=i&&this.checkIsPasteValid(e,t)}),i}checkIsPasteValidForItemsForSelfOverride(e,t){if(this.globalCopyService.getTaggedUser(this.tag)!==this.userUID)return console.log("ignore self validation from other users"),!1;let i=e.map(e=>e.day.dayId),n=!1;return e.forEach(e=>{const s=this.getDayByItemDistance(e,t),a=i.filter(e=>e===s.dayId).length>0;n=n||a}),n}removeAllItemsOfDay(e){e.items.forEach(e=>{this.removeItem(e)})}removeItem(e){const t=e.day.items.filter(t=>t!==e);e.day.clearItems(),t.forEach(t=>{e.day.addItem(t)}),this.itemDeleted.emit(e)}getFirstWeek(){let e=-1;return this.boardDto.weeks.forEach((t,i)=>{t.isVisible&&e<0&&(e=i)}),e}previous(){this.isNavigating=!0;const e=this.calendarView;let t=this.getFirstWeek()-1;if(t>=0){let i=this.refreshWeeks(t,t+e-1);this.autoAppendWeeks(i)}else if(!this.isPlaning){let e=this.addDays(this.startDate,-6);this.setup(this.weekCounts,this.calendarView,this.isPlaning,e,this.tag,this.userUID)}this.isNavigating=!1}today(){if(this.isNavigating=!0,this.isPlaning)return;let e=0+this.calendarView,t=this.getFirstDayInWeek(this.initiateDate),i=this.boardDto.weeks[this.firstWeekIndex].startDate;if(t.valueOf()==i.valueOf()){let t=this.refreshWeeks(0,e-1);this.autoAppendWeeks(t),this.isNavigating=!1}else this.setup(this.weekCounts,this.calendarView,this.isPlaning,this.initiateDate,this.tag,this.userUID)}next(){this.isNavigating=!0;let e=-1,t=-1,i=-1;if(this.boardDto.weeks.forEach((n,s)=>{n.isVisible&&(e<0&&(e=s),t=s),e>-1&&i++}),this.isPlaning&&i>0||!this.isPlaning&&i>=0){let i=this.refreshWeeks(e+1,t+1);this.autoAppendWeeks(i)}this.isNavigating=!1}refreshWeeks(e,t){let i=0;return this.boardDto.weeks.forEach((n,s)=>{s>=e&&s<=t?(n.isVisible=!0,i++):n.isVisible=!1}),i}autoAppendWeeks(e){if(this.isPlaning)return;const t=this.calendarView;for(let i=0;i<t-e;i++)this.createWeek(null).isVisible=!0}addItem(e,t){let i=this.allDays.filter(e=>e.dayId==t.dayId);if(0===i.length)return;let n=i[0];const s=n.items.filter(t=>t.itemId!==e.itemId);e.day.clearItems(),s.forEach(t=>{e.day.addItem(t)}),n.addItem(e)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(n.MJ),s.LFG(n.YP),s.LFG(h.oQ8),s.LFG(u))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})();var m=i(69244),p=i(43835),f=i(44689),b=i(2996),k=i(42373),v=i(61116);function w(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",12),s.NdJ("click",function(){return s.CHM(e),s.oxw().today()}),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()}2&e&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::Today")," "))}const x=["*"];let y=(()=>{class e{constructor(e,t,i){this.calendarService=e,this.dateService=t,this.localizationService=i,this.CalendarView=o.w}ngOnInit(){}setView(e){this.calendarService.changeWeekCounts(e)}get view(){return this.calendarService.calendarView}get isPlaning(){return this.calendarService.isPlaning}get title(){if(this.calendarService.boardDto&&this.calendarService.boardDto.weeks&&this.calendarService.boardDto.weeks.length>0){let e=this.calendarService.boardDto.weeks.filter(e=>e.isVisible);const t=this.calendarService.boardDto.weeks;if(e.length>0){if(this.isPlaning){let i=e[0].weekId,n=e[e.length-1].weekId;return this.localizationService.instant("::TheWeek")+(i+1)+" - "+(n+1)+" "+this.localizationService.instant("::Of")+" "+t.length}{let t=e[e.length-1].startDate;return this.dateService.formateDate(e[0].startDate,!1)+" - "+this.dateService.formateDate(this.addDays(t,6),!1)}}}return""}addDays(e,t){var i=new Date(e);return i.setDate(i.getDate()+t),i}previous(){this.calendarService.isNavigating||this.calendarService.previous()}today(){this.calendarService.isNavigating||this.calendarService.today()}next(){this.calendarService.isNavigating||this.calendarService.next()}isBusy(){return!1}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(g),s.Y36(b.R),s.Y36(h.oQ8))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-board-nav"]],ngContentSelectors:x,decls:24,vars:17,consts:[[1,"container-fuild"],[1,"row","text-center","board-nav-container","align-items-center","fade-in-animation"],[1,"col-auto"],[1,"btn-group"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"fa","fa-chevron-right"],[1,"btn","btn-sm","btn-outline-primary","text-dark","mw-100","text-center"],[1,"fa","fa-chevron-left"],["class","btn btn-sm px-3 btn-primary ml-2 mx-sm-3",3,"click",4,"ngIf"],[1,"col","pt-3","pt-sm-0"],[1,"col-auto","d-flex","pt-3","py-md-0"],[1,"btn","btn-sm","btn-secondary",3,"click"],[1,"btn","btn-sm","px-3","btn-primary","ml-2","mx-sm-3",3,"click"]],template:function(e,t){1&e&&(s.F$t(),s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"div",4),s.NdJ("click",function(){return t.previous()}),s._UZ(5,"i",5),s.qZA(),s.TgZ(6,"div",6),s._uU(7),s.qZA(),s.TgZ(8,"div",4),s.NdJ("click",function(){return t.next()}),s._UZ(9,"i",7),s.qZA(),s.qZA(),s.YNc(10,w,3,3,"div",8),s.qZA(),s.TgZ(11,"div",9),s.Hsn(12),s.qZA(),s.TgZ(13,"div",10),s.TgZ(14,"div",3),s.TgZ(15,"div",11),s.NdJ("click",function(){return t.setView(t.CalendarView.OneWeek)}),s._uU(16),s.ALo(17,"abpLocalization"),s.qZA(),s.TgZ(18,"div",11),s.NdJ("click",function(){return t.setView(t.CalendarView.TwoWeeks)}),s._uU(19),s.ALo(20,"abpLocalization"),s.qZA(),s.TgZ(21,"div",11),s.NdJ("click",function(){return t.setView(t.CalendarView.FourWeeks)}),s._uU(22),s.ALo(23,"abpLocalization"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(7),s.hij(" ",t.title," "),s.xp6(3),s.Q6J("ngIf",!t.isPlaning),s.xp6(5),s.ekj("active",t.view===t.CalendarView.OneWeek),s.xp6(1),s.hij(" ",s.lcZ(17,11,"::OneWeek")," "),s.xp6(2),s.ekj("active",t.view===t.CalendarView.TwoWeeks),s.xp6(1),s.hij(" ",s.lcZ(20,13,"::TwoWeeks")," "),s.xp6(2),s.ekj("active",t.view===t.CalendarView.FourWeeks),s.xp6(1),s.hij(" ",s.lcZ(23,15,"::FourWeeks")," "))},directives:[v.O5],pipes:[h.fuE],styles:[".board-nav-container[_ngcontent-%COMP%]{margin-bottom:15px}"]}),e})();const I=["selectionPanelContent"],D=["itemContent"],C=["navContent"],Z=["selectionEditContent"];function T(e,t){1&e&&s.GkF(0)}function S(e,t){if(1&e&&(s.TgZ(0,"app-board-nav"),s.YNc(1,T,1,0,"ng-container",4),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.Q6J("ngTemplateOutlet",e.navContentRef)}}function A(e,t){if(1&e&&(s.TgZ(0,"div",14),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&e){const e=t.$implicit;s.xp6(1),s.hij(" ",s.lcZ(2,1,e)," ")}}function P(e,t){if(1&e&&(s.TgZ(0,"div",12),s.YNc(1,A,3,3,"div",13),s.qZA()),2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",e.defaultDays)}}function O(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"input",20),s.NdJ("checkedChange",function(t){return s.CHM(e),s.oxw(2).$implicit.isSelected=t})("change",function(t){s.CHM(e);const i=s.oxw(2).$implicit;return s.oxw(2).selectionChangeForWeek(t,i)}),s.qZA()}if(2&e){const e=s.oxw(2).$implicit;s.Q6J("name",e.weekId)("id",e.weekId)("checked",e.isSelected)}}function F(e,t){if(1&e&&(s.TgZ(0,"div",18),s.YNc(1,O,1,3,"input",19),s._uU(2),s.ALo(3,"abpLocalization"),s.qZA()),2&e){const e=s.oxw().$implicit,t=s.oxw(2);s.xp6(1),s.Q6J("ngIf",t.IsEditable),s.xp6(1),s.AsE(" ",s.lcZ(3,3,"::Week")," ",e.getTitle()," ")}}function q(e,t){if(1&e&&(s.TgZ(0,"span",27),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&e){const e=s.oxw().index,t=s.oxw(3);s.xp6(1),s.hij(" ",s.lcZ(2,1,t.defaultDays[e])," ")}}function N(e,t){if(1&e&&(s.TgZ(0,"div"),s.TgZ(1,"span",28),s._uU(2),s.qZA(),s.qZA()),2&e){const e=s.oxw().$implicit;s.xp6(2),s.Oqu(e.title)}}function M(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"i",29),s.NdJ("click",function(){s.CHM(e);const t=s.oxw().$implicit;return s.oxw(3).addItem(t)}),s.qZA(),s.qZA()}}function W(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"i",31),s.NdJ("click",function(){s.CHM(e);const t=s.oxw(2).$implicit;return s.oxw(3).pastItem(t)}),s.qZA()}}function E(e,t){if(1&e&&(s.TgZ(0,"div"),s.YNc(1,W,1,0,"i",30),s.qZA()),2&e){const e=s.oxw().$implicit,t=s.oxw(3);s.xp6(1),s.Q6J("ngIf",t.isPasting()&&0==e.items.length)}}function J(e,t){1&e&&s._UZ(0,"img",32)}function _(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"input",44),s.NdJ("checkedChange",function(t){return s.CHM(e),s.oxw().$implicit.isSelected=t})("change",function(t){s.CHM(e);const i=s.oxw().$implicit;return s.oxw(4).selectionChange(t,i)}),s.qZA()}if(2&e){const e=s.oxw().$implicit;s.Q6J("name",e.itemId)("id",e.itemId)("checked",e.isSelected)}}function L(e,t){1&e&&s.GkF(0,49)}function V(e,t){if(1&e&&(s.TgZ(0,"div",48),s.YNc(1,L,1,0,"ng-container",43),s.qZA()),2&e){const e=s.oxw(2).$implicit,t=s.oxw(4);s.xp6(1),s.Q6J("ngTemplateOutlet",t.itemContentRef)("ngTemplateOutletContext",e)}}function Y(e,t){1&e&&s.GkF(0,49)}function U(e,t){if(1&e&&(s.TgZ(0,"div",48),s.YNc(1,Y,1,0,"ng-container",43),s.qZA()),2&e){const e=s.oxw(2).$implicit,t=s.oxw(4);s.xp6(1),s.Q6J("ngTemplateOutlet",t.itemContentRef)("ngTemplateOutletContext",e)}}function H(e,t){1&e&&(s.TgZ(0,"i",45),s.YNc(1,V,2,2,"div",46),s.YNc(2,U,2,2,"div",47),s.qZA())}function Q(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"i",50),s.NdJ("click",function(){s.CHM(e);const t=s.oxw().$implicit;return s.oxw(4).copy(t)}),s.qZA()}}function $(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"i",51),s.NdJ("click",function(){s.CHM(e);const t=s.oxw().$implicit;return s.oxw(4).editItem(t)}),s.qZA()}}function j(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"i",52),s.NdJ("click",function(){s.CHM(e);const t=s.oxw().$implicit;return s.oxw(4).deleteItem(t)}),s.qZA()}}function z(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"i",53),s.NdJ("click",function(){s.CHM(e);const t=s.oxw().$implicit;return s.oxw(4).viewItem(t)}),s.qZA()}}function B(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"i",54),s.NdJ("click",function(){s.CHM(e);const t=s.oxw(2).$implicit;return s.oxw(3).pastItem(t)}),s.qZA()}}function R(e,t){1&e&&s.GkF(0,49)}const G=function(e){return{"item-selected":e}};function X(e,t){if(1&e&&(s.TgZ(0,"div",33),s.TgZ(1,"div",34),s.TgZ(2,"div",35),s.YNc(3,_,1,3,"input",36),s.YNc(4,H,3,0,"i",37),s.YNc(5,Q,1,0,"i",38),s.YNc(6,$,1,0,"i",39),s.YNc(7,j,1,0,"i",40),s.YNc(8,z,1,0,"i",41),s.YNc(9,B,1,0,"i",42),s.TgZ(10,"span",28),s._uU(11),s.qZA(),s.qZA(),s.YNc(12,R,1,0,"ng-container",43),s.qZA(),s.qZA()),2&e){const e=t.$implicit,i=s.oxw().$implicit,n=s.oxw(3);s.xp6(1),s.Q6J("ngClass",s.VKq(12,G,e.isSelected))("cdkDragData",e),s.xp6(2),s.Q6J("ngIf",n.IsEditable),s.xp6(1),s.Q6J("ngIf",(0===n.selectedItemsCount||e===n.firstSelectedItem)&&n.IsEditable),s.xp6(1),s.Q6J("ngIf",n.IsEditable&&0===n.selectedItemsCount),s.xp6(1),s.Q6J("ngIf",n.IsEditable&&0===n.selectedItemsCount),s.xp6(1),s.Q6J("ngIf",n.IsEditable&&0===n.selectedItemsCount),s.xp6(1),s.Q6J("ngIf",!n.noHead&&!n.IsEditable&&0===n.selectedItemsCount),s.xp6(1),s.Q6J("ngIf",n.isPasting()),s.xp6(2),s.Oqu(i.title),s.xp6(1),s.Q6J("ngTemplateOutlet",n.itemContentRef)("ngTemplateOutletContext",e)}}const K=function(e,t){return{isDayFullHight:e,isDaySmallHight:t}};function ee(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",21),s.TgZ(1,"div",22),s.NdJ("cdkDropListDropped",function(t){const i=s.CHM(e).$implicit;return s.oxw(3).drop(t,i)}),s.TgZ(2,"div",23),s.YNc(3,q,3,3,"span",24),s.qZA(),s.YNc(4,N,3,1,"div",0),s.YNc(5,M,2,0,"div",0),s.YNc(6,E,2,1,"div",0),s.YNc(7,J,1,0,"img",25),s.YNc(8,X,13,14,"div",26),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit,i=s.oxw(3);s.xp6(1),s.Q6J("cdkDropListData",e.items)("ngClass",s.WLB(8,K,i.isDayFullHight,!i.isDayFullHight)),s.xp6(2),s.Q6J("ngIf",!i.isPlaning),s.xp6(1),s.Q6J("ngIf",e.isEmpty()&&i.IsEditable),s.xp6(1),s.Q6J("ngIf",e.isEmpty()&&i.IsEditable),s.xp6(1),s.Q6J("ngIf",e.isEmpty()&&i.IsEditable),s.xp6(1),s.Q6J("ngIf",e.isLoading),s.xp6(1),s.Q6J("ngForOf",e.items)}}function te(e,t){if(1&e&&(s.TgZ(0,"div",15),s.YNc(1,F,4,5,"div",16),s.YNc(2,ee,9,11,"div",17),s.qZA()),2&e){const e=t.$implicit,i=s.oxw(2);s.Q6J("hidden",!e.isVisible),s.xp6(1),s.Q6J("ngIf",i.isPlaning||!0),s.xp6(1),s.Q6J("ngForOf",e.days)("ngForTrackBy",i.identifyDay)}}function ie(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",60),s.NdJ("click",function(){return s.CHM(e),s.oxw(3).addWeek()}),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()}2&e&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::AddWeek")," "))}function ne(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",61),s.NdJ("click",function(){return s.CHM(e),s.oxw(3).removeLastWeek()}),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()}2&e&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::RemoveWeek")," "))}function se(e,t){if(1&e&&(s.TgZ(0,"div",55),s.TgZ(1,"div",56),s.TgZ(2,"div",55),s.TgZ(3,"div",57),s.YNc(4,ie,3,3,"button",58),s.YNc(5,ne,3,3,"button",59),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e){const e=s.oxw(2);s.xp6(4),s.Q6J("ngIf",e.isCanAddWeek()),s.xp6(1),s.Q6J("ngIf",e.isCanRemoveWeek())}}function ae(e,t){if(1&e&&(s.TgZ(0,"div",5),s.TgZ(1,"div",6),s.TgZ(2,"div",7),s.YNc(3,P,2,1,"div",8),s.TgZ(4,"div",9),s.YNc(5,te,3,4,"div",10),s.qZA(),s.qZA(),s.qZA(),s.YNc(6,se,6,2,"div",11),s.qZA()),2&e){const e=s.oxw();s.xp6(3),s.Q6J("ngIf",!e.isPlaning),s.xp6(2),s.Q6J("ngForOf",e.boardDto.weeks),s.xp6(1),s.Q6J("ngIf",e.isCanAddWeek()||e.isCanRemoveWeek())}}function oe(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",69),s.NdJ("click",function(){return s.CHM(e),s.oxw(2).bulkCopy()}),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()}2&e&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::Copy")," "))}function re(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"button",70),s.NdJ("click",function(){return s.CHM(e),s.oxw(2).bulkRemove()}),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()}2&e&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::Delete")," "))}function ce(e,t){1&e&&s.GkF(0)}function le(e,t){1&e&&s.GkF(0)}function de(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",62),s.TgZ(1,"div",63),s.TgZ(2,"span",64),s._uU(3),s.qZA(),s._uU(4),s.ALo(5,"abpLocalization"),s.TgZ(6,"button",65),s.NdJ("click",function(){return s.CHM(e),s.oxw().clearSelection()}),s._uU(7),s.ALo(8,"abpLocalization"),s.qZA(),s.qZA(),s.TgZ(9,"div",63),s.TgZ(10,"div",66),s.YNc(11,oe,3,3,"button",67),s.YNc(12,re,3,3,"button",68),s.YNc(13,ce,1,0,"ng-container",4),s.YNc(14,le,1,0,"ng-container",4),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=s.oxw();s.xp6(3),s.Oqu(e.selectedItemsCount),s.xp6(1),s.hij(" ",s.lcZ(5,7,"::ItemsSelected")," "),s.xp6(3),s.hij(" ",s.lcZ(8,9,"::ClearSelection")," "),s.xp6(4),s.Q6J("ngIf",e.IsEditable),s.xp6(1),s.Q6J("ngIf",e.IsEditable),s.xp6(1),s.Q6J("ngTemplateOutlet",e.selectionEditContentRef),s.xp6(1),s.Q6J("ngTemplateOutlet",e.selectionPanelContentRef)}}let he=(()=>{class e{constructor(e,t,i,n,s){this.calendarService=e,this.dateService=t,this.confirmation=i,this.mobileHelperService=n,this.toaster=s,this.IsEditable=!0,this.noHead=!1,this.isDayFullHight=!0,this.defaultDays=["::Sat","::Sun","::Mon","::Tue","::Wed","::Thu","::Fri"],this.selectedItemsCount=0,this.selectedItems=[]}get boardDto(){return this.calendarService.boardDto}ngOnInit(){}drop(e,t){if(!this.IsEditable)return void this.toaster.info("::NotAuthorized","::CannotEditProgram");const i=e.item.data;if(e.previousContainer===e.container)(0,m.bA)(e.container.data,e.previousIndex,e.currentIndex);else{let e=[];this.selectedItems.forEach((t,i)=>{e.push(t)}),0===this.selectedItems.length&&e.push(i),this.calendarService.copyBulkItems(e,!1),this.calendarService.pastOnDay(t),this.clearSelection()}}addItem(e){this.calendarService.itemCreated.emit(e)}copy(e){this.calendarService.copyBulkItems([e],!0),this.toaster.info("::Copied","::PleaseSelectDayToPasteItems")}pastItem(e){this.calendarService.pastOnDay(e)}selectionChangeForWeek(e,t){const i=e.currentTarget.checked;t.isSelected=i,t.days.forEach(e=>{e.items.forEach(e=>{this.selectionChangeForItem(e,i)})})}selectionChangeForItem(e,t){e.isSelected!=t&&(e.isSelected=t,this.selectedItemsCount+=t?1:-1,this.selectedItemsCount>0&&!this.firstSelectedItem&&(this.firstSelectedItem=e),0===this.selectedItemsCount&&(this.firstSelectedItem=void 0),t?this.selectedItems.push(e):this.selectedItems=this.selectedItems.filter(t=>t.itemId!==e.itemId)),console.log(this.selectedItems)}selectionChange(e,t){this.selectionChangeForItem(t,e.currentTarget.checked)}clearSelection(){let e=[...this.selectedItems];this.selectedItemsCount=0,this.firstSelectedItem=void 0,e.forEach(e=>{e.isSelected=!1}),this.selectedItems=[],setTimeout(()=>{this.boardDto.weeks.forEach(e=>{e.isSelected=!1})},10)}bulkCopy(){this.calendarService.copyBulkItems(this.selectedItems,!0),this.clearSelection(),this.toaster.info("::Copied","::PleaseSelectDayToPasteItems")}bulkRemove(){let e=0,t=this;this.confirmation.warn("::DeleteConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,p.h)(e=>e===n.Tv.Status.confirm),(0,f.w)(()=>{const i=t.selectedItems.map(e=>e);return t.selectedItems.forEach(i=>{setTimeout(()=>{t.calendarService.removeItem(i)},150*e),e++}),setTimeout(()=>{t.calendarService.itemDeletedBulk.emit(i),t.clearSelection(),t.toaster.success("::Deleted","::ItemsDeletedSuccessfully")},300+150*e),null})).subscribe()}deleteItem(e){let t=this;this.confirmation.warn("::DeleteConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,p.h)(e=>e===n.Tv.Status.confirm),(0,f.w)(()=>{const i=[e];return t.calendarService.removeItem(e),t.calendarService.itemDeletedBulk.emit(i),t.toaster.success("::Deleted","::ItemDeletedSuccessfully"),null})).subscribe()}isPasting(){return this.calendarService.copiedItems.length>0}get view(){return this.calendarService.calendarView}setup(e,t,i,n,s,a){this.calendarService.setup(e,t,i,n,s,a)}get weekCreated(){return this.calendarService.weekCreated}get weekDeleted(){return this.calendarService.weekDeleted}get itemDeleted(){return this.calendarService.itemDeleted}get itemDeletedBulk(){return this.calendarService.itemDeletedBulk}get itemCreated(){return this.calendarService.itemCreated}get itemCopiedMoved(){return this.calendarService.itemCopiedMoved}get itemEdited(){return this.calendarService.itemEdited}get itemViewed(){return this.calendarService.itemViewed}addWeek(){this.calendarService.appendWeek(),this.boardDto.isLastWeekVisible()||(this.boardDto.weeks.filter(e=>e.isVisible).length>=this.calendarService.calendarView?this.calendarService.next():this.calendarService.changeWeekCounts(this.boardDto.calendarView))}removeLastWeek(){let e=this.boardDto.weeks[this.boardDto.weeks.length-1];e&&(this.calendarService.previous(),this.calendarService.allDays=this.calendarService.allDays.filter(t=>t.week!==e),this.boardDto.weeks=this.boardDto.weeks.filter(t=>t.weekId!==e.weekId))}isCanAddWeek(){return!!this.IsEditable&&!(!this.isPlaning||!this.boardDto.isLastWeekVisible())}isCanRemoveWeek(){return!!(this.isPlaning&&this.boardDto.isLastWeekVisible()&&this.boardDto.isLastWeekEmpty())}get isPlaning(){return this.calendarService.isPlaning}editItem(e){this.calendarService.itemEdited.emit(e)}viewItem(e){this.calendarService.itemViewed.emit(e)}deattachItem(e){const t=this.calendarService.allDays.filter(t=>t.dayId===e.day.dayId);if(t.length>0){const i=t[0].items.filter(t=>t.itemId!=e.itemId);e.day.clearItems(),i.forEach(t=>{e.day.addItem(t)})}}attachItem(e,t){const i=this.calendarService.allDays.filter(e=>e.dayId===t);i.length>0&&(e.day=i[0],i[0].items=[],i[0].items.push(e))}attachItemOnDate(e,t){let i=this;const n=this.calendarService.allDays.filter(e=>i.dateService.isSameDate(e.startDate,t));n.length>0?(e.day=n[0],n[0].items=[],n[0].items.push(e)):console.info("Missing day",t)}identifyDay(e,t){return t.dayId||t.startDate}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(g),s.Y36(b.R),s.Y36(n.YP),s.Y36(k.k4),s.Y36(n.MJ))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-board-container"]],contentQueries:function(e,t,i){if(1&e&&(s.Suo(i,I,7),s.Suo(i,D,7),s.Suo(i,C,7),s.Suo(i,Z,7)),2&e){let e;s.iGM(e=s.CRH())&&(t.selectionPanelContentRef=e.first),s.iGM(e=s.CRH())&&(t.itemContentRef=e.first),s.iGM(e=s.CRH())&&(t.navContentRef=e.first),s.iGM(e=s.CRH())&&(t.selectionEditContentRef=e.first)}},inputs:{IsEditable:"IsEditable",noHead:"noHead",isDayFullHight:"isDayFullHight",boardDto:"boardDto"},outputs:{selectedItems:"selectedItems",setup:"setup",weekCreated:"weekCreated",weekDeleted:"weekDeleted",itemDeleted:"itemDeleted",itemDeletedBulk:"itemDeletedBulk",itemCreated:"itemCreated",itemCopiedMoved:"itemCopiedMoved",itemEdited:"itemEdited",itemViewed:"itemViewed"},features:[s._Bn([g])],decls:4,vars:3,consts:[[4,"ngIf"],["cdkDropListGroup","","class","container-fluid fade-in-animation-old small-scrollbar",4,"ngIf"],["class","p-1 d-flex alert alert-primary footer-primary",4,"ngIf"],[1,"hidden","selected-items-list"],[4,"ngTemplateOutlet"],["cdkDropListGroup","",1,"container-fluid","fade-in-animation-old","small-scrollbar"],[1,"board-content-1"],[1,"board-content-2"],["class","mx-2 row  d-none d-lg-flex",4,"ngIf"],[1,"week-list-container"],["class","row bg-custom week-border",3,"hidden",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"mx-2","row","d-none","d-lg-flex"],["class","col week-day-names-header",4,"ngFor","ngForOf"],[1,"col","week-day-names-header"],[1,"row","bg-custom","week-border",3,"hidden"],["class","col-md-12 text-center week-title",4,"ngIf"],["class","col-12 col-lg week-day",4,"ngFor","ngForOf","ngForTrackBy"],[1,"col-md-12","text-center","week-title"],["class","custom-check","type","checkbox",3,"name","id","checked","checkedChange","change",4,"ngIf"],["type","checkbox",1,"custom-check",3,"name","id","checked","checkedChange","change"],[1,"col-12","col-lg","week-day"],["cdkDropList","",1,"bg-white","m-10","day-card",3,"cdkDropListData","ngClass","cdkDropListDropped"],[1,"day-container"],["class","day-name d-block d-lg-none",4,"ngIf"],["src","/assets/images/bars.png","alt","",4,"ngIf"],["class","m-1 day",4,"ngFor","ngForOf"],[1,"day-name","d-block","d-lg-none"],[1,"pull-left","m-1"],[1,"fa","fa-plus","add-btn","text-muted","auto-hide",3,"click"],["class","fa fa-paste btn-past-emtpy text-muted auto-hide",3,"click",4,"ngIf"],[1,"fa","fa-paste","btn-past-emtpy","text-muted","auto-hide",3,"click"],["src","/assets/images/bars.png","alt",""],[1,"m-1","day"],["cdkDrag","",1,"item-dto",3,"ngClass","cdkDragData"],[1,"item-drag-select"],["class","custom-check m1","type","checkbox",3,"name","id","checked","checkedChange","change",4,"ngIf"],["class","fa fa-arrows move-btn text-muted auto-hide","cdkDragHandle","",4,"ngIf"],["class","fa fa-copy  copy-btn text-muted auto-hide mx-2 mx-lg-2 mx-xl-2 d-inline-block",3,"click",4,"ngIf"],["class","fa fa-pen  edit-btn text-muted auto-hide  d-inline-block",3,"click",4,"ngIf"],["class","fa fa-trash  delete-btn text-muted auto-hide mx-2 mx-lg-2 mx-xl-2 d-inline-block",3,"click",4,"ngIf"],["class","fa fa-eye  edit-btn text-muted auto-hide mx-2 mx-lg-2 mx-xl-2 d-inline-block",3,"click",4,"ngIf"],["class","fa fa-paste past-btn text-muted auto-hide  mx-2 mx-lg-2 mx-xl-2 d-inline-block",3,"click",4,"ngIf"],["class","card-body",4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","checkbox",1,"custom-check","m1",3,"name","id","checked","checkedChange","change"],["cdkDragHandle","",1,"fa","fa-arrows","move-btn","text-muted","auto-hide"],["class","item-dto",4,"cdkDragPreview"],["class","item-dto",4,"cdkDragPlaceholder"],[1,"item-dto"],[1,"card-body"],[1,"fa","fa-copy","copy-btn","text-muted","auto-hide","mx-2","mx-lg-2","mx-xl-2","d-inline-block",3,"click"],[1,"fa","fa-pen","edit-btn","text-muted","auto-hide","d-inline-block",3,"click"],[1,"fa","fa-trash","delete-btn","text-muted","auto-hide","mx-2","mx-lg-2","mx-xl-2","d-inline-block",3,"click"],[1,"fa","fa-eye","edit-btn","text-muted","auto-hide","mx-2","mx-lg-2","mx-xl-2","d-inline-block",3,"click"],[1,"fa","fa-paste","past-btn","text-muted","auto-hide","mx-2","mx-lg-2","mx-xl-2","d-inline-block",3,"click"],[1,"row"],[1,"col","card","text-center"],[1,"col-md-12","py-2"],["class","btn btn-success mx-2",3,"click",4,"ngIf"],["class","btn btn-outline-primary mx-2",3,"click",4,"ngIf"],[1,"btn","btn-success","mx-2",3,"click"],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"p-1","d-flex","alert","alert-primary","footer-primary"],[1,"col"],[1,"badge","badge-primary"],[1,"btn","btn-sm","btn-outline-warning",3,"click"],[1,"btn-group"],["class","btn btn-sm btn-primary",3,"click",4,"ngIf"],["class","btn btn-sm btn-danger",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-primary",3,"click"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(e,t){1&e&&(s.YNc(0,S,2,1,"app-board-nav",0),s.YNc(1,ae,7,3,"div",1),s.YNc(2,de,15,11,"div",2),s._UZ(3,"div",3)),2&e&&(s.Q6J("ngIf",!t.noHead),s.xp6(1),s.Q6J("ngIf",t.boardDto),s.xp6(1),s.Q6J("ngIf",t.selectedItemsCount>0))},directives:[v.O5,y,v.tP,m.Fd,v.sg,m.Wj,v.mk,m.Zt,m.Bh,m.pV,m.Hk],pipes:[h.fuE],styles:[".day-card[_ngcontent-%COMP%]{overflow-y:auto;min-height:50px;margin-bottom:0;position:relative;padding-bottom:0}.day-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]{padding:5px 10px 0;background:#fff;position:sticky;width:100%;left:0;bottom:4px;transform:translateY(29px)}.day-card[_ngcontent-%COMP%]   .auto-hide[_ngcontent-%COMP%]{cursor:pointer}@media (min-width:1024px){.day-card[_ngcontent-%COMP%]   .auto-hide[_ngcontent-%COMP%]{visibility:hidden}}.day-card[_ngcontent-%COMP%]:hover   .auto-hide[_ngcontent-%COMP%]{visibility:visible}@media (min-width:992px){.isDayFullHight[_ngcontent-%COMP%]{height:56vh}.isDaySmallHight[_ngcontent-%COMP%]{height:30vh}}.item-selected[_ngcontent-%COMP%]{border:1px solid #dd9d02;border-radius:2px;background-color:#ffeec6}.week-day-names-header[_ngcontent-%COMP%]{padding:1px}.week-day[_ngcontent-%COMP%]{padding:1px 0;border:solid;border-width:1px;border-color:#e3e3e3}.week-title[_ngcontent-%COMP%]{border-radius:0}.add-btn[_ngcontent-%COMP%]{background:#00824e}.add-btn[_ngcontent-%COMP%], .btn-past-emtpy[_ngcontent-%COMP%]{margin:15px auto;font-size:22px;display:block;width:34px;height:34px;line-height:34px;vertical-align:middle;text-align:center;color:#fff!important;border-radius:100%;cursor:pointer}.btn-past-emtpy[_ngcontent-%COMP%]{background:#fdb915}.copy-btn[_ngcontent-%COMP%], .delete-btn[_ngcontent-%COMP%], .edit-btn[_ngcontent-%COMP%]{width:15px;height:10px}.move-btn[_ngcontent-%COMP%]{vertical-align:middle;margin:0 5px}.item-drag-select[_ngcontent-%COMP%]   .move-btn[_ngcontent-%COMP%]{width:15px;height:15px}.footer-primary[_ngcontent-%COMP%]{position:fixed;bottom:0;z-index:100;right:25vw;width:auto;width:50vw;margin-bottom:10px}@media (max-width:991px){.footer-primary[_ngcontent-%COMP%]{right:5vw;width:90vw}}@media (min-width:992px){  app-assigned-nutrition-program-manage .isDaySmallHight{height:225px!important}} [dir=rtl] app-board-container .past-btn{left:15px;right:auto}.day-container[_ngcontent-%COMP%]{position:relative}.day-container[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{position:absolute;padding:1px 10px;display:block;color:#aaa}.week-border[_ngcontent-%COMP%]{border:1px solid #e4e4e4;border:none!important}.week-list-container[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:hidden;height:79vh;padding-left:12px;padding-right:12px}.cdk-drag-placeholder[_ngcontent-%COMP%] + .cdk-drag[_ngcontent-%COMP%]{display:none}.cdk-drag-placeholder[_ngcontent-%COMP%]{color:#7f0909;background-color:#fff!important}  .cdk-drag-preview{background-color:#fff!important}"]}),e})()},56874:function(e,t,i){"use strict";i.d(t,{e:function(){return c}});var n=i(61116),s=i(69244),a=i(31041),o=i(56137),r=i(35366);let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[],imports:[[n.ez,a.u5,o.m,s._t]]}),e})()},29871:function(e,t,i){"use strict";i.d(t,{$:function(){return r}});var n=i(35366),s=i(61116);const a=function(e){return{highlighted:e}};function o(e,t){if(1&e&&(n.TgZ(0,"span",1),n._uU(1),n.qZA()),2&e){const e=t.$implicit;n.Q6J("ngClass",n.VKq(2,a,e.isSelected)),n.xp6(1),n.Oqu(e.value)}}let r=(()=>{class e{constructor(){this.parts=[]}get value(){return this._value}set value(e){this._value=e,this.setupParts()}get filter(){return this._filter}set filter(e){this._filter=e,this.setupParts()}ngOnInit(){}setupParts(){this.parts=this.getStringParts(this.value,this.filter)}getStringParts(e,t){e=null!=e?e:"",t=null!=t?t:"";let i=new Array,n=e.search(t);return n<0?i.push(new c(e,t,!1)):(n>0&&i.push(new c(e.substring(0,n),t,!1)),i.push(new c(e.substring(n,n+t.length),t,!0)),i.push(new c(e.substring(n+t.length),t,!1))),i}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-highlighter"]],inputs:{value:"value",filter:"filter"},decls:1,vars:1,consts:[[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"]],template:function(e,t){1&e&&n.YNc(0,o,2,4,"span",0),2&e&&n.Q6J("ngForOf",t.parts)},directives:[s.sg,s.mk],styles:[".highlighted[_ngcontent-%COMP%]{background-color:aqua!important}"]}),e})();class c{constructor(e,t,i){this.value=e,this.searchText=t,this.isSelected=i}}},98462:function(e,t,i){"use strict";i.d(t,{m:function(){return h}});var n=i(35366),s=i(31041),a=i(55679),o=i(46700),r=i(99046),c=i(23733);function l(e,t){if(1&e&&(n.TgZ(0,"h3"),n._uU(1),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.hij(" ",e.modalTitle," ")}}function d(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"form",3),n.NdJ("ngSubmit",function(){return n.CHM(e),n.oxw().submitForm()}),n.TgZ(1,"div",4),n.TgZ(2,"div",5),n.TgZ(3,"label",6),n._uU(4),n._uU(5,": "),n.qZA(),n.TgZ(6,"div",7),n.TgZ(7,"div",8),n.TgZ(8,"button",9),n.NdJ("click",function(){return n.CHM(e),n.oxw().add()}),n._UZ(9,"i",10),n.qZA(),n.qZA(),n._UZ(10,"input",11),n.TgZ(11,"div",12),n.TgZ(12,"button",9),n.NdJ("click",function(){return n.CHM(e),n.oxw().minus()}),n._UZ(13,"i",13),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"div",14),n.TgZ(15,"button",15,16),n._uU(17),n.ALo(18,"abpLocalization"),n.qZA(),n.TgZ(19,"button",17),n._UZ(20,"i",18),n._uU(21),n.ALo(22,"abpLocalization"),n.qZA(),n.qZA(),n.qZA()}if(2&e){const e=n.oxw();n.Q6J("formGroup",e.form),n.xp6(4),n.hij(" ",e.modalLabel," "),n.xp6(13),n.hij(" ",n.lcZ(18,4,"AbpUi::Cancel")," "),n.xp6(4),n.hij(" ",n.lcZ(22,6,"::Save")," ")}}let h=(()=>{class e{constructor(e){this.fb=e,this.isModalBusy=!1,this.isModalOpen=!1,this.step=2,this.modalTitle="",this.modalLabel="",this.onConfirm=new n.vpe}ngOnInit(){}buildForm(e){this.form=this.fb.group({adjust:[e||0,[s.kI.required]]}),this.isModalOpen=!0}show(e,t){this.buildForm(e),t&&(this.modalLabel=t)}submitForm(){const e=this.form.get("adjust").value;this.onConfirm.emit(e),setTimeout(()=>{this.isModalOpen=!1},100)}add(){this.form.get("adjust").setValue((this.form.get("adjust").value||0)+this.step)}minus(){this.form.get("adjust").setValue((this.form.get("adjust").value||0)-this.step)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.qu))},e.\u0275cmp=n.Xpm({type:e,selectors:[["past-adjust"]],inputs:{step:"step",modalTitle:"modalTitle",modalLabel:"modalLabel"},outputs:{onConfirm:"onConfirm",show:"show"},decls:5,vars:2,consts:[["size","md",3,"busy","visible","visibleChange"],["abpHeader",""],["abpBody",""],["validateOnSubmit","",1,"app-assign-exercise-program",3,"formGroup","ngSubmit"],[1,"mt-2","fade-in-top","row"],[1,"form-group","col-md-12"],["for","app-user-coordinator-app-user-id"],[1,"input-group"],[1,"input-group-prepend"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-plus"],["type","number","formControlName","adjust",1,"form-control"],[1,"input-group-append"],[1,"fa","fa-minus"],[1,"col-12","modal-footer"],["type","button",1,"btn","btn-secondary","btn-cancel"],["abpClose",""],["type","submit",1,"btn","btn-success","btn-save"],[1,"fa","fa-check"]],template:function(e,t){1&e&&(n.TgZ(0,"abp-modal",0),n.NdJ("visibleChange",function(e){return t.isModalOpen=e}),n.YNc(1,l,2,1,"ng-template",null,1,n.W1O),n.YNc(3,d,23,8,"ng-template",null,2,n.W1O),n.qZA()),2&e&&n.Q6J("busy",t.isModalBusy)("visible",t.isModalOpen)},directives:[a.zS,s._Y,s.JL,o.YzZ,s.sg,r.hL,s.wV,s.Fj,c.m,s.JJ,s.u,r.J5],pipes:[o.fuE],encapsulation:2}),e})()},55794:function(e,t,i){"use strict";i.d(t,{a:function(){return a}});var n=i(31041),s=i(35366);let a=(()=>{class e{validate(e){const t=n.kI.min(+this.min)(e);return t&&t.min?{min:!0}:null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=s.lG2({type:e,selectors:[["","min",""]],inputs:{min:"min"},features:[s._Bn([{provide:n.Cf,useExisting:e,multi:!0}])]}),e})()}}]);