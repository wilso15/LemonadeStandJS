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

function reduceMoneyFromCups(cupInput, cupCost, money){
	var cupPurchase;
	cupPurchase = cupInput * cupCost
	money -= cupPurchase
	return(money);
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

function reduceMoneyFromLemons(lemonInput, lemonCost, money){
	var lemonPurchase;
	lemonPurchase = lemonInput * lemonCost
	money -= lemonPurchase
	return(money);
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

function reduceMoneyFromSugars(sugarInput, sugarCost, money){
	var sugarPurchase;
	sugarPurchase = sugarInput * sugarCost
	money -= sugarPurchase
	return(money);
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

function reduceMoneyFromIce(iceInput, iceCost, money){
	var icePurchase;
	icePurchase = iceInput * iceCost
	money -= icePurchase
	return(money);
	}

function adjustPricePerCup(pricePerCup){
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

function adjustLemonsPerPitcher(lemons){
	console.log("You currently have " + lemons + " lemons in your recipe.");
	while(true){
	var lemonInPitcher;
	lemonInPitcher = prompt("How many lemons would you like per pitcher?")
	if ((lemonInPitcher < lemons) && (lemonInPitcher > 0)){
	console.log("Great, you now  have " + lemonInPitcher + " lemons in your recipe.");
	return(lemonInPitcher);
	break
	}
	else {
	console.log("You do not have the proper amount of lemons. Try again.")
	}
	}
}

function reduceLemonsFromInventory(lemons){
	var lemonsPutInPitcher;
	lemonsPutInPitcher = lemons - lemonInPitcher
	return(lemonsPutInPitcher);
}

function adjustSugarsPerPitcher(sugars){
	console.log("You currently have " + sugars + " sugars in your recipe.");
	while(true){
	var sugarInPitcher;
	sugarInPitcher = prompt("How many sugars would you like per pitcher?")
	if ((sugarInPitcher < sugars) && (sugarInPitcher > 0)){
	console.log("Great, you now  have " + sugarInPitcher + " sugars in your recipe.");
	return(sugarInPitcher);
	break
	}
	else {
	console.log("You do not have the proper amount of sugars. Try again.")
	}
	}
	}

function reduceSugarsFromInventory(sugars){
	var sugarsPutInPitcher;
	sugarsPutInPitcher = sugars - sugarInPitcher
	return(sugarsPutInPitcher);
	}

function adjustIcePerPitcher(ice){
	console.log("You currently have " + ice + " ice in your recipe.");
	while(true){
	var iceInPitcher;
	iceInPitcher = prompt("How much ice would you like per pitcher?")
	if ((iceInPitcher < ice) && (iceInPitcher > 0)){
	console.log("Great, you now  have " + iceInPitcher + " ice in your recipe.");
	return(iceInPitcher);
	break
	}
	else {
	console.log("You do not have the proper amount of ice. Try again.")
	}
	}
	}
	
function reduceIceFromInventory(ice){
	var icePutInPitcher;
	icePutInPitcher = ices - iceInPitcher
	return(icePutInPitcher);
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
	var turns;
	turns = checkNumberOfDays()
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
	var reduceMoneyFromCupsPurchase;
	var reduceMoneyFromLemonsPurchase;
	var reduceMoneyFromSugarsPurchase;
	var reduceMoneyFromIcePurchase;
	var reduceLemonsFromInventory;
	var reduceSugarsFromInventory;
	var reduceIceFromInventory;
	buyCups = adjustCups(cups)
	reduceMoneyFromCupsPurchase = reduceMoneyFromCups()
	buyLemons = adjustLemons()
	reduceMoneyFromLemonsPurchase = reduceMoneyFromLemons()
	buySugars = adjustSugars()	
	reduceMoneyFromSugarsPurchase = reduceMoneyFromSugars()
	buyIce = adjustIce()	
	reduceMoneyFromIcePurchase = reduceMoneyFromIce()
	changePrice = adjustPricePerCup()	
	changeLemonRecipe = adjustLemonsPerPitcher()
	reduceLemonsFromInventory = reduceLemonsFromInventory()
	changeSugarsRecipe = adjustSugarsPerPitcher()	
	reduceSugarsFromInventory = reduceSugarsFromInventory()
	changeIceRecipe = adjustIcePerPitcher()
	reduceIceFromInventory = reduceIceFromInventory()
	weatherToday = getWeather()
	customersToday = getCustomer()
	turns = turns - 1
	}
}
	

runDay();





	