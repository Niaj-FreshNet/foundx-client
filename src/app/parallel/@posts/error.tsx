"use client";

export default function error() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5">
      <div className="bg-red-500 h-[400px] w-full flex items-center justify-center">
        <h1 className="text-2xl text-black font-semibold">Error...</h1>
      </div>
    </div>
  );
}
