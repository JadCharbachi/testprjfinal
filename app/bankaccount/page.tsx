'use client'

import { Card } from "@tremor/react";
import TickerChart from "../TheAPI/apitestcharts";
import MarketstatusComponent from "../TheAPI/APITEST";
import { RiArrowRightSFill } from "@remixicon/react";
import { Suspense } from "react";
import CardSkeleton from "../ui/skeleton";


export default async function TestPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Suspense fallback={<CardSkeleton />}>
        <Card className="mt-4">
        <div className="flex flex-wrap justify-end gap-4">
           {MarketstatusComponent()}
        </div>
        <div>
          <TickerChart />
        </div>
        </Card>
      </Suspense>
    </main>
  );
}