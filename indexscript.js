const yesBtn = document.getElementById("Yes");
const noBtn = document.getElementById("No");
const question = document.getElementById("question");
var noCount = 0;
let fontSize = window.getComputedStyle(yesBtn).fontSize;
let fontSizeNumber = parseInt(fontSize);

const noResponses = [
    "Are you sure? 🥺",
    "Pweasee 😔",
    "I'll be very sad 😢",
    "I'll cry fr 😭",
    "Think about it again 🥹",
    "Okay now the Yes button will take over 😈"
];

noBtn.addEventListener("click", function () {
    if (noCount < noResponses.length) {
        noBtn.textContent = noResponses[noCount];
    }

    fontSizeNumber *= 1.5; // Faster size increase
    yesBtn.style.fontSize = fontSizeNumber + "px";
    yesBtn.style.padding = fontSizeNumber / 3 + "px";

    noCount++;

    if (noCount === 6) {
        yesBtn.style.transition = "all 0.5s ease-out";
        yesBtn.style.position = "absolute";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = "translate(-50%, -50%) scale(3)"; // Scales up nicely
        yesBtn.style.width = "100vw"; // Keeps proper width
        yesBtn.style.height = "100vh"; // Keeps proper height
        yesBtn.style.padding = "20px 40px"; // Proper padding
        yesBtn.style.fontSize = "3rem"; // Large but readable
        yesBtn.textContent = "YES 😍"; // Clear text

        noBtn.disabled = true; // Disable No button
        noBtn.style.display = "none"; // Hide No button
    }
});

yesBtn.addEventListener("click", function(){
    yesBtn.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-out";
    yesBtn.style.transform = "scale(10)";
    yesBtn.style.opacity = "0"; 
    setTimeout(() => {
        window.location.href = "yes.html"; // Change this to your URL
    }, 500); 
})