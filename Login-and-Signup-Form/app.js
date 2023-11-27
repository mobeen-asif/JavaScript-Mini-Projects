const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const signuplink = document.querySelector('.signup-link');

const loginUsername = document.querySelector('#login-username');
const loginPassword = document.querySelector('#login-password');
const signupUsername = document.querySelector('#signup-username');
const signupPassword = document.querySelector('#signup-password');
const confirmPassword = document.querySelector('#confirm-password');
const mail = document.querySelector('#email');

const loginBtn = document.querySelector('#login-btn');
const signupBtn = document.querySelector('#signup-btn');

const userData = [];

signuplink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
    wrapper.style.height = '550px' 
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    wrapper.style.height = '440px';
});

signupBtn.addEventListener('click', ()=>{
    if(confirmPassword.value !== ' '){
        if (signupPassword.value.length >= 8) {
            if (signupPassword.value === confirmPassword.value) {
                // const userData = JSON.parse(localStorage.getItem('users')) || [];
                // const newUser = {
                //     name:signupUsername.value,
                //     pass:signupPassword.value,
                // };
                // userData.push(newUser)
                // localStorage.setItem('users', JSON.stringify(userData))
                // userData.push({name:signupUsername.value, passowrd:signupPassword.value});
                // localStorage.setItem('userData', JSON.stringify(userData));
                userData.push({name:signupUsername.value,password:signupPassword.value});
                signupPassword.value = '';
                confirmPassword.value = ''; 
                signupUsername.value = '';
                mail.value = '';
                alert('Successfully registered!')
            } else {
                alert('Password and Confirm Password does not match.');
            }
        } else {
            alert('Passowrd must be minimum 8 characters long');
        }
    }else{
        alert('Please fill out password filed');
    }
});

loginBtn.addEventListener('click', ()=>{
    for(obj of userData){
        if (obj.name === loginUsername.value && obj.password === loginPassword.value) { 
            loginUsername.value = '';
            loginPassword.value = '';
            window.location.href = './homepage.html';
        } else {
            alert('wrong credentials')
        }
    }

    // const userData = JSON.parse(localStorage.getItem('users')) || [];
    //     if(userData[1].name === loginUsername.value && userData[1].pass=== loginPassword.value){
    //         loginUsername.value = '';
    //         loginPassword.value = '';
    //         window.location.href = './homepage.html';
    //     }
    }
);