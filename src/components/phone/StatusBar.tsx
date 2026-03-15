"use client";

import { useEffect, useState } from "react";
import { Battery, Wifi } from "lucide-react";

export const StatusBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 flex items-center justify-between px-6 select-none">
      <div className="text-[13px] font-semibold tracking-tight w-12 text-white">
        {time}
      </div>
      
      {/* Dynamic Island Slot Placeholder (Centered in PhoneFrame) */}
      <div className="flex items-center gap-1.5 pl-2">
        <div className="flex gap-0.5 items-end h-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-[3px] rounded-full bg-white ${
                i > 3 ? "opacity-30" : "opacity-100"
              }`}
              style={{ height: `${20 + i * 20}%` }}
            />
          ))}
        </div>
        <Wifi size={14} className="text-white" strokeWidth={2.5} />
        <div className="relative flex items-center gap-0.5">
          <Battery size={18} className="text-white -rotate-180" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};
