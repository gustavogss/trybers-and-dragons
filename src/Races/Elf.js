"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 99;
    }
    static createdRacesInstances() {
        this._instancesCreated += 1;
        return this._instancesCreated;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Elf;
Elf._instancesCreated = 0;
