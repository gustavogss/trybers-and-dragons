"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor() {
        super(...arguments);
        this._maxLifePoints = 60;
    }
    static createdRacesInstances() {
        this._instancesCreated += 1;
        return this._instancesCreated;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Halfling;
Halfling._instancesCreated = 0;
