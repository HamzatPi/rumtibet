document.addEventListener("DOMContentLoaded", function () {
    const burgerCheckbox = document.getElementById("burger-checkbox");
    const body = document.body;

    burgerCheckbox.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("menu-open");
        } else {
            body.classList.remove("menu-open");
        }
    });

    // Закрытие меню при клике на пункт
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", () => {
            burgerCheckbox.checked = false;
            body.classList.remove("menu-open");
        });
    });
});
