alert('Hello world!');
var number = 2;
alert(typeof number); // print : « number »

var text = 'Mon texte';
alert(typeof text); // print : « string »

var aBoolean = false;
alert(typeof aBoolean); // print : « boolean »

alert(typeof nothing); // print : « undefined »

var number1 = 3, number2 = 2, result;
result = number1 * number2;
alert(result); // print : « 6 »

var text = 'Bonjour ';
text += 'toi';
alert(text); // print « Bonjour toi ».


var start = 'Bonjour ', name, end = ' !', result;

name   = prompt('Quel est votre prénom ?');
result = start + name + end;
alert(result);
