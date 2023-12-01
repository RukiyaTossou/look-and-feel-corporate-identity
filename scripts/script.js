const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

// toggle button voor uitleengeschiednis 

function toggleList(toggleIconId, listId) {

    
    const list = document.getElementById(listId);// parameters geven voor meer dan 1x gebruik
    const icon = document.getElementById(toggleIconId);

    if (list.style.display === "none" || list.style.display === "") { // checken of de list verbrogen of leeg is.
        //als de list verborgen, kaat het zien (block)
        list.style.display = "block";
        icon.innerText = "-"; // kan op worden geklikt om het te verbergen 
    } else {
        //als de list te zien is verberg de list.
        list.style.display = "none";
        icon.innerText = "+"; // kan op worden geklik om het weer te laten zien 
    }
}

// Hamburger menu
const toggleButton = document.querySelector('.toggle-button');
const Sidebar = document.querySelector('.sidebar');

toggleButton.addEventListener('click', () => {
    Sidebar.classList.toggle('active');
});

// Scroll knoppen
document.addEventListener("DOMContentLoaded", function () {
    const ulBlok = document.querySelector(".ul-blok");
    const scrollLeftButton = document.querySelector(".scroll-links");
    const scrollRightButton = document.querySelector(".scroll-rechts");

    let scrollAmount = 400; // het aantal pixels om te scrollen

    scrollLeftButton.addEventListener("click", 
    function () {
        ulBlok.scrollLeft -= scrollAmount;
    });

    scrollRightButton.addEventListener("click", 
    function () {
        ulBlok.scrollLeft += scrollAmount;
    });
});




// boeken knop boek blok 
document.addEventListener("DOMContentLoaded", function () {
    const boekenButton = document.getElementById("boeken-button");
    const boekDetails = document.querySelector(".boek-details .ul-blok");

    boekenButton.addEventListener("click", function () {
        // Controleer of de elementen momenteel verborgen zijn
        if (boekDetails.style.display === "none") {
            // Toon de elementen
            boekDetails.style.display = "block";
        } else {
            // Verberg de elementen
            boekDetails.style.display = "none";
        }
    });
});

// scroll bar
document.querySelector(".gebruiker").addEventListener("scroll", function() {
    this.style.overflow = "hidden";
});
