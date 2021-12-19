import { NestShrimpyService } from '../nest-shrimpy.service';
export declare class NestShrimpyClientController {
    private readonly nestShrimpyService;
    constructor(nestShrimpyService: NestShrimpyService);
    index(): Promise<import("shrimpy-node").IManagementStatus>;
}
