const npOpen = document.querySelector("#npOpen");
const npDialog = document.querySelector("#npDialog");
const npClose = document.querySelector("#npClose");

npOpen.addEventListener("click", () => {
    npDialog.showModal();
});

npClose.addEventListener("click", () => {
    npDialog.close();
});

const bronzeOpen = document.querySelector("#bronzeOpen");
const bronzeDialog = document.querySelector("#bronzeDialog");
const bronzeClose = document.querySelector("#bronzeClose");

bronzeOpen.addEventListener("click", () => {
    bronzeDialog.showModal();
});

bronzeClose.addEventListener("click", () => {
    bronzeDialog.close();
});

const silverOpen = document.querySelector("#silverOpen");
const silverDialog = document.querySelector("#silverDialog");
const silverClose = document.querySelector("#silverClose");

silverOpen.addEventListener("click", () => {
    silverDialog.showModal();
});

silverClose.addEventListener("click", () => {
    silverDialog.close();
});

const goldOpen = document.querySelector("#goldOpen");
const goldDialog = document.querySelector("#goldDialog");
const goldClose = document.querySelector("#goldClose");

goldOpen.addEventListener("click", () => {
    goldDialog.showModal();
});

goldClose.addEventListener("click", () => {
    goldDialog.close();
});