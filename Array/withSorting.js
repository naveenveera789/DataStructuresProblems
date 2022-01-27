let array = [];
for(var i=0; i<=9; i++)
{
    array.push(Math.floor(100 + Math.random()* 900));
}
console.log("Without Sorting : " + array);
array.sort();
console.log("With Sorting : " + array);
console.log("2nd Largest : " + array[8]);
console.log("2nd Smallest : " + array[1]);