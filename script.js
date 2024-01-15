const shareBtn = document.querySelector(".share-icon");
const shareContainer = document.querySelector(".share-links");

let iconShare = "images/icon-share.svg";
let iconShareWhite = "images/icon-share-white.svg";

let backgroundColorBefore = "hsla(212, 23%, 69%, 0.3)"
let backgroundColorAfter = "hsl(214, 17%, 51%)"

const leftContainer = document.querySelector(".left-container")

function change() {
    document.querySelector("#share-image").src = iconShareWhite;
    let aux = iconShare;
    iconShare = iconShareWhite;
    iconShareWhite = aux;

    shareBtn.style.backgroundColor = backgroundColorAfter;
    let aux2 = backgroundColorBefore;
    backgroundColorBefore = backgroundColorAfter;
    backgroundColorAfter = aux2;
}

shareBtn.addEventListener("click", () =>{
    shareContainer.classList.toggle("active");

    leftContainer.classList.toggle("hide")

    change()
})