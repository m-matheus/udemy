function foundChar(stringSet, stringRec) {
    let char1 = new Set(stringSet);
    let char2 = new Set(stringRec);

    for (let char of char2) {
            char1.delete(char);
    }

    return char1;
}

let stringSet = prompt("");
let stringRec = prompt("");

let charLost = foundChar(stringSet, stringRec);
for (let char of charLost) {
    console.log(char);
}