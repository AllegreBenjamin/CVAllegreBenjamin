class Logo {
    constructor(id, titre, miniature){
        this.id = id;
        this.titre = titre;
        this.miniature = miniature;
    }

    static get logoListElement(){
        return document.getElementById("logoList");
    }

    static displayListLogo(logos){
    
        logos.forEach(logo => {
            let html = `<article id="${logo.id}" class="article col-lg-4">
                <h5>${logo.titre}</h5>
                <div class="row">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10"> 
                        <img src="fichiers/${logo.miniature}" alt="visuel du logo ${logo.titre}">
                    </div>
                    <div class="col-lg-1"></div>
                </div>
                </article>
                `
            this.logoListElement.innerHTML += html;
        });
    }

    static addEventListenerListLogo(){
        let listLogo = this.logoListElement.getElementsByClassName('article')

        for(let x = 0;x < listLogo.length; x++){
            listLogo[x].addEventListener('click', () => {
                FicheLogo.openFicheLogo(x);
            })
        }
    }
}