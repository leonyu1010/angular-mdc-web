function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var b=t[o];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{jea9:function(e,t,o){"use strict";o.r(t);var b=o("d2mR"),a=o("tyNb"),c=o("leug"),i=o("3Pt+"),n=o("fXoL"),r=o("LuDt"),d=o("5l+6"),s=o("CBIf"),l=o("dkiD"),m=o("4G1d"),u=o("9UYg"),R=o("kDKR"),p=o("ofXK");function f(e,t){if(1&e&&(n.Rb(0,"mdc-form-field"),n.Mb(1,"mdc-radio",17),n.Rb(2,"label"),n.xc(3),n.Qb(),n.Qb()),2&e){var o=t.$implicit;n.Bb(1),n.ic("value",o),n.Bb(2),n.yc(o)}}function Q(e,t){if(1&e&&(n.Rb(0,"mdc-form-field"),n.Mb(1,"mdc-radio",17),n.Rb(2,"label"),n.xc(3),n.Qb(),n.Qb()),2&e){var o=t.$implicit;n.Bb(1),n.ic("value",o),n.Bb(2),n.yc(o)}}var h,x,v,g,w,y=[{path:"",component:(g=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this._componentViewer.template={title:"Radio Buttons",description:"Radio buttons allow the user to select one option from a set while seeing all available options.",references:[{name:"Material Design guidelines: Radio Buttons",url:"https://material.io/design/components/selection-controls.html#radio-buttons"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-radio/README.md"}],code:"import {MdcRadioModule} from '@angular-mdc/web';",sass:"@use '@material/radio/mdc-radio';\n@use '@material/radio';\n@use '@material/form-field/mdc-form-field';"}}}]),e}(),g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=n.Fb({type:g,selectors:[["ng-component"]],viewQuery:function(e,t){var o;1&e&&n.tc(c.a,!0),2&e&&n.nc(o=n.ac())&&(t._componentViewer=o.first)},decls:1,vars:0,template:function(e,t){1&e&&n.Mb(0,"component-viewer")},directives:[r.a],encapsulation:2}),g),children:[{path:"",redirectTo:"api"},{path:"api",component:(v=function e(){_classCallCheck(this,e)},v.\u0275fac=function(e){return new(e||v)},v.\u0275cmp=n.Fb({type:v,selectors:[["ng-component"]],decls:137,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(n.Rb(0,"div",0),n.Rb(1,"h3",1),n.xc(2,"MdcRadio"),n.Qb(),n.Rb(3,"p"),n.xc(4," Selector: "),n.Rb(5,"span",2),n.xc(6,"mdc-radio"),n.Qb(),n.Qb(),n.xc(7," Exported as: "),n.Rb(8,"span",2),n.xc(9,"mdcRadio"),n.Qb(),n.Rb(10,"h4",3),n.xc(11,"Properties"),n.Qb(),n.Rb(12,"table"),n.Rb(13,"thead"),n.Rb(14,"tr"),n.Rb(15,"th"),n.xc(16,"Name"),n.Qb(),n.Rb(17,"th"),n.xc(18,"Description"),n.Qb(),n.Qb(),n.Qb(),n.Rb(19,"tbody"),n.Rb(20,"tr"),n.Rb(21,"td"),n.xc(22,"id: string"),n.Qb(),n.Rb(23,"td"),n.xc(24,"Unique Id of the radio button (auto generated if not supplied)."),n.Qb(),n.Qb(),n.Rb(25,"tr"),n.Rb(26,"td"),n.xc(27,"name: string"),n.Qb(),n.Rb(28,"td"),n.xc(29,"Name of the radio button."),n.Qb(),n.Qb(),n.Rb(30,"tr"),n.Rb(31,"td"),n.xc(32,"value: any"),n.Qb(),n.Rb(33,"td"),n.xc(34,"Value of the radio button."),n.Qb(),n.Qb(),n.Rb(35,"tr"),n.Rb(36,"td"),n.xc(37,"ariaLabel: string"),n.Qb(),n.Rb(38,"td"),n.xc(39,"Used to set the 'aria-label' attribute on the underlying input element."),n.Qb(),n.Qb(),n.Rb(40,"tr"),n.Rb(41,"td"),n.xc(42,"ariaLabelledby: string"),n.Qb(),n.Rb(43,"td"),n.xc(44,"The 'aria-labelledby' attribute takes precedence as the element's text alternative."),n.Qb(),n.Qb(),n.Rb(45,"tr"),n.Rb(46,"td"),n.xc(47,"checked: boolean"),n.Qb(),n.Rb(48,"td"),n.xc(49,"Use to verify the checked value."),n.Qb(),n.Qb(),n.Rb(50,"tr"),n.Rb(51,"td"),n.xc(52,"disabled: boolean"),n.Qb(),n.Rb(53,"td"),n.xc(54,"Disables the component."),n.Qb(),n.Qb(),n.Rb(55,"tr"),n.Rb(56,"td"),n.xc(57,"required: boolean"),n.Qb(),n.Rb(58,"td"),n.xc(59,"Whether the radio button is required."),n.Qb(),n.Qb(),n.Rb(60,"tr"),n.Rb(61,"td"),n.xc(62,"touch: boolean"),n.Qb(),n.Rb(63,"td"),n.xc(64,"Set the component touch target to 48 x 48 px."),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(65,"h4",3),n.xc(66,"Methods"),n.Qb(),n.Rb(67,"table"),n.Rb(68,"tbody"),n.Rb(69,"tr"),n.Rb(70,"td"),n.xc(71,"focus()"),n.Qb(),n.Rb(72,"td"),n.xc(73,"Set focus to the radio button."),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(74,"h4",3),n.xc(75,"Events"),n.Qb(),n.Rb(76,"table"),n.Rb(77,"tbody"),n.Rb(78,"tr"),n.Rb(79,"td"),n.xc(80,"change(source: MdcRadio, value: any)"),n.Qb(),n.Rb(81,"td"),n.xc(82,"Event emitted when the group value changes. Change events are only emitted when the value changes due to user interaction with a radio button."),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(83,"div",0),n.Rb(84,"h3",1),n.xc(85,"MdcRadioGroup"),n.Qb(),n.Rb(86,"p"),n.xc(87," Selector: "),n.Rb(88,"span",2),n.xc(89,"mdc-radio-group"),n.Qb(),n.Qb(),n.xc(90," Exported as: "),n.Rb(91,"span",2),n.xc(92,"mdcRadioGroup"),n.Qb(),n.Rb(93,"h4",3),n.xc(94,"Properties"),n.Qb(),n.Rb(95,"table"),n.Rb(96,"thead"),n.Rb(97,"tr"),n.Rb(98,"th"),n.xc(99,"Name"),n.Qb(),n.Rb(100,"th"),n.xc(101,"Description"),n.Qb(),n.Qb(),n.Qb(),n.Rb(102,"tbody"),n.Rb(103,"tr"),n.Rb(104,"td"),n.xc(105,"name: string"),n.Qb(),n.Rb(106,"td"),n.xc(107,"Name of the radio button group."),n.Qb(),n.Qb(),n.Rb(108,"tr"),n.Rb(109,"td"),n.xc(110,"required: boolean"),n.Qb(),n.Rb(111,"td"),n.xc(112,"Whether the radio group is required."),n.Qb(),n.Qb(),n.Rb(113,"tr"),n.Rb(114,"td"),n.xc(115,"disabled: boolean"),n.Qb(),n.Rb(116,"td"),n.xc(117,"Whether the radio group is disabled."),n.Qb(),n.Qb(),n.Rb(118,"tr"),n.Rb(119,"td"),n.xc(120,"selected: MdcRadio | null"),n.Qb(),n.Rb(121,"td"),n.xc(122,"The currently selected radio button. If set to a new radio button, the radio group value will be updated to match the new selected button."),n.Qb(),n.Qb(),n.Rb(123,"tr"),n.Rb(124,"td"),n.xc(125,"value: any"),n.Qb(),n.Rb(126,"td"),n.xc(127,"Value for the radio-group. Should equal the value of the selected radio button if there is a corresponding radio button with a matching value. If there is not such a corresponding radio button, this value persists to be applied in case a new radio button is added with a matching value. "),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(128,"h4",3),n.xc(129,"Events"),n.Qb(),n.Rb(130,"table"),n.Rb(131,"tbody"),n.Rb(132,"tr"),n.Rb(133,"td"),n.xc(134,"change(source: MdcRadio, value: any)"),n.Qb(),n.Rb(135,"td"),n.xc(136,"Event emitted when the group value changes. Change events are only emitted when the value changes due to user interaction with a radio button."),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb())},directives:[d.i,d.l],encapsulation:2}),v)},{path:"sass",component:(x=function e(){_classCallCheck(this,e)},x.\u0275fac=function(e){return new(e||x)},x.\u0275cmp=n.Fb({type:x,selectors:[["ng-component"]],decls:89,vars:0,consts:[[1,"docs-api"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(n.Rb(0,"div",0),n.Rb(1,"h4",1),n.xc(2,"Sass Mixins"),n.Qb(),n.Rb(3,"table"),n.Rb(4,"thead"),n.Rb(5,"tr"),n.Rb(6,"th"),n.xc(7,"Mixin"),n.Qb(),n.Rb(8,"th"),n.xc(9,"Description"),n.Qb(),n.Qb(),n.Qb(),n.Rb(10,"tbody"),n.Rb(11,"tr"),n.Rb(12,"td"),n.Rb(13,"code"),n.xc(14,"unchecked-stroke-color($color)"),n.Qb(),n.Qb(),n.Rb(15,"td"),n.xc(16,"Sets the stroke color of an unchecked, enabled radio button"),n.Qb(),n.Qb(),n.Rb(17,"tr"),n.Rb(18,"td"),n.Rb(19,"code"),n.xc(20,"checked-stroke-color($color)"),n.Qb(),n.Qb(),n.Rb(21,"td"),n.xc(22,"Sets the stroke color of a checked, enabled radio button"),n.Qb(),n.Qb(),n.Rb(23,"tr"),n.Rb(24,"td"),n.Rb(25,"code"),n.xc(26,"ink-color($color)"),n.Qb(),n.Qb(),n.Rb(27,"td"),n.xc(28,"Sets the ink color of an enabled radio button"),n.Qb(),n.Qb(),n.Rb(29,"tr"),n.Rb(30,"td"),n.Rb(31,"code"),n.xc(32,"disabled-unchecked-stroke-color($color)"),n.Qb(),n.Qb(),n.Rb(33,"td"),n.xc(34,"Sets the stroke color of an unchecked, disabled radio button"),n.Qb(),n.Qb(),n.Rb(35,"tr"),n.Rb(36,"td"),n.Rb(37,"code"),n.xc(38,"disabled-checked-stroke-color($color)"),n.Qb(),n.Qb(),n.Rb(39,"td"),n.xc(40,"Sets the stroke color of a checked, disabled radio button"),n.Qb(),n.Qb(),n.Rb(41,"tr"),n.Rb(42,"td"),n.Rb(43,"code"),n.xc(44,"disabled-ink-color($color)"),n.Qb(),n.Qb(),n.Rb(45,"td"),n.xc(46,"Sets the ink color of a disabled radio button"),n.Qb(),n.Qb(),n.Rb(47,"tr"),n.Rb(48,"td"),n.Rb(49,"code"),n.xc(50,"focus-indicator-color($color)"),n.Qb(),n.Qb(),n.Rb(51,"td"),n.xc(52,"Sets the color of the focus indicator"),n.Qb(),n.Qb(),n.Rb(53,"tr"),n.Rb(54,"td"),n.Rb(55,"code"),n.xc(56,"touch-target($size, $ripple-size)"),n.Qb(),n.Qb(),n.Rb(57,"td"),n.xc(58,"Sets radio touch target size which can be more than the ripple size. Param "),n.Rb(59,"code"),n.xc(60,"$ripple-size"),n.Qb(),n.xc(61," is required for custom ripple size, defaults to "),n.Rb(62,"code"),n.xc(63,"$ripple-size"),n.Qb(),n.xc(64,"."),n.Qb(),n.Qb(),n.Rb(65,"tr"),n.Rb(66,"td"),n.Rb(67,"code"),n.xc(68,"ripple-size($size)"),n.Qb(),n.Qb(),n.Rb(69,"td"),n.xc(70,"Sets custom ripple size of radio."),n.Qb(),n.Qb(),n.Rb(71,"tr"),n.Rb(72,"td"),n.Rb(73,"code"),n.xc(74,"density($density-scale)"),n.Qb(),n.Qb(),n.Rb(75,"td"),n.xc(76,"Sets density scale for radio. Supported density scale values are "),n.Rb(77,"code"),n.xc(78,"-3"),n.Qb(),n.xc(79,", "),n.Rb(80,"code"),n.xc(81,"-2"),n.Qb(),n.xc(82,", "),n.Rb(83,"code"),n.xc(84,"-1"),n.Qb(),n.xc(85," and "),n.Rb(86,"code"),n.xc(87,"0"),n.Qb(),n.xc(88," (default)."),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb())},directives:[d.l],encapsulation:2}),x)},{path:"examples",component:(h=function(){function e(){_classCallCheck(this,e),this.seasons=["Winter","Spring","Summer","Autumn"],this.form=new i.e({season:new i.b("Spring")}),this.example1={html:"<mdc-radio></mdc-radio>"},this.exampleRadioSet={html:'<mdc-form-field>\n  <mdc-radio name="demo-radio-set"></mdc-radio>\n  <label>Radio 1</label>\n</mdc-form-field>\n<mdc-form-field>\n  <mdc-radio name="demo-radio-set"></mdc-radio>\n  <label>Radio 2</label>\n</mdc-form-field>'},this.example2={html:'<mdc-form-field [alignEnd]="false">\n  <mdc-radio [disabled]="false" class="demo-radio--custom"></mdc-radio>\n  <label>Radio Button</label>\n</mdc-form-field>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_radio.scss"},this.exampleRadioGroup={html:'<mdc-radio-group [(ngModel)]="favoriteSeason">\n  <mdc-form-field *ngFor="let season of seasons">\n    <mdc-radio [value]="season"></mdc-radio>\n    <label>{{season}}</label>\n  </mdc-form-field>\n</mdc-radio-group>\n<p>Your favorite season is: {{favoriteSeason}}</p>',ts:"favoriteSeason: string;\nseasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];"},this.exampleReactive={html:'<form [formGroup]="form">\n  <mdc-radio-group formControlName="season">\n    <mdc-form-field *ngFor="let season of seasons">\n      <mdc-radio [value]="season"></mdc-radio>\n      <label>{{season}}</label>\n    </mdc-form-field>\n  </mdc-radio-group>\n</form>\n<p>Your favorite season is: {{form.controls[\'season\'].value}}</p>',ts:"seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];\n\nform = new FormGroup({\n  season: new FormControl('Spring'),\n});"},this.exampleAccessibility={html:'<div class="mdc-touch-target-wrapper">\n  <mdc-form-field>\n    <mdc-radio name="demo-radio-set" touch></mdc-radio>\n    <label>My Accessibility Radio</label>\n  </mdc-form-field>\n</div>'}}return _createClass(e,[{key:"alternateColors",value:function(e){var t="demo-radio--custom";e.elementRef.nativeElement.classList.contains(t)?e.elementRef.nativeElement.classList.remove(t):e.elementRef.nativeElement.classList.add(t)}}]),e}(),h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=n.Fb({type:h,selectors:[["ng-component"]],decls:67,vars:17,consts:[[1,"demo-content"],[3,"example"],["name","demo-radio-set"],[1,"demo-layout__row"],["mdc-button","",3,"click"],[3,"alignEnd"],["demoFormField",""],["demoRadio2",""],[1,"demo-content__headline"],[3,"ngModel","ngModelChange"],["demoRadioGroup",""],[4,"ngFor","ngForOf"],[3,"formGroup"],["formControlName","season"],["demoRadioReactive",""],[1,"mdc-touch-target-wrapper"],["name","demo-radio-set","touch",""],[3,"value"]],template:function(e,t){if(1&e){var o=n.Sb();n.Rb(0,"div",0),n.Mb(1,"mdc-radio"),n.Mb(2,"example-viewer",1),n.Qb(),n.Rb(3,"div",0),n.Rb(4,"mdc-form-field"),n.Mb(5,"mdc-radio",2),n.Rb(6,"label"),n.xc(7,"Radio 1"),n.Qb(),n.Qb(),n.Rb(8,"mdc-form-field"),n.Mb(9,"mdc-radio",2),n.Rb(10,"label"),n.xc(11,"Radio 2"),n.Qb(),n.Qb(),n.Mb(12,"example-viewer",1),n.Qb(),n.Rb(13,"div",0),n.Rb(14,"div",3),n.Rb(15,"button",4),n.Zb("click",(function(e){n.pc(o);var t=n.oc(22);return t.alignEnd=!t.alignEnd})),n.xc(16),n.Qb(),n.Rb(17,"button",4),n.Zb("click",(function(e){n.pc(o);var t=n.oc(24);return t.disabled=!t.disabled})),n.xc(18),n.Qb(),n.Rb(19,"button",4),n.Zb("click",(function(e){n.pc(o);var b=n.oc(24);return t.alternateColors(b)})),n.xc(20,"Alternate Colors"),n.Qb(),n.Qb(),n.Rb(21,"mdc-form-field",5,6),n.Mb(23,"mdc-radio",null,7),n.Rb(25,"label"),n.xc(26,"Radio Button"),n.Qb(),n.Qb(),n.Mb(27,"example-viewer",1),n.Qb(),n.Rb(28,"div",0),n.Rb(29,"h3",8),n.xc(30,"Radio Group"),n.Qb(),n.Rb(31,"div",3),n.Rb(32,"button",4),n.Zb("click",(function(e){n.pc(o);var t=n.oc(35);return t.disabled=!t.disabled})),n.xc(33),n.Qb(),n.Qb(),n.Rb(34,"mdc-radio-group",9,10),n.Zb("ngModelChange",(function(e){return t.favoriteSeason=e})),n.vc(36,f,4,2,"mdc-form-field",11),n.Qb(),n.Rb(37,"p"),n.xc(38),n.Qb(),n.Mb(39,"example-viewer",1),n.Qb(),n.Rb(40,"div",0),n.Rb(41,"h3",8),n.xc(42,"Radio Group - Reactive forms"),n.Qb(),n.Rb(43,"div",3),n.Rb(44,"button",4),n.Zb("click",(function(e){n.pc(o);var t=n.oc(48);return t.disabled=!t.disabled})),n.xc(45),n.Qb(),n.Qb(),n.Rb(46,"form",12),n.Rb(47,"mdc-radio-group",13,14),n.vc(49,Q,4,2,"mdc-form-field",11),n.Qb(),n.Qb(),n.Rb(50,"p"),n.xc(51),n.Qb(),n.Mb(52,"example-viewer",1),n.Qb(),n.Rb(53,"div",0),n.Rb(54,"h3",8),n.xc(55,"Accessibility"),n.Qb(),n.Rb(56,"p"),n.xc(57," Material Design spec advises that touch targets should be at least 48 x 48 px. To meet this requirement, add the `touch` property. "),n.Qb(),n.Rb(58,"p"),n.xc(59," Note that the outer mdc-touch-target-wrapper element is only necessary if you want to avoid potentially overlapping touch targets on adjacent elements (due to collapsing margins). "),n.Qb(),n.Rb(60,"div",3),n.Rb(61,"div",15),n.Rb(62,"mdc-form-field"),n.Mb(63,"mdc-radio",16),n.Rb(64,"label"),n.xc(65,"My Accessibility Radio"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Mb(66,"example-viewer",1),n.Qb()}if(2&e){var b=n.oc(22),a=n.oc(24),c=n.oc(35),i=n.oc(48);n.Bb(2),n.ic("example",t.example1),n.Bb(10),n.ic("example",t.exampleRadioSet),n.Bb(4),n.zc("RTL: ",b.alignEnd?"On":"Off",""),n.Bb(2),n.zc("Disabled: ",a.disabled?"On":"Off",""),n.Bb(3),n.ic("alignEnd",!1),n.Bb(6),n.ic("example",t.example2),n.Bb(6),n.zc("Disabled: ",c.disabled?"On":"Off",""),n.Bb(1),n.ic("ngModel",t.favoriteSeason),n.Bb(2),n.ic("ngForOf",t.seasons),n.Bb(2),n.zc("Your favorite season is: ",t.favoriteSeason,""),n.Bb(1),n.ic("example",t.exampleRadioGroup),n.Bb(6),n.zc("Disabled: ",i.disabled?"On":"Off",""),n.Bb(1),n.ic("formGroup",t.form),n.Bb(3),n.ic("ngForOf",t.seasons),n.Bb(2),n.zc("Your favorite season is: ",t.form.controls.season.value,""),n.Bb(1),n.ic("example",t.exampleReactive),n.Bb(14),n.ic("example",t.exampleAccessibility)}},directives:[s.b,l.a,m.a,u.a,R.a,i.k,i.n,p.j,i.r,i.l,i.f,i.d],encapsulation:2}),h)}]}],k=((w=function e(){_classCallCheck(this,e)}).\u0275mod=n.Jb({type:w}),w.\u0275inj=n.Ib({factory:function(e){return new(e||w)},imports:[[a.e.forChild(y)],a.e]}),w);o.d(t,"RadioModule",(function(){return S}));var M,S=((M=function e(){_classCallCheck(this,e)}).\u0275mod=n.Jb({type:M}),M.\u0275inj=n.Ib({factory:function(e){return new(e||M)},imports:[[b.a,k]]}),M)}}]);