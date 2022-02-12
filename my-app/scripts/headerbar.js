
export function animateProgressBar() {
  const progressBar = document.querySelector('#progressBar')
  const section = document.querySelector('section')
  let scrollDistance = -section.getBoundingClientRect()
  let progressWidth = ((scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight))) * 100
  let value = Math.floor(progressWidth)

  progressBar.value.width = value + '%'
}

