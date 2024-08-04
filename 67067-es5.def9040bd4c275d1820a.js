(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[67067],{67067:function(t,o,e){"use strict";e.d(o,{q:function(){return i}});var r=e(35366),a=e(46700),i=function(){var t=function t(o){var e=this;!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.restService=o,this.apiName="Default",this.create=function(t){return e.restService.request({method:"POST",url:"/api/app/coordinators",body:t},{apiName:e.apiName})},this.disable=function(t){return e.restService.request({method:"PUT",url:"/api/app/coordinators/".concat(t,"/disable")},{apiName:e.apiName})},this.enable=function(t){return e.restService.request({method:"PUT",url:"/api/app/coordinators/".concat(t,"/enable")},{apiName:e.apiName})},this.exportList=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/export",params:{filterText:t.filterText,photoAttachmentIdMin:t.photoAttachmentIdMin,photoAttachmentIdMax:t.photoAttachmentIdMax,portofolioAttachmentIdMin:t.portofolioAttachmentIdMin,portofolioAttachmentIdMax:t.portofolioAttachmentIdMax,bio:t.bio,coordinatorRateMin:t.coordinatorRateMin,coordinatorRateMax:t.coordinatorRateMax,disabled:t.disabled,appUserId:t.appUserId,cityId:t.cityId,genderGeneralLookupId:t.genderGeneralLookupId,coachAppUserId:t.coachAppUserId,coordinatorTypeGeneralLookupId:t.coordinatorTypeGeneralLookupId,coordinatorAppUserId:t.coordinatorAppUserId,sorting:t.sorting,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:e.apiName})},this.get=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/".concat(t)},{apiName:e.apiName})},this.getCityLookup=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/city-lookup",params:{filter:t.filter,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:e.apiName})},this.getCoordinatorsGeneralLookup=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/coordinators-general",params:{filterText:t.filterText,coordinatorAppUserId:t.coordinatorAppUserId,coachAppUserId:t.coachAppUserId,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:e.apiName})},this.getCoordinatorsLookup=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/lookup",params:{filterText:t.filterText,coordinatorAppUserId:t.coordinatorAppUserId,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:e.apiName})},this.getCoordinatorsOfCoachLookup=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/lookup-for-trainee",params:{filterText:t.filterText,traineeId:t.traineeId}},{apiName:e.apiName})},this.getCoordinatorsVipLookup=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/viplookup",params:{filterText:t.filterText,coordinatorAppUserId:t.coordinatorAppUserId,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:e.apiName})},this.getCountryLookup=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/country-lookup",params:{filter:t.filter,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:e.apiName})},this.getList=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators",params:{filterText:t.filterText,photoAttachmentIdMin:t.photoAttachmentIdMin,photoAttachmentIdMax:t.photoAttachmentIdMax,portofolioAttachmentIdMin:t.portofolioAttachmentIdMin,portofolioAttachmentIdMax:t.portofolioAttachmentIdMax,bio:t.bio,coordinatorRateMin:t.coordinatorRateMin,coordinatorRateMax:t.coordinatorRateMax,disabled:t.disabled,appUserId:t.appUserId,cityId:t.cityId,genderGeneralLookupId:t.genderGeneralLookupId,coachAppUserId:t.coachAppUserId,coordinatorTypeGeneralLookupId:t.coordinatorTypeGeneralLookupId,coordinatorAppUserId:t.coordinatorAppUserId,sorting:t.sorting,skipCount:t.skipCount,maxResultCount:t.maxResultCount}},{apiName:e.apiName})},this.getMyProfile=function(){return e.restService.request({method:"GET",url:"/api/app/coordinators/me"},{apiName:e.apiName})},this.getWithNavigationProperties=function(t){return e.restService.request({method:"GET",url:"/api/app/coordinators/with-navigation-properties/".concat(t)},{apiName:e.apiName})},this.removeFromCoach=function(t,o){return e.restService.request({method:"PUT",url:"/api/app/coordinators/".concat(t,"/remove/").concat(o)},{apiName:e.apiName})},this.update=function(t,o){return e.restService.request({method:"PUT",url:"/api/app/coordinators/".concat(t),body:o},{apiName:e.apiName})},this.updateMyProfile=function(t){return e.restService.request({method:"PUT",url:"/api/app/coordinators/me",body:t},{apiName:e.apiName})}};return t.\u0275fac=function(o){return new(o||t)(r.LFG(a.vgb))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);