import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

export default function ({ attributes }) {
  const { mainTitle, switcherNotUrgent, switcherUrgent, switcherSaveText } =
    attributes;
  const blockProps = useBlockProps.save({
    className: `container four-cards`,
  });
  return (
    <div {...blockProps}>
      <div className="container__inner  four-cards__inner">
        <div className="four-cards__top">
          <h2>
            <RichText.Content value={mainTitle} />
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
        <InnerBlocks.Content />
      </div>
    </div>
  );
}
