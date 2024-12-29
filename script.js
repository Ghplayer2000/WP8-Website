var theme = localStorage.getItem('theme'); 

var body = document.querySelector('body');
var allHeadings = document.querySelectorAll('h1, h2, h5');
var allLinks = document.querySelectorAll('a');

if (theme === 'light') {
  body.classList.add('light-theme');
  allHeadings.forEach(heading => heading.classList.add('light-theme'));
  allLinks.forEach(link => link.classList.add('light-theme'));
}

function Lighttheme() {
  if (theme === 'dark') {
    body.classList.add('light-theme');
    allHeadings.forEach(heading => heading.classList.add('light-theme'));
    allLinks.forEach(link => link.classList.add('light-theme'));
    theme = 'light';
  } else {
    body.classList.remove('light-theme');
    allHeadings.forEach(heading => heading.classList.remove('light-theme'));
    allLinks.forEach(link => link.classList.remove('light-theme'));
    theme = 'dark';
  }
  localStorage.setItem('theme', theme); 
}
