import { fetchProducts } from "@/apis";
import type { Product } from "@/types";
import { useEffect, useState } from "react";
import usePaginator from "./usePaginator";

const useListing = () => {
  const { searchParams, onUpdateParams } = usePaginator();
  const { limit, page, flavor, min, max } = searchParams;

  const [data, setData] = useState<{ products: Product[]; loading: boolean }>({
    products: [],
    loading: false,
  });

  const fetchData = async () => {
    try {
      setData((prev) => ({ ...prev, loading: true }));
      setTimeout(async () => {
        const parsedData = { limit, page, min, max, flavor };

        const data = await fetchProducts(parsedData, (total) =>
          onUpdateParams({ ...searchParams, total })
        );
        setData({ products: data, loading: false });
      }, 500);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit, page, flavor, min, max]);

  return { products: data.products || [], loading: data.loading };
};

export default useListing;
