// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function frequent(val)
{
    if(val.length == 0)
        return null;
    var valMap = {};
    var maxCount=1;
    for(var i = 0; i < val.length; i++)
    {
        var el = val[i];
        if(valMap[el] == null)
            valMap[el] = 1;
        else
            valMap[el]++;  

        if(valMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = valMap[el];
        }
    }
    return (`${maxEl} (${maxCount} times)`);
}

console.log(frequent(arr));