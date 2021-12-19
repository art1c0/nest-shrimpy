import { NestShrimpyOptions } from './interfaces';
export declare function createNestShrimpyProviders(options: NestShrimpyOptions): {
    provide: string;
    useValue: NestShrimpyOptions;
}[];
