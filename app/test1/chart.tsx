'use client'

import { Card, ProgressBar } from '@tremor/react';

export default function Example() {
  return (
    <Card className="mx-auto max-w-md">
      <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Sales
      </h4>
      <p className="text-tremor-metric font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        $71,465
      </p>
      <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        <span>32% of annual target</span>
        <span>$225,000</span>
      </p>
      <ProgressBar value={56} className="mt-2" />
    </Card>
  );
}