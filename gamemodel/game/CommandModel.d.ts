import { FBScenarioData } from "../data/FBScenarioData";
import { FBCommand } from "../FBCommand";
export declare class CommandModel {
    applyCommands(data: FBScenarioData, commands: FBCommand[], delta: number): void;
    private _agentActions;
}
