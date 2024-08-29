export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) =>{
        if(!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
    return contagem;
}

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n');
}
function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
}
function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split([' ']);
    const palavrasDuplicadas = {};
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra);
            palavrasDuplicadas[palavraLimpa] =  (palavrasDuplicadas[palavraLimpa] || 0) + 1
        }
    })
    return palavrasDuplicadas;

}
