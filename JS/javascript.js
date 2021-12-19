function myFunction() {
    var x = document.getElementById("hamburger");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function myFunction2() {
    let screenHeight = screen.height;
    let mainHeight = document.getElementById("main").offsetHeight;
    let headerHeight = document.getElementById("header").offsetHeight;
    let footerHeight = document.getElementById("footer").offsetHeight;
    let sum = mainHeight + headerHeight + footerHeight;
    let footer = document.getElementById("footer");
    if (sum + 110 < screenHeight){
        footer.style.position = "absolute";
    } else {
        footer.style.position = "relative";
    }
}
function myFunction3() {
    let screenHeight = screen.height;
    let mainHeight = document.getElementById("main").offsetHeight;
    let headerHeight = document.getElementById("header").offsetHeight;
    let footerHeight = document.getElementById("footer").offsetHeight;
    let sum = mainHeight + headerHeight + footerHeight;
    let footer = document.getElementById("footer");
    if (sum + 110 < screenHeight){
        footer.style.position = "absolute";
    } else {
        footer.style.position = "relative";
    }
}