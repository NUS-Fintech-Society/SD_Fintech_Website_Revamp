/**
 * Past partners, alphabetical, under their current brand names. One list for every page that shows them.
 * Each wordmark is public/images/partners/<slug>.svg, cropped to its ink and centred on its ink mass. `height`
 * is its optical height in px (max 40), so wordmarks of different shapes look the same size side by side.
 */
export type Partner = { slug: string; name: string; height: number };

export const partners: Partner[] = [
  { slug: 'alta', name: 'Alta', height: 40 },
  { slug: 'blockworks', name: 'Blockworks', height: 24.1 },
  { slug: 'bybit', name: 'Bybit', height: 40 },
  { slug: 'caladan', name: 'Caladan', height: 19.3 },
  { slug: 'defiance', name: 'DeFiance Capital', height: 38.3 },
  { slug: 'futu', name: 'Futu', height: 31.5 },
  { slug: 'helicap', name: 'Helicap', height: 30.6 },
  { slug: 'monee', name: 'Monee', height: 29.3 },
  { slug: 'moledao', name: 'Moledao', height: 32 },
  { slug: 'octava', name: 'Octava', height: 39.8 },
  { slug: 'oio', name: 'OIO Holdings', height: 38.1 },
  { slug: 'revolut', name: 'Revolut', height: 29.7 },
  { slug: 'ripple', name: 'Ripple', height: 34.9 },
  { slug: 'spenmo', name: 'Spenmo', height: 26.7 },
  { slug: 'startbahn', name: 'Startbahn', height: 28.8 },
  { slug: 'stashaway', name: 'StashAway', height: 35.1 },
  { slug: 'stellar', name: 'Stellar', height: 37.5 },
];
