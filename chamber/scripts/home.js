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
    const randomSpotlights = selectRandomSpotlights(data.members);
    displaySpotlight(randomSpotlights);
};
getMembersData();

function selectRandomSpotlights(members) {

    const qualifiedMembers = members.filter(
        member => member.membership === 2 || member.membership === 3
    );

    if (qualifiedMembers.length < 2) {
        throw new Error("Array is too short");
    }

    let index1 = Math.floor(Math.random() * qualifiedMembers.length);
    let index2 = Math.floor(Math.random() * qualifiedMembers.length);
    while (index2 === index1) {
        index2 = Math.floor(Math.random() * qualifiedMembers.length);
    }
    let index3 = Math.floor(Math.random() * qualifiedMembers.length);
    while (index3 === index1 || index3 === index2) {
        index3 = Math.floor(Math.random() * qualifiedMembers.length);
    }
    return [qualifiedMembers[index1], qualifiedMembers[index2], qualifiedMembers[index3]]
};

const displaySpotlight = (members) => {
    members.forEach((member) => {
        let spotlightCard = document.createElement('section');
        let coName = document.createElement('h2');
        let coAddress = document.createElement('p');
        let coPhone = document.createElement('p');
        let coWebsite = document.createElement('p');
        let coStatus = document.createElement('p');
        let coImage = document.createElement('img');

        coName.textContent = member.name;
        coAddress.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;
        coPhone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;
        coWebsite.innerHTML = `<strong>URL:</strong> ${member.website}`;

        if (member.membership === 2) {
            coStatus.textContent = "Membership Level: Silver"
        } else if (member.membership === 3) {
            coStatus.textContent = "Membership Level: Gold"
        }
        coStatus.setAttribute("class", "costatus")

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
        spotlightCard.appendChild(coStatus);

        spotlight.appendChild(spotlightCard);
    });
};

const currentWeatherSection = document.querySelector("#currentWeather");
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
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

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

async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const forData = await response.json();
            console.log(forData);
            displayForecast(forData);
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
    let weatherIcon = document.createElement('img');
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentWeatherSection.appendChild(weatherIcon)

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
}

function displayForecast(forData) {
    let date = new Date(forData.list[0].dt * 1000);
    let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const nextDay = new Date(forData.list[9].dt * 1000);
    let nextDayOfWeek = nextDay.toLocaleDateString('en-US', { weekday: 'long' });
    const dayAfter = new Date(forData.list[16].dt * 1000);
    let thirdDayOfWeek = dayAfter.toLocaleDateString('en-US', { weekday: 'long' });

    currentDay.innerHTML = `${dayOfWeek}: ${forData.list[0].main.temp}&deg;F`;
    dayTwo.innerHTML = `${nextDayOfWeek}: ${forData.list[9].main.temp}&deg;F`;
    dayThree.innerHTML = `${thirdDayOfWeek}: ${forData.list[17].main.temp}&deg;F`;
}

apiFetch()
forecastFetch()