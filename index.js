// Run after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1) Put your image paths here
  const images = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg'
  ];

  // 2) Get needed elements
  const slider = document.getElementById('slider');
  const track = slider.querySelector('.slides-track');
  const dotsWrap = slider.querySelector('.dots');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  // 3) Build slides from array + seamless clones (last at start, first at end)
  const makeSlide = (src) => {
    const s = document.createElement('div');
    s.className = 'slide';
    s.innerHTML = `<img src="${src}" alt="">`;
    return s;
  };

  // Clone of last (at start)
  track.appendChild(makeSlide(images[images.length - 1]));
  // Real slides
  images.forEach(src => track.appendChild(makeSlide(src)));
  // Clone of first (at end)
  track.appendChild(makeSlide(images[0]));

  // 4) Make dots (for real slides only)
  images.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i + 1)); // +1 because of leading clone
    dotsWrap.appendChild(d);
  });
  const dots = [...dotsWrap.querySelectorAll('.dot')];

  const N = images.length;   // real slides count
  let index = 1;             // start at first real slide (after leading clone)
  let autoTimer = null;

  // Position track on first real slide
  track.style.transform = `translateX(-${index * 100}%)`;

  // 5) Helpers (kept minimal & clear)
  const setActiveDot = () => {
    const real = (index - 1 + N) % N; // map track index -> dot index
    dots.forEach(d => d.classList.remove('active'));
    dots[real].classList.add('active');
  };

  const moveTo = (newIndex, withTransition = true) => {
    track.style.transition = withTransition ? 'transform 0.6s ease' : 'none';
    index = newIndex;
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  const next = () => moveTo(index + 1); // slide right->left
  const prev = () => moveTo(index - 1); // slide left->right

  // 6) Seamless looping after transition (handle clones)
  track.addEventListener('transitionend', () => {
    if (index === N + 1) {         // moved onto cloned first
      moveTo(1, false);            // jump to real first (no animation)
    } else if (index === 0) {      // moved onto cloned last
      moveTo(N, false);            // jump to real last (no animation)
    }
    setActiveDot();
  });

  // 7) Buttons (direction respected)
  nextBtn.addEventListener('click', () => { next(); restartAuto(); });
  prevBtn.addEventListener('click', () => { prev(); restartAuto(); });

  // 8) Auto slide (always right->left)
  const startAuto = () => { autoTimer = setInterval(next, 3000); };
  const stopAuto  = () => { clearInterval(autoTimer); };
  const restartAuto = () => { stopAuto(); startAuto(); };

  startAuto();
  setActiveDot();
});
