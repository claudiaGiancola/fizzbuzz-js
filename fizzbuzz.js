

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    for (let i=1; i <= 100; i++) {
        if (i%3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
    
}

// Now we run the main function...
fizzbuzz();
