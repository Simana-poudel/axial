import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MapContentProps {
  location?: string;
}

const MapContentDemo: React.FC<MapContentProps> = ({ location }) => {
  return (
    <div className="z-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="w-2 h-2 orb bg-primary-2 rounded-full">
            <div className="shine"></div>
            <div className="light"></div>
          </TooltipTrigger>
          <TooltipContent className="text-primary-2">{location}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default MapContentDemo;
