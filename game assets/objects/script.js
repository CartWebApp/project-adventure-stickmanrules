import {completeStory} from './story/story.js';
// console.log(completeStory[1][2].text)


// Elements from HTML
const homescreen = document.getElementById('homescreen')
const startBtn = document.getElementById('start-btn');
const gameOverlay = document.getElementById('game-overlay');
const gameZone = document.getElementById('game-zone');
const speaker = document.querySelector('#speaker > h2');
const content = document.getElementById('content');
const story = document.querySelector('#story > p');
const nextBtn = document.getElementById('next-btn');
const choices = document.getElementById('choices');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

function startGame() {
    gameOverlay.classList.remove('hidden');
    homescreen.classList.add('hidden');
};

startBtn.addEventListener('click', function () { startGame() })

let storyPartNum = 0;
let dialogueNum = 0;
function updateStory() {
    let storyPart = completeStory[storyPartNum];
    let storySpeakers = storyPart.map(storyPart => storyPart.speaker)
    let storyTexts = storyPart.map(storyPart => storyPart.text)

    if (dialogueNum >= storyPart.length) {
        storyPartNum++;
        dialogueNum = 0
        updateStory();
        return
    } else {   
        const storySpeaker = storySpeakers[dialogueNum];
        const storyText = storyTexts[dialogueNum];
        speaker.innerHTML = storySpeaker;
        story.innerHTML = storyText;
        dialogueNum++
        return
    }
        
    
}
updateStory();

nextBtn.addEventListener('click', function () { updateStory() });