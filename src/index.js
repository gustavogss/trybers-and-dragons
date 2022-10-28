"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBattles = exports.pve = exports.pvp = exports.monster2 = exports.monster1 = exports.player3 = exports.player2 = exports.player1 = void 0;
const Battle_1 = require("./Battle");
const Character_1 = require("./Character");
const Dragon_1 = require("./Dragon");
const Monster_1 = require("./Monster");
exports.player1 = new Character_1.default('');
for (let i = 1; i < 5; i += 1) {
    exports.player1.levelUp();
}
exports.player2 = new Character_1.default('');
exports.player3 = new Character_1.default('');
exports.monster1 = new Monster_1.default();
exports.monster2 = new Dragon_1.default();
exports.pvp = new Battle_1.PVP(exports.player2, exports.player3);
exports.pve = new Battle_1.PVE(exports.player1, [exports.monster1, exports.monster2]);
const runBattles = (battles) => {
    battles.forEach((battle) => { battle.fight(); });
};
exports.runBattles = runBattles;
