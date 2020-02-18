import { FPScenario } from "./FarmerPuzzle";
import { FBScenario } from "../gamemodel/FBScenario";
import { FBSaveData } from "../gamemodel/save/FBSaveData";
export declare class ScenarioFactory {
    createFusebladeScenario(saveData: FBSaveData): FBScenario;
    createFarmerPuzzleScenario(): FPScenario;
}
