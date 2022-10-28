"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._energyType = 'mana';
    }
    static createdArchetypeInstances() {
        this._instancesMage += 1;
        return this._instancesMage;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Mage;
Mage._instancesMage = 0;
