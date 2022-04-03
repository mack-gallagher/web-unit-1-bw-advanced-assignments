// most of the work here will be done with logic and a little math
// what's the usual measurement of a progress bar? you'll need to measure the same way here
// use that measurement to update the style of your inner fill element as you scroll


let innerProgressBar = document.querySelector('.inner-scroll-bar');

function updateBarHeight() {
  let currOffset = window.scrollY;
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let currPercentHeight = (currOffset / totalHeight)*100;
  innerProgressBar.style.height = `${currPercentHeight}%`;
}

window.addEventListener('scroll',event => updateBarHeight());
