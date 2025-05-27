import { delay } from "@/src/utils/delay";

export default async function page() {
  delay(3000);

  //   throw new Error("Error");

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-5">
      <div className="bg-teal-300 h-[400px] w-full flex items-center justify-center">
        <h1 className="text-2xl text-black font-semibold">Dynamic Content</h1>
      </div>
    </div>
  );
}
