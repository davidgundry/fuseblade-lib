import { Command } from "gameserver/Command";
export declare enum FBActions {
    AgentMoveNorth = 0,
    AgentMoveSouth = 1,
    AgentMoveEast = 2,
    AgentMoveWest = 3,
    SpawnProjectile = 4
}
export declare class AgentCommand extends Command<FBActions> {
    agentID: number;
    constructor(commandType: FBActions, clientID: number, teamID: number, agentID: number);
}
