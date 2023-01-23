// const oggettiRandomici ={
//     nome: "michele",
//     cognome : "iapichello",
//     anni: 2050,
//     professione: "rincoglionito",
//     hobby: ["scroccare","mangiare","giocare","gay"]
// }
// const oggettiRandom2 = {...oggettiRandomici};
// oggettiRandom2.nome = "alfio"
// console.log(oggettiRandomici);
// console.log(oggettiRandom2);

// // costruttore 
// const Person = function(){
//     this.name = '';
//     this.surname = '';
//     this.age = '';
//     this.address = '';
//     this.showName = function () {};
// }
// // costruttore con parametri
// const PersonParam = function(name,surname,age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.address = '';
//     this.showName = function () {};
// }

// let giuseppeChiarenza = new PersonParam("Giuseppe","Chiarenza",22)
// console.log(giuseppeChiarenza);

let userInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let loginButton = document.getElementById('loginButton')
let block1 = document.getElementById('block1')
let block2 = document.getElementById('block2')

const User = function(){
    this.name = "";
    this.privilegeLevel = -1 //usato per dare livelli di privilegi all'utente -1 non loggato 0 loggato 1 utente con privilegi per esempio
}

User.prototype.userType = null

const Admin = function(){

}

let currentUser = new User()
loginButton.addEventListener('click', () => {
    if(userInput.value === 'user' && passwordInput.value === '123'){
       currentUser.privilegeLevel = 0
       currentUser.userType = null
    }
})