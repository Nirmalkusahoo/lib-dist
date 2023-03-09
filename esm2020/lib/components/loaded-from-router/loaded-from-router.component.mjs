import { Component } from '@angular/core';
import { ArtifactType, CommonHeaderBannerInput } from "@sap/falcon-ui-pedestal";
import * as i0 from "@angular/core";
import * as i1 from "@sap/falcon-ui-pedestal";
import * as i2 from "@angular/router";
export class LoadedFromRouterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVkLWZyb20tcm91dGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL2NvbXBvbmVudHMvbG9hZGVkLWZyb20tcm91dGVyL2xvYWRlZC1mcm9tLXJvdXRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2xvYWRlZC1mcm9tLXJvdXRlci9sb2FkZWQtZnJvbS1yb3V0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBRUwsWUFBWSxFQUNaLHVCQUF1QixFQUV4QixNQUFNLHlCQUF5QixDQUFDOzs7O0FBUWpDLE1BQU0sT0FBTyx5QkFBeUI7SUFHcEMsWUFBb0Isc0JBQTZDLEVBQVMsS0FBcUI7UUFBM0UsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRnhGLHNCQUFpQixHQUN0QixJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFHOUIsMENBQTBDO1FBQzFDLGtEQUFrRDtJQUNwRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxzQkFBc0I7aUJBQ3hCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUNwRCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3RCwyQkFBMkI7b0JBQ2xDOzs7OzZGQUl5RTtvQkFDbEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztpQkFDakQ7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7dUhBN0JVLHlCQUF5QjsyR0FBekIseUJBQXlCLDhEQ2R0QywwSkFJQTs0RkRVYSx5QkFBeUI7a0JBTHJDLFNBQVM7K0JBQ0Usd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFydGlmYWN0RGV0YWlsc1NlcnZpY2UsXG4gIEFydGlmYWN0VHlwZSxcbiAgQ29tbW9uSGVhZGVyQmFubmVySW5wdXQsXG4gIElDb21tb25IZWFkZXJCYW5uZXJJbnB1dFxufSBmcm9tIFwiQHNhcC9mYWxjb24tdWktcGVkZXN0YWxcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbG9hZGVkLWZyb20tcm91dGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRlZC1mcm9tLXJvdXRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRlZC1mcm9tLXJvdXRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGVkRnJvbVJvdXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBoZWFkZXJCYW5uZXJJbnB1dDogSUNvbW1vbkhlYWRlckJhbm5lcklucHV0ID1cbiAgICBuZXcgQ29tbW9uSGVhZGVyQmFubmVySW5wdXQoKTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpZmFjdERldGFpbHNTZXJ2aWNlOkFydGlmYWN0RGV0YWlsc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsKSB7XG5cbiAgICAvLyB0aGlzLmhlYWRlckJhbm5lcklucHV0LnRpdGxlID0gJ3RpdGxlJztcbiAgICAvLyB0aGlzLmhlYWRlckJhbm5lcklucHV0LnNob3J0VGV4dCA9ICdzaG9ydFRleHQnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlXG4gICAgICAgIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCBBcnRpZmFjdFR5cGUuRXZlbnQpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC50aXRsZSA9IGRhdGEuRGlzcGxheU5hbWU7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LnNob3J0VGV4dCA9IGRhdGEuU2hvcnRUZXh0O1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5pY29uTmFtZSA9XG4gICAgICAgICAgICAgIHRoaXMuYXJ0aWZhY3REZXRhaWxzU2VydmljZS5nZXRBcnRpZmFjdEljb25OYW1lKGRhdGEuVHlwZSk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgLyogICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5wYXJlbnRUZWNobmljYWxOYW1lID1cbiAgICAgICAgICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlLkNvbnRlbnRQYWNrYWdlc1swXVsnVGVjaG5pY2FsTmFtZSddO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LnBhcmVudERpc3BsYXlOYW1lID1cbiAgICAgICAgICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlLkNvbnRlbnRQYWNrYWdlc1swXVsnRGlzcGxheU5hbWUnXTsqL1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5pc1Nob3J0VGV4dEhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59XG4iLCI8IS0tPGgxPkxhemlseSBsb2FkZWQgY29tcG9uZW50IHVzaW5nIFJvdXRlcjwvaDE+LS0+XG48bGliLWR0cy1jb21tb24taGVhZGVyLWJhbm5lclxuICBbaW5wdXRdPVwiaGVhZGVyQmFubmVySW5wdXRcIlxuPjwvbGliLWR0cy1jb21tb24taGVhZGVyLWJhbm5lcj5cbiJdfQ==