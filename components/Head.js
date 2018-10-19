import NextHead from 'next/head';

const defaultTitle = 'Unicorn Scheduler';
const defaultDescription =
  'Welcome to the Unicorn Scheduler. Home of all the fantastic scheduled events.';
const defaultOGURL = 'https://unicornscheduler1.firebaseapp.com/';
const defaultOGImage = '/static/img/ogImage.png';
const defaultIcon = '/static/img/android-chrome-512x512.png';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" key="charSet" />
    <title key="title">{props.title || defaultTitle}</title>
    <link rel="manifest" href="/static/manifest.json" key="manifest" />
    <meta
      name="description"
      content={props.description || defaultDescription}
      key="description"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
      key="viewport"
    />
    <link rel="icon" href={props.icon || defaultIcon} key="icon" />
    <meta property="og:url" content={props.url || defaultOGURL} key="ogUrl" />
    <meta
      property="og:title"
      content={props.title || defaultTitle}
      key="ogTitle"
    />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
      key="ogDescription"
    />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black"
      key="statusbar"
    />
    <link
      rel="apple-touch-icon"
      href={props.icon || defaultIcon}
      key="appletouchicon"
    />
    <link
      rel="apple-touch-startup-image"
      href={props.icon || defaultIcon}
      key="appletouchstartupimage"
    />
    <meta
      name="apple-mobile-web-app-capable"
      content="yes"
      key="applemobilewebappcapable"
    />

    <meta
      name="twitter:site"
      content={props.url || defaultOGURL}
      key="twittersite"
    />
    <meta name="twitter:card" content="summary_large_image" key="twittercard" />
    <meta
      name="twitter:image"
      content={props.icon || defaultIcon}
      key="twitterimage"
    />
    <meta
      property="og:image"
      content={props.ogImage || defaultOGImage}
      key="ogImage"
    />
    <meta property="og:image:width" content="1200" key="ogImageWidth" />
    <meta property="og:image:height" content="630" key="ogImageHeight" />

    <script
      dangerouslySetInnerHTML={{
        __html: `
          UPLOADCARE_PUBLIC_KEY = '3c62cd2cc88c1ce1c4ea';
          UPLOADCARE_TABS = 'file camera facebook dropbox'; 
          UPLOADCARE_EFFECTS = 'crop'; 
          UPLOADCARE_IMAGES_ONLY = true; 
          UPLOADCARE_PREVIEW_STEP = true;
    `,
      }}
    />

    {/* todo: get this polyfill in the normal next.js build, or maybe just remove it*/}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js" />
  </NextHead>
);

export default Head;
