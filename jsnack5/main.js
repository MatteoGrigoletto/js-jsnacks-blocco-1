let array = [];

for (let i =0; i < 6; i++) {
    const userNumber = Number(prompt("inserisci un numero"))
    if (userNumber % 2 === 1) {
        array.push(userNumber);
        
        console.log(array);
    }
}