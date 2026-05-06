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
const optionBtns = document.querySelectorAll('#options > *');
const optionValues = document.querySelectorAll('#options > * > h3');

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

function hideOptions(btnNum) {
    optionBtns[btnNum].classList.add('hidden');
}


function showOptions(btnNum) {
    optionBtns[btnNum].classList.remove('hidden');
}

function updateStory() {
    let storyPart = completeStory[storyPartNum].data;
    let storySpeakers = storyPart.map(sP => sP.speaker)
    let storyTexts = storyPart.map(sP => sP.text)



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
        const optionsList = options.map(o => o.text);

        for (let i = 0; i < optionBtns.length; i++) {
            hideOptions(i);
        }

        for (let i = 0; i < optionsList.length; i++) {
            showOptions(i);
            optionValues[i].innerHTML = optionsList[i];
        }

        dialogueNum++;
        return
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
    let optionRoute = options.map(o => o.next);
    let routeFinal = optionRoute[(Number(btnNum))];
    let storyIndex = completeStory.findIndex(n => n.name === routeFinal);

    storyPartNum = storyIndex;
    dialogueNum = 0;

    // Toggles Story to view
    choices.classList.add('hidden');
    content.classList.add('story');
    storyBox.classList.remove('hidden');

    // Updates speaker for story
    let storySpeakers = storyPart.map(sP => sP.speaker)
    const storySpeaker = storySpeakers[dialogueNum];
    speaker.innerHTML = storySpeaker;

    // Updates story
    let storyTexts = storyPart.map(sP => sP.text)
    const storyText = storyTexts[dialogueNum];
    story.innerHTML = storyText;


    updateStory();
}



optionBtns[0].addEventListener('click', function () { btnChoices('0') });
optionBtns[1].addEventListener('click', function () { btnChoices('1') });
optionBtns[2].addEventListener('click', function () { btnChoices('2') });
optionBtns[3].addEventListener('click', function () { btnChoices('3') });

nextBtn.addEventListener('click', function () { updateStory() });