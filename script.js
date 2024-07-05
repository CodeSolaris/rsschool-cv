document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".navigation__toggle");
    const menuList = document.querySelector(".navigation__menu");

    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        menuList.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (
            !menuToggle.contains(event.target) &&
            !menuList.contains(event.target)
        ) {
            menuToggle.classList.remove("active");
            menuList.classList.remove("active");
        }
    });
});
