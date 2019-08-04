/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function roll() {
    // Collect dice components
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');

    // Clear previous roll
    a1.className = 'off';
    a2.className = 'off';
    a3.className = 'off';
    b1.className = 'off';
    b2.className = 'off';
    b3.className = 'off';
    c1.className = 'off';
    c2.className = 'off';
    c3.className = 'off';

    // Add the counter
    var counter = document.getElementById('counter');
    var currentCount = counter.textContent;
    currentCount = parseInt(currentCount);
    currentCount++;
    counter.textContent = currentCount;

    // Generate a random number
    var diceNum = Math.floor(Math.random()*6)+1;

    // Generate the dice
    if (diceNum == 1) {
        // Number 1
        b2.className = 'on';
        stats(1);
    } else if (diceNum == 2) {
        // Number 2
        a1.className = 'on';
        c3.className = 'on';
        stats(2);
    } else if (diceNum == 3) {
        // Number 3
        a1.className = 'on';
        b2.className = 'on';
        c3.className = 'on';
        stats(3);
    } else if (diceNum == 4) {
        // Number 4
        a1.className = 'on';
        a3.className = 'on';
        c1.className = 'on';
        c3.className = 'on';
        stats(4);
    } else if (diceNum == 5) {
        // Number 5
        a1.className = 'on';
        a3.className = 'on';
        b2.className = 'on';
        c1.className = 'on';
        c3.className = 'on';
        stats(5);
    } else {
        // Number 6
        a1.className = 'on';
        b1.className = 'on';
        c1.className = 'on';
        a3.className = 'on';
        b3.className = 'on';
        c3.className = 'on';
        stats(6);
    }
}

function stats(num) {
    var stat = document.getElementById('roll' + num);
    var roll = stat.textContent;
    roll = parseInt(roll);
    roll++;
    stat.textContent = roll;
}

function sim() {
    var amount = document.getElementById('simNum').value;
    amount = parseInt(amount);
    if (!isNaN(amount)) {
        for (i = 0; i < amount; i++) {
            roll();
        }
    }
}

document.getElementsByClassName('dice')[0].addEventListener('click',roll);
document.getElementById('sim').addEventListener('click',sim);