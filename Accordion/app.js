const accordion = document.querySelectorAll('.accordion-item-header');

accordion.forEach(accordion => {
    accordion.addEventListener('click', event => {
        const activeAccordion = document.querySelector('.accordion-item-header.active');
        if (activeAccordion && activeAccordion !== accordion) {
            activeAccordion.classList.toggle('active');
            activeAccordion.nextElementSibling.style.maxHeight = 0
        }
        accordion.classList.toggle('active');
        const accordionBody = accordion.nextElementSibling;
        if (accordion.classList.contains('active')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        }
        else {
            accordionBody.style.maxHeight = 0;
        }
    })
})