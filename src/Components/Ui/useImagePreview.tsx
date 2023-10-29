import { useState, useEffect } from "react";

export const useImagePreview = (defaultValue:any) => {
  const [preview, setPreview] = useState(defaultValue || null);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(preview);

    };
  }, [preview]);

  const handleImageChange = (event:any) => {

    setPreview(URL.createObjectURL(event.target.files[0]));

  };

  return {
    preview,
    handleImageChange,
    setPreview,
  };
};
