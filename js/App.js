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

// Animation of progress
let section = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.the-progress span');

let statsSection = document.querySelector('.stats');
let nums = document.querySelectorAll('.stats .number');
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
