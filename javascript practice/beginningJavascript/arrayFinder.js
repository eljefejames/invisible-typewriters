

  var count = 0;
  var cdRom = {
  Name: 'CD',
  Value :1
  };
  var dvd = {
  Name: 'dvdDrive',
  Value :2
  };
  var floppy = {
  Name: 'floppyDisc',
  Value :3
  };
  var sixtyFourMB = {
  Name: '64megabytes',
  Value :1
  };
  var oneTwentyEightMB = {
  Name: '128megabytes',
  Value :2
  };
  var twoFiftySixMB = {
  Name: '256megabytes',
  Value :3
  };
  var ThreeGhz = {
  Name: '3.8',
  Value :1
  };
  var FourGhz = {
  Name: '4.6',
  Value :2
  };
  var SixGhz = {
  Name: '6',
  Value :3
  };

  var priceArray = [];

  priceArray.push(dvd,ThreeGhz,SixGhz)

  function arrayFinder (array, obj)
   {
     for (map in array) {
     if (obj ===(priceArray[map].Name)) {
     console.log('match found')
     var position = map
     return position
   }
 }}

  arrayFinder (priceArray, 'dvdDrive');

  ;
  console.log(priceArray);
  priceArray.splice(1,1);
  console.log(priceArray);
