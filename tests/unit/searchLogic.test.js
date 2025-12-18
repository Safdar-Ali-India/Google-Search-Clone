import { describe, expect, it } from 'vitest';
import { buildLuckyUrl, buildSearchUrl, getLanguageCodes } from '../../js/searchLogic.js';

describe('buildSearchUrl', () => {
  it('encodes a normal query', () => {
    expect(buildSearchUrl('safdar search bar')).toBe(
      'https://www.google.com/search?q=safdar%20search%20bar'
    );
  });

  it('returns null for blank input', () => {
    expect(buildSearchUrl('   ')).toBeNull();
    expect(buildSearchUrl('')).toBeNull();
    expect(buildSearchUrl(null)).toBeNull();
  });

  it('trims whitespace before encoding', () => {
    expect(buildSearchUrl('  react hooks  ')).toBe(
      'https://www.google.com/search?q=react%20hooks'
    );
  });
});

describe('buildLuckyUrl', () => {
  it('adds btnI param when query exists', () => {
    expect(buildLuckyUrl('open source')).toBe(
      'https://www.google.com/search?q=open%20source&btnI=1'
    );
  });

  it('falls back to doodles page when query is empty', () => {
    expect(buildLuckyUrl('')).toBe('https://www.google.com/doodles');
    expect(buildLuckyUrl('  ')).toBe('https://www.google.com/doodles');
  });
});

describe('getLanguageCodes', () => {
  it('pulls hl codes from language links', () => {
    const links = [
      { href: 'https://www.google.com/setprefs?hl=hi&source=homepage' },
      { href: 'https://www.google.com/setprefs?hl=bn&source=homepage' },
      { href: 'https://www.google.com/setprefs?hl=te&source=homepage' },
    ];

    expect(getLanguageCodes(links)).toEqual(['hi', 'bn', 'te']);
  });
});
