document.getElementById("body").onscroll = function myFunction() {
    let scrolltotop = document.scrollingElement.scrollTop;
    let target = document.getElementById("machinery");
    let xvalue = "center";
    let factor = 0.5;
    let yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}