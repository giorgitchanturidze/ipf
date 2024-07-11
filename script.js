// Generate first javascript code for this project, to when user clicks on read-more class button it will show the hidden text.
document.addEventListener("DOMContentLoaded", function () {
    const hiddenTexts = document.querySelectorAll(".hidden-text")
    hiddenTexts.forEach((hiddenText) => {
        const readMoreButton = hiddenText.querySelector(".read-more")
        readMoreButton.addEventListener("click", () =>
            showHiddenText(hiddenText),
        )
    })

    function showHiddenText(hiddenText) {
        const truncateTextBg = hiddenText.querySelector(".truncate__text__bg")
        const readMoreButton = hiddenText.querySelector(".read-more")
        hiddenText.classList.add("max-h-[1000px]")
        truncateTextBg.classList.add("hidden")
        readMoreButton.classList.add("hidden")
    }

})


//============== On Click Functions =========
function openPopup(imgSrc) {
    const popup = document.getElementById("img-popup")
    const popupImg = document.getElementById("popup-img")

    popupImg.src = imgSrc
    popup.classList.remove("hidden")
    popup.classList.add("flex")
}

function closePopup() {
    const popup = document.getElementById("img-popup")

    popup.classList.add("hidden")
    popup.classList.remove("flex")
}