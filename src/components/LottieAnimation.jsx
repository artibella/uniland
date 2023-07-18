import React, { useRef } from 'react';

export default function LottieAnimation({
  id = '',
  src = '',
  jsonSrc = '',
  autoplay = false,
  controls = false,
  loop = true,
  hover = false,
  width = '300px',
  height = '300px',
}) {
  const ref = useRef(null);
  React.useEffect(() => {
    import('@lottiefiles/lottie-player');
  });

  const jsonString =
    typeof jsonSrc === 'object' && jsonSrc !== ''
      ? JSON.stringify(jsonSrc)
      : undefined;

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
        src={jsonString || src}
        style={{ width, height }}
      ></lottie-player>
    </div>
  );
}
