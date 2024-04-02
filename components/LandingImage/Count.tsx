"use client";
import React, { useState, useEffect } from "react";

export default function Count() {
  const [projectCount, setProjectCount] = useState(500);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount((prevCount) => {
        if (prevCount >= 1000) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 5); // Adjust the interval to control the speed of counting

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProjectCount(500);
  }, []);

  return <div>{projectCount.toLocaleString()}+ </div>;
}
