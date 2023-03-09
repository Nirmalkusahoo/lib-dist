import { NgModule } from '@angular/core';
import { MyLibRouterModule } from "./my-lib.router.module";
import { LoadedFromRouterComponent } from "./components/loaded-from-router/loaded-from-router.component";
import { FalconUiPedestalModule } from "@sap/falcon-ui-pedestal";
import { ParentComponent } from "./components/parent/parent.component";
import { RouterModule } from "@angular/router";
import * as i0 from "@angular/core";
export class MyLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw4REFBOEQsQ0FBQztBQUN2RyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDckUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQVc3QyxNQUFNLE9BQU8sV0FBVzs7eUdBQVgsV0FBVzswR0FBWCxXQUFXLGlCQU5wQix5QkFBeUI7UUFDekIsZUFBZSxhQUVQLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLFlBQVk7MEdBR3RELFdBQVcsWUFIWixpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxZQUFZOzRGQUd0RCxXQUFXO2tCQVJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix5QkFBeUI7d0JBQ3pCLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLFlBQVksQ0FBQztvQkFDbEUsT0FBTyxFQUFFLEVBQUU7aUJBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TXlMaWJSb3V0ZXJNb2R1bGV9IGZyb20gXCIuL215LWxpYi5yb3V0ZXIubW9kdWxlXCI7XG5pbXBvcnQge0xvYWRlZEZyb21Sb3V0ZXJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbG9hZGVkLWZyb20tcm91dGVyL2xvYWRlZC1mcm9tLXJvdXRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7RmFsY29uVWlQZWRlc3RhbE1vZHVsZX0gZnJvbSBcIkBzYXAvZmFsY29uLXVpLXBlZGVzdGFsXCI7XG5pbXBvcnQge1BhcmVudENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYXJlbnQvcGFyZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2FkZWRGcm9tUm91dGVyQ29tcG9uZW50LFxuICAgIFBhcmVudENvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW015TGliUm91dGVyTW9kdWxlLCBGYWxjb25VaVBlZGVzdGFsTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYk1vZHVsZSB7XG59XG4iXX0=