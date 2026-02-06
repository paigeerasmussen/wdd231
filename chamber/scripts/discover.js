import areasInterest from "../data/areas.mjs"
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector("#nav-bar")

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const cards = document.querySelector("#areas");

areasInterest.forEach(area => {
    let card = document.createElement('section');
    let title = document.createElement('h2');
    let address = document.createElement('address');
    let description = document.createElement('p');
    let figure = document.createElement('figure');
    let image = document.createElement('img');
    let button = document.createElement('button');

    title.textContent = area.title;
    address.textContent = area.address;
    description.textContent = area.description;
    button.textContent = "Learn More"

    image.setAttribute("src", `images/${area.image}`);
    image.setAttribute("alt", area.title);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");

    figure.appendChild(image);

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(description);
    card.appendChild(address);
    card.appendChild(button);

    cards.appendChild(card);
});

function displayLastVisit() {
    const lastVisit = localStorage.getItem('lastVisitDate');
    const message = document.querySelector("#date");

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const currentDate = new Date();

        const difference = currentDate - lastVisitDate;

        const differenceDays = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (differenceDays < 1) {
            message.textContent = 'Back so soon! Awesome!'
        }
        else if (differenceDays === 1) {
            message.textContent = 'You last visited 1 day ago.'
        }
        else {
            message.textContent = `You last visited ${differenceDays} days ago.`
        }

    }
    else {
        message.textContent = 'Welcome! Let us know if you have any questions.'
    }

    localStorage.setItem('lastVisitDate', new Date().toISOString());
}
displayLastVisit();
