const SKILLS = [
    { name: 'Webflow', icon: 'layout' },
    { name: 'Client-First', icon: 'ruler' },
    { name: 'WordPress', icon: 'globe' },
    { name: 'WooCommerce', icon: 'shopping-cart' },
    { name: 'PHP', icon: 'server' },
    { name: 'JavaScript', icon: 'braces' },
    { name: 'Tailwind CSS', icon: 'palette' },
    { name: 'Zapier / Make', icon: 'zap' },
    { name: 'SEO/GA4', icon: 'search' },
    { name: 'HubSpot/CRM', icon: 'users' },
    { name: 'React', icon: 'code-2' },
];

const PROJECTS = [
    {
        title: "Crux Marketing",
        category: "Agency",
        img: "assets/images/crux-thumb.webp",
        description: "A modern marketing agency website built to showcase services, client success stories, and strong brand messaging.",
        url: "https://www.cruxmarketing.co/",
        tags: ["marketing", "branding", "ui"]
    },
    {
        title: "Bend Inner Alchemy",
        category: "Wellness",
        img: "assets/images/bia-thumb.webp",
        description: "A calming, wellness-driven platform highlighting holistic services and guided client experiences.",
        url: "https://www.bendinneralchemy.com/",
        tags: ["wellness", "holistic", "webdev"]
    },
    {
        title: "Deschutes River",
        category: "Nonprofit",
        img: "assets/images/drc-thumb.webp",
        description: "A mission-focused nonprofit website built to educate visitors, promote conservation efforts, and encourage community support.",
        url: "https://www.deschutesriver.org/",
        tags: ["nonprofit", "env", "conservation"]
    },
    {
        title: "eForce Sports",
        category: "Sports & Fitness",
        img: "assets/images/eforce-thumb.webp",
        description: "A high-energy sports training website showcasing athletic programs, performance development, and athlete resources.",
        url: "https://www.eforcesports.com/",
        tags: ["sports", "fitness", "training"]
    },
    {
        title: "Bend Concerts",
        category: "Entertainment",
        img: "assets/images/hha-thumb.webp",
        description: "An entertainment-focused platform highlighting upcoming concerts, event details, and ticketing access.",
        url: "https://www.bendconcerts.com/",
        tags: ["events", "music", "ticketing"]
    },
    {
    title: "Kamperage",
        category: "Travel & Rentals",
        img: "assets/images/kamperage-thumb.webp",
        description: "A clean and adventure-focused website for a Bend-based campervan rental service, integrating Wheelbase for seamless booking and trip planning.",
        url: "https://www.kamperage.com/",
        tags: ["rental", "travel", "booking"]
    },
    {
        title: "Monolith Tattoo Studio",
        category: "Creative Services",
        img: "assets/images/monolith-thumb.webp",
        description: "An artist-driven website for a tattoo studio featuring portfolios, artist profiles, and booking functionality.",
        url: "http://monolithtattoostudio.com/",
        tags: ["tattoo", "portfolio", "booking"]
    },
    {
        title: "Liquid Cheers",
        category: "Food & Beverage",
        img: "assets/images/liquidcheers-thumb.webp",
        description: "A sleek beverage brand website showcasing flavors, product details, and a smooth shopping experience.",
        url: "https://www.liquidcheers.com/",
        tags: ["beverage", "ecommerce", "branding"]
    }
];

window.onload = function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    renderMarquee();
    renderProjects();
    initTypewriter();
    initScrollAnimations();
    initSwiper(); // Initialize Swiper after content is rendered
    
    // Re-render icons
    lucide.createIcons();
};

