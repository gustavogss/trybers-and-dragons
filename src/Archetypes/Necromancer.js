"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._energyType = 'mana';
    }
    static createdArchetypeInstances() {
        this._instancesNecromancer += 1;
        return this._instancesNecromancer;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Necromancer;
Necromancer._instancesNecromancer = 0;
