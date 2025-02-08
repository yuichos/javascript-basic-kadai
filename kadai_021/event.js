const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  console.log('click');
  setTimeout(() => {
    document.getElementById('text') . textContent = 'ボタンをクリックしました';
  }, 2000);
});