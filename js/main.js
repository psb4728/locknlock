var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  effect: 'fade',

  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

$(function() {
  var $firstMenu = $('.gnb > ul > li'),
      $header = $('header');

  $firstMenu.mouseover(function() {
    $header.stop().animate({height: '400px'},300);
  })
  .mouseout(function() {
    $header.stop().animate({height: '137px'},400);
  });
});

// header 고정
document.addEventListener('scroll', function() {
  var header = document.querySelector('.header'),
      headerHeight = header.offsetTop;

  if(window.pageYOffset > headerHeight) {
    header.classList.add('stiky');
  } else {
    header.classList.remove('stiky');
  }
});

// back-to-top 
var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

// 문서 높이 계산
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight); // 둘중 높은 값을 사용
if(docHeight !== 0) {
  offset = docHeight / 4;
}

// 스크롤 이벤트 추가
window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop;

  btt.className = (scrollPos > offset) ? 'visible':'';
});

// 클릭 이벤트 추가
btt.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToTop();
});
function scrollToTop() {
  var scrollInterval = setInterval(function() {
    if(scrollPos !== 0) {
      window.scrollBy(0,-55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}