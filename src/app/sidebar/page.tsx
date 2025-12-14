"use client";

import { useState } from "react";
import { Sidebar } from "../components/Sidebar";

export default function page() {
  const [code, setCode] = useState(false);
  return (
    <div>
      <h1 className="text-4xl">Sidebar</h1>
      <p className="text-lg my-2">
        This is a basic sidebar. Preferably used inside of a grid layout
      </p>
      {code ? (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <pre className="bg-gray-50 text-gray-800 p-3 overflow-x-auto">
            <code className="text-xs font-mono">
              <span className="text-gray-400">{`    `}</span>
              <span className="text-purple-600">&lt;div</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "grid grid-cols-5 w-full h-full bg-black"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`      `}</span>
              <span className="text-purple-600">&lt;div</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "w-full h-full border-r-slate-400 border-r flex flex-col
                items-start justify-between p-2"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;button</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "flex items-center justify-start cursor-pointer transition gap-2
                w-full hover:bg-white/10 rounded-md px-3 py-2 text-white"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;ChartColumn</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-gray-800">Overall</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;/button&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;button</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "flex items-center justify-start cursor-pointer transition gap-2
                w-full hover:bg-white/10 rounded-md px-3 py-2 text-white"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;Settings</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-gray-800">Settings</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;/button&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;button</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "flex items-center justify-start cursor-pointer transition gap-2
                w-full hover:bg-white/10 rounded-md px-3 py-2 text-white"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;HeartHandshake</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-gray-800">Terms</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;/button&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;button</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "flex items-center justify-start cursor-pointer transition gap-2
                w-full hover:bg-white/10 rounded-md px-3 py-2 text-rose-400"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-purple-600">&lt;LogOut</span>
              <span className="text-blue-600"> color</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"currentColor"</span>
              <span className="text-purple-600"> /&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`          `}</span>
              <span className="text-gray-800">Log out</span>
              {"\n"}

              <span className="text-gray-400">{`        `}</span>
              <span className="text-purple-600">&lt;/button&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`      `}</span>
              <span className="text-purple-600">&lt;/div&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`      `}</span>
              <span className="text-purple-600">&lt;div</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">"col-span-4 w-full"</span>
              <span className="text-purple-600">&gt;&lt;/div&gt;</span>
              {"\n"}

              <span className="text-gray-400">{`    `}</span>
              <span className="text-purple-600">&lt;/div&gt;</span>
            </code>
          </pre>
        </div>
      ) : (
        <>
          <div className="w-full h-[200px] overflow-hidden border border-gray-300">
            <div className="origin-top-left scale-75">
              <Sidebar />
            </div>
          </div>
        </>
      )}

      <button
        className="border p-2 my-2 cursor-pointer hover:bg-black/10"
        onClick={() =>
          navigator.clipboard
            .writeText(`     <div className="grid grid-cols-5 w-full h-full bg-black">
      <div className="w-full h-full border-r-slate-400 border-r flex flex-col items-start justify-between p-2">
        <button className="flex items-center justify-start cursor-pointer transition gap-2 w-full hover:bg-white/10 rounded-md px-3 py-2 text-white">
          <ChartColumn color="currentColor" />
          Overall
        </button>
        <button className="flex items-center justify-start cursor-pointer transition gap-2 w-full hover:bg-white/10 rounded-md px-3 py-2 text-white">
          <Settings color="currentColor" />
          Settings
        </button>
        <button className="flex items-center justify-start cursor-pointer transition gap-2 w-full hover:bg-white/10 rounded-md px-3 py-2 text-white">
          <HeartHandshake color="currentColor" />
          Terms
        </button>
        <button className="flex items-center justify-start cursor-pointer transition gap-2 w-full hover:bg-white/10 rounded-md px-3 py-2 text-rose-400">
          <LogOut color="currentColor" />
          Log out
        </button>
      </div>
      <div className="col-span-4 w-full"></div>
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
