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
        <div className="flex flex-wrap justify-center gap-4">
          <span className={"inline-flex items-center gap-x-1 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold bg-emerald-100 text-emerald-800 ring-emerald-600/10 ring-inset ring-tremor-ring"}>
            <RiArrowRightSFill className="-ml-0.5 h-4 w-4" aria-hidden={true} />
            Market Open
          </span>
        </div>
        </Card>
      </Suspense>
    </main>
  );
}