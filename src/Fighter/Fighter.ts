import Energy from '../Energy';

export default interface Fighter {
  defense: number;
  energy?: Energy;
  lifePoints: number;
  strength: number;

  special(enemy: Fighter): void;
  attack(enemy: Fighter): void;
  levelUp(): void;

  receiveDamage(attackPoints: number): void;
}
