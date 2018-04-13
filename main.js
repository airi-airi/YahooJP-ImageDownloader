var verbose = 0;

function debug(output){
	if(verbose){
		console.log(output);
	}
}

function doit() {
	var arr = new Array();
	var xx = document.getElementsByClassName("ProductImage__images");
	var yy = xx[0].children;
	for(var i = 0; i < yy.length; i++){
		var zz = yy[i].getElementsByTagName("img");
		var url = zz[0].src;
		arr.push(url);
	}
	
	uniqueArray = arr.filter(function(item, pos) {
		return arr.indexOf(item) == pos;
	})
	
	debug("start test");

	debug(uniqueArray[0]);
	
	/*
	var param = {collection : uniqueArray};
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
		console.log(response.farewell);
	});
	
	chrome.runtime.sendMessage({action: "dl2", ur:uniqueArray[0]}, function(response) {
		console.log(response.farewell);
	});
	*/
	
	chrome.runtime.sendMessage({action: "dl3", ur:uniqueArray}, function(response) {
		console.log(response.farewell);
	});
	
	debug("end test");
}


debug("woop2");
var x = document.getElementsByClassName("ProductImage__images");
var loc = document.getElementsByClassName("ProductTitle__title");

var butt = document.createElement("a");
butt.innerHTML = "download";


if(x.length >= 1){
	var btn = document.createElement("button");
    btn.innerText = "Download all images";
    btn.addEventListener("click", doit);
    loc[0].appendChild(btn);
}






