//LEMONDADE STAND

function checkNumberOfDays(){
	while (true){
	var daysToPlay;
	daysToPlay = prompt("Enter how many days you would like to play: 7, 14, or 21.");
	if ((daysToPlay == 7) || (daysToPlay == 14) || (daysToPlay == 21)){
	console.log("Great, you will be playing " + daysToPlay + " days!");
	return(daysToPlay);
	break
	}
	else {
	console.log("You can only enter 7, 14, or 21!");
	}
	}
	}

function adjustCups(cups){
	console.log("You currently have " + cups + " cups.");
	var cupInput;
	var cupCost = 1;
	var cupPurchase;
	cupInput = prompt("Each cup costs, " + cupCost + " how many cups would you like? Press /'/Enter/' or input /'/0/'/ if you don't need any cups.")
	if (cupInput > 0) {
	cupPurchase = cupInput * cupCost
	cups += cupInput;
	return(cups);
	}
	if ((cupInput == 0) || (cupInput == "")) {
	return(cups);
	}
	}

function reduceMoneyFromCups(cupInput, cupCost){
	var cupPurchase;
	cupPurchase = cupInput * cupCost
	return(cupPurchase);
}
	
function adjustLemons(lemons){
	console.log("You currently have " + lemons + " lemons.");
	var lemonInput;
	var lemonCost = 1;
	var lemonPurchase;
	lemonInput = prompt("Each lemon costs, " + lemonCost + " how many lemons would you like? Press /'/Enter/' or input /'/0/'/ if you don't need any lemons.")
	if (lemonInput > 0) {
	lemonPurchase = lemonInput * lemonCost
	lemons += lemonInput;
	return(lemons);
	}
	if ((lemonInput == 0) || (lemonInput == "")) {
	return(lemons);
	}
}

function reduceMoneyFromLemons(lemonInput, lemonCost){
	var lemonPurchase;
	lemonPurchase = lemonInput * lemonCost
	return(lemonPurchase);
}
	

function adjustSugars(sugars){
	console.log("You currently have " + sugars + " sugars.");
	var sugarInput;
	var sugarCost = 1;
	var sugarPurchase;
	sugarInput = prompt("Each sugar cost, " + sugarCost + " how many sugars would you like? Press /'/Enter/' or input /'/0/'/ if you don't need any sugars.")
	if (sugarInput > 0) {
	sugarPurchase = sugarInput * sugarCost
	sugars += sugarInput;
	return(sugars);
	}
	if ((sugarInput == 0) || (sugarInput == "")) {
	return(sugars);
	}
}


function reduceMoneyFromSugars(sugarInput, sugarCost){
	var sugarPurchase;
	sugarPurchase = sugarInput * sugarCost
	return(sugarPurchase);
}

function adjustIce(ice){
	console.log("You currently have " + ice + " ice.");
	var iceInput;
	var iceCost = 1;
	var icePurchase;
	iceInput = prompt("How much ice would you like? Press /'/Enter/' or input /'/0/'/ if you don't need any ice.")
	if (iceInput > 0) {
	ice += iceInput;
	return(ice);
	}
	if ((iceInput == 0) || (iceInput == "")) {
	return(ice);
	}
}

function reduceMoneyFromIce(sugarInput, sugarCost){
	var sugarPurchase;
	sugarPurchase = sugarInput * sugarCost
	return(sugarPurchase);
	}

function adjustPricePerCup(){
	console.log("You're current price per cup is " + pricePerCup + " cents." )
	while(true){
	var priceInput;
	priceInput = prompt("What would you like the new price per cup to be? Remember to keep it less than $1.")
	if ((priceInput < 99) && (priceInput > 0)){
	console.log("Great, your new price per cup of lemonade is " + priceInput);
	return(priceInput);
	break
	}
	else {
	console.log("You did not keep the price within the proper range.")
	}
	}
	}

//needs subtract inventory portion
function adjustLemonsPerPitcher(lemons){
	console.log("You currently have " + lemons + " lemons in your recipe.");
	while(true){
	var lemonInput;
	lemonInput = prompt("How many lemons would you like per pitcher?")
	if ((lemonInput < lemons) && (lemonInput > 0)){
	console.log("Great, you now  have " + lemonInput + " lemons in your recipe.");
	return(lemonInput);
	break
	}
	else {
	console.log("You do not have the proper amount of lemons. Try again.")
	}
	}
}

//needs subtract inventory portion
function adjustSugarsPerPitcher(sugars){
	console.log("You currently have " + sugars + " sugars in your recipe.");
	while(true){
	var sugarInput;
	sugarInput = prompt("How many sugars would you like per pitcher?")
	if ((sugarInput < sugars) && (sugarInput > 0)){
	console.log("Great, you now  have " + sugarInput + " sugars in your recipe.");
	return(sugarInput);
	break
	}
	else {
	console.log("You do not have the proper amount of sugars. Try again.")
	}
	}
	}

//needs subtract inventory portion
function adjustIcePerPitcher(ice){
	console.log("You currently have " + ice + " ice in your recipe.");
	while(true){
	var iceInput;
	iceInput = prompt("How much ice would you like per pitcher?")
	if ((iceInput < ice) && (iceInput > 0)){
	console.log("Great, you now  have " + iceInput + " ice in your recipe.");
	return(iceInput);
	break
	}
	else {
	console.log("You do not have the proper amount of ice. Try again.")
	}
	}
	}

function getWeather(){
	var weather = Array("Very Hot", "Hot", "Fair", "Cool", "Very Cold");
	weather = weather[Math.floor(Math.random()*weather.length)];
	return(weather);
}

function getCustomer(){
	var customer = Array("Buyer", "Cheapass");
	customer = customer[Math.floor(Math.random()*customer.length)];
	return(customer);
}

function runDay(){
	while (turns>0){
	var money;
	money = 100

	var profit;
	profit = 0

	var cups;
	cups = 0

	var lemons;
	lemons = 0

	var sugars;
	sugars = 0

	var ice;
	ice = 0

	var pricePerCup;
	pricePerCup = 25

	var daysToPlay;
	daysToPlay = 0

	var turns;
	var buyCups;
	var buyLemons;
	var buySugars;
	var buyIce;
	var changePrice;
	var changeLemonRecipe;
	var changeSugarsRecipe;
	var changeIceRecipe;
	var weatherToday;
	var customersToday;
	turns = checkNumberOfDays()
	buyCups = adjustCups()
	reduceMoneyFromCups = reduceMoneyFromCups()
	buyLemons = adjustLemons()
	buySugars = adjustSugars()	
	buyIce = adjustIce()	
	changePrice = adjustPricePerCup()	
	changeLemonRecipe = adjustLemonsPerPitcher()	
	changeSugarsRecipe = adjustSugarsPerPitcher()	
	changeIceRecipe = adjustIcePerPitcher()
	weatherToday = getWeather()
	customersToday = getCustomer()
	turns --
	}
}

runDay();

// How to store money or anything

// money = adjustMoney(money, whatevervariableholdsyourprofit)


// turns = checkNumberOfDays()
// while (turns>0){
// call buy stuff function
// call make lemonade
// call weather
// call customers
// turns = turns -1
// }




	