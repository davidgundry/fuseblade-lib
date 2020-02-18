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
