function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{BksD:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),a=function l(){_classCallCheck(this,l)},t=u("+ZNK"),b=u("KCvt"),o=u("knxA"),i=u("alYm"),c=u("pMnS"),d=u("IKgy"),r=u("LuDt");u("leug");var s=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Menu Surface",description:"The MDC Menu Surface component is a reusable surface that appears above the content of the page and can be positioned adjacent to an element.",references:[{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu-surface/README.md"}],code:"import {MdcMenuSurfaceModule} from '@angular-mdc/web';",sass:"@use '@material/menu-surface/mdc-menu-surface';\n@use '@material/menu-surface';"}}}]),l}(),m=function l(){_classCallCheck(this,l)},f=function l(){_classCallCheck(this,l)},h=function l(){_classCallCheck(this,l),this.images=Array.from(Array(2),(function(l,n){return n})),this.corners=["topStart","topEnd","bottomStart","bottomEnd"],this.example1={html:'<div mdcMenuSurfaceAnchor #demoAnchor>\n  <button mdc-button raised (click)="demoSurface.open = !demoSurface.open">\n    Show Menu Surface\n  </button>\n  <mdc-menu-surface #demoSurface class="demo-menu-surface--shaped" [anchorElement]="demoAnchor">\n    <mdc-image-list class="menu-surface-image-list">\n      <mdc-image-list-item *ngFor="let i of images">\n        <mdc-image-list-image-aspect>\n          <img mdcImageListImage src="<image source>" />\n        </mdc-image-list-image-aspect>\n        <mdc-image-list-supporting>\n          <span mdcImageListLabel>Text label</span>\n        </mdc-image-list-supporting>\n      </mdc-image-list-item>\n    </mdc-image-list>\n  </mdc-menu-surface>\n</div>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_menu-surface.scss"}},p=u("5l+6"),y=u("yk01"),g=u("4G1d"),x=u("aRkA"),L=u("+O8G"),N=u("0fpz"),k=u("CBIf"),S=u("cFTH"),w=u("fTo0"),v=u("dEKC"),X=u("nmYj"),M=u("+LCo"),_=u("kDKR"),T=u("s7LF"),C=u("SVse"),F=u("9WsL"),I=u("6D23"),D=u("ApBt"),E=u("a63Y"),A=u("XNxO"),R=u("uwiL"),O=u("uAA3"),j=u("//9D"),B=u("9UYg"),z=u("BuWE"),q=e.wb({encapsulation:2,styles:[],data:{}});function K(l){return e.ac(2,[e.Mb(null,0)],null,null)}var P=u("XbMX"),$=u("dkiD"),G=u("aXvW"),W=e.wb({encapsulation:2,styles:[],data:{}});function Y(l){return e.ac(0,[e.Tb(402653184,1,{_componentViewer:0}),(l()(),e.yb(1,0,null,null,1,"component-viewer",[],null,null,null,d.b,d.a)),e.xb(2,114688,[[1,4]],0,r.a,[],null,null)],(function(l,n){l(n,2,0)}),null)}var H=e.ub("ng-component",s,(function(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,1,"ng-component",[],null,null,null,Y,W)),e.xb(1,114688,null,0,s,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),J=e.wb({encapsulation:2,styles:[],data:{}});function V(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,63,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.yb(1,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.xb(2,16384,null,0,p.i,[],null,null),(l()(),e.Xb(-1,null,["MdcMenuSurface"])),(l()(),e.yb(4,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,[" Selector: "])),(l()(),e.yb(6,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["mdc-menu-surface"])),(l()(),e.Xb(-1,null,[" Exported as: "])),(l()(),e.yb(9,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["mdcMenuSurface"])),(l()(),e.yb(11,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.xb(12,16384,null,0,p.l,[],null,null),(l()(),e.Xb(-1,null,["Properties"])),(l()(),e.yb(14,0,null,null,49,"table",[],null,null,null,null,null)),(l()(),e.yb(15,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.yb(16,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Name"])),(l()(),e.yb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Description"])),(l()(),e.yb(21,0,null,null,42,"tbody",[],null,null,null,null,null)),(l()(),e.yb(22,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(23,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["open: boolean"])),(l()(),e.yb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Opens or closes the menu."])),(l()(),e.yb(27,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e.yb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["anchorCorner: string"])),(l()(),e.yb(30,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Override the opening point of the menu. (Default: topStart) "])),(l()(),e.yb(32,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Values: 'bottomEnd' | 'bottomStart' | 'topEnd' | 'topStart'"])),(l()(),e.yb(34,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(35,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(36,null,["anchorMargin: ","top: number, bottom: number, left: number, right : number",""])),(l()(),e.yb(37,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Sets the distance from the anchor point that the menu surface should be shown."])),(l()(),e.yb(39,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(41,null,["coordinates: ","x: number, y: number",""])),(l()(),e.yb(42,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Sets the absolute x/y position of the menu. Should only be used when the menu is hoisted or using fixed positioning."])),(l()(),e.yb(44,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["quickOpen: boolean"])),(l()(),e.yb(47,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Sets whether the menu should open and close without animation when the open/close methods are called."])),(l()(),e.yb(49,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["anchorElement: Element | mdcMenuSurfaceAnchor"])),(l()(),e.yb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Set to indicate an element the menu should be anchored to."])),(l()(),e.yb(54,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(55,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["fixed: boolean"])),(l()(),e.yb(57,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Used to indicate that the menu is using fixed positioning."])),(l()(),e.yb(59,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(60,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["hoistToBody: boolean"])),(l()(),e.yb(62,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Removes the menu-surface element from the DOM and appends it to the body element. Should be used to overcome overflow: hidden issues."])),(l()(),e.yb(64,0,null,null,13,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.yb(65,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.xb(66,16384,null,0,p.i,[],null,null),(l()(),e.Xb(-1,null,["MdcMenuSurfaceAnchor"])),(l()(),e.Xb(-1,null,[" Sets the anchor element used as an anchor for menu-surface positioning logic. "])),(l()(),e.yb(69,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,[" Selector: "])),(l()(),e.yb(71,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["mdcMenuSurfaceAnchor"])),(l()(),e.yb(73,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["mdc-menu-surface-anchor"])),(l()(),e.Xb(-1,null,[" Exported as: "])),(l()(),e.yb(76,0,null,null,1,"span",[["class","markdown-code"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["mdcMenuSurfaceAnchor"]))],null,(function(l,n){l(n,36,0,"{","}"),l(n,41,0,"{","}")}))}var Z=e.ub("ng-component",m,(function(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,1,"ng-component",[],null,null,null,V,J)),e.xb(1,49152,null,0,m,[],null,null)],null,null)}),{},{},[]),Q=e.wb({encapsulation:2,styles:[],data:{}});function U(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,44,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.yb(1,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.xb(2,16384,null,0,p.l,[],null,null),(l()(),e.Xb(-1,null,["Sass Mixins"])),(l()(),e.yb(4,0,null,null,40,"table",[],null,null,null,null,null)),(l()(),e.yb(5,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.yb(6,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.yb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Mixin"])),(l()(),e.yb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Description"])),(l()(),e.yb(11,0,null,null,33,"tbody",[],null,null,null,null,null)),(l()(),e.yb(12,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.yb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.yb(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["ink-color($color)"])),(l()(),e.yb(16,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Sets the "])),(l()(),e.yb(18,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["color"])),(l()(),e.Xb(-1,null,[" property of the "])),(l()(),e.yb(21,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["mdc-menu-surface"])),(l()(),e.Xb(-1,null,["."])),(l()(),e.yb(24,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),e.yb(25,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.yb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["fill-color($color)"])),(l()(),e.yb(28,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Sets the "])),(l()(),e.yb(30,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["background-color"])),(l()(),e.Xb(-1,null,[" property of the "])),(l()(),e.yb(33,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["mdc-menu-surface"])),(l()(),e.Xb(-1,null,["."])),(l()(),e.yb(36,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.yb(37,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.yb(38,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["shape-radius($radius, $rtl-reflexive)"])),(l()(),e.yb(40,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Sets the rounded shape to menu surface with given radius size. Set "])),(l()(),e.yb(42,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["$rtl-reflexive"])),(l()(),e.Xb(-1,null,[" to true to flip radius values in RTL context, defaults to false."]))],null,null)}var ll=e.ub("ng-component",f,(function(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,1,"ng-component",[],null,null,null,U,Q)),e.xb(1,49152,null,0,f,[],null,null)],null,null)}),{},{},[]),nl=e.wb({encapsulation:2,styles:[],data:{}});function ul(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,9,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,y.b,y.a)),e.xb(1,1228800,null,2,g.a,[e.h,e.z,e.l],null,null),e.Tb(603979776,2,{_control:0}),e.Tb(603979776,3,{assistiveElements:1}),(l()(),e.yb(4,0,null,0,3,"mdc-radio",[["class","mdc-radio"]],[[8,"id",0],[1,"tabindex",0],[1,"name",0],[2,"mdc-radio--touch",null]],[[null,"focus"]],(function(l,n,u){var a=!0;return"focus"===n&&(a=!1!==e.Nb(l,6).input.nativeElement.focus()&&a),a}),x.b,x.a)),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(6,4374528,[[1,4]],0,k.b,[e.h,e.l,L.a,S.b,[2,k.a],[2,g.a]],{value:[0,"value"]},null),e.Sb(2048,[[2,4]],w.a,null,[k.b]),(l()(),e.yb(8,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Xb(9,null,["",""]))],(function(l,n){l(n,6,0,n.context.$implicit)}),(function(l,n){l(n,0,0,e.Nb(n,1).fluid,e.Nb(n,1).alignEnd),l(n,4,0,e.Nb(n,6).id,-1,null,e.Nb(n,6).touch),l(n,9,0,n.context.$implicit)}))}function el(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,10,"mdc-image-list-item",[["class","mdc-image-list__item"]],null,null,null,null,null)),e.xb(1,16384,null,0,v.d,[e.l],null,null),(l()(),e.yb(2,0,null,null,3,"mdc-image-list-image-aspect",[],null,null,null,X.c,X.b)),e.xb(3,49152,null,0,v.c,[e.l],null,null),(l()(),e.yb(4,0,null,0,1,"img",[["class","mdc-image-list__image"],["mdcImageListImage",""]],[[8,"src",4]],null,null,null,null)),e.xb(5,16384,null,0,v.b,[e.l],null,null),(l()(),e.yb(6,0,null,null,4,"mdc-image-list-supporting",[["class","mdc-image-list__supporting"]],null,null,null,null,null)),e.xb(7,16384,null,0,v.f,[e.l],null,null),(l()(),e.yb(8,0,null,null,2,"span",[["class","mdc-image-list__label"],["mdcImageListLabel",""]],null,null,null,null,null)),e.xb(9,16384,null,0,v.e,[e.l],null,null),(l()(),e.Xb(-1,null,["Text label"]))],null,(function(l,n){l(n,4,0,e.Fb(1,"https://material-components-web.appspot.com/images/photos/3x2/",n.context.$implicit+1,".jpg"))}))}function al(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,88,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.yb(1,0,null,null,70,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.yb(2,0,null,null,10,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.yb(3,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Anchor Corner"])),(l()(),e.yb(5,0,null,null,7,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.yb(6,0,null,null,6,"mdc-radio-group",[["class","demo-layout__column"],["role","radiogroup"]],[[1,"name",0]],null,null,M.b,M.a)),e.Sb(6144,null,k.a,null,[_.a]),e.Sb(5120,null,T.k,(function(l){return[l]}),[_.a]),e.xb(9,1097728,[["menuSurfaceAnchorCorner",4]],1,_.a,[e.h,e.l],null,null),e.Tb(603979776,1,{_radios:1}),(l()(),e.hb(16777216,null,0,1,null,ul)),e.xb(12,278528,null,0,C.j,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.yb(13,0,null,null,23,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.yb(14,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Anchor Margin"])),(l()(),e.yb(16,0,null,null,20,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.yb(17,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Top margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Nb(l,20).onTextFieldInteraction()&&a),"keydown"===n&&(a=!1!==e.Nb(l,20).onTextFieldInteraction()&&a),a}),F.b,F.a)),e.Sb(6144,null,w.a,null,[I.b]),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(20,1490944,[["marginTop",4]],1,I.b,[D.a,e.h,e.l,E.a,[2,g.a],[2,L.a],[8,null],[2,T.o],[2,T.g],[2,I.a]],{label:[0,"label"],type:[1,"type"]},null),e.Tb(603979776,4,{_icons:1}),(l()(),e.yb(22,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Bottom margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Nb(l,25).onTextFieldInteraction()&&a),"keydown"===n&&(a=!1!==e.Nb(l,25).onTextFieldInteraction()&&a),a}),F.b,F.a)),e.Sb(6144,null,w.a,null,[I.b]),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(25,1490944,[["marginBottom",4]],1,I.b,[D.a,e.h,e.l,E.a,[2,g.a],[2,L.a],[8,null],[2,T.o],[2,T.g],[2,I.a]],{label:[0,"label"],type:[1,"type"]},null),e.Tb(603979776,5,{_icons:1}),(l()(),e.yb(27,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Left margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Nb(l,30).onTextFieldInteraction()&&a),"keydown"===n&&(a=!1!==e.Nb(l,30).onTextFieldInteraction()&&a),a}),F.b,F.a)),e.Sb(6144,null,w.a,null,[I.b]),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(30,1490944,[["marginLeft",4]],1,I.b,[D.a,e.h,e.l,E.a,[2,g.a],[2,L.a],[8,null],[2,T.o],[2,T.g],[2,I.a]],{label:[0,"label"],type:[1,"type"]},null),e.Tb(603979776,6,{_icons:1}),(l()(),e.yb(32,0,null,null,4,"mdc-text-field",[["class","mdc-text-field"],["label","Right margin"],["type","number"]],[[2,"mdc-text-field--disabled",null],[2,"mdc-text-field--outlined",null],[2,"mdc-text-field--fullwidth",null],[2,"mdc-text-field--with-leading-icon",null],[2,"mdc-text-field--with-trailing-icon",null],[2,"mdc-text-field--no-label",null],[2,"mdc-text-field--invalid",null]],[[null,"click"],[null,"keydown"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Nb(l,35).onTextFieldInteraction()&&a),"keydown"===n&&(a=!1!==e.Nb(l,35).onTextFieldInteraction()&&a),a}),F.b,F.a)),e.Sb(6144,null,w.a,null,[I.b]),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(35,1490944,[["marginRight",4]],1,I.b,[D.a,e.h,e.l,E.a,[2,g.a],[2,L.a],[8,null],[2,T.o],[2,T.g],[2,I.a]],{label:[0,"label"],type:[1,"type"]},null),e.Tb(603979776,7,{_icons:1}),(l()(),e.yb(37,0,null,null,34,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.yb(38,0,null,null,33,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.yb(39,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,y.b,y.a)),e.xb(40,1228800,null,2,g.a,[e.h,e.z,e.l],null,null),e.Tb(603979776,8,{_control:0}),e.Tb(603979776,9,{assistiveElements:1}),(l()(),e.yb(43,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0],[2,"mdc-checkbox--touch",null]],null,null,A.b,A.a)),e.Sb(5120,null,T.k,(function(l){return[l]}),[R.a]),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(46,4374528,[["quickOpen",4]],0,R.a,[D.a,e.z,e.h,e.l,L.a,[2,g.a]],null,null),e.Sb(2048,[[8,4]],w.a,null,[R.a]),(l()(),e.yb(48,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Xb(49,null,["Disable open animation: ",""])),(l()(),e.yb(50,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,y.b,y.a)),e.xb(51,1228800,null,2,g.a,[e.h,e.z,e.l],null,null),e.Tb(603979776,10,{_control:0}),e.Tb(603979776,11,{assistiveElements:1}),(l()(),e.yb(54,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0],[2,"mdc-checkbox--touch",null]],null,null,A.b,A.a)),e.Sb(5120,null,T.k,(function(l){return[l]}),[R.a]),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(57,4374528,[["fixed",4]],0,R.a,[D.a,e.z,e.h,e.l,L.a,[2,g.a]],null,null),e.Sb(2048,[[10,4]],w.a,null,[R.a]),(l()(),e.yb(59,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Fixed position (scrolls with page)"])),(l()(),e.yb(61,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,y.b,y.a)),e.xb(62,1228800,null,2,g.a,[e.h,e.z,e.l],null,null),e.Tb(603979776,12,{_control:0}),e.Tb(603979776,13,{assistiveElements:1}),(l()(),e.yb(65,0,null,0,4,"mdc-checkbox",[["class","mdc-checkbox"]],[[8,"id",0],[2,"mdc-checkbox--touch",null]],null,null,A.b,A.a)),e.Sb(5120,null,T.k,(function(l){return[l]}),[R.a]),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(68,4374528,[["hoistToBody",4]],0,R.a,[D.a,e.z,e.h,e.l,L.a,[2,g.a]],null,null),e.Sb(2048,[[12,4]],w.a,null,[R.a]),(l()(),e.yb(70,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Hoist to Body"])),(l()(),e.yb(72,0,null,null,14,"div",[["class","demo-layout--center"]],null,null,null,null,null)),(l()(),e.yb(73,0,[["demoAnchor",1]],null,13,"div",[["class","mdc-menu-surface--anchor"],["mdcMenuSurfaceAnchor",""]],null,null,null,null,null)),e.xb(74,16384,null,0,O.a,[e.l],null,null),(l()(),e.yb(75,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""],["raised",""]],[[8,"tabIndex",0],[2,"mdc-button--raised",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null],[2,"mdc-button--touch",null]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==e.Nb(l,77).onClick(u)&&a),"click"===n&&(a=0!=(e.Nb(l,81).open=!e.Nb(l,81).open)&&a),a}),j.b,j.a)),e.Sb(131584,null,L.a,L.a,[e.l,[2,N.MDCRippleFoundation]]),e.xb(77,245760,null,1,B.a,[e.l,L.a],{raised:[0,"raised"]},null),e.Tb(335544320,14,{_icon:0}),(l()(),e.Xb(-1,0,[" Show Menu Surface "])),(l()(),e.yb(80,0,null,null,6,"mdc-menu-surface",[["class","demo-menu-surface--one mdc-menu-surface"]],null,null,null,K,q)),e.xb(81,245760,[["demoSurface",4]],0,z.a,[e.h,D.a,[2,e.z],e.l],{anchorElement:[0,"anchorElement"],anchorCorner:[1,"anchorCorner"],quickOpen:[2,"quickOpen"],fixed:[3,"fixed"],anchorMargin:[4,"anchorMargin"],hoistToBody:[5,"hoistToBody"]},null),e.Qb(82,{top:0,bottom:1,left:2,right:3}),(l()(),e.yb(83,0,null,0,3,"mdc-image-list",[["class","menu-surface-image-list mdc-image-list"]],[[2,"mdc-image-list--masonry",null],[2,"mdc-image-list--with-text-protection",null]],null,null,X.d,X.a)),e.xb(84,49152,null,0,v.a,[e.l],null,null),(l()(),e.hb(16777216,null,0,1,null,el)),e.xb(86,278528,null,0,C.j,[e.P,e.M,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.yb(87,0,null,null,1,"example-viewer",[],null,null,null,P.b,P.a)),e.xb(88,114688,null,0,$.a,[e.h,G.a],{example:[0,"example"]},null)],(function(l,n){var u=n.component;l(n,12,0,u.corners),l(n,20,0,"Top margin","number"),l(n,25,0,"Bottom margin","number"),l(n,30,0,"Left margin","number"),l(n,35,0,"Right margin","number"),l(n,77,0,"");var a=e.Nb(n,73),t=e.Nb(n,9).value,b=e.Nb(n,46).checked,o=e.Nb(n,57).checked,i=l(n,82,0,e.Nb(n,20).value,e.Nb(n,25).value,e.Nb(n,30).value,e.Nb(n,35).value);l(n,81,0,a,t,b,o,i,e.Nb(n,68).checked),l(n,86,0,u.images),l(n,88,0,u.example1)}),(function(l,n){l(n,6,0,null),l(n,17,0,e.Nb(n,20).disabled,e.Nb(n,20).outlined,e.Nb(n,20).fullwidth,e.Nb(n,20).leadingIcon,e.Nb(n,20).trailingIcon,!e.Nb(n,20).label||e.Nb(n,20).label&&e.Nb(n,20).fullwidth,e.Nb(n,20).errorState),l(n,22,0,e.Nb(n,25).disabled,e.Nb(n,25).outlined,e.Nb(n,25).fullwidth,e.Nb(n,25).leadingIcon,e.Nb(n,25).trailingIcon,!e.Nb(n,25).label||e.Nb(n,25).label&&e.Nb(n,25).fullwidth,e.Nb(n,25).errorState),l(n,27,0,e.Nb(n,30).disabled,e.Nb(n,30).outlined,e.Nb(n,30).fullwidth,e.Nb(n,30).leadingIcon,e.Nb(n,30).trailingIcon,!e.Nb(n,30).label||e.Nb(n,30).label&&e.Nb(n,30).fullwidth,e.Nb(n,30).errorState),l(n,32,0,e.Nb(n,35).disabled,e.Nb(n,35).outlined,e.Nb(n,35).fullwidth,e.Nb(n,35).leadingIcon,e.Nb(n,35).trailingIcon,!e.Nb(n,35).label||e.Nb(n,35).label&&e.Nb(n,35).fullwidth,e.Nb(n,35).errorState),l(n,39,0,e.Nb(n,40).fluid,e.Nb(n,40).alignEnd),l(n,43,0,e.Nb(n,46).id,e.Nb(n,46).touch),l(n,49,0,e.Nb(n,46).checked),l(n,50,0,e.Nb(n,51).fluid,e.Nb(n,51).alignEnd),l(n,54,0,e.Nb(n,57).id,e.Nb(n,57).touch),l(n,61,0,e.Nb(n,62).fluid,e.Nb(n,62).alignEnd),l(n,65,0,e.Nb(n,68).id,e.Nb(n,68).touch),l(n,75,0,e.Nb(n,77).disabled?-1:0,e.Nb(n,77).raised,e.Nb(n,77).unelevated,e.Nb(n,77).outlined,e.Nb(n,77).touch),l(n,83,0,e.Nb(n,84).masonry,e.Nb(n,84).textProtection)}))}var tl=e.ub("ng-component",h,(function(l){return e.ac(0,[(l()(),e.yb(0,0,null,null,1,"ng-component",[],null,null,null,al,nl)),e.xb(1,49152,null,0,h,[],null,null)],null,null)}),{},{},[]),bl=u("D9PZ"),ol=u("5WpM"),il=u("d9jQ"),cl=u("IheW"),dl=u("oGt3"),rl=u("tgki"),sl=u("eMs3"),ml=u("6u/c"),fl=u("OpHd"),hl=u("ADci"),pl=u("pFQC"),yl=u("rhUx"),gl=u("mOWz"),xl=u("oTTF"),Ll=u("geka"),Nl=u("u5GS"),kl=u("kpju"),Sl=u("6vCO"),wl=u("2XL4"),vl=u("uDyN"),Xl=u("GZ7/"),Ml=u("c2eK"),_l=u("D8aA"),Tl=u("FT8k"),Cl=u("+/+1"),Fl=u("B7Vi"),Il=u("szxw"),Dl=u("1qdr"),El=u("7G34"),Al=u("EIAk"),Rl=u("Srdw"),Ol=u("jxgt"),jl=u("wfZB"),Bl=u("FHdM"),zl=u("Ji/y"),ql=u("gGLD"),Kl=u("8RQ7"),Pl=u("gYYb"),$l=u("C5iU"),Gl=u("vvyD"),Wl=u("iInd"),Yl=u("Lkda"),Hl=u("dJsq"),Jl=u("qMxp"),Vl=u("d2mR"),Zl=function l(){_classCallCheck(this,l)};u.d(n,"MenuSurfaceModuleNgFactory",(function(){return Ql}));var Ql=e.vb(a,[],(function(l){return e.Kb([e.Lb(512,e.j,e.Z,[[8,[t.a,b.a,o.a,i.a,c.a,H,Z,ll,tl]],[3,e.j],e.x]),e.Lb(4608,C.m,C.l,[e.u]),e.Lb(4608,T.u,T.u,[]),e.Lb(4608,bl.a,bl.a,[bl.f,bl.b,e.j,bl.e,bl.c,e.r,e.z,C.d,ol.b,[2,C.h]]),e.Lb(5120,bl.g,bl.h,[bl.a]),e.Lb(135680,il.c,il.c,[bl.a,e.r,[2,il.b],[3,il.c]]),e.Lb(4608,T.b,T.b,[]),e.Lb(4608,cl.i,cl.o,[C.d,e.B,cl.m]),e.Lb(4608,cl.p,cl.p,[cl.i,cl.n]),e.Lb(5120,cl.a,(function(l){return[l]}),[cl.p]),e.Lb(4608,cl.l,cl.l,[]),e.Lb(6144,cl.j,null,[cl.l]),e.Lb(4608,cl.h,cl.h,[cl.j]),e.Lb(6144,cl.b,null,[cl.h]),e.Lb(4608,cl.f,cl.k,[cl.b,e.r]),e.Lb(4608,cl.c,cl.c,[cl.f]),e.Lb(1073742336,C.c,C.c,[]),e.Lb(1073742336,T.t,T.t,[]),e.Lb(1073742336,T.h,T.h,[]),e.Lb(1073742336,dl.a,dl.a,[]),e.Lb(1073742336,rl.a,rl.a,[]),e.Lb(1073742336,sl.a,sl.a,[]),e.Lb(1073742336,ml.a,ml.a,[]),e.Lb(1073742336,fl.a,fl.a,[]),e.Lb(1073742336,hl.a,hl.a,[]),e.Lb(1073742336,pl.a,pl.a,[]),e.Lb(1073742336,ol.a,ol.a,[]),e.Lb(1073742336,yl.f,yl.f,[]),e.Lb(1073742336,D.b,D.b,[]),e.Lb(1073742336,gl.b,gl.b,[]),e.Lb(1073742336,bl.d,bl.d,[]),e.Lb(1073742336,xl.a,xl.a,[]),e.Lb(1073742336,Ll.a,Ll.a,[]),e.Lb(1073742336,Nl.a,Nl.a,[]),e.Lb(1073742336,kl.a,kl.a,[]),e.Lb(1073742336,Sl.a,Sl.a,[]),e.Lb(1073742336,wl.a,wl.a,[]),e.Lb(1073742336,vl.a,vl.a,[]),e.Lb(1073742336,Xl.a,Xl.a,[]),e.Lb(1073742336,Ml.a,Ml.a,[]),e.Lb(1073742336,_l.a,_l.a,[]),e.Lb(1073742336,Tl.a,Tl.a,[]),e.Lb(1073742336,Cl.a,Cl.a,[]),e.Lb(1073742336,Fl.a,Fl.a,[]),e.Lb(1073742336,Il.a,Il.a,[]),e.Lb(1073742336,Dl.a,Dl.a,[]),e.Lb(1073742336,El.a,El.a,[]),e.Lb(1073742336,Al.a,Al.a,[]),e.Lb(1073742336,Rl.a,Rl.a,[]),e.Lb(1073742336,Ol.a,Ol.a,[]),e.Lb(1073742336,jl.a,jl.a,[]),e.Lb(1073742336,Bl.a,Bl.a,[]),e.Lb(1073742336,zl.a,zl.a,[]),e.Lb(1073742336,ql.a,ql.a,[]),e.Lb(1073742336,Kl.a,Kl.a,[]),e.Lb(1073742336,Pl.a,Pl.a,[]),e.Lb(1073742336,$l.a,$l.a,[]),e.Lb(1073742336,Gl.a,Gl.a,[]),e.Lb(1073742336,T.q,T.q,[]),e.Lb(1073742336,Wl.p,Wl.p,[[2,Wl.u],[2,Wl.l]]),e.Lb(1073742336,Yl.b,Yl.b,[]),e.Lb(1073742336,Hl.d,Hl.d,[]),e.Lb(1073742336,cl.e,cl.e,[]),e.Lb(1073742336,cl.d,cl.d,[]),e.Lb(1073742336,Jl.a,Jl.a,[]),e.Lb(1073742336,Vl.a,Vl.a,[]),e.Lb(1073742336,Zl,Zl,[]),e.Lb(1073742336,a,a,[]),e.Lb(256,cl.m,"XSRF-TOKEN",[]),e.Lb(256,cl.n,"X-XSRF-TOKEN",[]),e.Lb(1024,Wl.j,(function(){return[[{path:"",component:s,children:[{path:"",redirectTo:"api"},{path:"api",component:m},{path:"sass",component:f},{path:"examples",component:h}]}]]}),[])])}))}}]);