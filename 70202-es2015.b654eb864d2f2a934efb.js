(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[70202],{70202:function(e,t,n){"use strict";n.r(t),n.d(t,{AbstractTemplateContentComponent:function(){return q},DEFAULT_TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTIONS:function(){return I},DEFAULT_TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROPS:function(){return D},DEFAULT_TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTIONS:function(){return z},GetTemplateDefinitions:function(){return y},InlineTemplateContentComponent:function(){return N},TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS:function(){return k},TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS:function(){return G},TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS:function(){return P},TemplateContentService:function(){return v},TemplateContentsComponent:function(){return M},TemplateDefinitionService:function(){return _},TextTemplateManagementExtensionsGuard:function(){return R},TextTemplateManagementModule:function(){return F},TextTemplateManagementState:function(){return E},TextTemplateManagementStateModel:function(){return L},TextTemplateManagementStateService:function(){return Q},TextTemplatesComponent:function(){return U},"\u02750":function(){return O},"\u0275a":function(){return U},"\u0275c":function(){return E},"\u0275d":function(){return _},"\u0275e":function(){return y},"\u0275g":function(){return M},"\u0275h":function(){return q},"\u0275i":function(){return N},"\u0275j":function(){return Y},"\u0275k":function(){return R},"\u0275l":function(){return k},"\u0275m":function(){return P},"\u0275n":function(){return G}});var a=n(35366),o=n(31041),i=n(56410),r=n(55679),l=n(44019),u=n(11520),s=n(44689),c=n(79996),p=n(88414),m=n(46700),T=n(64762),g=n(97116),d=n(48400),f=n(10135),Z=n(99046),h=n(83845),A=n(61116);function b(e,t){if(1&e&&(a.TgZ(0,"option",26),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("ngValue",e.cultureName),a.xp6(1),a.Oqu(e.displayName)}}function x(e,t){if(1&e&&(a.TgZ(0,"option",26),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("ngValue",e.cultureName),a.xp6(1),a.Oqu(e.displayName)}}function C(e,t){if(1&e){const e=a.EpF();a.ynx(0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h1",3),a._uU(4),a.ALo(5,"abpLocalization"),a.qZA(),a.qZA(),a.TgZ(6,"div",4),a._UZ(7,"abp-breadcrumb"),a.qZA(),a.TgZ(8,"div",5),a._UZ(9,"abp-page-toolbar",6),a.qZA(),a.qZA(),a.TgZ(10,"div",7),a.TgZ(11,"div",8),a.TgZ(12,"div",9),a.TgZ(13,"div",10),a.TgZ(14,"div",5),a.TgZ(15,"div",11),a.TgZ(16,"input",12),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.oxw().list.filter=t}),a.ALo(17,"abpLocalization"),a.qZA(),a.TgZ(18,"div",13),a.TgZ(19,"button",14),a.NdJ("click",function(){return a.CHM(e),a.oxw().list.get()}),a._UZ(20,"i",15),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(21,"div",8),a._UZ(22,"abp-extensible-table",16),a.qZA(),a.qZA(),a.BQk()}if(2&e){const e=t.ngIf,n=a.oxw();a.xp6(4),a.hij(" ",a.lcZ(5,8,"TextTemplateManagement::Menu:TextTemplates")," "),a.xp6(5),a.Q6J("record",e.items),a.xp6(7),a.Q6J("placeholder",a.lcZ(17,10,"AbpUi::PagerSearch"))("ngModel",n.list.filter),a.xp6(6),a.Q6J("actionsColumnWidth",170)("data",e.items)("recordsTotal",e.totalCount)("list",n.list)}}let v=(()=>{class e{constructor(e){this.restService=e,this.apiName="TextTemplateManagement",this.get=e=>this.restService.request({method:"GET",url:"/api/text-template-management/template-contents",params:{templateName:e.templateName,cultureName:e.cultureName}},{apiName:this.apiName}),this.restoreToDefault=e=>this.restService.request({method:"PUT",url:"/api/text-template-management/template-contents/restore-to-default",body:e},{apiName:this.apiName}),this.update=e=>this.restService.request({method:"PUT",url:"/api/text-template-management/template-contents",body:e},{apiName:this.apiName})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(m.vgb))},e.\u0275prov=(0,a.Yz7)({factory:function(){return new e((0,a.LFG)(m.vgb))},token:e,providedIn:"root"}),e})(),q=(()=>{class e{constructor(e){this.injector=e,this.templateContent={},this.fb=e.get(o.qu),this.templateContentService=e.get(v),this.route=e.get(i.gz),this.toaster=e.get(r.MJ)}ngOnInit(){this.form=this.fb.group({content:["",[o.kI.required]]}),this.getData().subscribe()}getData(){return this.templateContentService.get({templateName:this.route.snapshot.params.name,cultureName:this.selectedCultureName}).pipe((0,l.b)(e=>{this.templateContent=e,this.form.get("content").setValue(this.templateContent.content)}))}save(e){if(this.form.invalid)return;this.busy=!0;const{content:t}=this.form.value;this.templateContentService.update({templateName:this.templateContent.name,cultureName:this.selectedCultureName,content:t}).pipe((0,u.x)(()=>this.busy=!1)).subscribe(()=>{this.toaster.success("TextTemplateManagement::Success"),e&&e()})}restoreToDefault(){this.busy=!0,this.templateContentService.restoreToDefault({templateName:this.templateContent.name,cultureName:this.selectedCultureName}).pipe((0,s.w)(()=>this.getData()),(0,u.x)(()=>this.busy=!1)).subscribe(()=>{this.toaster.success("TextTemplateManagement::Success")})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.zs3))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e})(),N=(()=>{class e extends q{constructor(e,t){super(e),this.injector=e,this.router=t}customizePerCulture(){this.router.navigateByUrl(`/text-template-management/text-templates/contents/${this.templateContent.name}`)}save(){super.save(()=>{this.router.navigateByUrl("/text-template-management/text-templates")})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.zs3),a.Y36(i.F0))},e.\u0275cmp=a.Xpm({type:e,selectors:[["abp-inline-template-content"]],features:[a.qOj],decls:49,vars:30,consts:[[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],[1,"col-lg-auto","pl-lg-0"],["role","alert",1,"alert","alert-danger",3,"innerHTML"],[1,"card"],[1,"card-header"],[1,"card-body"],["id","template-inline-content-form",3,"formGroup"],[1,"row"],[1,"col"],[1,"form-group"],["for","TemplateContent"],["id","TemplateContent","name","TemplateContent","rows","10","formControlName","content",1,"form-control",3,"disabled"],[1,"col","col-md-4"],["routerLink","/text-template-management/text-templates","role","button",1,"btn","btn-primary"],[1,"fa","fa-arrow-left","mr-1"],[1,"col","col-md-8"],[1,"float-right"],["id","save-content","type","button",1,"btn","btn-primary",3,"disabled","click"],["id","restore-to-default","type","button",1,"btn","btn-danger","ml-1",3,"disabled","click"],["id","edit-unique-localization","type","button",1,"btn","btn-link","ml-1",3,"disabled","click"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h1",2),a._uU(3),a.ALo(4,"abpLocalization"),a.qZA(),a.qZA(),a.TgZ(5,"div",3),a._UZ(6,"abp-breadcrumb"),a.qZA(),a.qZA(),a._UZ(7,"div",4),a.ALo(8,"abpLocalization"),a.TgZ(9,"div",5),a.TgZ(10,"div",6),a.TgZ(11,"label"),a._uU(12),a.ALo(13,"abpLocalization"),a.TgZ(14,"strong"),a._uU(15),a.qZA(),a.qZA(),a.qZA(),a.TgZ(16,"div",7),a.TgZ(17,"form",8),a.TgZ(18,"div",9),a.TgZ(19,"div",10),a.TgZ(20,"div",11),a.TgZ(21,"label",12),a._uU(22),a.ALo(23,"abpLocalization"),a.qZA(),a.TgZ(24,"span"),a._uU(25," * "),a.qZA(),a.TgZ(26,"textarea",13),a._uU(27,"            "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(28,"div",9),a.TgZ(29,"div",14),a.TgZ(30,"a",15),a._UZ(31,"i",16),a.TgZ(32,"span"),a._uU(33),a.ALo(34,"abpLocalization"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(35,"div",17),a.TgZ(36,"div",18),a.TgZ(37,"button",19),a.NdJ("click",function(){return t.save()}),a.TgZ(38,"span"),a._uU(39),a.ALo(40,"abpLocalization"),a.qZA(),a.qZA(),a.TgZ(41,"button",20),a.NdJ("click",function(){return t.restoreToDefault()}),a.TgZ(42,"span"),a._uU(43),a.ALo(44,"abpLocalization"),a.qZA(),a.qZA(),a.TgZ(45,"button",21),a.NdJ("click",function(){return t.customizePerCulture()}),a.TgZ(46,"span"),a._uU(47),a.ALo(48,"abpLocalization"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(3),a.hij(" ",a.lcZ(4,14,"TextTemplateManagement::Contents")," "),a.xp6(4),a.Q6J("innerHTML",a.lcZ(8,16,"TextTemplateManagement::InlineContentDescription"),a.oJD),a.xp6(5),a.hij("",a.lcZ(13,18,"TextTemplateManagement::Name"),": "),a.xp6(3),a.Oqu(t.templateContent.name),a.xp6(2),a.Q6J("formGroup",t.form),a.xp6(5),a.Oqu(a.lcZ(23,20,"TextTemplateManagement::TemplateContent")),a.xp6(4),a.Q6J("disabled",t.busy),a.xp6(7),a.Oqu(a.lcZ(34,22,"TextTemplateManagement::ReturnToTemplates")),a.xp6(4),a.Q6J("disabled",t.busy),a.xp6(2),a.Oqu(a.lcZ(40,24,"TextTemplateManagement::SaveContent")),a.xp6(2),a.Q6J("disabled",t.busy),a.xp6(2),a.Oqu(a.lcZ(44,26,"TextTemplateManagement::RestoreToDefault")),a.xp6(2),a.Q6J("disabled",t.busy),a.xp6(2),a.Oqu(a.lcZ(48,28,"TextTemplateManagement::CustomizePerCulture")))},directives:[r.LI,o._Y,o.JL,Z.hL,o.sg,o.Fj,Z.J5,o.JJ,o.u,i.yS],pipes:[m.fuE],encapsulation:2}),e})(),M=(()=>{class e extends q{constructor(e,t){super(e),this.injector=e,this.configStateService=t,this.languages=[],this.referenceTemplateContent={content:""}}ngOnInit(){this.languages=this.configStateService.getDeep("localization.languages"),this.selectedCultureName=this.languages[0].cultureName,this.referenceTemplateContent.cultureName=this.configStateService.getDeep("localization.currentCulture.cultureName"),super.ngOnInit(),this.getReferenceTemplateContent()}getReferenceTemplateContent(){this.templateContentService.get({templateName:this.route.snapshot.params.name,cultureName:this.referenceTemplateContent.cultureName}).subscribe(e=>{this.referenceTemplateContent=e})}onChangeSelectedCultureName(){this.getData().subscribe()}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(a.zs3),a.Y36(m.XJE))},e.\u0275cmp=a.Xpm({type:e,selectors:[["abp-template-contents"]],features:[a.qOj],decls:66,vars:37,consts:[[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],[1,"col-lg-auto","pl-lg-0"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","target-culture-name"],["id","target-culture-name","name","target-culture-name",1,"culture-selector","custom-select","form-control",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col"],["for","reference-content"],["id","reference-content","name","reference-content","rows","10","readonly","",1,"form-control",3,"value"],["id","template-inline-content-form",3,"formGroup"],["for","TemplateContent"],["id","TemplateContent","name","TemplateContent","rows","10","formControlName","content",1,"form-control",3,"disabled"],[1,"col","col-md-4"],["routerLink","/text-template-management/text-templates","role","button",1,"btn","btn-primary"],[1,"fa","fa-arrow-left","mr-1"],[1,"col","col-md-8"],[1,"float-right"],["id","save-content","type","button",1,"btn","btn-primary",3,"disabled","click"],["id","restore-to-default","type","button",1,"btn","btn-danger","ml-1",3,"disabled","click"],[3,"ngValue"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h1",2),a._uU(3),a.ALo(4,"abpLocalization"),a.qZA(),a.qZA(),a.TgZ(5,"div",3),a._UZ(6,"abp-breadcrumb"),a.qZA(),a.qZA(),a.TgZ(7,"div",4),a.TgZ(8,"div",5),a.TgZ(9,"label"),a._uU(10),a.ALo(11,"abpLocalization"),a.TgZ(12,"strong"),a._uU(13),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"div",6),a.TgZ(15,"div",7),a.TgZ(16,"div",8),a.TgZ(17,"div",9),a.TgZ(18,"label",10),a._uU(19),a.ALo(20,"abpLocalization"),a.qZA(),a.TgZ(21,"select",11),a.NdJ("ngModelChange",function(e){return t.referenceTemplateContent.cultureName=e})("ngModelChange",function(){return t.getReferenceTemplateContent()}),a.YNc(22,b,2,2,"option",12),a.qZA(),a.qZA(),a.TgZ(23,"div",7),a.TgZ(24,"div",13),a.TgZ(25,"div",9),a.TgZ(26,"label",14),a._uU(27),a.ALo(28,"abpLocalization"),a.qZA(),a.TgZ(29,"textarea",15),a._uU(30,"              "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(31,"div",8),a.TgZ(32,"div",9),a.TgZ(33,"label",10),a._uU(34),a.ALo(35,"abpLocalization"),a.qZA(),a.TgZ(36,"select",11),a.NdJ("ngModelChange",function(e){return t.selectedCultureName=e})("ngModelChange",function(){return t.onChangeSelectedCultureName()}),a.YNc(37,x,2,2,"option",12),a.qZA(),a.qZA(),a.TgZ(38,"form",16),a.TgZ(39,"div",7),a.TgZ(40,"div",13),a.TgZ(41,"div",9),a.TgZ(42,"label",17),a._uU(43),a.ALo(44,"abpLocalization"),a.qZA(),a.TgZ(45,"span"),a._uU(46," * "),a.qZA(),a.TgZ(47,"textarea",18),a._uU(48,"                "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(49,"div",7),a.TgZ(50,"div",19),a.TgZ(51,"a",20),a._UZ(52,"i",21),a.TgZ(53,"span"),a._uU(54),a.ALo(55,"abpLocalization"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(56,"div",22),a.TgZ(57,"div",23),a.TgZ(58,"button",24),a.NdJ("click",function(){return t.save()}),a.TgZ(59,"span"),a._uU(60),a.ALo(61,"abpLocalization"),a.qZA(),a.qZA(),a.TgZ(62,"button",25),a.NdJ("click",function(){return t.restoreToDefault()}),a.TgZ(63,"span"),a._uU(64),a.ALo(65,"abpLocalization"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(3),a.hij(" ",a.lcZ(4,19,"TextTemplateManagement::Contents")," "),a.xp6(7),a.hij("",a.lcZ(11,21,"TextTemplateManagement::Name"),": "),a.xp6(3),a.Oqu(t.templateContent.name),a.xp6(6),a.Oqu(a.lcZ(20,23,"TextTemplateManagement::BaseCultureName")),a.xp6(2),a.Q6J("ngModel",t.referenceTemplateContent.cultureName),a.xp6(1),a.Q6J("ngForOf",t.languages),a.xp6(5),a.Oqu(a.lcZ(28,25,"TextTemplateManagement::BaseContent")),a.xp6(2),a.Q6J("value",t.referenceTemplateContent.content),a.xp6(5),a.Oqu(a.lcZ(35,27,"TextTemplateManagement::TargetCultureName")),a.xp6(2),a.Q6J("ngModel",t.selectedCultureName),a.xp6(1),a.Q6J("ngForOf",t.languages),a.xp6(1),a.Q6J("formGroup",t.form),a.xp6(5),a.Oqu(a.lcZ(44,29,"TextTemplateManagement::TemplateContent")),a.xp6(4),a.Q6J("disabled",t.busy),a.xp6(7),a.Oqu(a.lcZ(55,31,"TextTemplateManagement::ReturnToTemplates")),a.xp6(4),a.Q6J("disabled",t.busy),a.xp6(2),a.Oqu(a.lcZ(61,33,"TextTemplateManagement::SaveContent")),a.xp6(2),a.Q6J("disabled",t.busy),a.xp6(2),a.Oqu(a.lcZ(65,35,"TextTemplateManagement::RestoreToDefault")))},directives:[r.LI,o.EJ,o.JJ,o.On,A.sg,o._Y,o.JL,Z.hL,o.sg,o.Fj,Z.J5,o.u,i.yS,o.YN,o.Kr],pipes:[m.fuE],encapsulation:2}),e})(),y=(()=>{class e{constructor(e){this.payload=e}}return e.type="[TextTemplateManagement] Get template definitions",e})(),_=(()=>{class e{constructor(e){this.restService=e,this.apiName="TextTemplateManagement",this.get=e=>this.restService.request({method:"GET",url:`/api/text-template-management/template-definitions/${e}`},{apiName:this.apiName}),this.getList=e=>this.restService.request({method:"GET",url:"/api/text-template-management/template-definitions",params:{filterText:e.filterText,sorting:e.sorting,skipCount:e.skipCount,maxResultCount:e.maxResultCount}},{apiName:this.apiName})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(m.vgb))},e.\u0275prov=(0,a.Yz7)({factory:function(){return new e((0,a.LFG)(m.vgb))},token:e,providedIn:"root"}),e})();class L{}let E=(()=>{let e=class{constructor(e){this.templateDefinitionService=e}static getTemplateDefinitions({templateDefinitions:e}){return e}fetchTemplateDefinitions({patchState:e},{payload:t}){return this.templateDefinitionService.getList(t).pipe((0,l.b)(t=>e({templateDefinitions:t})))}};return e.\u0275fac=function(t){return new(t||e)(a.LFG(_))},e.\u0275prov=a.Yz7({token:e,factory:function(t){return e.\u0275fac(t)}}),(0,T.gn)([(0,d.aU)(y)],e.prototype,"fetchTemplateDefinitions",null),(0,T.gn)([(0,d.Qf)()],e,"getTemplateDefinitions",null),e=(0,T.gn)([(0,d.ZM)({name:"textTemplateManagement",defaults:{templateDefinitions:{items:[],totalCount:0}}})],e),e})();const O="TextTemplateManagement.TextTemplates";let U=(()=>{class e{constructor(e,t,n){this.list=e,this.store=t,this.router=n}ngOnInit(){this.hookToQuery()}hookToQuery(){this.list.hookToQuery(e=>{var{filter:t}=e,n=(0,T._T)(e,["filter"]);return this.store.dispatch(new y(Object.assign(Object.assign({},n),{filterText:t})))}).subscribe()}editContents(e){this.router.navigate([`/text-template-management/text-templates/contents${e.isInlineLocalized?"/inline":""}/${e.name}`])}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(m.XNV),a.Y36(d.yh),a.Y36(i.F0))},e.\u0275cmp=a.Xpm({type:e,selectors:[["abp-text-templates"]],features:[a._Bn([m.XNV,{provide:g.ex,useValue:O}])],decls:2,vars:3,consts:[[4,"ngIf"],[1,"row","entry-row"],[1,"col-auto"],[1,"content-header-title"],[1,"col-lg-auto","pl-lg-0"],[1,"col"],[3,"record"],["id","wrapper"],[1,"card"],[1,"card-body"],["id","data-tables-table-filter",1,"row"],[1,"input-group"],["type","search",1,"form-control",3,"placeholder","ngModel","ngModelChange"],[1,"input-group-append"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-search"],[3,"actionsColumnWidth","data","recordsTotal","list"]],template:function(e,t){1&e&&(a.YNc(0,C,23,12,"ng-container",0),a.ALo(1,"async")),2&e&&a.Q6J("ngIf",a.lcZ(1,1,t.pagedData$))},directives:[A.O5,r.LI,g._V,o.Fj,o.JJ,o.On,g.m5],pipes:[A.Ov,m.fuE],encapsulation:2}),(0,T.gn)([(0,d.Ph)(E.getTemplateDefinitions)],e.prototype,"pagedData$",void 0),e})();const J=g.QC.createMany([{type:"string",name:"displayName",displayName:"TextTemplateManagement::Name",columnWidth:300},{type:"boolean",name:"isInlineLocalized",displayName:"TextTemplateManagement::IsInlineLocalized",columnWidth:150},{type:"boolean",name:"isLayout",displayName:"TextTemplateManagement::IsLayout",columnWidth:150},{type:"string",name:"layout",displayName:"TextTemplateManagement::Layout",columnWidth:300},{type:"string",name:"defaultCultureName",displayName:"TextTemplateManagement::DefaultCultureName",columnWidth:150}]),S=g.uk.createMany([{text:"TextTemplateManagement::EditContents",action:e=>{e.getInjected(U).editContents(e.record)},permission:"TextTemplateManagement.TextTemplates.EditContents"}]),w=g.JE.createMany([]),I={"TextTemplateManagement.TextTemplates":S},z={"TextTemplateManagement.TextTemplates":w},D={"TextTemplateManagement.TextTemplates":J},k=new a.OlP("TEXT_TEMPLATE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS"),P=new a.OlP("TEXT_TEMPLATE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS"),G=new a.OlP("TEXT_TEMPLATE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS");let R=(()=>{class e{constructor(e){this.injector=e}canActivate(){const e=this.injector.get(g.X6),t=this.injector.get(k,null)||{},n=this.injector.get(P,null)||{},a=this.injector.get(G,null)||{},o=this.injector.get(m.XJE);return(0,g.ot)(o,"TextTemplateManagement").pipe((0,c.U)(e=>({"TextTemplateManagement.TextTemplates":e.TextDefinition})),(0,g.V_)(o,"TextTemplateManagement"),(0,l.b)(o=>{(0,g.Fr)(e.entityActions,I,t),(0,g.Fr)(e.toolbarActions,z,n),(0,g.Hp)(e.entityProps,D,o.prop,a)}),(0,p.h)(!0))}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(a.zs3))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e})(),Q=(()=>{class e{constructor(e){this.store=e}getTemplateDefinitions(e={}){return this.store.selectSnapshot(E.getTemplateDefinitions)}dispatchGetTemplateDefinitions(...e){return this.store.dispatch(new y(...e))}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(d.yh))},e.\u0275prov=(0,a.Yz7)({factory:function(){return new e((0,a.LFG)(d.yh))},token:e,providedIn:"root"}),e})();const j=[{path:"",redirectTo:"text-templates",pathMatch:"full"},{path:"text-templates",component:m.w6s,canActivate:[m.a1M,m.nG9,R],children:[{path:"",component:m.c$y,data:{requiredPolicy:"TextTemplateManagement.TextTemplates",replaceableComponent:{key:"TextTemplateManagement.TextTemplates",defaultComponent:U}}},{path:"contents",component:m.O39,canActivate:[m.nG9],data:{requiredPolicy:"TextTemplateManagement.TextTemplates.EditContents"},children:[{path:"inline/:name",component:N,data:{replaceableComponent:{key:"TextTemplateManagement.InlineTemplateContent",defaultComponent:N}}},{path:":name",component:M,data:{replaceableComponent:{key:"TextTemplateManagement.TemplateContents",defaultComponent:M}}}]}]}];let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(j)],i.Bz]}),e})(),F=(()=>{class e{static forChild(t={}){return{ngModule:e,providers:[{provide:k,useValue:t.entityActionContributors},{provide:P,useValue:t.toolbarActionContributors},{provide:G,useValue:t.entityPropContributors},R]}}static forLazy(t={}){return new m.Cgl(e.forChild(t))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[Y,d.$l.forFeature([E]),Z.h2,m.IR2,h.vv,r.e2,f.XC]]}),e})()}}]);