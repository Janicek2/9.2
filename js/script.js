var
    femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = "Piotrek"

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    console.log("Imię już jest dodane");
}

console.log(allNames);