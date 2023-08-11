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



const setDOBHandler = () => {
    dateOfBirth = dobInputEl.value;
    console.log("DOB id ", dateOfBirth);
    if (dateOfBirth) {
        initialTextEl.classList.add("hide");
        afterTextEl.classList.remove("hide");
    } else {
        afterTextEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
};
setDOBHandler();
buttonEl.addEventListener("click", setDOBHandler);