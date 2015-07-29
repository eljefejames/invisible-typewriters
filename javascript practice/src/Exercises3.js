//start of arrayer function
var rangeArray = [];
function range(start,end) {

  for (i = start; i < (end +1); i++) {
    rangeArray.push(i);
  }
  console.log(rangeArray);
  return(rangeArray);
};

//start of summer function
var total = 0;
function sum(sumArray) {

  for (i = 0; i <(sumArray.length); i++) {
    console.log(sumArray[i]);
    total = total +sumArray[i];
  }
  console.log(total)

};

// sum(range(1,10));


var stepRangeArray = [];
function rangeStep(start,end,step) {
  if (step) {
    for (i = start; i < (end +1); i+= step) {
      console.log(stepRangeArray);
      stepRangeArray.push(i);
    }
    return(stepRangeArray);
  }
  else {
    step = 1;
    for (i = start; i < (end +1); i+= step) {
      console.log(stepRangeArray);
      stepRangeArray.push(i);
    }
    return(stepRangeArray);
  }
};

// rangeStep(1,10,2);

rangeStep(1,10);

rangeStep(5,2,-1);
