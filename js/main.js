
document.addEventListener("click", function (e) {
    if (e.target.closest(".contacto-page")) {
        document.querySelector(".contactopage").classList.toggle("open");
        // jQuery('body').addClass('scrollhidden');
    }
})