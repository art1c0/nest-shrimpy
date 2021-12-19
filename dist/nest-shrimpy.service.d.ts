import { NestShrimpyOptions } from './interfaces';
import { ShrimpyApiClient, ShrimpyWsClient } from 'shrimpy-node';
import { IErrorMessage } from 'shrimpy-node/lib/models/index';
interface INestShrimpyService {
    getShrimpyApiClient(publicKey?: string, privateKey?: string): ShrimpyApiClient;
    getShrimpyWsClient(errorCallback: (error: IErrorMessage) => void, token: string): ShrimpyWsClient;
}
export declare class NestShrimpyService implements INestShrimpyService {
    private nestShrimpyOptions;
    constructor(nestShrimpyOptions: NestShrimpyOptions);
    getShrimpyApiClient(publicKey?: string, privateKey?: string): ShrimpyApiClient;
    getShrimpyWsClient(errorCallback: (error: IErrorMessage) => void, token?: string): ShrimpyWsClient;
}
export {};
