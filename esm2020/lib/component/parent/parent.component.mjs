import { Component } from '@angular/core';
import { CommonHeaderBannerInput } from "@sap/falcon-ui-pedestal";
import * as i0 from "@angular/core";
import * as i1 from "@sap/falcon-ui-pedestal";
import * as i2 from "@angular/router";
export class ParentComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RvbWFpbi12aWV3ZXItdGVtcGxhdGUvc3JjL2xpYi9jb21wb25lbnQvcGFyZW50L3BhcmVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kb21haW4tdmlld2VyLXRlbXBsYXRlL3NyYy9saWIvY29tcG9uZW50L3BhcmVudC9wYXJlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBR0wsdUJBQXVCLEVBRXhCLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFRakMsTUFBTSxPQUFPLGVBQWU7SUFLMUIsWUFBb0Isc0JBQThDLEVBQVUsS0FBcUI7UUFBN0UsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSDFGLHNCQUFpQixHQUN0QixJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLHNCQUFzQjtnQkFDekIsd0RBQXdEO2lCQUN2RCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsOEVBQThFO2lCQUM1SCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3RCwyQkFBMkI7b0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7aUJBQ2pEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7NEdBeEJVLGVBQWU7Z0dBQWYsZUFBZSxrRENkNUIscUlBSUE7MkZEVWEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBcnRpZmFjdERldGFpbHNTZXJ2aWNlLFxuICBBcnRpZmFjdFR5cGUsXG4gIENvbW1vbkhlYWRlckJhbm5lcklucHV0LFxuICBJQ29tbW9uSGVhZGVyQmFubmVySW5wdXRcbn0gZnJvbSBcIkBzYXAvZmFsY29uLXVpLXBlZGVzdGFsXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBhcmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJlbnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGhlYWRlckJhbm5lcklucHV0OiBJQ29tbW9uSGVhZGVyQmFubmVySW5wdXQgPVxuICAgIG5ldyBDb21tb25IZWFkZXJCYW5uZXJJbnB1dCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aWZhY3REZXRhaWxzU2VydmljZTogQXJ0aWZhY3REZXRhaWxzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlXG4gICAgICAgIC8vIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCBBcnRpZmFjdFR5cGUuRXZlbnQpXG4gICAgICAgIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCAnU29sdXRpb24zJykgLy8gYXJ0aWZhY3RUeXBlIHNob3VsZCBiZSBhZGRlZCBmcm9tICBBcnRpZmFjdFR5cGUgZW51bSBleDogQXJ0aWZhY3RUeXBlLkV2ZW50XG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC50aXRsZSA9IGRhdGEuRGlzcGxheU5hbWU7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LnNob3J0VGV4dCA9IGRhdGEuU2hvcnRUZXh0O1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5pY29uTmFtZSA9XG4gICAgICAgICAgICAgIHRoaXMuYXJ0aWZhY3REZXRhaWxzU2VydmljZS5nZXRBcnRpZmFjdEljb25OYW1lKGRhdGEuVHlwZSk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQmFubmVySW5wdXQuaXNTaG9ydFRleHRIaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8bGliLWR0cy1jb21tb24taGVhZGVyLWJhbm5lclxuICBbaW5wdXRdPVwiaGVhZGVyQmFubmVySW5wdXRcIlxuPjwvbGliLWR0cy1jb21tb24taGVhZGVyLWJhbm5lcj5cbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiJdfQ==