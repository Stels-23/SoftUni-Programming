function movieDay(input) {
    let timeForPicture = Number(input[0]);
    let countStages = Number(input[1]);
    let timeOnStages = Number(input[2]);
    let fieldPreparation = timeForPicture * 0.15;
    let timeForPictureOnStages = countStages * timeOnStages;
    let needTime = timeForPictureOnStages + fieldPreparation;
    let digitTime = 0
    if (needTime > timeForPicture) {
        digitTime = Math.ceil(needTime - timeForPicture);
        console.log(`Time is up! To complete the movie you need ${digitTime} minutes.`);
    } else {
        digitTime = Math.ceil(timeForPicture - needTime);
        console.log(`You managed to finish the movie on time! You have ${digitTime} minutes left!`);
    }



}
movieDay(["120",
    "10",
    "11"
])
console.log('=========')
movieDay(["60",
    "15",
    "3"
])
console.log('===========');
movieDay(["135",
    "5",
    "20"
])