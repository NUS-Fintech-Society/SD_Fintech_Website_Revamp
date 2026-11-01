export const SITE_URL = 'https://fintechsociety.comp.nus.edu.sg';
export const CONTACT_EMAIL = 'nusfintech.ops@gmail.com';
export const TELEGRAM_URL = 'https://t.me/nusfintechpublic';
export const SUMMIT_URL = 'https://nusfintechsummit.com/';
// Known limit: pages not built yet. Their links skip prefetching, because prefetching a missing page never
// finishes and stalls page-load checks. Remove each route here once its page exists.
const UNBUILT = ['/about', '/partners', '/join'];
export const prefetchFor = (href: string) => (UNBUILT.includes(href.split('#')[0]) ? false : undefined);

export const BLURB ='The NUS student-led society for fintech: workshops, talks, industry partnerships and projects.';
