let darkmodeStatus = 0;
function darkmode() {
    var button = document.getElementById('darkmodeButton');
    button.classList.toggle('light-mode')
    if (darkmodeStatus === 0){
        button.innerText = 'Light Mode';
        darkmodeStatus = 1
    } else if (darkmodeStatus === 1) {
        button.innerText = 'Dark Mode';
        darkmodeStatus = 0
    }
    document.body.classList.toggle("dark-mode");
};