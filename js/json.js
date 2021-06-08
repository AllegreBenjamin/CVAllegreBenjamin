// JavaScript Document
function getJSON(callback) {
	let request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				let responses = JSON.parse(this.responseText);
				
				// appel callback car appel terminé
				callback(responses);
			}
		};
		request.open("GET", "json/projet.json");
		request.send();
		
}