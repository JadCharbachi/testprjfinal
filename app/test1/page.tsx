import Chart from "./chart"
import { sql } from "@vercel/postgres";
import { Card, Title, Text } from '@tremor/react';
import Search from "../search";
import UsersTable from "../table";
import { LineChartHero } from "./linechart";

interface Test {
    a1: number;
    a2: string;
    a3: boolean;
}

const Object = [

]

export default async function TestPage() {
    return (<main className="p-4 md:p-10 mx-auto max-w-7xl">
        <Title>
            Test
        </Title>
        <Card className="mt-4">
            <Title className="pb-5">
                Titre
            </Title>
            <Text className="my-4">
                Card
            </Text>
        </Card>
        <Card className="my-4">
            <LineChartHero />
        </Card>
        <Chart />
    </main>);
}