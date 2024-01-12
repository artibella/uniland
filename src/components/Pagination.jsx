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
  const prevOffset = parseInt(offset) - 1 > 0 ? parseInt(offset) - 1 : 0;
  // TODO: total handling
  const nextOffset = parseInt(offset) + size;
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
