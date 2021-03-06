interface IComment {
	user: User;
	time: Date;
	content: String;
	replies: Number;

	delete():void;
}
