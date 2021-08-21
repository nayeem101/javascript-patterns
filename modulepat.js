//jshint esversion:9

console.log("connected");

//*basic structure
/* (function() {
	//declare private vars and functions

	return {
		//Declare public var and functions
	};
})(); */

//*Standard module pattern
const UICtrl = (function() {
	let text = "Hello World, Stay at home";

	const changeText = function() {
		const element = document.querySelector("h2");
		element.textContent = text;
	};

	return {
		callChangeText: function() {
			changeText();
			console.log(text);
		}
	};
})();

UICtrl.callChangeText();

//*REVEALING MODULE PATTERN*//
//==========================//
const ItemCtrl = (function() {
	let data = [];

	function add(item) {
		data.push(item);
		console.log("Item Added", data);
	}

	function get(id) {
		return data.find(item => {
			return item.id === id;
		});
	}

	return {
		add,
		get
	};
})();

ItemCtrl.add({ id: 1, name: "Nobita" });
ItemCtrl.add({ id: 2, name: "Suzuka" });
ItemCtrl.add({ id: 3, name: "Doraemon" });
ItemCtrl.add({ id: 4, name: "Shinchan" });

console.log(ItemCtrl.get(2));
