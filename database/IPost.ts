interface IPost {
	user: User;
	time: String; // calling Date() returns a string
	content: String;
	commentChain: Number;
	comments: IComment[];
	reposts: Number;
	likes: Number;
	id: Number;

	delete():void;
	create():void;
}
