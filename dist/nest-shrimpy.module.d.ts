import { DynamicModule } from '@nestjs/common';
import { NestShrimpyOptions, NestShrimpyAsyncOptions } from './interfaces';
export declare class NestShrimpyModule {
    /**
     * Registers a configured NestShrimpy Module for import into the current module
     */
    static register(options: NestShrimpyOptions): DynamicModule;
    /**
     * Registers a configured NestShrimpy Module for import into the current module
     * using dynamic options (factory, etc)
     */
    static registerAsync(options: NestShrimpyAsyncOptions): DynamicModule;
    private static createProviders;
    private static createOptionsProvider;
}
