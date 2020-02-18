import { SimultanousGameModel } from "gameserver/GameModel";
import { FBScenarioData } from "../data/FBScenarioData";
import { FBSaveData } from "../save/FBSaveData";
import { FBActions } from "../FBActions";
import { FBCommand } from "../FBCommand";
import { AgentModel } from "./AgentModel";
import { CommandModel } from "./CommandModel";
import { ProjectileModel } from "./ProjectileModel";
export declare class FBGameModel extends SimultanousGameModel<FBScenarioData, FBSaveData, FBActions> {
    private _allActions;
    private _agentModel;
    private _projectileModel;
    private _commandModel;
    constructor(agentModel: AgentModel, projectileModel: ProjectileModel, commandModel: CommandModel);
    stateActionMapping(data: FBScenarioData): number[];
    applyCommands(data: FBScenarioData, commands: FBCommand[], delta: number): void;
    private _doStateUpdate;
    goalTest(data: FBScenarioData): boolean;
}
