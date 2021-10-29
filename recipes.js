


let cocktailRecipes = [
	{
		name: "Martini",
		spirit: ["Gin", "Vodka"],
		liquer: "Dry Vermouth",
		juice: "Olive", 
		syrup: null,
		"egg white": false,
		bitters: null,
		garnish: ["Olives", "Lemon Twist"]
	},
	{
		name: "Negroni",
		spirit: "Gin",
		liquer: ["Sweet Vermouth", "Campari"],
		juice: null,
		syrup: null,
		"egg white": false,
		bitters: null,
		garnish: "Orange Twist"
	},
	{
		name: "Manhattan",
		spirit: ["Bourbon", "Rye Whiskey"],
		liquer: "Sweet Vermouth",
		juice: null,
		syrup: null,
		"egg white": false,
		bitters: "Angostura", 
		garnish: "Brandied Cherries"
	},
	{
		name: "Margarita",
		spirit: "Tequila",
		liquer: "Triple Sec",
		juice: "Lime Juice",
		syrup: "Simple Syrup",
		"egg white": false,
		bitters: null,
		garnish: "Lime Wedge"
	},
	{
		name: "Gimlet",
		spirit: ["Vodka", "Gin"],
		liquer: null,
		juice: "Lime Juice",
		syrup: "Simple Syrup",
		"egg white": false,
		bitters: null,
		garnish: "Lime Wedge"
	},
	{
		name: "Wiskey Sour",
		spirit: "Bourbon",
		liquer: null,
		juice: "Lemon Juice",
		syrup: "Simple Syrup",
		"egg white": true,
		bitters: null,
		garnish: ["Brandied Cherries", "Lemon Wedge"]
	},
	{
		name: "Old Fashioned",
		spirit: ["Bourbon", "Rye Whiskey"],
		liquer: null,
		juice: null, 
		syrup: "Demarura Syrup",
		"egg white": false,
		bitters: 'Angostura', 'Orange',
		garnish: ["Orange Twist", "Brandied Cherries"]
	},
	{
		name: 'Moscow Mule',
		spirit: 'Vodka',
		liquer: null,
		juice: "Lime Juice", 
		syrup: "Simple Syrup",
		"egg white": false,
		bitters: null,
		garnish: "Lime Wedge"
	},
	{
		name: "Cosmopolitan",
		spirit: "Vodka",
		liquer: "Triple Sec",
		juice: ["Lime Juice", "Cranberry"], 
		syrup: "Simple Syrup",
		"egg white": false,
		bitters: null,
		garnish: "Lime Wedge"
	},
	{
		name: "Mojito",
		spirit: "White Rum",
		liquer: null,
		juice: "Lime Juice",  
		syrup: "Simple Syrup",
		"egg white": false,
		bitters: null,
		garnish: "Lime Wedge"
	}
];

let sortedRecipes = [ ];
for (i=0; i<sortedRecipes.length; i++) {
	if (objects.spirit === "Vodka" || "Gin" || "Bourbon" || 
		"Rye" || "Scotch" || "Tequila" || "Mezcal" || "Rum") {
		sortedRecipes.push(cocktailRecipes[i]);
	};
};
for (j=0; j<sortedRecipes.length; j++) {
	if (objects.liquer === " Dry Vermouth" || "Sweet Vermouth" || 
		"Campari" || "Triple Sec") {
		sortedRecipes.push(cocktailRecipes[j]);
	};
};
for (k=0; k<sortedRecipes.length; k++) {
	if (objects.juice === "Lime Juice" || "Lemon Juice" || 
		"Cranberry Juice" || "Orange Juice" || "Olive Juice") {
		sortedRecipes.push(cocktailRecipes[k]);
	};
};
for (l=0; l<sortedRecipes.length; l++) {
	if (objects.syrup === "Simple Syrup" || "Demarura Syrup" || 
		"Agave Syrup" || "Honey Syrup" || "Ginger Syrup") {
		sortedRecipes.push(cocktailRecipes[l]);
	};
};
for (m=0; m<sortedRecipes.length; m++) {
	if (objects.eggWhite === true || objects.eggWhite === false) {
		sortedRecipes.push(cocktailRecipes[m]);
	};
};
for (n=0; n<sortedRecipes.length; n++) {
	if (objects.bitters === "Angostura" || " ")
}

console.log(sortedRecipes);

/*  Why not something like this..?  What is the advantage of looping?


const vodkaCocktails = sortedRecipes.filter(spirit => {
	return sortedRecipes.spirit.includes("Vodka")
});

*/










