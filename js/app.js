function table() {
    $(document).ready(function () {
        $('#verbsTable').DataTable({
            language: {
                processing: "Tratamiento en curso...",
                search: "&nbsp;", //Buscar&nbsp;:
                lengthMenu: "Verbos por página: _MENU_",
                info: "No. Verbs: _TOTAL_", //_START_ al _END_ de _TOTAL_
                infoEmpty: "No. Verbs: _TOTAL_",
                infoFiltered: " ", //(filtrado de _MAX_ elementos en total)
                infoPostFix: "",
                loadingRecords: "Cargando...",
                zeroRecords: "No se encontraron datos con tu busqueda",
                emptyTable: "Seleciona o busca que tipo de verbo necesitas. ",
                paginate: {
                    first: "Primero",
                    previous: "<",
                    next: ">",
                    last: "Ultimo"
                },
                aria: {
                    sortAscending: ": active para ordenar la columna en orden ascendente",
                    sortDescending: ": active para ordenar la columna en orden descendente"
                }
            },
            lengthMenu: [[15, 10], [15, 10]],
        });
    });
}

//Script Cards



const listCards = async () => {

    const response = await fetch("../json/cards.json");
    const data = await response.json();

    let tableBody = ``;
    data.forEach((cards) => {
        tableBody +=
            `<div class="col hoverTransition">
                <a href="${cards.url}" class="linkCourse">
                <div class="card mb-3" style="max-width: 18rem;">
                    <h5 class="card-header text-bg-dark">${cards.name}</h5>
                    <div class="card-body text-bg-light">
                      <p class="card-text">${cards.description}</p>
                    </div>
                  </div>
                </a>
            </div> `;
    });
    cardsList.innerHTML = tableBody;
};

const tableLib = '<table id="verbsTable" class="table table-bordered table-hover"> <thead class="table-dark"> <tr> <th>Name</th>  </tr> </thead> <tbody id="tableVerbsC"> </tbody> </table>';

const listVerbsAll = async () => {

    const response = await fetch("../json/words.json");
    const data = await response.json();

    tableLibC.innerHTML = tableLib; //tableLibC es el id del div al cual se le colocara la tabla

    let tableC = ``;
    data.forEach((dataC) => {
        tableC +=
            `<tr>
                <td class="hoverTransition" onclick="testT(test = ${dataC.id})">${dataC.word.verb.verb}
                </td>  
            </tr>`;
    });
    tableVerbsC.innerHTML = tableC;

    table();
};




const listVerbsRe = async () => {

    const response = await fetch("../json/words.json");
    const data = await response.json();

    tableLibC.innerHTML = tableLib; //tableLibC es el id del div al cual se le colocara la tabla

    let tableC = ``;
    data.forEach((dataC) => {
        if (dataC.word.verb.regular === true) {
            tableC +=
                `<tr>
                <td class="hoverTransition" onclick="testT(test = ${dataC.id})">${dataC.word.verb.verb}
                </td>  
            </tr>`;
        }
    });
    tableVerbsC.innerHTML = tableC;

    table();

};

const listVerbsIrre = async () => {

    const response = await fetch("../json/words.json");
    const data = await response.json();

    tableLibC.innerHTML = tableLib; //tableLibC es el id del div al cual se le colocara la tabla

    let tableC = ``;
    data.forEach((dataC) => {
        if (dataC.word.verb.irregular === true) {
            tableC +=
                `<tr>
                <td class="hoverTransition" onclick="testT(test = ${dataC.id})">${dataC.word.verb.verb}
                </td>  
            </tr>`;
        }
    });
    tableVerbsC.innerHTML = tableC;

    table();
};


window.addEventListener("load", function () {
    listCards();
});



const testT = async (test) => {

    const response = await fetch("../json/words.json");
    const data = await response.json();

    let infinitiveC = ``; 
    let pastC = ``;
    let pastParticipleC = ``;
    let verbIngC = ``;
    let meaningC = ``;

    let tagsC = ``;

    let extraOneC = ``;
    let extraTwoC = ``;
    let extraThreeC = ``;
    data.forEach((dataC) => {

        if (test === dataC.id) {  

            if(dataC.word.verb.irregular == true){
                tagsC +=  `<span class="badge text-bg-secondary">Irregular</span>`;
            }else{
                tagsC +=  `<span class="badge text-bg-secondary">Regular</span>`;
            }
            if(dataC.word.verb.british == true){
                tagsC +=  `&nbsp<span class="badge text-bg-primary">British verb</span>`;
            }else if(dataC.word.verb.american == true){
                tagsC +=  `&nbsp<span class="badge text-bg-danger">American verb</span>`;
            }else{
                tagsC +=  `&nbsp<span class="badge text-bg-secondary">British/American verb</span>`;
            }

            meaningC += `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${dataC.word.verb.meaning}</span></li>`;

            infinitiveC +=
                `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${dataC.word.verb.infinitive.verb}</span></li>
                <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${dataC.word.verb.infinitive.pronunciation}</span></li>`;

            pastC +=
                `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${dataC.word.verb.past.verb}</span></li>
                <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${dataC.word.verb.past.pronunciation}</span></li>`;

            pastParticipleC +=
                `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${dataC.word.verb.pastParticiple.verb}</span></li>
                <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${dataC.word.verb.pastParticiple.pronunciation}</span></li>`;
                
            verbIngC +=
            `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${dataC.word.verb.verbIng.verb}</span></li>
            <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${dataC.word.verb.verbIng.pronunciation}</span></li>`;

            extraOneC += `<li class="list-group-item fw-bold">Pharsal Verb: <span class="fw-lighter">${dataC.word.pharsalVerb}</span></li><li class="list-group-item fw-bold">Compound Noun: <span class="fw-lighter">${dataC.word.compoundNoun}</span></li>`;

            extraTwoC +=`<li class="list-group-item fw-bold">Infinitivo: <span class="fw-lighter">${dataC.word.gerundVsIng.infinitive}</span></li>
            <li class="list-group-item fw-bold">Verb + ing: <span class="fw-lighter">${dataC.word.gerundVsIng.gerund}</span></li>`; 

            extraThreeC +=` <li class="list-group-item fw-bold">Sustantivo: <span class="fw-lighter">${dataC.word.mode.noun}</span></li>
            <li class="list-group-item fw-bold">Adjetivo: <span class="fw-lighter">${dataC.word.mode.adjetive}</span></li>
            <li class="list-group-item fw-bold">Adverbio: <span class="fw-lighter">${dataC.word.mode.adverb}</span></li>`;

        }
    });
    meaning.innerHTML = meaningC; //Significado del verbo
    verbInfinitive.innerHTML = infinitiveC; //Verbo en Infinitive
    verbPast.innerHTML = pastC; //Verbo en Past
    verbPastParticiple.innerHTML = pastParticipleC; //Verbo en Past Participle
    verbIng.innerHTML = verbIngC; //Verbo en ing

    tags.innerHTML = tagsC;

    extraOne.innerHTML = extraOneC; //
    extraTwo.innerHTML = extraTwoC; //
    extraThree.innerHTML = extraThreeC; //
}