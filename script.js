/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsersButton = document.getElementById("btn");
const output = document.getElementById("output");

showUsersButton.addEventListener("click", allData);

function allData() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      drawCards(result);
    })
    .catch((error) => console.error(error));
}
function drawCards(dataArray) {
  dataArray.forEach((data) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    cardWrapper.style.backgroundColor = "gray";
    cardWrapper.style.marginTop = "10px";

    let descriptionWrapper = document.createElement("div");
    descriptionWrapper.classList.add("description-wrapper");
    descriptionWrapper.style.padding = "10px";

    const loginEl = document.createElement("h2");
    loginEl.textContent = data.login;

    const urlEl = document.createElement("a");
    urlEl.textContent = data.url;
    urlEl.setAttribute("href", "data.url");
    urlEl.style.color = "white";

    descriptionWrapper.append(loginEl, urlEl);
    cardWrapper.append(descriptionWrapper);
    output.append(cardWrapper);

    function deleteMessage() {
      document.getElementById("message").innerHTML = "";
    }
    deleteMessage();
  });
}
