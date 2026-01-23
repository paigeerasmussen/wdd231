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

const spotlight = document.querySelector('#spotlight');

async function getMembersData() {
    const response = await fetch('https://paigeerasmussen.github.io/wdd231/chamber/data/members.json');
    const data = await response.json();
    displaySpotlight(data.members);
};
getMembersData();

// function shuffleSpotlight(members) {
//     for (let i = members.length - 1: i > 0: i--) {
//         const j = Math.floor(Math.random() * (i +1));
//         [members[i], members[j]] = [members[j], members[i]]
//     }
// });

const displaySpotlight = (members) => {
    members.forEach((member) => {
        let spotlightCard = document.createElement('section');
        let coName = document.createElement('h2');
        let coAddress = document.createElement('p');
        let coPhone = document.createElement('p');
        let coWebsite = document.createElement('p');
        let coImage = document.createElement('img');

        coName.textContent = member.name;
        coAddress.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;
        coPhone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
        coWebsite.innerHTML = `<strong>URL:</strong> ${member.website}`;

        coImage.setAttribute("src", `images/${member.image}`);
        coImage.setAttribute("alt", `${member.name} Company`);
        coImage.setAttribute("loading", "lazy");
        coImage.setAttribute("width", "100");
        coImage.setAttribute("height", "100");

        spotlightCard.appendChild(coName);
        spotlightCard.appendChild(coImage);
        spotlightCard.appendChild(coAddress);
        spotlightCard.appendChild(coPhone);
        spotlightCard.appendChild(coWebsite);

        spotlight.appendChild(spotlightCard);
    });
};

const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#temp");
const weatherCond = document.querySelector("#condition");
const highTemp = document.querySelector("#high");
const lowTemp = document.querySelector("#low");
const humidity = document.querySelector("#humid");
const sunrise = document.querySelector("#rise");
const sunset = document.querySelector("#set");
const currentDay = document.querySelector("#today");
const dayTwo = document.querySelector("#tomorrow");
const dayThree = document.querySelector("#daythree");

const myLat = "40.3932416273039"
const myLong = "-111.85160967993846"
const myKey = "36d89319046d7f583b18d6bb4cdc23be"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherCond.textContent = desc;
    highTemp.innerHTML = `${data.main.temp_max}&deg;F`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg;F`;
    humidity.textContent = `${data.main.humidity}%`;

    const sunriseUnix = data.sys.sunrise;
    const sunsetUnix = data.sys.sunset;
    const sunriseDate = new Date(sunriseUnix * 1000);
    const sunsetDate = new Date(sunsetUnix * 1000);
    const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    sunrise.innerHTML = sunriseTime;
    sunset.innerHTML = sunsetTime;

    let date = new Date(data.dt * 1000);
    let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    let nextDayOfWeek = nextDay.toLocaleDateString('en-US', { weekday: 'long' });
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    let thirdDayOfWeek = dayAfter.toLocaleDateString('en-US', { weekday: 'long' });

    currentDay.innerHTML = `${dayOfWeek}: ${data.main.temp_max}&deg;F`;
    dayTwo.innerHTML = `${nextDayOfWeek}: ${data.main.temp_max}&deg;F`;
    dayThree.innerHTML = `${thirdDayOfWeek}: ${data.main.temp_max}&deg;F`;

    // for (let i = 1; i <= 3; i++) {
    //     const forecastContainer = document.getElementById('forecast')
    //     const dailyData = data[i];
    //     const date = new Date(data.dt * 1000);
    //     const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    //     const temp = dailyData.temp.day.toFixed(0);

    //     const dayForcast = document.createElement('div');
    //     dayForcast.innerHTML = `${dayName}: ${temp}&deg;F`;
    //     forecastContainer.appendChild(dayForcast);
    // }
}

apiFetch()