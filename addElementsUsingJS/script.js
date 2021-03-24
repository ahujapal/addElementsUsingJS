var menuItems = [
    { 
	    name:"Tuna Salad",
	    price: 20,
		ingredients:["Tuna","Cucumber","Green Onions"]
	},
	{ 
	    name:"Chef Steak Speacial",
	    price: 23,
		ingredients:["Sirloin Steak","Mushroom","Onions"]
	},
	{ 
	    name:"Asian Salmon",
	    price: 24,
		ingredients:["Salmon","Noodles","Carrots","peas"]
	},
	{ 
	    name:"Balsamic Chicken",
	    price: 17,
		ingredients:["Chicken","Rice","Zucchini"]
	}

];

function returnMenuItem(menu){
	var random = Math.floor(Math.random()*(menu.length -1) + 1);
	console.log(random);
	return menu[random];
}

console.log(returnMenuItem(menuItems));

for(var i = 0; i < menuItems.length; i++){
	console.log(menuItems[i].name);
	console.log(menuItems[i].price);
	console.log(menuItems[i].ingredients);
}

for(var i = 0; i < menuItems.length; i++){
	
	var itemName = document.createElement("h3");
    var itemNameText = document.createTextNode(menuItems[i].name);
	itemName.appendChild(itemNameText)
	itemName.setAttribute("class","name");
	
	var itemPrice = document.createElement("h5");
    var itemPriceText = document.createTextNode("$" + menuItems[i].price);
	itemPrice.appendChild(itemPriceText)
	itemPrice.setAttribute("class","price");
	
	var itemIngredients = document.createElement("ul");
	for(var j = 0; j < menuItems[i].ingredients.length; j++){
		var ing = document.createElement("li");
		var ingredientText = document.createTextNode(menuItems[i].ingredients[j]);
		
		ing.appendChild(ingredientText);
		itemIngredients.appendChild(ing);
	    itemIngredients.setAttribute("class","ingridient");	
	}
	
	document.getElementById("menu").appendChild(itemName);
	document.getElementById("menu").appendChild(itemPrice);
	document.getElementById("menu").appendChild(itemIngredients);
}
