import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://coimbatoreservices.online/' });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap).then(data => {
  writeStream.end(data);
});

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.end();
