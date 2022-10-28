"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Ranger extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._energyType = 'stamina';
    }
    static createdArchetypeInstances() {
        this._instancesRanger += 1;
        return this._instancesRanger;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Ranger;
Ranger._instancesRanger = 0;
