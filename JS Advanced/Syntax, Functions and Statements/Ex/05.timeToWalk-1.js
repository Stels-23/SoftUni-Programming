/*function timeToWalk(steps, footPrint, kmPerHour) {
    let distance = steps * footPrint;
    let speed = kmPerHour * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
}*/
function timeToWalk(steps, footPrint, kmPerHour) {
    let distance = steps * footPrint;
    let speed = kmPerHour * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rest;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);
    console.log(`${(hours).toFixed(0).padStart(2, '0')}:${(minutes).toFixed(0).padStart(2, '0')}:${(seconds).toFixed(0).padStart(2, '0')}`)
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5);