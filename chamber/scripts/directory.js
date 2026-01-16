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
    const response = await fetch('https://paigeerasmussen.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    displayMembers(data.members);
};
getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let coName = document.createElement('h2');
        let coAddress = document.createElement('p');
        let coPhone = document.createElement('p');
        let coWebsite = document.createElement('p');
        let coImage = document.createElement('img');
        let memberStatus = document.createElement('p');

        coName.textContent = member.name;
        coAddress.textContent = member.address;
        coPhone.textContent = member.phone;
        coWebsite.textContent = member.website;

        if (member.membership === 1) {
            memberStatus.textContent = "Member Status"
        } else if (member.membership === 2) {
            memberStatus.textContent = "Silver Status"
        } else if (member.membership === 3) {
            memberStatus.textContent = "Gold Status"
        }

        memberStatus.setAttribute("class", "status")

        coImage.setAttribute("src", `images/${member.image}`);
        coImage.setAttribute("alt", member.name);
        coImage.setAttribute("loading", "lazy");
        coImage.setAttribute("width", "400");
        coImage.setAttribute("height", "400");

        card.appendChild(coName);
        card.appendChild(coAddress);
        card.appendChild(coPhone);
        card.appendChild(coWebsite);
        card.appendChild(coImage);
        card.appendChild(memberStatus);

        cards.appendChild(card);
    });
};