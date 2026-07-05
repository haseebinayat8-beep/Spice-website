"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * PhoneMockup
 * Wraps a screenshot in a premium iPhone frame.
 * Drop your real app screenshots into /public/screens/ and pass the path as `src`.
 * If no `src` is given, or the image fails to load (not uploaded yet), renders a
 * labeled placeholder so the layout stays intact until real screenshots are added.
 */
export default function PhoneMockup({
  src,
  alt,
  label,
  size = "md",
  className,
}: {
  src?: string;
  alt: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  const sizes = {
    sm: "w-[200px] h-[408px]",
    md: "w-[280px] h-[572px]",
    lg: "w-[320px] h-[654px]",
  };

  return (
    <div
      className={cn(
        "relative rounded-[46px] bg-black-permanent p-[10px] shadow-premium-lg",
        sizes[size],
        className
      )}
    >
      {/* Side buttons */}
      <div className="absolute -left-[2px] top-[110px] h-8 w-[3px] rounded-l bg-black-permanent/80" />
      <div className="absolute -left-[2px] top-[150px] h-14 w-[3px] rounded-l bg-black-permanent/80" />
      <div className="absolute -left-[2px] top-[210px] h-14 w-[3px] rounded-l bg-black-permanent/80" />
      <div className="absolute -right-[2px] top-[160px] h-20 w-[3px] rounded-r bg-black-permanent/80" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-cloud">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-red-light to-cloud px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red text-white font-display text-xl font-bold">
              S
            </div>
            <p className="font-display text-sm font-semibold text-ink/70">
              {label || alt}
            </p>
            <p className="text-xs text-gray">Your screenshot goes here</p>
          </div>
        )}

        {/* Notch */}
        <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-black-permanent" />
      </div>
    </div>
  );
}
