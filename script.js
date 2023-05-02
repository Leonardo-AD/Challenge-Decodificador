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


    function verifyPunctuation(){
        const sentence = textField.value
        const regexpCurrencyOrPunctuation = /\p{Sc}|\p{P}|\p{Sm}|\p{Lu}/gu;
        console.log(sentence.match(regexpCurrencyOrPunctuation))
        // get uppercase \p{Lu}
        // get accent ?     pulse alert icon 

        // https://javascript.info/regexp-introduction#testing-regexp-test --- (Test with á é í ó ú)
        return
    }

    verifyPunctuation()
}