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




