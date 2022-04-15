function equalArray(myArray1, myArray2) {
 
    let sum = 0;
    let isIdentical = true;
    for( let i = 0; i < myArray1.length; i++){
    
        if(myArray1[i] !== myArray2[i]){
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        isIdentical = false;
        break;
        }
        sum+= Number(myArray1[i]);
    
        
        
    
    }
 
    if(isIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
 
}

// dr variant

function solve(arr1, arr2) {
  let sum = 0;
 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
     return;
    } 
    sum += Number(arr1[i]);
  } 
  console.log(`Arrays are identical. Sum: ${sum}`);
 
 
}
solve(["10", "20", "30"], ["10", "20", "30"]);
solve(['1','2','3','4','5'], ['1','2','4','4','5'])