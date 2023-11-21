import classNames from 'classnames';
import Image from 'next/image';

const renderImages = function (images, variant) {
  const figureClasses = classNames(
    'image-gallery__figure',
    // layout specific style
    {
      'break-inside-avoid mb-8': variant === 'masonry',
    }
  );
  const imageClasses = 'h-auto max-w-full rounded-lg';

  return images.map((image) => {
    // get values from asset
    const id = image.fields?.id?.value || '';
    const url = image.fields?.url?.value || '';
    const title = image.fields?.title?.value || '';
    const description = image.fields?.description?.value || '';

    return (
      <figure className={figureClasses} key={id}>
        <img
          src={url}
          alt={description || title}
          className={imageClasses}
          // width={width}
          // height={height}
        />
        {(description || title) && (
          <figcaption className="text-sm text-slate-700 mt-4 ml-4">
            {description || title}
          </figcaption>
        )}
      </figure>
    );
  });
};

export default function ImageGallery({ title = '', images = [], component }) {
  const variant = component.variant || 'list';

  const layoutClasses = classNames(
    'image-gallery-block--layout',
    // layout style
    { 'grid grid-cols-1 gap-8': variant === 'list' },
    {
      'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8':
        variant === 'grid',
    },
    {
      'columns-1 gap-4 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4':
        variant === 'masonry',
    }
  );

  return (
    <div className="image-gallery-block block">
      <div className={layoutClasses}>
        {images?.length && renderImages(images, variant)}
      </div>
    </div>
  );
}
