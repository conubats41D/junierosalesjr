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
        type: "webflow",
        img: "assets/images/crux-thumb.webp",
        description: "A modern marketing agency website built to showcase services, client success stories, and strong brand messaging.",
        url: "https://www.cruxmarketing.co/",
        tags: ["marketing", "branding", "ui"]
    },
     {
        title: "Northwest Framing",
        category: "Corporate",
        type: "webflow",
        img: "assets/images/nwf-thumb.webp",
        description: "A clean, product-focused site showcasing custom framing solutions with a responsive, easy-to-browse layout.",
        url: "https://www.northwestframingsystems.com/",
        tags: ["framing system", "custom frames"]
    },
    {
        title: "Williamsmith Properties",
        category: "Real Estate",
        type: "webflow",
        img: "assets/images/wsp-thumb.webp",
        description: "A streamlined real-estate site with property listings and brokerage details, designed for easy, mobile-friendly browsing.",
        url: "https://www.williamsmithproperties.com/",
        tags: ["residential", "commercial"]
    },
    {
        title: "Deschutes River",
        category: "Nonprofit",
        type: "webflow",
        img: "assets/images/drc-thumb.webp",
        description: "A mission-focused nonprofit website built to educate visitors, promote conservation efforts, and encourage community support.",
        url: "https://www.deschutesriver.org/",
        tags: ["nonprofit", "env", "conservation"]
    },
    {
        title: "eForce Sports",
        category: "Sports & Fitness",
        type: "webflow",
        img: "assets/images/eforce-thumb.webp",
        description: "A high-energy sports training website showcasing athletic programs, performance development, and athlete resources.",
        url: "https://www.eforcesports.com/",
        tags: ["sports", "fitness", "training"]
    },
    {
        title: "Bend Concerts",
        category: "Entertainment",
        type: "webflow",
        img: "assets/images/hha-thumb.webp",
        description: "An entertainment-focused platform highlighting upcoming concerts, event details, and ticketing access.",
        url: "https://www.bendconcerts.com/",
        tags: ["events", "music", "ticketing"]
    },
    {
    title: "Kamperage",
        category: "Travel & Rentals",
        type: "webflow",
        img: "assets/images/kamperage-thumb.webp",
        description: "An adventure-focused campervan rental site for Bend, featuring smooth Wheelbase booking integration.",
        url: "https://www.kamperage.com/",
        tags: ["rental", "travel", "booking"]
    },
    {
        title: "Monolith Tattoo Studio",
        category: "Creative Services",
        type: "webflow",
        img: "assets/images/monolith-thumb.webp",
        description: "An artist-driven website for a tattoo studio featuring portfolios, artist profiles, and booking functionality.",
        url: "http://monolithtattoostudio.com/",
        tags: ["tattoo", "portfolio", "booking"]
    },
    {
        title: "Liquid Cheers",
        category: "Food & Beverage",
        type: "webflow",
        img: "assets/images/liquidcheers-thumb.webp",
        description: "A sleek beverage brand website showcasing flavors, product details, and a smooth shopping experience.",
        url: "https://www.liquidcheers.com/",
        tags: ["beverage", "ecommerce", "branding"]
    },
    {
        title: "All Image Architects",
        category: "Corporate",
        type: "wordpress",
        img: "assets/images/aia-thumb.webp",
        description: "A modern architectural services site with clear project showcases and streamlined navigation.",
        url: "https://allimagearchitects.com.au/",
        tags: ["architecture", "design"]
    },
    {
        title: "The Local Electrician",
        category: "Service",
        type: "wordpress",
        img: "assets/images/electrician-thumb.webp",
        description: "A fast, service-driven electrician website optimized for quick contact and local bookings.",
        url: "https://www.thelocalelectrician.com.au/",
        tags: ["electrician", "services"]
    },
    {
        title: "The Local Plumber",
        category: "Service",
        type: "wordpress",
        img: "assets/images/plumber-thumb.webp",
        description: "A clean plumbing service website built for easy navigation and fast customer inquiries.",
        url: "https://thelocalplumber.com.au/",
        tags: ["plumbing", "services"]
    },
    {
        title: "Little Nation",
        category: "Ecommerce",
        type: "wordpress",
        img: "assets/images/alittlenation-thumb.webp",
        description: "A bright, product-focused ecommerce site for kids essentials with a smooth shopping experience.",
        url: "https://littlenation.com.au/",
        tags: ["ecommerce", "kids"]
    },
    {
        title: "David Thomas",
        category: "Portfolio",
        type: "wordpress",
        img: "assets/images/davidthomas-thumb.webp",
        description: "A professional portfolio showcasing work, experience, and publications in a polished layout.",
        url: "https://davidthomas.asia/",
        tags: ["portfolio", "personal"]
    },
    {
        title: "Candy's Crosby",
        category: "Personal",
        type: "wordpress",
        img: "assets/images/candyss-thumb.webp",
        description: "A personal brand website with a clean layout highlighting services and personality-driven content.",
        url: "https://candysscrosby.com/",
        tags: ["personal", "branding"]
    },
    {
        title: "Hives Sand & Soil",
        category: "Industrial",
        type: "wordpress",
        img: "assets/images/hivesandsoil-thumb.webp",
        description: "A simple, service-focused site offering sand, soil, and material delivery details with quick inquiry access.",
        url: "https://hivessandandsoil.com/",
        tags: ["sand", "soil"]
    },
    {
        title: "Hives Demolition",
        category: "Industrial",
        type: "wordpress",
        img: "assets/images/hivesdemo-thumb.webp",
        description: "A demolition services website highlighting capabilities, safety info, and fast quote options.",
        url: "https://hivesdemolition.com.au/",
        tags: ["demolition", "services"]
    },
    {
        title: "A Special Delivery",
        category: "Service",
        type: "wordpress",
        img: "assets/images/aspecial-thumb.webp",
        description: "A childbirth education website offering independent Lamaze classes in Australia for safe and positive birth experiences.",
        url: "https://www.aspecialdelivery.com.au/",
        tags: ["delivery", "logistics"]
    },
    {
        title: "Khalil Sydney",
        category: "Construction",
        type: "wordpress",
        img: "assets/images/khalil-thumb.webp",
        description: "A construction services site offering project overviews and streamlined service information.",
        url: "https://khalilsydneyptyltd.com.au/",
        tags: ["construction", "contractor"]
    },
    {
        title: "Energy Healing Massage",
        category: "Wellness",
        type: "wordpress",
        img: "assets/images/energyhealing-thumb.webp",
        description: "A calming wellness website showcasing massage services and booking details.",
        url: "http://energyhealingmassage.com.au/",
        tags: ["wellness", "massage"]
    },
    {
        title: "DBC Waste Management",
        category: "Industrial",
        type: "wordpress",
        img: "assets/images/dbcwaste-thumb.webp",
        description: "A service-focused waste management site offering disposal solutions and contact access.",
        url: "https://dbcwastemanagement.com.au/",
        tags: ["waste", "management"]
    },
    {
        title: "Aussie Rubbish Removals",
        category: "Service",
        type: "wordpress",
        img: "assets/images/aussierubbish-thumb.webp",
        description: "A straightforward rubbish-removal site focused on quick quotes and service clarity.",
        url: "http://www.aussierubbishremovals.com.au/",
        tags: ["rubbish", "removal"]
    },
    {
        title: "Amanda Woolveridge",
        category: "Wellness",
        type: "wordpress",
        img: "assets/images/amanda-thumb.webp",
        description: "A warm, supportive counselling website highlighting services and booking options.",
        url: "https://amandawoolveridgecounselling.com.au/",
        tags: ["counselling", "therapy"]
    },
    {
        title: "Driveway Doctor",
        category: "Service",
        type: "wordpress",
        img: "assets/images/driveway-thumb.webp",
        description: "A repair-service website providing driveway restoration details and easy inquiry access.",
        url: "http://drivewaydoctor.com.au/",
        tags: ["driveway", "repair"]
    },
    {
        title: "SEN Events",
        category: "Template",
        type: "wordpress",
        img: "assets/images/senevents-thumb.webp",
        description: "A customizable event template showcasing schedules, speakers, and ticket info.",
        url: "https://senevents.1tlc.com.au/",
        tags: ["events", "template"]
    },
    {
        title: "5-Minute Marketing",
        category: "Template",
        type: "wordpress",
        img: "assets/images/5minmarketing-thumb.webp",
        description: "A simple marketing template built for fast content publishing and clean layouts.",
        url: "https://5minutemarketingmakeover.1tlc.com.au/",
        tags: ["marketing", "template"]
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
    const links = document.querySelectorAll('.navbar_link'); // all menu links

    function toggleMenu() {
        const isOpen = menu.classList.contains('is-open');

        // Toggle burger animation
        burger.classList.toggle('is-active');

        if (isOpen) {
            // Collapse menu
            menu.style.maxHeight = menu.scrollHeight + "px"; 
            requestAnimationFrame(() => {
                menu.style.maxHeight = "0px";
            });
            menu.classList.remove('is-open');
        } else {
            // Expand menu
            menu.classList.add('is-open');
            menu.style.maxHeight = menu.scrollHeight + "px";

            menu.addEventListener('transitionend', function resetHeight() {
                if (menu.classList.contains('is-open')) {
                    menu.style.maxHeight = "none";
                }
                menu.removeEventListener('transitionend', resetHeight);
            });
        }
    }

    // Burger click
    burger.addEventListener('click', toggleMenu);

    // Close menu when clicking any link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initNavbarMenu();
});


