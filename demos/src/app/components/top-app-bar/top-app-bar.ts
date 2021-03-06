import {Component, OnInit, ViewChild} from '@angular/core';

import {ComponentViewer, ComponentApi} from '../../shared/component-viewer';

@Component({template: '<component-viewer></component-viewer>'})
export class TopAppBar implements OnInit {
  @ViewChild(ComponentViewer, {static: true}) _componentViewer: ComponentViewer;

  ngOnInit(): void {
    this._componentViewer.template = {
      title: 'Top App Bar',
      description: 'The top app bar displays information and actions relating to the current screen.',
      references: [{
        name: 'Material Design guidelines: App bars: top',
        url: 'https://material.io/design/components/app-bars-top.html'
      }, {
        name: 'Material Components Web',
        url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-top-app-bar/README.md'
      }],
      mdcUrls: [
        {name: 'Sass Mixins', url: 'https://github.com/material-components/material-components-web/blob/master/packages/mdc-top-app-bar/README.md#sass-mixins'},
      ],
      code: `import {MdcTopAppBarModule} from '@angular-mdc/web/top-app-bar';`,
      sass: `@use '@material/top-app-bar/mdc-top-app-bar';
@use '@material/top-app-bar';
@use '@material/icon-button/mdc-icon-button';`
    };
  }
}

@Component({template: '<component-api></component-api>'})
export class Api implements OnInit {
  @ViewChild(ComponentApi, {static: true}) _componentApi: ComponentApi;

  ngOnInit() {
    this._componentApi.docApi = {
      sections: [
        {
          header: 'MdcTopAppBar',
          selectors: [
            'mdc-top-app-bar',
          ],
          exportedAs: 'mdcTopAppBar',
          categories: [
            {
              name: 'Properties',
              items: [
                {name: 'fixed: boolean', summary: `Style the app bar as a fixed top app bar.`},
                {name: 'short: boolean', summary: `Style the app bar as a short app bar. Short top app bars should only be used with one action item.`},
                {name: 'prominent: boolean', summary: `Enables prominent variant.`},
                {name: 'dense: boolean', summary: `Enables dense variant.`},
                {name: 'shortCollapsed: boolean', summary: `Set the short app bar to always collapsed.`},
                {name: 'fixedAdjustElement: Element', summary: `Used to style the content below the standard and fixed top app bar to prevent the top app bar from covering it.`},
                {name: 'scrollTarget: target: Element | Window', summary: `Sets scroll target to different DOM node (default is window).`},
              ]
            },
            {
              name: 'Methods',
              items: [
                {name: 'isCollapsed(): boolean', summary: `Whether or not the app bar is in a collapsed state.`},
              ]
            },
            {
              name: 'Events',
              items: [
                {name: 'navigationSelected: MdcTopAppBarNavSelected', summary: `Emitted when the top app bar navigation menu icon is selected.`},
              ]
            },
          ]
        },
        {
          header: 'MdcTopAppBarRow',
          summary: 'A one-line row to add app bar sections.',
          selectors: [
            'mdc-top-app-bar-row',
            'mdcTopAppBarRow',
          ],
          exportedAs: 'mdcTopAppBarRow',
        }, {
          header: 'MdcTopAppBarSection',
          summary: 'A content area for navigation or actions.',
          selectors: [
            'mdc-top-app-bar-section',
          ],
          exportedAs: 'mdcTopAppBarSection',
          categories: [
            {
              name: 'Properties',
              items: [
                {name: 'title: string', summary: `Optional. The text used to describe the app or section.`},
                {name: `align: string = 'start' | 'end'`, summary: `Align section to either 'start' or 'end' of row.`},
              ]
            },
          ],
        },
        {
          header: 'MdcTopAppBarTitle',
          summary: 'Optional. The text used to describe the app or section.',
          selectors: [
            'mdc-top-app-bar-title',
            'mdcTopAppBarTitle'
          ],
          exportedAs: 'mdcTopAppBarTitle',
        },
        {
          header: 'MdcTopAppBarNavIcon',
          summary: 'Left most icon of app bar used for navigation.',
          selectors: [
            'mdc-icon[mdcTopAppBarNavIcon]',
          ],
          exportedAs: 'mdcTopAppBarNavIcon',
        },
        {
          header: 'MdcTopAppBarActionItem',
          summary: 'Top app bars can accommodate multiple action items on opposite side of navigation icon.',
          selectors: [
            'mdc-icon[mdcTopAppBarActionItem]',
          ],
          exportedAs: 'mdcTopAppBarActionItem',
        },
        {
          header: 'MdcTopAppBarFixedAdjust',
          summary: 'Style the content below the standard and fixed top app bar to prevent the top app bar from covering it.',
          selectors: [
            'mdcTopAppBarFixedAdjust',
          ],
          exportedAs: 'mdcTopAppBarFixedAdjust',
        },
      ]
    };
  }
}

@Component({templateUrl: './examples.html'})
export class Examples {
  tabs = [
    {label: 'Flights', icon: 'airplanemode_active'},
    {label: 'Hotel', icon: 'hotel'},
    {label: 'Favorites', icon: 'favorite'}
  ];

  links = [
    {label: 'Inbox', icon: 'inbox'},
    {label: 'Star', icon: 'star'},
    {label: 'Sent Mail', icon: 'send'},
    {label: 'Drafts', icon: 'drafts'}
  ];

