import Sitefooter from './Sitefooter'
import Siteheader from './Siteheader'

export default function Layout({ children }) {
  return (
    <>
      <Siteheader />
      <main>{children}</main>
      <Sitefooter />
    </>
  )
}