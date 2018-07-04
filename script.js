var number1 = -4
var number2 = 51

function numberChecking (number1,number2){
    return number1-number2;
}

var subtractNumbers = numberChecking(number1,number2);

    if(number1 > 100){ 
        console.log("Number 1 has many digits!");
    } else if(number1 <0){
        console.log("Number 1 is a Negative number");
   
    }if(number2 <20){
        console.log("Number2 is not a very high number");
    }if(number2 >50){
        console.log("Number 2 is a High number");
    }

console.log(subtractNumbers);
