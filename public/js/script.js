const answers_no = {
    english: [
        "No",
        "Bruh",
        "🤨",
        "まじで..",
        "Okay the jokes over just press the button 😂"
    ],
};

answers_yes = {
    "english": "Yes",
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.jpeg";
        refreshBanner();
    }
    clicks++;
    // Increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // Change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // Change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();

    // Hide the question heading
    let questionHeading = document.getElementById("question-heading");
    questionHeading.style.display = "none"; // Hide the question text

    // Hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";

    // Show message div (containing the GIF and "Return" button)
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block"; // Make the message visible
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}


