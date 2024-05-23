// ------------------- gsap.from() -----------------------
// In from method you don't have to specify the inital State, (it will figure out by itself)
// ------------------- gsap.fromTo() -----------------------
// In fromTo method you HAVE to specify the default value, and also the new animation state (from where your animation should start and where should it end)

gsap.from(".box1", {
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
});

gsap.fromTo(
  ".box2",
  { y: 200, opacity: 0 },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 5,
    repeat: -1,
    yoyo: true,
  }
);
