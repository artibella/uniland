import { Slot } from "@uniformdev/canvas-react";
import classNames from "classnames";

export default function HowtoStep({ name = '', description = '', image = '', images = [] }) {
  return (
    <div className="howto-step inline-flex ml-20 mb-4 relative 
      before:absolute 
      before:-inset-x-16 
      before:rounded-full 
      before:bg-gray-500 
      before:text-white 
      before:text-base 
      before:font-serif
      before:w-8 
      before:h-8
      before:text-center
      before:align-middle
      before:pt-1
      before:justify-center 
      before:items-center
      before:items
      ">
      <div>
        {name ? (
          <h4 className="font-bold text-base">
            {name}
          </h4>
        ) : ''}

        <div className="howto-step-content prose" dangerouslySetInnerHTML={{ __html: description }}>
        </div>
      </div>
    </div>
  )
}
