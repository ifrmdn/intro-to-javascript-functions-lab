const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
 const isAdult = (age) => {
    if (age >= 18) {
        return  'Adult'; 
    } else {
            return 'Minor';
        }
    }

 console.log('Exercise 2 Result:', isAdult(21));

function isCharAVowel(char) {
    
     if ( char ==='a', 'e','i','o','u' ) {
         console.log('true');
     } else {
        console.log('false'); 
     }
}
console.log('Exercise 3 Result:', isCharAVowel('p'));

function generateEmail(name,domain) {
    return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'));

function greetUser(name, time) {
    return `Good ${time}, ${name}`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function calcTip(Amount, Pircentage) {
    return Amount*Pircentage/100;
}
console.log('Exercise 7 Result:', calcTip(50, 20));

// function convertTemperature(num, scale) {
//     if (scale ==='c'|| scale==='C');
//     return (num * 1.8) + 32; 
// } else {
//          return (num - 32) / 1.8; } 
function convertTemperature(num, scale) {
    if (scale === 'c' || scale === 'C') {
        return (num * 1.8) + 32;
    } else if (scale === 'f' || scale === 'F') {
        return (num - 32) / 1.8;
    }
}

         console.log('Exercise 8 Result:', convertTemperature(32,`c`));

         function basicCalculator(num1, num2, operation) {
            if (operation === 'add') {
                return num1 + num2;
            } else if (operation === 'subtract') {
                return num1 - num2;
            } else if (operation === 'multiply') {
                return num1 * num2;
            } else if (operation === 'divide') {
                return num1 / num2;
            }
        }
        
        console.log('Exercise 9 Result:', basicCalculator(10, 5, 'subtract'));
        