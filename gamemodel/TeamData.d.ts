import { AgentData, AgentSaveData } from "./AgentData";
export declare class TeamData {
    currentAgents: number;
    movesMade: number;
    isPlaying: boolean;
    killCount: number[];
    agents: AgentData[];
    load(save: TeamSaveData): void;
}
export declare class TeamSaveData {
    currentAgents: number;
    movesMade: number;
    isPlaying: boolean;
    killCount: number[];
    agents: AgentSaveData[];
}
