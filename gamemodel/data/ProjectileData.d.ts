import { Drawable, DrawableType } from "./Drawable";
export default class ProjectileData implements Drawable {
    x: number;
    y: number;
    z: number;
    velocityX: number;
    velocityY: number;
    damage: number;
    team: number;
    timeToLive: number;
    inUse: boolean;
    collideRadius: number;
    getX(): number;
    getY(): number;
    getZ(): number;
    isInUse(): boolean;
    getType(): DrawableType;
    getWidth(): number;
    getHeight(): number;
}
