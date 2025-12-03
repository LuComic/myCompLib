"use client";

import Link from "next/link";
import { Search, Bookmark, Compass, House } from "lucide-react";

export default function Header({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <div className="w-screen z-20 bg-black/60 flex fixed flex-items-center justify-center bottom-0 left-0 backdrop-blur-sm">
          <div className="p-4 flex items-center justify-around w-full">
            <Link
              href="#"
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center"
            >
              <House color="currentColor" />
            </Link>
            <Link
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center cursor-pointer outline-none"
              href="#"
            >
              <Search color="currentColor" />
            </Link>
            <Link
              href="#"
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center"
            >
              <Bookmark color="currentColor" />
            </Link>
            <Link
              href="#"
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center"
            >
              <Compass color="currentColor" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-screen z-20 bg-black/60 flex fixed flex-items-center justify-center bottom-0 md:bottom-auto left-0 md:top-0 backdrop-blur-sm">
          <div className="p-4 md:py-4 md:px-0 md:w-auto flex items-center md:justify-between justify-around md:min-w-1/3 w-full">
            <Link
              href="#"
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center"
            >
              <House color="currentColor" />
              <span className="hidden md:inline">Home</span>
            </Link>
            <Link
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center cursor-pointer outline-none"
              href="#"
            >
              <Search color="currentColor" />
              <span className="hidden md:inline">Search</span>
            </Link>
            <Link
              href="#"
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center"
            >
              <Bookmark color="currentColor" />
              <span className="hidden md:inline">Saved</span>
            </Link>
            <Link
              href="#"
              className="text-white text-lg font-semibold duration-150 hover:text-white/80 flex gap-2 items-center justify-center"
            >
              <Compass color="currentColor" />
              <span className="hidden md:inline">Discover</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
