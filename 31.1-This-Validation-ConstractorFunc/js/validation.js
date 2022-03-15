const form = document.querySelector('.main_Form');
const user_Name = document.querySelector('#user_Name');
const user_Email = document.querySelector('#email');
const user_Password = document.querySelector('#password');
const user_ConfirmPassword = document.querySelector('#pwd_again');

function show_Error(input, message){
  const form_Control = input.parentElement;
  form_Control.className = 'form_Control error';
  const small = form_Control.querySelector('small');
  small.innerText = message;
}
function show_Success(input){
  const form_Control = input.parentElement;
  form_Control.className = 'form_Control success';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(user_Name.value == ''){
      show_Error(user_Name, 'Username is required');
    }else{
      show_Success(user_Name);
    }
    if(user_Email.value == ''){
      show_Error(user_Email, 'Email is required');
    }else{
      show_Success(user_Email);
    }
    if(user_Password.value == ''){
      show_Error(user_Password, 'Password is required');
    }else{
      show_Success(user_Password);
    }
    if(user_ConfirmPassword.value == ''){
      show_Error(user_ConfirmPassword, 'Confirm password is required');
    }else{
      show_Success(user_ConfirmPassword);
    }
});