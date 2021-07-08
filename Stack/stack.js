class Stack{
    constructor (){
        this.items = ["gulshan", "north"];
    }

    // push method
    push(item){
        this.items.push(item);
    }
    // pop method
    pop(item){
        this.items.pop();

    }
    // peek method
    peek(){
        console.log( this.items [this.items.length-1])

    }
    // isEmpty method
    isEmpty(){
if (this.items.length == 0){
    console.log(true);
}
else {console.log( false);}
    }
    // printstack method
    printStack(){
        for (let i=0; i<this.items.length;i++){
            console.log(this.items[i]);
        }

    }
                 
}

let myStack = new Stack();
// myStack.push('Karachi');
// myStack.push('Lahore');
// myStack.push('Islamabad');
// myStack.printStack();

//for pop function
// myStack.pop();
// myStack.printStack();

//for peep function
myStack.peek();
//myStack.printStack();

//for isEmpty function
 myStack.isEmpty();
// myStack.printStack();