const dropBtn = document.getElementById('dropDown');
dropBtn.addEventListener('click' , function(){
  console.log('Clicked');
  const open = document.querySelector('.toggle')
  open.classList.toggle('active')
})