var nicks = '',
    nick;

while (true) {
    nick = prompt('Entrez un prénom :');

    if (nick) {
        nicks += nick + ' '; // add new name
    } else {
        break;
    }
}

alert(nicks); //print all names
