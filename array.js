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
