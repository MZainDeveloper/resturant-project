let topIcon = document.getElementById("topIcon") ; 
topIcon.onclick = function () {
    window.scrollTo(0 ,0)
}
window.onscroll = function () {
    if (window.scrollY > 100) {
        topIcon.style.display = "block"
    }
    else {
        topIcon.style.display = "none"
    }
}
