import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instancesWarrior = 0;
  private _energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    this._instancesWarrior += 1;
    return this._instancesWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
