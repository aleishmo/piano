const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key') // returns an array of all elements with class = 'key'
const whiteKeys = document.querySelectorAll('.key.white') // returns an array of all elements with class = 'key white'
const blackKeys = document.querySelectorAll('.key.black') // returns an array of all elements with class = 'key black'

// plays note when each piano key is clicked
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return // will only play note once if key is held down 
    
    const key = e.key // returns letter of key pressed
    const whiteKeyIndex = WHITE_KEYS.indexOf(key) // returns -1 if key is not in array
    const blackKeyIndex = BLACK_KEYS.indexOf(key) // returns -1 if key is not in array

    if (whiteKeyIndex !== -1) playNote(whiteKeys[whiteKeyIndex])
    if (blackKeyIndex !== -1) playNote(blackKeys[blackKeyIndex])
})

// plays mp3 file
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}   