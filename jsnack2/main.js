let firstWord=prompt('scrivi una parola');
let secondWord=prompt('scrivi una parola');
if(firstWord.length<secondWord.length){
    console.log("piu corta:",firstWord);
    console.log(secondWord);
}else{
    console.log("piu corta:",secondWord);
    console.log(firstWord);
}