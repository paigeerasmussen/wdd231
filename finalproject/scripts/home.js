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

const kahului = document.querySelector("#kahului")
const lahaina = document.querySelector("#lahaina")
const haleakala = document.querySelector("#haleakala")

const myKey = "36d89319046d7f583b18d6bb4cdc23be"

const kahuluiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.88883427405483&lon=-156.47173828252645&appid=${myKey}&units=imperial`;
const lahainaUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.881721590362343&lon=-156.67291384270192&appid=${myKey}&units=imperial`;
const haleakalaUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=20.73511794183953&lon=-156.16598216544594&appid=${myKey}&units=imperial`;

async function kahuluiFetch() {
    try {
        const response = await fetch(kahuluiUrl);
        if (response.ok) {
            const kahuluiData = await response.json();
            console.log(kahuluiData);
            kahaluiResults(kahuluiData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function lahainaFetch() {
    try {
        const response = await fetch(lahainaUrl);
        if (response.ok) {
            const lahainaData = await response.json();
            console.log(lahainaData);
            lahainaResults(lahainaData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function haleakalaFetch() {
    try {
        const response = await fetch(haleakalaUrl);
        if (response.ok) {
            const haleakalaData = await response.json();
            console.log(haleakalaData);
            haleakalaResults(haleakalaData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function kahaluiResults(kahuluiData) {
    let date = new Date(kahuluiData.list[0].dt * 1000);
    let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    let dayTwo = new Date(kahuluiData.list[9].dt * 1000);
    let dayTwoOfWeek = dayTwo.toLocaleDateString('en-US', { weekday: 'short' });
    let dayThree = new Date(kahuluiData.list[17].dt * 1000);
    let dayThreeOfWeek = dayThree.toLocaleDateString('en-US', { weekday: 'short' });
    let dayFour = new Date(kahuluiData.list[25].dt * 1000);
    let dayFourOfWeek = dayFour.toLocaleDateString('en-US', { weekday: 'short' });
    let dayFive = new Date(kahuluiData.list[33].dt * 1000);
    let dayFiveOfWeek = dayFive.toLocaleDateString('en-US', { weekday: 'short' });

    let kahuluiCard = document.createElement('section');
    let one = document.createElement('div');
    let oneDay = document.createElement('p');
    let oneTemp = document.createElement('p');
    let oneDesc = document.createElement('p');
    let oneIcon = document.createElement('img');

    let two = document.createElement('div');
    let twoDay = document.createElement('p');
    let twoDesc = document.createElement('p');
    let twoTemp = document.createElement('p');
    let twoIcon = document.createElement('img');

    let three = document.createElement('div');
    let threeDay = document.createElement('p');
    let threeTemp = document.createElement('p');
    let threeDesc = document.createElement('p');
    let threeIcon = document.createElement('img');

    let four = document.createElement('div');
    let fourDay = document.createElement('p');
    let fourTemp = document.createElement('p');
    let fourDesc = document.createElement('p');
    let fourIcon = document.createElement('img');

    let five = document.createElement('div');
    let fiveDay = document.createElement('p');
    let fiveTemp = document.createElement('p');
    let fiveDesc = document.createElement('p');
    let fiveIcon = document.createElement('img');

    oneDay.innerHTML = `${dayOfWeek}`;
    oneTemp.innerHTML = `${kahuluiData.list[0].main.temp}&deg;F`
    oneDesc.innerHTML = `${kahuluiData.list[0].weather[0].description}`
    const oneIconSrc = `https://openweathermap.org/img/wn/${kahuluiData.list[0].weather[0].icon}@2x.png`;
    oneIcon.setAttribute('src', oneIconSrc);
    oneIcon.setAttribute('alt', oneDesc);

    twoDay.innerHTML = `${dayTwoOfWeek}`;
    twoTemp.innerHTML = `${kahuluiData.list[9].main.temp}&deg;F`
    twoDesc.innerHTML = `${kahuluiData.list[9].weather[0].description}`
    const twoIconSrc = `https://openweathermap.org/img/wn/${kahuluiData.list[9].weather[0].icon}@2x.png`;
    twoIcon.setAttribute('src', twoIconSrc);
    twoIcon.setAttribute('alt', twoDesc);

    threeDay.innerHTML = `${dayThreeOfWeek}`;
    threeTemp.innerHTML = `${kahuluiData.list[17].main.temp}&deg;F`
    threeDesc.innerHTML = `${kahuluiData.list[17].weather[0].description}`
    const threeIconSrc = `https://openweathermap.org/img/wn/${kahuluiData.list[17].weather[0].icon}@2x.png`;
    threeIcon.setAttribute('src', threeIconSrc);
    threeIcon.setAttribute('alt', threeDesc);

    fourDay.innerHTML = `${dayFourOfWeek}`;
    fourTemp.innerHTML = `${kahuluiData.list[25].main.temp}&deg;F`
    fourDesc.innerHTML = `${kahuluiData.list[25].weather[0].description}`
    const fourIconSrc = `https://openweathermap.org/img/wn/${kahuluiData.list[25].weather[0].icon}@2x.png`;
    fourIcon.setAttribute('src', fourIconSrc);
    fourIcon.setAttribute('alt', fourDesc);

    fiveDay.innerHTML = `${dayFiveOfWeek}`;
    fiveTemp.innerHTML = `${kahuluiData.list[33].main.temp}&deg;F`
    fiveDesc.innerHTML = `${kahuluiData.list[33].weather[0].description}`
    const fiveIconSrc = `https://openweathermap.org/img/wn/${kahuluiData.list[33].weather[0].icon}@2x.png`;
    fiveIcon.setAttribute('src', fiveIconSrc);
    fiveIcon.setAttribute('alt', fiveDesc);

    kahuluiCard.appendChild(one);
    one.appendChild(oneDay);
    one.appendChild(oneTemp);
    one.appendChild(oneDesc);
    one.appendChild(oneIcon);

    kahuluiCard.appendChild(two);
    two.appendChild(twoDay);
    two.appendChild(twoTemp);
    two.appendChild(twoDesc);
    two.appendChild(twoIcon);

    kahuluiCard.appendChild(three);
    three.appendChild(threeDay);
    three.appendChild(threeTemp);
    three.appendChild(threeDesc);
    three.appendChild(threeIcon);

    kahuluiCard.appendChild(four);
    four.appendChild(fourDay);
    four.appendChild(fourTemp);
    four.appendChild(fourDesc);
    four.appendChild(fourIcon);

    kahuluiCard.appendChild(five);
    five.appendChild(fiveDay);
    five.appendChild(fiveTemp);
    five.appendChild(fiveDesc);
    five.appendChild(fiveIcon);

    kahului.appendChild(kahuluiCard)
}

