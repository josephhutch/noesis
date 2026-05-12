function cardPressed() {
    this.classList.add('card-hover');
}

function cardReleased() {
    this.classList.remove('card-hover');
}

function hamburgerMenuPressed() {
    if (this.checked) {
        this.setAttribute('aria-expanded', "true");
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + "px";
        document.body.classList.add('no-scroll');
    } else {
        this.setAttribute('aria-expanded', "false");
        document.body.classList.remove('no-scroll');
        document.body.style.paddingRight = 0 + "px";
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.hamburger-menu-button');

    if (!menuButton) {
        return;
    }

    document.querySelectorAll('.hamburger-menu-overlay-link').forEach(function (link) {
        link.addEventListener('click', function () {
            menuButton.checked = false;
            hamburgerMenuPressed.call(menuButton);
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menuButton.checked) {
            menuButton.checked = false;
            hamburgerMenuPressed.call(menuButton);
        }
    });
});
