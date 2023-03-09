import { Component } from '@angular/core';
import { ArtifactType, CommonHeaderBannerInput } from "@sap/falcon-ui-pedestal";
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
    ngOnInit() {
    }
}
ParentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ParentComponent, deps: [{ token: i1.ArtifactDetailsService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
ParentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: ParentComponent, selector: "lib-parent", ngImport: i0, template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n", styles: [""], dependencies: [{ kind: "component", type: i1.CommonHeaderBannerComponent, selector: "lib-dts-common-header-banner", inputs: ["input"], outputs: ["callFunction"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: ParentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-parent', template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ArtifactDetailsService }, { type: i2.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL2NvbXBvbmVudHMvcGFyZW50L3BhcmVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9jb21wb25lbnRzL3BhcmVudC9wYXJlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBRUwsWUFBWSxFQUNaLHVCQUF1QixFQUV4QixNQUFNLHlCQUF5QixDQUFDOzs7O0FBUWpDLE1BQU0sT0FBTyxlQUFlO0lBSTFCLFlBQW9CLHNCQUE2QyxFQUFTLEtBQXFCO1FBQTNFLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBdUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUh4RixzQkFBaUIsR0FDdEIsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1FBRzlCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxzQkFBc0I7aUJBQ3hCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDO2lCQUNwRCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNoRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRO3dCQUM3QixJQUFJLENBQUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3RCwyQkFBMkI7b0JBQzNCOzs7OzZGQUl5RTtvQkFDekUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztpQkFDakQ7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs2R0EzQlUsZUFBZTtpR0FBZixlQUFlLGtEQ2Q1QixxSUFJQTs0RkRVYSxlQUFlO2tCQUwzQixTQUFTOytCQUNFLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXJ0aWZhY3REZXRhaWxzU2VydmljZSxcbiAgQXJ0aWZhY3RUeXBlLFxuICBDb21tb25IZWFkZXJCYW5uZXJJbnB1dCxcbiAgSUNvbW1vbkhlYWRlckJhbm5lcklucHV0XG59IGZyb20gXCJAc2FwL2ZhbGNvbi11aS1wZWRlc3RhbFwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXJlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgaGVhZGVyQmFubmVySW5wdXQ6IElDb21tb25IZWFkZXJCYW5uZXJJbnB1dCA9XG4gICAgbmV3IENvbW1vbkhlYWRlckJhbm5lcklucHV0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpZmFjdERldGFpbHNTZXJ2aWNlOkFydGlmYWN0RGV0YWlsc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlXG4gICAgICAgIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCBBcnRpZmFjdFR5cGUuRXZlbnQpXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC50aXRsZSA9IGRhdGEuRGlzcGxheU5hbWU7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LnNob3J0VGV4dCA9IGRhdGEuU2hvcnRUZXh0O1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5pY29uTmFtZSA9XG4gICAgICAgICAgICAgIHRoaXMuYXJ0aWZhY3REZXRhaWxzU2VydmljZS5nZXRBcnRpZmFjdEljb25OYW1lKGRhdGEuVHlwZSk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIC8qICAgICAgIHRoaXMuaGVhZGVyQmFubmVySW5wdXQucGFyZW50VGVjaG5pY2FsTmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGlmYWN0RGV0YWlsc1NlcnZpY2UuQ29udGVudFBhY2thZ2VzWzBdWydUZWNobmljYWxOYW1lJ107XG4gICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5wYXJlbnREaXNwbGF5TmFtZSA9XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmFydGlmYWN0RGV0YWlsc1NlcnZpY2UuQ29udGVudFBhY2thZ2VzWzBdWydEaXNwbGF5TmFtZSddOyovXG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LmlzU2hvcnRUZXh0SGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIiwiPGxpYi1kdHMtY29tbW9uLWhlYWRlci1iYW5uZXJcbiAgW2lucHV0XT1cImhlYWRlckJhbm5lcklucHV0XCJcbj48L2xpYi1kdHMtY29tbW9uLWhlYWRlci1iYW5uZXI+XG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4iXX0=