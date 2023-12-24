function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.custom-nav a');

    function getVisibleSection() {
        let maxVisibility = 0;
        let mostVisibleSectionId = '';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const visiblePct = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)) / window.innerHeight;

            if (visiblePct > maxVisibility && visiblePct > 0.5) {
                maxVisibility = visiblePct;
                mostVisibleSectionId = section.id;
            }
        });

    return mostVisibleSectionId;
}

function updateNavLinks(mostVisibleSectionId) {
    navLinks.forEach((link) => {
        if (link.getAttribute('href') === '#' + mostVisibleSectionId) {
            link.classList.add('active');
            link.classList.remove('inactive');
        } else {
            link.classList.remove('active');
            link.classList.add('inactive');
        }
    });
}

window.addEventListener('scroll', () => {
    const mostVisibleSectionId = getVisibleSection();
    updateNavLinks(mostVisibleSectionId);
    });
});