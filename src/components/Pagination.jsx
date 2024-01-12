import { Pagination as DaisyPagination } from 'react-daisyui';
import Link from 'next/link';

export default function Pagination({
  prevLabel = 'Previous',
  nextLabel = 'Next',
  sizeParam = 'size',
  size = 10,
  offsetParam = 'offset',
  offset = 0,
  targetUrl = undefined,
}) {
  const offsetInt = parseInt(offset);
  const sizeInt = parseInt(size);
  const prevOffset = offsetInt - sizeInt >= 1 ? offsetInt - sizeInt : 1;
  // TODO: total handling
  const nextOffset = 1 + offsetInt + sizeInt;
  console.log('next offset = ', nextOffset);
  const prevLink = `${targetUrl.path}?${sizeParam}=${size}&${offsetParam}=${prevOffset}`;
  const nextLink = `${targetUrl.path}?${sizeParam}=${size}&${offsetParam}=${nextOffset}`;
  return (
    <div className="pagination-container p-8 flex items-center justify-center">
      <DaisyPagination>
        <Link className="join-item btn" href={prevLink} locale={false}>
          {prevLabel}
        </Link>
        <Link className="join-item btn" href={nextLink} locale={false}>
          {nextLabel}
        </Link>
      </DaisyPagination>
    </div>
  );
}
