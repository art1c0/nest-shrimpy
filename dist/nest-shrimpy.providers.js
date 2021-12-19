"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNestShrimpyProviders = void 0;
const constants_1 = require("./constants");
function createNestShrimpyProviders(options) {
    return [
        {
            provide: constants_1.NEST_SHRIMPY_OPTIONS,
            useValue: options,
        },
    ];
}
exports.createNestShrimpyProviders = createNestShrimpyProviders;
