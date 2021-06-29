const feet = 264

function distanceFromHqInBlocks(Blocks) {
    if (Blocks < 42){
        return (Blocks - 42)*-1;
    }
    else return Blocks - 42
}

function distanceFromHqInFeet(Blocks) {
    let Feet = distanceFromHqInBlocks(Blocks)
        return Feet * 264

}

function distanceTravelledInFeet(startingBlock, endingBlock){
   let distance =  Math.abs(endingBlock - startingBlock);
   return distance*feet
   
}

function calculatesFarePrice(start, destination)  {
    let driveLength = (Math.abs(start - destination)*264);
    if (driveLength <= 400) {
        return 0;
    }   else if (driveLength > 400 && driveLength <= 2000) {
        return 0.02 * (driveLength - 400);
    }   else if (driveLength > 2000 && driveLength < 2500) {
        return  25;
    }   else if (driveLength > 2500) {
        return 'cannot travel that far';
    }
}