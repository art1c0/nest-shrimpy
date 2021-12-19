import { NestShrimpyOptions } from './interfaces';

import { NEST_SHRIMPY_OPTIONS } from './constants';

export function createNestShrimpyProviders(
  options: NestShrimpyOptions,
) {
  return [
    {
      provide: NEST_SHRIMPY_OPTIONS,
      useValue: options,
    },
  ];
}
