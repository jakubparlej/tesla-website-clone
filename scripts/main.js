document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello world");

    const rootElement = document.querySelector('#root');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    let currentSectionIndex = 0;
    let isThrottled = false;

    sections[currentSectionIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start',

    })

    document.addEventListener('wheel', (event) => {
        if (isThrottled) return;
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
        }, 500)

        const direction = event.deltaY > 0 ? 1 : -1;

        if (direction === 1) {
            const isLastSection = currentSectionIndex === sections.length - 1;
            if (isLastSection) return;
        } else if (direction === -1) {
            const firstSection = currentSectionIndex === 0;
            if (firstSection) return;
        }

        currentSectionIndex = currentSectionIndex + direction;

        sections[currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        if (currentSectionIndex === sections.length - 1) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    })
})

const menuBtn = document.querySelector('.menu-btn');
const aside = document.querySelector('.aside');
const asideMenu = document.querySelector('.aside__menu');

menuBtn.addEventListener('click', () => {
    aside.classList.toggle('aside--active');
    asideMenu.classList.toggle('aside__menu--active');
});