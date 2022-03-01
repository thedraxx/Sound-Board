const sounds = [
    'Victory',
    'Au!',
    'Sega',
    '!',
];

state = true; // no hay nada 
const image = document.createElement('img');

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play();

        if (sound === 'Au!') {
            if (state) {
                image.classList.add('img');
                image.src = './Moonwalk.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            } else {
                document.querySelector('.container').removeChild(image)
                image.classList.add('img');
                image.src = './Moonwalk.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            }
        }

        if (sound === 'Victory') {
            if (state) {
                image.classList.add('img');
                image.src = './finalfantasy.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            } else {
                document.querySelector('.container').removeChild(image)
                image.classList.add('img');
                image.src = './finalfantasy.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            }
        }

        if (sound === 'Sega') {
            if (state) {
                image.classList.add('img');
                image.src = './Sega.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            } else {
                document.querySelector('.container').removeChild(image)
                image.classList.add('img');
                image.src = './Sega.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            }
        }

        if (sound === '!') {
            if (state) {
                image.classList.add('img');
                image.src = './metal.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            } else {
                document.querySelector('.container').removeChild(image)
                image.classList.add('img');
                image.src = './metal.gif';
                document.querySelector('.container').appendChild(image);
                state = false; // hay algo
            }
        }
    });
    document.getElementById('buttons').appendChild(btn)
});


function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}
