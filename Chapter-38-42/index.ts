// FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a: number, b: number): number {
     if (b===0) return 1;
     if (b<0) return 1 / power(a, -b);
     let result = 1;
     for(let i =0; i<b; i++){
        result *= a;
     }
     return result;
}
console.log(power(2,3));
console.log(power(5,0));
console.log(power(2,-2));


