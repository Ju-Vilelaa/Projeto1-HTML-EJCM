// script.js
const input_senha = document.getElementById("password");
const icon_senha = document.getElementById("iconeOlho_aberto");


function togglePassword_senha() {
console.log(input_senha.type)
let inputTypeisPassword = input_senha.type === "password"

if (inputTypeisPassword) {
    showPassword(input_senha, icon_senha)
}
else{
    hidePassword(input_senha, icon_senha)
}
}

function showPassword(input, icon){
input.setAttribute("type", "text")
icon.setAttribute("src", "../icones/olho_aberto.svg")
}
function hidePassword(input, icon){
input.setAttribute("type", "password")
icon.setAttribute("src", "../icones/olho_fechado.svg")
}
