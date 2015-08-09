var objOne = new Object ();
var objTwo = new Object ();
var objThree = new Object ();

objOne.colour = "yellow";
objOne.sizer =6;
objTwo.colour = "yellow";
objTwo.sizer= 6;
objThree.colour = "red";

// console.log(objTwo);
  /* it appears to be necessary to use the bracket notation in order to extrct property values from a property name*/

  function PropsValues (obj1, obj1Props, obj2, obj2Props, n) {
    console.log(n);
    if (n == -1){
      console.log ("all done - it's a match")
      var bool = true;
      return true;
    }
    else
    {
      var bool = obj1Props[n] === obj2Props[n];
        PropsValues(obj1, obj1Props,obj2, obj2Props, n-1)
        if (bool == false) {
        console.log("false it's not a match");
         return false;
      }}


  }

/* find why a false match initially presents a true match statement */
  function deepEqualProps (value1, value2){
    var obj1PropsArray = [];
    var obj2PropsArray = [];
    for (var map in value1) {
      obj1PropsArray.push(value1[map]);
    }


    for (var map in value2) {
      obj2PropsArray.push(value2[map]);
    };

(PropsValues(value1, obj1PropsArray, value2, obj2PropsArray, 6)) ;
console.log((PropsValues(value1, obj1PropsArray, value2, obj2PropsArray, 6)));

    };

deepEqualProps(objOne,objThree);
