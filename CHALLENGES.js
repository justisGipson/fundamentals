// Fizz Buzz with a for loop

for(let i = 0; i<= 100; i++){
    var isDivByThree = i % 3 === 0;
    var isDivByFive = i % 5 === 0;
    if(isDivByThree && isDivByFive) {
        console.log('FizzBuzz');
    } else if (isDivByThree) {
        console.log('Fizz');
    } else if ( isDivByFive) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
};

