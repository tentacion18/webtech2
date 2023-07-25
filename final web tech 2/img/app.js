const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 274;
let gojo = {frame : 0};

const currentFrame = (index) => `./gojo/${(index + 1).toString()}.png`;
const images = [];

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}


gsap.to(gojo, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger:{
        scrub: 0.15,
        trigger: '#page>.canvas',
        start: 'top top',
        pin: "canvas",
        end : "200% top",  
       
           
    },
    onUpdate: render,
})

images [0].onload = render;

function render() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = 200;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[gojo.frame], 0, 0);
    
  }
  