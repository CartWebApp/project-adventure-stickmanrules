// import { completeStory } from './story/story.js';

import { tempCompleteStory as completeStory } from "./story/story.js";

// Elements from HTML
const homescreen = document.getElementById('homescreen')
const startBtn = document.getElementById('start-btn');
const gameOverlay = document.getElementById('game-overlay');
const gameZone = document.getElementById('game-zone');
const speaker = document.querySelector('#speaker > h2');
const content = document.getElementById('content');
const storyBox = document.getElementById('story');
const story = document.querySelector('#story > p');
const nextBtn = document.getElementById('next-btn');
const choices = document.getElementById('choices');
const choicesText = document.querySelector('#choices');
const option0 = document.getElementById('option0');
const optionText0 = document.querySelector('#option0 > h3');
const option1 = document.getElementById('option1');
const optionText1 = document.querySelector('#option1 > h3');
const option2 = document.getElementById('option2');
const optionText2 = document.querySelector('#option2 > h3');


function startGame() {
    gameOverlay.classList.remove('hidden');
    homescreen.classList.add('hidden');
};

startBtn.addEventListener('click', function () { startGame() })

let storyPartNum = 0;
let dialogueNum = 0;
function updateStory() {
    let storyPart = completeStory[storyPartNum].data;
    let storySpeakers = storyPart.map(storyPart => storyPart.speaker)
    let storyTexts = storyPart.map(storyPart => storyPart.text)

    if (dialogueNum == (storyPart.length - 1)) {
        if (storyPart[dialogueNum].type == 'choices') {
            console.log('It\'s a Choice!')

            // Toggles Choices to view
            storyBox.classList.add('hidden');
            choices.classList.remove('hidden');
            content.classList.remove('story');

            // Updates speaker for choices
            const storySpeaker = storySpeakers[dialogueNum];
            console.log(storySpeaker);
            speaker.innerHTML = storySpeaker

            // Updates options
            const options = storyPart[dialogueNum].options;
            const optionsList = options.map(options => options.text);
            optionText0.innerHTML = optionsList[0];
            optionText1.innerHTML = optionsList[1];
            optionText2.innerHTML = optionsList[2];

            dialogueNum++;
            // const storyOptions = storyPart.map
        } else if (storyPart[dialogueNum].type == 'story') {
            console.log('It\'s more story!')

            // Toggles Story to view
            choices.classList.add('hidden');
            content.classList.add('story');
            storyBox.classList.remove('hidden');

            // Updates speaker for story
            const storySpeaker = storySpeakers[dialogueNum];
            speaker.innerHTML = storySpeaker;

            // Updates story
            const storyText = storyTexts[dialogueNum];
            story.innerHTML = storyText;

            dialogueNum++;
        } else {
            console.log('There seems to be an error')
        }


    } else if (dialogueNum > (storyPart.length - 1)) {
        console.log('Time for the next section')
        storyPartNum++;
        dialogueNum = 0;
        updateStory();
    } else {
        const storySpeaker = storySpeakers[dialogueNum];
        const storyText = storyTexts[dialogueNum];
        speaker.innerHTML = storySpeaker;
        story.innerHTML = storyText;
        dialogueNum++;
    }
    console.log(storyPart)

}
updateStory();

function btnChoices(btnNum) {
    let storyPart = completeStory[storyPartNum].data;
    let options = storyPart[(dialogueNum - 1)].options;
    let optionRoute = options.map(options => options.next);
    let routeFinal = optionRoute[(Number(btnNum))];
    let storyIndex = completeStory.findIndex(n => n.name === routeFinal);

    storyPartNum = storyIndex;
    dialogueNum = 0;
    console.log('Event Ended');
    
    // Toggles Story to view
    choices.classList.add('hidden');
    content.classList.add('story');
    storyBox.classList.remove('hidden');
    
    // Updates speaker for story
    let storySpeakers = storyPart.map(storyPart => storyPart.speaker)
    const storySpeaker = storySpeakers[dialogueNum];
    speaker.innerHTML = storySpeaker;
    
    // Updates story
    let storyTexts = storyPart.map(storyPart => storyPart.text)
    const storyText = storyTexts[dialogueNum];
    story.innerHTML = storyText;

    
    updateStory();
}


option0.addEventListener('click', function () { btnChoices('0') });
option1.addEventListener('click', function () { btnChoices('1') });
option2.addEventListener('click', function () { btnChoices('2') });

nextBtn.addEventListener('click', function () { updateStory() });