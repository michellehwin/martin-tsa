var resultsShown = 0;

// If yall have better ideas pleeeaase let me know 

function showResults(){

	strAdjs = ["Gloomy", "Pleasant", "Red", "Grassy", "Wooded", "Sandy", "Dark"];
	strNouns = ["Pines", "Ridge", "Hills", "Run", "Peak", "Forest", "Plain"];
	strTypes = ["Dr.", "St.", "Blvd.", "Ave.", "Ct.","Pkwy.","Rd."];
	dealerAdjs = ["Jones'", "Smith's", "Brown's", "Simmons'", "Johnson's"];
	dealer1Mids = ["Used and New", "Used", "Famous", "Quality", "Five-Star"];
	dealer2Mids = ["Car", "Motor Vehicle"]
	dealerNouns = ["Dealership","Shop"] 

	try{
		zip = parseInt($("#zip-area").val());
	}catch (e){
		console.log(e);
	}
	city = $("#city-area").val();
	state = $("#state-dropdown").val();

	// stateNum = $("#state-dropdown").prop('selectedIndex')+1;
	// var cityNum=0;
	// for(var i = 0; i < city.length; i++){
	// 	cityNum+=city.charCodeAt(i);
	// }

	var dealerships = [];
	var addresses = [];
	var proximities = [];

	Math.seedrandom(city+state+zip);

	for (var i = 0; i < 5; i++){
		secretNum=Math.floor(Math.random()*100000);
		dealerships.push(dealerAdjs[secretNum%dealerAdjs.length]+" "+dealer1Mids[secretNum%dealer1Mids.length]+" "+dealer2Mids[secretNum%dealer2Mids.length]+" "+dealerNouns[secretNum%dealerNouns.length]);
		addresses.push(strAdjs[secretNum%strAdjs.length]+" "+strNouns[secretNum%strNouns.length]+" "+strTypes[secretNum%strTypes.length]);
		proximities.push((secretNum-7)%300);

		strAdjs.splice(secretNum%strAdjs.length,1);
		strNouns.splice(secretNum%strNouns.length,1);
		dealerAdjs.splice(secretNum%dealerAdjs.length,1);
		dealer1Mids.splice(secretNum%dealer1Mids.length,1);

	}

	proximities.sort(function(a, b){return a-b});

	for(var i = 0; i <5; i++){
		$("#dealership-"+(i+1)).html(dealerships[i]);
		$("#address-"+(i+1)).html(addresses[i]);
		$("#proximity-"+(i+1)).html(proximities[i]+" mi.");
	}
	if(resultsShown==0){
		$("#div-results").collapse('show');
		resultsShown=1;
	}
}

$("#button-results").click(function () {
    showResults();
});

$('#div-results').on('shown.bs.collapse', function () {
  this.scrollIntoView({behavior: 'smooth'});
});