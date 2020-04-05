(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{leug:function(t,n,s){"use strict";var e=s("LuDt");s.d(n,"a",(function(){return e.a}))},q7s6:function(t,n,s){"use strict";s.r(n);var e=s("d2mR"),o=s("tyNb"),a=s("leug"),c=s("fXoL"),i=s("LuDt"),b=s("5l+6"),r=s("OtPg"),l=s("aXvW"),d=s("9UYg"),u=s("dkiD");const m=[{path:"",component:(()=>{class t{ngOnInit(){this._componentViewer.template={title:"Snackbars",description:"Snackbars provide brief messages about app processes at the bottom of the screen.",references:[{name:"Material Design guidelines: Snackbars",url:"https://material.io/design/components/snackbars.html"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-snackbar/README.md"}],code:"import {MdcSnackbarModule} from '@angular-mdc/web';",sass:"@use '@material/snackbar/mdc-snackbar';\n@use '@material/snackbar';"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["ng-component"]],viewQuery:function(t,n){var s;1&t&&c.tc(a.a,!0),2&t&&c.nc(s=c.ac())&&(n._componentViewer=s.first)},decls:1,vars:0,template:function(t,n){1&t&&c.Mb(0,"component-viewer")},directives:[i.a],encapsulation:2}),t})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["ng-component"]],decls:103,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],["mdcSubtitle2",""],["highlight","/** Event that is emitted when a snackbar is dismissed. */\nexport interface MdcSnackbarDismissReason {\n  /** Whether the snackbar was dismissed using the action button. */\n  action: boolean;\n\n  /** Whether the snackbar was dismissed using the dismiss icon button. */\n  dismiss: boolean;\n}"]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"h2",1),c.wc(2,"Service"),c.Qb(),c.Rb(3,"h3",1),c.wc(4,"MdcSnackbar"),c.Qb(),c.wc(5," Service to open MDC snackbars. "),c.Rb(6,"h4",2),c.wc(7,"Properties"),c.Qb(),c.Rb(8,"table"),c.Rb(9,"thead"),c.Rb(10,"tr"),c.Rb(11,"th"),c.wc(12,"Name"),c.Qb(),c.Rb(13,"th"),c.wc(14,"Description"),c.Qb(),c.Qb(),c.Qb(),c.Rb(15,"tbody"),c.Rb(16,"tr"),c.Rb(17,"td"),c.wc(18,"afterDismiss: Observable "),c.Rb(19,"pre"),c.wc(20,"MdcSnackbarDismissReason"),c.Qb(),c.Qb(),c.Rb(21,"td"),c.wc(22,"Gets an observable that is notified when the snackbar is finished closing. "),c.Rb(23,"pre"),c.Mb(24,"code",3),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(25,"h4",2),c.wc(26,"Methods"),c.Qb(),c.Rb(27,"table"),c.Rb(28,"tbody"),c.Rb(29,"tr"),c.Rb(30,"td"),c.wc(31,"open(message: string)"),c.Qb(),c.Rb(32,"td"),c.wc(33,"Open snackbar with message."),c.Qb(),c.Qb(),c.Rb(34,"tr"),c.Rb(35,"td"),c.wc(36,"open(message: string, action: string)"),c.Qb(),c.Rb(37,"td"),c.wc(38,"Opens snackbar message and action."),c.Qb(),c.Qb(),c.Rb(39,"tr"),c.Rb(40,"td"),c.wc(41,"open(message: string, action: string, config?: MdcSnackbarConfig)"),c.Qb(),c.Rb(42,"td"),c.wc(43,"Opens the snackbar with optional configuration."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(44,"h4",2),c.wc(45,"MdcSnackbarConfig"),c.Qb(),c.Rb(46,"table"),c.Rb(47,"tbody"),c.Rb(48,"tr"),c.Rb(49,"td"),c.wc(50,"timeoutMs?: number"),c.Qb(),c.Rb(51,"td"),c.wc(52,"Value must be between 4000 and 10000 or an error will be thrown. Defaults to 5000 (5 seconds)."),c.Qb(),c.Qb(),c.Rb(53,"tr"),c.Rb(54,"td"),c.wc(55,"stacked?: boolean"),c.Qb(),c.Rb(56,"td"),c.wc(57,"Positions the action button/icon below the label instead of alongside it. Defaults to false."),c.Qb(),c.Qb(),c.Rb(58,"tr"),c.Rb(59,"td"),c.wc(60,"leading?: boolean"),c.Qb(),c.Rb(61,"td"),c.wc(62,"Positions the snackbar on the leading edge of the screen."),c.Qb(),c.Qb(),c.Rb(63,"tr"),c.Rb(64,"td"),c.wc(65,"trailing?: boolean"),c.Qb(),c.Rb(66,"td"),c.wc(67,"Positions the snackbar on the trailing (right) edge of the screen."),c.Qb(),c.Qb(),c.Rb(68,"tr"),c.Rb(69,"td"),c.wc(70,"direction?: string"),c.Qb(),c.Rb(71,"td"),c.wc(72,"The layout direction of the snackbar content. Default is 'ltr'."),c.Qb(),c.Qb(),c.Rb(73,"tr"),c.Rb(74,"td"),c.wc(75,"dismiss?: boolean"),c.Qb(),c.Rb(76,"td"),c.wc(77,'Show dismiss ("X") icon. Default is false.'),c.Qb(),c.Qb(),c.Rb(78,"tr"),c.Rb(79,"td"),c.wc(80,"closeOnEscape?: boolean"),c.Qb(),c.Rb(81,"td"),c.wc(82,"Whether the snackbar closes when it is focused and the user presses the ESC key. Default is true."),c.Qb(),c.Qb(),c.Rb(83,"tr"),c.Rb(84,"td"),c.wc(85,"classes?: string | string[]"),c.Qb(),c.Rb(86,"td"),c.wc(87,"Add a CSS class or an array of classes."),c.Qb(),c.Qb(),c.Rb(88,"tr"),c.Rb(89,"td"),c.wc(90,"actionClasses?: string | string[]"),c.Qb(),c.Rb(91,"td"),c.wc(92,"Add a CSS class or an array of classes to the action button."),c.Qb(),c.Qb(),c.Rb(93,"tr"),c.Rb(94,"td"),c.wc(95,"dismissClasses?: string | string[]"),c.Qb(),c.Rb(96,"td"),c.wc(97,"Add a CSS class or an array of classes to the action icon."),c.Qb(),c.Qb(),c.Rb(98,"tr"),c.Rb(99,"td"),c.wc(100,"politeness?: AriaLivePoliteness"),c.Qb(),c.Rb(101,"td"),c.wc(102,"The politeness level for the screen reader announcement. Default is 'polite'"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb())},directives:[b.i,b.l,r.b],encapsulation:2}),t})()},{path:"sass",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["ng-component"]],decls:83,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"h4",1),c.wc(2,"Sass Mixins"),c.Qb(),c.Rb(3,"table"),c.Rb(4,"thead"),c.Rb(5,"tr"),c.Rb(6,"th"),c.wc(7,"Mixin"),c.Qb(),c.Rb(8,"th"),c.wc(9,"Description"),c.Qb(),c.Qb(),c.Qb(),c.Rb(10,"tbody"),c.Rb(11,"tr"),c.Rb(12,"td"),c.Rb(13,"code"),c.wc(14,"fill-color($color)"),c.Qb(),c.Qb(),c.Rb(15,"td"),c.wc(16,"Sets the fill color of the snackbar."),c.Qb(),c.Qb(),c.Rb(17,"tr"),c.Rb(18,"td"),c.Rb(19,"code"),c.wc(20,"label-ink-color($color)"),c.Qb(),c.Qb(),c.Rb(21,"td"),c.wc(22,"Sets the color of the snackbar's label text."),c.Qb(),c.Qb(),c.Rb(23,"tr"),c.Rb(24,"td"),c.Rb(25,"code"),c.wc(26,"shape-radius($radius, $rtl-reflexive)"),c.Qb(),c.Qb(),c.Rb(27,"td"),c.wc(28,"Sets the rounded shape to snackbar surface with given radius size. Set "),c.Rb(29,"code"),c.wc(30,"$rtl-reflexive"),c.Qb(),c.wc(31," to true to flip radius values in RTL context, defaults to false."),c.Qb(),c.Qb(),c.Rb(32,"tr"),c.Rb(33,"td"),c.Rb(34,"code"),c.wc(35,"min-width($min-width, $mobile-breakpoint)"),c.Qb(),c.Qb(),c.Rb(36,"td"),c.wc(37,"Sets the "),c.Rb(38,"code"),c.wc(39,"min-width"),c.Qb(),c.wc(40," of the surface on tablet/desktop devices. On mobile, the width is automatically set to 100%."),c.Qb(),c.Qb(),c.Rb(41,"tr"),c.Rb(42,"td"),c.Rb(43,"code"),c.wc(44,"max-width($max-width)"),c.Qb(),c.Qb(),c.Rb(45,"td"),c.wc(46,"Sets the "),c.Rb(47,"code"),c.wc(48,"max-width"),c.Qb(),c.wc(49," of the snackbar."),c.Qb(),c.Qb(),c.Rb(50,"tr"),c.Rb(51,"td"),c.Rb(52,"code"),c.wc(53,"elevation($z-index)"),c.Qb(),c.Qb(),c.Rb(54,"td"),c.wc(55,"Sets the elevation of the snackbar."),c.Qb(),c.Qb(),c.Rb(56,"tr"),c.Rb(57,"td"),c.Rb(58,"code"),c.wc(59,"viewport-margin($margin)"),c.Qb(),c.Qb(),c.Rb(60,"td"),c.wc(61,"Sets the distance between the snackbar and the viewport."),c.Qb(),c.Qb(),c.Rb(62,"tr"),c.Rb(63,"td"),c.Rb(64,"code"),c.wc(65,"z-index($z-index)"),c.Qb(),c.Qb(),c.Rb(66,"td"),c.wc(67,"Sets the "),c.Rb(68,"code"),c.wc(69,"z-index"),c.Qb(),c.wc(70," of the snackbar."),c.Qb(),c.Qb(),c.Rb(71,"tr"),c.Rb(72,"td"),c.Rb(73,"code"),c.wc(74,"position-leading()"),c.Qb(),c.Qb(),c.Rb(75,"td"),c.wc(76,"Positions the snackbar on the leading edge of the screen (left in LTR, right in RTL) instead of centered."),c.Qb(),c.Qb(),c.Rb(77,"tr"),c.Rb(78,"td"),c.Rb(79,"code"),c.wc(80,"layout-stacked()"),c.Qb(),c.Qb(),c.Rb(81,"td"),c.wc(82,"Positions the action button/icon below the label instead of alongside it."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb())},directives:[b.l],encapsulation:2}),t})()},{path:"examples",component:(()=>{class t{constructor(t){this.snackbar=t,this.exampleHeader="import { MdcSnackbar } from '@angular-mdc/web';\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(private snackbar: MdcSnackbar) { }\n",this.exampleCustomTS="import { MdcSnackbar } from '@angular-mdc/web';\n\ninterface CustomClasses {\n  classes: string | string[];\n  actionClasses: string | string[];\n  dismissClasses: string | string[];\n}\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(private snackbar: MdcSnackbar) { }\n\n  openCustom(customClasses: CustomClasses) {\n    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {\n      dismiss: true,\n      classes: customClasses.classes,\n      actionClasses: customClasses.actionClasses,\n      dismissClasses: customClasses.dismissClasses\n    });\n  }\n}",this.exampleSnackbar={html:'<button mdc-button raised (click)="simple()">Simple</button>\n\n<button mdc-button raised (click)="withAction()">With Action</button>\n\n<button mdc-button raised (click)="dismissIcon()">Dismiss Icon</button>\n\n<button mdc-button raised (click)="dismissIconOnly()">Icon Only</button>\n\n<button mdc-button raised (click)="stacked()">Stacked</button>\n\n<button mdc-button raised (click)="maxTimeout()">Max Timeout</button>',ts:`${this.exampleHeader}\n  simple() {\n    const snackbarRef = this.snackbar.open('Marked as favorite.');\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  withAction() {\n    const snackbarRef = this.snackbar.open(\`Can't send photo. Retry in 5 seconds.\`, 'Retry');\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  dismissIcon() {\n    const snackbarRef = this.snackbar.open(\`Can't send photo. Retry in 5 seconds.\`, 'Retry', {\n      dismiss: true\n    });\n\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  dismissIconOnly() {\n    this.snackbar.open(\`Can't send photo. Retry in 5 seconds.\`, undefined, {\n      dismiss: true\n    });\n  }\n\n  stacked() {\n    const snackbarRef = this.snackbar.open(\n      \`This item already has the label "travel". You can add a new label.\`,\n      'Add a new label', {\n        stacked: true,\n        dismiss: true\n      });\n\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n\n  maxTimeout() {\n    const snackbarRef = this.snackbar.open(\`Can't send photo. Retry in 10 seconds.\`, 'Retry', {\n      timeoutMs: 10000\n    });\n\n    snackbarRef.afterDismiss().subscribe(reason => {\n      console.log(reason);\n    });\n  }\n}`},this.exampleAlign={html:'<button mdc-button raised (click)="openLeading()">Leading</button>\n\n<button mdc-button raised (click)="openTrailing()">Trailing</button>\n\n<button mdc-button raised (click)="openRtl()">RTL</button>',ts:`${this.exampleHeader}\n  openLeading(): void {\n    this.snackbar.open(\`Can't send photo. Retry in 5 seconds.\`, 'Retry', {\n      leading: true\n    });\n  }\n\n  openTrailing(): void {\n    this.snackbar.open(\`Can't send photo. Retry in 5 seconds.\`, 'Retry', {\n      trailing: true\n    });\n  }\n\n  openRtl(): void {\n    this.snackbar.open('My content is right to left', 'Ok', {\n      direction: 'rtl'\n    });\n  }\n}`},this.exampleCustom={html:"<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--shape-radius'})\">Shaped</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--elevation'})\">Elevation</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--viewport-margin'})\">Viewport Margin</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--max-width'})\">Max-Width</button>\n\n<button mdc-button raised (click)=\"openCustom({classes: 'custom-snackbar--min-width'})\">Min-Width</button>",ts:"import { MdcSnackbar } from '@angular-mdc/web';\n\ninterface CustomClasses {\n  classes: string | string[];\n  actionClasses: string | string[];\n  dismissClasses: string | string[];\n}\n\n@Component({ templateUrl: './examples.html' })\nexport class Examples {\n  constructor(private snackbar: MdcSnackbar) { }\n\n  openCustom(customClasses: CustomClasses) {\n    this.snackbar.open(`Can't send photo. Retry in 5 seconds.`, 'Retry', {\n      dismiss: true,\n      classes: customClasses.classes\n    });\n  }\n}",sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_snackbar.scss"},this.exampleTheme={html:"<button mdc-button raised\n  (click)=\"openCustom({classes: 'custom-snackbar--fill-color'})\">Fill Color</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({classes: 'custom-snackbar--label-ink-color'})\">Ink Color</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({classes: ['custom-snackbar--fill-color', 'custom-snackbar--label-ink-color']})\">Fill/Ink Color</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({actionClasses: 'mdc-button--outlined'})\">Action Outlined</button>\n\n<button mdc-button raised\n  (click)=\"openCustom({dismissClasses: 'demo-icon-button-custom'})\">Custom Dismiss Icon</button>",ts:this.exampleCustomTS,sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_snackbar.scss"}}simple(){this.snackbar.open("Marked as favorite.").afterDismiss().subscribe(t=>{console.log(`The snack-bar was dismissed: ${t}`)})}withAction(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry").afterDismiss().subscribe(t=>{console.log(`The snack-bar was dismissed: ${t}`)})}dismissIcon(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{dismiss:!0}).afterDismiss().subscribe(t=>{console.log(`The snack-bar was dismissed: ${t}`)})}dismissIconOnly(){this.snackbar.open("Can't send photo. Retry in 5 seconds.",void 0,{dismiss:!0})}stacked(){this.snackbar.open('This item already has the label "travel". You can add a new label.',"Add a new label",{stacked:!0,dismiss:!0}).afterDismiss().subscribe(t=>{console.log(`The snack-bar was dismissed: ${t}`)})}maxTimeout(){this.snackbar.open("Can't send photo. Retry in 10 seconds.","Retry",{timeoutMs:1e4}).afterDismiss().subscribe(t=>{console.log(`The snack-bar was dismissed: ${t}`)})}openLeading(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{leading:!0})}openTrailing(){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{trailing:!0})}openRtl(){this.snackbar.open("My content is right to left","Ok",{direction:"rtl"})}openCustom(t){this.snackbar.open("Can't send photo. Retry in 5 seconds.","Retry",{dismiss:!0,classes:t.classes,actionClasses:t.actionClasses,dismissClasses:t.dismissClasses})}}return t.\u0275fac=function(n){return new(n||t)(c.Lb(l.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["ng-component"]],decls:73,vars:4,consts:[[1,"demo-content"],[1,"demo-layout__row"],[1,"demo-container"],["mdc-button","","raised","",3,"click"],[3,"example"],[1,"demo-content__headline"]],template:function(t,n){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"button",3),c.Zb("click",(function(){return n.simple()})),c.wc(4,"Simple"),c.Qb(),c.Qb(),c.Rb(5,"div",2),c.Rb(6,"button",3),c.Zb("click",(function(){return n.withAction()})),c.wc(7,"With Action"),c.Qb(),c.Qb(),c.Rb(8,"div",2),c.Rb(9,"button",3),c.Zb("click",(function(){return n.dismissIcon()})),c.wc(10,"Dismiss Icon"),c.Qb(),c.Qb(),c.Rb(11,"div",2),c.Rb(12,"button",3),c.Zb("click",(function(){return n.dismissIconOnly()})),c.wc(13,"Icon Only"),c.Qb(),c.Qb(),c.Rb(14,"div",2),c.Rb(15,"button",3),c.Zb("click",(function(){return n.stacked()})),c.wc(16,"Stacked"),c.Qb(),c.Qb(),c.Rb(17,"div",2),c.Rb(18,"button",3),c.Zb("click",(function(){return n.maxTimeout()})),c.wc(19,"Max Timeout"),c.Qb(),c.Qb(),c.Qb(),c.Mb(20,"example-viewer",4),c.Qb(),c.Rb(21,"div",0),c.Rb(22,"div",1),c.Rb(23,"div",2),c.Rb(24,"button",3),c.Zb("click",(function(){return n.openLeading()})),c.wc(25,"Leading"),c.Qb(),c.Qb(),c.Rb(26,"div",2),c.Rb(27,"button",3),c.Zb("click",(function(){return n.openTrailing()})),c.wc(28,"Trailing"),c.Qb(),c.Qb(),c.Rb(29,"div",2),c.Rb(30,"button",3),c.Zb("click",(function(){return n.openRtl()})),c.wc(31,"RTL"),c.Qb(),c.Qb(),c.Qb(),c.Mb(32,"example-viewer",4),c.Qb(),c.Rb(33,"div",0),c.Rb(34,"h3",5),c.wc(35,"Custom"),c.Qb(),c.Rb(36,"div",1),c.Rb(37,"div",2),c.Rb(38,"button",3),c.Zb("click",(function(){return n.openCustom({classes:"custom-snackbar--shape-radius"})})),c.wc(39,"Shaped"),c.Qb(),c.Qb(),c.Rb(40,"div",2),c.Rb(41,"button",3),c.Zb("click",(function(){return n.openCustom({classes:"custom-snackbar--elevation"})})),c.wc(42,"Elevation"),c.Qb(),c.Qb(),c.Rb(43,"div",2),c.Rb(44,"button",3),c.Zb("click",(function(){return n.openCustom({classes:"custom-snackbar--viewport-margin"})})),c.wc(45,"Viewport Margin"),c.Qb(),c.Qb(),c.Rb(46,"div",2),c.Rb(47,"button",3),c.Zb("click",(function(){return n.openCustom({classes:"custom-snackbar--max-width"})})),c.wc(48,"Max-Width"),c.Qb(),c.Qb(),c.Rb(49,"div",2),c.Rb(50,"button",3),c.Zb("click",(function(){return n.openCustom({classes:"custom-snackbar--min-width"})})),c.wc(51,"Min-Width"),c.Qb(),c.Qb(),c.Qb(),c.Mb(52,"example-viewer",4),c.Qb(),c.Rb(53,"div",0),c.Rb(54,"h3",5),c.wc(55,"Theme"),c.Qb(),c.Rb(56,"div",1),c.Rb(57,"div",2),c.Rb(58,"button",3),c.Zb("click",(function(){return n.openCustom({classes:"custom-snackbar--fill-color"})})),c.wc(59,"Fill Color"),c.Qb(),c.Qb(),c.Rb(60,"div",2),c.Rb(61,"button",3),c.Zb("click",(function(){return n.openCustom({classes:"custom-snackbar--label-ink-color"})})),c.wc(62,"Ink Color"),c.Qb(),c.Qb(),c.Rb(63,"div",2),c.Rb(64,"button",3),c.Zb("click",(function(){return n.openCustom({classes:["custom-snackbar--fill-color","custom-snackbar--label-ink-color"]})})),c.wc(65,"Fill/Ink Color"),c.Qb(),c.Qb(),c.Rb(66,"div",2),c.Rb(67,"button",3),c.Zb("click",(function(){return n.openCustom({actionClasses:"mdc-button--outlined"})})),c.wc(68,"Action Outlined"),c.Qb(),c.Qb(),c.Rb(69,"div",2),c.Rb(70,"button",3),c.Zb("click",(function(){return n.openCustom({dismissClasses:"demo-icon-button-custom"})})),c.wc(71,"Icon Color"),c.Qb(),c.Qb(),c.Qb(),c.Mb(72,"example-viewer",4),c.Qb()),2&t&&(c.Bb(20),c.ic("example",n.exampleSnackbar),c.Bb(12),c.ic("example",n.exampleAlign),c.Bb(20),c.ic("example",n.exampleCustom),c.Bb(20),c.ic("example",n.exampleTheme))},directives:[d.a,u.a],encapsulation:2}),t})()}]}];let p=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[o.e.forChild(m)],o.e]}),t})();s.d(n,"SnackbarModule",(function(){return R}));let R=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(n){return new(n||t)},imports:[[e.a,p]]}),t})()}}]);