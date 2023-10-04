const cardContainer = document.getElementById("container");
const cardCountElem = document.getElementById("count");
const loader = document.getElementById("loading");

const nextCard = 9;

let cardCount = 1;

const createCard = (index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = index;
    cardContainer.appendChild(card);
};

const infiniteScroll = () => {
    const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (endOfPage) {
        for (let i = 0; i < nextCard; i += 1) {
            createCard(cardCount + i);
        }
        cardCount += nextCard;
        cardCountElem.innerHTML = cardCount;
    }
};

window.onload = function () {
    infiniteScroll();
};

window.addEventListener("scroll", infiniteScroll);