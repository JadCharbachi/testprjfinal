'use client'

import MarketstatusComponent from '../APITEST';
import {RiArrowRightSFill} from '@remixicon/react';

  const positive = " bg-emerald-100 text-emerald-800 ring-emerald-600/10 "
  const negative = " bg-red-100 text-red-800 ring-red-600/10 "

  export default function CardTest() {
    return (
      <>
        <div className="flex flex-wrap justify-center gap-4">
          <span className={"inline-flex items-center gap-x-1 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold " + positive + " ring-inset ring-tremor-ring"}>
            <RiArrowRightSFill className="-ml-0.5 h-4 w-4" aria-hidden={true} />
            Market Status
          </span>
        </div>
      </>
    );
  }