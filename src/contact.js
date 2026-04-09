
export function loadContact(){
    const content=document.getElementById('content');

    const container=document.createElement('div');
    container.classList.add('contact-container');

    const title=document.createElement('h1');
    title.textContent="Contact Us";
    container.appendChild(title);

    const schedule=document.createElement('div');
    schedule.classList.add('contact-schedule');
    schedule.innerHTML=`
        <h2>Opening Hours:</h2>
        <p>Monday-Thursday: 12:00 - 22.00</p>
        <p>Friday-Saturday: 12:00 - 00:00</p>
        <p>Sunday: Closed </p>
    `;

    const info=document.createElement('div');
    info.classList.add('contact-info');
    info.innerHTML=`
        <h2>Get in Touch</h2>
        <p><i class="fa-solid fa-location-dot"></i>123 Amazing Street, Imagine City</p>
        <p><i class="fa-solid fa-envelope"></i> hello@fantasykitchen.com</p>
        <p><i class="fa-solid fa-phone"></i>+34 123 456 789</p>
        <div class="social-links">
            <span>Intagram</span> | <span>Facebook</span> | <span>X</span>
        </div>
    `;
    container.append(schedule,info);
    content.appendChild(container);
}
