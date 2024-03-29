import React, {useEffect, useState} from 'react'
import { restClient } from '@polygon.io/client-js';
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

  return (
    <div>
      <p>Welcome, {data["currencies"]["fx"]}!</p>
    </div>
  );
}





export default MarketstatusComponent;

