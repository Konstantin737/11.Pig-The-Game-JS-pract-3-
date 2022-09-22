let rollTheDice;
let playerOnePoints = 0;
let playerTwoPoints = 0;
let totalPlayerOnePoints = 0;
let totalPlayerTwoPoints = 0;
let checkPlayer = 1;
let dice = document.querySelector('.dice');
let panelLeft = document.querySelector('.left');
let panelRight = document.querySelector('.right');
let roundPointPlayer1 = document.querySelector('.round-point-player1');
let roundPointPlayer2 = document.querySelector('.round-point-player2');
let totalPlayerOne = document.querySelector('.total-player-one');
let totalPlayerTwo = document.querySelector('.total-player-two');
let bottonRollTheDice = document.querySelector('.roll-the-dice');
let bottonStopRoll = document.querySelector('.stop-roll');
let bottonNewGame = document.querySelector('.new-game');
let bottonRules = document.querySelector('.rules');
let modalWindow = document.querySelector('.modal-window-rules');
let overlay = document.querySelector('.overlay');
let closeModalWindow = document.querySelector('.close-modal-window');

let hiddenBotton = function () {
    bottonRollTheDice.classList.add('hidden');
    bottonStopRoll.classList.add('hidden');
    bottonNewGame.classList.remove('hidden');
    dice.classList.add('hidden');
};
//нажимаем на кнопку, получаем рандомное число, прикрепляем css с картинкой
document.querySelector('.roll-the-dice').addEventListener('click', function () {
    dice.classList.remove('dice--one');
    dice.classList.remove('dice--two');
    dice.classList.remove('dice--three');
    dice.classList.remove('dice--four');
    dice.classList.remove('dice--five');
    dice.classList.remove('dice--six');
    rollTheDice = Math.trunc(Math.random()*6) + 1;

    if (rollTheDice === 1) {
            dice.classList.add('dice--one');
    } else if (rollTheDice === 2) {
            dice.classList.add('dice--two');
    } else if (rollTheDice === 3) {
            dice.classList.add('dice--three');
    } else if (rollTheDice === 4) {
            dice.classList.add('dice--four');
    }  else if (rollTheDice === 5) {
            dice.classList.add('dice--five');
    }  else {
            dice.classList.add('dice--six');
    }
    //можно сделать через img и менять картинку через шаблонную чтроку
    // diseElement.src = `dice${rollTheDice}.png`;
    
    //заносим очки в playerOnePoints, если выпадает 1 сбрасываем счетчик и передаем ход 
    if (rollTheDice > 1 && checkPlayer === 1) {
        if(rollTheDice > 1 && rollTheDice < 7)playerOnePoints += rollTheDice;
        roundPointPlayer1.textContent = playerOnePoints;
    } else if (rollTheDice === 1 && checkPlayer === 1) {
        playerOnePoints = 0;//сбросить очки у первого игрока
        roundPointPlayer1.textContent = 0;//сбросить индикатор очков у первого игрока
        checkPlayer = 2;
        rollTheDice = 7;
        panelLeft.classList.remove('active-panel');
        panelRight.classList.add('active-panel');
    }
    //заносим очки в playerOnePoints, если выпадает 1 сбрасываем счетчик и передаем ход
    if (rollTheDice > 1 && checkPlayer === 2) {
        if(rollTheDice > 1 && rollTheDice < 7)playerTwoPoints += rollTheDice;//заносим очки второго игрока
        roundPointPlayer2.textContent = playerTwoPoints;
    } else if (rollTheDice === 1 && checkPlayer === 2) {
        playerTwoPoints = 0;//сбросить очки у второго игрока
        roundPointPlayer2.textContent = 0;//сбросить индикатор очков у второго игрока
        checkPlayer = 1;
        rollTheDice = 7;
        panelRight.classList.remove('active-panel');
        panelLeft.classList.add('active-panel');
    }
});

document.querySelector('.stop-roll').addEventListener('click', function () {
    if (checkPlayer === 1 && rollTheDice !== 1) {
        totalPlayerOnePoints += playerOnePoints;//прибавить к общим очкам, очки раунда
        totalPlayerOne.textContent = totalPlayerOnePoints;//вывести индикацию очков
        playerOnePoints = 0;//сбросить очки у первого игрока
        roundPointPlayer1.textContent = 0;//сбросить индикатор очков у первого игрока
        checkPlayer = 2;
        rollTheDice = 7;
        panelLeft.classList.remove('active-panel');
        panelRight.classList.add('active-panel');
    } else if (checkPlayer === 2 && rollTheDice !== 1) {
        totalPlayerTwoPoints += playerTwoPoints;//прибавить к общим очкам, очки раунда
        totalPlayerTwo.textContent = totalPlayerTwoPoints;//вывести индикацию очков
        playerTwoPoints = 0;//сбросить очки у второго игрока
        roundPointPlayer2.textContent = 0;//сбросить индикатор очков у второго игрока
        checkPlayer = 1;
        rollTheDice = 7;
        panelRight.classList.remove('active-panel');
        panelLeft.classList.add('active-panel');
    }

    if (totalPlayerOnePoints >= 100) {
        totalPlayerOne.textContent = 'WIN!';
        totalPlayerTwo.textContent = ":'(";
        hiddenBotton();
    } else if (totalPlayerTwoPoints >= 100) {
        totalPlayerTwo.textContent = 'WIN!';
        totalPlayerOne.textContent = ":'(";
        hiddenBotton();
    };
});

bottonNewGame.addEventListener('click', function () {
    location.reload();
});

bottonRules.addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeModalWindow.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        modalWindow.classList.add('hidden');
        overlay.classList.add('hidden');
    };
});