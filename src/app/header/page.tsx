"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function () {
  const [code, setCode] = useState(false);

  return (
    <div>
      <h1 className="text-4xl">Header</h1>
      <p className="text-lg my-2">
        This is a basic header. It is reactive for both desktop and mobile by
        getting rid of the text and moving to the bottom past tailwind's md
      </p>
      {code ? (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <pre className="bg-gray-50 text-gray-800 p-3 overflow-x-auto">
            <code className="text-xs font-mono">
              <span className="text-gray-400">{`      `}</span>
              <span className="text-purple-600">&lt;div</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "w-screen z-20 bg-black/60 flex fixed flex-items-center
                justify-center bottom-0 md:bottom-auto left-0 md:top-0
                backdrop-blur-sm"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;div</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "p-4 md:py-4 md:px-0 md:w-auto flex items-center
                md:justify-between justify-around md:min-w-1/3 w-full"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;Link</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">href</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"#"</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "text-white text-lg font-semibold duration-150
                hover:text-white/80 flex gap-2 items-center justify-center"
              </span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;House</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;span</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"hidden md:inline"</span>
              <span className="text-purple-600">&gt;</span>
              <span className="text-gray-800">Home</span>
              <span className="text-purple-600">&lt;/span&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;/Link&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;Link</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "text-white text-lg font-semibold duration-150
                hover:text-white/80 flex gap-2 items-center justify-center
                cursor-pointer outline-none"
              </span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">href</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"#"</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;Search</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;span</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"hidden md:inline"</span>
              <span className="text-purple-600">&gt;</span>
              <span className="text-gray-800">Search</span>
              <span className="text-purple-600">&lt;/span&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;/Link&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;Link</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">href</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"#"</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "text-white text-lg font-semibold duration-150
                hover:text-white/80 flex gap-2 items-center justify-center"
              </span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;Bookmark</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;span</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"hidden md:inline"</span>
              <span className="text-purple-600">&gt;</span>
              <span className="text-gray-800">Saved</span>
              <span className="text-purple-600">&lt;/span&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;/Link&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;Link</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">href</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"#"</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-blue-600">className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "text-white text-lg font-semibold duration-150
                hover:text-white/80 flex gap-2 items-center justify-center"
              </span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;Compass</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`            `}</span>
              <span className="text-purple-600">&lt;span</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"hidden md:inline"</span>
              <span className="text-purple-600">&gt;</span>
              <span className="text-gray-800">Discover</span>
              <span className="text-purple-600">&lt;/span&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;/Link&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;/div&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`      `}</span>
              <span className="text-purple-600">&lt;/div&gt;</span>
            </code>
          </pre>
        </div>
      ) : (
        <>
          <h3>Dekstop</h3>
          <div className="w-full h-[200px] overflow-hidden border border-gray-300">
            <div className="origin-top-left scale-[0.5]">
              <Header isMobile={false} />
            </div>
          </div>
          <h3>Mobile</h3>
          <div className="w-full h-[200px] overflow-hidden border border-gray-300">
            <div className="origin-bottom-left h-full scale-[0.5]">
              <Header isMobile={true} />
            </div>
          </div>
        </>
      )}

      <button
        className="border p-2 my-2 cursor-pointer hover:bg-black/10"
        onClick={() =>
          navigator.clipboard
            .writeText(` <div className="w-screen z-20 bg-black/60 flex fixed flex-items-center justify-center bottom-0 md:bottom-auto left-0 md:top-0 backdrop-blur-sm">
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
    </div>`)
        }
      >
        Copy component
      </button>
      <button
        className="border p-2 my-2 cursor-pointer hover:bg-black/10 ml-2"
        onClick={() => setCode(!code)}
      >
        {code ? "Preview" : "Code"}
      </button>
    </div>
  );
}
