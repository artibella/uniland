import React, { useRef } from "react";

export default function LottieAnimation ( {
  id="",
  src="", 
  autoplay = false, 
  controls = false, 
  loop=true, 
  hover = false,
  width = "300px",
  height = "300px"
  } ) {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="lottie-animation">
        <lottie-player
          id={id}
          ref={ref}
          autoplay={Boolean(autoplay) ? 'autoplay' : undefined} 
          controls={Boolean(controls) ? 'controls' : undefined}
          loop={Boolean(loop) ? 'loop' : undefined}
          hover={Boolean(hover) ? 'hover' : undefined}
          mode="normal"
          src={src}
          style={{ width, height }}
        ></lottie-player>
    </div>
  );
}