alert('Hello world!');

// Types of var
var number = 2;
alert(typeof number); // print : « number »

var text = 'Mon texte';
alert(typeof text); // print : « string »

var aBoolean = false;
alert(typeof aBoolean); // print : « boolean »

alert(typeof nothing); // print : « undefined »

// Calculation
var number1 = 3, number2 = 2, result;
result = number1 * number2;
alert(result); // print : « 6 »

// Concatenation
var text = 'Bonjour ';
text += 'toi';
alert(text); // print « Bonjour toi ».

//Interaction with user
var start = 'Bonjour ', name, end = ' !', result;

name   = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result);

// Covert to other type
var first, second, result;

first = prompt('Entrez le premier chiffre :');
second = prompt('Entrez le second chiffre :');
result = parseInt(first) + parseInt(second);

alert(result);

// Function Confirm

if (confirm('Voulez-vous exécuter le code JavaScript de cette page ?')) {
    alert('Le code a bien été exécuté !');
}

// Exercice

var age;
age = parseInt(prompt('Entrez votre age : '));

if (age>0 && age<18) {
    alert("Vous n'êtes pas encore majeur.")
}
else if (age=>18 && age<50) {
    alert("Vous n'êtes pas encore majeur.")
}
else if (age=>50 && age<60){
    alert("Vous êtes senior mais pas encore retraité.")
}
else if (age=>60 && age<=120){
    alert("Vous êtes retraité, profitez de votre temps libre ! ")
}
else if(age>120){
    alert("Plus de 120 ans!")
}
else{
    alert("Error")
}
