class FicheProjet {
    constructor(id, titre, desc, site, facebook, twitter, instagram, whatsApp, visuel_0, visuel_1, visuel_2, visuel_3, visuel_4, visuel_5){
        this.id = id;
        this.titre = titre;
        this.desc = desc;
        this.site = site;
        this.facebook = facebook;
        this.twitter = twitter;
        this.instagram = instagram;
        this.whatsApp = whatsApp;
        this.visuel_0 = visuel_0;
        this.visuel_1 = visuel_1;
        this.visuel_2 = visuel_2;
        this.visuel_3 = visuel_3;
        this.visuel_4 = visuel_4;
        this.visuel_5 = visuel_5;
        }

    static openFicheProjetPerso(y) {
        document.getElementById("overlay").style.display = "block"
        let fichierJson = "json/projets.json"
        getJSON(fichierJson, function(projets) {
            let html = `<article id="${projets[y].id}" class="col-lg-11 articleFiche">
                            <div class="headerArtFiche row">
                                <div class="col-lg-12">
                                    <h5>${projets[y].titre}</h5>
                                </div>
                                <div class="col-lg-12">
                                    <p>${projets[y].desc}</p>
                                    <p>${projets[y].site}</p>
                                </div>
                                <div class="rs col-lg-12">`
                                    if(projets[y].facebook !== ""){
                                        html += `<img alt="logo facebook" src="img/facebook.png">`
                                    }
                                    if(projets[y].twitter !== ""){
                                        html += `<img alt="logo twitter" src="img/twitter.png">`
                                    }
                                    if(projets[y].instagram !== ""){
                                        html += `<img alt="logo instagram" src="img/instagram.png">`   
                                    }    
                                    if(projets[y].whatsApp !== ""){
                                        html += `<img alt="logo whatsApp" src="img/whatsApp.png">`
                                    }
                                html += `</div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4">`
                                    if(projets[y].visuel_0 !== ""){ 
                                        html += `<a class="bulle-logo" alt="image ${projets[y].visuel_0}"><span><img src="fichiers/${projets[y].visuel_0}" alt="image"></span></a>`
                                       
                                    }
                                `</div>
                                <div class="col-lg-4">`
                                    if(projets[y].visuel_1 !== ""){ 
                                        html += `<a class="bulle-logo" alt="image ${projets[y].visuel_1}"><span><img src="fichiers/${projets[y].visuel_1}" alt="image"></span></a>`
                                    }
                            html += `</div>
                                
                                <div class="col-lg-4">`
                                if(projets[y].visuel_2 !== ""){ 
                                    html += `<a class="bulle-logo" alt="image ${projets[y].visuel_2}"><span><img src="fichiers/${projets[y].visuel_2}" alt="image"></span></a>`
                                }
                            html +=  `</div>
                                <div class="col-lg-4">`
                                if(projets[y].visuel_3 !== ""){ 
                                    html += `<a class="bulle-logo" alt="image ${projets[y].visuel_3}"><span><img src="fichiers/${projets[y].visuel_3}" alt="image"></span></a>`
                                }
                            html += `</div>
                                <div class="col-lg-4">`
                                    if(projets[y].visuel_4 !== ""){ 
                                        html += `<a class="bulle-logo" alt="image ${projets[y].visuel_4}"><span><img src="fichiers/${projets[y].visuel_4}" alt="image"></span></a>`
                                    }
                            html +=`</div>
                                <div class="col-lg-4">`
                                    if(projets[y].visuel_5 !== ""){ 
                                        html += `<a class="bulle-logo" alt="image ${projets[y].visuel_5}"><span><img src="fichiers/${projets[y].visuel_5}" alt="image"></span></a>`
                                    }
                            html += `</div>
                            </div>
                                <div class="btn col-lg-12">
                                    <button class="btnClose" id="btnClose">Fermer</button>
                                </div>
                           
                        </article>  
                        `
            document.getElementById("ficheProjet").innerHTML += html;
            const btnFiche = document.querySelector('#btnClose');
            btnFiche.addEventListener('click', (event) => {
                document.getElementById("overlay").style.display = "none";
                document.getElementById("ficheProjet").innerHTML = null
            })
        })
    }
}