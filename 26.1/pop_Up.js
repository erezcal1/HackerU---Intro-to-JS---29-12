const button = document.querySelector('button');
const container = document.querySelector('.container');
const close = document.querySelector('.close');

button.addEventListener('click', ()=>{
  container.style.display = 'block';
});
close.addEventListener('click', ()=>{
  container.style.display = 'none';
});
