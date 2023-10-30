

export const buildFormData = (
    formData: FormData,
    data: any,
    parentKey?: string
  ): void => {
    if (
      data &&
      typeof data === "object" &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? "" : data;
  
      formData.append(parentKey as string, value);
    }
  };
  