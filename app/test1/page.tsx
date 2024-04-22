'use client'

import { Card, Title, Text, TabGroup, TabList, Tab, TabPanel, TabPanels } from '@tremor/react';
import ApiFinhubCards from "../TheAPI/apifinhubcards";
import MarketstatusComponent from "../TheAPI/marketstatus";

interface Test {
    a1: number;
    a2: string;
    a3: boolean;
}

const Object = [

]

export default async function TestPage() {
            return (
            <main className="p-4 md:p-10 mx-auto max-w-6xl grid">
                <Card>
                <div className="flex flex-wrap justify-end gap-4">
                        <MarketstatusComponent />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                <ApiFinhubCards symbol="AAPL"/>
                <ApiFinhubCards symbol="GOOGL"/>
                <ApiFinhubCards symbol="AMZN"/>
                <ApiFinhubCards symbol="TSLA"/>
                <ApiFinhubCards symbol="KHC"/>
                <ApiFinhubCards symbol="T"/>
                <ApiFinhubCards symbol="BABA"/>
                <ApiFinhubCards symbol="MSFT"/>
                </div>
                </Card>
                
            </main>
        );
    
    
}