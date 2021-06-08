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
			let html = `<article id="${projet.id}" class="article col-lg-4">
				<h5>${projet.titre}</h5>
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