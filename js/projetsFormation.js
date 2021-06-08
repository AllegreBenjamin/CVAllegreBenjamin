class ProjetsFormation {
	constructor(id, titre, desc){
		this.id = id;
		this.titre = titre;
		this.desc = desc;
	}
	
	static get projetsListElement(){
		return document.getElementById("projetsList");
	}
	
	static displayListProjet(projets){
		
		projets.forEach(projet => {
			let html = `<article id="${projet.id}" class="article rounded col-lg-3 mt-2 ms-5 me-5">
							<h5 class="text-center mt-2">${projet.titre}</h5>
							<p>${projet.desc}</p>
						</article>`
			
			this.projetsListElement.innerHTML += html;
			
		});
	}

	static addEventListenerListProjet(){
		let listProjet = this.projetsListElement.getElementsByClassName('article')
	
		for(let w = 0; w < listProjet.length; w++){
			listProjet[w].addEventListener('click', () => {
				FicheProjetFormation.openFicheProjet(w);
			})
		}
	}
}