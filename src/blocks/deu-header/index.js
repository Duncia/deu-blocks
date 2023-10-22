import { registerBlockType } from "@wordpress/blocks";
import { Button, PanelBody, PanelRow } from "@wordpress/components";
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import icons from "../../icons.js";
import "./main.scss";

registerBlockType("deu-blocks/deu-header", {
  icon: icons.primary,
  edit({ attributes, setAttributes }) {
    const { logoText, imgId, imgUrl, imgAlt } = attributes;
    const blockProps = useBlockProps();

    function onFileSelect(img) {
      setAttributes({ imgId: img.id });
      setAttributes({ imgUrl: img.url });
      setAttributes({ imgAlt: img.alt });
    }
    function handleTextChange(val) {
      setAttributes({ logoText: val });
    }

    return (
      <>
        <InspectorControls>
          <PanelBody title="Images" initialOpen={true}>
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onFileSelect}
                  value={imgId}
                  render={({ open }) => {
                    return <Button onClick={open}>Logo image</Button>;
                  }}
                />
              </MediaUploadCheck>
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <header className="container header">
            <div class="header__inner">
              <div class="header__left">
                <div class="logo">
                  <img src={imgUrl} alt={imgAlt} height="40" width="40" />
                </div>
                <div class="logo--text">
                  <RichText
                    allowedFormats={[]}
                    value={logoText}
                    onChange={handleTextChange}
                    placeholder={"Logo text"}
                  />
                </div>
              </div>
              <div class="header__right">Header menu & burger</div>
            </div>
          </header>
        </div>
      </>
    );
  },
});
