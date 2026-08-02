// ===== script.js =====

// ----- Certificate data (premium) -----
const certs = [
  { name: "Introduction to Computers", inst: "National Skill Academic · SINE IIT Bombay", date: "2026", score: "85%", credits: "1" },
  { name: "LibreOffice Suite Writer 6.3", inst: "National Skill Academic · SINE IIT Bombay", date: "2026", score: "87.5%", credits: "1" },
  { name: "LibreOffice Suite Calc 6.3", inst: "National Skill Academic · SINE IIT Bombay", date: "2026", score: "92.5%", credits: "2" },
  { name: "LibreOffice Suite Impress 6.3", inst: "National Skill Academic · SINE IIT Bombay", date: "2026", score: "97.5%", credits: "1" }
];
const certGrid = document.getElementById('certGrid');
certs.forEach(c => {
  const card = document.createElement('div');
  card.className = 'cert-card';
  const cornerBr = document.createElement('div');
  cornerBr.className = 'corner-br';
  card.appendChild(cornerBr);
  const shimmer = document.createElement('div');
  shimmer.className = 'shimmer-overlay';
  card.appendChild(shimmer);
  card.innerHTML += `
    <div class="cert-icon"><i class="fas fa-certificate"></i></div>
    <div class="cert-name">${c.name}</div>
    <div class="cert-institution">${c.inst}</div>
    <div class="cert-date">${c.date} · Score ${c.score} · Credits ${c.credits}</div>
    <span class="cert-badge"><i class="fas fa-check-circle"></i> Verified</span>
  `;
  certGrid.appendChild(card);
});

// Resume link
document.getElementById('resumeLink').href = 'https://drive.google.com/file/d/1tD89DNDIzzcB7wUmx-F5VTHSqspkWFG9/view?usp=drivesdk';

// GSAP
gsap.registerPlugin(ScrollTrigger);
gsap.from('.hero-content', { opacity: 0, y: 60, duration: 1, delay: 0.2 });
gsap.from('.hero-image', { opacity: 0, scale: 0.8, duration: 1, delay: 0.4 });
gsap.utils.toArray('section').forEach(s => {
  gsap.from(s, { opacity: 0, y: 40, duration: 0.8, scrollTrigger: { trigger: s, start: 'top 85%' } });
});

// Typing
const words = ['BA English Literature', 'Internship Portfolio', 'Tech & Humanities'];
let idx = 0,
  charIdx = 0,
  isDeleting = false;
const typingEl = document.querySelector('.typing');

function typeEffect() {
  const current = words[idx];
  if (!isDeleting) {
    typingEl.innerHTML = current.substring(0, charIdx + 1) + '<span class="cursor"></span>';
    charIdx++;
    if (charIdx === current.length) { isDeleting = true;
      setTimeout(typeEffect, 1800); return; }
    setTimeout(typeEffect, 100);
  } else {
    typingEl.innerHTML = current.substring(0, charIdx - 1) + '<span class="cursor"></span>';
    charIdx--;
    if (charIdx === 0) { isDeleting = false;
      idx = (idx + 1) % words.length;
      setTimeout(typeEffect, 400); return; }
    setTimeout(typeEffect, 50);
  }
}
setTimeout(typeEffect, 600);

// Progress
window.addEventListener('scroll', () => {
  const scroll = window.scrollY,
    height = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress-bar').style.width = (scroll / height) * 100 + '%';
});

// Theme
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark');
  this.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Loader
//window.addEventListener('load', () => { document.getElementById('loader').style.display = 'none'; });
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    // Total loader time ≈ 0.7 second
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 700);
});
// Top Bar Dissapper
const topBar = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        topBar.classList.add("scrolled");
    } else {
        topBar.classList.remove("scrolled");
    }
});

// Menu toggle
const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');
menuBtn.addEventListener('click', (e) => { e.stopPropagation();
  menuDropdown.classList.toggle('open'); });
document.addEventListener('click', () => { menuDropdown.classList.remove('open'); });
menuDropdown.addEventListener('click', (e) => e.stopPropagation());

