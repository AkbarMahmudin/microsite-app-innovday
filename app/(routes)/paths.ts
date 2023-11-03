export const paths = {
  home: '/',
  event: {
    root: '/event',
    detail: (idOrSlug: string | number) => `/event/${idOrSlug}`,
  },
  innovationDay: '/innovation-day',
  inTalks: '/in-talks',
  speaker: '/speaker',
  faq: '/faq',
  contact: '/contact',
}