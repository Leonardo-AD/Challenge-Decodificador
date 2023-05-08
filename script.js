// Importing variables
import { 
    cryptographButton, decryptionButton, 
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
        cryptograph()
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
        decryption()
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
                                            .replace(/e/gi, "enter")
                                            .replace(/i/gi, "imes")
                                            .replace(/a/gi, "ai")
                                            .replace(/o/gi, "ober")
                                            .replace(/u/gi, "ufat")
                                        } `
        }
        else{
            Swal.fire({
                title      : "Nenhuma mensagem para criptografar",
                text       : "Por favor, digite palavras com pelo menos uma das vogais: a - e - i - o - u",
                icon       : "error",
                background : "#F3F5FC"
            })
        }
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
                                            .replace(/enter/gi, "e")
                                            .replace(/imes/gi, "i")
                                            .replace(/ai/gi, "a")
                                            .replace(/ober/gi, "o")
                                            .replace(/ufat/gi, "u")
                                        } `
        }
        else{
            Swal.fire({
                title      : "Nenhuma mensagem para descriptografar",
                text       : "Por favor, digite palavras com pelo menos uma das vogais: a - e - i - o - u",
                icon       : "error",
                background : "#F3F5FC"
            })
        }
    }

    return
}

    // function regexpExec() {
    //     let regexp = new RegExp(/[*&$#@!++]/i)
    //     let n = regexp.exec(textField.value)   
        
    //     if(n){
    //         alert("Remova: " + n);
    //     }
    //     else{
    //         console.log("Encrypted")
    //     }

    //     return
    // }
    
    // regexpExec()

    // const sentence = 'A ticket to 大阪 costs ¥2000 👌.';

    // const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
    // console.log(sentence.match(regexpEmojiPresentation));
    // // Expected output: Array ["👌"]

    // const regexpNonLatin = /\P{Script_Extensions=Latin}+/gu;
    // console.log(sentence.match(regexpNonLatin));
    // // Expected output: Array [" ", " ", " 大阪 ", " ¥2000 👌."]

    // const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}/gu;
    // console.log(sentence.match(regexpCurrencyOrPunctuation));

    /*function verifyPunctuation(){
        const sentence = textField.value
        const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}|\p{Sm}|\p{Lu}/gu;
        console.log(sentence.match(regexpCurrencyOrPunctuation))
        // get uppercase \p{Lu}
        // get accent ?     pulse alert icon 
        //edit variables and function name

        // https://javascript.info/regexp-introduction#testing-regexp-test --- (Test with á é í ó ú)
        return
    }*/

    //verifyPunctuation()

    