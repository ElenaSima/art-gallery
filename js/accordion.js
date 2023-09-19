(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// Табы
const obj = {
  tabsClass: "js-tab-btn",
  wrap: "js-tabs-wrap",
  content: "js-tab-content",
  active: "active",
  link: "link"
};

function setTabs(obj) {
  const tabBtns = document.querySelectorAll(`.${obj.tabsClass}`);

  function onTabClick(e) {
    e.preventDefault();
    const path = this.dataset.path;
    const wrap = this.closest(`.${obj.wrap}`);
    const currentContent = wrap.querySelector(`.${obj.content}[data-target="${path}"]`);
    const contents = wrap.querySelectorAll(`.${obj.content}`);

    contents.forEach((el) => {
      el.classList.remove(obj.active);
    });

    currentContent.classList.add(obj.active);

    tabBtns.forEach((el) => {
      el.classList.remove(obj.active);
    });

    this.classList.add(obj.active);
    // this.classList.remove(obj.link);
  }

  tabBtns.forEach(function (el) {
    el.addEventListener("click", onTabClick);
  });
}

setTabs(obj);