// ===== SMART CHATBOT WITH ENHANCED EDUCATION INTENT =====
// Define intents with comprehensive keyword lists
const intents = [{
  name: 'greeting',
  keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'howdy', 'sup', 'greetings', 'yo', 'hey there', 'how are you'],
  response: '👋 Hello! I am Manik\'s AI assistant. How can I help you explore his portfolio today?'
}, {
  name: 'education',
  keywords: [
    'education', 'academic', 'study', 'studies', 'ba english', 'literature', 'college', 'university', 'course', 'degree', 'major',
    '12th', '10th', 'higher secondary', 'hslc', 'school', 'graduation', 'percentage', 'marks', 'grade',
    'qualification', 'qualifications', 'highest qualification', 'study', 'academic background',
    'which degree', 'education level', 'course', 'subjects', 'academic credentials', 'field of study',
    'highest degree', 'stream', 'discipline', 'completed graduation', 'study', 'schooling',
    'academic journey', 'educational', 'educational qualifications',
    'education', 'studied', 'studying', 'degree'
  ],
  response: '🎓 Manik is pursuing a BA in English. He passed 12th with 88% and 10th with 85%.'
}, {
  name: 'skills',
  keywords: ['skill', 'skills', 'technical', 'computer', 'programming', 'web', 'github', 'ai', 'prompt', 'office', 'libreoffice', 'excel', 'word', 'impress', 'tech', 'proficiency', 'tools', 'software'],
  response: '💻 Manik is skilled in computer proficiency, office tools (LibreOffice, MS Office), web basics, AI prompt engineering, and Git.'
}, {
  name: 'strengths',
  keywords: ['strength', 'strengths', 'strong', 'best', 'quality', 'ability', 'talent', 'good at', 'expert', 'skill set'],
  response: '🌟 Manik\'s strengths include problem-solving, adaptability, leadership, and literary analysis.'
},{
  name: 'thanks',
  keywords: [
    'thank you',
    'thanks',
    'thx',
    'thank u',
    'thankyou',
    'thanks a lot',
    'many thanks',
    'appreciate it',
    'ty',
    'tysm',
    'thanks!',
    'thank you!',
    'cheers',
    'much appreciated',
    'thanks so much',
    'thanks buddy',
    'thank you so much'
  ],
  response: '😊 Glad I could help! Ask away if you\'re curious about anything else.'
},{
  name: 'contact',
  keywords: ['contact', 'email', 'phone', 'reach', 'mail', 'gmail', 'number', 'how to reach', 'get in touch', 'call', 'message', 'connect'],
  response: '📧 You can contact Manik by clicking the "Email Me" button or by sending a message through the message box in the Contact section of the website.'
}, {
  name: 'certificates',
  keywords: ['certificate', 'cert', 'certifications', 'courses', 'training', 'credential', 'achievement', 'badge', 'accomplishment'],
  response: '🏅 Manik holds certificates in Introduction to Computers, LibreOffice Writer, Calc, and Impress from National Skill Academic & IIT Bombay.'
}, {
  name: 'about',
  keywords: ['about', 'who', 'manik', 'yourself', 'bio', 'introduce', 'tell me about', 'background', 'profile'],
  response: '📖 Manik Das is a BA English Literature student with a blend of humanities and tech skills. He loves critical thinking, storytelling, and exploring new technologies.'
}, {
  name: 'portfolio',
  keywords: ['project', 'portfolio', 'work', 'showcase', 'projects'],
  response: '📁 This portfolio showcases Manik\'s academic background, skills, and certificates. He is open to internships and collaborations.'
}, {
  name: 'resume',
  keywords: ['resume', 'cv', 'download', 'pdf', 'resume download', 'curriculum vitae'],
  response: '📄 You can download and see Manik\'s resume from the Resume section on this page.'
}, {
  name: 'internship',
  keywords: ['internship', 'job', 'career', 'opportunity', 'work with', 'hire', 'employment', 'position', 'role'],
  response: '💼 Manik is actively seeking internships where he can combine his literary skills with tech proficiency. Feel free to reach out!'
}, {
  name: 'hobbies',
  keywords: ['hobby', 'interest', 'passion', 'love', 'free time', 'hobbies', 'interests', 'like', 'enjoy'],
  response: '📚 Manik loves reading, creative writing, exploring new technologies, and analyzing literature.'
}, {
  name: 'hire',
  keywords: ['hire', 'hire him', 'benefits', 'value', 'contribution'],
  response: '🤝 Manik brings a unique combination of literary analysis, critical thinking, and technical proficiency. He is adaptable, a quick learner, and passionate about storytelling and innovation.'
}];

