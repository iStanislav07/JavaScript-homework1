// TASK 1
var name = "Rafael";
var time = "09:00";
var place = "Lviv";
var event = prompt("What kind of meeting?","Dinner");
event = event.replace(/\d/g, '');

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

	itemEuro = prompt("Enter ammount of EUR", "100");
 	//Added lengh-cycle in form

		
	for (itemEuro; itemEuro.length >= 10; itemEuro = prompt("Enter ammount of EUR","100"))
	  {
		  alert("Ops, try please again");
	  }

		  itemEuro = itemEuro.replace(/\s/g, '')
		  itemEuro = itemEuro.replace(/\D/g,'')
		  itemEuro = parseInt(itemEuro); 		

		 

 	var itemDollar;
	  itemDollar = prompt("Enter ammount of Dollar");
 	
	for (itemDollar; itemDollar.length >= 10; itemDollar =       prompt("Enter ammount of Dollar"))
	  {
		alert("Ops, try please again");
	  }
		
  		  itemDollar = itemDollar.replace(/\s/g, '')
		  itemDollar = itemDollar.replace(/\D/g,'')
		  itemDollar = parseInt(itemDollar); 	


 var Exchange_EurToGrn = itemEuro * euro;
 var Exchange_DolToGrn = itemDollar * dollar;
 var Exchange_EurToDol = euro / dollar;



 alert(itemEuro + " Euro equals " + Exchange_EurToGrn.toFixed(2) + " Grn" + ", " + itemDollar + " Dollars equals " + Exchange_DolToGrn.toFixed(2) + " Grn" + ", one Euro equals " + Exchange_EurToDol.toFixed(2) + " Dollars");
