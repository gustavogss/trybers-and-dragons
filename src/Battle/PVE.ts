import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private player1: Fighter;
  private player2: SimpleFighter[];
  constructor(player1: Fighter, player2: SimpleFighter[]) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
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