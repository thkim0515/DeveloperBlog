import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = (fetchData) => {
  const [isFetching, setIsFetching] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isFetching) {
          setIsFetching(true);
          fetchData()
            .then(() => {
              setIsFetching(false);
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
              setIsFetching(false);
            });
        }
      });
    });

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchData, isFetching]);

  return { sentinelRef };
};
