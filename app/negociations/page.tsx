'use client'

import { Card, Title, Text, TabGroup, TabList, Tab, TabPanel, TabPanels } from '@tremor/react';
import ApiFinhubCards from "../TheAPI/apifinhubcards";
import MarketstatusComponent from "../TheAPI/marketstatus";
import { useState } from 'react';

export default function TestPage() {
    const [input, setInput] = useState('');
    const [symbols, setSymbols] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSymbols(prevSymbols => [...prevSymbols, input + Date.now()]);
        setInput('');
    };

    return (
        <main className="p-4 md:p-10 mx-auto max-w-6xl grid">
            <Card>
                <div className="flex flex-wrap justify-end gap-4">
                    <MarketstatusComponent />
                </div>
                <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Enter a symbol"
                        className="border border-2 rounded p-1"
                    />
                    <button type="submit" className="border border-3 rounded p-1">Search</button>
                </form>
                <div className="flex flex-wrap mt-4">
                    {symbols.map(symbol => (
                        <ApiFinhubCards key={symbol} symbol={symbol.toUpperCase()} />
                    ))}
                </div>
            </Card>
        </main>
    );
}