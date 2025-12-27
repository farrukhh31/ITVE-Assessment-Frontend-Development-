
import { GoogleGenAI } from "@google/genai";


// 1. Navigation & Scroll Management
const sections = document.querySelectorAll('.snap-section');
const dots = document.querySelectorAll('.dot');
const navLinks = document.querySelectorAll('.nav-link');
const container = document.getElementById('main-container');

/**
 * Programmatic smooth scroll to specific section
 * @param {string} id 
 */
window.scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};

/**
 * Updates UI markers based on the currently visible section
 * @param {string} activeId - The ID of the currently intersecting section
 */
function updateActiveUI(activeId) {
    dots.forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('data-section') === activeId);
    });
    navLinks.forEach(link => {
        const isActive = link.getAttribute('data-section') === activeId;
        link.classList.toggle('active-nav', isActive);
        link.classList.toggle('text-slate-500', !isActive);
    });
}

const observerOptions = {
    root: container,
    threshold: 0.5 
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateActiveUI(entry.target.id);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));


// 2. Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.closeMobileMenu = () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
};

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
        } else {
            closeMobileMenu();
        }
    });
}

document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
    }
});

// 3. AI Advisor Integration (Gemini)

const botToggle = document.getElementById('bot-toggle');
const botWindow = document.getElementById('bot-window');
const botClose = document.getElementById('bot-close');
const botMessages = document.getElementById('bot-messages');
const botInput = document.getElementById('bot-input');
const botSend = document.getElementById('bot-send');

if (botToggle) {
    botToggle.addEventListener('click', () => {
        botWindow.classList.toggle('hidden');
        botWindow.classList.toggle('flex');
        if (!botWindow.classList.contains('hidden')) {
            botInput.focus();
        }
    });
}

if (botClose) {
    botClose.addEventListener('click', () => {
        botWindow.classList.add('hidden');
        botWindow.classList.remove('flex');
    });
}


async function queryAdvisor(text) {
    const userPrompt = text.trim();
    if (!userPrompt) return;

    appendMessage('user', userPrompt);
    botInput.value = '';

    const typingId = 'typing-' + Date.now();
    appendMessage('bot', 'Consulting our expert records...', typingId);

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const result = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: userPrompt,
            config: {
                systemInstruction: "You are the ITVE Academy Career Assistant. ITVE is a technical vocational institute in Islamabad. Courses include Computer Science, Electrical, Mechanical, Civil, Graphic Design, and Nursing. Help students understand their options. Be encouraging, concise (under 50 words), and professional. If you don't know a specific administrative detail, ask them to contact info@itve.pk.",
                temperature: 0.7
            }
        });

        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.parentElement.parentElement.remove();
        
        appendMessage('bot', result.text || "I'm ready to help! Please ask about our programs.");
    } catch (err) {
        console.error("AI Error:", err);
        const typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.parentElement.parentElement.remove();
        appendMessage('bot', "I'm currently undergoing maintenance. Please reach out to our admission office at +92-51-1234567.");
    }
}

function appendMessage(role, text, id = null) {
    const containerDiv = document.createElement('div');
    containerDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;

    const bubble = document.createElement('div');
    bubble.className = `max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
        role === 'user' 
        ? 'bg-blue-600 text-white rounded-tr-none shadow-md' 
        : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
    }`;
    if (id) bubble.id = id;
    bubble.textContent = text;

    containerDiv.appendChild(bubble);
    botMessages.appendChild(containerDiv);
    botMessages.scrollTop = botMessages.scrollHeight;
}

if (botSend) {
    botSend.addEventListener('click', () => queryAdvisor(botInput.value));
}

if (botInput) {
    botInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') queryAdvisor(botInput.value);
    });
}

// 4. Initial Bootstrap

document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        setTimeout(() => scrollToSection(hash), 100);
    }

    const form = document.getElementById('admission-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = "Processing Application...";
            btn.disabled = true;
            
            setTimeout(() => {
                alert("Thank you! Your interest has been recorded. Our admission team will contact you shortly.");
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
