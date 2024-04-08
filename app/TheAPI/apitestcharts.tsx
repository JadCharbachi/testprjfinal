'use client';
import {
    LineChart,
  } from '@tremor/react';

import React, {useEffect, useState} from 'react'

const apikey = "mDQEhT0lHximdZuUI62cUuNVTufo58i2"
const url = "https://api.polygon.io/v2/aggs/ticker/TSLA/range/1/day/2023-12-01/2024-03-01?adjusted=true&sort=asc&limit=100&apiKey="+ apikey;

  type UnixTimeConverterProps = {
  unixTime: number;
  };

  // This is a new function that takes a Unix timestamp and returns a formatted date string
  function formatUnixTime(unixTime: number): string {
  const date = new Date(unixTime);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  // This is the updated UnixTimeConverter component that uses the new function
  const UnixTimeConverter: React.FC<UnixTimeConverterProps> = ({ unixTime }) => {
    console.log(unixTime); // Add this line
  return <>{formatUnixTime(unixTime)}</>;
  };

  

    async function fetcher() {
      const response = await fetch(url);
      const data2 = await response.json();
      return data2;
    }  

  
    const valueFormatter = function (number : number) {
      return '$ ' + new Intl.NumberFormat('us').format(number).toString();
    };
  
  export default function TickerChart() {
    
      const [data, setData] = useState(null);
      const [hData, setHData] = useState<{ t: string; h: number; l: number }[]>([]);

      useEffect(() => {
        fetcher().then(data2 => {
          setData(data2);
        });
      }, []);

      useEffect(() => {
        if (data && data["results"]) {
          const newHData = (data["results"] as Array<any>).map((item: { t: number, h: number, l:number }) => ({
            t: formatUnixTime(item.t), 
            h: item.h,
            l: item.l
          }));
          setHData(newHData);
        }
      }, [data]);

      if (!data) {
        return <p>Testing is working</p>; // Early return if data is null
      }

    return (
      
      console.log(hData),

      <>
        <h3 className="text-xl text-tremor-content font-bold  dark:text-dark-tremor-content">
          {data["ticker"]}
        </h3>
        <p className="mt-2 text-tremor-default font-medium">
          <span className="font-normal text-tremor-content dark:text-dark-tremor-content">
            Day
          </span>
        </p>
        <LineChart
          data={hData} 
          index="t"
          categories={["h","l"]}
          colors={["blue","red"]}
          valueFormatter={valueFormatter}
          showLegend={false}
          onValueChange={() => {}}
          className="mt-6 hidden h-96 sm:block"
        />
      </>
    );
  }