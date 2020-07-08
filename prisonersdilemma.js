var round = 1;
var userScore = 0;
var computerScore = 0;
var userCooperate = 'true';
var computerCooperate = 'true';
var userName = 'Username';

document.getElementById('submit').onclick = function() {
    let choices = document.querySelectorAll('input[name="choice"]');
    for (let choice of choices) {
        if (choice.checked) {
            userCooperate = choice.value;
            console.log(userCooperate);
            console.log(computerCooperate);
            break;
        }
    }
    if (userCooperate === 'true') {
        if (computerCooperate === 'true') {
            // Both Cooperate
            computerScore = computerScore + 2;
            userScore = userScore + 2;
        } else {
            // User Cooperates, Computer Cheats
            computerScore = computerScore + 3;
        }
    } else {
        if (computerCooperate === 'true') {
            // User cheats, computer cooperates
            userScore = userScore + 3;
        } else {
            // User cheats, computer cheats
            computerScore = computerScore + 1;
            userScore = userScore + 1;
        }
    }
    // Checks to see round number and either quits, or continues.
    if (round >= 10) {
        document.getElementById('choices').style.display = 'none';
        document.getElementById('submit').style.display = 'none';
        document.getElementById('gameOver').style.display = 'block';
        if (userScore > computerScore) {
            document.getElementById('round').innerHTML = 'Congratulations, you Won!'
        } else if (userScore == computerScore) {
            document.getElementById('round').innerHTML = "Nice. It's a tie!"
        } else {
            document.getElementById('round').innerHTML = 'You lost. Try Again?'
        }
    } else {
        round++;
        document.getElementById('round').innerHTML = `Prisoner's Dilemma: Round ${round}`;
        document.getElementById('userScore').innerHTML = `${userScore}`;
        document.getElementById('computerScore').innerHTML = `${computerScore}`;
        computerCooperate = userCooperate;
    }
}

document.getElementById('startOver').onclick = function() {
    document.getElementById('gameOver').style.display = 'none';
    round = 1;
    userScore = 0;
    computerScore = 0;
    userCooperate = 'true';
    computerCooperate = 'true';
    document.getElementById('choices').style.display = 'block';
    document.getElementById('round').innerHTML = `Prisoner's Dilemma: Round ${round}`;
    document.getElementById('userScore').innerHTML = `${userScore}`;
    document.getElementById('computerScore').innerHTML = `${computerScore}`;
    document.getElementById('submit').style.display = 'block';
}


document.getElementById('changeName').onclick = function () {
    userName = document.getElementById('name').value;
    document.getElementById('userName').innerHTML = `${userName}`;
    document.getElementById('nameBox').innerHTML = `Hello ${userName}!`;
}

document.getElementById('backgroundImg').mouseout = function () {
    document.getElementById('newsletter').style.display = 'block';
    console.log('Hello World')
}