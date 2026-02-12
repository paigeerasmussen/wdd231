import attractions from "../data/attractions.mjs";
const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").innerHTML = document.lastModified;

const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector("#nav-bar")

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});

const cards = document.querySelector("#cards");

const displayAttractions = (filteredAttractions) => {
    cards.innerHTML = "";
    filteredAttractions.forEach(attraction => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let address = document.createElement('address');
        let price = document.createElement('p');
        let image = document.createElement('img');
        let obutton = document.createElement('button');
        let dialog = document.createElement('dialog');
        let description = document.createElement('p');
        let cbutton = document.createElement('button');

        title.textContent = attraction.name;
        address.textContent = attraction.address;
        price.textContent = attraction.price;
        description.textContent = attraction.description;
        obutton.textContent = "Learn More"
        cbutton.textContent = "X"

        image.setAttribute("src", `images/${attraction.image}`);
        image.setAttribute("alt", attraction.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");

        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(price);
        card.appendChild(obutton);
        card.appendChild(dialog);

        dialog.appendChild(description);
        dialog.appendChild(cbutton);

        cards.appendChild(card);

        obutton.addEventListener("click", () => {
            dialog.showModal();
        });

        cbutton.addEventListener("click", () => {
            dialog.close();
        });
    });
};

const all = document.querySelector("#all")
const food = document.querySelector("#food");
const outdoor = document.querySelector("#outdoor");
const relax = document.querySelector("#relax");

all.addEventListener("click", () => {
    displayAttractions(attractions);
});

food.addEventListener('click', () => {
    const filteredAttractions = attractions.filter(attraction => {
        return attraction.category === "food";
    });
    displayAttractions(filteredAttractions);
});

outdoor.addEventListener('click', () => {
    const filteredAttractions = attractions.filter(attraction => {
        return attraction.category === "outdoor";
    });
    displayAttractions(filteredAttractions);
});

relax.addEventListener('click', () => {
    const filteredAttractions = attractions.filter(attraction => {
        return attraction.category === "relax";
    });
    displayAttractions(filteredAttractions);
});

displayAttractions(attractions);