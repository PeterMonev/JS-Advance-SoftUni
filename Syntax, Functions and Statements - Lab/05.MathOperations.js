function mathOperation(num1,num2,operator){
    'use strict';

    switch(operator){
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            console.log(num1 / num2);
            break;
        case '**':
            console.log(num1 ** num2);
            break;
        case '%':
            console.log(num1 % num2);
            break;                    
    }

}
mathOperation(5, 6, '+');