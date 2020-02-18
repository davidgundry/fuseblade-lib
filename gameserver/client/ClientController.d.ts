import { ClientConnection } from "./ClientConnection";
import { Command } from "../Command";
import { ScenarioData } from "gameserver/ScenarioData";
import { GameModel } from "gameserver/GameModel";
import { CommandFactory } from "gameserver/CommandFactory";
export declare class ClientController<D extends ScenarioData<S>, S, C> {
    private _clients;
    private _clientsCount;
    private _commandFactory;
    constructor(maxClients: number, commandFactory: CommandFactory<C>);
    get clientsCount(): number;
    get maxClients(): number;
    get remainingSlots(): number;
    get nextClient(): number;
    get nextTeam(): number;
    get commandFactory(): CommandFactory<C>;
    addClient(client: ClientConnection<D, S, C>): boolean;
    setObserver(i: number, observer: boolean): void;
    createScenario(data: D, gameModel: GameModel<D, S, C>): void;
    sendDataUpdate(data: D, clientToAct?: number): void;
    getCommands(delta: number): Command<C>[];
    getCommandsOfClient(clientIndex: number, delta: number): Command<C> | Command<C>[];
}
