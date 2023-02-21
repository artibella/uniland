import classNames from 'classnames';
import Image from "next/legacy/image";

export default function ImageBlock({
  imageUrl = '',
  altText = '',
  caption = '',
  imageWidth = '',
  borderRadius = '',
  imageFit = '',
  aspectRatio = '',
  imagePosition = '',
  backgroundStyle = '',
}) {
  const imageClasses = classNames(
    'image block w-full h-auto',
    // image width
    { 'w-4': imageWidth === 'icon-sm' },
    { 'w-6': imageWidth === 'icon' },
    { 'w-12': imageWidth === 'icon-lg' },
    { 'w-16': imageWidth === 'icon-xl' },
    { 'w-1/2': imageWidth === 'width-half' },
    { 'w-full': imageWidth === 'width-full' },
    { 'w-1/3': imageWidth === 'width-one-third' },
    { 'w-2/3': imageWidth === 'width-two-third' },
    { 'w-1/4': imageWidth === 'width-one-quarter' },
    { 'w-3/4': imageWidth === 'width-three-quarter' },
    // border radius sizes
    { 'rounded-sm': borderRadius === 'sm' },
    { rounded: borderRadius === 'default' },
    { 'rounded-md': borderRadius === 'md' },
    { 'rounded-lg': borderRadius === 'lg' },
    { 'rounded-xl': borderRadius === 'xl' },
    { 'rounded-2xl': borderRadius === '2xl' },
    { 'rounded-3xl': borderRadius === '3xl' },
    { 'rounded-full': borderRadius === 'full' },
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

  const figureClasses = classNames(
    'image-block-figure',
    // background style
    { 'bg-white': backgroundStyle === 'white' },
    { 'bg-aqua-900': backgroundStyle === 'dark' },
    { 'bg-green-50': backgroundStyle === 'spring' },
    { 'bg-mango-400': backgroundStyle === 'mango' },
    { 'bg-ice-50': backgroundStyle === 'ice' }
  );

  return (
    <div className="image-block block">
      {imageUrl && (
        <figure className={figureClasses}>
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
      )}
    </div>
  );
}
