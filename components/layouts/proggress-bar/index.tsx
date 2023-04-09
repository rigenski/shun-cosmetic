"use client";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

export default function ProgressBar({ children }: any) {
  const pathname = usePathname();
  const handleRouteStart = () => NProgress.start();
  const handleRouteDone = () => NProgress.done();

  useEffect(() => {
    handleRouteStart();
    handleRouteDone();

    return () => {
      handleRouteStart();
      handleRouteDone();
    };
  }, [pathname]);

  return <>{children}</>;
}
