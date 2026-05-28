import { buildLuckyUrl, buildSearchUrl, trimQuery } from './searchLogic.js';

function bindKeyboardShortcuts(input, handlers) {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') handlers.onEnter();
    if (event.key === 'Escape') handlers.onEscape();
  });
}

function bindSearchButtons(searchBtn, luckyBtn, handlers) {
  searchBtn?.addEventListener('click', handlers.onSearch);
  luckyBtn?.addEventListener('click', handlers.onLucky);
}

function initSearch() {
  const input = document.querySelector('.safdar-input');
  const searchBtn = document.querySelector('.search-actions__btn--primary');
  const luckyBtn = document.querySelector('.search-actions__btn--secondary');

  if (!input) return;

  input.focus();

  const doSearch = () => {
    const url = buildSearchUrl(input.value);
    if (url) window.location.assign(url);
  };

  const doLucky = () => {
    window.location.assign(buildLuckyUrl(input.value));
  };

  const syncButtonState = () => {
    const hasQuery = trimQuery(input.value).length > 0;
    searchBtn?.classList.toggle('search-actions__btn--disabled', !hasQuery);
    luckyBtn?.classList.toggle('search-actions__btn--disabled', !hasQuery);
  };

  input.addEventListener('input', syncButtonState);
  syncButtonState();

  bindKeyboardShortcuts(input, {
    onEnter: doSearch,
    onEscape: () => {
      input.value = '';
      input.blur();
      syncButtonState();
    },
  });

  bindSearchButtons(searchBtn, luckyBtn, {
    onSearch: doSearch,
    onLucky: doLucky,
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
