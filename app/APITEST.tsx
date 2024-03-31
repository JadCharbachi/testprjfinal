import React, {useEffect, useState} from 'react'
import { restClient } from '@polygon.io/client-js';
import { RiArrowRightSFill } from '@remixicon/react';
const rest = restClient(process.env.mDQEhT0lHximdZuUI62cUuNVTufo58i2);
const apikey = "mDQEhT0lHximdZuUI62cUuNVTufo58i2"

const url = "https://api.polygon.io/v1/marketstatus/now?apiKey="+ apikey;
// {JSON.stringify(data)
// test-is-active={data["currencies"]["fx"]}>Welcome,{data["currencies"]["fx"]? "true" : "false"



async function marketstatus2() {
  const response = await fetch(url);
  const data2 = await response.json();
  return data2;
}

function MarketstatusComponent() {
  const [data,setData] = useState(null);
  useEffect(() => {
    marketstatus2().then(data2 => setData(data2))
  }, []);



  if (!data) {
    return <p>Testing in working</p>; // Early return if data is null
  }

  if (data && (data["currencies"]["crypto"] === "open")) {
  return (

        <div className="flex flex-wrap justify-center gap-4">
          <span className={"inline-flex items-center gap-x-5 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold bg-emerald-100 text-emerald-800 ring-emerald-600/10 ring-inset ring-tremor-ring"}>
            <RiArrowRightSFill className="-ml-0.5 h-4 w-4" aria-hidden={true} />
            Market Open
          </span>
        </div>
  );
  }else if (data && !(data["currencies"]["crypto"] === "open")) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
      <span className={"inline-flex items-center gap-x-1 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold bg-red-100 text-red-800 ring-red-600/10 ring-inset ring-tremor-ring"}>
        <RiArrowRightSFill className="-ml-0.5 h-4 w-4" aria-hidden={true} />
        Market Closed 
      </span>
    </div>
    );
  }
}



export default MarketstatusComponent;

