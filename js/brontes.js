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

	var dealerships = [];
	var addresses = [];
	var proximities = [];

	seed = (city+state+zip);
	seed = seed.toLowerCase();

	Math.seedrandom(seed);

	for (var i = 0; i < 5; i++){
		dealerships.push(dealerAdjs.splice((Math.floor(100000*Math.random()))%dealerAdjs.length,1)+" "+dealer1Mids.splice((Math.floor(100000*Math.random()))%dealer1Mids.length,1)+" "+dealer2Mids[(Math.floor(100000*Math.random()))%dealer2Mids.length]+" "+dealerNouns[(Math.floor(100000*Math.random()))%dealerNouns.length]);
		addresses.push(strAdjs.splice((Math.floor(100000*Math.random()))%strAdjs.length,1)+" "+strNouns.splice((Math.floor(100000*Math.random()))%strNouns.length,1)+" "+strTypes[(Math.floor(100000*Math.random()))%strTypes.length]);
		proximities.push(((Math.floor(100000*Math.random()))-7)%300);


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