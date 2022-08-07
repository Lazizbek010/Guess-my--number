// Selectors
let again = document.querySelector('.again')
let number = document.querySelector('.number')
let guess = document.querySelector('.guess')
let check = document.querySelector('.check')
let message = document.querySelector('.message')
let scoreEl = document.querySelector('.score')
let highscoreEl = document.querySelector('.highscore')
let bgLoserModal = document.querySelector('.bg-loser-modal')
let modalWinWrapper = document.querySelector('.modal-win-wrapper')
let loserBtn = document.querySelector('.loser-btn')
let winnerBtn = document.querySelector('.winner-btn')
guess.focus()

// changes
let score = 20
let highscore = 0
let gameOver = true

// RandomNUmber
let random = Math.floor(Math.random() * 20 + 1)
console.log(random);


// Event
check.addEventListener('click', () => {
    guess.focus()
    if(score < 1){
        loseModal()
        let loseMusic = new Audio('lose.mp3')
        loseMusic.play()
    }else{
        if (guess.value && gameOver) {
            let inputValue = +guess.value
            if (inputValue === random) {
                gameOver = false
                message.textContent = 'You are win !!!';
                number.textContent = random
                winModal()
                let winnerMusic = new Audio('winner.mp3')
                winnerMusic.play()
                if (score > highscore) {
                    highscore = score
                    highscoreEl.textContent = highscore
                }
                document.querySelector('body').style.background = '#60b347'
            } else if (inputValue > random) {
                message.textContent = 'to High';
                score--
                scoreEl.textContent = score
            } else if (inputValue < random) {
                message.textContent = 'to Low';
                score--
                scoreEl.textContent = score
            }
            guess.value = ''
        }else{
            message.textContent = 'No Number ?'
        }

    }
})
function loseModal(){
    bgLoserModal.classList.remove('hidden')
}

again.addEventListener('click', refresh)

function refresh(){
    score = 20
    scoreEl.textContent = '20'
    document.querySelector('body').style.background = '#222'
    message.textContent = 'Start guessing...'
    number.textContent = '?'
    guess.value = ''
    gameOver = true
    random = Math.floor(Math.random() * 20 + 1)
    console.log(random);
    modalWinWrapper.classList.add('hidden')
    bgLoserModal.classList.add('hidden')
}

// MODAL Events
function winModal(){
    modalWinWrapper.classList.remove('hidden')
}



loserBtn.addEventListener('click', refresh)
winnerBtn.addEventListener('click', refresh)
