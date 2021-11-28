let btn = document.getElementById('btn');

window.onscroll = function () {
  if (window.pageYOffset >= 907) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
};

btn.onclick = function () {
  window.scrollTo(0, 0);
};
