import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://saadullahmughal.github.io/",
    title: "M. Saadullah Zafar",
    description:
      "Personal website & blog of M. Saadullah Zafar — Software Engineer & MSCS candidate at UET Lahore.",
    author: "M. Saadullah Zafar",
    profile: "https://github.com/saadullahmughal",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Karachi",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: false,
  },
  socials: [
    { name: "github", url: "https://github.com/saadullahmughal" },
    { name: "linkedin", url: "https://www.linkedin.com/in/saadullah-mughal/" },
    { name: "mail", url: "mailto:saadullah.swe@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
