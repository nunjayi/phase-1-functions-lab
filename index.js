// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    let Hq = 42
    let blocks = pickup - Hq
    if(blocks < 0){
        //ensure it always returns a positive a positive number
        return blocks*-1
    }else{
        return blocks
    } 
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264
}

function distanceTravelledInFeet(start,destination){
   
    let distance = (destination-start) *264
    if(distance < 0){
        return distance * -1
    }
    return distance;
}

function calculatesFarePrice(start,destination){
    let distance = (destination-start)*264
    if(distance<0){
        distance=distance*-1
       
    }
    if(distance<400){
        return 0
    }else if(distance >400 && distance < 2000){
        return 0.02*(distance-400)
    }else if(distance > 2000 && distance <=2500){
        return 25
    }else if(distance>2500){
        return 'cannot travel that far'
    }    

}