'use client'

import { Card } from "@tremor/react";
import TickerChart from "../TheAPI/apitestcharts";
import MarketstatusComponent from "../TheAPI/marketstatus";
import { RiArrowRightSFill } from "@remixicon/react";
import { Suspense } from "react";
import CardSkeleton from "../ui/skeleton";
import CompoundInterestCalculator from "./calculateur";


export default async function TestPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div>
        <CompoundInterestCalculator />
      </div>
    </main>
  );
}