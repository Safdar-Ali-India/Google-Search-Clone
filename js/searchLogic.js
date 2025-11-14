export function trimQuery(query) {
  return (query ?? '').trim();
}

export function buildSearchUrl(query) {
  const trimmed = trimQuery(query);
  if (!trimmed) return null;
  return `https://www.google.com/search?q=${encodeURIComponent(trimmed)}`;
}

export function buildLuckyUrl(query) {
  const trimmed = trimQuery(query);
  if (!trimmed) {
    return 'https://www.google.com/doodles';
  }
  return `https://www.google.com/search?q=${encodeURIComponent(trimmed)}&btnI=1`;
}

export function getLanguageCodes(links) {
  return links
    .map((link) => {
      const match = link.href.match(/[?&]hl=([^&]+)/);
      return match ? match[1] : null;
    })
    .filter(Boolean);
}
