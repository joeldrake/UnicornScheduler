import NextHead from 'next/head';

const defaultTitle = 'Unicorn Scheduler';
const defaultDescription =
  'Welcome to the Unicorn Scheduler. Home of all the fantastic scheduled events.';
const defaultOGURL = 'https://unicornscheduler.com';
const defaultOGImage = '/static/img/test1.jpg';
const defaultIcon = '/static/img/logo.png';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <link rel="manifest" href="/static/manifest.json" />
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <link rel="icon" href={props.icon || defaultIcon} />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

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

    {/*
    <script src="https://ucarecdn.com/libs/widget/3.6.1/uploadcare.full.min.js" />
    <script src="https://ucarecdn.com/libs/widget-tab-effects/1.x/uploadcare.tab-effects.js" />

    <script
      dangerouslySetInnerHTML={{
        __html: `
    uploadcare.registerTab('preview', uploadcareTabEffects)
`,
      }}
      
    />
    */}

    {/* todo: get this polyfill in the normal next.js build, or remove it, or maybe just remove it*/}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js" />
  </NextHead>
);

export default Head;
