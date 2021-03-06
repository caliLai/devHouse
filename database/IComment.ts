import { IUser } from "./IUser"

export interface IComment {
	user: IUser;
	time: Date;
	content: String;
	replies: Number;

	delete():void;
}

