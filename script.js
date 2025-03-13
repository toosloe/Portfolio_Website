
const splash = document.getElementsByClassName("splash")[0];

function hideSplash() {
    
    splash.addEventListener("click", (event) => {
        splash.style.opacity = "0%";
        splash.style.animationName = "fadeOut";
        splash.style.animationDuration = "1s";
        splash.style.zIndex = "-1";
    });
}

hideSplash();