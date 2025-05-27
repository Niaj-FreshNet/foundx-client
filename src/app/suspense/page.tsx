import { Suspense } from "react";

import ComponentOne from "./_components/ComponentOne";
import ComponentTwo from "./_components/ComponentTwo";
import CardLoading from "./_components/CardLoading";
import CardError from "./_components/CardError";

import ErrorBoundary from "@/src/components/ErrorBoundary";

export default function page() {
  return (
    <div className="flex gap-8 items-center justify-center h-screen">
      <ErrorBoundary fallback={<CardError />}>
        <Suspense fallback={<CardLoading />}>
          <ComponentOne />
        </Suspense>
      </ErrorBoundary>
      <ComponentTwo />
    </div>
  );
}
