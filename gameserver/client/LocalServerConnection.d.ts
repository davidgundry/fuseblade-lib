import { Command } from "gameserver/Command";
import { Event1 } from "engine/util/Event";
export declare class LocalServerConnection<T> {
    clientID: number;
    onCommandRecieved: Event1;
    recieveCommand(command: Command<T>): void;
}
