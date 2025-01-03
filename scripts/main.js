var theme = localStorage.getItem('theme'); 

var body = document.querySelector('body');
var allHeadings = document.querySelectorAll('h1, h2, h5');
var allLinks = document.querySelectorAll('a');
var iframe = document.getElementById('statusbar');
var button = document.querySelectorAll('button');
var appbar = document.querySelector('.appbar');
var img = document.querySelectorAll('img');
var appbarbutton = document.querySelectorAll('appbarbutton');

if (theme === 'light') {
  body.classList.add('light-theme');
  allHeadings.forEach(heading => heading.classList.add('light-theme'));
  allLinks.forEach(link => link.classList.add('light-theme'));
  button.forEach(button => button.classList.add('light-theme-button'));
  iframe.style = "filter: invert(.6)";
  appbar.classList.add('light-theme-appbar');
  appbarbutton.forEach(button => appbarbutton.classList.add('light-theme-appbarbutton'));
  img.forEach(img => img.classList.add('light-theme-img'));
}

if (theme === 'dark') {
  img.forEach(img => img.classList.add('dark-theme-img'));
}

function Lighttheme() {
  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme); 
  location.reload();
}
