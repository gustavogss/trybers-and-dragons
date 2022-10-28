"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this.player1 = player1;
        this.player2 = player2;
    }
    fight() {
        while (this.player1.lifePoints > 0
            && this.player2.some((player2) => player2.lifePoints > 0)) {
            this.player2.forEach((player2) => {
                player2.receiveDamage(this.player1.strength);
                player2.attack(this.player1);
            });
        }
        return super.fight();
    }
}
exports.default = PVE;
