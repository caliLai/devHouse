interface IMessage {
	from: User;
	sentTo: User;
	time: String; // using Date() returns string, so...
	content: String;
	id: Number;
}