// Function to find best matching intent with weighted scoring
function findIntent(query) {
  const words = query.toLowerCase().split(' ');
  let bestIntent = null;
  let bestScore = 0;

  for (const intent of intents) {
    let score = 0;
    const queryLower = query.toLowerCase();
    
    for (const keyword of intent.keywords) {
      const keywordLower = keyword.toLowerCase();
      
      // Direct phrase match (higher weight)
      if (queryLower.includes(keywordLower)) {
        score += 3;
      }
      
      // Word-by-word matching
      for (const word of words) {
        if (word.length > 2) {
          // Full word match
          if (keywordLower.includes(word) || word.includes(keywordLower)) {
            score += 1;
          }
          // Partial match (e.g., "educat" matches "education")
          if (keywordLower.length > 3 && word.length > 3) {
            if (keywordLower.includes(word.substring(0, 4)) || word.includes(keywordLower.substring(0, 4))) {
              score += 0.5;
            }
          }
        }
      }
    }
    
    // Boost score for education intent if multiple education-related words appear
    if (intent.name === 'education') {
      const eduWords = ['education', 'academic', 'study', 'degree', 'college', 'university', 'school', 'qualification', 'course', 'graduate'];
      let eduCount = 0;
      for (const word of words) {
        if (eduWords.some(ew => word.includes(ew) || ew.includes(word))) {
          eduCount++;
        }
      }
      if (eduCount >= 2) {
        score += eduCount * 0.5;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  // Return intent only if score is meaningful
  return bestScore > 0.5 ? bestIntent : null;
}

// Chatbot logic
const chatbotWin = document.getElementById('chatbot-window');
document.getElementById('chatbot-toggle').addEventListener('click', () => chatbotWin.classList.toggle('open'));
document.getElementById('chat-close').addEventListener('click', () => chatbotWin.classList.remove('open'));
const chatMessages = document.getElementById('chat-messages');

function addMessage(text, sender, isHTML = false) {
  const div = document.createElement('div');
  div.className = sender === 'user' ? 'user-msg' : 'bot-msg';
  if (isHTML) {
    div.innerHTML = text;
  } else {
    div.textContent = text;
  }
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(query) {
  const intent = findIntent(query);
  if (intent) {
    return intent.response;
  }
  // Fallback response with helpful suggestions
 // return "I'm trained on Manik's education, skills, strengths, and contact. Try asking about:\n• His education or qualifications\n• His skills and strengths\n• His certificates\n• How to contact him";
  return `I can tell you about Manik's education, skills, projects, certificates, and contact.

Need anything else? Feel free to contact Manik! 😊`;
}

// Chip click handlers
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', function() {
    const input = document.getElementById('chat-input');
    input.value = this.textContent.trim();
    document.getElementById('chat-send').click();
  });
});

document.getElementById('chat-send').addEventListener('click', () => {
  const input = document.getElementById('chat-input');
  if (!input.value.trim()) return;
  const userMessage = input.value.trim();
  addMessage(userMessage, 'user');
  const reply = getBotResponse(userMessage);
  setTimeout(() => addMessage(reply, 'bot'), 300);
  input.value = '';
});

document.getElementById('chat-input').addEventListener('keypress', e => {
  if (e.key === 'Enter') document.getElementById('chat-send').click();
});

// ----- Contact form (Google Sheets) -----
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzZ8ymN7VsorEcyJv6ejUf_mogcDKq9GG1koFW-NUWP7M1wX-4aFyQkEf2QGgm3TT4XkA/exec';
document.getElementById('msgSendBtn').addEventListener('click', function() {
  const name = document.getElementById('msgName').value.trim();
  const email = document.getElementById('msgEmail').value.trim();
  const text = document.getElementById('msgText').value.trim();
  const status = document.getElementById('msgStatus');
  if (!name || !email || !text) { status.innerHTML = '⚠️ Please fill all fields.'; return; }
  if (!email.includes('@') || !email.includes('.')) { status.innerHTML = '⚠️ Please enter a valid email.'; return; }
  status.innerHTML = '⏳ Sending...';
  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message: text })
  }).then(() => {
    showPopup();
    status.innerHTML = "";
    document.getElementById('msgName').value = '';
    document.getElementById('msgEmail').value = '';
    document.getElementById('msgText').value = '';
    
  }).catch(() => { status.innerHTML = '❌ Error. Try again.'; });
});
//newly added for popup
function showPopup() {
    const popup = document.getElementById("successPopup");

    popup.classList.add("show");

    setTimeout(() => {
        closePopup();
    }, 4000);
}

function closePopup() {
    document.getElementById("successPopup").classList.remove("show");
}
// Disable right-click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable copy, cut, and paste
["copy", "cut", "paste"].forEach(event => {
    document.addEventListener(event, e => e.preventDefault());
});

// Disable dragging
document.addEventListener("dragstart", e => e.preventDefault());

// Disable common shortcuts
document.addEventListener("keydown", function(e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Ctrl + Shift + I/J/C
    if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C"].includes(e.key.toUpperCase())
    ) {
        e.preventDefault();
    }

    // Ctrl + U
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
    }

    // Ctrl + S
    if (e.ctrlKey && e.key.toUpperCase() === "S") {
        e.preventDefault();
    }

    // Ctrl + C
    if (e.ctrlKey && e.key.toUpperCase() === "C") {
        e.preventDefault();
    }

    // Ctrl + A
    if (e.ctrlKey && e.key.toUpperCase() === "A") {
        e.preventDefault();
    }
});

//go to top button
const backToTop = document.getElementById("backToTop");

let hideTimer;

function showButton() {
  backToTop.classList.add("show");

  // Reset the timer whenever the user scrolls
  clearTimeout(hideTimer);

  // Hide after 2 seconds
  hideTimer = setTimeout(() => {
    backToTop.classList.remove("show");
  }, 2000);
}

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  // Only show when near the bottom
  if (pageHeight - scrollPosition < 2000 ) {
    showButton();
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});