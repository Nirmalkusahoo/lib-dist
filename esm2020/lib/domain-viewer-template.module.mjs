import { NgModule } from '@angular/core';
import { ParentComponent } from "./component/parent/parent.component";
import { ContentComponent } from "./component/parent/content/content.component";
import { FalconUiPedestalModule } from "@sap/falcon-ui-pedestal";
import { RouterModule } from "@angular/router";
import { DomainViewerTemplateRouterModule } from "./domain-viewer-template.router.module";
import * as i0 from "@angular/core";
export class DomainViewerTemplateModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLXZpZXdlci10ZW1wbGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9kb21haW4tdmlld2VyLXRlbXBsYXRlL3NyYy9saWIvZG9tYWluLXZpZXdlci10ZW1wbGF0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOztBQWN4RixNQUFNLE9BQU8sMEJBQTBCOzt1SEFBMUIsMEJBQTBCO3dIQUExQiwwQkFBMEIsaUJBVG5DLGVBQWU7UUFDZixnQkFBZ0IsYUFFUixzQkFBc0I7UUFDOUIsWUFBWTtRQUNaLGdDQUFnQzt3SEFJdkIsMEJBQTBCLFlBTjNCLHNCQUFzQjtRQUM5QixZQUFZO1FBQ1osZ0NBQWdDOzJGQUl2QiwwQkFBMEI7a0JBWHRDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7d0JBQ2YsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0I7d0JBQzlCLFlBQVk7d0JBQ1osZ0NBQWdDO3FCQUNqQztvQkFDRCxPQUFPLEVBQUUsRUFBRTtpQkFDWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYXJlbnRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9wYXJlbnQvcGFyZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvcGFyZW50L2NvbnRlbnQvY29udGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7RmFsY29uVWlQZWRlc3RhbE1vZHVsZX0gZnJvbSBcIkBzYXAvZmFsY29uLXVpLXBlZGVzdGFsXCI7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtEb21haW5WaWV3ZXJUZW1wbGF0ZVJvdXRlck1vZHVsZX0gZnJvbSBcIi4vZG9tYWluLXZpZXdlci10ZW1wbGF0ZS5yb3V0ZXIubW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGFyZW50Q29tcG9uZW50LFxuICAgIENvbnRlbnRDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0ZhbGNvblVpUGVkZXN0YWxNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIERvbWFpblZpZXdlclRlbXBsYXRlUm91dGVyTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERvbWFpblZpZXdlclRlbXBsYXRlTW9kdWxlIHtcbn1cbiJdfQ==