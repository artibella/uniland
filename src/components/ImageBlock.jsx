import Image from 'next/image';

export default function ImageBlock({ imageUrl = '', caption = '' }) {
  return (
    <article className="image-block">
      <div className="">
        {imageUrl ? (
          <figure>
            <img src={imageUrl} alt={caption} />
            <figcaption className="text-sm text-slate-700 mt-4 ml-4">
              {caption}
            </figcaption>
          </figure>
        ) : (
          ''
        )}
      </div>
    </article>
  );
}
