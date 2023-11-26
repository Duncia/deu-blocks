import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import icons from "../../icons.js";
import "./main.scss";

registerBlockType("deu-blocks/deu-price-card", {
  icon: icons.primary,
  edit() {
    const blockProps = useBlockProps({ className: `card` });

    return (
      <>
        <div {...blockProps}>
          <InnerBlocks />
        </div>
      </>
    );
  },
  save() {
    const blockProps = useBlockProps.save({ className: `card` });
    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    );
  },
});
