import { FloorType } from "gamemodel/data/FloorType";
import { FBScenarioData } from "gamemodel/data/FBScenarioData";
export declare class AgentModel {
    private _floorWalkable;
    isWalkable(floorType: FloorType): boolean;
    updateAgents(data: FBScenarioData, delta: number): void;
    private _updateAgent;
}
