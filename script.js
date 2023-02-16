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

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

const showUsersButton = document.getElementById("btn");
showUsersButton.addEventListener("click", function (dataArray) {
  dataArray.forEach((data) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");

    const loginEl = document.createElement("h2");
    loginEl.textContent = data.login;

    let urlEl = document.createElement("a");
    urlEl.textContent = data.url;
    urlEl.setAttribute("href", "data.url");
  });
});
