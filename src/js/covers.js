document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('#covers');
  const marqueeLines = document.querySelectorAll('.marquee__line');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom > 0 && // top of section's rectangle is over the viewport
      rect.top < (window.innerHeight || document.documentElement.clientHeight) //  bottom of section's rectangle is under the viewport
    );
  }

  function startAnimation() {
    if (isInViewport(coversSection)) {
      marqueeLines.forEach(line => {
        line.style.animationPlayState = 'running';
      });
      console.log('running');
    } else {
      marqueeLines.forEach(line => {
        line.style.animationPlayState = 'paused';
      });
      console.log('paused');
    }
  }

  // initialize animation in paused state
  marqueeLines.forEach(line => {
    line.style.animationPlayState = 'paused';
  });
  console.log('paused');

  // Listen for scroll and resize events
  window.addEventListener('scroll', startAnimation);
  window.addEventListener('resize', startAnimation);
});
