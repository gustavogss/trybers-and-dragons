import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
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

  fight(): number {
    let player = 0;
    while (player === 0) {
      if (this.player1AttackWins()) player = 1;
      else if (this.player2AttackWins()) player = -1;
    }
    return player;
  }
}