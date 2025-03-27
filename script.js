// Navigation button actions
function goToHome() {
    window.location.href = "index.html"; // Change to your home page
}

function goToProjects() {
    window.location.href = "projects.html"; // Change to your projects page
}

function goToCode() {
    window.location.href = "code.html"; // Change to your code page
}

document.addEventListener("DOMContentLoaded", function() {
    // Disable right-click
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
    
    // Prevent dragging image
    document.querySelector("#profile-pic").ondragstart = function() {
        return false;
    };
    
    // Detect Print Screen key press
    document.addEventListener("keyup", function(event) {
        if (event.key === "PrintScreen") {
            alert("Screenshot is disabled!");
            navigator.clipboard.writeText(""); // Clear clipboard
        }
    });

    // Intersection Observer for section visibility
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Array of random facts about you
    const facts = [
        "Engineering Graphics Pro 🎨📐 – Scored A+ and love the subject!",
        "RoboRumble Competitor 🤖🔥 – Participated in RoboRumble 2.0!",
        "UI/UX Explorer 🎨💡 – Learning Figma and UI/UX design.",
        "Hopeless Romantic 💕🥰 – Loves affection, hugs, and sweet words!",
        "Portfolio Perfectionist 💻🎨 – Keeping it neatly structured.",
        "Gamer 🎮🕹 – Loves playing games in free time!",
        "December Baby 🎂🎁 – Born on December 9th!",
        "Tech-Savvy 💾👨‍💻 – Enjoys working on coding and digital projects.",
    ];

    // Function to display a random fact
    function showRandomFact() {
        const factIndex = Math.floor(Math.random() * facts.length);
        document.getElementById("fact-display").textContent = facts[factIndex];
    }

    // Event listener for the random fact button
    const factButton = document.getElementById('random-fact-button');
    factButton.addEventListener('click', showRandomFact);

    // Display a random fact when the page loads
    showRandomFact();
});
