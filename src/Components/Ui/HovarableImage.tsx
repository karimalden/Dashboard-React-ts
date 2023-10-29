import React from "react";
import { Tooltip } from "reactstrap";

const tooltipStyle = {
  backgroundColor: "white",
  border: "2px solid lightgrey",
  maxWidth: "400px",
};

const HovarableImage = ({ id, src, imgPreviewProps = {}, ...props }:any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ID = `image_hover_tooltip_${id}`;
  const toggleTooltip = React.useCallback(() => setIsOpen((prev) => !prev), []);
  
  return (
    <div style={{marginInline:"20px"}}>
      <img id={ID} src={src} alt={props.alt} {...props}  style={{ maxWidth:"300px", maxHeight:'50px'}}/>
      <Tooltip
        placement="left"
        isOpen={isOpen}
        target={ID}
        toggle={toggleTooltip}
        style={tooltipStyle}
      >
        <img
          style={{ maxWidth:"300px", maxHeight:'150px'}}
          src={src}
          alt={props.alt}
          {...imgPreviewProps}
        />
      </Tooltip>
    </div>
  );
};

export default HovarableImage;

