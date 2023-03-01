const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



// below this line is the closing section for the hamburger menu//
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}







function toggleButton() {
    alert("Hello!")
}


var activeButtonId = null;
var activeSectionId = null;

function showSection(sectionId, buttonId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
        if (activeSectionId !== null && activeSectionId !== sectionId) {
            document.getElementById(activeSectionId).style.display = "none";
            document.getElementById(activeButtonId).disabled = false;
        }
        activeSectionId = sectionId;
        activeButtonId = buttonId;
    } else {
        section.style.display = "none";
        document.getElementById(activeButtonId).disabled = false;
        activeSectionId = null;
        activeButtonId = null;
    }
}

window.addEventListener('load', function() {
    var sections = document.querySelectorAll('div[id^="new-section"]');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
});
