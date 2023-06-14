let darkmodeStatus = 0;
function darkmode() {
    var button = document.getElementById('darkmodeButton');
    document.getElementById('pro').classList.toggle('light-mode');
    document.getElementById('god').classList.toggle('light-mode');
    button.classList.toggle('light-mode');
    if (darkmodeStatus === 0){
        document.getElementById('darkmodeIcon').textContent = 'light_mode';
        darkmodeStatus = 1;
    } else if (darkmodeStatus === 1) {
        document.getElementById('darkmodeIcon').textContent = 'dark_mode';
        darkmodeStatus = 0;
    };
    document.body.classList.toggle("dark-mode");
};