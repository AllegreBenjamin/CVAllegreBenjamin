class FicheLogo {
    constructor(id, titre, miniature, desc, site, png_0, png_1, png_2, png_3, png_4){
        this.id = id;
        this.titre = titre;
        this.miniature = miniature;
        this.desc = desc;
        this.site = site;
        this.png_0 = png_0;
        this.png_1 = png_1;
        this.png_2 = png_2;
        this.png_3 = png_3;
        this.png_4 = png_4;
    }

    static openFicheLogo(x) {
        document.getElementById("overlay").style.display = "block"
        let fichierJson = "json/logo.json"
        getJSON(fichierJson, function(logos) {
            let html = `<article id="${logos[x].id}" class="col-lg-11 articleFiche">
                            <div class="headerArtFiche row">
                                <div class="col-lg-12">
                                    <h5>${logos[x].titre}</h5>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <img src="fichiers/${logos[x].miniature}" alt="minature du logo">
                                    </div>
                                    <div class="col-lg-8">
                                        <p>${logos[x].desc}</p>
                                        <p>${logos[x].site}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mainFicheLogo row">
                                <div class="col-lg-3">
                                    <a class="bulle-logo"><img src="fichiers/${logos[x].png_0}" alt="image ${logos[x].png_0}"><span><img src="fichiers/${logos[x].png_0}" alt="image"></span></a>
                                </div>
                                <div class="col-lg-3">`
                                if(logos[x].png_1 !== ""){
                                    html += `<a class="bulle-logo"><img src="fichiers/${logos[x].png_1}" alt="image ${logos[x].png_1}"><span><img src="fichiers/${logos[x].png_1}" alt="image"></span></a>`
                                }
                       html += `</div>  
                                <div class="col-lg-3">`
                                if(logos[x].png_2 !== ""){
                                    html += `<a class="bulle-logo"><img src="fichiers/${logos[x].png_2}" alt="image ${logos[x].png_2}"><span><img src="fichiers/${logos[x].png_2}" alt="image"></span></a>`
                                }
                       html += `</div>
                                <div class="col-lg-3">`
                                if(logos[x].png_3 !== ""){
                                    html += `<a class="bulle-logo"><img src="fichiers/${logos[x].png_3}" alt="image ${logos[x].png_3}"><span><img src="fichiers/${logos[x].png_3}" alt="image"></span></a>`
                                }
                       html += `</div>
                                <div class="col-lg-3">`
                                if(logos[x].png_4 !== ""){
                                    html += `<a class="bulle-logo"><img src="fichiers/${logos[x].png_4}" alt="image ${logos[x].png_4}"><span><img src="fichiers/${logos[x].png_4}" alt="image"></span></a>`
                                }
                      html +=  `</div>
                            </div>
                                <div class="btn col-lg-12">
                                    <button class="btnClose" id="btnClose">Fermer</button>
                                </div>
                            
                        </article>`
                        // lanceur du carousel a refaire plus proprement
                        $(document).ready(function(){
                          $('.carousel').carousel({
                             interval: 1000,
                             cycle: true
                          });
                       });
            document.getElementById("ficheProjet").innerHTML += html;
            const btnFiche = document.querySelector('#btnClose');
            btnFiche.addEventListener('click', (event) => {
                document.getElementById("overlay").style.display = "none";
                document.getElementById("ficheProjet").innerHTML = null
            })
        })
    }
}