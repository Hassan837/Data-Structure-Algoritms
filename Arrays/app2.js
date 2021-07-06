
let myArray = [9, 7, 75, 32, 3234, 5, 3];

/* By For Loop */
console.log("Using For loop");

for (let i=0; i < myArray.length; i++){

    if (myArray[i] == 3){
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}


/* By While Loop */
let j=0;
console.log("\nUsing While loop");

while (j < myArray.length){

    
    if (myArray[j] == 3){
        console.log("true");
        // return;
    }
    else {
        console.log("false");
        // return false;
    }
    j++;
}