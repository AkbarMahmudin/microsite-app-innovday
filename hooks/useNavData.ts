import { useMemo } from "react";
import { navigation } from "@/config/navigation";

export const useNavData = () => {
  const navData = useMemo(() => navigation, []);

  return navData;
};
