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

document.addEventListener("DOMContentLoaded", () => {
    const tStamp = document.querySelector("#timestamp");
    tStamp.value = new Date().toLocaleString();;
});

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)
document.querySelector('#results').innerHTML = `<p>${myInfo.get('fName')} ${myInfo.get('lName')}</p> <p>${myInfo.get('email')}</p> <p>${myInfo.get('phone')}</p> <p>${myInfo.get('organization')}</p> <p>${myInfo.get('timestamp')}</p>`