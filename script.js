
const splash = document.getElementsByClassName("splash")[0];
const closedDoor = document.getElementsByClassName("door1")[0];

function hideDoor(){
    closedDoor.addEventListener("mouseover", (event) => {
        closedDoor.src="images/Door2.PNG";
        closedDoor.style.cursor="grab";
    })

    closedDoor.addEventListener("mouseleave", (event) => {
        closedDoor.src="images/Door1.PNG";
        closedDoor.style.cursor="pointer";
    })

    closedDoor.addEventListener("click", (event) => {
        closedDoor.style.cursor="grabbing";
    })
}

function hideSplash() {
    
    splash.addEventListener("click", (event) => {
        splash.style.opacity = "0%";
        splash.style.animationName = "fadeOut";
        splash.style.animationDuration = "1s";
        splash.style.zIndex = "-3";
    });
}

hideDoor();
hideSplash();