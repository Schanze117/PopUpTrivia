document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector(".start-button");
    const categorySelect = document.getElementById("categorySelect");
    const popupOverlay = document.getElementById("popupOverlay");
    const realGameStart = document.getElementById("gameStartBtn");

    startButton.addEventListener('click', () => {
        const selectedCategory = categorySelect.value;
        if (selectedCategory) {
            localStorage.setItem('category', selectedCategory);
            popupOverlay.style.display = 'flex';
        } else {
            alert('Please select a category before starting!');
        }
    });

    realGameStart.addEventListener('click', () => {
        redirectPage('quiz.html');
    });

    const redirectPage = (url) => {
        location.assign(url);
    };

    const setCategoryTitle = () => {
        const category = localStorage.getItem('category'); 
        const categoryTitle = document.getElementById('title');
        if (category) {
            categoryTitle.innerText = `${category.charAt(0).toUpperCase() + category.slice(1)} Trivia`;
        } else {
            categoryTitle.innerText = "General Trivia";
            console.warn("Category not found in localStorage. Defaulting to 'General Trivia'.");
        }
    };

    setCategoryTitle();
});

let darkMode = localStorage.getItem('darkMode')
var toggle = document.getElementById('button is-primary toggle')

const enabledarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'active')
};
const disabledarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', 'null')
};

if(darkMode === "active") enabledarkMode();

toggle.addEventListener("click", function(){
    darkMode =localStorage.getItem("darkMode");
    if(darkMode !== "active"){
        enabledarkMode()
    }
    else{
        disabledarkMode()
    };
}
);