import NextHead from 'next/head';

const defaultTitle = 'Unicorn Scheduler';
const defaultDescription =
  'Welcome to the Unicorn Scheduler. Home of all the fantastic scheduled events.';
const defaultOGURL = 'https://unicornscheduler.com';
const defaultOGImage = '/static/img/test1.jpg';

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
    <link rel="icon" href="/static/img/test1.png" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <link rel="icon" href={props.ogImage || defaultOGImage} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="/_next/static/style.css" />
  </NextHead>
);

export default Head;
