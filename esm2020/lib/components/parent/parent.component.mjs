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
ParentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ParentComponent, deps: [{ token: i1.ArtifactDetailsService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
ParentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ParentComponent, selector: "lib-parent", ngImport: i0, template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n", styles: [""], dependencies: [{ kind: "component", type: i1.CommonHeaderBannerComponent, selector: "lib-dts-common-header-banner", inputs: ["input"], outputs: ["callFunction"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ParentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-parent', template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ArtifactDetailsService }, { type: i2.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcGFyZW50L3BhcmVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9jb21wb25lbnRzL3BhcmVudC9wYXJlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBR0wsdUJBQXVCLEVBRXhCLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFRakMsTUFBTSxPQUFPLGVBQWU7SUFJMUIsWUFBb0Isc0JBQTZDLEVBQVMsS0FBcUI7UUFBM0UsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSHhGLHNCQUFpQixHQUN0QixJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLHNCQUFzQjtnQkFDekIsd0RBQXdEO2lCQUN2RCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsOEVBQThFO2lCQUM1SCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3RCwyQkFBMkI7b0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7aUJBQ2pEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7NkdBdkJVLGVBQWU7aUdBQWYsZUFBZSxrRENkNUIscUlBSUE7NEZEVWEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFydGlmYWN0RGV0YWlsc1NlcnZpY2UsXG4gIEFydGlmYWN0VHlwZSxcbiAgQ29tbW9uSGVhZGVyQmFubmVySW5wdXQsXG4gIElDb21tb25IZWFkZXJCYW5uZXJJbnB1dFxufSBmcm9tIFwiQHNhcC9mYWxjb24tdWktcGVkZXN0YWxcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFBhcmFtc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFyZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhcmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhcmVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFyZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGhlYWRlckJhbm5lcklucHV0OiBJQ29tbW9uSGVhZGVyQmFubmVySW5wdXQgPVxuICAgIG5ldyBDb21tb25IZWFkZXJCYW5uZXJJbnB1dCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aWZhY3REZXRhaWxzU2VydmljZTpBcnRpZmFjdERldGFpbHNTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgIHRoaXMuYXJ0aWZhY3REZXRhaWxzU2VydmljZVxuICAgICAgICAvLyAuZ2V0QXJ0aWZhY3REZXRhaWxzKHBhcmFtc1snaWQnXSwgQXJ0aWZhY3RUeXBlLkV2ZW50KVxuICAgICAgICAuZ2V0QXJ0aWZhY3REZXRhaWxzKHBhcmFtc1snaWQnXSwgJ1NvbHV0aW9uMycpIC8vIGFydGlmYWN0VHlwZSBzaG91bGQgYmUgYWRkZWQgZnJvbSAgQXJ0aWZhY3RUeXBlIGVudW0gZXg6IEFydGlmYWN0VHlwZS5FdmVudFxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQmFubmVySW5wdXQudGl0bGUgPSBkYXRhLkRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5zaG9ydFRleHQgPSBkYXRhLlNob3J0VGV4dDtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQmFubmVySW5wdXQuaWNvbk5hbWUgPVxuICAgICAgICAgICAgICB0aGlzLmFydGlmYWN0RGV0YWlsc1NlcnZpY2UuZ2V0QXJ0aWZhY3RJY29uTmFtZShkYXRhLlR5cGUpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LmlzU2hvcnRUZXh0SGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGxpYi1kdHMtY29tbW9uLWhlYWRlci1iYW5uZXJcbiAgW2lucHV0XT1cImhlYWRlckJhbm5lcklucHV0XCJcbj48L2xpYi1kdHMtY29tbW9uLWhlYWRlci1iYW5uZXI+XG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4iXX0=