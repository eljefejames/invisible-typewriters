  var x = 2;

function isEven (number) {

}

function findEven(n, x) {
    if (n - x == 0) {
      console.log("Even")
  }
  else if (n - x == 1) {
    console.log("Odd");
  }
  else {
    findEven(n, x +2);

  }
}

/*findEven(50, x);*/
function countBs(text, character) {
var y = 0
    textLength = text.length;
  for (i= 0 ; i < (textLength); i++)
  {
  if (text.charAt(i) === character) {
    y = y + 1;
        }
  }
      console.log(y + " is the number of" + character);
};
dummyText = "BehudjBPJw2wBBB";

countBs(dummyText, "u")
