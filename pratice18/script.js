let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

if (isNaN(a) || isNaN(b)) {
    // console.log("Please enter valid numbers.");
    throw SyntaxError("Please enter valid numbers.");
}

let sum = Number(a) + Number(b);

function main() {

    let x = 1;

    try {
        console.log("the sum is : " + sum * x);
        return true

    }
    catch (err) {
        console.log("An error occurred: " + err.message);
        return false;
    }
    finally {
        console.log("Execution completed.");
    }


}
let c = main();


// finally block will execute whether there is an error or not it  will run always.
//and also finall main purpouse it to if we return something from try or catch block finally will execute after that return statement.
//if there is no finally block then return statement will execute and function will terminate there only.