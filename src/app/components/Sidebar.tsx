import { ChartColumn, Settings, HeartHandshake, LogOut } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="grid grid-cols-5 w-full h-full bg-black">
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
    </div>
  );
};
