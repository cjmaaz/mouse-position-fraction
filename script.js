let input = {
  mouseX: {
    start: 100,
    end: window.innerWidth - 100,
    current: 0,
  },
  mouseY: {
    start: 100,
    end: window.innerHeight - 100,
    current: 0,
  },
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

const handleMouseMove = (event) => {
  input.mouseX.current = event.clientX;
  input.mouseY.current = event.clientY;
  input.mouseX.fraction =
    (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  input.mouseY.fraction =
    (input.mouseY.current - input.mouseY.start) / input.mouseY.range;
  if (input.mouseX.fraction > 1) {
    input.mouseX.fraction = 1;
  }
  if (input.mouseX.fraction < 0) {
    input.mouseX.fraction = 0;
  }
  if (input.mouseY.fraction > 1) {
    input.mouseY.fraction = 1;
  }
  if (input.mouseY.fraction < 0) {
    input.mouseY.fraction = 0;
  }
  console.log('FractionX: ' + input.mouseX.fraction);
  console.log('FractionY: ' + input.mouseY.fraction);
};

const handleResize = () => {
  input.mouseX.end = window.innerWidth - 100;
  input.mouseY.end = window.innerHeight - 100;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
};

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
