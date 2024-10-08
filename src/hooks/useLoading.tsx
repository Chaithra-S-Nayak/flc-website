import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * Returns true if the page is loading, otherwise false.
 * @returns boolean
 */
const useLoading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return loading;
};

export { useLoading };
