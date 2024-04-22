import { Card, Text, Title } from "@tremor/react";
import ApiFinhubCards from "./TheAPI/apifinhubcards";

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto">
      <Card>
        <Title className="my-4 text-center">
          SIMINANCE
        </Title>
        <Text>
          Recherches récentes
        </Text>
        <ApiFinhubCards symbol={''} />
      </Card>
    </main>
  );
}
