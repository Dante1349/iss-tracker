"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SatelliteModule = void 0;
const common_1 = require("@nestjs/common");
const agent_control_middleware_1 = require("../middleware/agent-control.middleware");
const coordinates_module_1 = require("../coordinates/coordinates.module");
const satellite_controller_1 = require("./satellite.controller");
const satellite_service_1 = require("./satellite.service");
let SatelliteModule = class SatelliteModule {
};
SatelliteModule = __decorate([
    common_1.Module({
        imports: [coordinates_module_1.CoordinatesModule],
        controllers: [satellite_controller_1.SatelliteController],
        providers: [satellite_service_1.SatelliteService],
    })
], SatelliteModule);
exports.SatelliteModule = SatelliteModule;
//# sourceMappingURL=satellite.module.js.map