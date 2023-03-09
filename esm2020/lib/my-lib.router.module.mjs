import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ParentComponent } from "./components/parent/parent.component";
import { ContentComponent } from "./components/parent/content/content.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
export class MyLibRouterModule {
}
MyLibRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLibRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, imports: [CommonModule, i1.RouterModule] });
MyLibRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, imports: [CommonModule, RouterModule.forChild(routes)] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: MyLibRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule.forChild(routes)]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLnJvdXRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9teS1saWIucm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDOzs7QUFFL0UsTUFBTSxNQUFNLEdBQVcsQ0FBQztRQUN0QixpREFBaUQ7UUFDakQsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZUFBZTtRQUNwQyxRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsRUFBRTtnQkFDUixTQUFTLEVBQUUsZ0JBQWdCO2FBQzVCO1NBQUM7S0FDTCxDQUFDLENBQUE7QUFNRixNQUFNLE9BQU8saUJBQWlCOzsrR0FBakIsaUJBQWlCO2dIQUFqQixpQkFBaUIsWUFGbEIsWUFBWTtnSEFFWCxpQkFBaUIsWUFGbEIsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDOzRGQUUxQyxpQkFBaUI7a0JBSDdCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyTW9kdWxlLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge1BhcmVudENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYXJlbnQvcGFyZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDb250ZW50Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhcmVudC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW3tcbiAgLy8gcGF0aDogJycsIGNvbXBvbmVudDogTG9hZGVkRnJvbVJvdXRlckNvbXBvbmVudFxuICBwYXRoOiAnJywgY29tcG9uZW50OiBQYXJlbnRDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IENvbnRlbnRDb21wb25lbnQsXG4gICAgfV1cbn1dXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldXG59KVxuZXhwb3J0IGNsYXNzIE15TGliUm91dGVyTW9kdWxlIHtcblxufVxuIl19