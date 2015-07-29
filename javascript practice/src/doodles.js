
var gridString = [];
var lineOdd = true;
var chessGrid = function (size){
  j = 9 * size;

  for (i = 0; i< j; i++) {
    if (i%2 == 0 && (i%(size+1) ==0)) {
      gridString[i] = "\n"
    }
    else if (!i%2 == 0 && (size%(j+1) ==0))
    {
      gridString[i] = "\n"
    }
    else if (i%2 == 0) {
      gridString[i] = "even";
    }
    else {
      gridString[i] = "odd";
    }
  }

  var str = gridString.join(" ");
  console.log(str);
  console.log(gridString);
};
chessGrid(5);
