import { FBActions } from "./FBActions";
import { CommandFactory as CommandFactoryInterface } from "gameserver/CommandFactory";
import { FBCommand } from "./FBCommand";
export declare class FBCommandFactory implements CommandFactoryInterface<FBActions> {
    private _currentClient;
    private _currentTeam;
    private _scenarioData;
    private _allActions;
    constructor();
    setClient(clientID: number): void;
    setTeam(teamID: number): void;
    getCommand(t: FBActions, agentID?: number): FBCommand;
    getCommandList(): number[];
}
