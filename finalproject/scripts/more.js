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

document.addEventListener("DOMContentLoaded", () => {
    const tStamp = document.querySelector("#timestamp");
    tStamp.value = new Date().toLocaleString();
});

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)
document.querySelector('#results').innerHTML = `<p>Thank you for filling out the survey, ${myInfo.get('fName')} ${myInfo.get('lName')}.</p> <p>Your free Maui Guide should be sent shortly to ${myInfo.get('email')} and ${myInfo.get('phone')}.</p><p>${myInfo.get('timestamp')}</p>`