import { OnInit } from '@angular/core';
import { ArtifactDetailsService, ICommonHeaderBannerInput } from "@sap/falcon-ui-pedestal";
import { ActivatedRoute } from "@angular/router";
import * as i0 from "@angular/core";
export declare class ParentComponent implements OnInit {
    private artifactDetailsService;
    private route;
    headerBannerInput: ICommonHeaderBannerInput;
    constructor(artifactDetailsService: ArtifactDetailsService, route: ActivatedRoute);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ParentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ParentComponent, "lib-parent", never, {}, {}, never, never, false>;
}
