//Write a function that checks if all elements in an array are positive using the every method.
function areAllPositive(numbers: number[]): boolean{
    return numbers.every((number) => number> 0);
}
//example usage:
const positiveNumbers: number[]= [1,2,3,4,5];
const mixedNumbers: number[]=[-1,2,3,4,5];
console.log("Are all elements positive in 'positiveNumbers'?",areAllPositive(positiveNumbers));
console.log("Are all elements positive in'mixedNumbers'?",areAllPositive(mixedNumbers));