export const paths = {
  home: '/',
  events: {
    root: '/events',
    detail: (idOrSlug: string | number) => `/events/${idOrSlug}`,
  },
  innovationDay: '/innovation-day',
  inTalks: '/in-talks',
  speaker: '/speaker',
  faq: '/faq',
  contact: '/contact',
}
