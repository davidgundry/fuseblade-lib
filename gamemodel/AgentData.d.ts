import { Drawable, DrawableType } from "./FBScenarioData";
export declare class AgentData implements Drawable {
    team: number;
    inUse: boolean;
    x: number;
    y: number;
    z: number;
    velocityX: number;
    velocityY: number;
    speed: number;
    health: number;
    maxHealth: number;
    collideRadius: number;
    getX(): number;
    getY(): number;
    getZ(): number;
    isInUse(): boolean;
    getType(): DrawableType;
    getWidth(): number;
    getHeight(): number;
    load(save: AgentSaveData): void;
}
export declare class AgentSaveData {
    team: number;
    inUse: boolean;
    x: number;
    y: number;
    z: number;
    velocityX: number;
    velocityY: number;
    speed: number;
    health: number;
    maxHealth: number;
    collideRadius: number;
}
