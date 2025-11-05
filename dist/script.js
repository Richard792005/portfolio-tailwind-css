const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')



hamburger.addEventListener('click', function (event) {
  hamburger.classList.toggle('hamburger-active')
  navMenu.classList.toggle('hidden')

})
// buat agr saat window di klikk nav menu hilang

window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active')
    navMenu.classList.add('hidden')
  }
})



// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop
  const tombolBackToTop = document.getElementById('to-top')
  console.log(fixedNav)

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
    tombolBackToTop.classList.remove('hidden')
    tombolBackToTop.classList.add('flex')
  } else {
    header.classList.remove('navbar-fixed')
    tombolBackToTop.classList.add('hidden')
    tombolBackToTop.classList.remove('flex')
  }
}


// Dark mode

const tombolDark = document.querySelector('#dark-toggle')
const html = document.querySelector('html')
const circle = document.querySelector('#circle')

const darkMode = () => {
    html.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
    tombolDark.checked = true
  }

  const lightMode = () => {
      html.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
      tombolDark.checked = false
}

let tema = localStorage.getItem('theme')
if (!tema) {
  localStorage.setItem('theme', 'light')
}

if (tema === 'dark') {
  darkMode()

} else {
  lightMode()
}

tombolDark.addEventListener('click', function(event) {
  tema = localStorage.getItem('theme')
  if(tema === 'light') {
      darkMode()
  } else if (tema === 'dark') {
    lightMode()
  }
})

