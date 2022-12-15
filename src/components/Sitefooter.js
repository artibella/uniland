import { Footer } from "react-daisyui"

export default function Sitefooter({ children }) {

  return (
    <div className="site-footer mt-32">
      <Footer className="p-10 bg-dark text-base-content">
        <div>
          <Footer.Title>This is a ficticious website for demoing proposes only</Footer.Title>
             <a className="link link-hover" href="https://uniform.dev">Learn more about Uniform</a>
        </div>
      </Footer>
    </div>
  )
}