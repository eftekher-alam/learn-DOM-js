const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");

div1.addEventListener("click", justPrint, true);

function justPrint() {
    console.log("clicked on div1");
}

div2.addEventListener("click", function () {
    console.log("clicked on div2");
}, true);

div3.addEventListener("click", function () {
    console.log("clicked on div3");
}, true);

div1.removeEventListener("click", justPrint, true);
//Note, if the all parameter need to be same to remove