/* Render Marquee (Dynamic HTML Injection) */
function renderMarquee() {
    const contentHTML = SKILLS.map(skill => `
        <div class="marquee-item">
            <i data-lucide="${skill.icon}" width="16"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');

    document.getElementById('marquee-content-1').innerHTML = contentHTML;
    document.getElementById('marquee-content-2').innerHTML = contentHTML;
    lucide.createIcons(); 
}


let currentFilter = "all";
let workSwiper;

/* Render Projects Based on Filter */
function renderProjects(filter = "all") {
    const wrapper = document.querySelector('#work-slider .swiper-wrapper');

    const filteredProjects = PROJECTS.filter(project => {
        return filter === "all" ? true : project.type === filter;
    });

    const projectsHTML = filteredProjects.map(project => {
        const placeholderText = project.title.replace(/ /g, '+');
        const imageUrl = project.img ? project.img : `https://placehold.co/500x300/18181b/a1a1aa?text=${placeholderText}`;
        
        return `
        <a href="${project.url}" target="_blank" class="swiper-slide slider_item">
            <div class="slider_image-wrapper">
                <img src="${imageUrl}" class="hover-scale" alt="${project.title}">
            </div>
            <div class="slider_content">
                <div class="slider_meta">
                    <span class="text-style-overline slider_tag">${project.category}</span>
                    <span class="text-style-overline slider_tag type">${project.type}</span>
                </div>
                <h3 class="slider_title">
                    ${project.title}
                    <i data-lucide="arrow-up-right" width="14" style="margin-left:4px;"></i>
                </h3>
                <p class="text-style-small text-color-secondary slider_description">
                    ${project.description}
                </p>
                <div class="slider_tags-list">
                    ${project.tags.map(tag => `<span class="text-style-overline slider_tag-pill">#${tag}</span>`).join('')}
                </div>
            </div>
        </a>`;
    }).join('');

    wrapper.innerHTML = projectsHTML;
    lucide.createIcons();
}

/* Swiper Init */
function initSwiper() {
    workSwiper = new Swiper('#work-slider', {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
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
}

function resetSwiper() {
    if (workSwiper) workSwiper.destroy(true, true);
    initSwiper();
}

/* Filter button logic */
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentFilter = btn.dataset.filter;

            renderProjects(currentFilter);
            resetSwiper();
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    initSwiper();
    initFilters();
});


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

