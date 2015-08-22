

function returning() {
  var x = 5;
  var y = 6;
  var z = x * (Math.random() * 5) +y;
console.log(z);
return z
}

var obj = (returning());
console.log(obj)
