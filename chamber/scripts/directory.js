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

const cards = document.querySelector('#cards');

async function getMembersData() {
    const response = await fetch('chamber/data/members.json');
    const data = await response.json();
    displayMembers(data.members);
};
getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let coName = document.createElement('h2');

        coName.textContent = member.name;

        card.appendChild(coName);

        cards.appendChild(card);
    });
};