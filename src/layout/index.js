import Sitefooter from './Sitefooter';
import Siteheader from './Siteheader';

export default function Layout({ children }) {
  return (
    <>
      <Siteheader />
      <div className="page-layout">{children}</div>
      <Sitefooter />
    </>
  );
}
