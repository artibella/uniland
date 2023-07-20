import { UniformText } from '@uniformdev/canvas-react';
import Link from 'next/link';
import { Fragment } from 'react';

const renderPrimaryCta = (title, link, openInNewTab) => {
  return (
    <div className="rounded-md shadow">
      <Link
        href={link}
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-mango px-8 py-3 text-base font-medium text-aqua-900 hover:bg-mango-200 md:py-4 md:px-10 md:text-lg"
        target={openInNewTab ? '_blank' : '_self'}
      >
        <UniformText parameterId="title" placeholder="Button text" as="span" />
      </Link>
    </div>
  );
};

const renderSecondaryCta = (title, link, openInNewTab) => {
  return (
    <div className="mt-3 sm:mt-0 sm:ml-3">
      <Link
        href={link}
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-ice px-8 py-3 text-base font-medium text-aqua-900 hover:bg-ice-200 md:py-4 md:px-10 md:text-lg"
        target={openInNewTab ? '_blank' : '_self'}
      >
        <UniformText parameterId="title" placeholder="Button text" as="span" />
      </Link>
    </div>
  );
};

export default function CallToAction({
  title = '',
  link = '',
  internalLink = {},
  openInNewTab = false,
  linkPrefix = '',
  component,
}) {
  const variant = component.variant || 'primary';
  const url = internalLink.path?.length ? internalLink.path : linkPrefix + link;

  const linkCta =
    variant === 'primary'
      ? renderPrimaryCta(title, url, openInNewTab)
      : renderSecondaryCta(title, url, openInNewTab);

  return <>{linkCta}</>;
}
