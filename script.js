// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    const homeSection = document.getElementById('home');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const homeHeight = homeSection.offsetHeight;
        
        if (scrollPosition > homeHeight * 0.8) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Remove parallax effect - keeping for potential future use
        // const productImage = document.getElementById('productImage');
        // if (productImage) {
        //     const scrolled = window.pageYOffset;
        //     const parallax = scrolled * 0.5;
        //     productImage.style.transform = `translateY(${parallax}px) scale(1)`;
        //     
        //     if (scrolled > homeHeight * 0.3) {
        //         productImage.classList.add('parallax');
        //     } else {
        //         productImage.classList.remove('parallax');
        //     }
        // }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe nutritional image
    const nutritionalImage = document.getElementById('nutritionalImage');
    if (nutritionalImage) {
        observer.observe(nutritionalImage);
    }
    
    // Recipe carousel functionality
    const carousel = document.getElementById('recipeCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    const totalItems = 9;
    const itemsPerView = 3;
    let autoScrollInterval;
    
    if (carousel && prevBtn && nextBtn) {
        function updateCarousel() {
            const translateX = -currentIndex * (100 / itemsPerView);
            carousel.style.transform = `translateX(${translateX}%)`;
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % (totalItems - itemsPerView + 1);
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex = currentIndex === 0 ? (totalItems - itemsPerView) : currentIndex - 1;
            updateCarousel();
        }
        
        function startAutoScroll() {
            autoScrollInterval = setInterval(nextSlide, 4000); // Auto-scroll every 4 seconds
        }
        
        function stopAutoScroll() {
            clearInterval(autoScrollInterval);
        }
        
        // Event listeners for navigation buttons
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopAutoScroll();
            startAutoScroll(); // Restart auto-scroll after manual navigation
        });
        
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopAutoScroll();
            startAutoScroll(); // Restart auto-scroll after manual navigation
        });
        
        // Pause auto-scroll on hover
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);
        
        // Start auto-scroll
        startAutoScroll();
        
        // Recipe item click handlers
        document.querySelectorAll('.recipe-item').forEach((item, index) => {
            item.addEventListener('click', function() {
                // Open external recipe links (dummy URLs)
                const recipeUrls = [
                    'https://indiaphile.info/roasted-makhana/',
                    'https://www.vegrecipesofindia.com/khoya-matar-makhana-recipe/',
                    'https://www.puvi.co/recipes_details/makhana-kheer',
                    'https://preethicuisine.com/roasted-foxnut-salad-makhana-salad/',
                    'https://arogyamnutrition.com/recipe/phool-makhana-smoothie/',
                    'https://rakskitchen.net/spicy-phool-makhana-recipe/',
                    'https://cookpad.com/eng/recipes/9124276',
                    'https://hebbarskitchen.com/makhana-ladoo-recipe-falaari-ladoo/',
                    'https://www.chefadora.com/thatpetitefoodie/creamy-makhana-and-pumpkin-soup-r9byn6pydp'
                ];
                
                if (recipeUrls[index]) {
                    window.open(recipeUrls[index], '_blank');
                }
            });
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const fullName = formData.get('fullName');
            const email = formData.get('email');
            const description = formData.get('description');
            
            // Create mailto link
            const subject = `Contact from ${fullName}`;
            const body = `Name: ${fullName}\nEmail: ${email}\n\nMessage:\n${description}`;
            const mailtoLink = `mailto:Enquiry@MakhanaNation.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your email client will open to send the message.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Create nutrition chart
    createNutritionChart();
    
    // Initialize typewriter effect
    initTypewriterEffect();

    comingSoonTypeWriter();
});

// Nutrition chart using Canvas
function createNutritionChart() {
    const canvas = document.getElementById('nutritionChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Nutrition data (per 100g)
    const labels = ['Protein', 'Carbs', 'Fat', 'Fiber', 'Other'];
    const data = [9.7, 76.9, 0.1, 14.5, 0.8];
    const colors = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC'];

    new Chart(ctx, {
        type: 'doughnut', // You can also use 'pie'
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}g`;
                        }
                    }
                }
            },
            cutout: '40%' // for doughnut inner circle
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Handle window resize for responsive carousel
window.addEventListener('resize', function() {
    const carousel = document.getElementById('recipeCarousel');
    if (carousel) {
        const itemsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
        carousel.style.transform = 'translateX(0)';
    }
});

// Typewriter effect function
function initTypewriterEffect() {
    const typewriterElement = document.getElementById('typewriterText');
    if (!typewriterElement) return;
    
    const texts = [
        "💪 Your Daily Dose of Tasty Protein 💪",
        "💕 Served with Pyaar from Bihar 💕",
        "🍚 Grab a bowl full goodness today 🍚"
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 60;
    let deleteSpeed = 30;
    let pauseTime = 2000;
    
    function typeWriter() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            // Deleting characters
            typewriterElement.textContent = currentText.substring(0, currentCharIndex - 1) + '|';
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(typeWriter, 500);
                return;
            }
            
            setTimeout(typeWriter, deleteSpeed);
        } else {
            // Typing characters
            typewriterElement.textContent = currentText.substring(0, currentCharIndex + 1) + '|';
            currentCharIndex++;
            
            if (currentCharIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, pauseTime);
                return;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start the typewriter effect
    typeWriter();
}


function comingSoonTypeWriter() {
    const typewriterElement = document.getElementById('comingSoonText');
    if (!typewriterElement) return;
    
    const texts = [
        "Coming Soon  on all Major E-Commerce Platforms...",
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typeSpeed = 60;
    let deleteSpeed = 30;
    let pauseTime = 2000;
    
    function typeWriter() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            // Deleting characters
            typewriterElement.textContent = currentText.substring(0, currentCharIndex - 1) + '|';
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(typeWriter, 500);
                return;
            }
            
            setTimeout(typeWriter, deleteSpeed);
        } else {
            // Typing characters
            typewriterElement.textContent = currentText.substring(0, currentCharIndex + 1) + '|';
            currentCharIndex++;
            
            if (currentCharIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, pauseTime);
                return;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start the typewriter effect
    typeWriter();
}

function sendEmail() {
    let params = {
        name: document.getElementById("fullName").value,
        reply_to: document.getElementById("email").value,
        message: document.getElementById("description").value
    };

    emailjs.send("service_jq4tee7", "template_xowz8jb", params).then(() => {
        alert("Thank you for your message! We will get back to you soon.");
    });
}