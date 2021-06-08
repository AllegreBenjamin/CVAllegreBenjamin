class FicheProjetFormation {
    constructor(id, titre, desc, date, livrable, zip_0, pdf_0, pdf_1, pdf_2, pdf_3, pdf_0_hover, pdf_1_hover, pdf_2_hover, pdf_3_hover, png_0, png_1, png_2, png_3, sql_0, video, site, evaluation){
		this.id = id;
		this.titre = titre;
		this.desc = desc;
		this.date = date;
		this.livrable = livrable;
        this.zip_0 = zip_0;
        this.pdf_0 = pdf_0;
        this.pdf_1 = pdf_1;
        this.pdf_2 = pdf_2;
        this.pdf_3 = pdf_3;
        this.pdf_0_hover = pdf_0_hover;
        this.pdf_1_hover = pdf_1_hover;
        this.pdf_2_hover = pdf_2_hover;
        this.pdf_3_hover = pdf_3_hover;
        this.png_0 = png_0;
        this.png_1 = png_1;
        this.png_2 = png_2;
        this.png_3 = png_3;
        this.sql_0 = sql_0;
		this.video = video;
        this.site = site;
		this.evaluation = evaluation;
	}

    static openFicheProjet(w){
        document.getElementById("overlay").style.display = "block"
        let fichierJson = "json/projetsFormation.json"
        getJSON(fichierJson, function(projets) {
            
            let html = `<article id="${projets[w].id}" class="col-lg-11 articleFiche">
                            <div class="headerArtFiche row">
                                <div class="col-lg-12">    
                                    <h5>${projets[w].titre}</h5>
                                    <p>${projets[w].desc}</p>
                                    <p>${projets[w].date}</p>
                                    <p>${projets[w].site}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="row fichiers-dll">`
                                            if(projets[w].livrable !== ""){
                                                html += `<div class="col-lg-6">
                                                    Livrable : <a class="bulle" href="fichiers/${projets[w].livrable}" download><img class="download" src="img/download.svg" alt="image download"><span>Fichier .zip contenent ${projets[w].livrable}</span></a>
                                                    `
                                                    if(projets[w].zip_0 !== ""){ 
                                                        html += `<a class="bulle" href="fichiers/${projets[w].zip_0}" download><img class="download" src="img/download.svg" alt="image download"><span>Fichier .zip contenent ${projets[w].zip_0}</span></a> `
                                                    }
                                                html += `</div>`
                                            } 
                                            if(projets[w].pdf_0 !== ""){
                                                html +=`<div class="col-lg-6">Pdf :` 
                                                    if(projets[w].pdf_0 !== ""){
                                                        html += `<a class="bulle-image" href="fichiers/${projets[w].pdf_0}" download><img class="pdf" src="img/pdf.png" alt="image pdf download"><span><img src="${projets[w].pdf_0_hover}" alt="image"></span></a>`
                                                    }
                                                    if(projets[w].pdf_1 !== ""){
                                                        html += `<a class="bulle-image" href="fichiers/${projets[w].pdf_1}" download><img class="pdf" src="img/pdf.png" alt="image pdf download"><span><img src="${projets[w].pdf_1_hover}" alt="image"></span></a>`
                                                    }
                                                    if(projets[w].pdf_2 !== ""){ 
                                                        html += `<a class="bulle-image" href="fichiers/${projets[w].pdf_2}" download><img class="pdf" src="img/pdf.png" alt="image pdf download"><span><img src="${projets[w].pdf_2_hover}" alt="image"></span></a>`
                                                    }
                                                    if(projets[w].pdf_3 !== ""){
                                                        html += `<a class="bulle-image" href="fichiers/${projets[w].pdf_3}" download><img class="pdf" src="img/pdf.png" alt="image pdf download"><span><img src="${projets[w].pdf_3_hover}" alt="image"></span></a>`
                                                    }
                                                html += `</div> ` 
                                            }   
                            html += `</div>
                                    <div class="row fichiers-dll">`
                                            if(projets[w].png_0 !== ""){
                                                html += `<div class="col-lg-6">Png : `
                                                        if(projets[w].png_0 !== ""){
                                                            html += `<a class="bulle-image" href="fichiers/${projets[w].png_0}" download><img class="png" src="img/png.svg" alt="image png download"><span><img src="fichiers/${projets[w].png_0}" alt="image"></span></a>`
                                                        }
                                                        if(projets[w].png_1 !== ""){
                                                            html += `<a class="bulle-image" href="fichiers/${projets[w].png_1}" download><img class="png" src="img/png.svg" alt="image png download"><span><img src="fichiers/${projets[w].png_1}" alt="image"></span></a>`
                                                        }
                                                        if(projets[w].png_2 !== ""){
                                                            html += `<a class="bulle-image" href="fichiers/${projets[w].png_2}" download><img class="png" src="img/png.svg" alt="image png download"><span><img src="fichiers/${projets[w].png_2}" alt="image"></span></a>`
                                                        }
                                                        if(projets[w].png_3 !== ""){
                                                            html += `<a class="bulle-image" href="fichiers/${projets[w].png_3}" download><img class="png" src="img/png.svg" alt="image png download"><span><img src="fichiers/${projets[w].png_3}" alt="image"></span></a>`
                                                        }   
                                        
                                                    html += `</div>`
                                            } 
                                            if(projets[w].js_0 !== ""){
                                                html += `<div class="col-lg-4">Js : `
                                                    if(projets[w].js_0 !== ""){
                                                        html += `<a class="bulle" href="fichiers/${projets[w].js_0}" download><img class="js" src="img/js.svg" alt="image js download"><span>Fichier .js contenent ${projets[w].js_0}</span></a>`
                                                    }
                                                    if(projets[w].js_1 !== ""){
                                                        html += `<a class="bulle" href="fichiers/${projets[w].js_1}" download><img class="js" src="img/js.svg" alt="image js download"><span>Fichier .js contenent ${projets[w].js_1}</span></a>`
                                                    }
                                                html += `
                                                </div>`
                                            }
                                            if(projets[w].sql_0 !== ""){
                                                html += `<div class="col-lg-4">Sql : `
                                                    if(projets[w].sql_0 !== ""){
                                                        html += `<a class="bulle" href="fichiers/${projets[w].sql_0}" download><img class="sql" src="img/sql.png" alt="image sql download"><span>Fichier .sql contenent ${projets[w].sql_0}</span></a>`
                                                    }
                                                html += `
                                                </div>`
                                            }
                                    html += `</div>
                                    <div class="row">
                                        <div class="col-lg-6 video">
                                            <iframe class="responsive" src="${projets[w].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            
                                        </div>
                                        <div class="row">
                                            <div class="btn col-lg-12">
                                                <button class="btnClose" id="btnClose">Fermer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">`
                                for(let x = 0; x < projets[w].evaluation.length; x++){
                                    html +=
                                    `
                                        <div class="article-${projets[w].id}">
                                            <p class="sujet">${projets[w].evaluation[x].sujet}</p>
                                            <p class="comment">${projets[w].evaluation[x].comment}</p>
                                        </div> `
                            }
                            html += `</div>
                            </div>  
                        </article>
                        `
            document.getElementById("ficheProjet").innerHTML += html;
            const btnFiche = document.querySelector('#btnClose');
            btnFiche.addEventListener('click', (event) => {
                document.getElementById("overlay").style.display = "none";
                document.getElementById("ficheProjet").innerHTML = null
            })
          
        });
    }

}