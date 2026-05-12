// Countdown Timer
function startTimer(duration, display) {
    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Social Proof Notifications
const names = ["Ana Maria", "Daniela", "Camila", "Juliana", "Marcela", "Fernanda", "Luciana"];
const cities = ["São Paulo - SP", "Fortaleza - CE", "Recife - PE", "Belo Horizonte - MG", "Curitiba - PR", "Rio de Janeiro - RJ"];

function showSocialProof() {
    const sp = document.getElementById('social-proof');
    const nameEl = document.getElementById('sp-name');
    const metaEl = document.getElementById('sp-meta');

    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const time = Math.floor(Math.random() * 5) + 1;

    nameEl.textContent = name;
    metaEl.textContent = `há ${time} minutos • ${city}`;

    sp.classList.add('show');

    setTimeout(() => {
        sp.classList.remove('show');
    }, 5000);
}

// FAQ Accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.display === 'block';
        
        // Close all
        document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
        
        if (!isOpen) {
            content.style.display = 'block';
        }
    });
});

window.onload = function () {
    // Start 3h 32m 14s timer (from new images)
    var threeHoursPlus = (3 * 3600) + (32 * 60) + 14;
    startTimer(threeHoursPlus);

    // Initial show
    setTimeout(showSocialProof, 3000);
    
    // Repeat every 15-25 seconds
    setInterval(showSocialProof, 20000);
};

// Upsell Modal Logic
const modal = document.getElementById('upsell-modal');
const basicBtn = document.getElementById('basic-plan-btn');
const closeBtn = document.querySelector('.close-modal');
const secondaryBtn = document.querySelector('.modal-btn-secondary');

if (basicBtn) {
    basicBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.classList.add('no-scroll');
    });
}

const closeModal = (e) => {
    if (e) e.preventDefault();
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
};

if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (secondaryBtn) secondaryBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
