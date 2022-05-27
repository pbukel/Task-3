/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const dataPlace = document.getElementById("output");

const click = document.getElementById("btn");

click.addEventListener("click", function (e) {
  e.preventDefault();
  loadDataFunction(ENDPOINT)
    .then(printing)
    .catch((error) => console.log(error));
});

function loadDataFunction(url) {
  return fetch(url, {
    method: "GET",
  }).then((resposne) => resposne.json());
}

function printing(data) {
  dataPlace.innerHTML = "";
  for (let x of data) {
    let newdivas = document.createElement("div");
    newdivas.classList.add("info");
    newdivas.innerHTML = `
    <img src="${x.avatar_url}">
    <div class="info_text">${x.login.toUpperCase()}</div>

    `;
    dataPlace.append(newdivas);
  }
}
