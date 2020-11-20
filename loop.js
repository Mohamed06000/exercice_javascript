
// With While
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


// With For

for (var i = 0, nicks = '', nick; true; i++) {
    nick = prompt('Entrez un prénom :');

    if (nick) {
        nicks += nick + ' ';
    } else {
        break;
    }
}

alert('Il y a ' + i + ' prénoms :\n\n' + nicks);
