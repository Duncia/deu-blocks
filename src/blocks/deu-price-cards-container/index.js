import { registerBlockType } from "@wordpress/blocks";
import { PanelBody, PanelRow, TextControl } from "@wordpress/components";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks,
} from "@wordpress/block-editor";
import icons from "../../icons.js";
import "./main.scss";
import save from "./save.js";

registerBlockType("deu-blocks/deu-price-cards-container", {
  icon: icons.primary,
  edit({ attributes, setAttributes }) {
    const { mainTitle, switcherNotUrgent, switcherUrgent, switcherSaveText } =
      attributes;
    const blockProps = useBlockProps({ className: `container four-cards` });

    return (
      <>
        <InspectorControls>
          <PanelBody title="Switcher texts" initialOpen={true}>
            <PanelRow>
              <TextControl
                value={switcherNotUrgent}
                onChange={(val) => setAttributes({ switcherNotUrgent: val })}
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                value={switcherUrgent}
                onChange={(val) => setAttributes({ switcherUrgent: val })}
              />
            </PanelRow>
            <PanelRow>
              <TextControl
                value={switcherSaveText}
                onChange={(val) => setAttributes({ switcherSaveText: val })}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <div className="container__inner  four-cards__inner">
            <div className="four-cards__top">
              <h2>
                <RichText
                  allowedFormats={[]}
                  value={mainTitle}
                  onChange={(mainTitle) => setAttributes({ mainTitle })}
                  placeholder={"Main title"}
                />
              </h2>
              <div className="four-cards__switcher switcher">
                <div className="switcher__btn switcher__btn--left">
                  {switcherNotUrgent}
                  <div className="switcher__btn--left-bg"></div>
                </div>
                <div className="switcher__btn switcher__btn--right">
                  {switcherUrgent}
                  <div className="switcher__btn--right-bg"></div>
                </div>
                <div className="top-save-label">{switcherSaveText}</div>
              </div>
            </div>
            <InnerBlocks />
          </div>
        </div>
      </>
    );
  },
  save,
});
