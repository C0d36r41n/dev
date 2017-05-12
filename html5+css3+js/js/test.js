function calculateTotalDistance(time, speedOfFirst, speedOfSecond) {
var distanceOfFirst = speedOfFirst * time;
var distanceOfSecond = speedOfSecond * time;
var totalDistance = distanceOfFirst + distanceOfSecond;
return totalDistance;
}

document.body.innerHTML = calculateTotalDistance(3, 10, 12);