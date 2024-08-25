//Variables del input y textarea
const textInp = document.querySelector("input");
const textArea = document.querySelector("textarea");
const textCopiar = document.querySelector(".btn_copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textInp.value);
    textArea.value = textoEncriptado;
    textInp.value = "";
}

function btnDesncriptar(){
    const textoDesencriptado = desencriptar(textInp.value);
    textArea.value = textoDesencriptado;
    textInp.value = "";
}

function btnCopiar(StringCopiar){
    const textoCopiado = textArea.value;
    return textCopiar;
}

function encriptar(stringEncriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1])

        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matriz.length; i++){
        if(stringDesencriptada.includes(matriz[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1], matriz[i][0])

        }
    }
    return stringDesencriptada;
}

function copiarTexto(){
    let text = textArea.value;
    navigator.clipboard.writeText(text).then(()=>{alert('Texto copiado');}).catch(err => {
        console.error('Erroral copiar el mensaje', err);
    });
}
