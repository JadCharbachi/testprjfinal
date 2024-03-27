import React, {useEffect, useState} from 'react'
import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.mDQEhT0lHximdZuUI62cUuNVTufo58i2);

const url = "https://api.polygon.io/v1/marketstatus/now?apiKey=mDQEhT0lHximdZuUI62cUuNVTufo58i2"

const apikey = "mDQEhT0lHximdZuUI62cUuNVTufo58i2"


async function marketstatus2() {
  const response = await fetch(url);
  const data2 = await response.json();
  return data2;
}

function marketstatusComponent() {
  const [data,setData] = useState(null);
  useEffect(() => {
    marketstatus2().then(data2 => setData(data2))
  }, []);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default marketstatusComponent;

