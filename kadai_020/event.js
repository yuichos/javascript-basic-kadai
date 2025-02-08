const jsBtn = document.getElementById('btn');
jsBtn.addEventListener('click', ()=>{
  console.log('click');
  document.getElementById('text') . textContent = 'ボタンをクリックしました';
});