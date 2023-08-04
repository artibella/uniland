const skipCloudinaryProxy = src =>
  src.includes('res.cloudinary.com') ||
  src.includes('images.unsplash.com') ||
  src.includes('.svg');

const getProxyImageSrc = ({ src, width = 800, quality = 75 }) => {
  if (skipCloudinaryProxy(src)) return src;
  return `https://res.cloudinary.com/content-ops/image/fetch/f_auto,c_limit,w_${width},q_${quality}/${
    // append https if image from contentful starts from double slashes
    src.includes('http') ? src : `https:${src}`
  }`;
};

export default function imageUrlEnhancer({ parameter }) {
  return parameter.value ? getProxyImageSrc({ src: parameter.value }) : '';
}
