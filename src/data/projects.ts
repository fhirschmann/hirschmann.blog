export interface Project {
  name: string;
  meta: string;
  href: string;
  desc: string;
  status?: string;
  image?: {
    src: string;
    srcset: string;
    alt: string;
    caption: string;
  };
}

// Maintained (or at least not archived) projects — shown on home and /projects.
export const projects: Project[] = [
  {
    name: 'unraid-passkey',
    meta: 'PHP · 2026',
    href: 'https://github.com/fhirschmann/unraid-passkey',
    desc: "Adds passwordless passkey (WebAuthn) login to the Unraid web GUI — self-contained in Unraid's own nginx/PHP stack, with no cloud service, Docker container, or OIDC provider involved.",
    image: {
      src: '/projects/unraid-passkey-480.webp',
      srcset: '/projects/unraid-passkey-480.webp 480w, /projects/unraid-passkey-960.webp 960w',
      alt: 'Unraid login page with username and password fields and the Login with passkey button.',
      caption: 'login.webp',
    },
  },
  {
    name: 'leoino',
    meta: 'C++ · 2026',
    href: 'https://github.com/fhirschmann/leoino',
    desc: 'An ESP32 music player with RFID cartridges, tactile playback buttons and a custom 3D-printed enclosure — complete with an OLED display and a cyberpunk web interface.',
    image: {
      src: '/projects/leoino-480.webp',
      srcset: '/projects/leoino-480.webp 480w, /projects/leoino-960.webp 960w',
      alt: 'Studio render of the LEO INDUSTRIES AT-1 audio player with a copper speaker grille, white front, turquoise details and six playback keys.',
      caption: 'render.webp',
    },
  },
  {
    name: 'leo-ac1',
    meta: 'OpenSCAD · 2026',
    href: 'https://fhirschmann.github.io/leo-ac1/',
    desc: 'A battery-powered desk fan disguised as a miniature air conditioner — a custom 3D-printed enclosure, a quiet 140 mm fan, variable speed and USB-C charging. Explore the build in the interactive 3D viewer.',
    image: {
      src: '/projects/leo-ac1-480.webp',
      srcset: '/projects/leo-ac1-480.webp 480w, /projects/leo-ac1-960.webp 960w',
      alt: 'Studio render of the white LEO INDUSTRIES AC-1 miniature air-conditioner-style fan with a grey circular grille and folding handle.',
      caption: 'render.webp',
    },
  },
];

// No longer maintained — listed in their own section on /projects.
export const archived: Project[] = [
  {
    name: 'knitron',
    meta: 'R · 2014–2016',
    href: 'https://github.com/fhirschmann/knitron',
    desc: "Lets knitr reports run Python: it executes IPython code chunks and embeds the resulting matplotlib figures right inside R's dynamic-report workflow.",
  },
  {
    name: 'rdp',
    meta: 'Python · 2014–2016',
    href: 'https://github.com/fhirschmann/rdp',
    desc: 'An implementation of the Ramer–Douglas–Peucker algorithm — simplifies a curve by dropping points that barely change its shape, handy for thinning GPS tracks and polylines.',
  },
  {
    name: 'Flask-FlatPages-Knitr',
    meta: 'Python · 2014–2015',
    href: 'https://github.com/fhirschmann/Flask-FlatPages-Knitr',
    desc: 'A Flask-FlatPages preprocessor that runs each page through knitr first, so embedded code chunks are executed and their output baked in before rendering.',
  },
  {
    name: 'Flask-FlatPages-Pandoc',
    meta: 'Python · 2014–2015',
    href: 'https://github.com/fhirschmann/Flask-FlatPages-Pandoc',
    desc: 'An HTML renderer for Flask-FlatPages backed by pandoc, letting flat pages be authored in Markdown, reStructuredText, or anything else pandoc can read.',
  },
  {
    name: 'clozegen',
    meta: 'Java · 2012–2014',
    href: 'https://github.com/fhirschmann/clozegen',
    desc: 'Generates cloze (fill-in-the-blank) exercises for language learners, using Apache UIMA to analyze real text and decide which words to blank out.',
  },
  {
    name: 'sleeptimer',
    meta: 'C · 2013',
    href: 'https://github.com/fhirschmann/sleeptimer',
    desc: 'A countdown shutdown timer with an on-screen display, armed from a single infrared-remote or keyboard key — LIRC-aware, so you can trigger it from the couch.',
  },
  {
    name: 'vohttp',
    meta: 'Lua · 2013',
    href: 'https://github.com/fhirschmann/vohttp',
    desc: "An HTTP library and mini web framework for the game Vendetta Online, serving dynamic web pages over the game's in-client TCP sockets.",
  },
  {
    name: 'penchy',
    meta: 'Python · 2011–2012',
    href: 'https://github.com/fhirschmann/penchy',
    desc: 'Automates benchmarking of Java virtual machines — coordinates the runs and funnels their results through a configurable processing pipeline.',
  },
];
