import { TeamData } from "./TeamData";
export declare class FBSaveData {
    maxAgentsPerTeam: number;
    maxProjectiles: number;
    teams: TeamData[];
    map: number[][];
}
declare let defaultSaveData: FBSaveData;
export { defaultSaveData };
