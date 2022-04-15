function gramophone(nameBand, album, song) {
    let durationInSeconds = (album.length * nameBand.length) * song.length / 2;
    let fullRotationPlate = 2.5; //sek
    let secondsWithRotation = Math.ceil(durationInSeconds / fullRotationPlate);
    console.log(`The plate was rotated ${secondsWithRotation} times.`);

}
gramophone('Rammstein', 'Sehnsucht', 'Engel');
//('Black Sabbath', 'Paranoid', 'War Pigs');
/*The plate makes a full rotation every 2.5 seconds.
The song duration in seconds is calculate by the given formula: 
(albumName.length * bandName.length) * song-name.length / 2*/