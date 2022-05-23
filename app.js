/*const listUsers = async () => {
   const response = await fetch("./js/users.json");
   const users = await response.json();

   let tableBody = ``;
   users.forEach((user, index) => {
       tableBody += `<tr>
       <td class='centered'>${user.id}</td>
       <td class='centered'>${user.name}</td>
       <td class='centered'>${user.username}</td>
       <td class='centered'>${user.email}</td>
       <td class='centered'>${user.website}</td>
       </tr>`;
   });
   // document.getElementById("tableBody_Users").innerHTML = tableBody;
   tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
   listUsers();
});
// */

// const listUsers = async () => {
//     const response = await fetch("./json/courses.json");
//     const users = await response.json();

//     let tableBody = ``;
//     users.forEach((user) => {
//         tableBody += `<div class="col">
//         <div class="card h-100">
//           <div class="card-body">
//             <h5 class="card-title">${user.id}</h5>
//             <h6 class="card-subtitle mb-2 text-muted">${user.name}</h6>
//             <p class="card-text">${user.email}</p>
//             <a href="${user.website}" class="btn btn-primary">Go somewhere</a>
//           </div>
//         </div>
//       </div>`;
//     });
//     // document.getElementById("tableBody_Users").innerHTML = tableBody;
//     tableBody_Users.innerHTML = tableBody;
// };

// window.addEventListener("load", function () {
//     listUsers();
// });
/*


const listUsers = async () => {
    const response = await fetch("./json/courses.json");
    const data = await response.json();

    let tableBody = ``;
    data.forEach((course) => {

        if (course.address.street === "Victor Plains") {

            tableBody += `<div class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${course.id}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${course.name}</h6>
                        <p class="card-text">${course.email}</p>
                        <a href="${course.website}" class="btn btn-primary">Clic here</a>
                    </div>
                </div>
            </div>`;
        }


    });
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listUsers();
});*/




const listCourses = async () => {
    const response = await fetch("./json/courses.json");
    const data = await response.json();

    let tableBody = ``;
    data.forEach((course) => {
            tableBody += `<div class="col hoverCourse">
                <div class="card h-100">
                <a href="./courses/verbs.html" class="linkCourse">
                    <div class="card-body">
                        <h5>${course.id + '. ' + course.name}</h5>
                        <p>${course.description}</p>
                    </div>
                </div>
                </a>
            </div> `;
    });
    tableBody_Users.innerHTML = tableBody;
};

window.addEventListener("load", function () {
    listCourses();
});