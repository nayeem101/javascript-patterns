//jshint esversion:9

class EvenetObserver {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
		console.log(`You are now subscribed to ${fn.name}`);
		console.log(this.observers);
	}

	unsubscribe(fn) {
		this.observers = this.observers.filter(item => {
			if (item !== fn) {
				return item;
			}
		});
		console.log(`You are now unsubscribed to ${fn.name}`);
		console.log(this.observers);
	}

	fire() {
		this.observers.forEach(item => {
			item.call();
		});
	}
}

const click = new EvenetObserver();

//event listeners
document.querySelector(".sub-ms").addEventListener("click", e => {
	click.subscribe(getCurMillisecs);
});

document.querySelector(".unsub-ms").addEventListener("click", e => {
	click.unsubscribe(getCurMillisecs);
});

document.querySelector(".fire").addEventListener("click", e => {
	click.fire();
});

//click handler
const getCurMillisecs = function() {
	console.log(`Current Millisecs: ${new Date().getMilliseconds()}`);
};
