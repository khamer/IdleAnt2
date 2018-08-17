import { Game } from "../game";
import { Prestige } from "./prestige";
import { PrestigeGroup } from "./prestige-group";

export class Time extends PrestigeGroup {
  timeProducer: Prestige;
  timeBank: Prestige;

  constructor() {
    super("time", "Time");
  }

  declareStuff(game: Game) {
    this.timeProducer = new Prestige("tiPr", game.genExperiencePrice(15));
    this.timeBank = new Prestige("tiBa", game.genExperiencePrice(15));
    this.list = [this.timeProducer, this.timeBank];

    this.timeBank.onBuy = () => game.setMaxTimeBank();
  }
}
