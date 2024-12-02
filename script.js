// Experience Data
const experiences = [
    {
        title: "Computer Science Tutor",
        company: "Juni Learning",
        period: "May 2023 - Present",
        type: "Part-time",
        description: "Providing one-on-one online tutoring sessions in computer science and programming, teaching Python, Java, web development, and data structures."
    },
    {
        title: "Student Researcher",
        company: "TIDAL Lab, Northwestern University",
        period: "Jan 2024 - Present",
        type: "Research",
        description: "Working with interdisciplinary team to design and evaluate innovative educational technologies, including coding platforms and interactive installations."
    },
    {
        title: "Content Developer",
        company: "Northwestern University",
        period: "Feb 2024 - Jul 2024",
        type: "Education",
        description: "Designing and implementing innovative STEAM curricula and programs for Chicago youth using the TunePad platform."
    }
];

/// Project Data with detailed process information
const projects = [
    {
        title: "LinkedIn AI Editor Assistant",
        category: "design",
        description: "AI-powered content safety tool prototype for LinkedIn's 900M+ users and Fortune 500 creators",
        technologies: ["User Research", "Figma", "Prototyping"],
        image: "/images/linkedin-ai.svg",
        links: {
            prototype: "https://www.figma.com/design/XQ6tkXUHtEA1gUQtnryrNW/",
            presentation: "https://www.canva.com/design/DAGFVk5d958/"
        },
        process: {
            research: [
                "Market research with 136 participants",
                "Concept testing with 54 users",
                "One-on-one empathy interviews with creators",
                "Competitive analysis of content safety tools"
            ],
            design: [
                "Low-fidelity wireframes",
                "User flow mapping",
                "High-fidelity prototypes",
                "Usability testing iterations"
            ],
            outcomes: {
                metrics: [
                    { value: "136+", label: "User Studies" },
                    { value: "54", label: "Concept Tests" },
                    { value: "40%", label: "Fortune 500 Impact" }
                ],
                documentation: "Comprehensive whitepaper on research findings"
            }
        }
    },
    {
        title: "Ostrich Pillow Redesign",
        category: "design",
        description: "Innovative 3-in-1 travel pillow integrating neck support, eye mask, and head cushioning",
        technologies: ["Industrial Design", "3D Modeling", "User Testing"],
        image: "/images/ostrich-pillow.svg",
        process: {
            research: [
                "15 user interviews",
                "5 empathy maps",
                "3 customer journey maps",
                "Competitive product analysis"
            ],
            design: [
                "15 initial concept sketches",
                "3 detailed storyboards",
                "2 mind maps",
                "5 VizCom AI renderings",
                "Physical prototyping"
            ],
            outcomes: {
                metrics: [
                    { value: "40%", label: "Volume Reduction" },
                    { value: "15", label: "User Studies" },
                    { value: "3", label: "Prototypes" }
                ]
            }
        }
    },
    {
        title: "H1 Buddy",
        category: "design",
        description: "Mobile app helping international students navigate visa processes",
        technologies: ["UI/UX Design", "Figma", "User Research"],
        image: "/images/h1buddy.svg",
        links: {
            prototype: "https://www.figma.com/design/7lOJ4dJN9oK5Nnyo0pB4nV/"
        },
        process: {
            research: [
                "International student interviews",
                "Visa process analysis",
                "Pain point identification"
            ],
            design: [
                "User flow mapping",
                "Information architecture",
                "Wireframing",
                "High-fidelity prototypes"
            ],
            styleGuide: {
                fonts: ["Open Sans", "Epilogue", "Ephesis"],
                colors: ["Teal", "White"],
                icons: "5x45px"
            }
        }
    },
    {
        title: "TIDAL Lab Research",
        category: "research",
        description: "Educational technology research focusing on innovative learning platforms",
        technologies: ["Research Methods", "EdTech", "Data Analysis"],
        image: "/images/tidal-research.svg",
        process: {
            goals: [
                "Evaluate educational technology effectiveness",
                "Develop new teaching methodologies",
                "Improve student engagement"
            ],
            methodology: [
                {
                    type: "qualitative",
                    title: "User Studies",
                    description: "Conducted interviews with students and educators"
                },
                {
                    type: "quantitative",
                    title: "Data Analysis",
                    description: "Analyzed learning outcomes and engagement metrics"
                }
            ],
            findings: [
                "Increased student engagement by 40%",
                "Improved learning outcomes in STEAM subjects",
                "Successfully implemented in Chicago schools"
            ]
        }
    },
    {
        title: "Study Buddy Finder",
        category: "software",
        description: "Web platform connecting Northwestern students for study groups",
        technologies: ["React", "Firebase", "Tailwind", "Node.js"],
        image: "/images/study-buddy.svg",
        github: "#",
        demo: "https://nu-study-buddy-finder-7co6.vercel.app",
        process: {
            techDetails: [
                {
                    title: "Frontend Architecture",
                    description: "React components with Tailwind styling",
                    language: "jsx"
                },
                {
                    title: "Backend Implementation",
                    description: "Firebase for real-time updates and authentication",
                    language: "javascript"
                }
            ],
            challenges: [
                {
                    title: "Real-time Matching",
                    description: "Implementing efficient study group matching",
                    solution: "Used Firebase Realtime Database with custom indexing"
                },
                {
                    title: "Schedule Coordination",
                    description: "Handling timezone and availability conflicts",
                    solution: "Implemented custom calendar integration"
                }
            ]
        }
    }
 ];
// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const projectGrid = document.querySelector('.project-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const timeline = document.querySelector('.timeline');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Create Experience Timeline
function createExperienceTimeline() {
    experiences.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <p class="description">${exp.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;
    
    card.innerHTML = `
        <div class="project-image" style="background-image: url(${project.image})"></div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">Live Demo</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Filter Projects
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 0);
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
}

// Initialize Projects
function initializeProjects() {
    projectGrid.innerHTML = '';
    projects.forEach(project => {
        projectGrid.appendChild(createProjectCard(project));
    });
}

// Project Filter Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        filterProjects(filter);
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createExperienceTimeline();
    initializeProjects();
    
    // Add animation classes to elements
    document.querySelectorAll('.project-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
});

// Handle scroll events for header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    }
    
    if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
    themeIcon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    
    localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

themeToggle.addEventListener('click', toggleTheme);

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    }
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

function showToast(message, type = 'success') {
    const toastContent = toast.querySelector('.toast-content');
    const toastIcon = toast.querySelector('.toast-icon');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastIcon.className = `toast-icon fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function validateForm(formData) {
    const errors = {};
    
    if (formData.get('name').trim().length < 2) {
        errors.name = 'Name must be at least 2 characters';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.get('email'))) {
        errors.email = 'Please enter a valid email address';
    }
    
    if (formData.get('subject').trim().length < 3) {
        errors.subject = 'Subject must be at least 3 characters';
    }
    
    if (formData.get('message').trim().length < 10) {
        errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
}

function showErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
        el.textContent = '';
    });
    
    // Show new errors
    Object.entries(errors).forEach(([field, message]) => {
        const errorEl = document.querySelector(`#${field} + .error-message`);
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.style.display = 'block';
        }
    });
}

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
        showErrors(errors);
        return;
    }
    
    // Simulate form submission
    try {
        // Here you would normally send the data to your server
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        showToast('Message sent successfully! I will get back to you soon.');
        contactForm.reset();
    } catch (error) {
        showToast('Failed to send message. Please try again.', 'error');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    createExperienceTimeline();
    initializeProjects();
    
    // Add animation classes to elements
    document.querySelectorAll('.project-card, .timeline-item, .social-link').forEach(el => {
        observer.observe(el);
    });
});

// Experience Tabs Functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const experiencePanels = document.querySelectorAll('.experience-panel');

    function switchTab(e) {
        const targetTab = e.target.closest('.tab-btn');
        if (!targetTab) return;

        const targetPanel = targetTab.dataset.tab;

        // Update active states
        tabButtons.forEach(btn => btn.classList.remove('active'));
        experiencePanels.forEach(panel => panel.classList.remove('active'));

        targetTab.classList.add('active');
        document.querySelector(`[data-content="${targetPanel}"]`).classList.add('active');
    }

    document.querySelector('.experience-tabs').addEventListener('click', switchTab);
});

function toggleProcess(projectId) {
    const processDetails = document.getElementById(`process-${projectId}`);
    const processToggle = processDetails.previousElementSibling;
    
    processDetails.classList.toggle('show');
    processToggle.classList.toggle('active');
  }


  document.addEventListener('DOMContentLoaded', () => {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    const processToggles = document.querySelectorAll('.process-toggle');
    
    processToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const details = toggle.nextElementSibling;
            const currentSection = toggle.closest('.process-section');
            const allSections = document.querySelectorAll('.process-section');
            
            // If opening a section
            if (!details.classList.contains('show')) {
                // Close any open sections first
                document.querySelectorAll('.process-details.show').forEach(openDetail => {
                    openDetail.classList.remove('show');
                    openDetail.previousElementSibling.classList.remove('active');
                });
                
                // Open clicked section
                details.classList.add('show');
                toggle.classList.add('active');
                
                // Add blur to other sections
                allSections.forEach(section => {
                    if (section !== currentSection) {
                        section.classList.add('blur');
                    }
                });
                
                // Show overlay
                overlay.classList.add('active');
            } else {
                // Close section
                details.classList.remove('show');
                toggle.classList.remove('active');
                
                // Remove blur from all sections
                allSections.forEach(section => {
                    section.classList.remove('blur');
                });
                
                // Hide overlay
                overlay.classList.remove('active');
            }
        });
    });

    // Close expanded section when clicking overlay
    overlay.addEventListener('click', () => {
        document.querySelectorAll('.process-details.show').forEach(detail => {
            detail.classList.remove('show');
            detail.previousElementSibling.classList.remove('active');
        });
        
        document.querySelectorAll('.process-section').forEach(section => {
            section.classList.remove('blur');
        });
        
        overlay.classList.remove('active');
    });
});