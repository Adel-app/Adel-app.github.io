// GLOBAL DATA=================================================================

"use strict";

let totalPlayed = 0; // Variable to store the amount of hours played from Local Storage.
let tokenMenu = 0; // Variable to store the value of the last selected menu object.
let tokenHide = false; // Variable to store the boolean value if the extra menu is displayed or not.
let tokenFile = 0; // Variable to store the present file selected.
const img = document.createElement('img'); // Const to add the hand cursor.
img.className = 'selected';
img.src = '../img/FF7Cursor.png';
const div = document.createElement('div'); // Const to add the shadow of the hand cursor.
div.className = 'shadow';
let move = new Audio(); // Variable of Audio kind to store and use move sound.
move.src = "https://www.dropbox.com/s/fiyx4q2mdwynraj/FF7CursorMove.mp3?raw=1";
let load = new Audio(); // Variable of Audio kind to store and use the load sound.
load.src = 'https://www.dropbox.com/s/v04ewrevpnnsz03/FF7CursorSaveLoad.mp3?raw=1';

// SELECTION ELEMENTS

let extras = document.querySelectorAll('.extra'); // Select all the Menus extra from the original.
let menuItems = document.querySelectorAll('#menu li');

// EVENT LISTENERS==================================================================

(function eventListeners() {

    // Listen when the DOM is fully charged.
    document.addEventListener('DOMContentLoaded', function () {

        // Checks if there is a file in local Storage, and depends on the result begins a new countdown or get the JSON file.
        totalPlayed = JSON.parse(localStorage.getItem('totalPlayed')) || 0;
        selection(tokenMenu);
        time();
        blink();
    });

    // Sets the opacity of the hands icons to 1 when the initial animation ends we use this instead animation-fill-mode to control the opacity with other function later.
    document.querySelector('#right').addEventListener("animationend", function () {
        document.querySelector('#right').style.opacity = "1";
        document.querySelector('#left').style.opacity = "1";
    }, false);

    // Sets the opacity of the instructions to 1 when the initial animation ends we use this instead animation-fill-mode to control the opacity with other function later.
    document.querySelector('#instructions').addEventListener("animationend", function () {
        document.querySelector('#instructions').style.opacity = "1";
    }, false);

    // Sets listener when a mouse is over a menu.
    document.body.addEventListener('mouseover', selectMouseOver);

    // Sets listener when a key is pressed.
    document.body.addEventListener('keydown', keyPressed);

    // Sets listener when a click is made in the hand icons.
    document.body.addEventListener('click', function (e) {
        // Calling the changeScreen function depending on what hand icon was clicked with the file number to load.
        if (e.target.id == "left") {
            tokenFile = (tokenFile > 0) ? tokenFile - 1 : 4;
            changeScreen(tokenFile);
        } else if (e.target.id == "right") {
            tokenFile = (tokenFile < 4) ? tokenFile + 1 : 0;
            changeScreen(tokenFile);
        }
    });

})();

// FUNCTIONS========================================================================

// Calculates and shows the time "played".
function time() {
    if (totalPlayed < 360000) {
        let seconds = totalPlayed;
        let hh = Math.floor(seconds / 3600);
        seconds = seconds - (hh * 3600);
        let mm = Math.floor(seconds / 60);
        seconds = seconds - (mm * 60);
        let ss = seconds;
        let clock = `${hh}:${(mm < 10) ? '0' + mm : mm}:${(ss < 10) ? '0' + ss : ss}`;
        document.querySelector('#currentTime').innerHTML = clock;
    } else {
        document.querySelector('#currentTime').innerHTML = `99:99:99`; // Use this if we surpass the 99:99:99 of time.
    }
    totalPlayed++;
    localStorage.setItem('totalPlayed', JSON.stringify(totalPlayed)); // Add the current count variable as a JSON string to local Storage.
    setTimeout(time, 1000); // Use this function calls the function (same this occasion) when the same has finished, helps to avoid problems of synchronization seen in setInterval because this won't be executed again until the function has finished.
}

// Adds the blink effect to the semicolon in the clock.
function blink() {
    let blinked = document.querySelector('#colon');
    blinked.style.color = (blinked.style.color == "white") ? "grey" : "white";
    setTimeout(blink, 500);
}

// Adds the cursor hand and play the sound when the mouse is over a menu.
function selectMouseOver(e) {
    e.preventDefault();
    if (e.target.parentNode.id == 'menu') {
        tokenMenu = parseInt(e.target.getAttribute("number"));
        selection(tokenMenu);
        move.play();
    }
}
