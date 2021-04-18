// search categories
function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  ready(() => {
    document.querySelector('.default-option').addEventListener('click', event => {
        var element = document.getElementById("categ");
        element.classList.toggle("active");
    });
  });