  const btn = document.querySelector('.btn_menu');
const nav = document.querySelector('.header_list');

btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu');
  // アニメーションでボタンを開いていたらcloseと表示させる
  if (btn.innerHTML === 'Menu') {
    btn.innerHTML = 'close';
  } else {
    btn.innerHTML = 'Menu'
  }
});