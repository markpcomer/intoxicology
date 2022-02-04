let cocktailsArray = [
{	name: "Aperol Spritz",
	image: "Images/aperolspritz.jpg",
	liqueur: "Aperol",
	syrup: " ",
	juice: " ",
	soda: ["Prosecco", "Club Soda"],
	bitters: " ",
	'egg white': " "
},
{	name: "Aviation",
	image: "Images/aviation.jpg",
	spirit: "Gin",
	liqueur: ["Marashino", "Creme de Violette"],
	syrup: " ",
	juice: "Lemon Juice",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Boulevardier",
	image: "Images/boulevardier.jpg",
	spirit: "Whiskey",
	liqueur: ["Campari", "Sweet Vermouth"],
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "The Brooklyn",
	image: "Images/brooklyn.jpg",
	spirit: "Whiskey",
	liqueur: ["Dry Vermouth", "Marashino", "Amer Picon"],
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Cosmopolitan",
	image: "Images/cosmo.jpg",
	spirit: "Vodka",
	liqueur: "Triple Sec",
	syrup: " ",
	juice: ["Lime Juice", "Cranberry Juice"],
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Daiquiri",
	image: "Images/daiquiri.jpg",
	spirit: "Rum",
	liqueur: " ",
	syrup: "Agave",
	juice: "Lime Juice",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Espresso Martini",
	image: "Images/espressomartini.jpg",
	spirit: "Vodka",
	liqueur: "Coffee Liqueur",
	syrup: " ",
	juice: "Espresso",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "French 75",
	image: "Images/french75.jpg",
	spirit: "Gin",
	liqueur: " ",
	syrup: "Simple Syrup",
	juice: "Lemon Juice",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Gimlet",
	image: "Images/gimlet.jpg",
	spirit: "Gin",
	liqueur: " ",
	syrup: "Simple Syrup",
	juice: "Lemon Juice",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "The Great Pumpkin",
	image: "Images/greatpumpkin.jpg",
	spirit: "Whiskey",
	liqueur: ["Apple Brandy"],
	syrup: "Maple Syrup",
	juice: " ",
	soda: "Pumpkin Ale",
	bitters: " ",
	'egg white': "Yes"
},
{	name: "The Longshoreman",
	image: "Images/longshoreman.jpg",
	spirit: "Whiskey",
	liqueur: ["Averna Amaro", "Punt e Mes"],
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Manhattan",
	image: "Images/manhattan.jpg",
	spirit: "Whiskey",
	liqueur: "Sweet Vermouth",
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: "Angostura",
	'egg white': " "
},
{	name: "Margarita",
	image: "Images/margarita.jpg",
	spirit: "Tequila",
	liqueur: "Triple Sec",
	syrup: "Simple Syrup",
	juice: "Lime Juice",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Martini",
	image: "Images/martini.jpg",
	spirit: "Vodka",
	liqueur: "Dry Vermouth",
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{
	name: "Mojito",
	image: "Images/mojito.jpg",
	spirit: "Rum",
	liqueur: " ",
	syrup: "Simple Syrup",
	juice: "Lime Juice",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Moscow Mule",
	image: "Images/moscowmule.jpg",
	spirit: "Vodka",
	liqueur: " ",
	syrup: "Simple Syrup",
	juice: "Lime Juice",
	soda: "Ginger Beer",
	bitters: " ",
	'egg white': " "
},
{	name: "Negroni",
	image: "Images/negroni.jpg",
	spirit: "Gin",
	liqueur: ["Sweet Vermouth", "Campari"],
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Old Fashioned",
	image: "Images/oldfashioned.jpg",
	spirit: "Whiskey",
	liqueur: " ",
	syrup: "Demarura Syrup",
	juice: " ",
	soda: " ",
	bitters: ["Angostura", "Orange"],
	'egg white': " "
},
{	name: "Paloma",
	image: "Images/paloma.jpg",
	spirit: "Tequila",
	liqueur: " ",
	syrup: " ",
	juice: "Lime Juice",
	soda: "Grapefruit Soda",
	bitters: " ",
	'egg white': " "
},
{	name: "Sazerac",
	image: "Images/sazerac.jpg",
	spirit: "Cognac",
	liqueur: "Absinthe",
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: "Peychauds",
	'egg white': " "
},
{	name: "Sidecar",
	image: "Images/sidecar.jpg",
	spirit: "Brandy",
	liqueur: "Triple Sec",
	syrup: " ",
	juice: "Lemon Juice",
	soda: " ",
	bitters: " ",
	'egg white': " "
},
{	name: "Tom Collins",
	image: "Images/tomcollins.jpg",
	spirit: "Gin",
	liqueur: " ",
	syrup: "Simple Syrup",
	juice: "Lemon Juice",
	soda: "Club Soda",
	bitters: " ",
	'egg white': " "
},
{	name: "The Waldorf",
	image: "Images/waldorf.jpg",
	spirit: "Whiskey",
	liqueur: ["Absinthe", "Sweet Vermouth"],
	syrup: " ",
	juice: " ",
	soda: " ",
	bitters: "Angostura",
	'egg white': " "
},
{	name: "Whiskey Sour",
	image: "Images/whiskeysour.jpg",
	spirit: "Whiskey",
	liqueur: " ",
	syrup: "Simple",
	juice: "Lime",
	soda: " ",
	bitters: " ",
	'egg white': "Yes"
},
];

function cocktailCardsFunc (drink) {
	return `<div class="test-card">
			<div class="test-card-front">
			</div>
			<div>
				<img class="test-image" src=` + drink.image + `>
			</div>
			<div class="test-card-reveal fadeIn-bottom">
				<h3 class="test-cocktail-name">` + drink.name + `</h3>
				<ul class="test-cocktail-recipe">
					<li>` + drink.spirit +` </li>
					<li>` + drink.liqueur +` </li>
					<li>` + drink.syrup +` </li>
					<li>` + drink.juice +` </li>
					<li>` + drink.bitters +` </li>
				</ul>
			</div>
		</div>`
}



function renderCards(arr) {
	let cocktailCards =  arr.map(drink => cocktailCardsFunc(drink));
	document.getElementsByClassName('test-container')[0].innerHTML = cocktailCards;
	console.log('test-containter');
} 

/*
function renderCards(arr) {
	let cocktailCards = arr.map(functcocktailCardsFuncion(drink) {

	}
	
	) 
	document.getElementByClassName('test-container')[0].innerHTML = cocktailCards;
};
*/



/*	let add = function (x, y) {
		return x + y;
	};  

	let add = (x,y) => {return x +y};

function renderCards(arr) {
	let cocktailCards = arr.map(function(drink) {
		return cocktailCardsFunc(drink);
	});
	document.getElementByClassName('test-container')[0].innerHTML = cocktailCards;
};



*/

















