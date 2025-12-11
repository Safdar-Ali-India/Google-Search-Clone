import { buildLuckyUrl, buildSearchUrl } from './searchLogic.js';

function initSearch() {
  const input = document.querySelector('.safdar-input');
  const searchBtn = document.querySelector('.search-actions__btn--primary');
  const luckyBtn = document.querySelector('.search-actions__btn--secondary');

  if (!input) return;

  const doSearch = () => {
    const url = buildSearchUrl(input.value);
    if (url) window.location.assign(url);
  };

  const doLucky = () => {
    window.location.assign(buildLuckyUrl(input.value));
  };

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') doSearch();
  });

  searchBtn?.addEventListener('click', doSearch);
  luckyBtn?.addEventListener('click', doLucky);
}

document.addEventListener('DOMContentLoaded', initSearch);
