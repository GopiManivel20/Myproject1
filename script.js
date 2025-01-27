let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      const slider = document.getElementById('slider');
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }