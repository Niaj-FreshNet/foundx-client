// import Link from "next/link";

import { Navbar } from "@/src/components/UI/navbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      {/* <header className="p-12 max-w-7xl mx-auto">
        <nav className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/suspense">With Suspense</Link>
          <Link href="/parallel">With Parallel</Link>
          <Link href="/parallel/test">Test Route</Link>
        </nav>
      </header> */}
      <main>{children}</main>
    </div>
  );
}
