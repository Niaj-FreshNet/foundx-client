import { delay } from "@/src/utils/delay";

export default async function ComponentOne() {
  await delay(2000);

  throw new Error("Error");

  return (
    <div className="border-2 border-gray-500 rounded-md size-[500px] p-2">
      <h1 className="text-xl">This is Component One - DYNAMIC COMPONENT</h1>
    </div>
  );
}
