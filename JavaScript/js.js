const sec1 = document.getElementById("main1");
const sec2 = document.getElementById("main2");
const sec3 = document.getElementById("main3");
const sec4 = document.getElementById("main4");

//Add Task
function add(n) {
    const addInput = document.getElementById("addInput");
    const addInput1 = document.getElementById("addInput1");

    if(n === 0) {
        if(addInput.value !== '') {
            const text = addInput.value;
            addTasktoDay(text);
        } else {
            addInput.style.borderBottom = "1px solid white";
        }
    } else if(n === 1) {
        if(addInput1.value !== '') {
            const text = addInput1.value;
            addTasktoImportant(text);
        } else {
            addInput1.style.borderBottom = "1px solid white";
        }
    } if (n === 2) {
        if(addInput2.value !== '') {
            const text = addInput2.value;
            addTasktoPlanned();
        } else {
            addInput2.style.borderBottom = "1px solid white";
        }
    } if (n === 3) {
        if(addInput3.value !== '') {
            const text = addInput3.value;
            addTasktoTaks(text);
        } else {
            addInput3.style.borderBottom = "1px solid white";
        }
    }
}

let dateTime = new Date();
let min = dateTime.getMinutes();
let hours = dateTime.getHours();
let year = dateTime.getFullYear();
let button = document.getElementById("butCas1");
button.addEventListener("click", doneDay);
function doneDay() {
    button.style.backgroundColor = "green";
}

//Day
function addTasktoDay(text) {
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    let divLeft = document.createElement("div");
    const div = document.getElementById("addTasks");
    let button = document.createElement("button");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
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
    newTask.style.marginLeft = "10px";
    divLeft.style.display = "flex";
    divLeft.style.flexDirection = "row";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.width = "20px";
    button.id = "butCas1";

    divLeft.appendChild(button);
    divLeft.appendChild(newTask);
    newDiv.appendChild(divLeft);
    newDiv.appendChild(newTime);
    div.appendChild(newDiv);

    addTasktoTaks(text);
}
//Important
function addTasktoImportant(text) {
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    const div = document.getElementById("addTasks1");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
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

    addTasktoTaks(text);
}
//Planned
function addTasktoPlanned(text) {
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    const div = document.getElementById("addTasks2");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
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

    addTasktoTaks(text);
}
//Tasks
function addTasktoTaks(text) {
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    const div = document.getElementById("addTasks3");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
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
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "unset";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "none";
    menuClose();
}

function navButton2() {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "none";
    sec2.style.display = "unset";
    sec3.style.display = "none";
    sec4.style.display = "none";
    menuClose();
}

function navButton3 () {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "unset";
    sec4.style.display = "none";
    menuClose();
}

function navButton4 () {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "unset";
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

    navButton1.style.display = "unset";
    navButton2.style.display = "unset";
    navButton3.style.display = "unset";
    navButton4.style.display = "unset";
    navButton5.style.display = "unset";

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

    navButton1.style.display = "none";
    navButton2.style.display = "none";
    navButton3.style.display = "none";
    navButton4.style.display = "none";
    navButton5.style.display = "none";

}