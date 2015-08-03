function reverseArray(inputArray) {
  var newArray = [];
  for (i = inputArray.length -1; i >-1 ; i--) {
    console.log(i);
    newArray.push(inputArray[i]);
  }
  console.log(newArray);
};

//var input = [1,2,3,4,5];

// reverseArray(input)


var newPosition =0;
function reverseSameArray(niceArray) {
  var newArray =[];
  newArray =niceArray;
  for (i = niceArray.length -1; i >-1 ; i--) {
    console.log(niceArray);
    console.log(newArray);
    console.log(newPosition);
    niceArray[newPosition] = newArray[i];
    newPosition = newPosition + 1;
  }
}

reverseSameArray([11,12,13,14,15,16])
