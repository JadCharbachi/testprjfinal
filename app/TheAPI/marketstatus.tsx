import React, {useEffect, useState} from 'react'
import { RiArrowRightSFill } from '@remixicon/react';
const apikey = "coe8u09r01qjje1ujas0coe8u09r01qjje1ujasg"

const url = "https://finnhub.io/api/v1/stock/market-status?exchange=US&token="+ apikey;
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
    return <p>Wait</p>; // Early return if data is null
  }

  if (data && (data["isOpen"])) {
  return (
        <div className="flex flex-wrap justify-end gap-4">
          <span className={"inline-flex items-center gap-x-1 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold bg-emerald-100 text-emerald-800 ring-emerald-600/10 ring-inset ring-tremor-ring"}>
            <RiArrowRightSFill className="-ml-0.5 h-4 w-4" aria-hidden={true} />
            Market Open
          </span>
        </div>
  );
  }else if (data && !(data["isOpen"])) {
    return (
      <div className="flex flex-wrap justify-end gap-4">
      <span className={"inline-flex items-center gap-x-1 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold bg-red-100 text-red-800 ring-red-600/10 ring-inset ring-tremor-ring"}>
        <RiArrowRightSFill className="-ml-0.5 h-4 w-4" aria-hidden={true} />
        Market Closed 
      </span>
    </div>
    );
  }
}



export default MarketstatusComponent;

