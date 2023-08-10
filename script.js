let dateOfBirth;
const initialTextEl = document.getElementById("initialText");
const afterTextEl = document.getElementById("afterText");
const buttonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById('dob');


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
buttonEl.addEventListener("click", setDOBHandler);