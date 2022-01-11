document.addEventListener('DOMContentLoaded', ()=> {
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];
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
    
    function createBoard() {
        for (let i=0; i < cardArray.length; i++) {
            let card = document.createElement('div');
            card.style.width = '100px';
            card.style.height = '100px';
            card.style.backgroundImage = "url('img/blank.jpg')";
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
        if (cardsChosen === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    //check for match

    createBoard();
    
})