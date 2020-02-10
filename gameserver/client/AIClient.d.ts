import { ScenarioData } from "gameserver/ScenarioData";
import { Command } from "../Command";
import { CommandFactory } from "gameserver/CommandFactory";
import { GameModel } from "gameserver/GameModel";
export interface AIClient<D extends ScenarioData<S>, S, C> {
    create(clientID: number, teamID: number, gameModel: GameModel<D, S, C>, scenarioData: D): void;
    update(data: D, commandFactory: CommandFactory<C>, delta: number): Command<C>[] | Command<C>;
    scenarioEnded(data: D): void;
}
