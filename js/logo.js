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
            let html = `<article id="${logo.id}" class="article col-lg-3 rounded mt-2 ms-5 me-5">
                <h5 class="text-center mt-2">${logo.titre}</h5>
                <div class="row mb-2">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-10 text-center"> 
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