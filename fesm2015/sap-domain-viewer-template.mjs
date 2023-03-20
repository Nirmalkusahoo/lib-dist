import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@sap/falcon-ui-pedestal';
import { CommonHeaderBannerInput, FalconUiPedestalModule } from '@sap/falcon-ui-pedestal';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

class ParentComponent {
    constructor(artifactDetailsService, route) {
        this.artifactDetailsService = artifactDetailsService;
        this.route = route;
        this.headerBannerInput = new CommonHeaderBannerInput();
        this.route.params.subscribe((params) => {
            this.artifactDetailsService
                // .getArtifactDetails(params['id'], ArtifactType.Event)
                .getArtifactDetails(params['id'], 'Solution3') // artifactType should be added from  ArtifactType enum ex: ArtifactType.Event
                .subscribe((data) => {
                if (data) {
                    this.headerBannerInput.title = data.DisplayName;
                    this.headerBannerInput.shortText = data.ShortText;
                    this.headerBannerInput.iconName =
                        this.artifactDetailsService.getArtifactIconName(data.Type);
                    // eslint-disable-next-line
                    this.headerBannerInput.isShortTextHidden = true;
                }
            });
        });
    }
    ngOnInit() {
    }
}
ParentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ParentComponent, deps: [{ token: i1.ArtifactDetailsService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
ParentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ParentComponent, selector: "lib-parent", ngImport: i0, template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n", styles: [""], dependencies: [{ kind: "component", type: i1.CommonHeaderBannerComponent, selector: "lib-dts-common-header-banner", inputs: ["input"], outputs: ["callFunction"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ParentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-parent', template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ArtifactDetailsService }, { type: i2.ActivatedRoute }]; } });

class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ContentComponent, selector: "lib-content", ngImport: i0, template: "<div>\n  <h1>Placeholder for content</h1>\n</div>\n<div>\n  <button routerLink=\"child1\">Child Route 1/Component-1</button>\n  <button routerLink=\"child2\">Child Route 2/Component-2</button>\n</div>\n\n", styles: ["div{display:flex;justify-content:center;align-items:center}button{margin-right:20px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i2.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-content', template: "<div>\n  <h1>Placeholder for content</h1>\n</div>\n<div>\n  <button routerLink=\"child1\">Child Route 1/Component-1</button>\n  <button routerLink=\"child2\">Child Route 2/Component-2</button>\n</div>\n\n", styles: ["div{display:flex;justify-content:center;align-items:center}button{margin-right:20px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; } });

class Child1Component {
    constructor() { }
    ngOnInit() {
    }
}
Child1Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Child1Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
Child1Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: Child1Component, selector: "lib-child1", ngImport: i0, template: "<div>\n  <h1>Placeholder for Child Route1 content</h1>\n</div>\n", styles: ["div{display:flex;justify-content:center;align-items:center}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Child1Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-child1', template: "<div>\n  <h1>Placeholder for Child Route1 content</h1>\n</div>\n", styles: ["div{display:flex;justify-content:center;align-items:center}\n"] }]
        }], ctorParameters: function () { return []; } });

class Child2Component {
    constructor() { }
    ngOnInit() {
    }
}
Child2Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Child2Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
Child2Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: Child2Component, selector: "lib-child2", ngImport: i0, template: "<div>\n  <h1>Placeholder for Child Route2 content</h1>\n</div>\n", styles: ["div{display:flex;justify-content:center;align-items:center}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: Child2Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-child2', template: "<div>\n  <h1>Placeholder for Child Route2 content</h1>\n</div>\n", styles: ["div{display:flex;justify-content:center;align-items:center}\n"] }]
        }], ctorParameters: function () { return []; } });

const routes = [{
        path: '', component: ParentComponent,
        children: [
            {
                path: '',
                component: ContentComponent,
            },
            {
                path: 'child1',
                component: Child1Component,
            },
            {
                path: 'child2',
                component: Child2Component,
            }
        ]
    }];
class DomainViewerTemplateRouterModule {
}
DomainViewerTemplateRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DomainViewerTemplateRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, imports: [CommonModule, i2.RouterModule] });
DomainViewerTemplateRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, imports: [CommonModule, RouterModule.forChild(routes)] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule.forChild(routes)]
                }]
        }] });

class DomainViewerTemplateModule {
}
DomainViewerTemplateModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DomainViewerTemplateModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateModule, declarations: [ParentComponent,
        ContentComponent], imports: [FalconUiPedestalModule,
        RouterModule,
        DomainViewerTemplateRouterModule] });
DomainViewerTemplateModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateModule, imports: [FalconUiPedestalModule,
        RouterModule,
        DomainViewerTemplateRouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ParentComponent,
                        ContentComponent
                    ],
                    imports: [FalconUiPedestalModule,
                        RouterModule,
                        DomainViewerTemplateRouterModule
                    ],
                    exports: []
                }]
        }] });

/*
 * Public API Surface of domain-viewer-template
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DomainViewerTemplateModule };
//# sourceMappingURL=sap-domain-viewer-template.mjs.map
