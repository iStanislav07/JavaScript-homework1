// TASK 1
var name = "Rafael";
var time = "09:00";
var place = "Lviv";
var event = prompt("What kind of meeting?");
	


while(event >= -Infinity && event < Infinity){
	console.log("Ops,problem, try write another word or phrases");
	event = prompt("What kind of meeting?");
	
}
	
console.log(name + " has a " + event + " today at " + time + " somwhere in " + place);

alert(name + " has a " + event + " today at " + time + " in " + place);

//TASK 2
var euro = 32.6;
var dollar = 27.2;


 var itemEuro;
 do {
   itemEuro = prompt("Enter ammount of EUR");
 } while (itemEuro.trim() === "" || isNaN(itemEuro)); 

 var itemDollar;
 do {
   itemDollar = prompt("Enter ammount of Dollar");
 } while (itemDollar.trim() === "" || isNaN(itemDollar)); 
 


 var Exchange_EurToGrn = itemEuro * euro;
 var Exchange_DolToGrn = itemDollar * dollar;
 var Exchange_EurToDol = euro / dollar;



 alert(itemEuro + " Euro equals " + Exchange_EurToGrn.toFixed(2) + " Grn" + ", " + itemDollar + " Dollars equals " + Exchange_DolToGrn.toFixed(2) + " Grn" + ", one Euro equals " + Exchange_EurToDol.toFixed(2) + " Dollars");
