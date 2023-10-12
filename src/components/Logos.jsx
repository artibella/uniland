import classNames from 'classnames';
import Heading from './Heading';
import { UniformSlot } from '@uniformdev/canvas-react';

const renderLogos = function (logos, variant) {
  const figureClasses = classNames(
    'logos__figure flex justify-center items-center'
  );
  const imageClasses = '';

  return logos.map(logo => {
    const name = logo.fields?.name?.value;
    const assets = logo.fields?.logo?.value;
    const asset = assets && assets.length ? assets[0] : undefined;

    if (!asset) {
      return null;
    }

    return (
      <figure className={figureClasses} key={asset.id}>
        <img src={asset.url} alt={name} className={imageClasses} />
      </figure>
    );
  });
};

export default function Logos({
  title = '',
  logos = [],
  logosPerRow = 4,
  component,
}) {
  const variant = component.variant || 'default';
  const layoutClasses = classNames([
    'logos--layout',
    'grid gap-8 text-gray-500 sm:gap-12 items-center',
    `grid-cols-2 md:grid-cols-3 lg:grid-cols-${logosPerRow}`,
  ]);

  return (
    <div className="logos py-8 lg:py-16 px-4">
      <Heading title={title} tagName="h3" align="center" className="mb-16" />
      <div className={layoutClasses}>
        {logos?.length && renderLogos(logos, variant)}
      </div>
      <div className="logos-actions sm:inline-flex items-center justify-center gap-4 mt-8 lg:mt-12 text-center">
        <UniformSlot name="ctas" />
      </div>
    </div>
  );
}
