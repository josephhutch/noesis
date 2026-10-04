function cardPressed() {
    this.classList.add('card-hover');
}

function cardReleased() {
    this.classList.remove('card-hover');
}

function hamburgerMenuPressed() {
    this.setAttribute('aria-label', this.checked ? 'Close navigation menu' : 'Open navigation menu');
    if (this.checked) {
        this.setAttribute('aria-expanded', "true");
        document.body.classList.add('no-scroll');
    } else {
        this.setAttribute('aria-expanded', "false");
        document.body.classList.remove('no-scroll');
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.blog-card').forEach(function (card) {
        card.addEventListener('touchstart', function () {
            cardPressed.call(card);
        }, { passive: true });

        card.addEventListener('touchend', function () {
            cardReleased.call(card);
        }, { passive: true });

        card.addEventListener('touchmove', function () {
            cardReleased.call(card);
        }, { passive: true });

        card.addEventListener('touchcancel', function () {
            cardReleased.call(card);
        }, { passive: true });
    });

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
