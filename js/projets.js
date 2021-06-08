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
            let html = `<article id="${projet.id}" class="article rounded col-lg-3 mt-2 ms-5 me-5">
                <h5 class="text-center mt-2">${projet.titre}</h5>
                <div class="row mb-2">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10 text-center">
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