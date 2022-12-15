import { Slot } from "@uniformdev/canvas-react";
import classNames from "classnames";

export default function HowtoSection({ name = '', description='', image='' }) {
  return (
    <section className="howto-section mb-4">
        <h2 className="font-bold text-xl mb-4">
          {name}
        </h2>

        { image ? (
          <img src={image} alt={name} className="w-80 mb-8" />
        ) : ''}
        
        <div className="howto-section-content prose" 
          dangerouslySetInnerHTML={{__html: description}}>
        </div>
        <div className="howto-section-steps">
          <Slot name="steps" />

        </div>
    </section>
  )
}
