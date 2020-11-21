
var nicks = [],
    nick;

while (true) {
    nick = prompt('Entrez un prénom :');

    if (nick) {
        nicks.push(nick); // Ajoute le nouveau prénom ainsi qu'une espace juste après
    } else {
        break; // On quitte la boucle
    }
}

if (nicks.length>0) {
    alert(nicks.join(' '));
} else {
    alert("Aucun prénom n'a été entré");
}
