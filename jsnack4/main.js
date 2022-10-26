let namesList = ['matteo', 'antonio', 'federico'];
let userName = prompt(`inserisci nome`);
let message;

for(i = 0; i < namesList.length; i++){
    const userList = namesList[i];

    if(userList === userName){
       message = `sei registrato nella lista` 
       break;
    }
    else{
        message = `non sei registrato nella lista`
    }
}
console.log(message);