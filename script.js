var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});


function setupImageSlider(container, imageBox, images) {
  let currentIndex = 0;
  let intervalId;

  function changeImage() {
      imageBox.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
  }

  function startImageChange() {
      intervalId = setInterval(changeImage, 1500);
  }

  function stopImageChange() {
      clearInterval(intervalId);
  }

  container.addEventListener('mouseenter', startImageChange);
  container.addEventListener('mouseleave', stopImageChange);
}

const agilityContainer = document.querySelectorAll('.container')[0];
const agilityImageBox = document.querySelector('.agility');
const agilityImages = ['media/agility/img1.jpg', 'media/agility/img2.jpg', 'media/agility/img3.jpg', 'media/agility/img4.jpg', 'media/agility/img5.jpg', 'media/agility/img6.jpg'];

setupImageSlider(agilityContainer, agilityImageBox, agilityImages);

const spoorthiContainer = document.querySelectorAll('.container')[1];
const spoorthiImageBox = document.querySelector('.spoorthi');
const spoorthiImages = ['media/spoorthi/img1.jpg', 'media/spoorthi/img2.jpg', 'media/spoorthi/img3.jpg', 'media/spoorthi/img4.jpg', 'media/spoorthi/img5.jpg'];

setupImageSlider(spoorthiContainer, spoorthiImageBox, spoorthiImages);
