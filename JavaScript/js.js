
function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if(hrs === 0) {
        document.getElementById('hours').innerHTML = "0" + hrs;
    } else {
        document.getElementById('hours').innerHTML = hrs;
    }

    if(min < 10) {
        document.getElementById('minutes').innerHTML = "0" + min;
    } else {
        document.getElementById('minutes').innerHTML = min;
    }
}
setInterval(displayTime, 10);

window.addEventListener("load", () => {
    const dark = document.getElementById("darkTheme");
    dark.addEventListener("mouseenter", () => {
        menuClose();
    });
});

function menuOpen() {
    const nav1= document.getElementById("nav");
    const ham1 = document.getElementById("ham1");
    const ham2 = document.getElementById("ham2");
    let navButton = [];

    navButton[0] = document.getElementById("span1");
    navButton[1] = document.getElementById("span2");
    navButton[2] = document.getElementById("span3");
    navButton[3] = document.getElementById("span4");
    navButton[4] = document.getElementById("span5");

    const dark = document.getElementById("darkTheme");
    dark.style.display = "unset";

    nav1.style.width = "250px";
    nav1.style.transition = "0s";
    nav1.style.boxShadow = "0 5px 10px black";

    ham1.style.display = "none";
    ham2.style.display = "flex";
    ham2.style.justifyContent = "center";
    ham2.style.alignItems = "center";

    for(let i=0;i<5;i++) {
        navButton[i].style.fontSize = "1em";
    }
}

function menuClose() {
    let nav1= document.getElementById("nav");
    let ham1 = document.getElementById("ham1");
    let ham2 = document.getElementById("ham2");
    let navButton = [];

    navButton[0] = document.getElementById("span1");
    navButton[1] = document.getElementById("span2");
    navButton[2] = document.getElementById("span3");
    navButton[3] = document.getElementById("span4");
    navButton[4] = document.getElementById("span5");

    const dark = document.getElementById("darkTheme");
    dark.style.display = "none";

    nav1.style.width = "60px";
    nav1.style.transition = "0.5s";
    nav1.style.boxShadow = "none";

    ham1.style.display = "flex";
    ham2.style.display = "none";

    for(let i=0;i<5;i++) {
        navButton[i].style.fontSize = "0";
    }

}