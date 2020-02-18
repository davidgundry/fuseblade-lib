import { TeamSaveData } from "./TeamData";
export declare class FBSaveData {
    maxAgentsPerTeam: number;
    maxProjectiles: number;
    teams: TeamSaveData[];
    map: number[][][];
}
declare let defaultSaveData: FBSaveData;
export { defaultSaveData };
