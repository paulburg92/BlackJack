///
class BlackJack {

    constructor(cardsArray, pCardOne, pCardTwo, pCardThree, pCardFour, pCardFive, hCardOne, hCardTwo, hCardThree, hCardFour, hCardFive, playerScore, houseScore) {

        this.cardsArray = cardsArray
        this.pCardOne = pCardOne
        this.pCardTwo = pCardTwo
        this.pCardThree = pCardThree
        this.pCardFour = pCardFour
        this.pCardFive = pCardFive

        this.hCardOne = hCardOne
        this.hCardTwo = hCardTwo
        this.hCardThree = hCardThree
        this.hCardFour = hCardFour
        this.hCardFive = hCardFive

        this.playerScore = playerScore
        this.houseScore = houseScore
        this.plScore
        this.hsScore

        this.playerCard
        this.houseCard
        this.houseCardSecond
        this.x = 0
    }

    random() {
        this.playerCard = Math.floor(Math.random() * cardsArray.length)
        this.houseCard = Math.floor(Math.random() * cardsArray.length)
        this.houseCardSecond = Math.floor(Math.random() * cardsArray.length)
    }

    start() {
        this.random()
        this.pCardOne.src = this.cardsArray[this.playerCard].picture
        this.pCardOne = this.cardsArray[this.playerCard].value
        this.hCardOne.src = this.cardsArray[this.houseCard].picture
        this.hCardOne = this.cardsArray[this.houseCard].value
        this.hCardTwo.src = this.cardsArray[this.houseCardSecond].picture
        this.hCardTwo = this.cardsArray[this.houseCardSecond].value

        this.plScore = this.cardsArray[this.playerCard].value
    }

    hit() {
        switch (this.x) {
            case 0:
                this.random()
                this.pCardTwo.src = this.cardsArray[this.playerCard].picture
                this.pCardTwo = this.cardsArray[this.playerCard].value
                this.plScore = this.pCardOne + this.pCardTwo
                break
            case 1:
                this.random()
                this.pCardThree.src = this.cardsArray[this.playerCard].picture
                this.pCardThree = this.cardsArray[this.playerCard].value
                this.plScore = this.plScore + this.pCardThree
                break
            case 2:
                this.random()
                this.pCardFour.src = this.cardsArray[this.playerCard].picture
                this.pCardFour = this.cardsArray[this.playerCard].value
                this.plScore = this.plScore + this.pCardFour
                break
            case 3:
                this.random()
                this.pCardFive.src = this.cardsArray[this.playerCard].picture
                this.pCardFive = this.cardsArray[this.playerCard].value
                this.plScore = this.plScore + this.pCardFive
                break
            default:
                console.log(':-)')
        }
        this.x++
    }

    bust() {
        if (this.plScore > 21) {
            this.playerScore.innerHTML = "BUST: " + this.plScore
            this.houseScore.innerHTML = "TRY AGAIN"
        }
    }

    score() {
        this.playerScore.innerHTML = this.plScore
        this.hsScore = this.hCardOne + this.hCardTwo
        this.houseScore.innerHTML = this.hsScore
    }

    stay() {
        this.playerScore.innerHTML = "FINAL: " + this.plScore
        if (this.hsScore < 16) {
            this.random()
            this.hCardThree.src = this.cardsArray[this.houseCard].picture
            this.hCardThree = this.cardsArray[this.houseCard].value
            this.hsScore = this.hCardOne + this.hCardTwo + this.hCardThree
            this.houseScore.innerHTML = this.hsScore

        }
        if (this.hsScore < 16) {
            this.hCardFour.src = this.cardsArray[this.houseCard].picture
            this.hCardFour = this.cardsArray[this.houseCard].value
            this.hsScore = this.hCardOne + this.hCardTwo + this.hCardThree + this.hCardFour
            this.houseScore.innerHTML = this.hsScore
        }
        if (this.hsScore < 16) {
            this.hCardFive.src = this.cardsArray[this.houseCard].picture
            this.hCardFive = this.cardsArray[this.houseCard].value
            this.hsScore = this.hCardOne + this.hCardTwo + this.hCardThree + this.hCardFour + this.hCardFive
            this.houseScore.innerHTML = this.hsScore
        }
        if (this.hsScore > 21) {
            this.houseScore.innerHTML = "BUST: " + this.hsScore
        }
        if (this.hsScore === this.plScore) {
            this.houseScore.innerHTML = "TRY AGAIN"
        }
        this.winner()
    }

    winner() {
        if (this.hsScore < 22 && this.hsScore > this.plScore) { // fix it
            this.playerScore.innerHTML = "YOU LOOSE: " + this.plScore
            this.houseScore.innerHTML = "I WIN: " + this.hsScore
        } else {
            this.playerScore.innerHTML = "YOU WIN: " + this.plScore
            this.houseScore.innerHTML = "I LOOSE: " + this.hsScore
        }
    }

}

////////////////////////////// Cards Array

