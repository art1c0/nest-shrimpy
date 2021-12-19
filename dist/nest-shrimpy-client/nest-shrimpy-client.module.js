"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestShrimpyClientModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nest_shrimpy_client_controller_1 = require("./nest-shrimpy-client.controller");
const nest_shrimpy_module_1 = require("../nest-shrimpy.module");
let NestShrimpyClientModule = class NestShrimpyClientModule {
};
NestShrimpyClientModule = __decorate([
    common_1.Module({
        controllers: [nest_shrimpy_client_controller_1.NestShrimpyClientController],
        imports: [
            config_1.ConfigModule.forRoot(),
            nest_shrimpy_module_1.NestShrimpyModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => {
                    return {
                        privateKey: configService.get('SHRIMPY_PRIVATE_KEY'),
                        publicKey: configService.get('SHRIMPY_PUBLIC_KEY'),
                        token: configService.get('SHRIMPY_TOKEN'),
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
    })
], NestShrimpyClientModule);
exports.NestShrimpyClientModule = NestShrimpyClientModule;
