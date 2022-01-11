document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var cardsWonId = [];
    const resultDisplay = document.querySelector('#result');
    const cardArray = [
        {
            name: 'canyon',
            img: 'img/canyon.jpg'
        },
        {
            name: 'canyon',
            img: 'img/canyon.jpg'
        },
        {
            name: 'centurion',
            img: 'img/centurion.jpg'
        },
        {
            name: 'centurion',
            img: 'img/centurion.jpg'
        },
        {
            name: 'felt',
            img: 'img/felt.jpg'
        },
        {
            name: 'felt',
            img: 'img/felt.jpg'
        },
        {
            name: 'kross',
            img: 'img/kross.jpg'
        },
        {
            name: 'kross',
            img: 'img/kross.jpg'
        },
        {
            name: 'mamy',
            img: 'img/mamy.jpg'
        },
        {
            name: 'mamy',
            img: 'img/mamy.jpg'
        },
        {
            name: 'trifox',
            img: 'img/trifox.jpg'
        },
        {
            name: 'trifox',
            img: 'img/trifox.jpg'
        }
    ];

    //sort cardArray randomly
    cardArray.sort( ()=> 0.5 - Math.random())
    
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            let card = document.createElement('div');
            card.style.width = '100px';
            card.style.height = '100px';
            card.style.backgroundImage = "url('img/card.jpg')";
            card.style.backgroundSize = 'cover';
            card.dataset.id = i;
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }   

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.style.backgroundImage = "url('" + cardArray[cardId].img + "')";
        if (cardsChosen.length === 2) {
            var cards = document.querySelectorAll('.grid div');
            cards.forEach(card => card.removeEventListener('click', flipCard));
            setTimeout(checkForMatch, 500);
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('.grid div');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].style.backgroundImage = "url('img/blank.jpg')";
            cards[optionTwoId].style.backgroundImage = "url('img/blank.jpg')";
            cardsWon.push(cardsChosen);
            cardsWonId.push(cardsChosenId[0]);
            cardsWonId.push(cardsChosenId[1]);
            console.log(cardsWonId)
        } else {
            cards[optionOneId].style.backgroundImage = "url('img/card.jpg')";
            cards[optionTwoId].style.backgroundImage = "url('img/card.jpg')"
            alert('Sorry, try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        cards.forEach(card => card.addEventListener('click', flipCard));
        cardsWonId.forEach(cardWonId => cards[cardWonId].removeEventListener('click', flipCard));
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations. You won!'
        }
        
    }

    createBoard();
    
})