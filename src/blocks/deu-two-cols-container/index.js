import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import icons from "../../icons.js";
import "./main.scss";

registerBlockType("deu-blocks/deu-two-cols-container", {
  icon: icons.primary,
  edit() {
    const blockProps = useBlockProps({ className: `container` });
    return (
      <>
        <div {...blockProps}>
          <div className="container__inner deu-two-cols-container">
            <InnerBlocks />
          </div>
        </div>
      </>
    );
  },
  save() {
    const blockProps = useBlockProps.save({ className: `container` });
    return (
      <div {...blockProps}>
        <div className="container__inner deu-two-cols-container">
          <InnerBlocks.Content />
        </div>
      </div>
    );
  },
});
