"use client";

import { useState } from "react";
import { Button } from "../components/Button";

export default function () {
  const [code, setCode] = useState(false);

  return (
    <div>
      <h1 className="text-4xl">Button</h1>
      <p className="text-lg my-2">This is a button</p>
      {code ? (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <pre className="bg-gray-50 text-gray-800 p-3 overflow-x-auto">
            <code className="text-xs font-mono">
              <span className="text-gray-400">{`    `}</span>
              <span className="text-purple-600">&lt;div</span>
              <span className="text-blue-600"> className</span>
              <span className="text-gray-800">=</span>
              <span className="text-green-600">
                "cursor-pointer text-lg px-3 py-[4.3px] hover:bg-black/80
                transition bg-black rounded-md text-white w-max"
              </span>
              <span className="text-purple-600">&gt;</span>
              {"\n"}
              <span className="text-gray-400">{`      `}</span>
              <span className="text-gray-800">Button</span>
              {"\n"}
              <span className="text-gray-400">{`    `}</span>
              <span className="text-purple-600">&lt;/div&gt;</span>
            </code>
          </pre>
        </div>
      ) : (
        <div className="w-full h-[200px] overflow-hidden border border-gray-300">
          <div className="origin-bottom-left h-full">
            <Button />
          </div>
        </div>
      )}

      <button
        className="border p-2 my-2 cursor-pointer hover:bg-black/10"
        onClick={() =>
          navigator.clipboard
            .writeText(`     <div className="cursor-pointer text-lg px-3 py-[4.3px] hover:bg-gray-300 transition bg-white rounded-md text-black">
      Button
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
