//Setup
var family = {
    self: 'Sébastien',
    sister: 'Laurence',
    brother: 'Ludovic',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};

// add item
family.uncle = 'Didier';

// check item
alert(family.sister);

//Browse object
for (var id in family) {

    alert(family[id]);

}

// return double items
function getCoords() {
    /* Script incomplet, juste pour l'exemple */

    return {
        x: 12,
        y: 21
    };
}

var coords = getCoords();

alert(coords.x); // 12
alert(coords.y); // 21
