// scripts.js
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaur = dinosaur.toUpperCase();
console.log(dinosaur);

var textCharsAfter = text.replace('Velociraptor', dinosaur);
console.log(textCharsAfter);

var textCharsAfter2 = textCharsAfter.substr(0, textCharsAfter.length/2);
console.log(textCharsAfter2);