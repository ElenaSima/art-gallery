(() => {
  const select = document.querySelector('.js-custom-select');
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'gallery-select',
      containerInner: 'gallery-select__inner',
      input: 'gallery-select__input',
      inputCloned: 'gallery-select__input--cloned',
      list: 'gallery-select__list',
      listItems: 'gallery-select__list--multiple',
      listSingle: 'gallery-select__list--single',
      listDropdown: 'gallery-select__list--dropdown',
      item: 'gallery-select__item',
      itemSelectable: 'gallery-select__item--selectable',
      itemDisabled: 'gallery-select__item--disabled',
      itemChoice: 'gallery-select__item--choice',
      placeholder: 'gallery-select__placeholder',
      group: 'gallery-select__group',
      groupHeading: 'gallery-select__heading',
      button: 'gallery-select__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-gallery-select'
    },
  });
})();
