

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",
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


(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();



// const checkpoints = gsap.utils.toArray(".checkpoint");

// checkpoints.forEach(checkpoint => {
//     gsap.from(checkpoint.firstElementChild, {
//         height: 0,
//         scrollTrigger: {
//             trigger: checkpoint,
//             start: "top+=100 center",
//             end: "top+=300 center",
//             scrub: true,
//         }
//     });
// });

// const checkpointTexts = gsap.utils.toArray(".text");

// checkpointTexts.forEach(text => {
//     gsap.from(text, {
//         opacity: 0,
//         x: 100,
//         ease: "power2.inOut",
//         scrollTrigger: {
//             trigger: text.parentElement,
//             start: "top+=50 center",
//             end: "bottom+=340 center",
//             toggleActions: "restart none none reverse",
//         }
//     })
// })




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

const marathonContainer = document.querySelectorAll('.container')[0];
const marathonImageBox = document.querySelector('.marathon');
const marathonImages = ['media/marathon/img1.jpg', 'media/marathon/img2.jpg', 'media/marathon/img3.jpg', 'media/marathon/img4.jpg', 'media/marathon/img5.jpg', 'media/marathon/img6.jpg'];

setupImageSlider(marathonContainer, marathonImageBox, marathonImages);

const achievementsContainer = document.querySelectorAll('.container')[0];
const achievementsImageBox = document.querySelector('.achievements');
const achievementsImages = ['media/achievements/img1.jpg', 'media/achievements/img2.jpg', 'media/achievements/img3.jpg', 'media/achievements/img4.jpg', 'media/achievements/img5.jpg'];

setupImageSlider(achievementsContainer, achievementsImageBox, achievementsImages);



gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});