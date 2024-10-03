let speedTypingTest_container = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let myform = document.getElementById("myform");

// Set up the timer
let count = 0;
let intervalID = setInterval(function() {
    count += 1;
    timer.textContent = count;
}, 1000);

// Fetch data in chunks
let url = "https://baconipsum.com/api/?type=all-meat&sentences=1000"; // Adjust as needed
let options = {
    method: "GET"
};

// Function to handle the data
function handleData(data) {
    let text = data.join(' ');
    quoteDisplay.textContent = text;
    console.log(text);
}

// Function to fetch more data if needed
function fetchData() {
    fetch(url, options)
        .then(response => response.json())
        .then(data => handleData(data))
        .catch(error => console.error('Error fetching data:', error));
}

// Fetch initial data
fetchData();

function submitData() {
    spinner.classList.remove("d-none");
    let predefine_data = quoteDisplay.textContent;
    let user_data = quoteInput.value;

    // Normalize whitespace for comparison
    let normalizedPredefineData = predefine_data.trim().replace(/\s+/g, ' ');
    let normalizedUserData = user_data.trim().replace(/\s+/g, ' ');

    if (normalizedPredefineData === normalizedUserData) {
        spinner.classList.add("d-none");
        result.textContent = "Your typing speed: " + count + " seconds";
        clearInterval(intervalID);
    } else {
        spinner.classList.add("d-none");
        result.textContent = "Incorrect typing, please check.";
    }
}

myform.addEventListener("submit", function(event) {
    submitData();
    event.preventDefault();
});

resetBtn.addEventListener("click", function() {
    window.location.reload();
});
