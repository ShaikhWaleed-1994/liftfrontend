(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[88562],{57066:function(t,i,e){"use strict";e.d(i,{r:function(){return m}});var n=e(35366),o=e(61116),a=e(46700);function s(t,i){if(1&t&&(n.TgZ(0,"div",2),n.ALo(1,"abpLocalization"),n._UZ(2,"img",3),n.TgZ(3,"div",4),n._uU(4),n.ALo(5,"number"),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.s9C("title",n.lcZ(1,2,"::Calories")),n.xp6(4),n.Oqu(n.xi3(5,4,t.defaultCalories,"1.0-0"))}}function r(t,i){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.ALo(2,"number"),n.qZA()),2&t){const t=n.oxw(2);n.xp6(1),n.hij("",n.xi3(2,1,t.proteinsCaloriesRate,"1.0-0"),"%")}}function l(t,i){if(1&t&&(n.TgZ(0,"div",2),n.ALo(1,"abpLocalization"),n._UZ(2,"img",5),n.TgZ(3,"div",4),n._uU(4),n.ALo(5,"number"),n.qZA(),n.YNc(6,r,3,4,"div",6),n.qZA()),2&t){const t=n.oxw();n.s9C("title",n.lcZ(1,3,"::Proteins")),n.xp6(4),n.Oqu(n.xi3(5,5,t.proteins,"1.0-0")),n.xp6(2),n.Q6J("ngIf",t.isShowPercent)}}function c(t,i){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.ALo(2,"number"),n.qZA()),2&t){const t=n.oxw(2);n.xp6(1),n.hij("",n.xi3(2,1,t.carbsCaloriesRate,"1.0-0"),"%")}}function u(t,i){if(1&t&&(n.TgZ(0,"div",2),n.ALo(1,"abpLocalization"),n._UZ(2,"img",7),n.TgZ(3,"div",4),n._uU(4),n.ALo(5,"number"),n.qZA(),n.YNc(6,c,3,4,"div",6),n.qZA()),2&t){const t=n.oxw();n.s9C("title",n.lcZ(1,3,"::Carbs")),n.xp6(4),n.Oqu(n.xi3(5,5,t.carbs,"1.0-0")),n.xp6(2),n.Q6J("ngIf",t.isShowPercent)}}function d(t,i){if(1&t&&(n.TgZ(0,"div",4),n._uU(1),n.ALo(2,"number"),n.qZA()),2&t){const t=n.oxw(2);n.xp6(1),n.hij("",n.xi3(2,1,t.fatsCaloriesRate,"1.0-0"),"%")}}function g(t,i){if(1&t&&(n.TgZ(0,"div",2),n.ALo(1,"abpLocalization"),n._UZ(2,"img",8),n.TgZ(3,"div",4),n._uU(4),n.ALo(5,"number"),n.qZA(),n.YNc(6,d,3,4,"div",6),n.qZA()),2&t){const t=n.oxw();n.s9C("title",n.lcZ(1,3,"::Fats")),n.xp6(4),n.Oqu(n.xi3(5,5,t.fats,"1.0-0")),n.xp6(2),n.Q6J("ngIf",t.isShowPercent)}}const p=["*"];let m=(()=>{class t{constructor(){this.isShowPercent=!0}ngOnInit(){}get proteinsCalories(){return 4*this.proteins}get carbsCalories(){return 4*this.carbs}get fatsCalories(){return 9*this.fats}get calories(){return this.proteinsCalories+this.carbsCalories+this.fatsCalories}get proteinsCaloriesRate(){return 0===this.calories?0:this.proteinsCalories/this.calories*100}get carbsCaloriesRate(){return 0===this.calories?0:this.carbsCalories/this.calories*100}get fatsCaloriesRate(){return 0===this.calories?0:this.fatsCalories/this.calories*100}get isLowCarbs(){return!!this.calories&&this.carbsCalories<this.fatsCalories-100&&this.carbsCalories<this.proteinsCalories-100}get isLowFats(){return!!this.calories&&this.fatsCalories<this.carbsCalories-100&&this.fatsCalories<this.proteinsCalories-100}get isHightProtine(){return!!this.calories&&this.proteinsCalories>this.carbsCalories+100&&this.proteinsCalories<this.fatsCalories+100}get isBalanced(){return!!this.calories&&!(this.isHightProtine||this.isLowCarbs||this.isLowFats)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-nutrition-totals"]],inputs:{defaultCalories:"defaultCalories",proteins:"proteins",carbs:"carbs",fats:"fats",isShowPercent:"isShowPercent"},ngContentSelectors:p,decls:6,vars:4,consts:[[1,"text-center"],["class","badge badge-info-old m-0",3,"title",4,"ngIf"],[1,"badge","badge-info-old","m-0",3,"title"],["src","/assets/images/calorie.svg"],[1,"badge","badge-inner"],["src","/assets/images/meat.svg"],["class","badge badge-inner",4,"ngIf"],["src","/assets/images/carb.svg"],["src","/assets/images/fat.svg"]],template:function(t,i){1&t&&(n.F$t(),n.TgZ(0,"div",0),n.YNc(1,s,6,7,"div",1),n.YNc(2,l,7,8,"div",1),n.YNc(3,u,7,8,"div",1),n.YNc(4,g,7,8,"div",1),n.Hsn(5),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",i.defaultCalories),n.xp6(1),n.Q6J("ngIf",i.proteins),n.xp6(1),n.Q6J("ngIf",i.carbs),n.xp6(1),n.Q6J("ngIf",i.fats))},directives:[o.O5],pipes:[a.fuE,o.JJ],styles:[".badge-inner[_ngcontent-%COMP%]{background-color:#fff;color:#000;font-size:100%}"]}),t})()},53181:function(t,i,e){"use strict";e.d(i,{J:function(){return pt}});var n=e(64569),o=e(46700),a=e(55679),s=e(35366),r=e(31041),l=e(2996),c=e(11520),u=e(43835),d=e(44689),g=e(44019),p=e(30212),m=e(8183),h=e(28450),Z=e(98073),f=e(45908),b=e(73545),A=e(43117),v=e(94773),x=e(23733),y=e(56410),C=e(10135),L=e(3183),q=e(61116),T=e(17647),w=e(55e3),N=e(57066),U=e(99046),I=e(42163),O=e(1663),J=e(52201);function _(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"button",41),s.NdJ("click",function(){return s.CHM(t),s.oxw().create()}),s._UZ(1,"i",42),s._uU(2),s.ALo(3,"abpLocalization"),s.qZA()}2&t&&(s.xp6(2),s.hij(" ",s.lcZ(3,1,"::AddNutrition")," "))}const k=function(t){return{attachmentId:t,entity:"Nutrition"}};function S(t,i){1&t&&(s._UZ(0,"img",50),s.ALo(1,"async"),s.ALo(2,"imgdownload")),2&t&&s.Q6J("src",s.lcZ(1,1,s.lcZ(2,3,s.VKq(5,k,i.row.nutrition.imageAttachmentId))),s.LSH)}function z(t,i){1&t&&s._UZ(0,"i",55)}function M(t,i){if(1&t&&(s.TgZ(0,"div",51),s._UZ(1,"is-empty",52),s.YNc(2,z,1,0,"i",53),s.qZA(),s.TgZ(3,"div",54),s._UZ(4,"is-empty",52),s.qZA()),2&t){const t=i.row;s.xp6(1),s.Q6J("value",t.nutrition.nutritionName),s.xp6(1),s.Q6J("ngIf",t.isPublic),s.xp6(2),s.Q6J("value",t.nutrition.nutritionNameEn)}}function F(t,i){if(1&t&&s._UZ(0,"app-nutrition-totals",56),2&t){const t=i.row;s.Q6J("defaultCalories",t.nutrition.calories)("proteins",t.nutrition.proteins)("carbs",t.nutrition.carbs)("fats",t.nutrition.fats)}}function Q(t,i){if(1&t&&(s.TgZ(0,"div",57),s._uU(1),s.qZA(),s.TgZ(2,"div",58),s._uU(3),s.qZA(),s._UZ(4,"div",59),s.TgZ(5,"div",57),s._uU(6),s.qZA(),s.TgZ(7,"div",58),s._uU(8),s.qZA()),2&t){const t=i.row;s.xp6(1),s.hij(" ",null==t.unit?null:t.unit.unitName," "),s.xp6(2),s.hij(" ",null==t.unit?null:t.unit.unitNameEn," "),s.xp6(3),s.hij(" ",null==t.nutrition.nutritionCategory?null:t.nutrition.nutritionCategory.nutritionCategoryName," "),s.xp6(2),s.hij(" ",null==t.nutrition.nutritionCategory?null:t.nutrition.nutritionCategory.nutritionCategoryNameEn," ")}}function Y(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"div",63),s.NdJ("click",function(){s.CHM(t);const i=s.oxw().row;return s.oxw(2).activate(i)}),s.ALo(1,"abpLocalization"),s._UZ(2,"i",64),s.TgZ(3,"div"),s._uU(4),s.ALo(5,"abpLocalization"),s.qZA(),s.qZA()}2&t&&(s.Q6J("ngbTooltip",s.lcZ(1,2,"::Activate")),s.xp6(4),s.hij(" ",s.lcZ(5,4,"::StatusGeneralLookup")," "))}function P(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"div",63),s.NdJ("click",function(){s.CHM(t);const i=s.oxw().row;return s.oxw(2).deactivate(i)}),s.ALo(1,"abpLocalization"),s._UZ(2,"i",65),s.TgZ(3,"div"),s._uU(4),s.ALo(5,"abpLocalization"),s.qZA(),s.qZA()}2&t&&(s.Q6J("ngbTooltip",s.lcZ(1,2,"::Deactivate")),s.xp6(4),s.hij(" ",s.lcZ(5,4,"::StatusGeneralLookup")," "))}function j(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"div",66),s.NdJ("click",function(){s.CHM(t);const i=s.oxw().row;return s.oxw(2).view(i)}),s._UZ(1,"i",67),s.TgZ(2,"div"),s._uU(3),s.ALo(4,"abpLocalization"),s.qZA(),s.qZA()}2&t&&(s.xp6(3),s.hij(" ",s.lcZ(4,1,"::View")," "))}function E(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"div",66),s.NdJ("click",function(){s.CHM(t);const i=s.oxw().row;return s.oxw(2).update(i)}),s._UZ(1,"i",68),s.TgZ(2,"div"),s._uU(3),s.ALo(4,"abpLocalization"),s.qZA(),s.qZA()}2&t&&(s.xp6(3),s.hij(" ",s.lcZ(4,1,"AbpUi::Edit")," "))}function R(t,i){if(1&t&&(s.TgZ(0,"div",60),s.YNc(1,Y,6,6,"div",61),s.YNc(2,P,6,6,"div",61),s.YNc(3,j,5,3,"div",62),s.YNc(4,E,5,3,"div",62),s.qZA()),2&t){const t=i.row,e=s.oxw(2);s.xp6(1),s.Q6J("ngIf",t.nutrition.statusGeneralLookupId==e.ItemStatus.Deactivated),s.xp6(1),s.Q6J("ngIf",t.nutrition.statusGeneralLookupId==e.ItemStatus.Activated),s.xp6(1),s.Q6J("ngIf",!t.editable),s.xp6(1),s.Q6J("ngIf",t.editable)}}const H=function(t){return{emptyMessage:t}};function D(t,i){if(1&t&&(s.TgZ(0,"ngx-datatable",43),s.TgZ(1,"ngx-datatable-column",44),s.ALo(2,"abpLocalization"),s.YNc(3,S,3,7,"ng-template",45),s.qZA(),s.TgZ(4,"ngx-datatable-column",46),s.ALo(5,"abpLocalization"),s.YNc(6,M,5,3,"ng-template",45),s.qZA(),s.TgZ(7,"ngx-datatable-column",47),s.ALo(8,"abpLocalization"),s.YNc(9,F,1,4,"ng-template",45),s.qZA(),s.TgZ(10,"ngx-datatable-column",48),s.ALo(11,"abpLocalization"),s.YNc(12,Q,9,4,"ng-template",45),s.qZA(),s.TgZ(13,"ngx-datatable-column",49),s.ALo(14,"abpLocalization"),s.YNc(15,R,5,4,"ng-template",45),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.Q6J("count",t.data.totalCount)("headerHeight",0)("list",t.list)("messages",s.VKq(26,H,t.isLoading?'<div class="loader"><div></div></div>':'<div class="data-empty"></div>'))("rows",t.data.items),s.xp6(1),s.s9C("name",s.lcZ(2,16,"::imageAttachmentId")),s.Q6J("width",15),s.xp6(3),s.s9C("name",s.lcZ(5,18,"::NutritionName")),s.xp6(3),s.s9C("name",s.lcZ(8,20,"::Calories")),s.Q6J("width",250),s.xp6(3),s.s9C("name",s.lcZ(11,22,"::Unit")),s.Q6J("width",25),s.xp6(3),s.Q6J("maxWidth",250)("name",s.lcZ(14,24,"AbpUi::Actions"))("sortable",!1)("width",150)}}function V(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"div",71),s.NdJ("click",function(){return s.CHM(t),s.oxw(2).isAdvanced=!0}),s.ALo(1,"abpLocalization"),s._UZ(2,"i",64),s.TgZ(3,"span"),s._uU(4),s.ALo(5,"abpLocalization"),s.qZA(),s.qZA()}2&t&&(s.Q6J("ngbTooltip",s.lcZ(1,2,"::Activate")),s.xp6(4),s.hij(" ",s.lcZ(5,4,"::isAdvanced")," "))}function B(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"div",71),s.NdJ("click",function(){return s.CHM(t),s.oxw(2).isAdvanced=!1}),s.ALo(1,"abpLocalization"),s._UZ(2,"i",65),s.TgZ(3,"span"),s._uU(4),s.ALo(5,"abpLocalization"),s.qZA(),s.qZA()}2&t&&(s.Q6J("ngbTooltip",s.lcZ(1,2,"::Deactivate")),s.xp6(4),s.hij(" ",s.lcZ(5,4,"::isAdvanced")," "))}function G(t,i){if(1&t&&(s.TgZ(0,"h3"),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA(),s.TgZ(3,"div",69),s.YNc(4,V,6,6,"div",70),s.YNc(5,B,6,6,"div",70),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(s.lcZ(2,3,t.selected?t.isReadOnly?"::View":"AbpUi::Edit":"::AddNutrition")),s.xp6(3),s.Q6J("ngIf",!t.isAdvanced),s.xp6(1),s.Q6J("ngIf",t.isAdvanced)}}function K(t,i){1&t&&(s.TgZ(0,"div",109),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::InPublicLibrary")," "))}function W(t,i){1&t&&(s.TgZ(0,"label",110),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::CreatedBy")," "))}function X(t,i){if(1&t&&(s.TgZ(0,"div",86),s.YNc(1,K,3,3,"div",107),s.YNc(2,W,3,3,"label",108),s._uU(3),s.qZA()),2&t){const t=s.oxw(2);s.xp6(1),s.Q6J("ngIf",!t.getAssignedToCoach),s.xp6(1),s.Q6J("ngIf",t.getAssignedToCoach),s.xp6(1),s.hij(" ",t.getAssignedToCoach," ")}}function $(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"button",113),s.NdJ("click",function(i){return s.CHM(t),s.oxw(3).clearAssignedCoach(i)}),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()}2&t&&(s.xp6(1),s.hij(" ",s.lcZ(2,1,"::MoveToPublicLibrary")," "))}function tt(t,i){if(1&t&&(s.TgZ(0,"div",111),s.YNc(1,$,3,3,"button",112),s.qZA()),2&t){const t=s.oxw(2);s.xp6(1),s.Q6J("ngIf",t.isAssignedToCoach)}}function it(t,i){1&t&&(s.TgZ(0,"span",114),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"::Optional")))}function et(t,i){1&t&&(s.TgZ(0,"span",114),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"::Optional")))}function nt(t,i){1&t&&(s.TgZ(0,"div"),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"::YouCanAddNewUnitAndPressEnter")))}function ot(t,i){1&t&&(s.TgZ(0,"div"),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"::YouCanAddNewCategoryAndPressEnter")))}function at(t,i){1&t&&(s.TgZ(0,"span",114),s._uU(1),s.ALo(2,"abpLocalization"),s.ALo(3,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.AsE("",s.lcZ(2,2,"::Optional")," ",s.lcZ(3,4,"::ImageRequiredSize")," "))}function st(t,i){1&t&&(s.TgZ(0,"div",86),s.TgZ(1,"label",115),s._uU(2),s.ALo(3,"abpLocalization"),s.qZA(),s.TgZ(4,"select",116),s._UZ(5,"option"),s.TgZ(6,"option",26),s._uU(7),s.ALo(8,"abpLocalization"),s.qZA(),s.TgZ(9,"option",26),s._uU(10),s.ALo(11,"abpLocalization"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Oqu(s.lcZ(3,5,"::ProgramCategory")),s.xp6(4),s.Q6J("ngValue",0),s.xp6(1),s.Oqu(s.lcZ(8,7,"::Normal")),s.xp6(2),s.Q6J("ngValue",1),s.xp6(1),s.Oqu(s.lcZ(11,9,"::SelfTraining")))}function rt(t,i){1&t&&(s.TgZ(0,"span",114),s._uU(1),s.ALo(2,"abpLocalization"),s.qZA()),2&t&&(s.xp6(1),s.Oqu(s.lcZ(2,1,"::Optional")))}function lt(t,i){if(1&t&&(s.TgZ(0,"button",121),s._UZ(1,"i",122),s._uU(2),s.ALo(3,"abpLocalization"),s.qZA()),2&t){const t=s.oxw(3);s.Q6J("disabled",t.isModalBusy),s.xp6(2),s.hij(" ",s.lcZ(3,2,"AbpUi::Save")," ")}}function ct(t,i){if(1&t&&(s.TgZ(0,"div",117),s.TgZ(1,"button",118,119),s._uU(3),s.ALo(4,"abpLocalization"),s.qZA(),s.YNc(5,lt,4,4,"button",120),s.qZA()),2&t){const t=s.oxw(2);s.xp6(3),s.Oqu(s.lcZ(4,2,"AbpUi::Cancel")),s.xp6(2),s.Q6J("ngIf",!t.isReadOnly)}}const ut=function(t){return{"d-none":t}};function dt(t,i){if(1&t){const t=s.EpF();s.TgZ(0,"form",72),s.NdJ("ngSubmit",function(){return s.CHM(t),s.oxw().submitForm()}),s.TgZ(1,"div",73),s.YNc(2,X,4,3,"div",74),s.YNc(3,tt,2,1,"div",75),s.TgZ(4,"div",76),s.TgZ(5,"label",77),s._uU(6),s.ALo(7,"abpLocalization"),s.qZA(),s._UZ(8,"input",78),s.qZA(),s.TgZ(9,"div",76),s.TgZ(10,"label",79),s._uU(11),s.ALo(12,"abpLocalization"),s.qZA(),s._UZ(13,"input",80),s.qZA(),s.TgZ(14,"div",81),s.TgZ(15,"label",82),s._uU(16),s.ALo(17,"abpLocalization"),s.YNc(18,it,3,3,"span",83),s.qZA(),s._UZ(19,"textarea",84),s.qZA(),s.TgZ(20,"div",81),s.TgZ(21,"label",82),s._uU(22),s.ALo(23,"abpLocalization"),s.YNc(24,et,3,3,"span",83),s.qZA(),s._UZ(25,"textarea",85),s.qZA(),s.TgZ(26,"div",86),s.TgZ(27,"label",87),s._uU(28),s.ALo(29,"abpLocalization"),s.qZA(),s._UZ(30,"input",88),s.qZA(),s.TgZ(31,"div",86),s.TgZ(32,"label",89),s._uU(33),s.ALo(34,"abpLocalization"),s.qZA(),s._UZ(35,"input",90),s.qZA(),s.TgZ(36,"div",86),s.TgZ(37,"label",91),s._uU(38),s.ALo(39,"abpLocalization"),s.qZA(),s._UZ(40,"input",92),s.qZA(),s.TgZ(41,"div",86),s.TgZ(42,"label",93),s._uU(43),s.ALo(44,"abpLocalization"),s.qZA(),s._UZ(45,"input",94),s.qZA(),s.TgZ(46,"div",86),s.TgZ(47,"label",95),s._uU(48),s.ALo(49,"abpLocalization"),s.qZA(),s.TgZ(50,"p-autoComplete",96),s.NdJ("completeMethod",function(i){return s.CHM(t),s.oxw().startSearchUnits(i)})("keydown",function(i){return s.CHM(t),s.oxw().unitkeyDown(i)})("onClear",function(){return s.CHM(t),s.oxw().onClear()})("search",function(i){return s.CHM(t),s.oxw().startSearchUnits(i)}),s.ALo(51,"abpLocalization"),s.qZA(),s.YNc(52,nt,3,3,"div",97),s.qZA(),s.TgZ(53,"div",86),s.TgZ(54,"label",98),s._uU(55),s.ALo(56,"abpLocalization"),s.qZA(),s.TgZ(57,"p-autoComplete",99),s.NdJ("completeMethod",function(i){return s.CHM(t),s.oxw().startSearchCategories(i)})("keydown",function(i){return s.CHM(t),s.oxw().categorykeyDown(i)})("onClear",function(){return s.CHM(t),s.oxw().onClear()})("search",function(i){return s.CHM(t),s.oxw().startSearchCategories(i)}),s.ALo(58,"abpLocalization"),s.qZA(),s.YNc(59,ot,3,3,"div",97),s.qZA(),s.TgZ(60,"div",100),s.TgZ(61,"label",101),s._uU(62),s.ALo(63,"abpLocalization"),s.YNc(64,at,4,6,"span",83),s.qZA(),s.TgZ(65,"sw-attachment",102),s.NdJ("attachmentUpdated",function(i){return s.CHM(t),s.oxw().attachmentUpdated(i)}),s.qZA(),s.qZA(),s.YNc(66,st,12,11,"div",103),s.TgZ(67,"div",86),s.TgZ(68,"label",104),s._uU(69),s.ALo(70,"abpLocalization"),s.qZA(),s.YNc(71,rt,3,3,"span",83),s._UZ(72,"input",105),s.qZA(),s.YNc(73,ct,6,4,"div",106),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("formGroup",t.form),s.xp6(2),s.Q6J("ngIf",t.isCurrentUserAdmin),s.xp6(1),s.Q6J("ngIf",t.isCurrentUserAdmin),s.xp6(3),s.Oqu(s.lcZ(7,47,"::NutritionName")),s.xp6(2),s.Q6J("readOnly",t.isReadOnly),s.xp6(3),s.Oqu(s.lcZ(12,49,"::NutritionNameEn")),s.xp6(2),s.Q6J("readOnly",t.isReadOnly),s.xp6(1),s.Q6J("ngClass",s.VKq(75,ut,!t.isAdvanced)),s.xp6(2),s.hij(" ",s.lcZ(17,51,"::Description")," "),s.xp6(2),s.Q6J("ngIf",!t.isReadOnly),s.xp6(1),s.Q6J("readOnly",t.isReadOnly),s.xp6(1),s.Q6J("ngClass",s.VKq(77,ut,!t.isAdvanced)),s.xp6(2),s.hij(" ",s.lcZ(23,53,"::DescriptionEn")," "),s.xp6(2),s.Q6J("ngIf",!t.isReadOnly),s.xp6(1),s.Q6J("readOnly",t.isReadOnly),s.xp6(3),s.hij(" ",s.lcZ(29,55,"::Calories")," "),s.xp6(2),s.Q6J("readOnly",t.isReadOnly),s.xp6(3),s.Oqu(s.lcZ(34,57,"::Proteins")),s.xp6(2),s.Q6J("readOnly",t.isReadOnly),s.xp6(3),s.Oqu(s.lcZ(39,59,"::Carbs")),s.xp6(2),s.Q6J("readOnly",t.isReadOnly),s.xp6(3),s.Oqu(s.lcZ(44,61,"::Fats")),s.xp6(2),s.Q6J("readOnly",t.isReadOnly),s.xp6(3),s.Oqu(s.lcZ(49,63,"::Unit")),s.xp6(2),s.s9C("placeholder",s.lcZ(51,65,"::UnitName")),s.Q6J("disabled",t.isReadOnly)("dropdown",!0)("suggestions",t.AllUnits)("type",t.searchType())("field",t.langService.isRtl?"displayName":"displayNameEn"),s.xp6(2),s.Q6J("ngIf",t.isShowAddingUnitComment),s.xp6(3),s.Oqu(s.lcZ(56,67,"::NutritionCategory")),s.xp6(2),s.s9C("placeholder",s.lcZ(58,69,"::NutritionCategoryName")),s.Q6J("disabled",t.isReadOnly)("dropdown",!0)("suggestions",t.AllCategories)("type",t.searchType())("field",t.langService.isRtl?"displayName":"displayNameEn"),s.xp6(2),s.Q6J("ngIf",t.isShowAddingCategoryComment),s.xp6(3),s.hij(" ",s.lcZ(63,71,"::ImageAttachmentId")," "),s.xp6(2),s.Q6J("ngIf",!t.isReadOnly),s.xp6(1),s.Q6J("maxFilesCount",1)("readonly",t.isReadOnly),s.xp6(1),s.Q6J("abpPermission","Physic.SelfTraining"),s.xp6(3),s.hij(" ",s.lcZ(70,73,"::OrderInList")," "),s.xp6(2),s.Q6J("ngIf",!t.isReadOnly),s.xp6(2),s.Q6J("ngIf",!t.isReadOnly)}}const gt=function(){return{standalone:!0}};let pt=(()=>{class t{constructor(t,i,e,o,a,r,l,c,u,d,g,p){this.list=t,this.track=i,this.service=e,this.confirmation=o,this.permissionService=a,this.dateService=r,this.unitService=l,this.langService=c,this.localCacheService=u,this.categoryService=d,this.fb=g,this.toast=p,this.data={items:[],totalCount:0},this.onSaved=new s.vpe,this.hideList=!1,this.filters={publicLibraryFilter:n.wx.All},this.isFiltersHidden=!0,this.isModalBusy=!1,this.isModalOpen=!1,this.isAdvanced=!1,this.isReadOnly=!0,this.ItemStatus=m.M,this.isLoading=!0,this.isShowActive=!0,this.PublicLibraryFilter=n.wx,this.isShowAddingUnitComment=!1,this.isShowAddingCategoryComment=!1}get showFilter(){return this._showFilter}set showFilter(t){this._showFilter=t,this.isFiltersHidden=!t}ngOnInit(){const t=this;this.getData=i=>{let e=Object.assign({},this.filters);this.isShowActive&&(e.statusGeneralLookupId=15);const n=Object.assign(Object.assign({},i),e),o=`nutritions_${JSON.stringify(n)}`;return this.service.getList(n).pipe((0,h.z)(t.localCacheService,o,60)).pipe((0,c.x)(()=>this.isLoading=!1))},this.setData=t=>this.data=t,this.list.hookToQuery(this.getData).subscribe(this.setData)}clearFilters(){this.filters={},this.filters.publicLibraryFilter=n.wx.All,this.list.get()}buildForm(t){var i,e,n,o,a,s,l,c;let{programCategory:u,orderInList:d,nutritionName:g,nutritionNameEn:m,description:h,descriptionEn:Z,imageAttachmentId:f,calories:b,proteins:A,carbs:v,fats:x,fibers:y,assignedAppUserId:C,polyunsaturatedFats:L,unsaturatedFats:q}=(null===(i=this.selected)||void 0===i?void 0:i.nutrition)||{};g||(g=t),m||(m=t);let T={};(null===(e=this.selected)||void 0===e?void 0:e.appUser)&&(T.id=this.selected.appUser.id,T.displayName=this.selected.appUser.name);let w={};w=this.selected?{id:null===(n=this.selected)||void 0===n?void 0:n.unit.id,displayName:null===(o=this.selected)||void 0===o?void 0:o.unit.unitName,displayNameEn:null===(a=this.selected)||void 0===a?void 0:a.unit.unitNameEn}:null;let N={};N=this.selected?{id:null===(s=this.selected)||void 0===s?void 0:s.nutrition.nutritionCategory.id,displayName:null===(l=this.selected)||void 0===l?void 0:l.nutrition.nutritionCategory.nutritionCategoryName,displayNameEn:null===(c=this.selected)||void 0===c?void 0:c.nutrition.nutritionCategory.nutritionCategoryNameEn}:null,y=y||0,d||0===d||(d=1e3),this.form=this.fb.group({programCategory:[null!=u?u:0,[r.kI.required]],orderInList:[null!=d?d:0,[r.kI.required]],nutritionName:[null!=g?g:null,[r.kI.required,r.kI.minLength(1),r.kI.maxLength(100),p.d.InvalidCharacterValidator()]],nutritionNameEn:[null!=m?m:null,[r.kI.required,r.kI.minLength(1),r.kI.maxLength(100),p.d.InvalidCharacterValidator()]],description:[null!=h?h:null,[p.d.InvalidCharacterValidator(),r.kI.maxLength(250)]],descriptionEn:[null!=Z?Z:null,[p.d.InvalidCharacterValidator(),r.kI.maxLength(250)]],imageAttachmentId:[null!=f?f:null,[]],calories:[null!=b?b:null,[r.kI.required,r.kI.min(0),r.kI.max(1e4)]],proteins:[null!=A?A:null,[r.kI.required,r.kI.min(0),r.kI.max(1e4)]],carbs:[null!=v?v:null,[r.kI.required,r.kI.min(0),r.kI.max(1e4)]],fats:[null!=x?x:null,[r.kI.required,r.kI.min(0),r.kI.max(1e4)]],fibers:[null!=y?y:null,[r.kI.min(0),r.kI.max(1e4)]],unitId:[null!=w?w:null,[r.kI.required]],imageAttachmentFiles:[void 0],assignedAppUserId:[null!=C?C:null,[]],assignedAppUserId2:[T,[]],polyunsaturatedFats:[null!=L?L:0,[]],unsaturatedFats:[null!=q?q:0,[]],nutritionCategoryId:[null!=N?N:null,[r.kI.required]]}),this.form.get("assignedAppUserId2").valueChanges.subscribe(t=>{t&&t.id?this.form.get("assignedAppUserId").setValue(t.id):this.form.get("assignedAppUserId").reset()})}get getAssignedToCoach(){var t;return this.form?null===(t=this.form.get("assignedAppUserId2").value)||void 0===t?void 0:t.displayName:""}get isAssignedToCoach(){return this.form?this.form.get("assignedAppUserId2").value&&this.form.get("assignedAppUserId2").value.id:""}get isCurrentUserAdmin(){return this.permissionService.getGrantedPolicy("PhysicAdmin")}clearAssignedCoach(t){t.preventDefault(),t.stopPropagation();const i=this;this.confirmation.warn("::MoveNutritionToPublicLibraryConfirm","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,u.h)(t=>t===a.Tv.Status.confirm),(0,d.w)(()=>(i.form.get("assignedAppUserId2").setValue({}),null))).subscribe(()=>{})}hideForm(){this.isModalOpen=!1,this.form.reset()}showForm(t){this.buildForm(t),this.isModalOpen=!0}submitForm(){if(this.form.invalid)return;let t=Object.assign({},this.form.value);t.unitId=this.form.get("unitId").value.id,t.nutritionCategoryId=this.form.get("nutritionCategoryId").value.id,this.isModalBusy=!0;const i=this.selected?this.service.update(this.selected.nutrition.id,t):this.service.create(t),e=this;i.pipe((0,c.x)(()=>this.isModalBusy=!1),(0,g.b)(()=>this.hideForm())).subscribe(t=>{e.localCacheService.clearAll();let i={};i.skipCount=10*this.list.page,e.getData(i).subscribe(t=>{0==t.items.length?e.list.get():e.setData(t)}),this.onSaved.emit(t)})}create(t){this.selected=void 0,this.isReadOnly=!1,this.showForm(t)}update(t){this.selected=t,this.isReadOnly=!1,this.showForm()}attachmentUpdated(t){this.form.get("imageAttachmentFiles").setValue(t.files.toString())}activate(t){if(!t.editable)return void this.toast.error("::NutritionBelongsToAnotherCoach");const i=this;this.confirmation.warn("::ActivateNutritionConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,u.h)(t=>t===a.Tv.Status.confirm),(0,d.w)(()=>(this.service.enableNutritionById(t.nutrition.id).subscribe(t=>{this.toast.success("::ActivatedSuccessfully");let e={};e.skipCount=10*this.list.page,i.getData(e).subscribe(t=>{0==t.items.length||0==t.items.length?i.list.get():i.setData(t)})}),null))).subscribe(()=>{})}deactivate(t){if(!t.editable)return void this.toast.error("::NutritionBelongsToAnotherCoach");const i=this;this.confirmation.warn("::DeactivateNutritionConfirmationMessage","::AreYouSure",{messageLocalizationParams:[]}).pipe((0,u.h)(t=>t===a.Tv.Status.confirm),(0,d.w)(()=>(this.service.disableNutritionById(t.nutrition.id).subscribe(t=>{this.toast.success("::DeactivatedSuccessfully");let e={};e.skipCount=10*this.list.page,i.getData(e).subscribe(t=>{0==t.items.length?i.list.get():i.setData(t)})}),null))).subscribe(()=>{})}view(t){this.selected=t,this.isReadOnly=!0,this.showForm()}startSearchUnits(t){let i={};i.filter=t.query,i.maxResultCount=1e3,this.service.getUnitLookup(i).subscribe(t=>{this.AllUnits=t.items,this.isShowAddingUnitComment=0==this.AllUnits.length})}onSelect(t){}onClear(){}unitkeyDown(t){let i=t.srcElement.value.trim();13===t.keyCode&&i&&(t.preventDefault(),t.stopPropagation(),this.addUnit(i))}addUnit(t){let i=this.notAllowedFilterText(t),e=this.notAllowedFilterTextLength(t);if(i||e)return;if(this.AllUnits.findIndex(i=>i.displayName===t)>=0)return;let n={};n.unitName=t,n.unitNameEn=t,this.unitService.create(n).subscribe(t=>{this.AllUnits.push({id:t.id,displayName:t.unitName}),this.form.get("unitId").setValue(t),this.isShowAddingUnitComment=!1})}notAllowedFilterText(t){let i=Array.from("!$%&*<>[]{]\u2018\u201c;/?+|^"),e="";return null!=t&&i.forEach(i=>{String(t).indexOf(i)>=0&&(e+=i||{})}),e.length>0}notAllowedFilterTextLength(t){return t.length>50}searchType(){return/msie\s|trident\/|edge\//i.test(window.navigator.userAgent)?"text":"search"}startSearchCategories(t){let i={};i.filter=t.query,i.maxResultCount=1e3,this.service.getNutritionCategoryLookup(i).subscribe(t=>{this.AllCategories=t.items,this.isShowAddingCategoryComment=0==this.AllCategories.length})}categorykeyDown(t){let i=t.srcElement.value.trim();13===t.keyCode&&i&&(t.preventDefault(),t.stopPropagation(),this.addCategory(i))}addCategory(t){let i=this.notAllowedFilterText(t),e=this.notAllowedFilterTextLength(t);if(i||e)return;if(this.AllCategories.findIndex(i=>i.displayName===t)>=0)return;let n={};n.nutritionCategoryName=t,n.nutritionCategoryNameEn=t,this.categoryService.create(n).subscribe(t=>{this.AllCategories.push({id:t.id,displayName:t.nutritionCategoryName}),this.form.get("nutritionCategoryId").setValue(t),this.isShowAddingCategoryComment=!1})}}return t.\u0275fac=function(i){return new(i||t)(s.Y36(o.XNV),s.Y36(o.vR3),s.Y36(Z.i),s.Y36(a.YP),s.Y36(o.$AH),s.Y36(l.R),s.Y36(f._f),s.Y36(b.C),s.Y36(A.F),s.Y36(v.Ur),s.Y36(r.qu),s.Y36(a.MJ))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-nutrition"]],inputs:{hideList:"hideList"},outputs:{onSaved:"onSaved",create:"create"},features:[s._Bn([o.XNV,l.R])],decls:100,vars:80,consts:[[3,"hidden"],[1,"row","entry-row"],[1,"col-12","col-sm-auto","content-header-container"],[1,"content-header-title","custom-green"],[1,"col-lg","my-md-auto"],[1,"text-lg-right"],[1,"custom-control","custom-switch"],["id","customSwitch1","type","checkbox",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customSwitch1",1,"custom-control-label"],[1,"col-auto","my-md-auto","mt-3"],[1,"btn-group"],["type","button","routerLink","/nutrition-programs",1,"btn","btn-secondary","btn-lg"],["aria-hidden","true",1,"fa","fa-fa-apple-alt","mr-1"],["class","btn btn-success btn-new btn-lg","type","button",3,"click",4,"abpPermission"],["id","advanced-content-filters",3,"ngbCollapse"],[1,"card","mb-4"],[1,"card-body"],[3,"keyup.enter"],["filterForm",""],[1,"row"],[1,"col-md-4","col-sm-auto"],[1,"form-group"],["for","filterTextFilter"],["id","filterTextFilter","maxlength","200",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[3,"lookupNameProp","getFn","ngModel","ngModelOptions","ngModelChange"],["id","NutritionGenra","name","NutritionGenra",1,"custom-select","form-control","valid",3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"col"],[1,"btn-group","mt-4"],[1,"btn","btn-secondary",3,"click"],[1,"col-4","my-md-auto"],["id","customstatusSwitch1","type","checkbox",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customstatusSwitch1",1,"custom-control-label"],[1,"col-md-12","align-self-end","mb-3"],[1,"col-auto"],["type","button",1,"btn","btn-outline-primary","btn-block",3,"click"],["type","button",1,"btn","btn-primary","btn-block",3,"click"],["class","app-dataview","default","",3,"count","headerHeight","list","messages","rows",4,"ngIf"],["size","lg",3,"visible","busy","suppressUnsavedChangesWarning","visibleChange"],["abpHeader",""],["abpBody",""],["type","button",1,"btn","btn-success","btn-new","btn-lg",3,"click"],["aria-hidden","true",1,"fa","fa-plus","mr-1"],["default","",1,"app-dataview",3,"count","headerHeight","list","messages","rows"],["prop","nutrition.imageAttachmentId",3,"name","width"],["ngx-datatable-cell-template",""],["prop","nutrition.nutritionName",3,"name"],["prop","nutrition.calories",3,"name","width"],["prop","unit.unitName",3,"name","width"],[3,"maxWidth","name","sortable","width"],["alt","",1,"s-icon-lg",3,"src"],[1,"dv-details","view-rtl-always"],[3,"value"],["class","fa fa-globe-asia text-muted pull-left",4,"ngIf"],[1,"dv-details","view-ltr-always"],[1,"fa","fa-globe-asia","text-muted","pull-left"],[3,"defaultCalories","proteins","carbs","fats"],[1,"dv-details","view-rtl"],[1,"dv-details","view-ltr"],[1,"dv-details"],[1,"action-items"],["class","action-item",3,"ngbTooltip","click",4,"ngIf"],["class","action-item",3,"click",4,"ngIf"],[1,"action-item",3,"ngbTooltip","click"],[1,"fa","fa-toggle-off","custom-green","action-boarder"],[1,"fa","fa-toggle-on","custom-green","action-boarder","text-success"],[1,"action-item",3,"click"],[1,"fa","fa-eye","custom-green","action-boarder"],[1,"fa","fa-pen","custom-green"],[1,"col","mt-1"],["class","action-item cursor pull-left",3,"ngbTooltip","click",4,"ngIf"],[1,"action-item","cursor","pull-left",3,"ngbTooltip","click"],["validateOnSubmit","",3,"formGroup","ngSubmit"],[1,"mt-2","fade-in-top","row"],["class","form-group col-md-4",4,"ngIf"],["class","form-group col-8",4,"ngIf"],[1,"form-group","col-md-6"],["for","nutrition-nutrition-name"],["autofocus","","formControlName","nutritionName","id","nutrition-nutrition-name","maxlength","1000","minlength","1",1,"form-control",3,"readOnly"],["for","nutrition-nutrition-name-en"],["formControlName","nutritionNameEn","id","nutrition-nutrition-name-en","maxlength","1000","minlength","1",1,"form-control",3,"readOnly"],[1,"form-group","col-md-12",3,"ngClass"],["for","nutrition-description"],["class","optional-input badge badge-info",4,"ngIf"],["formControlName","description","id","nutrition-description",1,"form-control",3,"readOnly"],["formControlName","descriptionEn","id","nutrition-description",1,"form-control",3,"readOnly"],[1,"form-group","col-md-4"],["for","nutrition-calories"],["formControlName","calories","id","nutrition-calories","type","number",1,"form-control",3,"readOnly"],["for","nutrition-proteins"],["formControlName","proteins","id","nutrition-proteins","type","number",1,"form-control",3,"readOnly"],["for","nutrition-carbs"],["formControlName","carbs","id","nutrition-carbs","type","number",1,"form-control",3,"readOnly"],["for","nutrition-fats"],["formControlName","fats","id","nutrition-fats","type","number",1,"form-control",3,"readOnly"],["for","unit-unit-id"],["dataKey","id","forceSelection","true","formControlName","unitId","id","unit-unit-id","name","unit-unit-id",1,"",3,"disabled","dropdown","suggestions","type","field","placeholder","completeMethod","keydown","onClear","search"],[4,"ngIf"],["for","nutritionCategoryId"],["dataKey","id","forceSelection","true","formControlName","nutritionCategoryId","id","nutritionCategoryId","name","nutritionCategoryId",1,"",3,"disabled","dropdown","suggestions","type","field","placeholder","completeMethod","keydown","onClear","search"],[1,"form-group","col-md-8"],["for","nutrition-image-attachment-id"],["Entity","Nutrition","acceptTypes",".png,.jpg,.jpeg","formControlName","imageAttachmentId","id","nutrition-image-attachment-id","name","imageAttachmentId",3,"maxFilesCount","readonly","attachmentUpdated"],["class","form-group col-md-4",4,"abpPermission"],["for","order-in-list"],["id","order-in-list","type","number","formControlName","orderInList",1,"form-control"],["class","col-sm-12 modal-footer",4,"ngIf"],["class","badge badge-success",4,"ngIf"],["for","app-user-assigned-app-user-id","style","display: block",4,"ngIf"],[1,"badge","badge-success"],["for","app-user-assigned-app-user-id",2,"display","block"],[1,"form-group","col-8"],["class","btn btn-sm btn-success mt-4",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-success","mt-4",3,"click"],[1,"optional-input","badge","badge-info"],["for","programCategory"],["id","programCategory","name","programCategory","formControlName","programCategory",1,"custom-select","form-control","valid"],[1,"col-sm-12","modal-footer"],["type","button",1,"btn","btn-secondary","btn-cancel"],["abpClose",""],["class","btn btn-success btn-save","type","submit",3,"disabled",4,"ngIf"],["type","submit",1,"btn","btn-success","btn-save",3,"disabled"],[1,"fa","fa-check"]],template:function(t,i){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"h1",3),s._uU(4),s.ALo(5,"abpLocalization"),s.qZA(),s._UZ(6,"abp-breadcrumb"),s.qZA(),s.TgZ(7,"div",4),s.TgZ(8,"div",5),s.TgZ(9,"div",6),s.TgZ(10,"input",7),s.NdJ("ngModelChange",function(t){return i.showFilter=t}),s.qZA(),s.TgZ(11,"label",8),s._uU(12),s.ALo(13,"abpLocalization"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"div",9),s.TgZ(15,"div",5),s.TgZ(16,"div",10),s.TgZ(17,"a",11),s._UZ(18,"i",12),s._uU(19),s.ALo(20,"abpLocalization"),s.qZA(),s.YNc(21,_,4,3,"button",13),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(22,"div",14),s.TgZ(23,"div",15),s.TgZ(24,"div",16),s.TgZ(25,"form",17,18),s.NdJ("keyup.enter",function(){return i.list.get()}),s.TgZ(27,"div",19),s.TgZ(28,"div",20),s.TgZ(29,"div",21),s.TgZ(30,"label",22),s._uU(31),s.ALo(32,"abpLocalization"),s.qZA(),s.TgZ(33,"input",23),s.NdJ("ngModelChange",function(t){return i.filters.filterText=t}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(34,"div",20),s.TgZ(35,"div",21),s.TgZ(36,"label"),s._uU(37),s.ALo(38,"abpLocalization"),s.qZA(),s.TgZ(39,"sw-lookup-select",24),s.NdJ("ngModelChange",function(t){return i.filters.unitId=t}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(40,"div",20),s.TgZ(41,"div",21),s.TgZ(42,"label"),s._uU(43),s.ALo(44,"abpLocalization"),s.qZA(),s.TgZ(45,"sw-lookup-select",24),s.NdJ("ngModelChange",function(t){return i.filters.categoryId=t}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(46,"div",20),s.TgZ(47,"div",21),s.TgZ(48,"label"),s._uU(49),s.ALo(50,"abpLocalization"),s.qZA(),s.TgZ(51,"select",25),s.NdJ("ngModelChange",function(t){return i.filters.genraId=t}),s._UZ(52,"option"),s.TgZ(53,"option",26),s._uU(54),s.ALo(55,"abpLocalization"),s.qZA(),s.TgZ(56,"option",26),s._uU(57),s.ALo(58,"abpLocalization"),s.qZA(),s.TgZ(59,"option",26),s._uU(60),s.ALo(61,"abpLocalization"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(62,"div",27),s.TgZ(63,"div",5),s.TgZ(64,"div",28),s.TgZ(65,"div",29),s.NdJ("click",function(){return i.filters.publicLibraryFilter=i.PublicLibraryFilter.All}),s._uU(66),s.ALo(67,"abpLocalization"),s.qZA(),s.TgZ(68,"div",29),s.NdJ("click",function(){return i.filters.publicLibraryFilter=i.PublicLibraryFilter.PublicOnly}),s._uU(69),s.ALo(70,"abpLocalization"),s.qZA(),s.TgZ(71,"div",29),s.NdJ("click",function(){return i.filters.publicLibraryFilter=i.PublicLibraryFilter.PrivateOnly}),s._uU(72),s.ALo(73,"abpLocalization"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(74,"div",30),s.TgZ(75,"div",5),s.TgZ(76,"div",6),s.TgZ(77,"input",31),s.NdJ("ngModelChange",function(t){return i.isShowActive=t}),s.qZA(),s.TgZ(78,"label",32),s._uU(79),s.ALo(80,"abpLocalization"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(81,"div",33),s.TgZ(82,"div",19),s._UZ(83,"div",27),s.TgZ(84,"div",34),s.TgZ(85,"button",35),s.NdJ("click",function(){return i.clearFilters()}),s.TgZ(86,"span"),s._uU(87),s.ALo(88,"abpLocalization"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(89,"div",34),s.TgZ(90,"button",36),s.NdJ("click",function(){return i.list.get()}),s.TgZ(91,"span"),s._uU(92),s.ALo(93,"abpLocalization"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(94,D,16,28,"ngx-datatable",37),s.qZA(),s.TgZ(95,"abp-modal",38),s.NdJ("visibleChange",function(t){return i.isModalOpen=t}),s.YNc(96,G,6,5,"ng-template",null,39,s.W1O),s.YNc(98,dt,74,79,"ng-template",null,40,s.W1O),s.qZA()),2&t&&(s.Q6J("hidden",i.hideList),s.xp6(4),s.Oqu(s.lcZ(5,45,"::Nutritions")),s.xp6(6),s.Q6J("ngModel",i.showFilter),s.xp6(2),s.Oqu(s.lcZ(13,47,"::SeeAdvancedFilters")),s.xp6(7),s.hij(" ",s.lcZ(20,49,"::Menu:NutritionPrograms")," "),s.xp6(2),s.Q6J("abpPermission","Physic.Nutritions.Create"),s.xp6(1),s.Q6J("ngbCollapse",i.isFiltersHidden),s.xp6(9),s.Oqu(s.lcZ(32,51,"::SearchFor")),s.xp6(2),s.Q6J("ngModel",i.filters.filterText)("ngModelOptions",s.DdM(77,gt)),s.xp6(4),s.hij(" ",s.lcZ(38,53,"::Unit")," "),s.xp6(2),s.Q6J("lookupNameProp",i.langService.isRtl?"displayName":"displayNameEn")("getFn",i.service.getUnitLookup)("ngModel",i.filters.unitId)("ngModelOptions",s.DdM(78,gt)),s.xp6(4),s.hij(" ",s.lcZ(44,55,"::NutritionCategory")," "),s.xp6(2),s.Q6J("lookupNameProp",i.langService.isRtl?"displayName":"displayNameEn")("getFn",i.service.getNutritionCategoryLookup)("ngModel",i.filters.categoryId)("ngModelOptions",s.DdM(79,gt)),s.xp6(4),s.hij(" ",s.lcZ(50,57,"::NutritionGenra")," "),s.xp6(2),s.Q6J("ngModel",i.filters.genraId),s.xp6(2),s.Q6J("ngValue",1),s.xp6(1),s.Oqu(s.lcZ(55,59,"::Carbs")),s.xp6(2),s.Q6J("ngValue",2),s.xp6(1),s.Oqu(s.lcZ(58,61,"::Proteins")),s.xp6(2),s.Q6J("ngValue",3),s.xp6(1),s.Oqu(s.lcZ(61,63,"::Fats")),s.xp6(5),s.ekj("active",i.filters.publicLibraryFilter===i.PublicLibraryFilter.All),s.xp6(1),s.hij(" ",s.lcZ(67,65,"::All")," "),s.xp6(2),s.ekj("active",i.filters.publicLibraryFilter===i.PublicLibraryFilter.PublicOnly),s.xp6(1),s.hij(" ",s.lcZ(70,67,"::PublicOnly")," "),s.xp6(2),s.ekj("active",i.filters.publicLibraryFilter===i.PublicLibraryFilter.PrivateOnly),s.xp6(1),s.hij(" ",s.lcZ(73,69,"::PrivateOnly")," "),s.xp6(5),s.Q6J("ngModel",i.isShowActive),s.xp6(2),s.Oqu(s.lcZ(80,71,"::ViewActiveOnly")),s.xp6(8),s.Oqu(s.lcZ(88,73,"::Clear")),s.xp6(5),s.Oqu(s.lcZ(93,75,"::Search")),s.xp6(2),s.Q6J("ngIf",!i.hideList),s.xp6(1),s.Q6J("visible",i.isModalOpen)("busy",i.isModalBusy)("suppressUnsavedChangesWarning",i.isReadOnly))},directives:[a.LI,r.Wl,r.JJ,r.On,x.m,y.yS,o.l97,C._D,r._Y,r.JL,r.F,r.Fj,r.nD,L.X,r.EJ,r.YN,r.Kr,q.O5,a.zS,T.nE,a.x7,a.j3,T.UC,T.vq,w.K,N.r,C._L,o.YzZ,r.sg,U.hL,o.Uqp,r.u,U.J5,r.wO,q.mk,r.wV,I.Qc,O.Y],pipes:[o.fuE,q.Ov,J.H],styles:[".s-icon-lg[_ngcontent-%COMP%]{width:83px;height:73px;-o-object-fit:cover;object-fit:cover}@media (max-width:992px){.s-icon-lg[_ngcontent-%COMP%]{width:45px;height:45px}}",".att-thumnail[_ngcontent-%COMP%] {\n        display: block;\n        height: 70px;\n        width: 70px;\n        max-height: 70px;\n        max-width: 70px;\n        padding: 0px;\n        overflow: hidden;\n    }"]}),t})()},88562:function(t,i,e){"use strict";e.r(i),e.d(i,{NutritionModule:function(){return h}});var n=e(46700),o=e(55679),a=e(10135),s=e(99046),r=e(83845),l=e(73756),c=e(56410),u=e(53181),d=e(35366);const g=[{path:"",component:u.J,canActivate:[n.a1M,n.nG9]}];let p=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),t})();var m=e(56137);let h=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[p,n.IR2,o.e2,l.Ck,r.vv,s.h2,a.lQ,a.M,m.m,a.XC]]}),t})()}}]);