import { FBSaveData } from "./FBSaveData";
import { TeamData } from "./TeamData";
import { AgentData } from "./AgentData";
import { ScenarioData } from "gameserver/ScenarioData";
import ProjectileData from "./ProjectileData";
export declare enum FloorType {
    Floor = 0,
    Void = 1
}
export declare class FBScenarioData implements ScenarioData<FBSaveData> {
    teams: TeamData[];
    map: FloorType[][];
    sortedAgents: AgentData[];
    projectiles: ProjectileData[];
    projectilesLength: number;
    maxAgentsPerTeam: number;
    maxProjectiles: number;
    cloneFrom(source: FBScenarioData): void;
    clients(): number;
    load(saveData: FBSaveData): void;
    save(): FBSaveData;
    sortAgents(): void;
}
