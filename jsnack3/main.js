let somma = 0;
for (i = 0;i < 10;i++) {
    const userNumber = Number(prompt('Inserisci un numero:'));
    somma += userNumber;
}
console.log(somma);