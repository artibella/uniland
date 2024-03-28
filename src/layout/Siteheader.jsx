import NavigationBar from '../components/NavigationBar';

export default function Siteheader({ children }) {
  return (
    <div className="site-header relative bg-white py-8 px-4 sm:px-8">
      <div className="container mx-auto flex">
        <NavigationBar />
      </div>
    </div>
  );
}
