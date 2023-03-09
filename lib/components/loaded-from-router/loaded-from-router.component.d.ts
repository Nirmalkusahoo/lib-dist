import { OnInit } from '@angular/core';
import { ArtifactDetailsService, ICommonHeaderBannerInput } from "@sap/falcon-ui-pedestal";
import { ActivatedRoute } from "@angular/router";
import * as i0 from "@angular/core";
export declare class LoadedFromRouterComponent implements OnInit {
    private artifactDetailsService;
    private route;
    headerBannerInput: ICommonHeaderBannerInput;
    constructor(artifactDetailsService: ArtifactDetailsService, route: ActivatedRoute);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadedFromRouterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoadedFromRouterComponent, "lib-loaded-from-router", never, {}, {}, never, never, false>;
}
