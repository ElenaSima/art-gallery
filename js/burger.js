(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = menu.querySelectorAll(`.${params.linksClass}`)

    function onBtnClick() {
      btn.classList.toggle(params.activeClass);
      if (document.documentElement.clientWidth < 1200) {
        if (
          !menu.classList.contains(params.activeClass) &&
          !menu.classList.contains(params.hiddenClass)
        ) {
          menu.classList.add(params.activeClass);
          document.body.style.overflow = 'hidden';
          btn.setAttribute('aria-expanded', true);
        } else {
          menu.classList.add(params.hiddenClass);
          document.body.removeAttribute('style');
          btn.setAttribute('aria-expanded', false);
          btn.classList.toggle(params.hiddenClass);
        }
      }
      if (document.documentElement.clientWidth > 1200) {
        return;
      }
    }

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        btn.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", window.debounce(onBtnClick, 500));
    links.forEach((link) => {
      link.addEventListener("click", window.debounce(onBtnClick, 500) )
    })
  }

  setBurger({
    btnClass: "js-burger",
    menuClass: "js-menu",
    activeClass: "is-opened",
    hiddenClass: "is-closed",
    linksClass: "js-menu-link"
  });

  // плавный скролл

  const anchors = document.querySelectorAll('.menu__link[data-goto], .hero__button[data-goto]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('data-goto')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    } )
  }
})();
