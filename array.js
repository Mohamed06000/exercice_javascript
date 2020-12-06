// Setup arrays

var myArray_a = [42, 12, 6, 3];
var myArray_b = [42, 'Sébastien', 12, 'Laurence'];

// Print item
alert(myArray_b[1]); // print : « Sébastien »

// Change an item
myArray_a[1] = 'Clarisse';

myArray_a.push('Ludovic'); // add « Ludovic » end of array

myArray_a.pop(); // delete « Ludovic » in the end of array

myArray_a.unshift('Ludovic'); // add « Ludovic » beginning of array

myArray_a.shift(); // delete « Ludovic » in the beginning of the array


// Browse list

for (var i = 0; i < myArray_a.length; i++) {

    alert(myArray_a[i]);

}

//concat

var myArray = ['test1', 'test2'].concat(['test3', 'test4']);
alert(myArray);

//foreach

var myArray = ["C'est", "un", "test"];

myArray.forEach(function(value, index, array) {
    alert(
        'Index : ' + index + '\n' +
        'Valeur : ' + value
    );
});
