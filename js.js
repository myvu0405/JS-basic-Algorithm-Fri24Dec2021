//Friday: 3rd Highest Number in Array
let arr=[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];

function find3rdHighestNo(arr) {
    let result=0;
    let finalArr =arr.slice();
    
    for (let i=0; i<3; i++) {
        result=Math.max(...finalArr);
        
        let idx=finalArr.indexOf(result);
        finalArr.splice(idx,1);
    }
    return result;
}

console.log(find3rdHighestNo(arr));