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
                .getArtifactDetails(params['id'], 'solutionapp') // artifactType should be added from  ArtifactType enum ex: ArtifactType.Event
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RvbWFpbi12aWV3ZXItdGVtcGxhdGUvc3JjL2xpYi9jb21wb25lbnQvcGFyZW50L3BhcmVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kb21haW4tdmlld2VyLXRlbXBsYXRlL3NyYy9saWIvY29tcG9uZW50L3BhcmVudC9wYXJlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBR0wsdUJBQXVCLEVBRXhCLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFRakMsTUFBTSxPQUFPLGVBQWU7SUFLMUIsWUFBb0Isc0JBQThDLEVBQVUsS0FBcUI7UUFBN0UsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBSDFGLHNCQUFpQixHQUN0QixJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFHOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLHNCQUFzQjtnQkFDekIsd0RBQXdEO2lCQUN2RCxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsOEVBQThFO2lCQUM5SCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3RCwyQkFBMkI7b0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7aUJBQ2pEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7NkdBeEJVLGVBQWU7aUdBQWYsZUFBZSxrRENkNUIscUlBSUE7NEZEVWEsZUFBZTtrQkFMM0IsU0FBUzsrQkFDRSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBcnRpZmFjdERldGFpbHNTZXJ2aWNlLFxuICBBcnRpZmFjdFR5cGUsXG4gIENvbW1vbkhlYWRlckJhbm5lcklucHV0LFxuICBJQ29tbW9uSGVhZGVyQmFubmVySW5wdXRcbn0gZnJvbSBcIkBzYXAvZmFsY29uLXVpLXBlZGVzdGFsXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBhcmVudCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYXJlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYXJlbnQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhcmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGhlYWRlckJhbm5lcklucHV0OiBJQ29tbW9uSGVhZGVyQmFubmVySW5wdXQgPVxuICAgIG5ldyBDb21tb25IZWFkZXJCYW5uZXJJbnB1dCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJ0aWZhY3REZXRhaWxzU2VydmljZTogQXJ0aWZhY3REZXRhaWxzU2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlXG4gICAgICAgIC8vIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCBBcnRpZmFjdFR5cGUuRXZlbnQpXG4gICAgICAgIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCAnc29sdXRpb25hcHAnKSAvLyBhcnRpZmFjdFR5cGUgc2hvdWxkIGJlIGFkZGVkIGZyb20gIEFydGlmYWN0VHlwZSBlbnVtIGV4OiBBcnRpZmFjdFR5cGUuRXZlbnRcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LnRpdGxlID0gZGF0YS5EaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQmFubmVySW5wdXQuc2hvcnRUZXh0ID0gZGF0YS5TaG9ydFRleHQ7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0Lmljb25OYW1lID1cbiAgICAgICAgICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlLmdldEFydGlmYWN0SWNvbk5hbWUoZGF0YS5UeXBlKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5pc1Nob3J0VGV4dEhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxsaWItZHRzLWNvbW1vbi1oZWFkZXItYmFubmVyXG4gIFtpbnB1dF09XCJoZWFkZXJCYW5uZXJJbnB1dFwiXG4+PC9saWItZHRzLWNvbW1vbi1oZWFkZXItYmFubmVyPlxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIl19