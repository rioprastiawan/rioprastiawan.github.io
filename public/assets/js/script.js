document.addEventListener("DOMContentLoaded", function () {
    /** Loader */
    let sectionLoader = document.getElementById("section-loader");

    setTimeout(() => {
        sectionLoader.classList.add("opacity-0");

        setTimeout(() => {
            sectionLoader.classList.add("hidden");
            // start the text animation
            typeWriter(
                document.getElementById("typewriter-name"),
                "Bimo Rio Prastiawan",
                0,
                120
            );
            typeWriter(
                document.getElementById("typewriter-role"),
                "Software Engineer"
            );
        }, 500);
    }, 1000);
});

/** Typewriter */
function typeWriter(el, text, i = 0, duration = 100) {
    if (i < text.length) {
        el.innerHTML =
            text.substring(0, i + 1) +
            '<span aria-hidden="true" class="caret"></span>';

        if (i + 1 == text.length) {
            el.children[0].remove();
        }
        setTimeout(function () {
            typeWriter(el, text, i + 1, duration);
        }, duration);
    }
}
