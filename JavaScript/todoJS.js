
function navButton(n) {
    const sec = [];
    const nav = [];

    sec[0] = document.getElementById("main1");
    sec[1] = document.getElementById("main2");
    sec[2] = document.getElementById("main3");
    sec[3] = document.getElementById("main4");

    nav[0] = document.getElementById("nav1");
    nav[1] = document.getElementById("nav2");
    nav[2] = document.getElementById("nav3");
    nav[3] = document.getElementById("nav4");

    sec[n].style.display = "unset";
    nav[n].style.backgroundColor = "lightblue";

    for(let i=0;i<4;i++) {
        if(i !== n) {
            sec[i].style.display = "none";
            nav[i].style.backgroundColor = "#f1f1f1";
        }
    }

    menuClose();
}


window.addEventListener("load", () => {
   let form = [];
   let width = outerWidth;

   if(width < 451) {
       form[0] = document.getElementById("form");
       form[1] = document.getElementById("form1");
       form[2] = document.getElementById("form2");
       form[3] = document.getElementById("form3");
       
       form[0].addEventListener("click", () => {
           form[0].style.bottom = "300px";
       });
       form[1].addEventListener("click", () => {
           form[1].style.bottom = "300px";
       });
       form[2].addEventListener("click", () => {
           form[2].style.bottom = "300px";
       });
       form[3].addEventListener("click", () => {
           form[4].style.bottom = "300px";
       });

       form[0].addEventListener("submit", () => {
           form[0].style.bottom = "60px";
       });
       form[1].addEventListener("submit", () => {
           form[1].style.bottom = "60px";
       });
       form[2].addEventListener("submit", () => {
           form[2].style.bottom = "60px";
       });
       form[3].addEventListener("submit", () => {
           form[3].style.bottom = "60px";
       });
   }

});