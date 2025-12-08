  const navBtns = document.querySelectorAll('.nav-btn');

  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      // 1) Only set active on click (remove from others)
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 2) Smooth scroll to section
      // Using block: 'start' so section aligns at top (adjust if you want offset)
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // DON'T change URL hash or push state so scrolling won't affect it later
      // (commented out intentionally)
      // history.pushState(null, '', '#' + targetId);
    });
  });

  // Prevent accidental hash changes from other code:
  // If any links with hashes exist elsewhere, this will stop default jump behavior for them.
  document.addEventListener('click', function(e){
    const el = e.target;
    if (el.tagName === 'A' && el.getAttribute('href') && el.getAttribute('href').startsWith('#')) {
      e.preventDefault();
    }
  }, true);

  // If user reloads with hash in URL (unlikely now), avoid auto-activating by scroll:
  // We will *not* auto-scroll or auto-active on load — so do nothing here.

    //  var swiper = new Swiper(".mySwiper", {
    //   cssMode: true,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    //   mousewheel: true,
    //   keyboard: true,
    // });

    
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,   // ⭐ 3 slides ek saath show honge
    spaceBetween: 0,   // ⭐ slides ke beech gap (optional)

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
