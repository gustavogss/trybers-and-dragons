import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instancesMage = 0;
  private _energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    this._instancesMage += 1;
    return this._instancesMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
