'use client'

import { Card, Title } from '@tremor/react';
import React, { useEffect, useState } from 'react';

const apikey = 'coe8u09r01qjje1ujas0coe8u09r01qjje1ujasg';
const symbol = 'KHC';
const url = "https://finnhub.io/api/v1/quote?symbol=" + symbol + "&token=" + apikey;

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const ApiFinhubCards: React.FC = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div>
            {<Card className='w-1/3 ml-0 mr-auto'>
                <Title className="text-tremor-title text-blue-800  dark:text-dark-tremor-title">{symbol}</Title>
            <div className="flex items-center gap-4 ">
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong ">
              {data['c']} USD
            </p>
            <div className='mt-1'>
              <span
                className={classNames(
                  data['c'] > data['pc']
                    ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                    : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                  'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset',
                )}
              >
                {data['c'] > data['pc'] ? '▲' : '▼'} {data['dp']} %
              </span>
              </div>
            </div>
          </Card>}
        </div>
    );
};

export default ApiFinhubCards;