function lahainaResults(lahainaData) {
    let date = new Date(lahainaData.list[0].dt * 1000);
    let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    let dayTwo = new Date(lahainaData.list[9].dt * 1000);
    let dayTwoOfWeek = dayTwo.toLocaleDateString('en-US', { weekday: 'short' });
    let dayThree = new Date(lahainaData.list[17].dt * 1000);
    let dayThreeOfWeek = dayThree.toLocaleDateString('en-US', { weekday: 'short' });
    let dayFour = new Date(lahainaData.list[25].dt * 1000);
    let dayFourOfWeek = dayFour.toLocaleDateString('en-US', { weekday: 'short' });
    let dayFive = new Date(lahainaData.list[33].dt * 1000);
    let dayFiveOfWeek = dayFive.toLocaleDateString('en-US', { weekday: 'short' });

    let lahainaCard = document.createElement('section');
    let one = document.createElement('div');
    let oneDay = document.createElement('p');
    let oneTemp = document.createElement('p');
    let oneDesc = document.createElement('p');
    let oneIcon = document.createElement('img');

    let two = document.createElement('div');
    let twoDay = document.createElement('p');
    let twoDesc = document.createElement('p');
    let twoTemp = document.createElement('p');
    let twoIcon = document.createElement('img');

    let three = document.createElement('div');
    let threeDay = document.createElement('p');
    let threeTemp = document.createElement('p');
    let threeDesc = document.createElement('p');
    let threeIcon = document.createElement('img');

    let four = document.createElement('div');
    let fourDay = document.createElement('p');
    let fourTemp = document.createElement('p');
    let fourDesc = document.createElement('p');
    let fourIcon = document.createElement('img');

    let five = document.createElement('div');
    let fiveDay = document.createElement('p');
    let fiveTemp = document.createElement('p');
    let fiveDesc = document.createElement('p');
    let fiveIcon = document.createElement('img');

    oneDay.innerHTML = `${dayOfWeek}`;
    oneTemp.innerHTML = `${lahainaData.list[0].main.temp}&deg;F`
    oneDesc.innerHTML = `${lahainaData.list[0].weather[0].description}`
    const oneIconSrc = `https://openweathermap.org/img/wn/${lahainaData.list[0].weather[0].icon}@2x.png`;
    oneIcon.setAttribute('src', oneIconSrc);
    oneIcon.setAttribute('alt', oneDesc);

    twoDay.innerHTML = `${dayTwoOfWeek}`;
    twoTemp.innerHTML = `${lahainaData.list[9].main.temp}&deg;F`
    twoDesc.innerHTML = `${lahainaData.list[9].weather[0].description}`
    const twoIconSrc = `https://openweathermap.org/img/wn/${lahainaData.list[9].weather[0].icon}@2x.png`;
    twoIcon.setAttribute('src', twoIconSrc);
    twoIcon.setAttribute('alt', twoDesc);

    threeDay.innerHTML = `${dayThreeOfWeek}`;
    threeTemp.innerHTML = `${lahainaData.list[17].main.temp}&deg;F`
    threeDesc.innerHTML = `${lahainaData.list[17].weather[0].description}`
    const threeIconSrc = `https://openweathermap.org/img/wn/${lahainaData.list[17].weather[0].icon}@2x.png`;
    threeIcon.setAttribute('src', threeIconSrc);
    threeIcon.setAttribute('alt', threeDesc);

    fourDay.innerHTML = `${dayFourOfWeek}`;
    fourTemp.innerHTML = `${lahainaData.list[25].main.temp}&deg;F`
    fourDesc.innerHTML = `${lahainaData.list[25].weather[0].description}`
    const fourIconSrc = `https://openweathermap.org/img/wn/${lahainaData.list[25].weather[0].icon}@2x.png`;
    fourIcon.setAttribute('src', fourIconSrc);
    fourIcon.setAttribute('alt', fourDesc);

    fiveDay.innerHTML = `${dayFiveOfWeek}`;
    fiveTemp.innerHTML = `${lahainaData.list[33].main.temp}&deg;F`
    fiveDesc.innerHTML = `${lahainaData.list[33].weather[0].description}`
    const fiveIconSrc = `https://openweathermap.org/img/wn/${lahainaData.list[33].weather[0].icon}@2x.png`;
    fiveIcon.setAttribute('src', fiveIconSrc);
    fiveIcon.setAttribute('alt', fiveDesc);

    lahainaCard.appendChild(one);
    one.appendChild(oneDay);
    one.appendChild(oneTemp);
    one.appendChild(oneDesc);
    one.appendChild(oneIcon);

    lahainaCard.appendChild(two);
    two.appendChild(twoDay);
    two.appendChild(twoTemp);
    two.appendChild(twoDesc);
    two.appendChild(twoIcon);

    lahainaCard.appendChild(three);
    three.appendChild(threeDay);
    three.appendChild(threeTemp);
    three.appendChild(threeDesc);
    three.appendChild(threeIcon);

    lahainaCard.appendChild(four);
    four.appendChild(fourDay);
    four.appendChild(fourTemp);
    four.appendChild(fourDesc);
    four.appendChild(fourIcon);

    lahainaCard.appendChild(five);
    five.appendChild(fiveDay);
    five.appendChild(fiveTemp);
    five.appendChild(fiveDesc);
    five.appendChild(fiveIcon);

    lahaina.appendChild(lahainaCard)
}

