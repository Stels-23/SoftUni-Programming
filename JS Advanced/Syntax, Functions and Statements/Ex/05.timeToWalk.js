function timeToWalk(steps, footprint, speed) {
    let distanceInM = steps * footprint; //разстояние в метри
    let speedInMPerS = speed / 3.6; //измината скорост в метри за секунда
    let time = distanceInM / speedInMPerS;
    let rest = Math.floor(distanceInM / 500);
    let timeMin = Math.floor(time / 60);
    let timeSek = Math.round(time - timeMin * 60);
    let timeH = Math.floor(time / 3600);
    console.log((timeH < 10 ? '0' : '') + timeH + ':' + (timeMin + rest < 10 ? '0' : '') + (timeMin + rest) + ':' + (timeSek < 10 ? '0' : '') + timeSek);


}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);