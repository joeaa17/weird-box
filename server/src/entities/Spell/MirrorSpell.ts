import Spell from ".";
import { SPELL_NAME, PASSIVE_ACTION } from "../../../../shared/src/interfaces/Spell";
import Player from "../Player";
import PassiveSpell from "./PassiveSpell";

class MirrorSpell extends PassiveSpell {
  constructor(chargePoint: number, caster: Player) {
    super(SPELL_NAME.Mirror, caster, caster);
    this.power = chargePoint;
  }

  public *activate(origin: Spell): Generator<PASSIVE_ACTION, void, unknown> {
    if (origin.getPower() < this.getPower()) {
      yield PASSIVE_ACTION.Reflect;
      const caster = origin.getCaster();
      origin.setTarget(caster);
      origin.setCaster(this.target);
      caster.takeSpell(origin);
    } else {
      yield PASSIVE_ACTION.MirrorPierce;
      this.target.takeSpell(origin);
    }
  }
}

export default MirrorSpell;