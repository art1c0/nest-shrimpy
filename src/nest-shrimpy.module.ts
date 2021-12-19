import { Module, DynamicModule, Provider, Global } from '@nestjs/common';
import { NestShrimpyService } from './nest-shrimpy.service';
import {
  NEST_SHRIMPY_OPTIONS,
} from './constants';
import {
  NestShrimpyOptions,
  NestShrimpyAsyncOptions,
  NestShrimpyOptionsFactory,
} from './interfaces';
import { createNestShrimpyProviders } from './nest-shrimpy.providers';

@Global()
@Module({
  providers: [NestShrimpyService],
  exports: [NestShrimpyService],
})
export class NestShrimpyModule {
  /**
   * Registers a configured NestShrimpy Module for import into the current module
   */
  public static register(
    options: NestShrimpyOptions,
  ): DynamicModule {
    return {
      module: NestShrimpyModule,
      providers: createNestShrimpyProviders(options),
    };
  }

  /**
   * Registers a configured NestShrimpy Module for import into the current module
   * using dynamic options (factory, etc)
   */
  public static registerAsync(
    options: NestShrimpyAsyncOptions,
  ): DynamicModule {
    return {
      module: NestShrimpyModule,
      imports: options.imports,
      providers: [
        ...this.createProviders(options),
      ],
    };
  }

  private static createProviders(
    options: NestShrimpyAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(
    options: NestShrimpyAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: NEST_SHRIMPY_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    // For useExisting...
    return {
  provide: NEST_SHRIMPY_OPTIONS,
      useFactory: async (optionsFactory: NestShrimpyOptionsFactory) =>
        await optionsFactory.createNestShrimpyOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }

 }
