import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
const lenis = new Lenis();

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
