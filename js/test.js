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

    const response = await fetch("./json/cards.json");
    const data = await response.json();

    let tableBody = ``;
    data.forEach((cards) => {
        tableBody +=
            `<div class="col hoverCourse">
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

var TableTest = '<table id="verbsTable" class="table table-bordered table-hover"> <thead class="table-dark"> <tr> <th>Name</th>  </tr> </thead> <tbody id="contenido"> </tbody> </table>';

const listVerbsAll = async () => {

    const response = await fetch("./json/words.json");
    const data = await response.json();

    prueba.innerHTML = TableTest;

    let tableBody = ``;
    data.forEach((word) => {
        tableBody +=
            `<tr>
                <td class="hoverTransition" onclick="testT(test = ${word.id})">${word.test}
                </td>  
            </tr>`;
    });
    contenido.innerHTML = tableBody;

    table();
};




const listVerbsRe = async () => {

    const response = await fetch("./json/words.json");
    const data = await response.json();

    prueba.innerHTML = TableTest;

    let tableBody = ``;
    data.forEach((word) => {
        if (word.word === "Regular") {
            tableBody +=
                `<tr>
                <td class="hoverTransition" onclick="testT(test = ${word.id})">${word.test}
                </td>  
            </tr>`;
        }
    });
    contenido.innerHTML = tableBody;

    table();

};

const listVerbsIrre = async () => {

    const response = await fetch("./json/words.json");
    const data = await response.json();

    prueba.innerHTML = TableTest;

    let tableBody = ``;
    data.forEach((word) => {
        if (word.word === "Irregular") {
            tableBody +=
                `<tr>
                <td class="hoverTransition" onclick="testT(test = ${word.id})">${word.test}
                </td>  
            </tr>`;
        }
    });
    contenido.innerHTML = tableBody;

    table();
};


window.addEventListener("load", function () {
    listCards();
});



const testT = async (test) => {

    const response = await fetch("./json/words.json");
    const data = await response.json();

    let tableBody = ``;
    let seUsaEn = '';
    let InfinitiveC = ``; 
    let pastC = ``;
    let pastParticipleC = ``;
    let verbIngC = ``;
    data.forEach((word) => {

        if (test === word.id) {
            tableBody +=
                `<tr><td>${word.test}</td><td>${word.test}</td></tr>`;
            InfinitiveC +=
                `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${word.test}</span></li>
                <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${word.id}</span></li>
                <li class="list-group-item fw-bold">Significado: <span class="fw-lighter">${word.test}</span></li>`;
            pastC +=
                `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${word.test}</span></li>
                <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${word.id}</span></li>
                <li class="list-group-item fw-bold">Significado: <span class="fw-lighter">${word.test}</span></li>`;
            pastParticipleC +=
                `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${word.test}</span></li>
                <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${word.id}</span></li>
                <li class="list-group-item fw-bold">Significado: <span class="fw-lighter">${word.test}</span></li>`;
            verbIngC +=
                `<li class="list-group-item fw-bold">Verbo: <span class="fw-lighter">${word.test}</span></li>
                <li class="list-group-item fw-bold">Pronunciación: <span class="fw-lighter">${word.id}</span></li>
                <li class="list-group-item fw-bold">Significado: <span class="fw-lighter">${word.test}</span></li>`;
            seUsaEn += `${word.test2}`; 
        }
    });
    verbInfinitive.innerHTML = InfinitiveC;
    testIcon.innerHTML = seUsaEn;
    verbPast.innerHTML = pastC;
    verbPastParticiple.innerHTML = pastParticipleC;
    verbIng.innerHTML = verbIngC;
    testContenido.innerHTML = tableBody;
}