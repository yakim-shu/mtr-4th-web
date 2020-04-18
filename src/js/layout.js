function scrollToHash(e) {
  e.preventDefault();
  const url = location.hash.substr(1);
  const target = document.querySelector(`.${url}`).offsetTop - 60;
  window.scrollTo({
    top: target,
    left: 0,
    behavior: 'smooth' // => 滑動效果
  });
}

['hashchange', 'DOMContentLoaded'].forEach(function (item) {
  window.addEventListener(item, scrollToHash);
});