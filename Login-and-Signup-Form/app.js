const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const signuplink = document.querySelector('.signup-link');

signuplink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})