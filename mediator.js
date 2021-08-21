//jshint esversion:9
const User = function(name) {
	this.name = name;
	this.chatroom = null;
};

User.prototype = {
	send: function(msg, to) {
		this.chatroom.send(msg, this, to);
	},
	receive: function(msg, from) {
		console.log(`${from.name} to ${this.name}: ${msg}`);
	}
};

const Chatroom = function() {
	let users = {};

	return {
		register: function(user) {
			users[user.name] = user;
			user.chatroom = this;
		},
		send: function(msg, from, to) {
			if (to) {
				//single user msg
				to.receive(msg, from);
			} else {
				//mass msg
				for (var key in users) {
					if (users[key] !== from) {
						users[key].receive(msg, from);
					}
				}
			}
		}
	};
};

const Nayeem = new User("Nayeem");
const Suchu = new User("Suchana");
const Abir = new User("Abir");

const chatroom = new Chatroom();

chatroom.register(Nayeem);
chatroom.register(Suchu);
chatroom.register(Abir);

Nayeem.send("Hi, suchu.", Suchu);
Suchu.send("Hi, Nayeem. What's up", Nayeem);
Nayeem.send("I'm fine. What about you?", Suchu);
Suchu.send("I'm fine too!!", Nayeem);
Abir.send("Hello Everyone!!!");
Nayeem.send("kire ki khobor");
