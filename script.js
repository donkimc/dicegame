const dicePos = {
    1: ['pos5'],
    2: ['pos1', 'pos9'],
    3: ['pos1', 'pos5', 'pos9'],
    4: ['pos1', 'pos3', 'pos7', 'pos9'],
    5: ['pos1', 'pos3', 'pos5', 'pos7', 'pos9'],
    6: ['pos1', 'pos3', 'pos4', 'pos6', 'pos7', 'pos9']
}

// random draw dice
function draw() {
    document.querySelector("#dice1").innerHTML = '';
    document.querySelector("#dice2").innerHTML = '';
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let result = document.querySelector(".result");
    if (d1>d2) {
        result.innerHTML = "Dice 1 won!";
    } else if (d1==d2) {
        result.innerHTML = "Tie";
    } else {
        result.innerHTML = "Dice 2 won!"
    }
    drawDice(d1, d2);
    
}

function drawDice(d1, d2) {
    //drawing dice
    let dice1 = dicePos[d1];
    for(let n=0; n<dice1.length; n++) {
        let o = document.createElement('div');
        o.classList.add('dot');
        o.classList.add(dice1[n]);
        document.querySelector("#dice1").appendChild(o);
    }

    let dice2 = dicePos[d2];
    for(let n=0; n<dice2.length; n++) {
        let o = document.createElement('div');
        o.classList.add('dot');
        o.classList.add(dice2[n]);
        document.querySelector("#dice2").appendChild(o);
    }
}

document.getElementById("draw").addEventListener("click", draw);


