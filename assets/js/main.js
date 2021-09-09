console.log("Hello world");
let clickFullscreen = document.getElementById("fScreen");
let img = document.getElementById("autoImg");
clickFullscreen.addEventListener("click", openFullscreen);
function openFullscreen() {
    if (img.requestFullscreen) {
        img.requestFullscreen();
    }
}