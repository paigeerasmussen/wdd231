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

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

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
        let coWebsite = document.createElement('a');
        let coImage = document.createElement('img');
        let memberStatus = document.createElement('p');

        coName.textContent = member.name;
        coAddress.textContent = member.address;
        coPhone.textContent = member.phone;
        coWebsite.href = member.website;
        coWebsite.textContent = member.website;

        if (member.membership === 1) {
            memberStatus.textContent = "Membership Level: Member"
        } else if (member.membership === 2) {
            memberStatus.textContent = "Membership Level: Silver"
        } else if (member.membership === 3) {
            memberStatus.textContent = "Membership Level: Gold"
        }

        memberStatus.setAttribute("class", "status")

        coImage.setAttribute("src", `images/${member.image}`);
        coImage.setAttribute("alt", `${member.name} Company`);
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