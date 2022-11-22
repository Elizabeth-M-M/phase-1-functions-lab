// Code your solution in this file!
const hqBlock = 42;
const blockVal = 264;


function distanceFromHqInBlocks(loc) {
    let distToHq = Math.max(loc, hqBlock) - Math.min(loc, hqBlock)
    return distToHq;
}



function distanceFromHqInFeet(blockNo) {
    let distInBlock = distanceFromHqInBlocks(blockNo);
    return   distInBlock*blockVal
}
function distanceTravelledInFeet(start, destination) {
    return (Math.max(start, destination) - Math.min(start, destination)) * blockVal;
}

function calculatesFarePrice(start, destination) {
const distInFeet = distanceTravelledInFeet(start, destination);
    if (distInFeet <= 400) {
       return 0
   } else if (distInFeet <= 2000) {
      return 2 * (distInFeet - 400)/100;
   }else if (distInFeet <= 2500) {
         return 25;
   } else{
       return 'cannot travel that far';
   }
}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInFeet(43));
console.log(distanceTravelledInFeet(34, 28));
console.log(calculatesFarePrice(34, 24))
