import classNames from 'classnames';
import Image from 'next/image';

export default function ImageBlock({
  imageUrl = '',
  altText = '',
  caption = '',
  borderRadius = '',
  imageFit = '',
  aspectRatio = '',
  imagePosition = '',
}) {
  const imageClasses = classNames(
    'image block w-full h-auto',
    // border radius sizes
    { 'rounded-sm': borderRadius === 'sm' },
    { rounded: borderRadius === 'default' },
    { 'rounded-md': borderRadius === 'md' },
    { 'rounded-lg': borderRadius === 'lg' },
    { 'rounded-xl': borderRadius === 'xl' },
    { 'rounded-2xl': borderRadius === '2xl' },
    { 'rounded-3xl': borderRadius === '3xl' },
    { 'rounded-full max-w-full h-auto align-middle': borderRadius === 'full' },
    { 'rounded-none': borderRadius === 'none' },
    // image object fit
    { 'object-cover': imageFit === 'cover' },
    { 'object-contain': imageFit === 'contain' },
    { 'object-fill': imageFit === 'fill' },
    { 'object-scale-down': imageFit === 'scale-down' },
    { 'object-none': imageFit === 'none' },
    // image object position
    { 'object-bottom': imagePosition === 'bottom' },
    { 'object-center': imagePosition === 'center' },
    { 'object-left': imagePosition === 'left' },
    { 'object-left-bottom': imagePosition === 'left-bottom' },
    { 'object-left-top': imagePosition === 'left-top' },
    { 'object-right': imagePosition === 'right' },
    { 'object-right-bottom': imagePosition === 'right-bottom' },
    { 'object-right-top': imagePosition === 'right-top' },
    { 'object-top': imagePosition === 'top' },
    // aspect ratio
    { 'aspect-auto': aspectRatio === 'auto' },
    { 'aspect-square': aspectRatio === 'square' },
    { 'aspect-video': aspectRatio === 'video' }
  );

  return (
    <article className="image-block block">
      <div className="">
        {imageUrl ? (
          <figure>
            <img
              src={imageUrl}
              alt={altText || caption}
              className={imageClasses}
            />
            {caption && (
              <figcaption className="text-sm text-slate-700 mt-4 ml-4">
                {caption}
              </figcaption>
            )}
          </figure>
        ) : (
          ''
        )}
      </div>
    </article>
  );
}
