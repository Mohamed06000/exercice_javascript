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
