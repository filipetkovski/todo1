function add() {
    const addInput = document.getElementById("addInput");
    if(addInput.value !== '') {
        const text = addInput.value;
        addTasktoDay(text);
    } else {
        addInput.style.borderBottom = "1px solid white";
    }

}

function addTasktoDay(text) {
    let dateTime = new Date();
    let min = dateTime.getMinutes();
    let hours = dateTime.getHours();
    let day = dateTime.getDay();
    let month = dateTime.getMonth();
    let year = dateTime.getFullYear();
    const div = document.getElementById("addTasks");
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " (" + day + "/" + month + "/" + year + ")";
    } else {
        if(min < 10) {
            newTime.innerText = hours + ":" + "0"+ min + " (" + day + "/" + month + "/" + year + ")";
        }
    }
    if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " (" + day + "/" + month + "/" + year + ")";
    } else {
        newTime.innerText = hours + ":" + min + " (" + day + "/" + month + "/" + year + ")";
    }

    newTime.style.color = "#5b5b5b";
    newTime.style.fontSize = "0.8em"
    newDiv.style.padding = "15px 20px";
    newDiv.style.backgroundColor = "#b7b7b7";
    newDiv.style.marginBottom = "5px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "row";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.alignItems = "center";
    newDiv.style.borderRadius = "10px";
    newTask.innerText = text;
    newTask.style.fontSize = "1.1em"

    newDiv.appendChild(newTask);
    newDiv.appendChild(newTime);
    div.appendChild(newDiv);

}

function navButton1() {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");

    sec1.style.display = "unset";
    sec2.style.display = "none";
    menuClose();
}

function navButton2() {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");

    sec1.style.display = "none";
    sec2.style.display = "unset";
    menuClose();
}

function navButton3 () {
    menuClose();
}

function navButton4 () {
    menuClose();
}

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

function menuOpen() {
    const nav1= document.getElementById("nav");
    const ham1 = document.getElementById("ham1");
    const ham2 = document.getElementById("ham2");
    let navButton1 = document.getElementById("span1");
    let navButton2 = document.getElementById("span2");
    let navButton3 = document.getElementById("span3");
    let navButton4 = document.getElementById("span4");
    let navButton5 = document.getElementById("span5");

    nav1.style.width = "250px";
    nav1.style.boxShadow = "0 5px 10px black";

    ham1.style.display = "none";
    ham2.style.display = "unset";

    navButton1.style.opacity = "1";
    navButton2.style.opacity = "1";
    navButton3.style.opacity = "1";
    navButton4.style.opacity = "1";
    navButton5.style.opacity = "1";

}

function menuClose() {
    let nav1= document.getElementById("nav");
    let ham1 = document.getElementById("ham1");
    let ham2 = document.getElementById("ham2");
    let navButton1 = document.getElementById("span1");
    let navButton2 = document.getElementById("span2");
    let navButton3 = document.getElementById("span3");
    let navButton4 = document.getElementById("span4");
    let navButton5 = document.getElementById("span5");

    nav1.style.width = "60px";
    nav1.style.boxShadow = "none";

    ham1.style.display = "unset";
    ham2.style.display = "none";

    navButton1.style.opacity = "0";
    navButton2.style.opacity = "0";
    navButton3.style.opacity = "0";
    navButton4.style.opacity = "0";
    navButton5.style.opacity = "0";

}