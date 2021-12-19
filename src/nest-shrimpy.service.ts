import { Injectable, Inject } from '@nestjs/common';
import { NEST_SHRIMPY_OPTIONS} from './constants';
import { NestShrimpyOptions } from './interfaces';
import { ShrimpyApiClient, ShrimpyWsClient } from 'shrimpy-node';
import { IErrorMessage } from 'shrimpy-node/lib/models/index';
// tslint:disable-next-line:no-var-requires
const Shrimpy = require('shrimpy-node');

interface INestShrimpyService {
  getShrimpyApiClient(
    publicKey?: string,
    privateKey?: string,
  ): ShrimpyApiClient;
  getShrimpyWsClient(
    errorCallback: (error: IErrorMessage) => void,
    token: string,
  ): ShrimpyWsClient;
}

@Injectable()
export class NestShrimpyService implements INestShrimpyService {
  constructor(
    @Inject(NEST_SHRIMPY_OPTIONS) private nestShrimpyOptions: NestShrimpyOptions,
  ) {}

  getShrimpyApiClient(
    publicKey?: string,
    privateKey?: string,
  ): ShrimpyApiClient {
    return new Shrimpy.ShrimpyApiClient(
      publicKey || this.nestShrimpyOptions.publicKey,
      privateKey || this.nestShrimpyOptions.privateKey,
    );
  }

  getShrimpyWsClient(
    errorCallback: (error: IErrorMessage) => void,
    token: string = '',
  ): ShrimpyWsClient {
    return new Shrimpy.ShrimpyWsClient(
      errorCallback,
      token || this.nestShrimpyOptions.token,
    );
  }
}
