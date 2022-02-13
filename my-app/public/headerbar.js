
  function animateProgressBar() {
    const progressBar = (document.getElementById('progressBar'))
    const section = document.querySelector('section')
    let scrollDistance = -section.getBoundingClientRect()
    let progressWidth = ((scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight))) * 100
    let value = Math.floor(progressWidth)
    console.log(value);
  
    progressBar.style.width = value + '%'
  }
  

window.addEventListener('scroll', animateProgressBar)


