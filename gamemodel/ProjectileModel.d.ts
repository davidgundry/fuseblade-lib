import { FBScenarioData } from "./FBScenarioData";
export declare class ProjectileModel {
    stateUpdate(data: FBScenarioData, delta: number): void;
    private _updateTimeToLive;
    private _checkAgentCollisions;
    private _agentCollision;
    private _sortNumber;
    private _removeProjectile;
}
