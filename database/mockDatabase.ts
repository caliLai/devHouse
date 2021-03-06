import { IUser } from "./IUser";
import { IComment } from "./IComment";
import { IPost } from "./IPost";
import { IMessage } from "./IMessage";


const database: IDatabase = [
	users: IUser[
		jack23:{
			firstname: "Jack",
			lastname: "Lee",
			email: "jLeeLee@gmail.com",
			username: "jack23",
			password: "Hack123-4",
			id: 1,
			following: [2],
			followers: [2]
		},
		tester:{
			firstname: "tester",
			lastname: "tester",
			email: "tester@tester.com",
			username: "tester",
			password: "tester-123",
			id: 2,
			following: [1],
			followers: [1]
		},
	],
	posts: IPost[
		{
			user: tester,
			time: "Fri Mar 05 2021 20:37:55 GMT-0800 (Pacific Standard Time)",
			content: "Just testin around",
			commentChain: Number,
			comments: IComment[
				{
					user: jack23,
					time:"Fri Mar 05 2021 20:37:55 GMT-0800 (Pacific Standard Time)",
					content: "Take your time",
					replies: 0
				}
			],
			reposts: 0,
			likes: 1,
			id: 1
		}
	],
	messages: IMessage[
		{
			from: tester,
			sentTo: jack23,
			time: "Fri Mar 05 2021 21:37:55 GMT-0800 (Pacific Standard Time)",
			content: "Hey, how ya doin?",
			id: 1
		}
	]
]
