
function createNode (value, rest) {
  return {
    value: value,
  rest: rest }
};


function arrayToList(arr) {
  var index = arr.length;
  firstNode = createNode(index,null);
  listBuild = firstNode;

for (i =(index-1); i >0; i--) {
  listBuild = createNode(i,listBuild)
}

console.log(listBuild)




  }

  arrayToList([1,2,3,4])


// for (i = n, i >=0; i--) {
