import { FBActions } from "./FBActions";
import { CommandFactory as CommandFactoryInterface } from "gameserver/CommandFactory";
import { FBCommand } from "./FBCommand";
import { FBScenarioData } from "./FBScenarioData";
export declare class FBCommandFactory implements CommandFactoryInterface<FBActions> {
    private _currentClient;
    private _currentTeam;
    private _scenarioData;
    private _allActions;
    constructor(scenarioData: FBScenarioData);
    setClient(clientID: number): void;
    setTeam(teamID: number): void;
    getCommand(t: FBActions, agentID?: number, teamID?: number): FBCommand;
    getCommandList(): number[];
}
