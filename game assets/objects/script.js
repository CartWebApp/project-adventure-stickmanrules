// import {prologue} from './story/story.js';
// console.log(prologue)
// Elements from HTML
const homescreen = document.getElementById('homescreen')
const startBtn = document.getElementById('start-btn');
const gameOverlay = document.getElementById('game-overlay');
const gameZone = document.getElementById('game-zone');
const speaker = document.querySelector('#speaker > h2');
const content = document.getElementById('content');
const story = document.getElementById('story');
const choices = document.getElementById('choices');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

function startGame() {
    gameOverlay.classList.remove('hidden');
    homescreen.classList.add('hidden');
};

startBtn.addEventListener('click', function() {startGame()})


import { prologue1 } from "./content.js";

console.log(prologue1)