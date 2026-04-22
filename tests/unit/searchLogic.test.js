import { describe, expect, it } from 'vitest';
import { buildLuckyUrl, buildSearchUrl, getLanguageCodes, trimQuery } from '../../js/searchLogic.js';

describe('trimQuery', () => {
  it('strips leading and trailing whitespace', () => {
    expect(trimQuery('  hello  ')).toBe('hello');
  });

  it('handles null and undefined', () => {
    expect(trimQuery(null)).toBe('');
    expect(trimQuery(undefined)).toBe('');
  });
});

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

  it('encodes symbols in the query string', () => {
    expect(buildSearchUrl('c++ & rust')).toBe(
      'https://www.google.com/search?q=c%2B%2B%20%26%20rust'
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
