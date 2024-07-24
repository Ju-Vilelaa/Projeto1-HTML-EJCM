// script.js
    const input_senha = document.getElementById("password1");
    const input_confirmar_senha = document.getElementById("password2");
    const icon_senha = document.getElementById("iconeOlho_aberto1");
    const icon_confirmar_senha = document.getElementById("iconeOlho_aberto2");

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

function togglePassword_confirmar_senha() {
    let inputTypeisPassword = input_confirmar_senha.type === "password"
 
     if (inputTypeisPassword) {
         showPassword(input_confirmar_senha, icon_confirmar_senha)
     }
     else{
         hidePassword(input_confirmar_senha, icon_confirmar_senha)
     }
 }
