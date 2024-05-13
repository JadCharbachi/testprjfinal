'use client'

import CompoundInterestCalculator from "./calculateur";

export default function TestPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div>
        <CompoundInterestCalculator />
      </div>
    </main>
  );
}