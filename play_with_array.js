function getEven(arr) {
    
    let evenElementsArr = arr.filter(Number => Number%2 == 0);
    return evenElementsArr;
}


function multiplyByN(arr, n) {
    
   let elementsmultiplyByN=[];
   for(i=0; i<arr.length; i++){
       elementsmultiplyByN.push(arr[i]*n);
   }
   return elementsmultiplyByN;
}

function removeNthElement(arr, n) {
  
   arr.splice(n,1);
   return arr;
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}