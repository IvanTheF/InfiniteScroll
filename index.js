const cardContainer = document.getElementById("container");
const cardCountElem = document.getElementById("count");

const nextCard = 9;
let cardCount = 1;

const createCard = (index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = index;
    cardContainer.appendChild(card);
};

const addCards = (count) => {
    for (let i = 0; i < count; i++) {
        createCard(cardCount + i);
    }
    cardCount += count;
    cardCountElem.textContent = cardCount;
};

const infiniteScroll = () => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (endOfPage) {
        addCards(nextCard);
    }
};

const loadInitialCards = () => {
    addCards(nextCard);
};

window.onload = loadInitialCards;
window.addEventListener("scroll", infiniteScroll);
