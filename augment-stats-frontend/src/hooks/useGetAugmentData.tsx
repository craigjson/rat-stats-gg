// hooks/useGetAugmentData.tsx
import { useState, useEffect } from "react";
import axios from "axios";

export interface AugmentData {
  name: string;
  average_placement: number;
  total_matches: number;
}

const useGetAugmentData = () => {
  const [data, setData] = useState<AugmentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rat-stats-gg-586803b502ce.herokuapp.com/api/augments"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, isError };
};

export default useGetAugmentData;
