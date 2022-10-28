"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(player1, player2) {
        super(player1);
        this._player2 = player2;
    }
    player1AttackWins() {
        this.player.attack(this._player2);
        if (this._player2.lifePoints === -1) {
            return true;
        }
    }
    player2AttackWins() {
        this._player2.attack(this.player);
        if (this.player.lifePoints === -1) {
            return true;
        }
    }
    fight() {
        let player = 0;
        while (player === 0) {
            if (this.player1AttackWins())
                player = 1;
            else if (this.player2AttackWins())
                player = -1;
        }
        return player;
    }
}
exports.default = PVP;
