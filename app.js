document.addEventListener('DOMContentLoaded', () => {
    const SLIDES_NUM = 5;
  
    const SLIDE_INDICATOR_CN = 'slide-indicator';
    const SLIDE_INDICATOR_ACTIVE_CN = 'slide-indicator_active';
    const STEP_CN = 'step';
    const SLIDE_CN = 'slide';
    const SLIDE_ACTIVE_CN = 'slide_active';
    const SLIDE_HELPER_CN = 'slide-helper';

    const calculation = document.querySelector('section.calculation');
    let currentSlide = 1;
    handleNextButton();
  
    function handleNextButton() {
      const button2 = calculation.querySelector('footer .test-button2');
      const button1 = calculation.querySelector('footer .test-button1');

      const nextLabel = button2.innerText;
      const resetLabel = button2.dataset.resetText;
  
      button2.addEventListener('click', () => {
        if (currentSlide === SLIDES_NUM) {
          currentSlide = 1;
          button2.innerText = nextLabel;
          button1.innerText = nextLabel;
        } else {
          currentSlide++;
        }
  
        if (currentSlide === SLIDES_NUM) {
          button2.innerText = resetLabel;
          button1.innerText = resetLabel;
        }

        console.log(currentSlide)
        updateView();
      });
    }
  
    function updateView() {
      switchSlides();
      updateIndicators();
      updateHelperText();
    }
  
    function getCurrentSlideEl() {
      return calculation.querySelector(`.${SLIDE_CN}:nth-child(${currentSlide})`);
    }
  
    function switchSlides() {
      calculation.querySelector(`.${SLIDE_ACTIVE_CN}`)
        .classList.remove(SLIDE_ACTIVE_CN);
  
      getCurrentSlideEl().classList.add(SLIDE_ACTIVE_CN);
    }
  
    function updateIndicators() {
      if (currentSlide === 1) {
        calculation.querySelectorAll(`.${SLIDE_INDICATOR_ACTIVE_CN}`)
          .forEach(el => {
            el.classList.remove(SLIDE_INDICATOR_ACTIVE_CN);
          });
      }
  
      calculation.querySelector(`.${SLIDE_INDICATOR_CN}:nth-child(${currentSlide})`)
        .classList.add(SLIDE_INDICATOR_ACTIVE_CN);
  
      calculation.querySelector(`.${STEP_CN}`).innerText = currentSlide;
    }
  
    function updateHelperText() {
      calculation.querySelector(`.${SLIDE_HELPER_CN}`)
        .innerText = getCurrentSlideEl().dataset.helperText;
    }
  });
  