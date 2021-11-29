let btn = document.getElementById('btn');
let x = document.getElementById('landing');

window.onscroll = function () {
  if (window.pageYOffset >= x.offsetHeight) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
};

btn.onclick = function () {
  window.scrollTo(0, 0);
};
// TypeWriter
let i = 0;
let txt = document.getElementById('head');
let text = txt.innerHTML;
txt.innerHTML = ' ';
let speed = 100;

function typeWriter() {
  if (i < text.length) {
    txt.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

let p = 0;
let para = document.getElementById('para');
let graph = para.innerHTML;
para.innerHTML = ' ';
let velocity = 10;

function typing() {
  if (p < graph.length) {
    para.innerHTML += graph.charAt(p);
    p++;
    setTimeout(typing, velocity);
  }
}
typing();
