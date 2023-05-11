// Importing variables
import { 
    cryptographButton, decryptionButton, hint,
    textField, showMessageArea, resultMessage,
    copyButton
} from "./export.js";


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

        let textToCheck = textField.value
        let regexp = new RegExp(/[!?@#/$%¨&+-.ºª;:*'"áéíóúãõâêîôûàèìòùäëïöüA-Z0-9]+/g)

        let checking = regexp.exec(textToCheck)

        if(!checking){

            cryptograph()
            textField.style.background = ""
        }
        else{

            Swal.fire({
                title      : `Não foi possível criptografar`,
                text       : `Remova o(s) seguinte(s) caractere(s): ${checking}`,
                icon       : `error`,
                background : `#F3F5FC`
            })

            textField.style.background = "#ffdddd"
            alertHint()
        }
    }
})


decryptionButton.addEventListener("click", () => {
    
    if(!textField.value || textField.value == " "){
        Swal.fire({
            title      : "Nenhuma mensagem para descriptografar",
            text       : "Por favor, digite alguma mensagem com letras minúsculas, sem acentos e sem caracteres especiais.",
            icon       : "error",
            background : "#F3F5FC"
        })
    }
    else{

        let textToCheck = textField.value
        let regexp = new RegExp(/[!?@#/$%¨&+-.ºª;:*'"áéíóúãõâêîôûàèìòùäëïöüA-Z0-9]+/g)

        let checking = regexp.exec(textToCheck)

        if(!checking){

            decryption()
            textField.style.background = ""
        }
        else{

            Swal.fire({
                title      : `Não foi possível descriptografar`,
                text       : `Remova o(s) seguinte(s) caractere(s): ${checking}`,
                icon       : `error`,
                background : `#F3F5FC`
            })

            textField.style.background = "#ffdddd"
            alertHint()
        }
    }
})


copyButton.addEventListener("click", () => {
    
    if(resultMessage){
        copyText()
    }
    else{
        Swal.fire({
            title      : "Nenhuma mensagem para copiar",
            text       : "Este campo está vazio",
            icon       : "error",
            background : "#F3F5FC"
        })
    }
})


function cryptograph(){

    let getText = textField.value.split(" ")

    for(let i = 0; i < getText.length; i++){

        if(getText[i].includes("a") || getText[i].includes("e") || getText[i].includes("i") || getText[i].includes("o") || getText[i].includes("u")){
            
            showMessageArea.style.display = "none"
            resultMessage.style.display   = "block"
            copyButton.style.display      = "inline"    
            
            resultMessage.innerHTML += `${getText[i]
                                            .replace(/e/g, "enter")
                                            .replace(/i/g, "imes")
                                            .replace(/a/g, "ai")
                                            .replace(/o/g, "ober")
                                            .replace(/u/g, "ufat")
                                        } `
            
            cryptographButton.innerHTML = "Criptografado!"
        }

        setTimeout(() => { cryptographButton.innerHTML = "Criptografar" }, 3000)   
    }

    return
}


function decryption(){
    let setText = textField.value.split(" ")
    
    for(let i = 0; i < setText.length; i++){

        if(setText[i].includes("a") || setText[i].includes("e") || setText[i].includes("i") || setText[i].includes("o") || setText[i].includes("u")){
            showMessageArea.style.display = "none"
            resultMessage.style.display   = "block"
            copyButton.style.display      = "inline"

            resultMessage.innerHTML += `${setText[i]
                                            .replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u")
                                        } `
                            
            decryptionButton.innerHTML = "Descriptografado!"
        }

        setTimeout(() => { decryptionButton.innerHTML = "Descriptografar" }, 3000)
    }

    return
}


function copyText(){
    
    let textToCopy = resultMessage.textContent
    
    if(textToCopy){

        navigator.clipboard.writeText(textToCopy)
        copyButton.innerHTML = "Copiado!"
        resultMessage.innerHTML = ""

        cryptographButton.addEventListener("click", () => {
            copyButton.innerHTML = "Copiar"
        })

        decryptionButton.addEventListener("click", () => {
            copyButton.innerHTML = "Copiar"
        })
    }
    
    return
}


function alertHint(){
                
    let alertHint = setInterval(() => {

        hint.style.visibility = (hint.style.visibility == "hidden"? "" : "hidden")
        
    }, 500)

    setTimeout(() => { 

        clearInterval(alertHint) 
        hint.style.visibility = ""

    }, 6000) 
    
    return
}
