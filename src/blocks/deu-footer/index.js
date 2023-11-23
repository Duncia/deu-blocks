import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import icons from "../../icons.js";
import "./main.scss";

registerBlockType("deu-blocks/deu-footer", {
  icon: icons.primary,
  edit({ attributes, setAttributes }) {
    const { footerIntro, footerBottomLine } = attributes;
    const blockProps = useBlockProps();

    function handleIntroChange(val) {
      setAttributes({ footerIntro: val });
    }
    function handleBottomTextChange(val) {
      setAttributes({ footerBottomLine: val });
    }

    return (
      <>
        <div {...blockProps}>
          <footer className="container footer">
            <div className="footer__inner txt-center pt-md pb-md">
              <h4>
                <RichText
                  allowedFormats={[]}
                  value={footerIntro}
                  onChange={handleIntroChange}
                  placeholder={
                    "All menu items are handled in menu WP menu section."
                  }
                />
                <RichText
                  allowedFormats={[]}
                  value={footerBottomLine}
                  onChange={handleBottomTextChange}
                  placeholder={
                    "Texts, links and url are handled in PHP template."
                  }
                />
              </h4>
            </div>
          </footer>
        </div>
      </>
    );
  },
});
