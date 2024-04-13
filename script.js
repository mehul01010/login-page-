let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField  = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text')

signInBtn.addEventListener('click',()=>{

    nameField.style.maxHeight = '0';
    title.innerHTML= 'Sign in';
    text.innerHTML= 'forgot password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.add('remove');
    underline.style.transform = 'translate(35px)';
});
signUpBtn.addEventListener('click',()=>{

    nameField.style.maxHeight = '60px';
    title.innerHTML= 'Sign up';
    text.innerHTML= 'password suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('remove');
    underline.style.transform = 'translate(0)';
});