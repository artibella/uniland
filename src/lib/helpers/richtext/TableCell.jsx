import { getRichTextTagFromTableCellHeaderState } from '@uniformdev/richtext';

/** Custom renderer for table cells for Uniform Rich Text */

export default function TableCell({ node, children }) {
  const HeaderTag = getRichTextTagFromTableCellHeaderState(node.headerState);
  if (node.headerState === 1) {
    // row header
    return (
      <HeaderTag className="bg-gray-100 font-bold text-left">
        {children}
      </HeaderTag>
    );
  } else if (node.headerState === 2) {
    // column header
    return (
      <HeaderTag className="bg-gray-100 font-bold text-center">
        {children}
      </HeaderTag>
    );
  } else if (node.headerState === 3) {
    // row and column header
    return (
      <HeaderTag className="bg-gray-100 font-bold text-center">
        {children}
      </HeaderTag>
    );
  } else {
    return <td>{children}</td>;
  }
}
