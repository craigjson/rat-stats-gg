// hooks/useGetAugmentData.tsx
import { useState, useEffect } from "react";
import axios from "axios";

export interface AugmentData {
  name: string;
  average_placement: number;
  total_matches: number;
}

const API_URL: string = process.env.API_URL?.toString() || "";

const useGetAugmentData = () => {
  const [data, setData] = useState<AugmentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
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
