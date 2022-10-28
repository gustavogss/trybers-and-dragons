import Battle, { 
  PVE, 
  PVP } 
  from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

export const player1 = new Character('');

for (let i = 1; i < 5; i += 1) {
  player1.levelUp();
}

export const player2 = new Character('');
export const player3 = new Character('');

export const monster1 = new Monster();
export const monster2 = new Dragon();

export const pvp = new PVP(player2, player3);
export const pve = new PVE(player1, [monster1, monster2]);

export const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => { battle.fight(); });
};
