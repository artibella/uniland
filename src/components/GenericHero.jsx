import { UniformSlot, UniformText } from '@uniformdev/canvas-react';
import Heading from './Heading';
import classNames from 'classnames';

const renderImage = (imageUrl, imageFit, title) => {
  const objectFit = !imageFit.length ? 'contain' : imageFit;
  const imageClasses = classNames(`object-${objectFit}`);

  return (
    <>
      {imageUrl && imageUrl.length && (
        <div className="">
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
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          {useDefaultHeading ? (
            <Heading title={title} tagName="h2" />
          ) : (
            <UniformSlot name="heading" />
          )}
          <div className="hero-body">
            <UniformText
              parameterId="body"
              isMultiline={true}
              as={'p'}
              className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            />
          </div>

          <div className="hero-actions sm:inline-flex items-center justify-center gap-4 mt-8 lg:mt-12 text-center lg:text-left">
            <UniformSlot name="ctas" />
          </div>
        </div>
        <div class="block mt-8 lg:mt-0 lg:col-span-5 lg:flex">{image}</div>
      </div>
    </section>
  );
}
