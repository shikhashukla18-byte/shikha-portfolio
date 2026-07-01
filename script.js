// Mount Vector graphics
lucide.createIcons();

// Fixed Theme Toggle Engine
const toggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-icon-dark');
const lightIcon = document.getElementById('theme-icon-light');

toggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    
    if (isDark) {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    } else {
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }
});

// Mobile Hamburger Nav Actions
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));