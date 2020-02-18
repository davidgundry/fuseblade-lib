import { FBScenarioData } from "gamemodel/data/FBScenarioData";
export declare class ProjectileModel {
    stateUpdate(data: FBScenarioData, delta: number): void;
    private _checkWallCollision;
    private _updateTimeToLive;
    private _checkAgentCollision;
    private _agentCollision;
    private _sortNumber;
    private _removeProjectile;
}
