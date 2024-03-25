import Chart from "./chart"
import { sql } from "@vercel/postgres";
import { Card, Title, Text } from '@tremor/react';
import Search from "../search";
import UsersTable from "../table";

export default async function TestPage() {
    return (<main className="p-4 md:p-10 mx-auto max-w-7xl">
        <div>
            Page test
        </div>
        <Card>
            Allo
        </Card>
        <Chart />
    </main>);
}