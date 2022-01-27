let maxcount = 100
let count = 1
let arr = [];
let i = 0
console.log("The digits that are repeated twice are : ");
while ( count <= maxcount )
{
    if(count % 11 == 0)
    {
        arr[i] = count;
        i++;
    }
    count++;
}
console.log(arr);