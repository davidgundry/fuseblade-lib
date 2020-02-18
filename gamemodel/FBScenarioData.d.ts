import { FBSaveData } from "./FBSaveData";
import { TeamData } from "./TeamData";
import { ScenarioData } from "gameserver/ScenarioData";
import ProjectileData from "./ProjectileData";
export declare enum FloorType {
    Floor = 0,
    Void = 1,
    Water = 2,
    Wall = 3,
    StepsDown = 4
}
export declare enum DrawableType {
    Agent = 0,
    Projectile = 1
}
export interface Drawable {
    getX(): number;
    getY(): number;
    getZ(): number;
    isInUse(): boolean;
    getType(): DrawableType;
    getWidth(): number;
    getHeight(): number;
}
export declare class FBScenarioData implements ScenarioData<FBSaveData> {
    teams: TeamData[];
    map: FloorType[][][];
    drawables: Drawable[];
    projectiles: ProjectileData[];
    projectilesLength: number;
    maxAgentsPerTeam: number;
    maxProjectiles: number;
    cloneFrom(source: FBScenarioData): void;
    clients(): number;
    load(saveData: FBSaveData): void;
    save(): FBSaveData;
    sortDrawables(): void;
}
