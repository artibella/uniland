import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import Heading from './Heading';
import classNames from 'classnames';

const renderImage = (imageUrl, imageFit, title) => {
  const objectFit = !imageFit.length ? 'contain' : imageFit;
  const imageClasses = classNames(
    'h-56 sm:h-72 md:h-full',

    `object-${objectFit}`
  );

  return (
    <>
      {imageUrl && imageUrl.length && (
        <div className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
          <img className={imageClasses} src={imageUrl} alt={title} />
        </div>
      )}
    </>
  );
};

export default function GenericHero({
  title = '',
  body = '',
  imageUrl = '',
  imageFit = 'cover',
  component,
}) {
  const image = renderImage(imageUrl, imageFit, title);
  // TODO: fix issue with Visual Canvas as slot could contain placeholder
  const useDefaultHeading = !Array.isArray(component.slots?.heading);

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white py-8 sm:py-16 md:py-20 lg:py-28 xl:py-32 md:max-w-xl lg:max-w-2xl">
          <div className="mx-auto mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center md:text-left">
              {useDefaultHeading ? (
                <Heading title={title} tagName="h2" />
              ) : (
                <UniformSlot name="heading" />
              )}
              <div className="hero-body">
                <UniformText
                  parameterId="body"
                  isMultiline={true}
                  className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
                />
              </div>

              <div className="hero-actions sm:inline-flex items-center justify-center gap-4 mt-8 lg:mt-12 text-center lg:text-left">
                <UniformSlot name="ctas" />
              </div>
            </div>
          </div>
        </div>
        {image}
      </div>
    </div>
  );
}
