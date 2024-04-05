import { Card, Title } from "@tremor/react";

export default async function Component() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <main className="p-4">
            <div className="ml-2 h-6 w-16">
                <Title>
                    Title
                </Title>
            </div>
            <div className="my-4 p-4">
                <Card>
                    a
                </Card>
            </div>
            <div className="my-4 p-4">
                <Card>

                </Card>
            </div>
        </main>
    );
}