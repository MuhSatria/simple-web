const btnUp = document.querySelector('#btnTop');
const lateNotif = document.querySelector('.lates__box');
const closeNotif = document.querySelector('#closeNotif');

// header notif
const headHide = document.querySelector('.notif');
const bodyUp = document.querySelector('.body');

// Slide up Header notif

btnUp.addEventListener('click', function () {
  headHide.classList.add('notif__hide');
  bodyUp.classList.add('body__up');
});


// Scroll function

var tes = true;
var scrollFnc = function () {
  var y = window.scrollY;
  if (window.screen.width <= 414 && tes === true) {
    if (y > 1000) {
      lateNotif.className = 'lates__box show'
    }
  } else {
    if (y > 320 && tes === true) {
      lateNotif.className = 'lates__box show'
    }
  }
};

window.addEventListener('scroll', scrollFnc);

// close notif

closeNotif.addEventListener('click', function () {
  lateNotif.className = 'lates__box hide'
  tes = false
  setInterval(function () {
    tes = true
  }, 600000)

})
