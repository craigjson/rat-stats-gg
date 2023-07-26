// src/useSampleData.ts
import { useEffect, useState } from "react";
import { AugmentStat } from "../hooks/augmentStat";
import { augmentData } from "../hooks/augmentStat";

const useGetAugmentData = (): AugmentStat[] => {
  const [data, setData] = useState<AugmentStat[]>([]);

  useEffect(() => {
    // Simulate an API or database call
    // In this case, we'll use the sample data from the sampleData.ts file
    setData(augmentData);
  }, []);

  return data;
};

export default useGetAugmentData;
