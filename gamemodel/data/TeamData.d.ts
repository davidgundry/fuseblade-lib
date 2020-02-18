import { AgentData } from "./AgentData";
import { TeamSave } from "gamemodel/save/TeamSave";
export declare class TeamData {
    currentAgents: number;
    movesMade: number;
    isPlaying: boolean;
    agents: AgentData[];
    maxAgents: number;
    load(save: TeamSave, teamID: number): void;
}
