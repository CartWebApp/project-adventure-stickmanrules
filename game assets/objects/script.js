import { completeStory } from './story/story.js';

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

// Start Game
function startGame() {
    gameOverlay.classList.remove('hidden');
    homescreen.classList.add('hidden');
};

startBtn.addEventListener('click', function () { startGame() })




let storyPartNum = 0;
let dialogueNum = 0;

function updateGZOverlay() {
    let overlayUrl = completeStory[storyPartNum].overlay_url;
    gameOverlay.style.backgroundImage = `url(${overlayUrl})`;
}

updateGZOverlay()

function updateGZBG() {
    let bgUrl = completeStory[storyPartNum].data[dialogueNum].bg_url;
    gameZone.style.backgroundImage = `url(${bgUrl})`;
}

updateGZBG();


function updateStory() {
    let storyPart = completeStory[storyPartNum].data;
    let storySpeakers = storyPart.map(storyPart => storyPart.speaker)
    let storyTexts = storyPart.map(storyPart => storyPart.text)



    if (dialogueNum == (storyPart.length - 1) && storyPart[dialogueNum].type == 'choices') {
        // Toggles Choices to view
        storyBox.classList.add('hidden');
        choices.classList.remove('hidden');
        content.classList.remove('story');

        // Updates speaker for choices
        const storySpeaker = storySpeakers[dialogueNum];
        speaker.innerHTML = storySpeaker

        // Updates options
        const options = storyPart[dialogueNum].options;
        const optionsList = options.map(options => options.text);
        optionText0.innerHTML = optionsList[0];
        optionText1.innerHTML = optionsList[1];
        optionText2.innerHTML = optionsList[2];

        dialogueNum++;
        return
        // const storyOptions = storyPart.map
    }

    if (dialogueNum > (storyPart.length - 1)) {
        let nextScene = storyPart[dialogueNum - 1].next;
        let storyIndex = completeStory.findIndex(n => n.name === nextScene);

        storyPartNum = storyIndex;
        dialogueNum = 0;
        updateStory();
    } else {
        const storySpeaker = storySpeakers[dialogueNum];
        const storyText = storyTexts[dialogueNum];
        speaker.innerHTML = storySpeaker;
        story.innerHTML = storyText;
        updateGZOverlay();
        updateGZBG();
        dialogueNum++;
    }
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