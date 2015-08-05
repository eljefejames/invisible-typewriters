
function createNode (value, rest) {
  return {
    value: value,
    rest: rest }
  };


  function arrayToList(arr) {
    var index = arr.length;
    firstNode = createNode(index,null);
    listBuild = firstNode;

    for (i =(index-1); i >=0; i--) { /* this starts from the 2nd last element in array and adds a new object to the list */
      listBuild = createNode(arr[i],listBuild)
    }

    return(listBuild)
  };

arrayToList([10,20,30]);
// console.log(listBuild);
  //  console.log(listBuild)

  var listArray = [];
  function addEntry(value, rest) {
    listArray.push({
      value: value,
      rest: rest
    })
  }

  // for var map in listBuild

  // console.log(listBuild);



function listToArray (obj){
  var dataArray =[];
  for (var i = obj; i; i = i.rest) {
    dataArray.push(i.value);
  }
//console.log(dataArray)
}

listToArray(listBuild);
// console.log(listBuild);

function prepend (element, list) {
  var newList = {
    value: element,
    rest: listBuild}
  console.log(newList);
};

//prepend(5, listBuild);;


function nth (list, n) {
  if (!list) {
  return undefined;
}
else if (n==0) {
  return list.value
}
  else {
    return nth (list.rest, n-1)
  }};

console.log(listBuild.rest.rest.rest.rest); /* you access nested properties of the same name by adding repeated .notation


nth(listBuild,1)
//console.log(nth(listBuild,2))
