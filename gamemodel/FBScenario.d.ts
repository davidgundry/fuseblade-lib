import { SimultanousScenario } from "gameserver/Scenario";
import { FBGameModel } from "./model/FBGameModel";
import { FBScenarioData } from "./data/FBScenarioData";
import { FBSaveData } from "./save/FBSaveData";
import { FBActions } from "./FBActions";
export declare class FBScenario extends SimultanousScenario<FBGameModel, FBScenarioData, FBSaveData, FBActions> {
    constructor(saveData: FBSaveData);
    create(): void;
    update(delta: number): void;
}
