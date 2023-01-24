import classNames from 'classnames';
import slugify from 'slugify';

const getContentClasses = (horizontalAlignment, verticalAlignment) => {
  const hAlign = horizontalAlignment.length > 0 ? horizontalAlignment : 'start';
  const vAlign = verticalAlignment.length > 0 ? verticalAlignment : 'start';

  return classNames(
    'flex',
    // horizontal align
    { [`justify-${hAlign}`]: true },
    // vertical align
    { [`items-${vAlign}`]: true }
  );
};

const getBackgroundImageStyle = (backgroundType, backgroundImage) => {
  return backgroundType !== 'image'
    ? {}
    : {
        backgroundImage: `url(${backgroundImage})`,
      };
};

export default function Brick({
  title = '',
  horizontalAlignment = 'start',
  verticalAlignment = 'start',
  borderRadius = 'default',
  backgroundType = 'fill',
  backgroundImage = '',
  backgroundImageFit = 'cover',
  backgroundPosition = 'center',
  aspectRatio = 'auto',
  paddingSize = 'default',
  marginSize = 'default',
  theme = 'white',
  children,
}) {
  const id = slugify(title);

  const brickClasses = classNames(
    'brick w-full',
    { 'bg-aqua-900': theme === 'dark' },
    { 'bg-green-50': theme === 'spring' },
    { 'bg-mango-400': theme === 'mango' },
    { 'bg-ice-50': theme === 'ice' },
    // padding sizes
    { 'p-2': paddingSize === 'sm' },
    { 'p-12': paddingSize === 'md' },
    { 'p-16': paddingSize === 'default' },
    { 'p-16': paddingSize === 'lg' },
    { 'p-24': paddingSize === 'xl' },
    { 'p-32': paddingSize === '2xl' },
    { 'p-48': paddingSize === '3xl' },
    { 'p-0': paddingSize === 'none' },
    // margin sizes
    { 'my-2': marginSize === 'sm' },
    { 'my-12': marginSize === 'md' },
    { 'my-16': marginSize === 'default' },
    { 'my-16': marginSize === 'lg' },
    { 'my-24': marginSize === 'xl' },
    { 'my-32': marginSize === '2xl' },
    { 'my-48': marginSize === '3xl' },
    { 'my-0': marginSize === 'none' },
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
    { 'bg-cover': backgroundImageFit === 'cover' },
    { 'bg-contain': backgroundImageFit === 'contain' },
    { 'bg-auto': backgroundImageFit === 'none' },
    // image object position
    { 'bg-bottom': backgroundPosition === 'bottom' },
    { 'bg-center': backgroundPosition === 'center' },
    { 'bg-left': backgroundPosition === 'left' },
    { 'bg-left-bottom': backgroundPosition === 'left-bottom' },
    { 'bg-left-top': backgroundPosition === 'left-top' },
    { 'bg-right': backgroundPosition === 'right' },
    { 'bg-right-bottom': backgroundPosition === 'right-bottom' },
    { 'bg-right-top': backgroundPosition === 'right-top' },
    { 'bg-top': backgroundPosition === 'top' },
    // aspect ratio
    { 'aspect-auto': aspectRatio === 'auto' },
    { 'aspect-square': aspectRatio === 'square' },
    { 'aspect-video': aspectRatio === 'video' }
  );

  const headingClasses = classNames(
    'font-bold',
    'font-serif',
    'text-4xl',
    'text-left',
    'mb-16',
    { 'text-white': theme === 'dark' },
    { 'text-aqua-900': theme !== 'dark' }
  );

  const contentClasses = getContentClasses(
    horizontalAlignment,
    verticalAlignment
  );

  const bgImage = getBackgroundImageStyle(backgroundType, backgroundImage);

  return (
    <div data-theme={theme} className={brickClasses} style={bgImage} id={id}>
      <div className={contentClasses}>
        <div className="brick-content">
          {title && <h2 className={headingClasses}>{title}</h2>}
          {children}
        </div>
      </div>
    </div>
  );
}
