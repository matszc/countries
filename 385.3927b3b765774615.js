"use strict";(self.webpackChunkcountries=self.webpackChunkcountries||[]).push([[385],{3385:(W,R,u)=>{u.r(R),u.d(R,{LayoutContainerModule:()=>N});var m=u(9808),v=u(0),h=u(5e3),D=u(508),k=u(925);const I=["*",[["mat-toolbar-row"]]],O=["*","mat-toolbar-row"],M=(0,D.pj)(class{constructor(l){this._elementRef=l}});let g=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275dir=h.lG2({type:l,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),l})(),b=(()=>{class l extends M{constructor(p,A,P){super(p),this._platform=A,this._document=P}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return l.\u0275fac=function(p){return new(p||l)(h.Y36(h.SBq),h.Y36(k.t4),h.Y36(m.K0))},l.\u0275cmp=h.Xpm({type:l,selectors:[["mat-toolbar"]],contentQueries:function(p,A,P){if(1&p&&h.Suo(P,g,5),2&p){let z;h.iGM(z=h.CRH())&&(A._toolbarRows=z)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(p,A){2&p&&h.ekj("mat-toolbar-multiple-rows",A._toolbarRows.length>0)("mat-toolbar-single-row",0===A._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[h.qOj],ngContentSelectors:O,decls:2,vars:0,template:function(p,A){1&p&&(h.F$t(I),h.Hsn(0),h.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),l})(),E=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[D.BQ],D.BQ]}),l})(),C=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=h.Xpm({type:l,selectors:[["app-header"]],decls:2,vars:0,consts:[[1,"header-toolbar"]],template:function(p,A){1&p&&(h.TgZ(0,"header"),h._UZ(1,"mat-toolbar",0),h.qZA())},directives:[b],styles:["[_nghost-%COMP%]{position:sticky}.header-toolbar[_ngcontent-%COMP%]{background-color:#e91e63}"]}),l})(),S=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=h.Xpm({type:l,selectors:[["app-footer"]],decls:2,vars:0,consts:[[1,"footer-toolbar"]],template:function(p,A){1&p&&(h.TgZ(0,"footer"),h._UZ(1,"mat-toolbar",0),h.qZA())},directives:[b],styles:["[_nghost-%COMP%]{position:fixed;bottom:0;width:100%}.footer-toolbar[_ngcontent-%COMP%]{background-color:#e91e63}"]}),l})();const j=[{path:"",component:(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=h.Xpm({type:l,selectors:[["app-layout-container"]],decls:4,vars:0,consts:[[1,"main-content"]],template:function(p,A){1&p&&(h._UZ(0,"app-header"),h.TgZ(1,"main",0),h._UZ(2,"router-outlet"),h.qZA(),h._UZ(3,"app-footer"))},directives:[C,v.lC,S],styles:[".main-content[_ngcontent-%COMP%]{box-sizing:border-box;min-width:100%;min-height:100%;padding:5%}"]}),l})(),children:[{path:"",redirectTo:"regions",pathMatch:"full"},{path:"regions",loadChildren:()=>Promise.all([u.e(536),u.e(839)]).then(u.bind(u,6839)).then(l=>l.RegionModule)},{path:"regions/:region",loadChildren:()=>Promise.all([u.e(592),u.e(213)]).then(u.bind(u,7213)).then(l=>l.CountriesModule)},{path:"regions/:region/:country",loadChildren:()=>Promise.all([u.e(536),u.e(592),u.e(782)]).then(u.bind(u,4782)).then(l=>l.CountryDetailsModule)},{path:"**",redirectTo:"regions"}]}];let $=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[v.Bz.forChild(j)],v.Bz]}),l})(),V=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[m.ez,E]]}),l})(),H=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[m.ez,E]]}),l})(),N=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[m.ez,$,E,V,H]]}),l})()},2722:(W,R,u)=>{u.d(R,{R:()=>k});var m=u(4482),v=u(5403),h=u(8421),D=u(5032);function k(I){return(0,m.e)((O,M)=>{(0,h.Xf)(I).subscribe(new v.Q(M,()=>M.complete(),D.Z)),!M.closed&&O.subscribe(M)})}},9272:(W,R,u)=>{u.d(R,{Em:()=>re,tE:()=>fe,qm:()=>me,X6:()=>de,yG:()=>ue});var m=u(9808),v=u(5e3),h=u(925),D=u(7579),k=u(727),I=u(1135),O=u(9646),M=u(1159);class g extends k.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const b={setInterval(...r){const{delegate:t}=b;return((null==t?void 0:t.setInterval)||setInterval)(...r)},clearInterval(r){const{delegate:t}=b;return((null==t?void 0:t.clearInterval)||clearInterval)(r)},delegate:void 0};var w=u(8737);const C={now:()=>(C.delegate||Date).now(),delegate:void 0};class S{constructor(t,e=S.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,i){return new this.schedulerActionCtor(this,t).schedule(i,e)}}S.now=C.now;const j=new class G extends S{constructor(t,e=S.now){super(t,e),this.actions=[],this._active=!1,this._scheduled=void 0}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let i;this._active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,i){for(;t=e.shift();)t.unsubscribe();throw i}}}(class E extends g{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,i=0){return b.setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;b.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let s,i=!1;try{this.work(t)}catch(f){i=!0,s=f||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,w.P)(i,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}});var V=u(4482),H=u(5403),l=u(9300),p=u(4671);function P(r,t){return r===t}var z=u(8505),pe=u(4004),ge=u(2722),q=u(3191);class re extends class Ee{constructor(t){this._items=t,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new D.x,this._typeaheadSubscription=k.w0.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._skipPredicateFn=e=>e.disabled,this._pressedLetters=[],this.tabOut=new D.x,this.change=new D.x,t instanceof v.n_E&&t.changes.subscribe(e=>{if(this._activeItem){const s=e.toArray().indexOf(this._activeItem);s>-1&&s!==this._activeItemIndex&&(this._activeItemIndex=s)}})}skipPredicate(t){return this._skipPredicateFn=t,this}withWrap(t=!0){return this._wrap=t,this}withVerticalOrientation(t=!0){return this._vertical=t,this}withHorizontalOrientation(t){return this._horizontal=t,this}withAllowedModifierKeys(t){return this._allowedModifierKeys=t,this}withTypeAhead(t=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe((0,z.b)(e=>this._pressedLetters.push(e)),function N(r,t=j){return(0,V.e)((e,i)=>{let s=null,f=null,y=null;const T=()=>{if(s){s.unsubscribe(),s=null;const U=f;f=null,i.next(U)}};function K(){const U=y+r,Y=t.now();if(Y<U)return s=this.schedule(void 0,U-Y),void i.add(s);T()}e.subscribe(new H.Q(i,U=>{f=U,y=t.now(),s||(s=t.schedule(K,r),i.add(s))},()=>{T(),i.complete()},void 0,()=>{f=s=null}))})}(t),(0,l.h)(()=>this._pressedLetters.length>0),(0,pe.U)(()=>this._pressedLetters.join(""))).subscribe(e=>{const i=this._getItemsArray();for(let s=1;s<i.length+1;s++){const f=(this._activeItemIndex+s)%i.length,y=i[f];if(!this._skipPredicateFn(y)&&0===y.getLabel().toUpperCase().trim().indexOf(e)){this.setActiveItem(f);break}}this._pressedLetters=[]}),this}withHomeAndEnd(t=!0){return this._homeAndEnd=t,this}setActiveItem(t){const e=this._activeItem;this.updateActiveItem(t),this._activeItem!==e&&this.change.next(this._activeItemIndex)}onKeydown(t){const e=t.keyCode,s=["altKey","ctrlKey","metaKey","shiftKey"].every(f=>!t[f]||this._allowedModifierKeys.indexOf(f)>-1);switch(e){case M.Mf:return void this.tabOut.next();case M.JH:if(this._vertical&&s){this.setNextItemActive();break}return;case M.LH:if(this._vertical&&s){this.setPreviousItemActive();break}return;case M.SV:if(this._horizontal&&s){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case M.oh:if(this._horizontal&&s){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;case M.Sd:if(this._homeAndEnd&&s){this.setFirstItemActive();break}return;case M.uR:if(this._homeAndEnd&&s){this.setLastItemActive();break}return;default:return void((s||(0,M.Vb)(t,"shiftKey"))&&(t.key&&1===t.key.length?this._letterKeyStream.next(t.key.toLocaleUpperCase()):(e>=M.A&&e<=M.Z||e>=M.xE&&e<=M.aO)&&this._letterKeyStream.next(String.fromCharCode(e))))}this._pressedLetters=[],t.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(t){const e=this._getItemsArray(),i="number"==typeof t?t:e.indexOf(t),s=e[i];this._activeItem=null==s?null:s,this._activeItemIndex=i}_setActiveItemByDelta(t){this._wrap?this._setActiveInWrapMode(t):this._setActiveInDefaultMode(t)}_setActiveInWrapMode(t){const e=this._getItemsArray();for(let i=1;i<=e.length;i++){const s=(this._activeItemIndex+t*i+e.length)%e.length;if(!this._skipPredicateFn(e[s]))return void this.setActiveItem(s)}}_setActiveInDefaultMode(t){this._setActiveItemByIndex(this._activeItemIndex+t,t)}_setActiveItemByIndex(t,e){const i=this._getItemsArray();if(i[t]){for(;this._skipPredicateFn(i[t]);)if(!i[t+=e])return;this.setActiveItem(t)}}_getItemsArray(){return this._items instanceof v.n_E?this._items.toArray():this._items}}{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(t){return this._origin=t,this}setActiveItem(t){super.setActiveItem(t),this.activeItem&&this.activeItem.focus(this._origin)}}function de(r){return 0===r.buttons||0===r.offsetX&&0===r.offsetY}function ue(r){const t=r.touches&&r.touches[0]||r.changedTouches&&r.changedTouches[0];return!(!t||-1!==t.identifier||null!=t.radiusX&&1!==t.radiusX||null!=t.radiusY&&1!==t.radiusY)}const Se=new v.OlP("cdk-input-modality-detector-options"),Le={ignoreKeys:[M.zL,M.jx,M.b2,M.MW,M.JU]},Z=(0,h.i$)({passive:!0,capture:!0});let Ne=(()=>{class r{constructor(e,i,s,f){this._platform=e,this._mostRecentTarget=null,this._modality=new I.X(null),this._lastTouchMs=0,this._onKeydown=y=>{var T,K;(null===(K=null===(T=this._options)||void 0===T?void 0:T.ignoreKeys)||void 0===K?void 0:K.some(U=>U===y.keyCode))||(this._modality.next("keyboard"),this._mostRecentTarget=(0,h.sA)(y))},this._onMousedown=y=>{Date.now()-this._lastTouchMs<650||(this._modality.next(de(y)?"keyboard":"mouse"),this._mostRecentTarget=(0,h.sA)(y))},this._onTouchstart=y=>{ue(y)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,h.sA)(y))},this._options=Object.assign(Object.assign({},Le),f),this.modalityDetected=this._modality.pipe(function d(r){return(0,l.h)((t,e)=>r<=e)}(1)),this.modalityChanged=this.modalityDetected.pipe(function A(r,t=p.y){return r=null!=r?r:P,(0,V.e)((e,i)=>{let s,f=!0;e.subscribe(new H.Q(i,y=>{const T=t(y);(f||!r(s,T))&&(f=!1,s=T,i.next(y))}))})}()),e.isBrowser&&i.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,Z),s.addEventListener("mousedown",this._onMousedown,Z),s.addEventListener("touchstart",this._onTouchstart,Z)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,Z),document.removeEventListener("mousedown",this._onMousedown,Z),document.removeEventListener("touchstart",this._onTouchstart,Z))}}return r.\u0275fac=function(e){return new(e||r)(v.LFG(h.t4),v.LFG(v.R0b),v.LFG(m.K0),v.LFG(Se,8))},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const F=new v.OlP("cdk-focus-monitor-default-options"),x=(0,h.i$)({passive:!0,capture:!0});let fe=(()=>{class r{constructor(e,i,s,f,y){this._ngZone=e,this._platform=i,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new D.x,this._rootNodeFocusAndBlurListener=T=>{const K=(0,h.sA)(T),U="focus"===T.type?this._onFocus:this._onBlur;for(let Y=K;Y;Y=Y.parentElement)U.call(this,T,Y)},this._document=f,this._detectionMode=(null==y?void 0:y.detectionMode)||0}monitor(e,i=!1){const s=(0,q.fI)(e);if(!this._platform.isBrowser||1!==s.nodeType)return(0,O.of)(null);const f=(0,h.kV)(s)||this._getDocument(),y=this._elementInfo.get(s);if(y)return i&&(y.checkChildren=!0),y.subject;const T={checkChildren:i,subject:new D.x,rootNode:f};return this._elementInfo.set(s,T),this._registerGlobalListeners(T),T.subject}stopMonitoring(e){const i=(0,q.fI)(e),s=this._elementInfo.get(i);s&&(s.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(s))}focusVia(e,i,s){const f=(0,q.fI)(e);f===this._getDocument().activeElement?this._getClosestElementsInfo(f).forEach(([T,K])=>this._originChanged(T,i,K)):(this._setOrigin(i),"function"==typeof f.focus&&f.focus(s))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!(null==e?void 0:e.contains(this._inputModalityDetector._mostRecentTarget))}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused","touch"===i),e.classList.toggle("cdk-keyboard-focused","keyboard"===i),e.classList.toggle("cdk-mouse-focused","mouse"===i),e.classList.toggle("cdk-program-focused","program"===i)}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&i,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,i){const s=this._elementInfo.get(i),f=(0,h.sA)(e);!s||!s.checkChildren&&i!==f||this._originChanged(i,this._getFocusOrigin(f),s)}_onBlur(e,i){const s=this._elementInfo.get(i);!s||s.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(s.subject,null))}_emitOrigin(e,i){this._ngZone.run(()=>e.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const i=e.rootNode,s=this._rootNodeFocusListenerCount.get(i)||0;s||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,x),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,x)}),this._rootNodeFocusListenerCount.set(i,s+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,ge.R)(this._stopInputModalityDetector)).subscribe(f=>{this._setOrigin(f,!0)}))}_removeGlobalListeners(e){const i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){const s=this._rootNodeFocusListenerCount.get(i);s>1?this._rootNodeFocusListenerCount.set(i,s-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,x),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,x),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,s){this._setClasses(e,i),this._emitOrigin(s.subject,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){const i=[];return this._elementInfo.forEach((s,f)=>{(f===e||s.checkChildren&&f.contains(e))&&i.push([f,s])}),i}}return r.\u0275fac=function(e){return new(e||r)(v.LFG(v.R0b),v.LFG(h.t4),v.LFG(Ne),v.LFG(m.K0,8),v.LFG(F,8))},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const J="cdk-high-contrast-black-on-white",L="cdk-high-contrast-white-on-black",B="cdk-high-contrast-active";let me=(()=>{class r{constructor(e,i){this._platform=e,this._document=i}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const i=this._document.defaultView||window,s=i&&i.getComputedStyle?i.getComputedStyle(e):null,f=(s&&s.backgroundColor||"").replace(/ /g,"");switch(e.remove(),f){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(B),e.remove(J),e.remove(L),this._hasCheckedHighContrastMode=!0;const i=this.getHighContrastMode();1===i?(e.add(B),e.add(J)):2===i&&(e.add(B),e.add(L))}}}return r.\u0275fac=function(e){return new(e||r)(v.LFG(h.t4),v.LFG(m.K0))},r.\u0275prov=v.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},226:(W,R,u)=>{u.d(R,{vT:()=>g,Is:()=>O});var m=u(5e3),v=u(9808);const h=new m.OlP("cdk-dir-doc",{providedIn:"root",factory:function D(){return(0,m.f3M)(v.K0)}}),k=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let O=(()=>{class b{constructor(E){if(this.value="ltr",this.change=new m.vpe,E){const S=E.documentElement?E.documentElement.dir:null;this.value=function I(b){const w=(null==b?void 0:b.toLowerCase())||"";return"auto"===w&&"undefined"!=typeof navigator&&(null==navigator?void 0:navigator.language)?k.test(navigator.language)?"rtl":"ltr":"rtl"===w?"rtl":"ltr"}((E.body?E.body.dir:null)||S||"ltr")}}ngOnDestroy(){this.change.complete()}}return b.\u0275fac=function(E){return new(E||b)(m.LFG(h,8))},b.\u0275prov=m.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})(),g=(()=>{class b{}return b.\u0275fac=function(E){return new(E||b)},b.\u0275mod=m.oAB({type:b}),b.\u0275inj=m.cJS({}),b})()},3191:(W,R,u)=>{u.d(R,{Ig:()=>v,fI:()=>O});var m=u(5e3);function v(g){return null!=g&&"false"!=`${g}`}function O(g){return g instanceof m.SBq?g.nativeElement:g}},1159:(W,R,u)=>{u.d(R,{A:()=>Me,zL:()=>M,jx:()=>O,JH:()=>N,uR:()=>G,K5:()=>k,Sd:()=>j,oh:()=>$,b2:()=>$e,MW:()=>ke,aO:()=>ve,SV:()=>H,JU:()=>I,L_:()=>E,Mf:()=>h,LH:()=>V,Z:()=>Re,xE:()=>P,Vb:()=>ze});const h=9,k=13,I=16,O=17,M=18,E=32,G=35,j=36,$=37,V=38,H=39,N=40,P=48,ve=57,Me=65,Re=90,ke=91,$e=224;function ze(ie,...Ye){return Ye.length?Ye.some(Xe=>ie[Xe]):ie.altKey||ie.shiftKey||ie.ctrlKey||ie.metaKey}},925:(W,R,u)=>{u.d(R,{t4:()=>D,sA:()=>N,kV:()=>V,Oy:()=>l,i$:()=>w});var m=u(5e3),v=u(9808);let h;try{h="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(d){h=!1}let g,j,D=(()=>{class d{constructor(A){this._platformId=A,this.isBrowser=this._platformId?(0,v.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!h)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return d.\u0275fac=function(A){return new(A||d)(m.LFG(m.Lbi))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();function w(d){return function b(){if(null==g&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>g=!0}))}finally{g=g||!1}return g}()?d:!!d.capture}function V(d){if(function $(){if(null==j){const d="undefined"!=typeof document?document.head:null;j=!(!d||!d.createShadowRoot&&!d.attachShadow)}return j}()){const p=d.getRootNode?d.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&p instanceof ShadowRoot)return p}return null}function N(d){return d.composedPath?d.composedPath()[0]:d.target}function l(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha}},508:(W,R,u)=>{u.d(R,{BQ:()=>N,X2:()=>Ae,uc:()=>Te,nP:()=>Fe,us:()=>xe,wG:()=>Oe,si:()=>we,pj:()=>P,Kr:()=>z,Id:()=>A,E0:()=>re});var m=u(5e3),v=u(226),D=u(9808),k=u(925),I=u(9272),O=u(3191),M=u(8675),g=u(2712);const H=new m.OlP("mat-sanity-checks",{providedIn:"root",factory:function V(){return!0}});let N=(()=>{class a{constructor(n,c,_){this._sanityChecks=c,this._document=_,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return!(0,k.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[n])}}return a.\u0275fac=function(n){return new(n||a)(m.LFG(I.qm),m.LFG(H,8),m.LFG(D.K0))},a.\u0275mod=m.oAB({type:a}),a.\u0275inj=m.cJS({imports:[[v.vT],v.vT]}),a})();function A(a){return class extends a{constructor(...o){super(...o),this._disabled=!1}get disabled(){return this._disabled}set disabled(o){this._disabled=(0,O.Ig)(o)}}}function P(a,o){return class extends a{constructor(...n){super(...n),this.defaultColor=o,this.color=o}get color(){return this._color}set color(n){const c=n||this.defaultColor;c!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),c&&this._elementRef.nativeElement.classList.add(`mat-${c}`),this._color=c)}}}function z(a){return class extends a{constructor(...o){super(...o),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(o){this._disableRipple=(0,O.Ig)(o)}}}let Ae=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275dir=m.lG2({type:a,selectors:[["","mat-line",""],["","matLine",""]],hostAttrs:[1,"mat-line"]}),a})();function re(a,o,n="mat"){a.changes.pipe((0,M.O)(a)).subscribe(({length:c})=>{X(o,`${n}-2-line`,!1),X(o,`${n}-3-line`,!1),X(o,`${n}-multi-line`,!1),2===c||3===c?X(o,`${n}-${c}-line`,!0):c>3&&X(o,`${n}-multi-line`,!0)})}function X(a,o,n){a.nativeElement.classList.toggle(o,n)}let Te=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=m.oAB({type:a}),a.\u0275inj=m.cJS({imports:[[N],N]}),a})();class Ie{constructor(o,n,c){this._renderer=o,this.element=n,this.config=c,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const ae={enterDuration:225,exitDuration:150},Q=(0,k.i$)({passive:!0}),ee=["mousedown","touchstart"],te=["mouseup","mouseleave","touchend","touchcancel"];class le{constructor(o,n,c,_){this._target=o,this._ngZone=n,this._isPointerDown=!1,this._activeRipples=new Set,this._pointerUpEventsRegistered=!1,_.isBrowser&&(this._containerElement=(0,O.fI)(c))}fadeInRipple(o,n,c={}){const _=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),F=Object.assign(Object.assign({},ae),c.animation);c.centered&&(o=_.left+_.width/2,n=_.top+_.height/2);const x=c.radius||function De(a,o,n){const c=Math.max(Math.abs(a-n.left),Math.abs(a-n.right)),_=Math.max(Math.abs(o-n.top),Math.abs(o-n.bottom));return Math.sqrt(c*c+_*_)}(o,n,_),fe=o-_.left,Pe=n-_.top,J=F.enterDuration,L=document.createElement("div");L.classList.add("mat-ripple-element"),L.style.left=fe-x+"px",L.style.top=Pe-x+"px",L.style.height=2*x+"px",L.style.width=2*x+"px",null!=c.color&&(L.style.backgroundColor=c.color),L.style.transitionDuration=`${J}ms`,this._containerElement.appendChild(L),function ne(a){window.getComputedStyle(a).getPropertyValue("opacity")}(L),L.style.transform="scale(1)";const B=new Ie(this,L,c);return B.state=0,this._activeRipples.add(B),c.persistent||(this._mostRecentTransientRipple=B),this._runTimeoutOutsideZone(()=>{const me=B===this._mostRecentTransientRipple;B.state=1,!c.persistent&&(!me||!this._isPointerDown)&&B.fadeOut()},J),B}fadeOutRipple(o){const n=this._activeRipples.delete(o);if(o===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),this._activeRipples.size||(this._containerRect=null),!n)return;const c=o.element,_=Object.assign(Object.assign({},ae),o.config.animation);c.style.transitionDuration=`${_.exitDuration}ms`,c.style.opacity="0",o.state=2,this._runTimeoutOutsideZone(()=>{o.state=3,c.remove()},_.exitDuration)}fadeOutAll(){this._activeRipples.forEach(o=>o.fadeOut())}fadeOutAllNonPersistent(){this._activeRipples.forEach(o=>{o.config.persistent||o.fadeOut()})}setupTriggerEvents(o){const n=(0,O.fI)(o);!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,this._registerEvents(ee))}handleEvent(o){"mousedown"===o.type?this._onMousedown(o):"touchstart"===o.type?this._onTouchStart(o):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(te),this._pointerUpEventsRegistered=!0)}_onMousedown(o){const n=(0,I.X6)(o),c=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!n&&!c&&(this._isPointerDown=!0,this.fadeInRipple(o.clientX,o.clientY,this._target.rippleConfig))}_onTouchStart(o){if(!this._target.rippleDisabled&&!(0,I.yG)(o)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const n=o.changedTouches;for(let c=0;c<n.length;c++)this.fadeInRipple(n[c].clientX,n[c].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._activeRipples.forEach(o=>{!o.config.persistent&&(1===o.state||o.config.terminateOnPointerUp&&0===o.state)&&o.fadeOut()}))}_runTimeoutOutsideZone(o,n=0){this._ngZone.runOutsideAngular(()=>setTimeout(o,n))}_registerEvents(o){this._ngZone.runOutsideAngular(()=>{o.forEach(n=>{this._triggerElement.addEventListener(n,this,Q)})})}_removeTriggerEvents(){this._triggerElement&&(ee.forEach(o=>{this._triggerElement.removeEventListener(o,this,Q)}),this._pointerUpEventsRegistered&&te.forEach(o=>{this._triggerElement.removeEventListener(o,this,Q)}))}}const Ce=new m.OlP("mat-ripple-global-options");let Oe=(()=>{class a{constructor(n,c,_,F,x){this._elementRef=n,this._animationMode=x,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=F||{},this._rippleRenderer=new le(this,c,n,_)}get disabled(){return this._disabled}set disabled(n){n&&this.fadeOutAllNonPersistent(),this._disabled=n,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(n){this._trigger=n,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:Object.assign(Object.assign(Object.assign({},this._globalOptions.animation),"NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(n,c=0,_){return"number"==typeof n?this._rippleRenderer.fadeInRipple(n,c,Object.assign(Object.assign({},this.rippleConfig),_)):this._rippleRenderer.fadeInRipple(0,0,Object.assign(Object.assign({},this.rippleConfig),n))}}return a.\u0275fac=function(n){return new(n||a)(m.Y36(m.SBq),m.Y36(m.R0b),m.Y36(k.t4),m.Y36(Ce,8),m.Y36(g.Qb,8))},a.\u0275dir=m.lG2({type:a,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,c){2&n&&m.ekj("mat-ripple-unbounded",c.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),a})(),we=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=m.oAB({type:a}),a.\u0275inj=m.cJS({imports:[[N],N]}),a})(),Fe=(()=>{class a{constructor(n){this._animationMode=n,this.state="unchecked",this.disabled=!1}}return a.\u0275fac=function(n){return new(n||a)(m.Y36(g.Qb,8))},a.\u0275cmp=m.Xpm({type:a,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:8,hostBindings:function(n,c){2&n&&m.ekj("mat-pseudo-checkbox-indeterminate","indeterminate"===c.state)("mat-pseudo-checkbox-checked","checked"===c.state)("mat-pseudo-checkbox-disabled",c.disabled)("_mat-animation-noopable","NoopAnimations"===c._animationMode)},inputs:{state:"state",disabled:"disabled"},decls:0,vars:0,template:function(n,c){},styles:['.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n'],encapsulation:2,changeDetection:0}),a})(),xe=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=m.oAB({type:a}),a.\u0275inj=m.cJS({imports:[[N]]}),a})()}}]);