function haleakalaResults(haleakalaData) {
    let date = new Date(haleakalaData.list[0].dt * 1000);
    let dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
    let dayTwo = new Date(haleakalaData.list[9].dt * 1000);
    let dayTwoOfWeek = dayTwo.toLocaleDateString('en-US', { weekday: 'short' });
    let dayThree = new Date(haleakalaData.list[17].dt * 1000);
    let dayThreeOfWeek = dayThree.toLocaleDateString('en-US', { weekday: 'short' });
    let dayFour = new Date(haleakalaData.list[25].dt * 1000);
    let dayFourOfWeek = dayFour.toLocaleDateString('en-US', { weekday: 'short' });
    let dayFive = new Date(haleakalaData.list[33].dt * 1000);
    let dayFiveOfWeek = dayFive.toLocaleDateString('en-US', { weekday: 'short' });

    let haleakalaCard = document.createElement('section');
    let one = document.createElement('div');
    let oneDay = document.createElement('p');
    let oneTemp = document.createElement('p');
    let oneDesc = document.createElement('p');
    let oneIcon = document.createElement('img');

    let two = document.createElement('div');
    let twoDay = document.createElement('p');
    let twoDesc = document.createElement('p');
    let twoTemp = document.createElement('p');
    let twoIcon = document.createElement('img');

    let three = document.createElement('div');
    let threeDay = document.createElement('p');
    let threeTemp = document.createElement('p');
    let threeDesc = document.createElement('p');
    let threeIcon = document.createElement('img');

    let four = document.createElement('div');
    let fourDay = document.createElement('p');
    let fourTemp = document.createElement('p');
    let fourDesc = document.createElement('p');
    let fourIcon = document.createElement('img');

    let five = document.createElement('div');
    let fiveDay = document.createElement('p');
    let fiveTemp = document.createElement('p');
    let fiveDesc = document.createElement('p');
    let fiveIcon = document.createElement('img');

    oneDay.innerHTML = `${dayOfWeek}`;
    oneTemp.innerHTML = `${haleakalaData.list[0].main.temp}&deg;F`
    oneDesc.innerHTML = `${haleakalaData.list[0].weather[0].description}`
    const oneIconSrc = `https://openweathermap.org/img/wn/${haleakalaData.list[0].weather[0].icon}@2x.png`;
    oneIcon.setAttribute('src', oneIconSrc);
    oneIcon.setAttribute('alt', oneDesc);

    twoDay.innerHTML = `${dayTwoOfWeek}`;
    twoTemp.innerHTML = `${haleakalaData.list[9].main.temp}&deg;F`
    twoDesc.innerHTML = `${haleakalaData.list[9].weather[0].description}`
    const twoIconSrc = `https://openweathermap.org/img/wn/${haleakalaData.list[9].weather[0].icon}@2x.png`;
    twoIcon.setAttribute('src', twoIconSrc);
    twoIcon.setAttribute('alt', twoDesc);

    threeDay.innerHTML = `${dayThreeOfWeek}`;
    threeTemp.innerHTML = `${haleakalaData.list[17].main.temp}&deg;F`
    threeDesc.innerHTML = `${haleakalaData.list[17].weather[0].description}`
    const threeIconSrc = `https://openweathermap.org/img/wn/${haleakalaData.list[17].weather[0].icon}@2x.png`;
    threeIcon.setAttribute('src', threeIconSrc);
    threeIcon.setAttribute('alt', threeDesc);

    fourDay.innerHTML = `${dayFourOfWeek}`;
    fourTemp.innerHTML = `${haleakalaData.list[25].main.temp}&deg;F`
    fourDesc.innerHTML = `${haleakalaData.list[25].weather[0].description}`
    const fourIconSrc = `https://openweathermap.org/img/wn/${haleakalaData.list[25].weather[0].icon}@2x.png`;
    fourIcon.setAttribute('src', fourIconSrc);
    fourIcon.setAttribute('alt', fourDesc);

    fiveDay.innerHTML = `${dayFiveOfWeek}`;
    fiveTemp.innerHTML = `${haleakalaData.list[33].main.temp}&deg;F`
    fiveDesc.innerHTML = `${haleakalaData.list[33].weather[0].description}`
    const fiveIconSrc = `https://openweathermap.org/img/wn/${haleakalaData.list[33].weather[0].icon}@2x.png`;
    fiveIcon.setAttribute('src', fiveIconSrc);
    fiveIcon.setAttribute('alt', fiveDesc);

    haleakalaCard.appendChild(one);
    one.appendChild(oneDay);
    one.appendChild(oneTemp);
    one.appendChild(oneDesc);
    one.appendChild(oneIcon);

    haleakalaCard.appendChild(two);
    two.appendChild(twoDay);
    two.appendChild(twoTemp);
    two.appendChild(twoDesc);
    two.appendChild(twoIcon);

    haleakalaCard.appendChild(three);
    three.appendChild(threeDay);
    three.appendChild(threeTemp);
    three.appendChild(threeDesc);
    three.appendChild(threeIcon);

    haleakalaCard.appendChild(four);
    four.appendChild(fourDay);
    four.appendChild(fourTemp);
    four.appendChild(fourDesc);
    four.appendChild(fourIcon);

    haleakalaCard.appendChild(five);
    five.appendChild(fiveDay);
    five.appendChild(fiveTemp);
    five.appendChild(fiveDesc);
    five.appendChild(fiveIcon);

    haleakala.appendChild(haleakalaCard)
}

kahuluiFetch()
lahainaFetch()
haleakalaFetch()

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