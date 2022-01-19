
var movingBtn = document.querySelectorAll('.movingBtn');
movingBtn[0].style.backgroundColor = "#FFDAB9";
var listOfPanels = document.querySelectorAll('.achivPanel');

let firstClick = false;
for (let i = 0; i < movingBtn.length; i++) { //initial click, the first panel gets hidden
  firstClick = true;
  movingBtn[i].addEventListener('click', function() {
    listOfPanels[i].removeAttribute("hidden");

    movingBtn[i].style.backgroundColor = '#FFDAB9';
    for (let j = 0; j < movingBtn.length; j++) {
      if (j != i) {
        listOfPanels[j].setAttribute("hidden", "true");
        movingBtn[j].style.backgroundColor = 'transparent';

      } 
    }
  })
}

export function designSVG() {
  const progressLine = document.querySelector('#connect-line')
  
  setTimeout(function() {
    progressLine.setAttribute('fill', "url(#right)")
    
  }, 1000)

}

export function programmerSVG() {
  gsap.registerPlugin(MotionPathPlugin);
  
  MotionPathPlugin.convertToPath('ellipse')
  
  setTimeout(function() {
    gsap.to('#ellipse', {
      motionPath: {
        path: "#path",
        start: 1,
        end: 0,
        align: "#path",
        alignOrigin: [0.5, 0.5],
        fill: "4DAF4C",
      },
      duration: 7,
      ease: "power1.inOut",
      repeat: -1
    })
  
  }, 100)
}














