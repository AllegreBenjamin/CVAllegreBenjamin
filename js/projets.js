class Projets {
    constructor(id, titre, visuel_0){
        this.id = id;
        this.titre = titre;
        this.visuel_0 = visuel_0;
    }
    
    static get projetsElement(){
        return document.getElementById("projetsPersoList");
    }

    static displayListProjetPerso(projets){
        projets.forEach(projet => {
            let html = `<article id="${projet.id}" class="article col-lg-4">
                <h5>${projet.titre}</h5>
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10">
                        <img class="col-lg-10" src="fichiers/${projet.visuel_0}" alt="premier vue du projet ${projet.visuel_0}">
                    </div>
                    <div class="col-lg-1"></div>
                </div>
                </article>`

            this.projetsElement.innerHTML += html;
        });
    }

    static addEventListenerListProjetPerso(){
        let listProjetPro = this.projetsElement.getElementsByClassName('article')
        console.log(listProjetPro)
        for(let y = 0; y < listProjetPro.length; y++){
            listProjetPro[y].addEventListener('click', () => {
                FicheProjet.openFicheProjetPerso(y);
            })
        }
    }
}