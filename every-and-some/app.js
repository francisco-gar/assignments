// need a for loop

numArr = [1,2,'3']

// var is = numArr.every(function(num){
//     return typeof num === 'number';
// });
// Array.prototype.every2 = function(callBack){
    // for(var i = 0; i < this.length; i++){
    //     if(callBack(this[i])){
    //         continue;
    //     } else {
    //         return false
    //     }
    // }
    // return true
// }

// }
 
//callBack is
function every(myArr, callBack){
    for(var i = 0; i < myArr.length; i++){
        if(callBack(myArr[i])){
            continue;
        } else {
            return false
        }
    }
    return true
}

var is = every(numArr, function(num){
    return typeof num === 'number';
})

console.log(is)