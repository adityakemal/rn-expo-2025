import { axiosInstance, fetchGet } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGetCategory() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: (params) => fetchGet("/product/category", params),
  });
}

const fetchMenus = async (category: string) => {
  const res = await axios.get(
    category === "All"
      ? "https://www.themealdb.com/api/json/v1/1/search.php?s=" // semua menu
      : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  return res.data.meals;
};

export function useMenus(category: string) {
  return useQuery({
    queryKey: ["menus", category],
    queryFn: () => fetchMenus(category),
    // enabled: !!category,
  });
}

// kebutuhan fuse
const fetchAllMeals = async () => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const requests = letters.map((letter) =>
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => res.data.meals || [])
  );

  const results = await Promise.all(requests);
  return results.flat();
};

export function useAllMeals() {
  return useQuery({
    queryKey: ["all-meals"],
    queryFn: fetchAllMeals,
    staleTime: 1000 * 60 * 10, // cache 10 menit
    gcTime: 1000 * 60 * 30, // garbage collect 30 menit
  });
}
