"use strict";(self.webpackChunkgeb=self.webpackChunkgeb||[]).push([[697],{7697:(V,f,o)=>{o.r(f),o.d(f,{Dashboard:()=>q});var g=o(9598),m=o(2257),c=o(6895),t=o(8274),d=o(2216),a=o(2687);function p(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"span",4),t._UZ(4,"fa-icon",5),t.qZA(),t.BQk()),2&e){const n=i.$implicit,s=i.last;t.xp6(2),t.hij(" ",n," "),t.xp6(1),t.Q6J("hidden",s)}}let _=(()=>{class e{constructor(){this._cdr=(0,t.f3M)(t.sBO),this.breadcrumbs=[],(0,t.f3M)(d.by).addIcons(a._tD,a.J9Y)}ngAfterViewInit(){this._cdr.detectChanges()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["geb-breadcrumbs"]],inputs:{breadcrumbs:"breadcrumbs"},standalone:!0,features:[t.jDz],decls:4,vars:1,consts:[[1,"text-sm","text-gray-400","flex","flex-wrap","items-center"],[1,"mr-1"],["icon","home","size","sm"],[4,"ngFor","ngForOf"],[1,"mr-1",3,"hidden"],["icon","chevron-right"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"span",1),t._UZ(2,"fa-icon",2),t.qZA(),t.YNc(3,p,5,2,"ng-container",3),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngForOf",s.breadcrumbs))},dependencies:[c.ez,c.sg,d.uH,d.BN],encapsulation:2,changeDetection:0}),e})();var x=o(8363);function y(e,i){if(1&e&&t._UZ(0,"fa-icon",9),2&e){const n=t.oxw().$implicit;t.Q6J("icon",n.icon)}}function v(e,i){1&e&&t._UZ(0,"fa-icon",13)}function b(e,i){1&e&&t._UZ(0,"fa-icon",14)}function T(e,i){if(1&e&&(t.TgZ(0,"div",10),t.YNc(1,v,1,0,"fa-icon",11),t.YNc(2,b,1,0,"fa-icon",12),t.qZA()),2&e){const n=t.oxw().$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngIf",!s.checkOpen(n.path,1)),t.xp6(1),t.Q6J("ngIf",s.checkOpen(n.path,1))}}const w=function(e,i){return{"opacity-100 bg-white bg-opacity-20":e,"opacity-40":i}};function Z(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"div",17),t._uU(2),t.qZA(),t.BQk()),2&e){const n=i.$implicit,s=t.oxw(4);t.xp6(1),t.Q6J("ngClass",t.WLB(2,w,s.checkOpen(n.path,2),!s.checkOpen(n.path,2))),t.xp6(1),t.hij(" ",n.title," ")}}function D(e,i){if(1&e&&(t.TgZ(0,"div",16),t.YNc(1,Z,3,5,"ng-container",1),t.qZA()),2&e){const n=t.oxw().ngIf,s=t.oxw().$implicit,r=t.oxw();t.Q6J("hidden",!r.checkOpen(s.path,1)),t.xp6(1),t.Q6J("ngForOf",n)}}function A(e,i){if(1&e&&(t.ynx(0),t.YNc(1,D,2,2,"div",15),t.BQk()),2&e){const n=i.ngIf;t.xp6(1),t.Q6J("ngIf",n.length>0)}}const I=function(e){return{"bg-black bg-opacity-20":e}},C=function(e,i){return{"opacity-100":e,"opacity-40":i}};function M(e,i){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2)(2,"div",3)(3,"div",4),t.YNc(4,y,1,1,"fa-icon",5),t.TgZ(5,"div",6),t._uU(6),t.qZA()(),t.YNc(7,T,3,2,"div",7),t.qZA(),t.YNc(8,A,2,1,"ng-container",8),t.qZA(),t.BQk()),2&e){const n=i.$implicit,s=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(6,I,s.checkOpen(n.path,1))),t.xp6(1),t.Q6J("ngClass",t.WLB(8,C,s.checkOpen(n.path,1),!s.checkOpen(n.path,1))),t.xp6(2),t.Q6J("ngIf",null==n?null:n.icon),t.xp6(2),t.Oqu(n.title),t.xp6(1),t.Q6J("ngIf",n.children&&n.children.length),t.xp6(1),t.Q6J("ngIf",n.children)}}let O=(()=>{class e{constructor(n,s){this.location=s,this._cdr=(0,t.f3M)(t.sBO),this.sideMenuList=[],this.pathArr=[],(0,t.f3M)(d.by).addIcons(a.A35,a._tD,a.ptq,a.mTx,a.hPQ,a.Vkm,a.g4A,a.VPG,a.gr5,a.jJj),this.sideMenuList=n,this.getNowPathArray(this.location.path(!1))}getNowPathArray(n){const s=n.split("/").filter(r=>r);this.pathArr=s}checkOpen(n,s=1){return this.pathArr[s]==n}ngAfterViewInit(){this._cdr.detectChanges()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.p),t.Y36(c.Ye))},e.\u0275cmp=t.Xpm({type:e,selectors:[["geb-side-list"]],standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[1,"w-full","p-2","flex","flex-col","sidebar","bg-cathybk-geb-primary"],[4,"ngFor","ngForOf"],[1,"list","m-0","p-0","w-full","h-full",3,"ngClass"],[1,"flex","flex-wrap","justify-between","items-center","cursor-pointer","py-2","px-1","text-white","hover:opacity-100",3,"ngClass"],[1,"flex","flex-wrap","justify-start","items-center"],["class","mr-2 w-4","size","xs",3,"icon",4,"ngIf"],[1,""],["class","text-xs",4,"ngIf"],[4,"ngIf"],["size","xs",1,"mr-2","w-4",3,"icon"],[1,"text-xs"],["icon","chevron-down",4,"ngIf"],["icon","chevron-up",4,"ngIf"],["icon","chevron-down"],["icon","chevron-up"],[3,"hidden",4,"ngIf"],[3,"hidden"],[1,"list-child-item","text-white","py-2","px-1","pl-7","cursor-pointer","hover:opacity-100",3,"ngClass"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.YNc(1,M,9,11,"ng-container",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",s.sideMenuList))},dependencies:[c.ez,c.mk,c.sg,c.O5,d.uH,d.BN],styles:[".sidebar[_ngcontent-%COMP%]{min-width:160px}.sidebar[_ngcontent-%COMP%]   .list.active[_ngcontent-%COMP%]{background:#042619}.sidebar[_ngcontent-%COMP%]   .list-child-item.active[_ngcontent-%COMP%]{background:#1a6d4d}"],changeDetection:0}),e})();var U=o(4408);const l=new(o(7565).v)(U.o),B=l;var N=o(9751),J=o(3532);function Y(e,i){if(1&e&&(t.TgZ(0,"div",3),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.minutesToDday>9?n.minutesToDday:"0"+n.minutesToDday," ")}}function z(e,i){1&e&&(t.TgZ(0,"div",3),t._uU(1,"00"),t.qZA())}let F=(()=>{class e{constructor(){this._cdr=(0,t.f3M)(t.sBO),this._dp=(0,t.f3M)(c.uU),this.time=30,this.showTime=!1,this.dateNow=new Date,this.dDay=this.dateNow.setMinutes(this.dateNow.getMinutes()+this.time),this.milliSecondsInASecond=1e3,this.hoursInADay=24,this.minutesInAnHour=60,this.SecondsInAMinute=60,this.countdownTime=""}getTimeDifference(){this.timeDifference=this.dDay-(new Date).getTime(),this.allocateTimeUnits(this.timeDifference),this._cdr.detectChanges()}allocateTimeUnits(n){this.secondsToDday=Math.floor(n/this.milliSecondsInASecond%this.SecondsInAMinute),this.minutesToDday=Math.floor(n/(this.milliSecondsInASecond*this.minutesInAnHour)%this.SecondsInAMinute),this.secondsToDday+this.minutesToDday>0&&(this.showTime=!0)}ngOnInit(){this.subscription=function L(e=0,i=l){return e<0&&(e=0),function j(e=0,i,n=B){let s=-1;return null!=i&&((0,J.K)(i)?n=i:s=i),new N.y(r=>{let u=function S(e){return e instanceof Date&&!isNaN(e)}(e)?+e-n.now():e;u<0&&(u=0);let P=0;return n.schedule(function(){r.closed||(r.next(P++),0<=s?this.schedule(void 0,s):r.complete())},u)})}(e,e,i)}(1e3).subscribe(n=>{this.getTimeDifference()}),this._cdr.detectChanges()}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["geb-count-down"]],inputs:{time:"time"},standalone:!0,features:[t._Bn([c.uU]),t.jDz],decls:9,vars:4,consts:[[1,"flex","flex-wrap","justify-end","items-center","text-gray-400","text-sm",3,"hidden"],["class","text-red-500",4,"ngIf"],[1,"mx-1"],[1,"text-red-500"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.YNc(1,Y,2,1,"div",1),t.YNc(2,z,2,0,"div",1),t.TgZ(3,"span",2),t._uU(4,"\u5206"),t.qZA(),t.TgZ(5,"div",3),t._uU(6),t.qZA(),t.TgZ(7,"span",2),t._uU(8,"\u79d2"),t.qZA()()),2&n&&(t.Q6J("hidden",!s.showTime),t.xp6(1),t.Q6J("ngIf",s.minutesToDday>0),t.xp6(1),t.Q6J("ngIf",0===s.minutesToDday),t.xp6(4),t.hij(" ",s.secondsToDday>9?s.secondsToDday:"0"+s.secondsToDday," "))},dependencies:[c.ez,c.O5],encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{constructor(){this._cdr=(0,t.f3M)(t.sBO),this._dp=(0,t.f3M)(c.uU),this.now="",this.countdown="",this.countdownTime=30,setInterval(()=>{this.getNow()},1e3)}getNow(){this.now=this._dp.transform(new Date,"yyyy/MM/dd  hh:mm:ss a"),this._cdr.detectChanges()}ngAfterViewInit(){this._cdr.detectChanges()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["geb-time-info"]],standalone:!0,features:[t._Bn([c.uU]),t.jDz],decls:5,vars:0,consts:[[1,"flex","flex-wrap","justify-end","items-center","text-gray-400","text-sm"],[1,"mr-1"],[1,"mr-1","tabular-nums"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2,"\u8ddd\u96e2\u767b\u51fa\u5c1a\u9918"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"geb-count-down"),t.qZA()())},dependencies:[c.ez,F],encapsulation:2,changeDetection:0}),e})();var h=o(3074);let q=(()=>{class e{constructor(n){this.route=n,this._cdr=(0,t.f3M)(t.sBO),this._router=(0,t.f3M)(h.F0),this._location=(0,t.f3M)(c.Ye),this.breadcrumbs=[]}getPathArray(){this.breadcrumbs=this.route.snapshot.data.breadcrumb}ngAfterViewInit(){this.getPathArray(),this._cdr.detectChanges()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:14,vars:1,consts:[[1,"flex","h-screen","text-cathybk-baseFont"],[1,"flex","flex-col","flex-1","overflow-hidden","min-hight","bg-gray-100"],[1,"bg-white"],[1,"relative","w-full","m-0","p-0","flex",2,"min-height","97vh"],[1,"w-48","h-full","flex-none","p-2","bg-cathybk-geb-primary","justify-center","items-start",2,"min-height","98vh"],["id","container",1,"flex-auto","items-stretch","h-full","p-0","m-0",2,"min-height","85vh"],[1,"flex","justify-between","p-2","bg-gray-50"],[3,"breadcrumbs"],[1,"bg-white","p-2","h-full",2,"min-height","86vh"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"geb-top-nav"),t.TgZ(3,"main",2)(4,"div",3)(5,"div",4),t._UZ(6,"geb-side-list"),t.qZA(),t.TgZ(7,"div",5)(8,"div",6),t._UZ(9,"geb-breadcrumbs",7),t.TgZ(10,"div"),t._UZ(11,"geb-time-info"),t.qZA()(),t.TgZ(12,"div",8),t._UZ(13,"router-outlet"),t.qZA()()()()()()),2&n&&(t.xp6(9),t.Q6J("breadcrumbs",s.breadcrumbs))},dependencies:[c.ez,h.Bz,h.lC,g.ZK,m.WQ,k,O,_],encapsulation:2,changeDetection:0}),e})()}}]);