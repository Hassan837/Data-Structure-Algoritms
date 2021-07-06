let myArray =  [2, 3, 0, 1, 4, 6, 7, 7];

console.log("Given Array: " + myArray);

for (let i=0; i < myArray.length; i++){
    if (myArray[i] == 2){

        myArray[i] = 200;
    }

}

console.log("Array after replacing 2 with 200  : " + myArray);
