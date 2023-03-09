import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as i1 from '@sap/falcon-ui-pedestal';
import { CommonHeaderBannerInput, ArtifactType, FalconUiPedestalModule } from '@sap/falcon-ui-pedestal';

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
ParentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ParentComponent, deps: [{ token: i1.ArtifactDetailsService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
ParentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ParentComponent, selector: "lib-parent", ngImport: i0, template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n", styles: [""], dependencies: [{ kind: "component", type: i1.CommonHeaderBannerComponent, selector: "lib-dts-common-header-banner", inputs: ["input"], outputs: ["callFunction"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ParentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-parent', template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ArtifactDetailsService }, { type: i2.ActivatedRoute }]; } });

class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ContentComponent, selector: "lib-content", ngImport: i0, template: "<div>\n  <h1>Placeholder for content</h1>\n</div>\n", styles: ["div{display:flex;justify-content:center;align-items:center}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-content', template: "<div>\n  <h1>Placeholder for content</h1>\n</div>\n", styles: ["div{display:flex;justify-content:center;align-items:center}\n"] }]
        }], ctorParameters: function () { return []; } });

const routes = [{
        // path: '', component: LoadedFromRouterComponent
        path: '', component: ParentComponent,
        children: [
            {
                path: '',
                component: ContentComponent,
            }
        ]
    }];
class MyLibRouterModule {
}
MyLibRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, imports: [CommonModule, i2.RouterModule] });
MyLibRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, imports: [CommonModule, RouterModule.forChild(routes)] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule.forChild(routes)]
                }]
        }] });

class LoadedFromRouterComponent {
    constructor(artifactDetailsService, route) {
        this.artifactDetailsService = artifactDetailsService;
        this.route = route;
        this.headerBannerInput = new CommonHeaderBannerInput();
        // this.headerBannerInput.title = 'title';
        // this.headerBannerInput.shortText = 'shortText';
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.artifactDetailsService
                .getArtifactDetails(params['id'], ArtifactType.Event)
                .subscribe((data) => {
                if (data) {
                    this.headerBannerInput.title = data.DisplayName;
                    this.headerBannerInput.shortText = data.ShortText;
                    this.headerBannerInput.iconName =
                        this.artifactDetailsService.getArtifactIconName(data.Type);
                    // eslint-disable-next-line
                    /*       this.headerBannerInput.parentTechnicalName =
                             this.artifactDetailsService.ContentPackages[0]['TechnicalName'];
                           // eslint-disable-next-line
                           this.headerBannerInput.parentDisplayName =
                             this.artifactDetailsService.ContentPackages[0]['DisplayName'];*/
                    this.headerBannerInput.isShortTextHidden = true;
                }
            });
        });
    }
}
LoadedFromRouterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadedFromRouterComponent, deps: [{ token: i1.ArtifactDetailsService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
LoadedFromRouterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LoadedFromRouterComponent, selector: "lib-loaded-from-router", ngImport: i0, template: "<!--<h1>Lazily loaded component using Router</h1>-->\n<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n", styles: [""], dependencies: [{ kind: "component", type: i1.CommonHeaderBannerComponent, selector: "lib-dts-common-header-banner", inputs: ["input"], outputs: ["callFunction"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LoadedFromRouterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-loaded-from-router', template: "<!--<h1>Lazily loaded component using Router</h1>-->\n<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ArtifactDetailsService }, { type: i2.ActivatedRoute }]; } });

class MyLibModule {
}
MyLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: MyLibModule, declarations: [LoadedFromRouterComponent,
        ParentComponent], imports: [MyLibRouterModule, FalconUiPedestalModule, RouterModule] });
MyLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibModule, imports: [MyLibRouterModule, FalconUiPedestalModule, RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LoadedFromRouterComponent,
                        ParentComponent,
                    ],
                    imports: [MyLibRouterModule, FalconUiPedestalModule, RouterModule],
                    exports: []
                }]
        }] });

class StandAloneComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
StandAloneComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StandAloneComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: StandAloneComponent, isStandalone: true, selector: "lib-stand-alone", ngImport: i0, template: "<h1>Lazily loaded standalone component</h1>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StandAloneComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, selector: 'lib-stand-alone', template: "<h1>Lazily loaded standalone component</h1>\n" }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibModule, StandAloneComponent };
//# sourceMappingURL=my-lib.mjs.map
