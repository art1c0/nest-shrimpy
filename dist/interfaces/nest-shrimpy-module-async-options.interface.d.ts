import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { NestShrimpyOptions } from './nest-shrimpy-options.interface';
import { NestShrimpyOptionsFactory } from './nest-shrimpy-options-factory.interface';
export interface NestShrimpyAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useExisting?: Type<NestShrimpyOptionsFactory>;
    useClass?: Type<NestShrimpyOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<NestShrimpyOptions> | NestShrimpyOptions;
}
