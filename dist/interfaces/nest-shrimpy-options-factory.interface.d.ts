import { NestShrimpyOptions } from './nest-shrimpy-options.interface';
export interface NestShrimpyOptionsFactory {
    createNestShrimpyOptions(): Promise<NestShrimpyOptions> | NestShrimpyOptions;
}
