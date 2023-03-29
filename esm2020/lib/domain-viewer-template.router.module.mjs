import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ParentComponent } from "./component/parent/parent.component";
import { ContentComponent } from "./component/parent/content/content.component";
import { Child1Component } from "./component/parent/child1/child1.component";
import { Child2Component } from "./component/parent/child2/child2.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
export class DomainViewerTemplateRouterModule {
}
DomainViewerTemplateRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DomainViewerTemplateRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DomainViewerTemplateRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: DomainViewerTemplateRouterModule, imports: [CommonModule, i1.RouterModule] });
DomainViewerTemplateRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DomainViewerTemplateRouterModule, imports: [CommonModule, RouterModule.forChild(routes)] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DomainViewerTemplateRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule.forChild(routes)]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLXZpZXdlci10ZW1wbGF0ZS5yb3V0ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZG9tYWluLXZpZXdlci10ZW1wbGF0ZS9zcmMvbGliL2RvbWFpbi12aWV3ZXItdGVtcGxhdGUucm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNENBQTRDLENBQUM7OztBQUUzRSxNQUFNLE1BQU0sR0FBVyxDQUFDO1FBQ3RCLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGVBQWU7UUFDcEMsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLGdCQUFnQjthQUM1QjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxlQUFlO2FBQzNCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLGVBQWU7YUFDM0I7U0FBQztLQUNMLENBQUMsQ0FBQTtBQU1GLE1BQU0sT0FBTyxnQ0FBZ0M7OzhIQUFoQyxnQ0FBZ0M7K0hBQWhDLGdDQUFnQyxZQUZqQyxZQUFZOytIQUVYLGdDQUFnQyxZQUZqQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7NEZBRTFDLGdDQUFnQztrQkFINUMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7UGFyZW50Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnQvcGFyZW50L3BhcmVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29udGVudENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L3BhcmVudC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge0NoaWxkMUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50L3BhcmVudC9jaGlsZDEvY2hpbGQxLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGlsZDJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudC9wYXJlbnQvY2hpbGQyL2NoaWxkMi5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJywgY29tcG9uZW50OiBQYXJlbnRDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IENvbnRlbnRDb21wb25lbnQsXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnY2hpbGQxJyxcbiAgICAgIGNvbXBvbmVudDogQ2hpbGQxQ29tcG9uZW50LFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJ2NoaWxkMicsXG4gICAgICBjb21wb25lbnQ6IENoaWxkMkNvbXBvbmVudCxcbiAgICB9XVxufV1cblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV1cbn0pXG5leHBvcnQgY2xhc3MgRG9tYWluVmlld2VyVGVtcGxhdGVSb3V0ZXJNb2R1bGUge1xuXG59XG4iXX0=