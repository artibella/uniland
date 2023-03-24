import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const defaultRenderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      // render the EMBEDDED_ASSET as you need
      return `<img
          src="https://${node.data.target.fields.file.url}" 
          height="${node.data.target.fields.file.details.image.height}"
          width="${node.data.target.fields.file.details.image.width}"
          alt="${node.data.target.fields.description}"
        />`;
    },
  },
};

const renderContentfulRichText = (json, renderOptions) => {
  const richText = documentToHtmlString(json, renderOptions);
  return richText;
};

export default function contentfulRichTextEnhancer({ parameter }) {
  return renderContentfulRichText(parameter.value, defaultRenderOptions);
}
