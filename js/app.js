function table() {
    $(document).ready(function () {
        $('#verbsTable').DataTable({
            language: {
                processing: "Tratamiento en curso...",
                search: "&nbsp;", //Buscar&nbsp;:
                lengthMenu: "_MENU_",
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
            lengthMenu: [[8, 10, 15], [8, 10, 15]],
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

var TableTest = '<table id="verbsTable" class="table table-hover table-striped table-bordered"> <thead class="table-dark"> <tr> <th>Name</th>  </tr> </thead> <tbody id="contenido"> </tbody> </table>';

const listVerbsAll = async () => {

    const response = await fetch("../json/words.json");
    const data = await response.json();

    test.innerHTML = TableTest;


    let tableBody = ``;
    data.forEach((word) => {
        tableBody +=
            `<tr>
                <td>
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center">${word.id} </div><button type="button" class="btn btn-outline-dark">Clic para ver</button>
                    </div>
                </td>  
            </tr>`;
    });
    contenido.innerHTML = tableBody;

    table();
};

const listVerbsRe = async () => {

    const response = await fetch("../json/words.json");
    const data = await response.json();

    test.innerHTML = TableTest;

    let tableBody = ``;
    data.forEach((word) => {
        if (word.word === "Regular") {
            tableBody +=
                `<tr>
            <td>${word.id}</td>
        </tr>`;
        }
    });
    contenido.innerHTML = tableBody;

    table();

};

const listVerbsIrre = async () => {

    const response = await fetch("../json/words.json");
    const data = await response.json();

    test.innerHTML = TableTest;

    let tableBody = ``;
    data.forEach((word) => {
        if (word.word === "Irregular") {
            tableBody +=
                `<tr>
            <td>${word.id}</td>
        </tr>`;
        }
    });
    contenido.innerHTML = tableBody;

    table();
};


window.addEventListener("load", function () {
    listCards();
});