  text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis,
  repudiandae dignissimos et quam velit autem mollitia tenetur,
  eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.
  Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel,
  consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium,
  excepturi!`;
  lorems = Array(5).fill(this.text);

  exampleStandard = {
    html: `<mdc-top-app-bar [scrollTarget]="standardContent">
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon>
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>file_download</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>print</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>bookmark</mdc-icon>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>
<div class="demo-app-bar-content" #standardContent>
  <p *ngFor="let lorem of lorems">{{lorem}}</p>
</div>`
  };

  exampleFixed = {
    html: `<mdc-top-app-bar fixed [scrollTarget]="fixedContent">
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon>
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>file_download</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>print</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>bookmark</mdc-icon>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>
<div class="demo-app-bar-content" #fixedContent>
  <p *ngFor="let lorem of lorems">{{lorem}}</p>
</div>`
  };

  exampleProminent = {
    html: `<mdc-top-app-bar prominent>
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon>
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>file_download</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>print</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>bookmark</mdc-icon>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>`
  };

  exampleDense = {
    html: `<mdc-top-app-bar dense>
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon>
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>file_download</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>print</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>bookmark</mdc-icon>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>`
  };

  exampleShort = {
    html: `<mdc-top-app-bar short [scrollTarget]="mainContent">
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon>
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>file_download</mdc-icon>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>
<div #mainContent>
  <p *ngFor="let lorem of lorems">{{lorem}}</p>
</div>`,
    ts: `text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, incidunt. Debitis,
repudiandae dignissimos et quam velit autem mollitia tenetur,
eligendi rerum repellendus, explicabo ad aperiam vel ipsam! Exercitationem, voluptates molestiae.
Iusto reiciendis mollitia ab commodi. Animi maiores nesciunt officia enim corrupti officiis consequuntur vel,
consectetur eveniet ad dolorum reprehenderit similique qui deleniti ut sed explicabo id error at. Laudantium,
excepturi!';
lorems = Array(5).fill(this.text);`
  };

  exampleShortCollapsed = {
    html: `<mdc-top-app-bar shortCollapsed>
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon>
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>file_download</mdc-icon>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>`
  };

  exampleTheme = {
    html: `<mdc-top-app-bar fixed class="demo-top-app-bar-themed" [scrollTarget]="themeContent">
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon>
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>file_download</mdc-icon>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>
<div #themeContent>
  <p *ngFor="let lorem of lorems">{{lorem}}</p>
</div>`,
    sass: `https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_top-app-bar.scss`
  };

  exampleWithTabsDrawer = {
    html: `<mdc-top-app-bar class="demo-top-app-bar-with-tabs">
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section align="start" title="App">
      <button mdcTopAppBarNavIcon (click)="drawer.open = !drawer.open">
        <mdc-icon>menu</mdc-icon>
      </button>
    </mdc-top-app-bar-section>
    <mdc-top-app-bar-section align="end">
      <mdc-icon mdcTopAppBarActionItem>search</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem>notifications_none</mdc-icon>
      <mdc-icon mdcTopAppBarActionItem (click)="profileMenu.open = !profileMenu.open">more_vert</mdc-icon>
      <div mdcMenuSurfaceAnchor #menuAnchor>
        <mdc-menu #profileMenu [anchorElement]="menuAnchor">
          <mdc-list>
            <mdc-list-item>My Profile</mdc-list-item>
            <mdc-list-divider></mdc-list-divider>
            <mdc-list-item>Sign out</mdc-list-item>
          </mdc-list>
        </mdc-menu>
      </div>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
  <mdc-top-app-bar-row>
    <mdc-top-app-bar-section>
      <mdc-tab-bar>
        <mdc-tab-scroller>
          <mdc-tab *ngFor="let tab of tabs" [label]="tab.label" [icon]="tab.icon"></mdc-tab>
        </mdc-tab-scroller>
      </mdc-tab-bar>
    </mdc-top-app-bar-section>
  </mdc-top-app-bar-row>
</mdc-top-app-bar>

<div class="demo-drawer-app-content">
  <mdc-drawer drawer="dismissible" #drawer>
    <mdc-drawer-header title="Drawer Title" subtitle="Subtitle"></mdc-drawer-header>
    <mdc-drawer-content>
      <mdc-list>
        <mdc-list-item *ngFor="let link of links">
          <mdc-icon mdcListItemGraphic>{{link.icon}}</mdc-icon>{{link.label}}
        </mdc-list-item>
      </mdc-list>
    </mdc-drawer-content>
  </mdc-drawer>
  <div mdcDrawerAppContent>
    Lorem ipsum dolor sit amet, ad erat postea ullamcorper nec, veri veniam
    quo et. Diam phaedrum ei mea, quaeque
    voluptaria efficiantur duo no. Eu adhuc veritus civibus nec, sumo
    invidunt mel id, in vim dictas detraxit. Per an
    legere iriure blandit. Veri iisque accusamus an pri.
  </div>
</div>`,
    ts: `tabs = [
  { label: 'Flights', icon: 'airplanemode_active' },
  { label: 'Hotel', icon: 'hotel' },
  { label: 'Favorites', icon: 'favorite' }
];

links = [
  { label: 'Inbox', icon: 'inbox' },
  { label: 'Star', icon: 'star' },
  { label: 'Sent Mail', icon: 'send' },
  { label: 'Drafts', icon: 'drafts' }
];`,
    sass: `https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_top-app-bar.scss`
  };
}
