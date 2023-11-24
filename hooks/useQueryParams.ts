import { useSearchParams } from "next/navigation";

const useQueryParams = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  return params;
};

export default useQueryParams;
