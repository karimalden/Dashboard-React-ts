import { DynamicColumns } from "K_Layout/ColumnLayout";
import { useMemo } from "react";
import { useTranslation } from "utility/language";
const useTableColumns = (Dynamic) => {
  const t = useTranslation();
  return useMemo(
    () => [
      ...DynamicColumns(t, Dynamic)
    ],
    [t]
  );
};

export default useTableColumns;
