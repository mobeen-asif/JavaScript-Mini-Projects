const links = document.querySelector('.links');
// const widthSize = window.matchMedia('(min-width: 800px)');

// widthSize(widthSize);
// widthSize.addEventListener('change', myJsMedia);

// function toggle(){
//     links.classList.toggle('show-links');
// }

let initialWidth = window.innerWidth;

function handleResize() {
    const currentWidth = window.innerWidth;
    if (currentWidth !== initialWidth) {
        console.log('Window width has changed from', initialWidth, 'to', currentWidth);
        initialWidth = currentWidth;  // Update initialWidth for future comparisons
    }
}

window.addEventListener('resize', handleResize);