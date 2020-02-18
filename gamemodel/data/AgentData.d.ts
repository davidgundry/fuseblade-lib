import { Drawable, DrawableType } from "./Drawable";
import { AgentSave } from "gamemodel/save/AgentSave";
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
    load(save: AgentSave, team: number): void;
}
