import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _instancesNecromancer = 0;
  private _energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    this._instancesNecromancer += 1;
    return this._instancesNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
