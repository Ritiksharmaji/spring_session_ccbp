// Select the form and the list where birthdays will be displayed
const form = document.getElementById('birthday-form');
const birthdayList = document.getElementById('birthday-list');

// Load saved birthdays from localStorage on page load
window.onload = function() {
    loadBirthdays();
    checkTodaysBirthdays(); // Check for birthdays today and notify
};

// Add event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;

    if (name && birthday) {
        const birthdayData = { name, birthday };
        saveBirthday(birthdayData);
        displayBirthday(birthdayData);
        form.reset();
    }
});

// Save birthday data in localStorage
function saveBirthday(birthdayData) {
    let birthdays = JSON.parse(localStorage.getItem('birthdays')) || [];
    birthdays.push(birthdayData);
    localStorage.setItem('birthdays', JSON.stringify(birthdays));
}

// Load birthdays from localStorage and display them
function loadBirthdays() {
    const birthdays = JSON.parse(localStorage.getItem('birthdays')) || [];
    birthdays.forEach(birthdayData => {
        displayBirthday(birthdayData);
    });
}

// Display a single birthday
function displayBirthday(birthdayData) {
    const li = document.createElement('li');
    const birthdayDate = new Date(birthdayData.birthday);
    const formattedDate = birthdayDate.toDateString();

    li.textContent = `${birthdayData.name} - ${formattedDate}`;
    birthdayList.appendChild(li);
}

// Check if any saved birthdays match today's date
function checkTodaysBirthdays() {
    const birthdays = JSON.parse(localStorage.getItem('birthdays')) || [];
    const today = new Date().toISOString().slice(0, 10); // Format today's date as YYYY-MM-DD

    const todaysBirthdays = birthdays.filter(birthdayData => birthdayData.birthday === today);

    if (todaysBirthdays.length > 0) {
        todaysBirthdays.forEach(birthdayData => {
            showBirthdayNotification(birthdayData.name);
        });
    }
}

// Show a birthday notification
function showBirthdayNotification(name) {
    // Check if the browser supports notifications
    if ("Notification" in window) {
        // Request permission to send notifications if not already granted
        if (Notification.permission === "granted") {
            new Notification(`🎉 It's ${name}'s birthday today! 🎂`);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(`🎉 It's ${name}'s birthday today! 🎂`);
                }
            });
        }
    } else {
        console.log("This browser does not support desktop notifications.");
    }
}
