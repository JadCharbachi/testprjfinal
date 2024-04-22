'use client'

import { Card, Title } from '@tremor/react';
import React, { useEffect, useState } from 'react';

const apikey = 'coe8u09r01qjje1ujas0coe8u09r01qjje1ujasg';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
interface ApiFinhubCardsProps {
  symbol: string;
}


const ApiFinhubCards: React.FC<ApiFinhubCardsProps> = ({symbol}) => {
  const actualSymbol = symbol.slice(0, -13);
  const url1 = "https://finnhub.io/api/v1/quote?symbol=" + actualSymbol + "&token=" + apikey;
  const url2 = "https://finnhub.io/api/v1/search?q="+ actualSymbol +"&token=" + apikey; 

  const [data1, setData1] = useState<any>(null);
  const [loading1, setLoading1] = useState<boolean>(true);
  const [error1, setError1] = useState<string | null>(null);

  const [companyName, setCompanyName] = useState<string | null>(null);
  const [loading2, setLoading2] = useState<boolean>(true);
  const [error2, setError2] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
      setIsOpen(false);
  };

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response1 = await fetch(url1);
              const jsonData1 = await response1.json();
              setData1(jsonData1);
              setLoading1(false);
          } catch (error) {
              setError1('Error fetching data');
              setLoading1(false);
          }
      };

      fetchData();
  }, []);

  useEffect(() => {
    const fetchCompanyName = async () => {
        try {
            const response = await fetch(url2);
            const jsonData = await response.json();

            const resultsToCheck = jsonData.result.slice(0, jsonData.result.length > 30 ? 30 : jsonData.result.length);
            for (let company of resultsToCheck) {
                if (company.symbol === actualSymbol || company.displaySymbol === actualSymbol) {
                    setCompanyName(company.description);
                    break;
                }
            }
            setLoading2(false);
        } catch (error) {
            setError2('Error fetching data');
            setLoading2(false);
        }
    };

    fetchCompanyName();
}, [actualSymbol]);

  if (loading1 || loading2) {
      return <div>Loading...</div>;
  }

  if (error1 || error2) {
      return <div>{error1 || error2}</div>;
  }
    return (
      isOpen && (
        <div>
            {<Card className=' ml-0 mr-auto'>
            <Title className="text-tremor-title text-blue-800  dark:text-dark-tremor-title">{companyName?.toUpperCase()}</Title>
            <p className="text-sm text-gray-500">{actualSymbol.toUpperCase()}</p>
                <button onClick={handleClose} className="absolute top-0 right-0 m-2">X</button>
            <div className="flex items-center gap-4 ">
            <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong ">
              {data1['c']} USD
            </p>
            <div className='mt-1'>
              <span
                className={classNames(
                  data1['c'] > data1['pc']
                    ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                    : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                  'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset',
                )}
              >
                {data1['c'] > data1['pc'] ? '▲' : '▼'} {data1['dp']} %
              </span>
              </div>
            </div>
          </Card>}
        </div>
    ));
}


export default ApiFinhubCards;
