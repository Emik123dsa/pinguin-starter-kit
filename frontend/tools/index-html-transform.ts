import { TargetOptions } from '@angular-builders/custom-webpack';

const linkRegExp: RegExp = /<link rel="stylesheet" href="(styles.+)">/;

function getAsyncLink(href: string): string {
  return `
    <link rel="preload" href="${href}" as="style" media="print" onload="this.onload=null;this.rel='stylesheet';this.media='all'">
    <noscript><link rel="stylesheet" href="${href}"></noscript>
    `;
}

function getHref(indexHtml: string): string | null {
  const matches: RegExpMatchArray | null = indexHtml.match(linkRegExp);
  return matches && matches[1];
}

export default (targetOptions: TargetOptions, indexHtml: string) => {
  const headClosingTagIdx: number = indexHtml.indexOf('</head>');

  const headPart: string = indexHtml.slice(0, headClosingTagIdx);
  const asyncLinkPart: string = getAsyncLink(getHref(indexHtml) as string);
  const bodyPart: string = indexHtml.slice(headClosingTagIdx);

  return `
   ${headPart.replace(linkRegExp, '')}
   ${asyncLinkPart}
   ${bodyPart}
   `;
};
