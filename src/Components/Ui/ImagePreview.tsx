import React from "react";
import { useTranslation } from "react-i18next";

const ImagePreview = ({ preview, height = 200 }:any) => {
  const [t] = useTranslation();

  return (
    <div
      style={{
        border: "1px solid lightgray",
        height: `${height}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {preview ? (
        <img
          className="p-1"
          style={{
            maxWidth: "100%",
          }}
          height={height}
          src={preview}
          alt=""
        />
      ) : (
        <div>{t("image_preview")}</div>
      )}
    </div>
  );
};

export default ImagePreview;
