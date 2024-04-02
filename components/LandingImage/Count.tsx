"use client";
import React, { useState, useEffect } from "react";

interface CountProps {
  finalCount: number;
}

export default function Count({ finalCount }: CountProps) {
  const [projectCount, setProjectCount] = useState(finalCount / 2);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount((prevCount) => {
        if (prevCount >= finalCount) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 10); // Adjust the interval to control the speed of counting

    return () => {
      clearInterval(interval);
    };
  }, [finalCount]);

  useEffect(() => {
    setProjectCount(finalCount / 2);
  }, [finalCount]);

  return <div>{projectCount.toLocaleString()} </div>;
}
