"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor() {
        super(...arguments);
        this._energyType = 'stamina';
    }
    static createdArchetypeInstances() {
        this._instancesWarrior += 1;
        return this._instancesWarrior;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Warrior;
Warrior._instancesWarrior = 0;
