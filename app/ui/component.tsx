import { Card, Title } from "@tremor/react";

export default async function Component() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <main>
            <div>
                <Title>
                    Title
                </Title>
            </div>
            <div>
                <Card className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
                    a
                </Card>
            </div>
        </main>
    );
}