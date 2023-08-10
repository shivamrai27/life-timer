let dateOfBirth = undefined;
const initialTextEl = document.getElementById("initialText");
const afterTextEl = document.getElementById("afterText");
const buttonEl = document.getElementById('dobButton');
const dobInputEl = document.getElementById('dob');


const setDOBHandler = function setDOBHandler() => {
    dateOfBirth = dobInputEl.value;
    console.log("DOB id ", dateOfBirth);
};
buttonEl.addEventListener("click", setDOBHandler);