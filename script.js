// Generate first javascript code for this project, to when user clicks on read-more class button it will show the hidden text.
document.addEventListener("DOMContentLoaded", function () {
    // ============= Read More Button ============
    const hiddenTexts = document.querySelectorAll(".hidden-text")
    if (hiddenTexts) {
        hiddenTexts.forEach((hiddenText) => {
            const readMoreButton = hiddenText.querySelector(".read-more")
            readMoreButton.addEventListener("click", () =>
                showHiddenText(hiddenText),
            )
        })
    }

    function showHiddenText(hiddenText) {
        const truncateTextBg = hiddenText.querySelector(".truncate__text__bg")
        const readMoreButton = hiddenText.querySelector(".read-more")
        hiddenText.classList.add("max-h-[1000px]")
        truncateTextBg.classList.add("hidden")
        readMoreButton.classList.add("hidden")
    }

    // ============= Accordion =================
    const accordionContainer = document.querySelector(".accordion-container")

    if (accordionContainer) {
        accordionContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("accordion-header")) {
                const parent = e.target.parentElement
                if (!parent.classList.contains("active")) {
                    parent.classList.add("active")
                } else {
                    parent.classList.remove("active")
                }
            }
            if (e.target.classList.contains("accordion-header-details")) {
                const parent = e.target.parentElement.parentElement
                const parentOfParent = parent?.parentElement
                if (!parentOfParent.classList.contains("active")) {
                    parentOfParent.classList.add("active")
                } else {
                    parentOfParent.classList.remove("active")
                }
            }
        })
    }

    // ============= Inview ==========
    // while scrolling if inview class is in the view, add the active class, if not remove the active class
    // check if screem size is more the 768px
    const isMobile = window.matchMedia("(max-width: 768px)").matches
        ? true
        : false
    console.log(isMobile)
    if (!isMobile) {
        const footer = document.querySelector("footer")
        const inViewObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    inviewContainer.classList.add("active")
                    footer.classList.add("active")
                } else {
                    inviewContainer.classList.remove("active")
                    footer.classList.remove("active")
                }
            })
        })

        const inviewContainer = document.querySelector(".inview-container")
        const inview = inviewContainer?.querySelector(".inview")

        if (inviewContainer && inview) {
            inViewObserver.observe(inview)
        }
    }

    // ============= Contact Accordion ==========
    const contactAccordions = document.querySelectorAll(".contact-accordion")

    if (contactAccordions.length > 0) {
        contactAccordions.forEach((contactAccordion) => {
            const accordionHeader = contactAccordion.querySelector(
                ".header-accordion",
            )
            accordionHeader.addEventListener("click", () => {
                if (contactAccordion.classList.contains("active")) {
                    contactAccordion.classList.remove("active")
                } else {
                    contactAccordions.forEach((accordion) =>
                        accordion.classList.remove("active"),
                    )
                    contactAccordion.classList.add("active")
                }
            })
        })
    
    }
})

// ============== On Click Functions =========
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
