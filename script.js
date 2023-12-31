let dateOfBirth;
const initialTextEl = document.getElementById("initialText");
const afterTextEl = document.getElementById("afterText");
const buttonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById('dob');

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
}

let updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;

    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;
    console.log(year, month, day, hour, minute, second);

    yearEl.innerHTML = makeTwoDigitNumber(year)
    monthEl.innerHTML = makeTwoDigitNumber(month)
    dayEl.innerHTML = makeTwoDigitNumber(day)
    hourEl.innerHTML = makeTwoDigitNumber(hour)
    minuteEl.innerHTML = makeTwoDigitNumber(minute)
    secondEl.innerHTML = makeTwoDigitNumber(second)
}

const setDOBHandler = () => {
    const dateString = dobInputEl.value
    dateOfBirth = new Date(dateString);
    console.log("DOB id ", dateOfBirth);
    if (dateOfBirth) {
        initialTextEl.classList.add("hide");
        afterTextEl.classList.remove("hide");
        setInterval(() => updateAge(), 1000);

    } else {
        afterTextEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }


};
// setDOBHandler();




buttonEl.addEventListener("click", setDOBHandler);