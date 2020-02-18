import { Command } from "gameserver/Command";
import { Event1 } from "engine/util/Event";
import { CommandFactory } from "gameserver/CommandFactory";
export declare class LocalServerConnection<C> {
    clientID: number;
    private _commandFactory;
    onCommandRecieved: Event1;
    get commandFactory(): CommandFactory<C>;
    set commandFactory(val: CommandFactory<C>);
    recieveCommand(command: Command<C>): void;
}
