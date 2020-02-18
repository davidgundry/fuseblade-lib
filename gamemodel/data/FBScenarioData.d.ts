import { FBSaveData } from "../save/FBSaveData";
import { TeamData } from "./TeamData";
import { AgentData } from "./AgentData";
import { ScenarioData } from "gameserver/ScenarioData";
import ProjectileData from "./ProjectileData";
import { FloorType } from "./FloorType";
import { Drawable } from "./Drawable";
export declare class FBScenarioData implements ScenarioData<FBSaveData> {
    teams: TeamData[];
    map: FloorType[][][];
    drawables: Drawable[];
    projectiles: ProjectileData[];
    projectilesLength: number;
    maxProjectiles: number;
    get player(): AgentData;
    cloneFrom(source: FBScenarioData): void;
    clients(): number;
    load(saveData: FBSaveData): void;
    save(): FBSaveData;
    sortDrawables(): void;
}
