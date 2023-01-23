let nomeInput = document.getElementById("nome");
let cognomeInput = document.getElementById("cognome");
let dataDiNascita = document.getElementById("data");
let loginButton = document.getElementById("loginButton");
let block1 = document.getElementById("block1");
let block2 = document.getElementById("block2");

const User = function () {
  this.nome = "";
  this.cognome = "";
  this.dataDiNascita = "";
};

console.log(User);

let newUser = new User();

loginButton.addEventListener("click", () => {
  let div = document.createElement("div");
  let table = `<table>
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Data di nascita</th>
                </tr>
                <tr>
                    <td>${newUser.nome = nomeInput.value}</td>
                    <td>${newUser.cognome = cognomeInput.value}</td>
                    <td>${newUser.dataDiNascita = dataDiNascita.value}</td>
                </tr>
                </table>`;
  div.innerHTML = table;
  document.body.appendChild(div);
});
