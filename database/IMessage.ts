import { IUser } from "./IUser"

export interface IMessage {
	from: IUser;
	sentTo: IUser;
	time: String; // using Date() returns string, so...
	content: String;
	id: Number;
}