let cardsArray = [
    { picture: "ace_of_clubs.png", value: 1 },
    { picture: "ace_of_diamonds.png", value: 1 },
    { picture: "ace_of_hearts.png", value: 1 },
    { picture: "ace_of_spades.png", value: 1 },
    //
    { picture: "2_of_clubs.png", value: 2 },
    { picture: "2_of_diamonds.png", value: 2 },
    { picture: "2_of_hearts.png", value: 2 },
    { picture: "2_of_spades.png", value: 2 },
    //
    { picture: "3_of_clubs.png", value: 3 },
    { picture: "3_of_diamonds.png", value: 3 },
    { picture: "3_of_hearts.png", value: 3 },
    { picture: "3_of_spades.png", value: 3 },
    //
    { picture: "4_of_clubs.png", value: 4 },
    { picture: "4_of_diamonds.png", value: 4 },
    { picture: "4_of_hearts.png", value: 4 },
    { picture: "4_of_spades.png", value: 4 },
    //
    { picture: "5_of_clubs.png", value: 5 },
    { picture: "5_of_diamonds.png", value: 5 },
    { picture: "5_of_hearts.png", value: 5 },
    { picture: "5_of_spades.png", value: 5 },
    //
    { picture: "6_of_clubs.png", value: 6 },
    { picture: "6_of_diamonds.png", value: 6 },
    { picture: "6_of_hearts.png", value: 6 },
    { picture: "6_of_spades.png", value: 6 },
    //
    { picture: "7_of_clubs.png", value: 7 },
    { picture: "7_of_diamonds.png", value: 7 },
    { picture: "7_of_hearts.png", value: 7 },
    { picture: "7_of_spades.png", value: 7 },
    //
    { picture: "8_of_clubs.png", value: 8 },
    { picture: "8_of_diamonds.png", value: 8 },
    { picture: "8_of_hearts.png", value: 8 },
    { picture: "8_of_spades.png", value: 8 },
    //
    { picture: "9_of_clubs.png", value: 9 },
    { picture: "9_of_diamonds.png", value: 9 },
    { picture: "9_of_hearts.png", value: 9 },
    { picture: "9_of_spades.png", value: 9 },
    //
    { picture: "10_of_clubs.png", value: 10 },
    { picture: "10_of_diamonds.png", value: 10 },
    { picture: "10_of_hearts.png", value: 10 },
    { picture: "10_of_spades.png", value: 10 },
    //
    { picture: "jack_of_clubs.png", value: 10 },
    { picture: "jack_of_diamonds.png", value: 10 },
    { picture: "jack_of_hearts.png", value: 10 },
    { picture: "jack_of_spades.png", value: 10 },
    //
    { picture: "queen_of_clubs.png", value: 10 },
    { picture: "queen_of_diamonds.png", value: 10 },
    { picture: "queen_of_hearts.png", value: 10 },
    { picture: "queen_of_spades.png", value: 10 },
    //
    { picture: "king_of_clubs.png", value: 10 },
    { picture: "king_of_diamonds.png", value: 10 },
    { picture: "king_of_hearts.png", value: 10 },
    { picture: "king_of_spades.png", value: 10 },
]

////////////////////////////// Selectors 

let pCardOne = document.querySelector('#pCardOne')
let pCardTwo = document.querySelector('#pCardTwo')
let pCardThree = document.querySelector('#pCardThree')
let pCardFour = document.querySelector('#pCardFour')
let pCardFive = document.querySelector('#pCardFive')

let hCardOne = document.querySelector('#hCardOne')
let hCardTwo = document.querySelector('#hCardTwo')
let hCardThree = document.querySelector('#hCardThree')
let hCardFour = document.querySelector('#hCardFour')
let hCardFive = document.querySelector('#hCardFive')

let playerScore = document.querySelector('#playerScore')
let houseScore = document.querySelector('#houseScore')

const startButton = document.querySelector('#startButton')
const restartButton = document.querySelector('#restartButton')
const stayButton = document.querySelector('#stayButton')
const hitButton = document.querySelector('#hitButton')

const blackJack = new BlackJack(
    cardsArray,
    pCardOne,
    pCardTwo,
    pCardThree,
    pCardFour,
    pCardFive,
    hCardOne,
    hCardTwo,
    hCardThree,
    hCardFour,
    hCardFive,
    playerScore,
    houseScore
)

////////////////////////////// Buttons 

hitButton.style.display = 'none'
stayButton.style.display = 'none'

startButton.addEventListener('click', () => {
    blackJack.start()
    blackJack.score()
    hitButton.style.display = ''
    stayButton.style.display = ''
})

restartButton.addEventListener('click', () => {
    location.reload()
})

hitButton.addEventListener('click', () => {
    blackJack.hit()
    blackJack.score()
    blackJack.bust()
})

stayButton.addEventListener('click', () => {
    blackJack.stay()
    hitButton.style.display = 'none'
    startButton.style.display = 'none'
    stayButton.style.display = 'none'
})