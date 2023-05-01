// Importing variables

import { cryptographButton, decryptionButton, textField } from "./export.js";

cryptographButton.addEventListener("click", () => {
    
    if(!textField.value || textField.value == " "){
        
        Swal.fire({
            title      : "Nenhuma mensagem para criptografar",
            text       : "Por favor, digite alguma mensagem com letras minúsculas, sem acentos e sem caracteres especiais.",
            icon       : "error",
            background : "#F3F5FC"
        })
    }
    else{
        cryptograph()
    }
})

function cryptograph(){
    return console.log("Encrypted")

    // let pattern = "/*-${}/"
    // let re = new RegExp(pattern);
    // console.log(re)
}