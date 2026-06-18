import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { beforeEach, describe, expect, it } from 'vitest';

const html = readFileSync(resolve('index.html'), 'utf8');

describe('index.html structure', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it('has the search input with the right placeholder', () => {
    const input = document.querySelector('.safdar-input');
    expect(input).not.toBeNull();
    expect(input.getAttribute('placeholder')).toBe('Search Safdar or type a URL ');
    expect(input.getAttribute('aria-label')).toBe('Search');
  });

  it('renders both search action buttons', () => {
    const buttons = document.querySelectorAll('.search-actions__btn');
    expect(buttons).toHaveLength(2);
    expect(buttons[0].textContent).toBe('Google Search');
    expect(buttons[1].textContent).toBe("I'm Feeling Lucky");
  });

  it('loads the main logo and icon assets', () => {
    const logo = document.querySelector('.safdarLogo img');
    const searchIcon = document.querySelector('.search-icon');
    expect(logo?.getAttribute('src')).toBe('assets/safdar-logo-color.svg');
    expect(searchIcon?.getAttribute('src')).toBe('assets/safdar-search-icon.svg');
  });

  it('keeps nine language preference links', () => {
    const links = document.querySelectorAll('.safdar-offers a');
    expect(links.length).toBe(9);
    links.forEach((link) => {
      expect(link.getAttribute('href')).toContain('google.com/setprefs');
    });
  });

  it('exposes footer links in two groups', () => {
    const advertising = document.querySelectorAll('.footer__advertising a');
    const privacy = document.querySelectorAll('.footer__privacy a');
    expect(advertising).toHaveLength(3);
    expect(privacy).toHaveLength(3);
  });
});
