import { FBActions } from "./FBActions";
import { Command } from "gameserver/Command";
export declare class FBCommand extends Command<FBActions> {
    agentID: number;
    arg: any;
    constructor(commandType: FBActions, clientID: number, teamID: number, agentID: number);
}