/* NAVBAR */
function initNavbarMenu() {
    const burger = document.querySelector('.navbar_burger');
    const menu = document.querySelector('.navbar_menu');

    burger.addEventListener('click', () => {
        const isOpen = menu.classList.contains('is-open');
        if (isOpen) {
            // Collapse
            menu.style.maxHeight = menu.scrollHeight + "px"; 
            requestAnimationFrame(() => {
                menu.style.maxHeight = "0px";
            });
            menu.classList.remove('is-open');
        } else {
            // Expand
            menu.classList.add('is-open');
            menu.style.maxHeight = menu.scrollHeight + "px";

            menu.addEventListener('transitionend', function resetHeight() {
                if (menu.classList.contains('is-open')) {
                    menu.style.maxHeight = "none";
                }
                menu.removeEventListener('transitionend', resetHeight);
            });
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    initNavbarMenu();
    if (window.lucide) lucide.createIcons();
});

/* RENDER MARQUEE (Dynamic HTML Injection) */
function renderMarquee() {
    const contentHTML = SKILLS.map(skill => `
        <div class="marquee-item">
            <i data-lucide="${skill.icon}" width="16"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');

    document.getElementById('marquee-content-1').innerHTML = contentHTML;
    document.getElementById('marquee-content-2').innerHTML = contentHTML;
    lucide.createIcons(); // Ensure icons in marquee are rendered
}

/* RENDER PROJECTS (Dynamic HTML Injection using Swiper classes) */
function renderProjects() {
    // Target the swiper-wrapper inside the swiper container
    const wrapper = document.querySelector('#work-slider .swiper-wrapper');
    
    const projectsHTML = PROJECTS.map(project => {
        const placeholderText = project.title.replace(/ /g, '+');
        const imageUrl = project.img ? project.img : `https://placehold.co/500x300/18181b/a1a1aa?text=${placeholderText}`;
        
        // Note the use of swiper-slide class
        return `
        <a href="${project.url}" target="_blank" class="swiper-slide slider_item">
            <div class="slider_image-wrapper">
                <img src="${imageUrl}" class="hover-scale" alt="${project.title}">
            </div>
            <div class="slider_content">
                <div class="slider_meta">
                    <span class="text-style-overline slider_tag">${project.category}</span>
                </div>
                <h3 class="slider_title">
                    ${project.title}
                    <i data-lucide="arrow-up-right" width="14" style="display:inline; margin-left:4px;"></i>
                </h3>
                <p class="text-style-small text-color-secondary slider_description">
                    ${project.description}
                </p>
                <div class="slider_tags-list">
                    ${project.tags.map(tag => `
                        <span class="text-style-overline slider_tag-pill">#${tag}</span>
                    `).join('')}
                </div>
            </div>
        </a>
        `;
    }).join('');

    // Swiper doesn't need the final gap element
    wrapper.innerHTML = projectsHTML;
    lucide.createIcons();
}

/* SWIPER INITIALIZATION */
function initSwiper() {
    const workSwiper = new Swiper('#work-slider', {
        // Use 'auto' to ensure slides are only as wide as their content (up to max-width defined in CSS)
        slidesPerView: 'auto', 
        spaceBetween: 24, // Gap between slides (1.5rem)
        loop: false,

        // Configure navigation using custom classes in the header
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },

        // Responsive breakpoints
        breakpoints: {
            320: { 
                slidesPerView: 1.2,
                spaceBetween: 16
            },
            768: { 
                slidesPerView: 2.5,
                spaceBetween: 24
            },
            1024: { 
                slidesPerView: 3.5,
                spaceBetween: 24
            }
        }
    });
    
    // To ensure the button-icon element can function as swiper navigation
    // we attach the click handlers explicitly since the buttons are outside the swiper container
    document.querySelector('.swiper-button-prev-custom').addEventListener('click', () => {
        workSwiper.slidePrev();
    });
    document.querySelector('.swiper-button-next-custom').addEventListener('click', () => {
        workSwiper.slideNext();
    });
}


/* TYPEWRITER EFFECT */
function initTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    const roles = ["WordPress", "Webflow"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            textElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; 
        } else {
            textElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();
}
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.closest('.accordion-item');
            const isCurrentlyOpen = item.classList.contains('is-open');

            // 1. Close all other open items
            document.querySelectorAll('.accordion-item.is-open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('is-open');
                }
            });

            // 2. Toggle THIS item (open or close)
            item.classList.toggle('is-open');
        });

        // Keyboard support
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });

    // Initial state fix for the item with .is-open
    const initialOpenItem = document.querySelector('.accordion-item.is-open');
    if (initialOpenItem && window.lucide) {
        lucide.createIcons();
    }
}
document.addEventListener("DOMContentLoaded", initAccordion);

/* SCROLL ANIMATION OBSERVER */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}