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
