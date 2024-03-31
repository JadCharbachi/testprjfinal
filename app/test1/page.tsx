import Chart from "./chart"
import { Card, Title, Text, TabGroup, TabList, Tab, TabPanel, TabPanels } from '@tremor/react';
import { LineChartHero } from "./linechart";
//--------------------------------------------------------------------
import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.mDQEhT0lHximdZuUI62cUuNVTufo58i2);
//--------------------------------------------------------------------

interface Test {
    a1: number;
    a2: string;
    a3: boolean;
}

const Object = [

]

export default async function TestPage() {
    return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>
            Test
        </Title>
        <Card className="mt-4">
            <Title>
                Titre
            </Title>
            <Text className="my-4">
                Card
            </Text>
        </Card>
        <Card className="my-4">
            <TabGroup>
                <TabList variant="solid" defaultValue="1">
                    <Tab value="1">Chart</Tab>
                    <Tab value="2">Line Chart</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p className="mt-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            <Chart />
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <p className="mt-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                            <LineChartHero />
                        </p>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Card>
        
    </main>
);
    
    
}